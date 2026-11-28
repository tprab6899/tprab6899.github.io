#!/usr/bin/env python3
"""Build the live app from its source.

    python3 source/build.py            # writes app.js from source/Main.dc.html
    python3 source/build.py --check    # only checks that app.js matches the source

Main.dc.html is the design-canvas file the PainMap prototype is edited in. Its <x-dc> block is the
screen tree (turned into window.PM_TREE) and its data-dc-script block is the app logic (wrapped in
window.PM_MAKE). index.html, runtime.js and pm3d-viewer.js are edited directly, not built.
"""
import html
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(HERE, 'Main.dc.html')
OUT = os.path.join(ROOT, 'app.js')

VOID = {'input', 'img', 'br', 'hr', 'meta', 'link', 'source', 'wbr', 'area', 'col', 'embed', 'param', 'track'}
TAG = re.compile(r'<(/?)([A-Za-z][\w:.-]*)((?:\s+[^\s=>/]+(?:="[^"]*")?)*)\s*(/?)>')
ATTR = re.compile(r'([^\s=>/]+)(?:="([^"]*)")?')
# The site starts with Premium off during the pilot.
DEFAULT_OVERRIDES = {'startPremium': False}


def parse_tree(markup):
    """Parse the template into the {"t","a","c"} tree the runtime renders. Whitespace-only text is ' '."""
    root = {'t': '#root', 'a': [], 'c': []}
    stack = [root]
    pos = 0

    def add_text(txt):
        if not txt:
            return
        stack[-1]['c'].append(' ' if txt.strip() == '' else html.unescape(txt))

    for m in TAG.finditer(markup):
        add_text(markup[pos:m.start()])
        pos = m.end()
        closing, name, attrs, selfclose = m.group(1), m.group(2), m.group(3), m.group(4)
        if closing:
            if stack[-1]['t'] != name:
                raise SystemExit('Mismatched </%s> near offset %d (open: %s)' % (name, m.start(), stack[-1]['t']))
            stack.pop()
            continue
        node = {'t': name, 'a': [[k, html.unescape(v or '')] for k, v in ATTR.findall(attrs)], 'c': []}
        stack[-1]['c'].append(node)
        if not selfclose and name not in VOID:
            stack.append(node)
    add_text(markup[pos:])
    if len(stack) != 1:
        raise SystemExit('Unclosed <%s>' % stack[-1]['t'])
    return root['c']


def build():
    src = open(SRC, encoding='utf-8').read()
    m = re.search(r'<x-dc>(.*?)</x-dc>', src, re.S)
    body = re.sub(r'<helmet>.*?</helmet>', '', m.group(1), count=1, flags=re.S)
    body = body[body.find('<'):body.rfind('>') + 1]  # the tree starts and ends with ' ' around the root
    tree = [' '] + parse_tree(body) + [' ']
    sm = re.search(r"<script type=\"text/x-dc\" data-dc-script data-props='([^']*)'>(.*?)</script>", src, re.S)
    props = json.loads(html.unescape(sm.group(1)))
    defaults = {k: v.get('default') for k, v in props.items() if not k.startswith('$')}
    defaults.update(DEFAULT_OVERRIDES)
    logic = sm.group(2)
    return ('// PainMap prototype: app logic and screens.\n'
            'window.PM_TREE = ' + json.dumps(tree, ensure_ascii=False, separators=(',', ':')) + ';\n'
            'window.PM_DEFAULTS = ' + json.dumps(defaults, ensure_ascii=False, separators=(',', ':')) + ';\n'
            'window.PM_MAKE = function (DCLogic) {\n' + logic + '\nreturn Component;\n};\n')


if __name__ == '__main__':
    out = build()
    if '--check' in sys.argv:
        same = open(OUT, encoding='utf-8').read() == out
        print('app.js matches the source' if same else 'app.js differs from the source')
        sys.exit(0 if same else 1)
    open(OUT, 'w', encoding='utf-8').write(out)
    print('Wrote app.js (%d bytes)' % len(out))
