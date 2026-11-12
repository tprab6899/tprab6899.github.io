// PainMap prototype: app logic and screens.
window.PM_TREE = [" ",{"t":"div","a":[["class","pm-root {{themeClass}}"],["style","width: {{rootW}}; max-width: {{rootMaxW}}; height: {{rootH}}; margin: 0 auto; padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); zoom: {{rootZoom}}; box-sizing: border-box; background: var(--bg); color: var(--ink); font-family: Manrope, system-ui, sans-serif; display: flex; flex-direction: column; overflow: hidden; position: relative"]],"c":[" ",{"t":"sc-if","a":[["value","{{hasToast}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["role","status"],["style","position: absolute; left: 50%; top: 16px; transform: translateX(-50%); z-index: 10; margin: 0; padding: 10px 16px; border-radius: 999px; background: #1F2A30; color: #FFFFFF; font-size: 14px; font-weight: 700; white-space: nowrap; box-shadow: 0 6px 16px rgba(0,0,0,0.25)"]],"c":["{{toast}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{showConsent}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["role","dialog"],["aria-labelledby","consent-h"],["style","position: absolute; left: 12px; right: 12px; bottom: 16px; z-index: 20; background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.25)"]],"c":[" ",{"t":"h2","a":[["id","consent-h"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{lg.bannerH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2)"]],"c":["{{lg.bannerP}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{consentAll}}"],["style","min-height: 44px; padding: 0 6px; border-radius: 12px; border: 2px solid var(--ink); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{lg.acceptAll}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{consentEssential}}"],["style","min-height: 44px; padding: 0 6px; border-radius: 12px; border: 2px solid var(--ink); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{lg.essential}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{consentChoose}}"],["style","min-height: 44px; padding: 0 6px; border-radius: 12px; border: 2px solid var(--ink); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{lg.choose}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{openLegalPolicies}}"],["style","align-self: flex-start; padding: 0; min-height: 28px; border: 0; background: none; color: var(--tealtext); font-size: 12px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lg.policyLinks}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onWelcome}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 20px 24px; display: flex; flex-direction: column; gap: 18px; background: var(--stage)"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{t.k17}}"],["style","display: flex; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{langChips}}"],["as","lg"],["hint-placeholder-count","2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{lg.pressed}}"],["onClick","{{lg.pick}}"],["style","min-height: 36px; padding: 0 12px; border-radius: 999px; border: {{lg.border}}; background: {{lg.bg}}; color: {{lg.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{lg.label}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{introSlide}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--goldtext)"]],"c":["PainMap"]}," ",{"t":"h1","a":[["style","margin: 0; font-family: 'Source Serif 4', Georgia, serif; font-size: 30px; line-height: 1.12; font-weight: 700; color: var(--stageink)"]],"c":["{{introHead}}"]}," ",{"t":"ul","a":[["style","margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{introFeatures}}"],["as","ft"],["hint-placeholder-count","3"]],"c":[" ",{"t":"li","a":[["style","display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; border-radius: 14px; background: var(--card)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px; background: var(--tealsoft); color: {{accent}}; display: flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"path","a":[["d","{{ft.icon}}"]],"c":[]}]}]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[{"t":"span","a":[["style","font-size: 16px; font-weight: 800; color: var(--stageink)"]],"c":["{{ft.title}}"]},{"t":"span","a":[["style","font-size: 13px; line-height: 1.45; color: var(--stagemute)"]],"c":["{{ft.text}}"]}]}," "]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{introSafety}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"h2","a":[["style","margin: 4px 0 0; font-family: 'Source Serif 4', Georgia, serif; font-size: 22px; line-height: 1.15; font-weight: 700; color: var(--stageink)"]],"c":["{{t.inSafeH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--stagemute)"]],"c":["{{t.inSafeP}}"]}," ",{"t":"ul","a":[["style","margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"li","a":[["style","display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: var(--card)"]],"c":[{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 26px; height: 26px; border-radius: 999px; background: var(--tealsoft); color: var(--tealtext); font-weight: 800; display: flex; align-items: center; justify-content: center"]],"c":["i"]},{"t":"span","a":[["style","font-size: 14px; line-height: 1.45"]],"c":[{"t":"strong","a":[],"c":["{{t.inS1h}}"]}," {{t.inS1p}}"]}]}," ",{"t":"li","a":[["style","display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: var(--dangerbg)"]],"c":[{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 26px; height: 26px; border-radius: 999px; background: #C62828; color: #FFFFFF; font-weight: 800; display: flex; align-items: center; justify-content: center"]],"c":["!"]},{"t":"span","a":[["style","font-size: 14px; line-height: 1.45; color: var(--dangertext)"]],"c":[{"t":"strong","a":[],"c":["{{t.inS2h}}"]}," {{t.inS2p}}"]}]}," ",{"t":"li","a":[["style","display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: var(--card)"]],"c":[{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 26px; height: 26px; border-radius: 999px; background: var(--tealsoft); color: var(--tealtext); font-weight: 800; display: flex; align-items: center; justify-content: center"]],"c":["✓"]},{"t":"span","a":[["style","font-size: 14px; line-height: 1.45"]],"c":[{"t":"strong","a":[],"c":["{{t.inS3h}}"]}," {{t.inS3p}}"]}]}," "]}," ",{"t":"p","a":[["style","margin: 0; padding: 14px; border-radius: 14px; border: 2px solid {{accent}}; background: var(--card); font-size: 15px; line-height: 1.45; font-weight: 700; color: var(--stageink)"]],"c":["{{t.inAgree}}"]}," "]}," "]}," ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.gen}}"]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 24px 24px; background: var(--stage); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; gap: 10px"]],"c":[" ",{"t":"sc-if","a":[["value","{{introCanBack}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{introBack}}"],["style","flex: 0 0 auto; min-height: 54px; padding: 0 18px; border: 1px solid var(--stageline); border-radius: 16px; background: var(--card); color: var(--stageink); font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{t.inBack}}"]}," "]}," ",{"t":"button","a":[["type","button"],["disabled","{{introNextOff}}"],["onClick","{{welcomeNext}}"],["style","flex: 1 1 auto; min-height: 54px; border: 0; border-radius: 16px; background: {{introNextBg}}; color: {{introNextFg}}; font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{welcomeNextText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{introFirst}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{welcomeSignIn}}"],["style","min-height: 40px; border: 0; background: transparent; color: var(--stageink); font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{t.k2}}"]}," ",{"t":"sc-if","a":[["value","{{wlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openWaitlist}}"],["style","min-height: 48px; border: 2px solid {{accent}}; border-radius: 16px; background: var(--card); color: var(--tealtext); font-size: 15px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px"]],"c":[{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.3"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"],["style","flex: 0 0 auto"]],"c":[{"t":"path","a":[["d","M4 6h16v12H4z"]],"c":[]},{"t":"path","a":[["d","M4 7l8 6 8-6"]],"c":[]}]},"{{wlTitle}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onAccount}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 24px 20px; display: flex; flex-direction: column; gap: 16px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted)"]],"c":["PainMap"]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 28px; line-height: 1.15; font-weight: 800"]],"c":["{{t.k3}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.k4}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{signedIn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 12px 14px; border-radius: 14px; background: var(--okbg); color: var(--oktext); font-size: 14px; font-weight: 700"]],"c":["{{accountText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{signOut}}"],["style","min-height: 48px; border-radius: 14px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{t.k5}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{notSignedIn}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","background: var(--card); border: 1px solid var(--line2); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"label","a":[["style","display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.45; cursor: pointer"]],"c":[" ",{"t":"span","a":[["style","position: relative; flex: 0 0 auto; width: 24px; height: 24px"]],"c":[{"t":"input","a":[["type","checkbox"],["checked","{{termsOk}}"],["onChange","{{toggleTerms}}"],["style","position: absolute; inset: 0; width: 24px; height: 24px; margin: 0; opacity: 0; cursor: pointer"]],"c":[]},{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; inset: 0; border-radius: 7px; border: 2px solid {{tbTerms.bd}}; background: {{tbTerms.bg}}; display: flex; align-items: center; justify-content: center; pointer-events: none"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["style","opacity: {{tbTerms.tk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}]}," ",{"t":"span","a":[],"c":[{"t":"strong","a":[],"c":["{{t.lcAgree}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openTerms}}"],["style","padding: 0; border: 0; background: none; color: var(--tealtext); font: inherit; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{t.lcTerms}}"]}," {{t.lcAnd}} ",{"t":"button","a":[["type","button"],["onClick","{{openPrivacy}}"],["style","padding: 0; border: 0; background: none; color: var(--tealtext); font: inherit; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{t.lcPrivacy}}"]}," ",{"t":"span","a":[["style","color: var(--dangertext)"]],"c":["({{t.lcReq}})"]}]}," "]}," ",{"t":"label","a":[["style","display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.45; cursor: pointer"]],"c":[" ",{"t":"span","a":[["style","position: relative; flex: 0 0 auto; width: 24px; height: 24px"]],"c":[{"t":"input","a":[["type","checkbox"],["checked","{{analyticsOk}}"],["onChange","{{toggleAnalytics}}"],["style","position: absolute; inset: 0; width: 24px; height: 24px; margin: 0; opacity: 0; cursor: pointer"]],"c":[]},{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; inset: 0; border-radius: 7px; border: 2px solid {{tbStats.bd}}; background: {{tbStats.bg}}; display: flex; align-items: center; justify-content: center; pointer-events: none"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["style","opacity: {{tbStats.tk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}]}," ",{"t":"span","a":[],"c":["{{t.lcStats}} ",{"t":"span","a":[["style","color: var(--muted)"]],"c":["({{t.lcOpt}})"]}]}," "]}," ",{"t":"label","a":[["style","display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.45; cursor: pointer"]],"c":[" ",{"t":"span","a":[["style","position: relative; flex: 0 0 auto; width: 24px; height: 24px"]],"c":[{"t":"input","a":[["type","checkbox"],["checked","{{marketingOk}}"],["onChange","{{toggleMarketing}}"],["style","position: absolute; inset: 0; width: 24px; height: 24px; margin: 0; opacity: 0; cursor: pointer"]],"c":[]},{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; inset: 0; border-radius: 7px; border: 2px solid {{tbMail.bd}}; background: {{tbMail.bg}}; display: flex; align-items: center; justify-content: center; pointer-events: none"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["style","opacity: {{tbMail.tk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}]}," ",{"t":"span","a":[],"c":["{{t.lcMail}} ",{"t":"span","a":[["style","color: var(--muted)"]],"c":["({{t.lcOpt}})"]}]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{signApple}}"],["style","min-height: 52px; border-radius: 14px; border: 0; background: #000000; color: #FFFFFF; font-size: 16px; font-weight: 700; cursor: pointer"]],"c":["{{t.k6}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{signGoogle}}"],["style","min-height: 52px; border-radius: 14px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 16px; font-weight: 700; cursor: pointer"]],"c":["{{t.k7}}"]}," ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 13px"]],"c":[{"t":"span","a":[["style","flex: 1 1 auto; height: 1px; background: var(--line)"]],"c":[]},"{{t.lcOr}}",{"t":"span","a":[["style","flex: 1 1 auto; height: 1px; background: var(--line)"]],"c":[]}]}," ",{"t":"label","a":[["for","acct-email"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k8}}"]}," ",{"t":"input","a":[["id","acct-email"],["type","email"],["autocomplete","email"],["value","{{accountEmail}}"],["onChange","{{setAccountEmail}}"],["placeholder","you@example.com"],["style","min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); font-family: inherit; font-size: 16px"]],"c":[]}," ",{"t":"button","a":[["type","button"],["onClick","{{signEmail}}"],["style","min-height: 52px; border-radius: 14px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{t.k9}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{t.k10}}"]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px 24px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{accountSkip}}"],["style","width: 100%; min-height: 48px; border: 0; background: transparent; color: var(--ink); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{t.k11}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onWaitlist}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{wlBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{wlTitle}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"sc-if","a":[["value","{{wlSent}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["role","status"],["style","background: var(--card); border-radius: 18px; padding: 24px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","width: 52px; height: 52px; border-radius: 999px; background: var(--tealsoft); color: var(--tealtext); display: flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","28"],["height","28"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.6"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}," ",{"t":"h2","a":[["style","margin: 0; font-family: 'Source Serif 4', Georgia, serif; font-size: 26px; font-weight: 700"]],"c":["{{wlDoneH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"]],"c":["{{wlDoneP}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{wlBack}}"],["style","min-height: 48px; padding: 0 18px; border-radius: 14px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{wlDoneBtn}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wlNotSent}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"]],"c":["{{wlIntro}}"]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","wl-name"],["style","font-size: 14px; font-weight: 800"]],"c":["{{wlNameL}}"]}," ",{"t":"input","a":[["id","wl-name"],["type","text"],["autocomplete","given-name"],["maxlength","60"],["value","{{wlName}}"],["onChange","{{wlSetName}}"],["style","width: 100%; box-sizing: border-box; min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 16px"]],"c":[]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","wl-email"],["style","font-size: 14px; font-weight: 800"]],"c":["{{wlEmailL}}"]}," ",{"t":"input","a":[["id","wl-email"],["type","email"],["inputmode","email"],["autocomplete","email"],["maxlength","120"],["placeholder","you@example.com"],["value","{{wlEmail}}"],["onChange","{{wlSetEmail}}"],["style","width: 100%; box-sizing: border-box; min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 16px"]],"c":[]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","wl-prov"],["style","font-size: 14px; font-weight: 800"]],"c":["{{wlProvL}}"]}," ",{"t":"select","a":[["id","wl-prov"],["value","{{wlProv}}"],["onChange","{{wlSetProv}}"],["style","width: 100%; box-sizing: border-box; min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 16px"]],"c":[" ",{"t":"option","a":[["value",""]],"c":["{{wlChoose}}"]}," ",{"t":"sc-for","a":[["list","{{wlProvs}}"],["as","pv"],["hint-placeholder-count","14"]],"c":[{"t":"option","a":[["value","{{pv.id}}"]],"c":["{{pv.label}}"]}]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","wl-pain"],["style","font-size: 14px; font-weight: 800"]],"c":["{{wlPainL}}"]}," ",{"t":"input","a":[["id","wl-pain"],["type","text"],["maxlength","120"],["placeholder","{{wlPainPh}}"],["value","{{wlPain}}"],["onChange","{{wlSetPain}}"],["style","width: 100%; box-sizing: border-box; min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 16px"]],"c":[]}," "]}," ",{"t":"button","a":[["type","button"],["role","checkbox"],["aria-checked","{{wlTestOn}}"],["onClick","{{wlToggleTest}}"],["style","display: flex; align-items: flex-start; gap: 12px; min-height: 44px; padding: 4px 0; border: 0; background: transparent; color: var(--ink); font-family: inherit; font-size: 15px; line-height: 1.4; text-align: left; cursor: pointer"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 24px; height: 24px; border-radius: 7px; box-sizing: border-box; border: 2px solid {{wlTestBd}}; background: {{wlTestBg}}; display: flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.6"],["stroke-linecap","round"],["stroke-linejoin","round"],["opacity","{{wlTestTk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}," ",{"t":"span","a":[],"c":["{{wlTestL}}"]}," "]}," ",{"t":"button","a":[["type","button"],["role","checkbox"],["aria-checked","{{wlConsentOn}}"],["onClick","{{wlToggleConsent}}"],["style","display: flex; align-items: flex-start; gap: 12px; min-height: 44px; padding: 4px 0; border: 0; background: transparent; color: var(--ink); font-family: inherit; font-size: 15px; line-height: 1.4; font-weight: 700; text-align: left; cursor: pointer"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 24px; height: 24px; border-radius: 7px; box-sizing: border-box; border: 2px solid {{wlConsentBd}}; background: {{wlConsentBg}}; display: flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.6"],["stroke-linecap","round"],["stroke-linejoin","round"],["opacity","{{wlConsentTk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}," ",{"t":"span","a":[],"c":["{{wlConsentL}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{wlPrivacy}}"]}," ",{"t":"sc-if","a":[["value","{{wlErr}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["role","alert"],["style","margin: 0; padding: 12px 14px; border-radius: 12px; background: var(--dangerbg); color: var(--ink); font-size: 14px; line-height: 1.45; font-weight: 700"]],"c":["{{wlErrText}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wlNotSent}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px 24px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["disabled","{{wlOff}}"],["onClick","{{wlSubmit}}"],["style","width: 100%; min-height: 54px; border: 0; border-radius: 16px; font-size: 16px; font-weight: 800; cursor: pointer; background: {{wlBtnBg}}; color: {{wlBtnFg}}"]],"c":["{{wlBtnText}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onSettings}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{settingsBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{t.k12}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"sc-if","a":[["value","{{wlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--tealsoft); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800; color: var(--tealtext)"]],"c":["{{wlCardH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":["{{wlCardP}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openWaitlist}}"],["style","align-self: flex-start; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{wlTitle}}"]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k13}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; color: var(--ink2)"]],"c":["{{accountText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openAccount}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k14}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openPaywall}}"],["style","align-self: flex-start; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 0; background: #2A2118; color: #F5D98B; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{premiumBadge}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{restorePurchases}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcRestore}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{manageSub}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcManage}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{noDelAcctAsk}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{askDelAcct}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--dangerline); background: var(--card); color: var(--dangertext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.delAcct}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{delAcctAsk}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","alertdialog"],["aria-labelledby","del-acct-h"],["style","padding: 12px; border-radius: 12px; background: var(--dangerbg); display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["id","del-acct-h"],["style","margin: 0; font-size: 14px; font-weight: 700; color: var(--dangertext)"]],"c":["{{t.delAcctWarn}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{confirmDelAcct}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 0; background: #9A1B0B; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.delAcctYes}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{cancelDelAcct}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k27}}"]}," "]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k15}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; color: var(--ink2)"]],"c":["{{profileText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{editProfile}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k16}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k105}}"],["style","display: none"]],"c":[" ",{"t":"sc-for","a":[["list","{{unitChips}}"],["as","u"],["hint-placeholder-count","2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{u.pressed}}"],["onClick","{{u.pick}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: {{u.border}}; background: {{u.bg}}; color: {{u.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{u.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k17}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k17}}"],["style","display: flex; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{langChips}}"],["as","lg"],["hint-placeholder-count","2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{lg.pressed}}"],["onClick","{{lg.pick}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: {{lg.border}}; background: {{lg.bg}}; color: {{lg.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{lg.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.appearance}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.appearance}}"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{themeChips}}"],["as","th"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{th.pressed}}"],["onClick","{{th.pick}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: {{th.border}}; background: {{th.bg}}; color: {{th.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{th.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k18}}"]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-big"],["style","font-size: 15px; font-weight: 700"]],"c":["{{t.k19}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{bigOn}}"],["aria-labelledby","lbl-big"],["onClick","{{toggleBig}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{bigBg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{bigKnob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-motion"],["style","font-size: 15px; font-weight: 700"]],"c":["{{t.k20}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{motionOn}}"],["aria-labelledby","lbl-motion"],["onClick","{{toggleMotion}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{motionBg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{motionKnob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{hlH}}"]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"span","a":[["id","lbl-health"],["style","font-size: 15px; font-weight: 800"]],"c":["{{hlLabel}}"]}," ",{"t":"span","a":[["style","font-size: 12px; line-height: 1.4; color: var(--muted)"]],"c":["{{hlSub}}"]}," "]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{hlSw.on}}"],["aria-labelledby","lbl-health"],["onClick","{{hlToggle}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{hlSw.bg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{hlSw.knob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," ",{"t":"sc-if","a":[["value","{{hlAsk}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","dialog"],["aria-labelledby","hl-ask"],["style","padding: 12px; border-radius: 14px; background: var(--tealsoft); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["id","hl-ask"],["style","margin: 0; font-size: 15px; font-weight: 800; color: var(--tealtext)"]],"c":["{{hlAskH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink)"]],"c":["{{hlAskP}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{hlYes}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; border: 0; background: {{accent}}; color: #FFFFFF"]],"c":["{{hlAllow}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{hlCancel}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; border: 1px solid var(--line); background: var(--card); color: var(--ink)"]],"c":["{{hlNo}}"]}," "]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k21}}"]}," ",{"t":"h3","a":[["style","margin: 4px 0 0; font-size: 14px; font-weight: 800"]],"c":["{{t.collectH}}"]}," ",{"t":"ul","a":[["style","margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.5; color: var(--ink2); display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"li","a":[],"c":["{{t.c1}}"]},{"t":"li","a":[],"c":["{{t.c2}}"]},{"t":"li","a":[],"c":["{{t.c3}}"]},{"t":"li","a":[],"c":["{{t.c4}}"]},{"t":"li","a":[],"c":["{{t.c5}}"]},{"t":"li","a":[],"c":[{"t":"strong","a":[],"c":["{{t.c6}}"]}]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.k22}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{exportData}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k23}}"]}," ",{"t":"sc-if","a":[["value","{{noDeleteAsk}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{askDelete}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--dangerline); background: var(--card); color: var(--dangertext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k24}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{deleteAsk}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","alertdialog"],["aria-label","{{t.k106}}"],["style","padding: 12px; border-radius: 12px; background: var(--dangerbg); display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; font-weight: 700; color: var(--dangertext)"]],"c":["{{t.k25}}"]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{confirmDelete}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 0; background: #9A1B0B; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k26}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{cancelDelete}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k27}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{t.k28}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.lcHelpH}}"]}," ",{"t":"sc-if","a":[["value","{{fbClosed}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openBug}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcBug}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openIdea}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcIdea}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{fbIsOpen}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 8px; padding: 12px; border-radius: 12px; background: var(--soft)"]],"c":[" ",{"t":"label","a":[["for","fb-text"],["style","font-size: 14px; font-weight: 800"]],"c":["{{fbLabel}}"]}," ",{"t":"textarea","a":[["id","fb-text"],["rows","4"],["value","{{fbText}}"],["onChange","{{setFbText}}"],["placeholder","{{fbPlaceholder}}"],["style","padding: 10px 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px; resize: vertical"]],"c":[]}," ",{"t":"label","a":[["style","display: flex; gap: 8px; align-items: center; font-size: 13px; color: var(--ink2); cursor: pointer"]],"c":[" ",{"t":"span","a":[["style","position: relative; flex: 0 0 auto; width: 22px; height: 22px"]],"c":[{"t":"input","a":[["type","checkbox"],["checked","{{fbDevice}}"],["onChange","{{toggleFbDevice}}"],["style","position: absolute; inset: 0; width: 22px; height: 22px; margin: 0; opacity: 0; cursor: pointer"]],"c":[]},{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; inset: 0; border-radius: 7px; border: 2px solid {{tbDev.bd}}; background: {{tbDev.bg}}; display: flex; align-items: center; justify-content: center; pointer-events: none"]],"c":[{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["style","opacity: {{tbDev.tk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}]},"{{t.lcDevice}} "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{t.lcNoHealth}}"]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{sendFeedback}}"],["style","min-height: 40px; padding: 0 16px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcSend}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{closeFeedback}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k27}}"]}," "]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{openSources}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcSourcesBtn}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{lg.hubH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--ink2)"]],"c":["{{lg.hubP}}"]}," ",{"t":"sc-for","a":[["list","{{legalLinks}}"],["as","ll"],["hint-placeholder-count","10"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{ll.open}}"],["style","display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 44px; padding: 0 4px; border: 0; border-bottom: 1px solid var(--line2); background: transparent; color: var(--ink); font-size: 14px; font-weight: 700; text-align: left; cursor: pointer"]],"c":["{{ll.label}}",{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M9 6l6 6-6 6"]],"c":[]}]}]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k29}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.k30}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{replayIntro}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.inReplay}}"]}," ",{"t":"details","a":[["style","font-size: 13px; color: var(--ink2)"]],"c":[{"t":"summary","a":[["style","cursor: pointer; font-weight: 800; color: var(--ink); min-height: 32px"]],"c":["{{t.newH}}"]}," ",{"t":"p","a":[["style","margin: 6px 0 2px; font-weight: 800"]],"c":["{{t.new1}}"]}," ",{"t":"ul","a":[["style","margin: 0; padding-left: 18px; line-height: 1.5"]],"c":[{"t":"li","a":[],"c":["{{t.new2}}"]},{"t":"li","a":[],"c":["{{t.new3}}"]},{"t":"li","a":[],"c":["{{t.new4}}"]}]}," "]}," ",{"t":"details","a":[["style","font-size: 13px; color: var(--ink2)"]],"c":[{"t":"summary","a":[["style","cursor: pointer; font-weight: 800; color: var(--ink); min-height: 32px"]],"c":["{{t.a11yH}}"]}," ",{"t":"p","a":[["style","margin: 6px 0 0; line-height: 1.5"]],"c":["{{t.a11yP}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{on360}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 10px 12px 4px"]],"c":[" ",{"t":"sc-if","a":[["value","{{b3NotFind}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{back360}}"],["style","width: 44px; height: 44px; flex: 0 0 auto; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," "]}," ",{"t":"h1","a":[["style","flex: 1 1 auto; margin: 0 0 0 4px; font-size: 18px; line-height: 1.2; font-weight: 800"]],"c":["{{t.b3Title}}"]}," ",{"t":"sc-if","a":[["value","{{b3AsFind}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openPaywall}}"],["style","flex: 0 0 auto; min-height: 32px; padding: 0 10px; border-radius: 999px; border: 0; background: #2A2118; color: #F5D98B; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{premiumBadge}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.k108}}"],["onClick","{{openSettings}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"]],"c":[]}]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 4px 16px 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"sc-if","a":[["value","{{wlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openWaitlist}}"],["style","flex: 0 0 auto; width: 100%; min-height: 48px; padding: 0 14px; border-radius: 14px; border: 0; background: {{accent}}; color: #FFFFFF; cursor: pointer; display: flex; align-items: center; gap: 10px; text-align: left"]],"c":[{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.3"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"],["style","flex: 0 0 auto"]],"c":[{"t":"path","a":[["d","M4 6h16v12H4z"]],"c":[]},{"t":"path","a":[["d","M4 7l8 6 8-6"]],"c":[]}]},{"t":"span","a":[["style","flex: 1 1 auto; min-width: 0; font-size: 15px; font-weight: 800"]],"c":["{{wlTitle}}"]},{"t":"span","a":[["style","flex: 0 0 auto; font-size: 13px; font-weight: 700; opacity: 0.9"]],"c":["{{wlEarly}} →"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{b3FocusOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["aria-live","polite"],["style","padding: 12px 14px; border-radius: 14px; background: #E8EFFF; border: 1px solid #1463FF; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; font-weight: 800; color: #0B2E7A"]],"c":["{{b3FocusText}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{b3FocusBack}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 0; background: #1463FF; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{b3FocusBackText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3FocusDone}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{b3FocusDoneText}}"]}," "]}," "]}," "]}," ",{"t":"div","a":[["role","note"],["data-nd","find3d"],["style","display: flex; gap: 8px; align-items: flex-start; padding: 8px 12px; border-radius: 12px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12.5px; line-height: 1.4; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.find}}"]}," "]}," ",{"t":"div","a":[["style","position: relative; flex: 0 0 auto; padding: 30px 0 26px; border: 1px solid var(--stageline); border-radius: 18px; overflow: hidden; background: radial-gradient(ellipse at 50% 42%, #FFFFFF 0%, #F6F1EA 75%, #EDE4D6 100%)"]],"c":[" ",{"t":"p","a":[["style","position: absolute; left: 10px; top: 8px; margin: 0; padding: 3px 9px; border-radius: 999px; background: #2A2118; color: #FFFFFF; font-size: 11px; font-weight: 800; z-index: 1"]],"c":["{{b3ViewName}} · {{b3AngleText}}"]}," ",{"t":"div","a":[["style","position: relative; width: 100%; max-width: 420px; margin: 0 auto; aspect-ratio: 356 / 400"]],"c":[" ",{"t":"canvas","a":[["ref","{{b3CanvasRef}}"],["tabindex","0"],["aria-label","{{b3Alt3D}}"],["style","position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: {{b3CanvasDisplay}}; touch-action: none; cursor: grab; outline-offset: -3px"]],"c":[]}," ",{"t":"sc-if","a":[["value","{{b3Flat}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"svg","a":[["viewBox","-178 -6 356 400"],["role","img"],["aria-label","{{b3Alt}}"],["style","position: absolute; left: 0; top: 0; width: 100%; height: 100%"]],"c":[" ",{"t":"ellipse","a":[["cx","0"],["cy","394"],["rx","46"],["ry","6"],["fill","#2A2118"],["opacity","0.12"]],"c":[]}," ",{"t":"path","a":[["d","{{b3Halo}}"],["fill","#E9B9A4"],["opacity","0.55"],["stroke","#E9B9A4"],["stroke-width","1.2"]],"c":[]}," ",{"t":"defs","a":[],"c":[" ",{"t":"filter","a":[["id","b3-soft"],["x","-5%"],["y","-5%"],["width","110%"],["height","110%"],["color-interpolation-filters","sRGB"]],"c":[" ",{"t":"feGaussianBlur","a":[["in","SourceGraphic"],["stdDeviation","{{b3Blur}}"],["result","soft"]],"c":[]}," ",{"t":"feComposite","a":[["in","soft"],["in2","SourceAlpha"],["operator","in"]],"c":[]}," "]}," "]}," ",{"t":"g","a":[["filter","url(#b3-soft)"]],"c":[" ",{"t":"sc-for","a":[["list","{{b3Faces}}"],["as","fc"],["hint-placeholder-count","40"]],"c":[" ",{"t":"path","a":[["d","{{fc.d}}"],["fill","{{fc.fill}}"],["stroke","{{fc.stroke}}"],["stroke-width","{{fc.sw}}"],["stroke-opacity","{{fc.so}}"],["stroke-linejoin","round"],["stroke-linecap","round"]],"c":[]}," "]}," "]}," ",{"t":"sc-for","a":[["list","{{b3Labels}}"],["as","lb"],["hint-placeholder-count","10"]],"c":[" ",{"t":"text","a":[["x","{{lb.tx}}"],["y","{{lb.ty}}"],["text-anchor","{{lb.anchor}}"],["font-size","{{lb.fs}}"],["font-family","Manrope, sans-serif"],["font-weight","800"],["fill","#2A2118"],["stroke","#FFFFFF"],["stroke-width","{{lb.halo}}"],["stroke-opacity","0.9"],["stroke-linejoin","round"],["paint-order","stroke"]],"c":["{{lb.text}}"]}," "]}," ",{"t":"sc-for","a":[["list","{{b3Pins}}"],["as","pn"],["hint-placeholder-count","1"]],"c":[" ",{"t":"g","a":[["opacity","{{pn.op}}"]],"c":[" ",{"t":"circle","a":[["cx","{{pn.x}}"],["cy","{{pn.y}}"],["r","6.5"],["fill","rgba(255,255,255,0.6)"],["stroke","#2A2118"],["stroke-width","1.6"],["stroke-dasharray","{{pn.dash}}"]],"c":[]}," ",{"t":"circle","a":[["cx","{{pn.x}}"],["cy","{{pn.y}}"],["r","8.4"],["fill","none"],["stroke","{{coral}}"],["stroke-width","1.8"],["stroke-dasharray","{{pn.dash}}"]],"c":[]}," ",{"t":"circle","a":[["cx","{{pn.x}}"],["cy","{{pn.y}}"],["r","1.8"],["fill","{{coral}}"]],"c":[]}," "]}," "]}," "]}," ",{"t":"div","a":[["aria-hidden","true"],["onPointerDown","{{b3Down}}"],["onPointerMove","{{b3Move}}"],["onPointerUp","{{b3Up}}"],["onPointerCancel","{{b3Cancel}}"],["style","position: absolute; left: 0; top: 0; width: 100%; height: 100%; touch-action: none; cursor: {{b3Cursor}}"]],"c":[]}," "]}," ",{"t":"sc-if","a":[["value","{{b3TourOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","dialog"],["aria-label","{{b3TourCount}}"],["style","position: absolute; left: 10px; right: 10px; bottom: 10px; padding: 12px 14px; border-radius: 16px; background: rgba(31,42,48,0.94); color: #FFFFFF; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 6px 20px rgba(0,0,0,0.25)"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"span","a":[["style","font-size: 12px; font-weight: 800; color: #9FD8D6"]],"c":["{{b3TourHead}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3TourSkip}}"],["style","min-height: 32px; padding: 0 10px; border: 0; border-radius: 999px; background: transparent; color: #FFFFFF; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{b3TourSkipText}}"]}," "]}," ",{"t":"ul","a":[["style","margin: 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 4px; font-size: 14px; line-height: 1.4; font-weight: 700"]],"c":[" ",{"t":"sc-for","a":[["list","{{b3TourTips}}"],["as","tp"],["hint-placeholder-count","3"]],"c":[{"t":"li","a":[],"c":["{{tp.text}}"]}]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3TourNext}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; align-self: flex-end; border: 0; background: #FFFFFF; color: #1F2A30"]],"c":["{{b3TourNextText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{b3Loading}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","status"],["style","position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; pointer-events: none"]],"c":[" ",{"t":"svg","a":[["width","40"],["height","40"],["viewBox","0 0 40 40"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","20"],["cy","20"],["r","16"],["fill","none"],["stroke","var(--line)"],["stroke-width","4"]],"c":[]},{"t":"path","a":[["d","M20 4a16 16 0 0 1 16 16"],["fill","none"],["stroke","{{accent}}"],["stroke-width","4"],["stroke-linecap","round"]],"c":[{"t":"animateTransform","a":[["attributeName","transform"],["type","rotate"],["from","0 20 20"],["to","360 20 20"],["dur","0.9s"],["repeatCount","indefinite"]],"c":[]}]}]}," ",{"t":"span","a":[["style","padding: 6px 12px; border-radius: 999px; background: rgba(31,42,48,0.88); color: #FFFFFF; font-size: 12px; font-weight: 800; white-space: nowrap"]],"c":["{{b3LoadText}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","position: absolute; left: 0; right: 0; bottom: 6px; margin: 0; text-align: center; font-size: 11px; font-weight: 700; color: #4A3B30; pointer-events: none"]],"c":["{{t.b3Hint}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{b3HasPin}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{b3Choose}}"],["style","flex: 0 0 auto; width: 100%; min-height: 60px; padding: 8px 16px; border-radius: 16px; border: 0; background: {{coralBtn}}; color: #FFFFFF; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.22); text-align: left"]],"c":[" ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px; min-width: 0"]],"c":[" ",{"t":"span","a":[["style","font-size: 17px; font-weight: 800"]],"c":["{{t.b3Choose}}"]}," ",{"t":"span","a":[["style","font-size: 13px; font-weight: 700; opacity: 0.92; white-space: nowrap; overflow: hidden; text-overflow: ellipsis"]],"c":["{{b3PinLabel}}"]}," "]}," ",{"t":"svg","a":[["width","24"],["height","24"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.6"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"],["style","flex: 0 0 auto"]],"c":[{"t":"path","a":[["d","M5 12h14M13 6l6 6-6 6"]],"c":[]}]}," "]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.b3LayerLbl}}"],["style","display: flex; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{b3Layers}}"],["as","ly"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{ly.pressed}}"],["onClick","{{ly.pick}}"],["style","flex: 1 1 0; min-height: 40px; padding: 0 6px; border-radius: 12px; border: 1px solid {{ly.border}}; background: {{ly.bg}}; color: {{ly.fg}}; font-size: 13px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px"]],"c":[{"t":"span","a":[["aria-hidden","true"],["style","width: 12px; height: 12px; border-radius: 999px; background: {{ly.dot}}; border: 1px solid rgba(42,33,24,0.35)"]],"c":[]},"{{ly.label}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{b3Is3D}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 10px; line-height: 1.45; color: var(--muted)"]],"c":["{{b3Credit}}"]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.b3ViewsLbl}}"],["style","display: flex; gap: 6px; align-items: center"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.b3SpinL}}"],["onClick","{{b3SpinL}}"],["style","width: 40px; height: 40px; flex: 0 0 auto; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M3 12a9 9 0 1 0 3-6.7"]],"c":[]},{"t":"path","a":[["d","M3 4v5h5"]],"c":[]}]}," "]}," ",{"t":"sc-for","a":[["list","{{b3Views}}"],["as","vw"],["hint-placeholder-count","4"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{vw.pressed}}"],["onClick","{{vw.pick}}"],["style","flex: 1 1 0; min-width: 0; min-height: 40px; padding: 0 4px; border-radius: 999px; border: 1px solid {{vw.border}}; background: {{vw.bg}}; color: {{vw.fg}}; font-size: 12px; font-weight: 800; cursor: pointer; white-space: nowrap"]],"c":["{{vw.label}}"]}," "]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.b3SpinR}}"],["onClick","{{b3SpinR}}"],["style","width: 40px; height: 40px; flex: 0 0 auto; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M21 12a9 9 0 1 1-3-6.7"]],"c":[]},{"t":"path","a":[["d","M21 4v5h-5"]],"c":[]}]}," "]}," "]}," ",{"t":"label","a":[["for","b3-range"],["style","display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800"]],"c":[" ",{"t":"span","a":[["style","flex: 0 0 auto"]],"c":["{{t.b3Rotate}}"]}," ",{"t":"input","a":[["id","b3-range"],["type","range"],["min","0"],["max","359"],["step","1"],["value","{{b3Angle}}"],["onChange","{{b3SetAngle}}"],["style","flex: 1 1 auto; accent-color: {{accent}}"]],"c":[]}," "]}," ",{"t":"label","a":[["for","b3-area"],["style","font-size: 13px; font-weight: 800"]],"c":["{{lg.areaLbl}}"]}," ",{"t":"select","a":[["id","b3-area"],["onChange","{{b3PickArea}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[" ",{"t":"option","a":[["value",""]],"c":["{{lg.areaPick}}"]}," ",{"t":"sc-for","a":[["list","{{lgAreas}}"],["as","ar"],["hint-placeholder-count","6"]],"c":[{"t":"option","a":[["value","{{ar.id}}"]],"c":["{{ar.label}}"]}]}," "]}," ",{"t":"section","a":[["aria-live","polite"],["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"sc-if","a":[["value","{{b3NoPin}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":["{{t.b3Empty}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{b3HasPin}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--tealtext)"]],"c":["{{t.b3YourSpot}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 19px; line-height: 1.25; font-weight: 800"]],"c":["{{b3PinLabel}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{b3PinSub}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px; margin-top: 2px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{b3Choose}}"],["style","flex: 1 1 100%; min-height: 54px; padding: 0 18px; border-radius: 14px; border: 0; background: {{coralBtn}}; color: #FFFFFF; font-size: 17px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2)"]],"c":["{{t.b3Choose}} →"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3AddSpot}}"],["style","min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1px solid #0E8A8D; background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k48}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3FaceIt}}"],["style","min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.b3FaceIt}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3Clear}}"],["style","min-height: 44px; padding: 0 14px; border: 0; background: transparent; color: var(--muted); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.b3Clear}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{b3HasSaved}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding-top: 8px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","width: 12px; height: 12px; border-radius: 999px; background: #0E8A8D; border: 2px solid #FFFFFF; box-shadow: 0 0 0 1px #0E8A8D"]],"c":[]}," ",{"t":"p","a":[["style","flex: 1 1 180px; margin: 0; font-size: 13px; line-height: 1.4; color: var(--ink2)"]],"c":["{{b3SavedText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{b3ClearSaved}}"],["style","min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{b3ClearSavedText}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{b3AsFind}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"nav","a":[["aria-label","{{t.lcMainNav}}"],["style","flex: 0 0 auto; display: flex; gap: 6px; padding: 6px 12px 18px; background: var(--card); border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabFind.pressed}}"],["onClick","{{goFind}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabFind.bg}}; color: {{tabFind.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","8"]],"c":[]},{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M12 1v3M12 20v3M1 12h3M20 12h3"]],"c":[]}]}," {{t.k54}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabExplore.pressed}}"],["onClick","{{goExplore}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabExplore.bg}}; color: {{tabExplore.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M12 3l9 5-9 5-9-5z"]],"c":[]},{"t":"path","a":[["d","M3 13l9 5 9-5"]],"c":[]}]}," {{t.k55}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabDiary.pressed}}"],["onClick","{{goDiary}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabDiary.bg}}; color: {{tabDiary.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 19V5M4 19h16M8 15l4-5 3 3 5-6"]],"c":[]}]}," {{t.k56}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabReport.pressed}}"],["onClick","{{goReport}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabReport.bg}}; color: {{tabReport.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"]],"c":[]},{"t":"path","a":[["d","M14 3v5h5M9 13h6M9 17h4"]],"c":[]}]}," {{tabReportLabel}} "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onClinicians}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{cliniciansBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{t.k31}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 12px 14px; border-radius: 14px; background: var(--tealsoft); color: var(--tealtext); font-size: 14px; line-height: 1.45; font-weight: 700"]],"c":["{{clinicianFor}}"]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","postal"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k32}}"]}," ",{"t":"input","a":[["id","postal"],["type","text"],["autocomplete","postal-code"],["value","{{postal}}"],["onChange","{{setPostal}}"],["placeholder","A1A 1A1"],["style","min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); font-family: inherit; font-size: 16px; text-transform: uppercase"]],"c":[]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k107}}"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{clinTypes}}"],["as","ct"],["hint-placeholder-count","6"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{ct.pressed}}"],["onClick","{{ct.pick}}"],["style","min-height: 38px; padding: 0 12px; border-radius: 999px; border: {{ct.border}}; background: {{ct.bg}}; color: {{ct.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{ct.label}}"]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-tele"],["style","font-size: 14px; font-weight: 700"]],"c":["{{t.k33}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{teleOn}}"],["aria-labelledby","lbl-tele"],["onClick","{{toggleTele}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{teleBg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{teleKnob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," ",{"t":"sc-for","a":[["list","{{clinics}}"],["as","cl"],["hint-placeholder-count","3"]],"c":[" ",{"t":"article","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-start; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 2px; min-width: 0"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{cl.name}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--ink2)"]],"c":["{{cl.type}} · {{cl.distance}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{cl.partner}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","flex: 0 0 auto; padding: 3px 9px; border-radius: 999px; background: #2A2118; color: #F5D98B; font-size: 11px; font-weight: 800"]],"c":["{{cl.partnerText}}"]}]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 6px; font-size: 12px; font-weight: 700; color: var(--muted2)"]],"c":[" ",{"t":"span","a":[["style","padding: 3px 8px; border-radius: 999px; background: var(--soft)"]],"c":["{{cl.next}}"]}," ",{"t":"sc-if","a":[["value","{{cl.telehealth}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","padding: 3px 8px; border-radius: 999px; background: var(--soft)"]],"c":["{{cl.teleText}}"]}]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{cl.book}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 16px; border-radius: 999px; border: 0; background: {{cl.accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{cl.bookText}}"]}," "]}," "]}," ",{"t":"div","a":[["style","padding: 14px; border-radius: 16px; background: var(--warnbg); border: 1px solid var(--warnline); display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--warntext); font-weight: 700"]],"c":["{{emergencyText}}"]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"a","a":[["href","tel:811"],["style","display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: var(--card); border: 1px solid var(--warnline); color: var(--warntext); font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k34}}"]}," ",{"t":"a","a":[["href","tel:911"],["style","display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #C62828; color: #FFFFFF; font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k35}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{t.k36}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onProfile}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 28px 20px 20px; display: flex; flex-direction: column; gap: 18px"]],"c":[" ",{"t":"sc-if","a":[["value","{{inIntro}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 8px; margin-top: -8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 800; color: var(--muted)"]],"c":["{{introStepText}}"]}," ",{"t":"div","a":[["role","progressbar"],["aria-label","{{t.inProg}}"],["aria-valuemin","1"],["aria-valuemax","2"],["aria-valuenow","2"],["style","display: flex; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{introBars}}"],["as","ib"],["hint-placeholder-count","2"]],"c":[" ",{"t":"span","a":[["style","flex: 1 1 0; height: 6px; border-radius: 999px; background: {{ib.bg}}"]],"c":[]}," "]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted)"]],"c":["PainMap"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k17}}"],["style","display: flex; gap: 6px; margin-bottom: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{langChips}}"],["as","lg"],["hint-placeholder-count","2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{lg.pressed}}"],["onClick","{{lg.pick}}"],["style","min-height: 34px; padding: 0 12px; border-radius: 999px; border: {{lg.border}}; background: {{lg.bg}}; color: {{lg.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{lg.label}}"]}," "]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 28px; line-height: 1.15; font-weight: 800"]],"c":["{{t.k37}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.k38}}"]}," "]}," ",{"t":"div","a":[["style","display: flex; gap: 14px; align-items: stretch"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 120px; height: 244px; position: relative; border-radius: 16px; background: var(--stage); border: 1px solid var(--stageline); overflow: hidden"]],"c":[" ",{"t":"sc-for","a":[["list","{{previewArt}}"],["as","pa"],["hint-placeholder-count","0"]],"c":[" ",{"t":"svg","a":[["viewBox","{{pa.vb}}"],["width","116"],["height","232"],["aria-hidden","true"],["style","position: absolute; left: 1px; top: 5px"]],"c":[" ",{"t":"path","a":[["d","{{pa.d}}"],["fill","{{pa.fill}}"],["stroke","{{pa.stroke}}"],["stroke-width","{{pa.sw}}"],["vector-effect","{{pa.ve}}"],["opacity","{{pa.op}}"],["stroke-dasharray","{{pa.dash}}"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 16px"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"label","a":[["for","age-range"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k39}}"]}," ",{"t":"p","a":[["style","margin: 0; display: flex; align-items: baseline; gap: 8px"]],"c":[{"t":"span","a":[["style","font-size: 28px; font-weight: 800"]],"c":["{{ageText}}"]},{"t":"span","a":[["style","font-size: 13px; font-weight: 700; color: var(--muted)"]],"c":["{{ageGroupText}}"]}]}," ",{"t":"input","a":[["id","age-range"],["type","range"],["min","1"],["max","100"],["step","1"],["value","{{age}}"],["onChange","{{setAge}}"],["style","width: 100%; accent-color: {{accent}}"]],"c":[]}," ",{"t":"div","a":[["style","display: flex; justify-content: space-between; font-size: 11px; color: var(--muted)"]],"c":[{"t":"span","a":[],"c":["1"]},{"t":"span","a":[],"c":["100"]}]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","sex-heading"],["style","margin: 0; font-size: 14px; font-weight: 800"]],"c":["{{t.k40}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","sex-heading"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{sexes}}"],["as","sx"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{sx.pressed}}"],["onClick","{{sx.pick}}"],["style","min-height: 44px; padding: 0 16px; border-radius: 999px; border: {{sx.border}}; background: {{sx.bg}}; color: {{sx.fg}}; font-size: 15px; font-weight: 700; cursor: pointer"]],"c":["{{sx.label}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--muted)"]],"c":["{{t.k41}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{needGuardian}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--warnbg); border: 1px solid var(--warnline); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 15px; font-weight: 800; color: var(--warntext)"]],"c":["{{t.guardH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--warntext)"]],"c":["{{t.guardP}}"]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-guard"],["style","font-size: 14px; font-weight: 700; color: var(--ink)"]],"c":["{{t.guardL}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{guardOn}}"],["aria-labelledby","lbl-guard"],["onClick","{{toggleGuard}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; cursor: pointer; background: {{guardBg}}"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{guardKnob}}; width: 22px; height: 22px; border-radius: 999px; background: #FFFFFF"]],"c":[]}]}," "]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px 24px; border-top: 1px solid var(--line2); display: flex; gap: 10px"]],"c":[" ",{"t":"sc-if","a":[["value","{{inIntro}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{introBack}}"],["style","flex: 0 0 auto; min-height: 54px; padding: 0 18px; border: 1px solid var(--line); border-radius: 16px; background: var(--card); color: var(--ink); font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{t.inBack}}"]}," "]}," ",{"t":"button","a":[["type","button"],["disabled","{{noSex}}"],["onClick","{{finishSetup}}"],["style","flex: 1 1 auto; width: 100%; min-height: 54px; border: 0; border-radius: 16px; font-size: 16px; font-weight: 800; cursor: pointer; background: {{setupBg}}; color: {{setupFg}}"]],"c":["{{setupText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onBody}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 20px 20px 16px; display: flex; flex-direction: column; gap: 16px"]],"c":[" ",{"t":"sc-if","a":[["value","{{chrome}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-end; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted)"]],"c":["PainMap"]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 26px; line-height: 1.15; font-weight: 800"]],"c":["{{pageTitle}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 4px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{editProfile}}"],["style","min-height: 32px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 12px; font-weight: 700; cursor: pointer"]],"c":["{{profileText}} · {{t.edit}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openPaywall}}"],["style","min-height: 30px; padding: 0 10px; border-radius: 999px; border: 0; background: #2A2118; color: #F5D98B; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{premiumBadge}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.k108}}"],["onClick","{{openSettings}}"],["style","width: 34px; height: 34px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"]],"c":[]}]}]}," "]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k109}}"],["style","display: flex; background: var(--chip); border-radius: 999px; padding: 4px; gap: 2px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{frontPressed}}"],["onClick","{{showFront}}"],["style","min-height: 36px; padding: 0 14px; border: 0; border-radius: 999px; font-size: 14px; font-weight: 700; cursor: pointer; background: {{frontBg}}; color: {{frontFg}}"]],"c":["{{t.k42}}"]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{backPressed}}"],["onClick","{{showBack}}"],["style","min-height: 36px; padding: 0 14px; border: 0; border-radius: 999px; font-size: 14px; font-weight: 700; cursor: pointer; background: {{backBg}}; color: {{backFg}}"]],"c":["{{t.k43}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.b360Aria}}"],["onClick","{{open360}}"],["style","min-height: 36px; padding: 0 12px; border: 0; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; background: {{coralBtn}}; color: #FFFFFF"]],"c":["360°"]}," "]}," "]}," "]}," ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.find}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{exploreUI}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["ref","{{hScrollRef}}"],["role","group"],["aria-label","{{t.k110}}"],["style","flex: 0 0 auto; display: flex; gap: 8px; overflow-x: auto; margin: 0 -20px; padding: 0 20px 4px"]],"c":[" ",{"t":"sc-for","a":[["list","{{exLayers}}"],["as","sy"],["hint-placeholder-count","8"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{sy.pressed}}"],["onClick","{{sy.pick}}"],["style","flex: 0 0 auto; display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 14px 0 10px; border-radius: 999px; border: {{sy.border}}; background: {{sy.bg}}; color: {{sy.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 14px; height: 14px; border-radius: 999px; background: {{sy.color}}; border: 1px solid rgba(18,32,47,0.3)"]],"c":[]},"{{sy.name}} "]}," "]}," "]}," ",{"t":"div","a":[["ref","{{hScrollRef}}"],["role","group"],["aria-label","{{t.k111}}"],["style","flex: 0 0 auto; display: flex; align-items: center; gap: 6px; overflow-x: auto; margin: -6px -20px 0; padding: 0 20px 4px"]],"c":[" ",{"t":"span","a":[["style","flex: 0 0 auto; font-size: 12px; font-weight: 800; color: var(--muted)"]],"c":["{{t.k44}}"]}," ",{"t":"sc-for","a":[["list","{{zooms}}"],["as","z"],["hint-placeholder-count","7"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{z.pressed}}"],["onClick","{{z.pick}}"],["style","flex: 0 0 auto; min-height: 34px; padding: 0 12px; border-radius: 10px; border: {{z.border}}; background: {{z.bg}}; color: {{z.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{z.name}}"]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","position: relative; margin: 0 -20px; background: var(--stage); border-top: 1px solid var(--stageline); border-bottom: 1px solid var(--stageline); height: {{stageH}}px; display: flex; align-items: center; justify-content: center; overflow: hidden"]],"c":[" ",{"t":"p","a":[["style","position: absolute; left: 16px; top: 12px; max-width: 230px; margin: 0; color: var(--stageink); font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; font-weight: 700; line-height: 1.2"]],"c":["{{stageChip}}"]}," ",{"t":"sc-if","a":[["value","{{onFind}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","position: absolute; right: 16px; top: 20px; margin: 0; color: #B9C4D3; font-size: 12px; font-weight: 600"]],"c":["{{viewLabel}}"]}," ",{"t":"p","a":[["aria-hidden","true"],["style","position: absolute; left: 20px; top: 215px; margin: 0; color: var(--stagemute2); font-size: 13px; font-weight: 800"]],"c":["{{sideLeft}}"]}," ",{"t":"p","a":[["aria-hidden","true"],["style","position: absolute; right: 20px; top: 215px; margin: 0; color: var(--stagemute2); font-size: 13px; font-weight: 800"]],"c":["{{sideRight}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{onExplore}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{labelsPressed}}"],["onClick","{{toggleLabels}}"],["style","position: absolute; right: 12px; top: 10px; min-height: 34px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--stagemute2); background: {{labelsBg}}; color: {{labelsFg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{labelsText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{showMoreLabels}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{toggleAllLabels}}"],["style","position: absolute; right: 12px; top: 50px; z-index: 2; min-height: 32px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--stagemute2); background: var(--stage); color: var(--stageink); font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{moreLabelsText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{showScrollHint}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["aria-hidden","true"],["style","position: absolute; left: 10px; bottom: 34px; width: 70px; margin: 0; font-size: 10.5px; line-height: 1.3; color: var(--stagemute2)"]],"c":["↕ {{t.scrollHint}}"]}," "]}," ",{"t":"p","a":[["style","position: absolute; left: 0; right: 0; bottom: 12px; margin: 0; text-align: center; color: var(--stagemute); font-family: 'Source Serif 4', Georgia, serif; font-style: italic; font-size: 13px; font-weight: 500"]],"c":["{{stageCaption}}"]}," ",{"t":"sc-if","a":[["value","{{focus}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{t.k109}}"],["style","position: absolute; left: 16px; top: 52px; display: flex; background: rgba(42,33,24,0.08); border-radius: 999px; padding: 3px; gap: 2px; z-index: 2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{frontPressed}}"],["onClick","{{showFront}}"],["style","min-height: 34px; padding: 0 12px; border: 0; border-radius: 999px; font-size: 13px; font-weight: 700; cursor: pointer; background: {{frontBg}}; color: {{focusFrontFg}}"]],"c":["{{t.k42}}"]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{backPressed}}"],["onClick","{{showBack}}"],["style","min-height: 34px; padding: 0 12px; border: 0; border-radius: 999px; font-size: 13px; font-weight: 700; cursor: pointer; background: {{backBg}}; color: {{focusBackFg}}"]],"c":["{{t.k43}}"]}," "]}," "]}," ",{"t":"div","a":[["style","position: relative; width: 200px; height: 400px; margin-top: 8px; transform: scale({{bodyScale}}); transform-origin: 50% 50%"]],"c":[" ",{"t":"sc-for","a":[["list","{{art}}"],["as","a"],["hint-placeholder-count","0"]],"c":[" ",{"t":"svg","a":[["viewBox","{{a.vb}}"],["width","200"],["height","400"],["aria-hidden","true"],["style","position: absolute; left: 0; top: 0; overflow: hidden"]],"c":[" ",{"t":"path","a":[["d","{{a.d}}"],["fill","{{a.fill}}"],["stroke","{{a.stroke}}"],["stroke-width","{{a.sw}}"],["vector-effect","{{a.ve}}"],["opacity","{{a.op}}"],["stroke-dasharray","{{a.dash}}"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[]}," "]}," "]}," ",{"t":"sc-for","a":[["list","{{savedPins}}"],["as","sp"],["hint-placeholder-count","0"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; left: {{sp.left}}px; top: {{sp.top}}px; width: 22px; height: 22px; border-radius: 999px; background: #2A2118; border: 2px solid #FFFFFF; color: #FFFFFF; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; box-sizing: border-box; pointer-events: none"]],"c":["{{sp.n}}"]}," "]}," ",{"t":"div","a":[["aria-hidden","true"],["onPointerDown","{{dragStart}}"],["onPointerMove","{{dragMove}}"],["onPointerUp","{{dragEnd}}"],["onPointerCancel","{{dragEnd}}"],["style","position: absolute; left: 0; top: 0; width: 200px; height: 400px; touch-action: none; cursor: crosshair"]],"c":[]}," ",{"t":"sc-for","a":[["list","{{labels}}"],["as","lb"],["hint-placeholder-count","0"]],"c":[" ",{"t":"div","a":[["aria-hidden","true"],["style","position: absolute; left: {{lb.lx}}px; top: {{lb.ly}}px; width: {{lb.len}}px; height: 1px; background: {{lb.lineColor}}; transform-origin: 0 0; transform: rotate({{lb.ang}}deg)"]],"c":[]}," ",{"t":"div","a":[["aria-hidden","true"],["style","position: absolute; left: {{lb.dotLeft}}px; top: {{lb.dotTop}}px; width: 6px; height: 6px; border-radius: 999px; background: var(--card); border: 1px solid #0F4547"]],"c":[]}," ",{"t":"div","a":[["style","position: absolute; left: {{lb.textLeft}}px; top: {{lb.ly}}px; width: 86px; transform: translateY(-50%); display: flex; justify-content: {{lb.justify}}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{lb.pressed}}"],["onClick","{{lb.pick}}"],["style","max-width: 86px; padding: 3px 6px; border: 0; border-radius: 6px; background: {{lb.bg}}; color: {{lb.fg}}; font-family: 'Source Serif 4', Georgia, serif; font-size: 11.5px; font-weight: 500; line-height: 13px; text-align: {{lb.align}}; cursor: pointer"]],"c":["{{lb.name}}"]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.k112}}"],["onKeyDown","{{locKey}}"],["style","position: absolute; left: {{locLeft}}px; top: {{locTop}}px; width: 34px; height: 34px; padding: 0; box-sizing: border-box; border-radius: 999px; border: 3px solid var(--stageink); background: rgba(255,255,255,0.55); box-shadow: 0 0 0 2px {{coral}}, 0 3px 10px rgba(0,0,0,0.45); pointer-events: none; display: flex; align-items: center; justify-content: center; color: var(--stageink)"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M12 2v6M12 16v6M2 12h6M16 12h6"]],"c":[]}]}," "]}," ",{"t":"sc-if","a":[["value","{{showDragHint}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["role","note"],["style","position: absolute; left: {{tutLeft}}px; top: {{hintTop}}px; width: 170px; z-index: 3; padding: 10px 12px; border-radius: 14px; background: {{coral}}; color: #FFFFFF; box-shadow: 0 6px 16px rgba(0,0,0,0.3); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.35; font-weight: 800"]],"c":["{{t.tutText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{dismissTutorial}}"],["style","align-self: flex-start; min-height: 32px; padding: 0 12px; border-radius: 999px; border: 0; background: #FFFFFF; color: #8A2E1A; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{t.tutOk}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{showConfirm}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","position: absolute; left: {{confirmLeft}}px; top: {{confirmTop}}px; width: 160px; display: flex; justify-content: center"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{confirmSpot}}"],["style","min-height: 40px; padding: 6px 14px; border: 2px solid #FFFFFF; border-radius: 999px; background: {{coralBtn}}; color: #FFFFFF; font-size: 13px; font-weight: 800; line-height: 1.2; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.4)"]],"c":["{{t.choose}} {{spotLabel}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{showLens}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["aria-hidden","true"],["style","position: absolute; left: {{lensLeft}}px; top: {{lensTop}}px; width: 104px; display: flex; flex-direction: column; align-items: center; gap: 6px; pointer-events: none"]],"c":[" ",{"t":"div","a":[["style","position: relative; width: 104px; height: 104px; border-radius: 999px; overflow: hidden; background: var(--stage); border: 3px solid var(--stageink); box-shadow: 0 6px 18px rgba(0,0,0,0.5); box-sizing: border-box"]],"c":[" ",{"t":"sc-for","a":[["list","{{lensArt}}"],["as","la"],["hint-placeholder-count","0"]],"c":[" ",{"t":"svg","a":[["viewBox","{{la.vb}}"],["width","98"],["height","98"],["style","position: absolute; left: 0; top: 0"]],"c":[" ",{"t":"path","a":[["d","{{la.d}}"],["fill","{{la.fill}}"],["stroke","{{la.stroke}}"],["stroke-width","{{la.sw}}"],["vector-effect","{{la.ve}}"],["opacity","{{la.op}}"],["stroke-dasharray","{{la.dash}}"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[]}," "]}," "]}," ",{"t":"div","a":[["style","position: absolute; left: 48px; top: 30px; width: 2px; height: 38px; background: {{coral}}"]],"c":[]}," ",{"t":"div","a":[["style","position: absolute; left: 30px; top: 48px; width: 38px; height: 2px; background: {{coral}}"]],"c":[]}," "]}," ",{"t":"span","a":[["style","max-width: 150px; padding: 4px 10px; border-radius: 999px; background: var(--card); color: var(--ink); font-size: 11px; font-weight: 800; text-align: center"]],"c":["{{spotLabel}}"]}," "]}," "]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["aria-expanded","{{detailsOpen}}"],["onClick","{{toggleFocus}}"],["style","align-self: center; display: flex; flex-direction: column; align-items: center; gap: 4px; min-height: 44px; min-width: 220px; margin-top: -6px; padding: 6px 18px 8px; border: 0; border-radius: 0 0 18px 18px; background: #2A2118; color: #FFFFFF; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 40px; height: 4px; border-radius: 999px; background: rgba(255,255,255,0.5)"]],"c":[]}," ",{"t":"span","a":[["style","display: inline-flex; align-items: center; gap: 6px"]],"c":["{{focusText}} ",{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","3"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","{{focusIcon}}"]],"c":[]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{hasPinUI}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-start; justify-content: space-between; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.k46}}"]}," ",{"t":"h2","a":[["style","margin: 0; font-size: 19px; font-weight: 800"]],"c":["{{spotLabel}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{clearSpot}}"],["style","flex: 0 0 auto; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{t.k47}}"]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{addSpot}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px dashed {{accent}}; background: var(--tealsoft); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k48}}"]}," ",{"t":"span","a":[["style","font-size: 12px; font-weight: 700; color: var(--muted)"]],"c":["{{spotCountText}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--muted)"]],"c":["{{t.k49}}"]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{stack}}"],["as","sk"],["hint-placeholder-count","6"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{sk.pressed}}"],["onClick","{{sk.pick}}"],["style","display: flex; align-items: flex-start; gap: 10px; width: 100%; min-height: 44px; padding: 8px 10px; border-radius: 12px; border: {{sk.border}}; background: {{sk.bg}}; text-align: left; cursor: pointer; color: var(--ink)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; display: block; width: 18px; height: 18px; margin-top: 1px; border-radius: 6px; background: {{sk.color}}; border: 1px solid rgba(18,32,47,0.3)"]],"c":[]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px; min-width: 0"]],"c":[" ",{"t":"span","a":[["style","font-size: 13px; font-weight: 800"]],"c":["{{sk.name}}"]}," ",{"t":"span","a":[["style","font-size: 13px; line-height: 1.4; color: var(--ink2)"]],"c":["{{sk.parts}}"]}," "]}," "]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{showProfilePrompt}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","padding: 12px 14px; border-radius: 14px; background: var(--tealsoft); display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; font-weight: 700; color: var(--tealtext)"]],"c":["{{t.profPrompt}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{editProfile}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{t.profAdd}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{dismissProfilePrompt}}"],["style","min-height: 38px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{t.dismiss}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{findUI}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","area-select"],["style","font-size: 13px; font-weight: 700; color: var(--ink2)"]],"c":["{{t.k50}}"]}," ",{"t":"select","a":[["id","area-select"],["value","{{areaValue}}"],["onChange","{{pickArea}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[" ",{"t":"sc-for","a":[["list","{{areaOptions}}"],["as","o"],["hint-placeholder-count","10"]],"c":[" ",{"t":"option","a":[["value","{{o.id}}"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: baseline; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k51}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 600; color: var(--muted)"]],"c":["{{t.layerOf}} {{layerNumber}} / 6"]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k113}}"],["style","display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 5px"]],"c":[" ",{"t":"sc-for","a":[["list","{{layers}}"],["as","l"],["hint-placeholder-count","6"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{l.pressed}}"],["onClick","{{l.pick}}"],["style","min-height: 72px; padding: 8px 1px; border-radius: 14px; border: {{l.border}}; background: {{l.bg}}; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 6px; color: var(--ink)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 26px; height: 26px; border-radius: 8px; box-sizing: border-box; background: {{l.color}}; border: {{l.swatchBorder}}; opacity: {{l.opacity}}"]],"c":[]}," ",{"t":"span","a":[["style","font-size: 11.5px; font-weight: 700; line-height: 1.2; text-align: center"]],"c":["{{l.short}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":[{"t":"strong","a":[["style","color: var(--ink)"]],"c":["{{layer.name}}:"]}," {{layer.hint}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k52}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k114}}"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{feels}}"],["as","f"],["hint-placeholder-count","5"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{f.pressed}}"],["onClick","{{f.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{f.border}}; background: {{f.bg}}; color: {{f.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{f.label}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{exploreUI}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"label","a":[["for","area-select-ex"],["style","font-size: 13px; font-weight: 700; color: var(--ink2)"]],"c":["{{t.k50}}"]}," ",{"t":"select","a":[["id","area-select-ex"],["value","{{areaValue}}"],["onChange","{{pickArea}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[" ",{"t":"sc-for","a":[["list","{{areaOptions}}"],["as","o"],["hint-placeholder-count","10"]],"c":[" ",{"t":"option","a":[["value","{{o.id}}"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{noPart}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 10px"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 18px; height: 18px; border-radius: 999px; background: {{ex.color}}; border: 1px solid rgba(18,32,47,0.3)"]],"c":[]}," ",{"t":"h2","a":[["style","margin: 0; font-size: 19px; font-weight: 800"]],"c":["{{ex.title}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{ex.blurb}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{ex.stats}}"],["as","st"],["hint-placeholder-count","3"]],"c":[" ",{"t":"div","a":[["style","background: var(--bg); border-radius: 14px; padding: 12px 10px; display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 20px; line-height: 1.1; font-weight: 800; color: var(--ink)"]],"c":["{{st.big}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.35; color: var(--muted)"]],"c":["{{st.text}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--muted)"]],"c":["{{partCount}} {{t.partsText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{hasPart}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-start; justify-content: space-between; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted)"]],"c":["{{partMeta}}"]}," ",{"t":"h2","a":[["style","margin: 0; font-size: 21px; font-weight: 800"]],"c":["{{part.n}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{clearPart}}"],["style","flex: 0 0 auto; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{t.k53}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"]],"c":["{{part.p}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{findUI}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px; background: var(--bg); border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["disabled","{{noRegion}}"],["onClick","{{goResults}}"],["style","width: 100%; min-height: 52px; border: 0; border-radius: 16px; font-size: 16px; font-weight: 800; cursor: pointer; background: {{ctaBg}}; color: {{ctaFg}}"]],"c":["{{ctaText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{chrome}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"nav","a":[["aria-label","{{t.lcMainNav}}"],["style","flex: 0 0 auto; display: flex; gap: 6px; padding: 6px 12px 18px; background: var(--card); border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabFind.pressed}}"],["onClick","{{goFind}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabFind.bg}}; color: {{tabFind.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","8"]],"c":[]},{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M12 1v3M12 20v3M1 12h3M20 12h3"]],"c":[]}]}," {{t.k54}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabExplore.pressed}}"],["onClick","{{goExplore}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabExplore.bg}}; color: {{tabExplore.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M12 3l9 5-9 5-9-5z"]],"c":[]},{"t":"path","a":[["d","M3 13l9 5 9-5"]],"c":[]}]}," {{t.k55}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabDiary.pressed}}"],["onClick","{{goDiary}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabDiary.bg}}; color: {{tabDiary.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 19V5M4 19h16M8 15l4-5 3 3 5-6"]],"c":[]}]}," {{t.k56}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabReport.pressed}}"],["onClick","{{goReport}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabReport.bg}}; color: {{tabReport.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"]],"c":[]},{"t":"path","a":[["d","M14 3v5h5M9 13h6M9 17h4"]],"c":[]}]}," {{tabReportLabel}} "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onQuestions}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.k115}}"],["onClick","{{goFind}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column"]],"c":[" ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{t.k57}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{questionsTitle}}"]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 20px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.q}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"label","a":[["for","pain-range"],["style","font-size: 16px; font-weight: 800"]],"c":["{{t.k58}}"]}," ",{"t":"p","a":[["style","margin: 0; display: flex; align-items: baseline; gap: 8px"]],"c":[{"t":"span","a":[["style","font-size: 30px; font-weight: 800"]],"c":["{{painVal}}"]},{"t":"span","a":[["style","font-size: 14px; font-weight: 700; color: var(--muted)"]],"c":["/ 10 · {{painWord}}"]}]}," ",{"t":"input","a":[["id","pain-range"],["type","range"],["min","0"],["max","10"],["step","1"],["value","{{painVal}}"],["onChange","{{setPain}}"],["style","width: 100%; accent-color: {{accent}}"]],"c":[]}," ",{"t":"div","a":[["style","display: flex; justify-content: space-between; font-size: 11px; color: var(--muted)"]],"c":[{"t":"span","a":[],"c":["{{t.k59}}"]},{"t":"span","a":[],"c":["{{t.k60}}"]}]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","q-feel"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k52}}"]}," ",{"t":"p","a":[["style","margin: -4px 0 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.k64}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","q-feel"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{feels}}"],["as","f"],["hint-placeholder-count","7"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{f.pressed}}"],["onClick","{{f.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{f.border}}; background: {{f.bg}}; color: {{f.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{f.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","q-onset"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k61}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","q-onset"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{onsetChips}}"],["as","o"],["hint-placeholder-count","4"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{o.pressed}}"],["onClick","{{o.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{o.border}}; background: {{o.bg}}; color: {{o.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","q-dur"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k62}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","q-dur"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{durationChips}}"],["as","o"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{o.pressed}}"],["onClick","{{o.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{o.border}}; background: {{o.bg}}; color: {{o.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","q-worse"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k63}}"]}," ",{"t":"p","a":[["style","margin: -4px 0 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.k64}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","q-worse"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{worseChips}}"],["as","o"],["hint-placeholder-count","5"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{o.pressed}}"],["onClick","{{o.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{o.border}}; background: {{o.bg}}; color: {{o.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","q-sym"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k65}}"]}," ",{"t":"p","a":[["style","margin: -4px 0 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.k64}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","q-sym"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{symptomChips}}"],["as","o"],["hint-placeholder-count","7"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{o.pressed}}"],["onClick","{{o.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{o.border}}; background: {{o.bg}}; color: {{o.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{o.label}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{showAboutQ}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["aria-labelledby","about-q-h"],["style","background: var(--card); border: 2px solid {{accent}}; border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"h2","a":[["id","about-q-h"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.aboutQH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--ink2)"]],"c":["{{t.aboutQP}}"]}," ",{"t":"label","a":[["for","age-range-q"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k39}}: {{ageText}} ",{"t":"span","a":[["style","font-size: 13px; font-weight: 700; color: var(--muted)"]],"c":["{{ageGroupText}}"]}]}," ",{"t":"input","a":[["id","age-range-q"],["type","range"],["min","1"],["max","100"],["step","1"],["value","{{age}}"],["onChange","{{setAge}}"],["style","width: 100%; accent-color: {{accent}}"]],"c":[]}," ",{"t":"h3","a":[["id","sex-q-h"],["style","margin: 0; font-size: 14px; font-weight: 800"]],"c":["{{t.k40}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","sex-q-h"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{sexes}}"],["as","sx"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{sx.pressed}}"],["onClick","{{sx.pick}}"],["style","min-height: 44px; padding: 0 16px; border-radius: 999px; border: {{sx.border}}; background: {{sx.bg}}; color: {{sx.fg}}; font-size: 15px; font-weight: 700; cursor: pointer"]],"c":["{{sx.label}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--muted)"]],"c":["{{t.k41}}"]}," ",{"t":"sc-if","a":[["value","{{needGuardian}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","background: var(--warnbg); border: 1px solid var(--warnline); border-radius: 14px; padding: 12px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; font-weight: 800; color: var(--warntext)"]],"c":["{{t.guardH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--warntext)"]],"c":["{{t.guardP}}"]}," ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-guard-q"],["style","font-size: 14px; font-weight: 700; color: var(--ink)"]],"c":["{{t.guardL}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{guardOn}}"],["aria-labelledby","lbl-guard-q"],["onClick","{{toggleGuard}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; cursor: pointer; background: {{guardBg}}"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{guardKnob}}; width: 22px; height: 22px; border-radius: 999px; background: #FFFFFF"]],"c":[]}]}," "]}," "]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--muted)"]],"c":["{{t.answersOpt}} {{profileText}}"]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px 24px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["disabled","{{causesOff}}"],["onClick","{{showCauses}}"],["style","width: 100%; min-height: 54px; border: 0; border-radius: 16px; font-size: 16px; font-weight: 800; cursor: pointer; background: {{causesBg}}; color: {{causesFg}}"]],"c":["{{causesText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onDiary}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 20px 20px 16px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-end; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted)"]],"c":["PainMap"]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 26px; line-height: 1.15; font-weight: 800"]],"c":["{{t.k67}}"]}," "]}," ",{"t":"div","a":[["style","display: flex; gap: 6px; align-items: center"]],"c":[{"t":"button","a":[["type","button"],["onClick","{{openPaywall}}"],["style","min-height: 34px; padding: 0 12px; border-radius: 999px; border: 0; background: #2A2118; color: #F5D98B; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{premiumBadge}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{t.k108}}"],["onClick","{{openSettings}}"],["style","width: 34px; height: 34px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"]],"c":[]}]}]}]}," "]}," ",{"t":"div","a":[["ref","{{hScrollRef}}"],["role","group"],["aria-label","{{t.k116}}"],["style","flex: 0 0 auto; display: flex; gap: 8px; overflow-x: auto; margin: 0 -20px; padding: 0 20px 2px"]],"c":[" ",{"t":"sc-for","a":[["list","{{diarySpots}}"],["as","ds"],["hint-placeholder-count","2"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{ds.pressed}}"],["onClick","{{ds.pick}}"],["style","flex: 0 0 auto; min-height: 38px; padding: 0 14px; border-radius: 999px; border: {{ds.border}}; background: {{ds.bg}}; color: {{ds.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{ds.label}}"]}," "]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.dyTools}}"],["style","display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{planFromDiary}}"],["style","min-height: 112px; padding: 14px; border-radius: 18px; border: 0; background: {{accent}}; color: #FFFFFF; text-align: left; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; box-shadow: 0 4px 14px rgba(15,107,110,0.28)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","width: 36px; height: 36px; border-radius: 12px; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"path","a":[["d","M4 20l5-6 4 3 7-9"]],"c":[]},{"t":"path","a":[["d","M15 8h5v5"]],"c":[]}]}," "]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[{"t":"span","a":[["style","font-size: 16px; font-weight: 800; line-height: 1.2"]],"c":["{{t.k73}}"]},{"t":"span","a":[["style","font-size: 12px; opacity: 0.9"]],"c":["{{t.k74}}"]}]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{openReport}}"],["style","min-height: 112px; padding: 14px; border-radius: 18px; border: 0; background: #2A2118; color: #FFFFFF; text-align: left; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; box-shadow: 0 4px 14px rgba(42,33,24,0.28)"]],"c":[" ",{"t":"span","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 6px"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","width: 36px; height: 36px; border-radius: 12px; background: rgba(255,255,255,0.14); display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"path","a":[["d","M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"]],"c":[]},{"t":"path","a":[["d","M14 3v5h5M9 13h6M9 17h4"]],"c":[]}]}," "]}," ",{"t":"span","a":[["style","padding: 3px 8px; border-radius: 999px; background: #F5D98B; color: #2A2118; font-size: 10px; font-weight: 800"]],"c":["Premium"]}," "]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[{"t":"span","a":[["style","font-size: 16px; font-weight: 800; line-height: 1.2"]],"c":["{{t.k75}}"]},{"t":"span","a":[["style","font-size: 12px; color: #F5D98B"]],"c":["{{reportSub}}"]}]}," "]}," "]}," ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.dy}}"]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px"]],"c":[" ",{"t":"sc-if","a":[["value","{{showSamplesNote}}"],["hint-placeholder-val","{{ true }}"]],"c":[{"t":"p","a":[["style","margin: 0; flex: 1 1 200px; font-size: 12px; color: var(--muted)"]],"c":["{{t.samplesNote}}"]}]}," ",{"t":"button","a":[["type","button"],["onClick","{{toggleSamples}}"],["style","min-height: 34px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{samplesBtn}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{showRate}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--okbg); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800; color: var(--oktext)"]],"c":["{{t.rateH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--oktext)"]],"c":["{{t.rateP}}"]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{rateYes}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{t.rateYes}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{rateNo}}"],["style","min-height: 38px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{t.dismiss}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{noEntries}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 16px; border-radius: 16px; background: var(--card); font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.emptyDiary}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{hasEntries}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: baseline; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{diarySpotLabel}} · {{t.painOverTime}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 800; color: var(--ink)"]],"c":["{{chartSel}}"]}," "]}," ",{"t":"div","a":[["style","position: relative; width: 318px; height: 150px; max-width: 100%"]],"c":[" ",{"t":"svg","a":[["width","318"],["height","150"],["viewBox","0 0 318 150"],["role","img"],["aria-label","{{t.lcChartAlt}}"],["style","position: absolute; left: 0; top: 0"]],"c":[" ",{"t":"path","a":[["d","M26 14 L304 14 M26 69 L304 69 M26 124 L304 124"],["style","stroke: var(--line)"],["stroke-width","1"],["fill","none"]],"c":[]}," ",{"t":"text","a":[["x","20"],["y","18"],["text-anchor","end"],["font-size","10"],["style","fill: var(--muted)"]],"c":["10"]}," ",{"t":"text","a":[["x","20"],["y","73"],["text-anchor","end"],["font-size","10"],["style","fill: var(--muted)"]],"c":["5"]}," ",{"t":"text","a":[["x","20"],["y","128"],["text-anchor","end"],["font-size","10"],["style","fill: var(--muted)"]],"c":["0"]}," ",{"t":"path","a":[["d","{{chartLine}}"],["stroke","{{accent}}"],["stroke-width","2"],["fill","none"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[]}," "]}," ",{"t":"sc-for","a":[["list","{{chartPoints}}"],["as","cp"],["hint-placeholder-count","5"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{cp.label}}"],["aria-pressed","{{cp.pressed}}"],["onClick","{{cp.pick}}"],["style","position: absolute; left: {{cp.left}}px; top: {{cp.top}}px; width: 24px; height: 24px; padding: 0; border: 0; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"span","a":[["style","display: block; width: 10px; height: 10px; border-radius: 999px; background: {{cp.dotBg}}; border: 2px solid {{cp.dotRing}}; box-shadow: 0 0 0 2px var(--card)"]],"c":[]}," "]}," "]}," ",{"t":"sc-for","a":[["list","{{chartXLabels}}"],["as","xl"],["hint-placeholder-count","5"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; left: {{xl.left}}px; top: 132px; width: 40px; text-align: center; font-size: 10px; color: var(--muted)"]],"c":["{{xl.text}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; font-weight: 700; color: var(--ink)"]],"c":["{{trendText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{mnShow}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["aria-labelledby","mn-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","mn-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{mnH}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{mnStats}}"],["as","ms"],["hint-placeholder-count","4"]],"c":[" ",{"t":"div","a":[["style","padding: 10px 12px; border-radius: 12px; background: var(--soft); display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"span","a":[["style","font-size: 12px; color: var(--muted)"]],"c":["{{ms.k}}"]}," ",{"t":"span","a":[["style","font-size: 16px; font-weight: 800"]],"c":["{{ms.v}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; font-weight: 700"]],"c":["{{mnTrend}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--ink2)"]],"c":["{{mnHelped}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openReport}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; align-self: flex-start; border: 1px solid var(--line); background: var(--card); color: var(--ink)"]],"c":["{{reportSub}}"]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k68}}"]}," ",{"t":"sc-for","a":[["list","{{insights}}"],["as","ins"],["hint-placeholder-count","2"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: {{ins.bg}}; color: {{ins.color}}; font-size: 14px; line-height: 1.4; font-weight: 700"]],"c":["{{ins.text}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{noInsights}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.k69}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wkShow}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"section","a":[["aria-labelledby","wk-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","wk-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.wkH}}"]}," ",{"t":"p","a":[["style","margin: 0; display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap"]],"c":[{"t":"span","a":[["style","font-size: 26px; font-weight: 800; color: {{wkColor}}"]],"c":["{{wkBig}}"]},{"t":"span","a":[["style","font-size: 13px; font-weight: 700; color: var(--muted)"]],"c":["{{wkSub}}"]}]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{wkStats}}"],["as","ws"],["hint-placeholder-count","3"]],"c":[" ",{"t":"span","a":[["style","padding: 5px 10px; border-radius: 999px; background: var(--soft); font-size: 12px; font-weight: 800; color: var(--ink)"]],"c":["{{ws.text}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{sideShow}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["aria-labelledby","side-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","side-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.sideH}}"]}," ",{"t":"sc-for","a":[["list","{{sideBars}}"],["as","sb"],["hint-placeholder-count","2"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 10px"]],"c":[" ",{"t":"span","a":[["style","width: 92px; flex: 0 0 auto; font-size: 13px; font-weight: 700"]],"c":["{{sb.label}}"]}," ",{"t":"span","a":[["style","flex: 1 1 auto; height: 12px; border-radius: 999px; background: var(--soft); overflow: hidden"]],"c":[{"t":"span","a":[["style","display: block; width: {{sb.w}}%; height: 100%; border-radius: 999px; background: {{sb.color}}"]],"c":[]}]}," ",{"t":"span","a":[["style","width: 44px; flex: 0 0 auto; text-align: right; font-size: 13px; font-weight: 800"]],"c":["{{sb.avg}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; font-weight: 700"]],"c":["{{sideText}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--muted)"]],"c":["{{t.sideNote}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{sideHint}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 14px; background: var(--card); border: 1px dashed var(--line); font-size: 13px; line-height: 1.45; color: var(--ink2)"]],"c":["{{sideHintText}}"]}," "]}," ",{"t":"section","a":[["aria-labelledby","fc-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"h2","a":[["id","fc-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.fcH}}"]}," ",{"t":"span","a":[["style","padding: 3px 9px; border-radius: 999px; background: #2A2118; color: #F5D98B; font-size: 11px; font-weight: 800"]],"c":["Premium"]}," "]}," ",{"t":"sc-if","a":[["value","{{fcLocked}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":["{{t.fcTeaser}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openPaywall}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 16px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.fcUnlock}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{fcOpen}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: {{fcBg}}; color: {{fcFg}}; font-size: 15px; font-weight: 800"]],"c":["{{fcLevel}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink)"]],"c":["{{fcText}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{fcBasis}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted)"]],"c":["{{checkLbl.when}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 8px"]],"c":[" ",{"t":"label","a":[["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{checkLbl.date}} ",{"t":"input","a":[["type","date"],["max","{{checkMaxDate}}"],["value","{{checkDateVal}}"],["onChange","{{setCheckDate}}"],["style","min-height: 42px; padding: 0 8px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," ",{"t":"label","a":[["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{checkLbl.time}} ",{"t":"input","a":[["type","time"],["step","60"],["value","{{checkTimeVal}}"],["onChange","{{setCheckTime}}"],["style","min-height: 42px; padding: 0 8px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," "]}," ",{"t":"p","a":[["style","margin: -2px 0 0; font-size: 12px; color: var(--muted)"]],"c":["{{checkTimeHint}}"]}," ",{"t":"sc-if","a":[["value","{{checkIsPast}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 12px; background: var(--tealsoft)"]],"c":[" ",{"t":"span","a":[["style","flex: 1 1 160px; font-size: 13px; font-weight: 800; color: var(--tealtext)"]],"c":["{{checkPastNote}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{checkToday}}"],["style","min-height: 34px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{checkLbl.today}}"]}," "]}," "]}," ",{"t":"label","a":[["for","check-act"],["style","font-size: 14px; font-weight: 800"]],"c":["{{checkLbl.act}}"]}," ",{"t":"select","a":[["id","check-act"],["value","{{checkActVal}}"],["onChange","{{setCheckAct}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[" ",{"t":"sc-for","a":[["list","{{checkActOpts}}"],["as","ca"],["hint-placeholder-count","14"]],"c":[{"t":"option","a":[["value","{{ca.value}}"]],"c":["{{ca.label}}"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{checkActIsOther}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"input","a":[["type","text"],["value","{{checkActOther}}"],["onChange","{{setCheckActOther}}"],["placeholder","{{checkLbl.other}}"],["aria-label","{{checkLbl.other}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[]}," "]}," ",{"t":"label","a":[["for","check-range"],["style","font-size: 16px; font-weight: 800; margin-top: 4px"]],"c":["{{t.howIsYour}} {{diarySpotLower}} {{checkWhenQ}}"]}," ",{"t":"p","a":[["style","margin: 0; display: flex; align-items: baseline; gap: 8px"]],"c":[{"t":"span","a":[["style","font-size: 28px; font-weight: 800"]],"c":["{{checkPain}}"]},{"t":"span","a":[["style","font-size: 13px; font-weight: 700; color: var(--muted)"]],"c":["/ 10 · {{checkWord}}"]}]}," ",{"t":"input","a":[["id","check-range"],["type","range"],["min","0"],["max","10"],["step","1"],["value","{{checkPain}}"],["onChange","{{setCheckPain}}"],["style","width: 100%; accent-color: {{accent}}"]],"c":[]}," ",{"t":"p","a":[["id","trig-h"],["style","margin: 4px 0 0; font-size: 14px; font-weight: 800"]],"c":["{{t.k70}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","trig-h"],["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{triggerChips}}"],["as","tg"],["hint-placeholder-count","7"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{tg.pressed}}"],["onClick","{{tg.pick}}"],["style","min-height: 36px; padding: 0 12px; border-radius: 999px; border: {{tg.border}}; background: {{tg.bg}}; color: {{tg.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{tg.label}}"]}," "]}," "]}," ",{"t":"label","a":[["for","check-note"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k71}}"]}," ",{"t":"textarea","a":[["id","check-note"],["rows","2"],["value","{{checkNote}}"],["onChange","{{setCheckNote}}"],["placeholder","{{t.k117}}"],["style","padding: 10px 12px; border-radius: 12px; border: 1px solid var(--line); font-family: inherit; font-size: 15px; resize: vertical"]],"c":[]}," ",{"t":"button","a":[["type","button"],["onClick","{{checkIn}}"],["style","min-height: 48px; border: 0; border-radius: 14px; background: {{accent}}; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{checkSaveText}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{freeText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{hlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["aria-labelledby","hl-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","hl-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{hlCardH}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 4px; align-items: end"]],"c":[" ",{"t":"sc-for","a":[["list","{{hlDays}}"],["as","hd"],["hint-placeholder-count","7"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; align-items: center; gap: 3px"]],"c":[" ",{"t":"span","a":[["style","font-size: 10px; font-weight: 700; color: var(--muted)"]],"c":["{{hd.steps}}"]}," ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 70%; height: {{hd.bar}}px; border-radius: 6px 6px 2px 2px; background: {{accent}}; opacity: 0.85"]],"c":[]}," ",{"t":"span","a":[["style","font-size: 11px; font-weight: 800; color: {{hd.low}}"]],"c":["{{hd.sleep}}"]}," ",{"t":"span","a":[["style","font-size: 10px; color: var(--muted)"]],"c":["{{hd.day}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--soft); font-size: 14px; line-height: 1.4; font-weight: 700"]],"c":["{{hlInsight}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 11px; color: var(--muted)"]],"c":["{{hlDemo}}"]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k78}}"]}," ",{"t":"label","a":[["for","tx-date"],["style","display: flex; flex-direction: column; gap: 4px; font-size: 14px; font-weight: 800"]],"c":["{{txDateLbl}} ",{"t":"input","a":[["id","tx-date"],["type","date"],["max","{{txMaxDate}}"],["value","{{txDateVal}}"],["onChange","{{setTxDate}}"],["style","min-height: 42px; padding: 0 10px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," ",{"t":"label","a":[["for","tx-what"],["style","font-size: 14px; font-weight: 800"]],"c":["{{t.k79}}"]}," ",{"t":"select","a":[["id","tx-what"],["value","{{txWhat}}"],["onChange","{{setTxWhat}}"],["style","min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); font-family: inherit; font-size: 15px"]],"c":[" ",{"t":"sc-for","a":[["list","{{txOptions}}"],["as","to"],["hint-placeholder-count","5"]],"c":[{"t":"option","a":[["value","{{to.value}}"]],"c":["{{to.label}}"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{txNeedsHelped}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["id","tx-h"],["style","margin: 0; font-size: 14px; font-weight: 800"]],"c":["{{t.k80}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","tx-h"],["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{txHelpedChips}}"],["as","th"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{th.pressed}}"],["onClick","{{th.pick}}"],["style","min-height: 36px; padding: 0 12px; border-radius: 999px; border: {{th.border}}; background: {{th.bg}}; color: {{th.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{th.label}}"]}," "]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{logTreatment}}"],["style","min-height: 44px; border-radius: 14px; border: 1px solid {{accent}}; background: var(--tealsoft); color: var(--tealtext); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{txLogText}}"]}," ",{"t":"sc-if","a":[["value","{{hasTxSummary}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{txSummary}}"],["as","ts"],["hint-placeholder-count","3"]],"c":[" ",{"t":"span","a":[["style","padding: 5px 10px; border-radius: 999px; background: var(--bg); font-size: 12px; font-weight: 700; color: var(--ink)"]],"c":["{{ts.name}}: {{ts.text}}"]}," "]}," "]}," "]}," ",{"t":"sc-for","a":[["list","{{txList}}"],["as","tl"],["hint-placeholder-count","3"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 0; border-top: 1px solid var(--soft); font-size: 13px"]],"c":[" ",{"t":"span","a":[],"c":[{"t":"strong","a":[],"c":["{{tl.date}}"]}," · {{tl.what}}"]}," ",{"t":"span","a":[["style","display: flex; align-items: center; gap: 8px"]],"c":[" ",{"t":"span","a":[["style","font-weight: 800; color: {{tl.color}}"]],"c":["{{tl.helped}}"]}," ",{"t":"sc-if","a":[["value","{{tl.notEditing}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{tl.editLabel}}"],["title","{{tl.editText}}"],["onClick","{{tl.edit}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 20h4L19 9l-4-4L4 16z"]],"c":[]},{"t":"path","a":[["d","M13.5 6.5l4 4"]],"c":[]}]}]}," "]}," ",{"t":"sc-if","a":[["value","{{tl.notAsking}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{tl.delLabel}}"],["title","{{tl.yesText}}"],["onClick","{{tl.ask}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 7h16M10 11v6M14 11v6M6 7l1 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-12M9 7V4h6v3"]],"c":[]}]}]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{tl.editing}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{tl.edHead}}"],["style","padding: 12px 14px; border-radius: 14px; background: var(--card); border: 2px solid {{tl.accent}}; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{tl.edHead}}"]}," ",{"t":"label","a":[["for","{{tl.edId}}"],["style","font-size: 13px; font-weight: 800"]],"c":["{{tl.edWhatLbl}}"]}," ",{"t":"select","a":[["id","{{tl.edId}}"],["value","{{tl.edWhat}}"],["onChange","{{tl.edSetWhat}}"],["style","min-height: 42px; padding: 0 12px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[" ",{"t":"sc-for","a":[["list","{{tl.edOptions}}"],["as","eo"],["hint-placeholder-count","5"]],"c":[{"t":"option","a":[["value","{{eo.value}}"]],"c":["{{eo.label}}"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{tl.edNeedsHelped}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 800"]],"c":["{{tl.edHelpedLbl}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{tl.edHelpedLbl}}"],["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{tl.edHelped}}"],["as","eh"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{eh.pressed}}"],["onClick","{{eh.pick}}"],["style","min-height: 34px; padding: 0 10px; border-radius: 999px; border: {{eh.border}}; background: {{eh.bg}}; color: {{eh.fg}}; font-size: 12px; font-weight: 700; cursor: pointer"]],"c":["{{eh.label}}"]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{tl.edSave}}"],["style","flex: 1 1 auto; min-height: 42px; border-radius: 12px; border: 0; background: {{tl.accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{tl.edSaveText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{tl.edCancel}}"],["style","flex: 0 0 auto; min-height: 42px; padding: 0 16px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{tl.edCancelText}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{tl.asking}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{tl.askText}}"],["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; background: #FDE7E2"]],"c":[" ",{"t":"span","a":[["style","flex: 1 1 140px; font-size: 13px; font-weight: 800; color: #7A1E10"]],"c":["{{tl.askText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{tl.remove}}"],["style","min-height: 36px; padding: 0 14px; border-radius: 999px; border: 0; background: #7A1E10; color: #FFFFFF; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{tl.yesText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{tl.keep}}"],["style","min-height: 36px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: #FFFFFF; color: #1F2A30; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{tl.noText}}"]}," "]}," "]}," "]}," "]}," ",{"t":"section","a":[["aria-labelledby","md-h"],["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","md-h"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{mdH}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 8px; align-items: end"]],"c":[" ",{"t":"label","a":[["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{mdWhatLbl}} ",{"t":"select","a":[["value","{{mdWhat}}"],["onChange","{{mdSetWhat}}"],["style","min-height: 42px; padding: 0 10px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[" ",{"t":"sc-for","a":[["list","{{mdOpts}}"],["as","mo"],["hint-placeholder-count","5"]],"c":[{"t":"option","a":[["value","{{mo.value}}"]],"c":["{{mo.label}}"]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{mdNotNone}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"label","a":[["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{mdTimeLbl}} ",{"t":"input","a":[["type","time"],["value","{{mdTime}}"],["onChange","{{mdSetTime}}"],["style","min-height: 42px; padding: 0 8px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{mdNotNone}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["id","md-every"],["style","margin: 0; font-size: 13px; font-weight: 800"]],"c":["{{mdEveryLbl}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","md-every"],["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{mdEvery}}"],["as","me"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{me.pressed}}"],["onClick","{{me.pick}}"],["style","min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid {{me.border}}; background: {{me.bg}}; color: {{me.fg}}; font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{me.label}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{mdNoneConflict}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 8px 10px; border-radius: 10px; background: var(--soft); font-size: 12px; font-weight: 700; color: var(--ink2)"]],"c":["{{mdNoneConflictText}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{mdAdd}}"],["style","min-height: 44px; border-radius: 14px; border: 1px solid {{accent}}; background: var(--tealsoft); color: var(--tealtext); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{mdAddText}}"]}," ",{"t":"sc-if","a":[["value","{{mdNoneShow}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 6px 0; border-top: 1px solid var(--soft); font-size: 13px; font-weight: 700"]],"c":[" ",{"t":"span","a":[],"c":["{{mdNoneText}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{mdNoneDelLabel}}"],["onClick","{{mdNoneDel}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M6 6l12 12M18 6L6 18"]],"c":[]}]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{mdHas}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"sc-for","a":[["list","{{mdList}}"],["as","ml"],["hint-placeholder-count","2"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 6px 0; border-top: 1px solid var(--soft); font-size: 13px; font-weight: 700"]],"c":[" ",{"t":"span","a":[],"c":["{{ml.text}}"]}," ",{"t":"button","a":[["type","button"],["aria-label","{{ml.delLabel}}"],["onClick","{{ml.del}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 7h16M10 11v6M14 11v6M6 7l1 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-12M9 7V4h6v3"]],"c":[]}]}]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--muted)"]],"c":["{{mdSafe}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"h2","a":[["id","lbl-rem"],["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k82}}"]}," ",{"t":"span","a":[["style","font-size: 12px; color: var(--muted)"]],"c":["{{t.k83}}"]}," "]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{reminderOn}}"],["aria-labelledby","lbl-rem"],["onClick","{{toggleReminder}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{reminderBg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{reminderKnob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," ",{"t":"sc-if","a":[["value","{{notifAsk}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","dialog"],["aria-labelledby","notif-h"],["style","padding: 12px; border-radius: 14px; background: var(--tealsoft); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["id","notif-h"],["style","margin: 0; font-size: 15px; font-weight: 800; color: var(--tealtext)"]],"c":["{{t.lcNotifH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink)"]],"c":["{{t.lcNotifP}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{allowNotif}}"],["style","min-height: 40px; padding: 0 16px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcNotifYes}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{skipNotif}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.lcNotifNo}}"]}," "]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 10px"]],"c":[" ",{"t":"label","a":[["for","rem-time"],["style","font-size: 14px; font-weight: 700"]],"c":["{{t.k84}}"]}," ",{"t":"input","a":[["id","rem-time"],["type","time"],["step","60"],["value","{{reminderTime}}"],["onChange","{{setReminderTime}}"],["aria-describedby","rem-hint"],["style","min-height: 40px; padding: 0 10px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 15px"]],"c":[]}," "]}," ",{"t":"p","a":[["id","rem-hint"],["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{t.remHint}}"]}," ",{"t":"sc-if","a":[["value","{{showReminderPreview}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["aria-label","{{t.k118}}"],["style","padding: 10px 12px; border-radius: 14px; background: var(--bg); display: flex; gap: 10px; align-items: center"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 32px; height: 32px; border-radius: 8px; background: #2A2118; color: #F5D98B; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center"]],"c":["PM"]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column"]],"c":[{"t":"span","a":[["style","font-size: 12px; color: var(--muted)"]],"c":["PainMap · {{reminderTime}}"]},{"t":"span","a":[["style","font-size: 14px; font-weight: 700"]],"c":["{{reminderPreview}}"]}]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{reminderPreview}}"],["style","display: grid; grid-template-columns: repeat(11, minmax(0, 1fr)); gap: 3px; margin-top: -4px"]],"c":[" ",{"t":"sc-for","a":[["list","{{quickLog}}"],["as","ql"],["hint-placeholder-count","11"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{ql.label}}"],["onClick","{{ql.log}}"],["style","min-height: 36px; padding: 0; border: 0; border-radius: 8px; background: {{ql.bg}}; color: {{ql.fg}}; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{ql.n}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 11px; color: var(--muted)"]],"c":["{{quickLogNote}}"]}," "]}," "]}," ",{"t":"section","a":[["style","display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k85}}"]}," ",{"t":"sc-for","a":[["list","{{entryList}}"],["as","en"],["hint-placeholder-count","4"]],"c":[" ",{"t":"div","a":[["style","background: var(--card); border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 52px; display: flex; flex-direction: column; align-items: center"]],"c":[{"t":"span","a":[["style","font-size: 18px; font-weight: 800"]],"c":["{{en.pain}}"]},{"t":"span","a":[["style","font-size: 11px; color: var(--muted)"]],"c":["{{en.date}}"]},{"t":"sc-if","a":[["value","{{en.hasTime}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","font-size: 10px; color: var(--muted)"]],"c":["{{en.timeText}}"]}]}]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"span","a":[["style","font-size: 14px; font-weight: 800"]],"c":["{{en.spot}} · {{en.layer}}"]}," ",{"t":"span","a":[["style","font-size: 13px; color: var(--ink2)"]],"c":["{{en.cause}}"]}," ",{"t":"sc-if","a":[["value","{{en.hasAct}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","font-size: 12px; font-weight: 800; color: var(--ink)"]],"c":["{{en.actText}}"]}]}," ",{"t":"sc-if","a":[["value","{{en.hasTags}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","font-size: 12px; font-weight: 700; color: var(--tealtext)"]],"c":["{{en.tagsText}}"]}]}," ",{"t":"sc-if","a":[["value","{{en.hasNote}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","font-size: 12px; font-style: italic; color: var(--ink2)"]],"c":["“{{en.note}}”"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{en.isSample}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","flex: 0 0 auto; padding: 3px 8px; border-radius: 999px; background: var(--soft); font-size: 11px; font-weight: 700; color: var(--muted2)"]],"c":["{{en.sampleTag}}"]}]}," ",{"t":"sc-if","a":[["value","{{en.notEditing}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{en.editLabel}}"],["title","{{en.editText}}"],["onClick","{{en.edit}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 20h4L19 9l-4-4L4 16z"]],"c":[]},{"t":"path","a":[["d","M13.5 6.5l4 4"]],"c":[]}]}]}," "]}," ",{"t":"sc-if","a":[["value","{{en.notAsking}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{en.delLabel}}"],["title","{{en.yesText}}"],["onClick","{{en.ask}}"],["style","flex: 0 0 auto; width: 36px; height: 36px; padding: 0; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink2); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 7h16M10 11v6M14 11v6M6 7l1 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-12M9 7V4h6v3"]],"c":[]}]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{en.editing}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{en.edHead}}"],["style","margin-top: -4px; padding: 12px 14px; border-radius: 14px; background: var(--card); border: 2px solid {{en.accent}}; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{en.edHead}}"]}," ",{"t":"div","a":[["style","display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 8px"]],"c":[" ",{"t":"label","a":[["for","{{en.edDateId}}"],["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{en.edDateLbl}} ",{"t":"input","a":[["id","{{en.edDateId}}"],["type","date"],["max","{{en.edMax}}"],["value","{{en.edDate}}"],["onChange","{{en.edSetDate}}"],["style","min-height: 40px; padding: 0 8px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," ",{"t":"label","a":[["for","{{en.edTimeId}}"],["style","display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 800"]],"c":["{{en.edTimeLbl}} ",{"t":"input","a":[["id","{{en.edTimeId}}"],["type","time"],["step","60"],["value","{{en.edTime}}"],["onChange","{{en.edSetTime}}"],["style","min-height: 40px; padding: 0 8px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," "]}," ",{"t":"label","a":[["for","{{en.edActId}}"],["style","font-size: 13px; font-weight: 800"]],"c":["{{en.edActLbl}}"]}," ",{"t":"select","a":[["id","{{en.edActId}}"],["value","{{en.edAct}}"],["onChange","{{en.edSetAct}}"],["style","min-height: 40px; padding: 0 10px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[" ",{"t":"sc-for","a":[["list","{{en.edActOpts}}"],["as","eo"],["hint-placeholder-count","14"]],"c":[{"t":"option","a":[["value","{{eo.value}}"]],"c":["{{eo.label}}"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{en.edActIsOther}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"input","a":[["type","text"],["value","{{en.edActOther}}"],["onChange","{{en.edSetActOther}}"],["placeholder","{{en.edOtherLbl}}"],["aria-label","{{en.edOtherLbl}}"],["style","min-height: 40px; padding: 0 10px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-family: inherit; font-size: 14px"]],"c":[]}," "]}," ",{"t":"label","a":[["for","{{en.edId}}"],["style","font-size: 13px; font-weight: 800"]],"c":["{{en.edPainLbl}}: {{en.edPain}} / 10 · {{en.edWord}}"]}," ",{"t":"input","a":[["id","{{en.edId}}"],["type","range"],["min","0"],["max","10"],["step","1"],["value","{{en.edPain}}"],["onChange","{{en.edSetPain}}"],["style","width: 100%; accent-color: {{en.accent}}"]],"c":[]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 800"]],"c":["{{en.edTagsLbl}}"]}," ",{"t":"div","a":[["role","group"],["aria-label","{{en.edTagsLbl}}"],["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{en.edTags}}"],["as","eg"],["hint-placeholder-count","7"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{eg.pressed}}"],["onClick","{{eg.pick}}"],["style","min-height: 34px; padding: 0 10px; border-radius: 999px; border: {{eg.border}}; background: {{eg.bg}}; color: {{eg.fg}}; font-size: 12px; font-weight: 700; cursor: pointer"]],"c":["{{eg.label}}"]}," "]}," "]}," ",{"t":"label","a":[["for","{{en.edNoteId}}"],["style","font-size: 13px; font-weight: 800"]],"c":["{{en.edNoteLbl}}"]}," ",{"t":"textarea","a":[["id","{{en.edNoteId}}"],["rows","2"],["value","{{en.edNote}}"],["onChange","{{en.edSetNote}}"],["style","padding: 8px 10px; border-radius: 10px; border: 1px solid var(--line); font-family: inherit; font-size: 14px; resize: vertical"]],"c":[]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{en.edSave}}"],["style","flex: 1 1 auto; min-height: 42px; border-radius: 12px; border: 0; background: {{en.accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{en.edSaveText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{en.edCancel}}"],["style","flex: 0 0 auto; min-height: 42px; padding: 0 16px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{en.edCancelText}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{en.asking}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{en.askText}}"],["style","display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: -4px; padding: 10px 12px; border-radius: 12px; background: #FDE7E2"]],"c":[" ",{"t":"span","a":[["style","flex: 1 1 140px; font-size: 13px; font-weight: 800; color: #7A1E10"]],"c":["{{en.askText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{en.remove}}"],["style","min-height: 36px; padding: 0 14px; border-radius: 999px; border: 0; background: #7A1E10; color: #FFFFFF; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{en.yesText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{en.keep}}"],["style","min-height: 36px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: #FFFFFF; color: #1F2A30; font-size: 13px; font-weight: 800; cursor: pointer"]],"c":["{{en.noText}}"]}," "]}," "]}," "]}," "]}," "]}," ",{"t":"nav","a":[["aria-label","{{t.lcMainNav}}"],["style","flex: 0 0 auto; display: flex; gap: 6px; padding: 6px 12px 18px; background: var(--card); border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabFind.pressed}}"],["onClick","{{goFind}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabFind.bg}}; color: {{tabFind.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","8"]],"c":[]},{"t":"circle","a":[["cx","12"],["cy","12"],["r","3"]],"c":[]},{"t":"path","a":[["d","M12 1v3M12 20v3M1 12h3M20 12h3"]],"c":[]}]}," {{t.k54}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabExplore.pressed}}"],["onClick","{{goExplore}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabExplore.bg}}; color: {{tabExplore.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M12 3l9 5-9 5-9-5z"]],"c":[]},{"t":"path","a":[["d","M3 13l9 5 9-5"]],"c":[]}]}," {{t.k55}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabDiary.pressed}}"],["onClick","{{goDiary}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabDiary.bg}}; color: {{tabDiary.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 19V5M4 19h16M8 15l4-5 3 3 5-6"]],"c":[]}]}," {{t.k56}} "]}," ",{"t":"button","a":[["type","button"],["aria-pressed","{{tabReport.pressed}}"],["onClick","{{goReport}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 14px; background: {{tabReport.bg}}; color: {{tabReport.fg}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; font-size: 12px; font-weight: 800; cursor: pointer"]],"c":[" ",{"t":"svg","a":[["width","22"],["height","22"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"]],"c":[]},{"t":"path","a":[["d","M14 3v5h5M9 13h6M9 17h4"]],"c":[]}]}," {{tabReportLabel}} "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onPlan}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{planBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; min-width: 0"]],"c":[" ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{planTitle}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{planFor}}"]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 20px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--tealsoft); font-size: 13px; font-weight: 700; color: var(--tealtext)"]],"c":["{{planProgress}}"]}," ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.plan}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{planSee3D}}"],["style","min-height: 48px; padding: 0 16px; border-radius: 14px; border: 1px solid #1463FF; background: #E8EFFF; color: #0B2E7A; font-size: 15px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","4.5"],["r","2.5"]],"c":[]},{"t":"path","a":[["d","M12 7v7M8 10h8M9 21l3-7 3 7"]],"c":[]}]}," {{planSee3DText}} "]}," ",{"t":"section","a":[["aria-labelledby","pc-h"],["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","pc-h"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{pcH}}"]}," ",{"t":"p","a":[["style","margin: -4px 0 0; font-size: 13px; color: var(--muted)"]],"c":["{{pcP}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","pc-h"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{pcOpts}}"],["as","po"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{po.pressed}}"],["onClick","{{po.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; border: 1px solid {{po.border}}; background: {{po.bg}}; color: {{po.fg}}"]],"c":["{{po.label}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{pcHas}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--soft); font-size: 14px; line-height: 1.45; font-weight: 700; color: var(--ink)"]],"c":["{{pcMsg}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{pcHistory}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{pcStuck}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{pcOpenClinicians}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; align-self: flex-start; border: 0; background: {{accent}}; color: #FFFFFF"]],"c":["{{pcFind}}"]}," "]}," "]}," ",{"t":"sc-for","a":[["list","{{planWeeks}}"],["as","wk"],["hint-placeholder-count","3"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{wk.title}}"]}," ",{"t":"sc-if","a":[["value","{{wk.locked}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"span","a":[["style","display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: 999px; background: #2A2118; color: #F5D98B; font-size: 11px; font-weight: 800"]],"c":[" ",{"t":"svg","a":[["width","12"],["height","12"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.6"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"rect","a":[["x","5"],["y","11"],["width","14"],["height","10"],["rx","2"]],"c":[]},{"t":"path","a":[["d","M8 11V7a4 4 0 0 1 8 0v4"]],"c":[]}]},"{{wk.premiumText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wk.open}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"sc-for","a":[["list","{{wk.exercises}}"],["as","xe"],["hint-placeholder-count","3"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"div","a":[["style","display: flex; gap: 8px; align-items: stretch"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{xe.done}}"],["onClick","{{xe.toggle}}"],["style","display: flex; align-items: flex-start; gap: 12px; flex: 1 1 auto; min-width: 0; padding: 10px; border-radius: 12px; border: 1px solid {{xe.rowBorder}}; background: {{xe.rowBg}}; text-align: left; cursor: pointer; color: var(--ink)"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 22px; height: 22px; margin-top: 1px; border-radius: 6px; box-sizing: border-box; background: {{xe.mark}}; border: 2px solid {{xe.markBorder}}"]],"c":[]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px; min-width: 0"]],"c":[" ",{"t":"span","a":[["style","font-size: 14px; font-weight: 800"]],"c":["{{xe.name}} · {{xe.dose}}"]}," ",{"t":"span","a":[["style","font-size: 13px; line-height: 1.4; color: var(--ink2)"]],"c":["{{xe.how}}"]}," ",{"t":"sc-if","a":[["value","{{xe.swapped}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"span","a":[["style","font-size: 12px; font-weight: 700; color: var(--tealtext)"]],"c":["{{xe.swapFromLbl}} {{xe.swapFromName}}"]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{xe.hasTimer}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"sc-if","a":[["value","{{xe.timerOff}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{xe.timerLabel}}"],["onClick","{{xe.timerStart}}"],["style","flex: 0 0 auto; width: 48px; padding: 0; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); cursor: pointer; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"circle","a":[["cx","12"],["cy","13"],["r","8"]],"c":[]},{"t":"path","a":[["d","M12 9v4l2.5 2.5M10 2h4"]],"c":[]}]}]}," "]}]}," ",{"t":"sc-if","a":[["value","{{xe.hasDemo}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-expanded","{{xe.demoOpen}}"],["onClick","{{xe.toggleDemo}}"],["style","flex: 0 0 auto; min-width: 64px; padding: 0 10px; border-radius: 12px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{xe.demoText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{xe.timerOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","timer"],["aria-live","off"],["style","padding: 12px; border-radius: 12px; background: var(--tealsoft); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: baseline; justify-content: space-between; gap: 8px"]],"c":[" ",{"t":"span","a":[["style","font-size: 32px; font-weight: 800; font-variant-numeric: tabular-nums; color: var(--tealtext)"]],"c":["{{xe.timerLeft}}"]}," ",{"t":"span","a":[["style","font-size: 13px; font-weight: 800; color: var(--tealtext)"]],"c":["{{xe.timerSet}}"]}," "]}," ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; height: 6px; border-radius: 999px; background: var(--card); overflow: hidden"]],"c":[{"t":"span","a":[["style","display: block; height: 100%; width: {{xe.timerPct}}%; background: var(--tealtext)"]],"c":[]}]}," ",{"t":"div","a":[["style","display: flex; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{xe.timerPause}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: 0; background: var(--tealtext); color: #FFFFFF; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{xe.timerPauseText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{xe.timerStop}}"],["style","min-height: 38px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{xe.timerStopText}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{xe.demoOpen}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; justify-content: center; padding: 8px; border-radius: 12px; background: var(--stage); color: var(--stageink)"]],"c":[" ",{"t":"svg","a":[["viewBox","0 0 120 100"],["width","180"],["height","150"],["aria-hidden","true"]],"c":[" ",{"t":"path","a":[["d","M4 95.5L116 95.5"],["stroke","#C9B9A0"],["stroke-width","2"]],"c":[]}," ",{"t":"sc-for","a":[["list","{{xe.demo.props}}"],["as","pp"],["hint-placeholder-count","1"]],"c":[{"t":"path","a":[["d","{{pp.d}}"],["stroke","{{pp.stroke}}"],["stroke-width","{{pp.w}}"],["fill","{{pp.fill}}"],["stroke-linejoin","round"]],"c":[]}]}," ",{"t":"sc-for","a":[["list","{{xe.demo.parts}}"],["as","pt"],["hint-placeholder-count","6"]],"c":[{"t":"path","a":[["d","{{pt.d0}}"],["stroke","{{pt.stroke}}"],["stroke-width","{{pt.w}}"],["fill","{{pt.fill}}"],["opacity","{{pt.op}}"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"sc-if","a":[["value","{{pt.anim}}"],["hint-placeholder-val","{{ true }}"]],"c":[{"t":"animate","a":[["attributeName","d"],["values","{{pt.vals}}"],["keyTimes","{{pt.kt}}"],["dur","{{pt.dur}}"],["repeatCount","indefinite"]],"c":[]}]},{"t":"sc-if","a":[["value","{{pt.opAnim}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"animate","a":[["attributeName","opacity"],["values","{{pt.opVals}}"],["keyTimes","{{pt.kt}}"],["dur","{{pt.dur}}"],["repeatCount","indefinite"]],"c":[]}]}]}]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{xe.canSwap}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 8px; flex-wrap: wrap"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-expanded","{{xe.swapOpen}}"],["onClick","{{xe.toggleSwap}}"],["style","display: flex; align-items: center; gap: 6px; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); background: {{xe.swapBg}}; color: var(--tealtext); font-size: 13px; font-weight: 800; cursor: pointer"]],"c":[{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"]],"c":[]}]},"{{xe.swapText}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{xe.swapOpen}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","group"],["aria-label","{{xe.swapText}}"],["style","padding: 12px; border-radius: 12px; background: var(--card); border: 1px solid var(--line); display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.4; color: var(--ink2)"]],"c":["{{xe.swapHint}}"]}," ",{"t":"sc-for","a":[["list","{{xe.swapGroups}}"],["as","sg"],["hint-placeholder-count","3"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted)"]],"c":["{{sg.head}}"]}," ",{"t":"sc-for","a":[["list","{{sg.items}}"],["as","si"],["hint-placeholder-count","4"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{si.pressed}}"],["onClick","{{si.pick}}"],["style","display: flex; justify-content: space-between; align-items: center; gap: 8px; min-height: 44px; padding: 8px 12px; border-radius: 12px; border: {{si.border}}; background: {{si.bg}}; color: var(--ink); font-size: 14px; font-weight: 700; text-align: left; cursor: pointer"]],"c":[{"t":"span","a":[],"c":["{{si.name}}"]},{"t":"span","a":[["style","font-size: 12px; font-weight: 700; color: var(--muted); white-space: nowrap"]],"c":["{{si.dose}}"]}]}," "]}," "]}," "]}," "]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wk.locked}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{wk.unlock}}"],["style","min-height: 44px; border: 1px dashed var(--line); border-radius: 12px; background: var(--soft2); color: var(--stageink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{wk.unlockText}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{t.k86}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onPremium}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 16px 20px 16px; display: flex; flex-direction: column; gap: 16px; background: var(--stage)"]],"c":[" ",{"t":"div","a":[["style","display: flex; justify-content: flex-end"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.k119}}"],["onClick","{{closePaywall}}"],["style","width: 40px; height: 40px; border: 0; border-radius: 999px; background: rgba(42,33,24,0.08); color: var(--stageink); cursor: pointer; display: flex; align-items: center; justify-content: center"]],"c":[" ",{"t":"svg","a":[["width","18"],["height","18"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.6"],["stroke-linecap","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M6 6l12 12M18 6L6 18"]],"c":[]}]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--goldtext)"]],"c":["{{t.k87}}"]}," ",{"t":"h1","a":[["style","margin: 0; font-family: 'Source Serif 4', Georgia, serif; font-size: 30px; line-height: 1.15; font-weight: 700; color: var(--stageink)"]],"c":["{{premiumH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 15px; line-height: 1.5; color: var(--stagemute)"]],"c":["{{premiumP}}"]}," "]}," ",{"t":"ul","a":[["style","margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"sc-for","a":[["list","{{perks}}"],["as","pk"],["hint-placeholder-count","5"]],"c":[" ",{"t":"li","a":[["style","display: flex; gap: 10px; align-items: flex-start"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#2E7D4F"],["stroke-width","3"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}," ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 1px"]],"c":[{"t":"span","a":[["style","font-size: 15px; font-weight: 800; color: var(--stageink)"]],"c":["{{pk.title}}"]},{"t":"span","a":[["style","font-size: 13px; color: var(--stagemute)"]],"c":["{{pk.text}}"]}]}," "]}," "]}," "]}," ",{"t":"div","a":[["role","group"],["aria-label","{{t.k120}}"],["style","display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{prices}}"],["as","pr"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{pr.pressed}}"],["onClick","{{pr.pick}}"],["style","display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 60px; padding: 10px 14px; border-radius: 14px; border: {{pr.ring}}; background: {{pr.cardBg}}; text-align: left; cursor: pointer; color: var(--stageink)"]],"c":[" ",{"t":"span","a":[["style","display: flex; flex-direction: column; gap: 2px"]],"c":[{"t":"span","a":[["style","font-size: 15px; font-weight: 800"]],"c":["{{pr.name}}"]},{"t":"span","a":[["style","font-size: 12px; color: var(--stagemute)"]],"c":["{{pr.note}}"]}]}," ",{"t":"span","a":[["style","font-size: 14px; font-weight: 800"]],"c":["{{pr.price}}"]}," "]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 11px; line-height: 1.5; color: var(--stagemute)"]],"c":["{{t.k90}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 4px 14px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openTerms}}"],["style","padding: 0; min-height: 32px; border: 0; background: none; color: var(--tealtext); font-size: 12px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lgTermsT}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openPrivacy}}"],["style","padding: 0; min-height: 32px; border: 0; background: none; color: var(--tealtext); font-size: 12px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lgPrivacyT}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openRefunds}}"],["style","padding: 0; min-height: 32px; border: 0; background: none; color: var(--tealtext); font-size: 12px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lgRefundsT}}"]}," "]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; padding: 12px 20px 22px; background: var(--stage); border-top: 1px solid var(--stageline); display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.45; color: var(--stageink)"]],"c":["{{billingText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{startPremium}}"],["style","width: 100%; min-height: 54px; border: 0; border-radius: 16px; background: #2A2118; color: #F5D98B; font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{trialText}}"]}," ",{"t":"div","a":[["style","display: flex; justify-content: space-between"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{closePaywall}}"],["style","min-height: 44px; padding: 0 18px; border: 1px solid var(--stageline); border-radius: 12px; background: var(--card); color: var(--stageink); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{notNow}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{restorePurchase}}"],["style","min-height: 36px; border: 0; background: transparent; color: var(--stagemute); font-size: 13px; font-weight: 700; cursor: pointer"]],"c":["{{t.k91}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onLegal}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{legalBack}}"],["style","width: 44px; height: 44px; flex: 0 0 auto; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; line-height: 1.2; font-weight: 800"]],"c":["{{lgTitle}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"sc-if","a":[["value","{{lgIsDoc}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--warnbg); color: var(--warntext); font-size: 13px; font-weight: 700"]],"c":["{{lg.draft}}"]}," "]}," ",{"t":"sc-for","a":[["list","{{lgSections}}"],["as","ls"],["hint-placeholder-count","5"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{ls.h}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.55; color: var(--ink2); white-space: pre-line"]],"c":["{{ls.p}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{lgIsChoices}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{lg.essentialH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2)"]],"c":["{{lg.essentialP}}"]}," "]}," ",{"t":"sc-for","a":[["list","{{lgChoices}}"],["as","c"],["hint-placeholder-count","4"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; align-items: center; gap: 12px"]],"c":[" ",{"t":"span","a":[["style","flex: 1 1 auto; display: flex; flex-direction: column; gap: 2px"]],"c":[{"t":"span","a":[["style","font-size: 15px; font-weight: 800"]],"c":["{{c.label}}"]},{"t":"span","a":[["style","font-size: 13px; line-height: 1.45; color: var(--ink2)"]],"c":["{{c.desc}}"]}]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{c.on}}"],["aria-label","{{c.label}}"],["onClick","{{c.toggle}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{c.bg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{c.knob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{lg.logH}}"]}," ",{"t":"sc-if","a":[["value","{{lgNoLog}}"],["hint-placeholder-val","{{ true }}"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{lg.logEmpty}}"]}]}," ",{"t":"sc-for","a":[["list","{{lgLog}}"],["as","lgl"],["hint-placeholder-count","2"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--ink2)"]],"c":["{{lgl.text}}"]}]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{withdrawAll}}"],["style","min-height: 44px; border-radius: 14px; border: 1px solid var(--dangerline); background: var(--card); color: var(--dangertext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{lg.withdraw}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{lgIsEmail}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{lg.emailP}}"]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; align-items: center; gap: 12px"]],"c":[" ",{"t":"span","a":[["id","lbl-email-tips"],["style","flex: 1 1 auto; font-size: 15px; font-weight: 800"]],"c":["{{lgEmailMarketing.label}}"]}," ",{"t":"button","a":[["type","button"],["role","switch"],["aria-checked","{{lgEmailMarketing.on}}"],["aria-labelledby","lbl-email-tips"],["onClick","{{lgEmailMarketing.toggle}}"],["style","flex: 0 0 auto; position: relative; width: 48px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: {{lgEmailMarketing.bg}}; cursor: pointer"]],"c":[{"t":"span","a":[["style","position: absolute; top: 3px; left: {{lgEmailMarketing.knob}}; width: 22px; height: 22px; border-radius: 999px; background: var(--card)"]],"c":[]}]}," "]}," ",{"t":"h2","a":[["style","margin: 4px 0 0; font-size: 13px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted)"]],"c":["{{lg.previewH}}"]}," ",{"t":"article","a":[["style","background: var(--card); border: 1px solid var(--line2); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 15px; font-weight: 800"]],"c":["{{lg.previewSubj}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{lg.previewBody}}"]}," ",{"t":"p","a":[["style","margin: 6px 0 0; padding-top: 8px; border-top: 1px solid var(--line2); font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{lg.previewFoot}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 14px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{unsubscribe}}"],["style","padding: 0; min-height: 32px; border: 0; background: none; color: var(--tealtext); font-size: 13px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lg.unsub}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{lgEmailMarketing.toggle}}"],["style","padding: 0; min-height: 32px; border: 0; background: none; color: var(--tealtext); font-size: 13px; font-weight: 800; text-decoration: underline; cursor: pointer"]],"c":["{{lg.managePrefs}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{lgIsDelete}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"label","a":[["for","del-email"],["style","font-size: 14px; font-weight: 800"]],"c":["{{lg.delEmailL}}"]}," ",{"t":"input","a":[["id","del-email"],["type","email"],["autocomplete","email"],["value","{{delEmail}}"],["onChange","{{setDelEmail}}"],["placeholder","you@example.com"],["style","min-height: 48px; padding: 0 14px; border-radius: 12px; border: 1px solid var(--line); font-family: inherit; font-size: 16px"]],"c":[]}," ",{"t":"p","a":[["id","del-scope-h"],["style","margin: 4px 0 0; font-size: 14px; font-weight: 800"]],"c":["{{lg.delScopeL}}"]}," ",{"t":"div","a":[["role","group"],["aria-labelledby","del-scope-h"],["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"sc-for","a":[["list","{{delScopes}}"],["as","dsc"],["hint-placeholder-count","3"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-pressed","{{dsc.pressed}}"],["onClick","{{dsc.pick}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; border: {{dsc.border}}; background: {{dsc.bg}}; color: {{dsc.fg}}; font-size: 14px; font-weight: 700; cursor: pointer"]],"c":["{{dsc.label}}"]}," "]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{sendDeletion}}"],["style","min-height: 48px; border-radius: 14px; border: 0; background: #9A1B0B; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{lg.delSend}}"]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onSources}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{sourcesBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{t.lcSourcesH}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{t.lcSourcesP}}"]}," ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--warnbg); color: var(--warntext); font-size: 13px; font-weight: 700"]],"c":["{{t.lcReviewNote}}"]}," ",{"t":"sc-for","a":[["list","{{sources}}"],["as","src"],["hint-placeholder-count","4"]],"c":[" ",{"t":"article","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"span","a":[["style","font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--tealtext)"]],"c":["{{src.topic}}"]}," ",{"t":"span","a":[["style","font-size: 15px; font-weight: 800; line-height: 1.35"]],"c":["{{src.title}}"]}," ",{"t":"span","a":[["style","font-size: 13px; color: var(--muted)"]],"c":["{{src.who}}"]}," ",{"t":"span","a":[["style","font-size: 13px; line-height: 1.45; color: var(--ink2)"]],"c":["{{src.use}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{t.lcSourcesFoot}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onReport}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 6px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.goBack}}"],["onClick","{{reportBack}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","margin: 0; font-size: 19px; font-weight: 800"]],"c":["{{t.rpTitle}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 6px 20px 20px; display: flex; flex-direction: column; gap: 12px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.rpBuilt}}"]}," ",{"t":"div","a":[["role","note"],["style","margin: 0; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.rp}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 700"]],"c":["{{rpDate}} · {{profileText}}"]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"h2","a":[["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpWhere}}"]}," ",{"t":"div","a":[["style","display: flex; gap: 12px; align-items: flex-start"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 96px; height: 192px; position: relative; border-radius: 10px; background: var(--stage); overflow: hidden"]],"c":[" ",{"t":"sc-for","a":[["list","{{rpArt}}"],["as","ra"],["hint-placeholder-count","0"]],"c":[" ",{"t":"svg","a":[["viewBox","{{ra.vb}}"],["width","96"],["height","192"],["aria-hidden","true"],["style","position: absolute; left: 0; top: 0"]],"c":[{"t":"path","a":[["d","{{ra.d}}"],["fill","{{ra.fill}}"],["stroke","{{ra.stroke}}"],["stroke-width","{{ra.sw}}"],["vector-effect","{{ra.ve}}"],["opacity","{{ra.op}}"],["stroke-dasharray","{{ra.dash}}"]],"c":[]}]}," "]}," ",{"t":"sc-for","a":[["list","{{rpPins}}"],["as","rp"],["hint-placeholder-count","1"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","position: absolute; left: {{rp.left}}px; top: {{rp.top}}px; width: 16px; height: 16px; border-radius: 999px; background: #C62828; border: 2px solid #FFFFFF; color: #FFFFFF; font-size: 9px; font-weight: 800; display: flex; align-items: center; justify-content: center; box-sizing: border-box"]],"c":["{{rp.n}}"]}," "]}," "]}," ",{"t":"ol","a":[["style","margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.5; display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"sc-for","a":[["list","{{rpSpots}}"],["as","rs"],["hint-placeholder-count","2"]],"c":[{"t":"li","a":[],"c":[{"t":"strong","a":[],"c":["{{rs.label}}"]}," · {{rs.layer}} · {{rs.view}}"]}]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{rpNoSpots}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.rpNone}}"]}]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"h2","a":[["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpAnswers}}"]}," ",{"t":"dl","a":[["style","margin: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 4px 12px; font-size: 13px"]],"c":[" ",{"t":"sc-for","a":[["list","{{rpAnswers}}"],["as","an"],["hint-placeholder-count","5"]],"c":[{"t":"dt","a":[["style","color: var(--muted)"]],"c":["{{an.k}}"]},{"t":"dd","a":[["style","margin: 0; font-weight: 700"]],"c":["{{an.v}}"]}]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"h2","a":[["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpCauses}}"]}," ",{"t":"ol","a":[["style","margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.5"]],"c":[" ",{"t":"sc-for","a":[["list","{{rpCauses}}"],["as","rc"],["hint-placeholder-count","3"]],"c":[{"t":"li","a":[],"c":[{"t":"strong","a":[],"c":["{{rc.name}}"]}," · {{rc.match}}"]}]}," "]}," ",{"t":"sc-if","a":[["value","{{rpNoCauses}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.rpNone}}"]}]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"h2","a":[["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpDiary}}"]}," ",{"t":"sc-for","a":[["list","{{rpDiary}}"],["as","rd"],["hint-placeholder-count","3"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px"]],"c":[{"t":"strong","a":[],"c":["{{rd.date}}"]}," · {{rd.spot}} · {{rd.pain}}"]}]}," ",{"t":"sc-if","a":[["value","{{rpNoDiary}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.rpNone}}"]}]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"h2","a":[["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpTx}}"]}," ",{"t":"sc-for","a":[["list","{{rpTx}}"],["as","rt"],["hint-placeholder-count","2"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px"]],"c":[{"t":"strong","a":[],"c":["{{rt.date}}"]}," · {{rt.what}} · {{rt.helped}}"]}]}," ",{"t":"sc-if","a":[["value","{{rpNoTx}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.rpNone}}"]}]}," "]}," ",{"t":"section","a":[["aria-labelledby","sh-h"],["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["id","sh-h"],["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{shH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--ink2)"]],"c":["{{shP}}"]}," ",{"t":"sc-if","a":[["value","{{shOff}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; font-weight: 800"]],"c":["{{shWhatLbl}}"]}," ",{"t":"sc-for","a":[["list","{{shOpts}}"],["as","so"],["hint-placeholder-count","4"]],"c":[" ",{"t":"button","a":[["type","button"],["role","checkbox"],["aria-checked","{{so.on}}"],["onClick","{{so.toggle}}"],["style","display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 0; border: 0; background: transparent; color: var(--ink); font-family: inherit; font-size: 14px; text-align: left; cursor: pointer"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 22px; height: 22px; border-radius: 6px; box-sizing: border-box; border: 2px solid {{so.bd}}; background: {{so.bg}}; display: inline-flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","14"],["height","14"],["viewBox","0 0 24 24"],["fill","none"],["stroke","#FFFFFF"],["stroke-width","3.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["style","opacity: {{so.tk}}"]],"c":[{"t":"path","a":[["d","M5 12l5 5 9-10"]],"c":[]}]}]}," {{so.label}} "]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{shCreate}}"],["style","min-height: 46px; border-radius: 14px; border: 1px solid {{accent}}; background: var(--tealsoft); color: var(--tealtext); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{shCreateText}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{shOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--soft); font-size: 15px; font-weight: 800; word-break: break-all"]],"c":["{{shLink}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; color: var(--muted)"]],"c":["{{shExpires}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{shCopy}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; border: 0; background: {{accent}}; color: #FFFFFF"]],"c":["{{shCopyText}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{shStop}}"],["style","min-height: 40px; padding: 0 14px; border-radius: 999px; font-size: 14px; font-weight: 800; cursor: pointer; border: 1px solid #B3261E; background: var(--card); color: #B3261E"]],"c":["{{shStopText}}"]}," "]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--card); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 8px"]],"c":[{"t":"label","a":[["for","rp-notes"],["style","margin: 0; font-size: 13px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted)"]],"c":["{{t.rpQ}}"]}," ",{"t":"textarea","a":[["id","rp-notes"],["rows","3"],["value","{{rpNotes}}"],["onChange","{{setRpNotes}}"],["placeholder","{{t.rpQph}}"],["style","padding: 10px 12px; border-radius: 12px; border: 1px solid var(--line); font-family: inherit; font-size: 15px; resize: vertical"]],"c":[]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 11.5px; color: var(--muted)"]],"c":["{{t.rpFoot}}"]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; flex-direction: column; gap: 6px; padding: 12px 20px 22px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{rpShareAct}}"],["style","min-height: 52px; border: 0; border-radius: 16px; background: {{accent}}; color: #FFFFFF; font-size: 16px; font-weight: 800; cursor: pointer"]],"c":["{{t.rpShare}}"]}," ",{"t":"sc-if","a":[["value","{{hasPrintLayout}}"],["hint-placeholder-val","{{ true }}"]],"c":[" ",{"t":"a","a":[["href","{{reportHref}}"],["style","align-self: center; min-height: 32px; display: inline-flex; align-items: center; font-size: 13px; font-weight: 700; color: var(--tealtext)"]],"c":["{{t.rpPrint}}"]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{onResults}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; align-items: center; gap: 8px; padding: 14px 12px 10px"]],"c":[" ",{"t":"button","a":[["type","button"],["aria-label","{{t.k115}}"],["onClick","{{goFind}}"],["style","width: 44px; height: 44px; border: 0; border-radius: 999px; background: var(--chip); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M15 18l-6-6 6-6"]],"c":[]}]}," "]}," ",{"t":"h1","a":[["style","flex: 1 1 auto; min-width: 0; margin: 0; font-size: 20px; font-weight: 800"]],"c":["{{t.k92}}"]}," ",{"t":"sc-if","a":[["value","{{wlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openWaitlist}}"],["style","flex: 0 0 auto; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 14px; font-weight: 800; white-space: nowrap; cursor: pointer; display: flex; align-items: center; gap: 6px"]],"c":[{"t":"svg","a":[["width","16"],["height","16"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M4 6h16v12H4z"]],"c":[]},{"t":"path","a":[["d","M4 7l8 6 8-6"]],"c":[]}]},"{{wlShort}}"]}," "]}," "]}," ",{"t":"div","a":[["role","note"],["style","margin: 0 20px 8px; display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border-radius: 14px; background: #FFF4D6; border: 2px solid #E8A33D; color: #3D2A00"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.4"],["stroke-linecap","round"],["aria-hidden","true"],["style","flex: 0 0 auto; margin-top: 1px"]],"c":[{"t":"circle","a":[["cx","12"],["cy","12"],["r","9"]],"c":[]},{"t":"path","a":[["d","M12 7.5v6M12 16.5v.5"]],"c":[]}]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13.5px; line-height: 1.45; color: #3D2A00"]],"c":[{"t":"strong","a":[["style","font-weight: 800"]],"c":["{{nd.title}}"]}," {{nd.res}}"]}," "]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 4px 20px 20px; display: flex; flex-direction: column; gap: 14px"]],"c":[" ",{"t":"section","a":[["style","background: #0F4547; color: #FFFFFF; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #B9C4D3"]],"c":["{{t.k93}}"]}," ",{"t":"h2","a":[["style","margin: 0; font-size: 24px; font-weight: 800"]],"c":["{{regionLabel}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[" ",{"t":"span","a":[["style","display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px 6px 8px; border-radius: 999px; background: rgba(255,255,255,0.12); font-size: 13px; font-weight: 700"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","display: block; width: 16px; height: 16px; border-radius: 5px; background: {{layer.color}}"]],"c":[]},"{{layer.name}} "]}," ",{"t":"sc-for","a":[["list","{{chosenFeels}}"],["as","cf"],["hint-placeholder-count","1"]],"c":[" ",{"t":"span","a":[["style","display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; background: rgba(255,255,255,0.12); font-size: 13px; font-weight: 700"]],"c":["{{cf.label}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{hasSpot}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: #D5DDE8"]],"c":[{"t":"strong","a":[["style","color: #FFFFFF"]],"c":["{{t.k94}}"]}," {{spotText}}"]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{answerChips}}"],["as","ac"],["hint-placeholder-count","3"]],"c":[" ",{"t":"span","a":[["style","padding: 5px 10px; border-radius: 999px; background: var(--chip); font-size: 12px; font-weight: 700; color: var(--ink)"]],"c":["{{ac.label}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{goAnswers}}"],["style","min-height: 28px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 12px; font-weight: 800; cursor: pointer"]],"c":["{{t.k95}}"]}," "]}," ",{"t":"sc-if","a":[["value","{{hasUrgent}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"div","a":[["role","alert"],["style","padding: 12px 14px; border-radius: 14px; background: var(--dangerbg); border: 1px solid var(--dangerline); display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; color: var(--dangertext); font-size: 14px; line-height: 1.45; font-weight: 700"]],"c":["{{urgentText}}"]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[{"t":"a","a":[["href","tel:911"],["style","display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #C62828; color: #FFFFFF; font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k35}}"]},{"t":"a","a":[["href","tel:811"],["style","display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: var(--card); border: 1px solid var(--dangerline); color: var(--dangertext); font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k96}}"]}]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":["{{t.rankedUsing}} ({{profileText}})"]}," ",{"t":"sc-if","a":[["value","{{hasMulti}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k97}}"]}," ",{"t":"sc-for","a":[["list","{{spotList}}"],["as","sl"],["hint-placeholder-count","2"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 10px"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 24px; height: 24px; border-radius: 999px; background: #2A2118; color: #FFFFFF; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center"]],"c":["{{sl.n}}"]}," ",{"t":"span","a":[["style","flex: 1 1 auto; font-size: 14px; font-weight: 700"]],"c":["{{sl.label}} · {{sl.layer}}"]}," ",{"t":"sc-if","a":[["value","{{sl.removable}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"button","a":[["type","button"],["onClick","{{sl.remove}}"],["style","min-height: 32px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--ink); font-size: 12px; font-weight: 700; cursor: pointer"]],"c":["{{sl.removeText}}"]}]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{hasPatterns}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px; border: 2px solid var(--stageink)"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 17px; font-weight: 800"]],"c":["{{t.k98}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; color: var(--muted)"]],"c":["{{t.k99}}"]}," ",{"t":"sc-for","a":[["list","{{patterns}}"],["as","pt"],["hint-placeholder-count","1"]],"c":[" ",{"t":"div","a":[["style","padding: 12px; border-radius: 12px; background: {{pt.tagBg}}; display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"h3","a":[["style","margin: 0; font-size: 15px; font-weight: 800; color: {{pt.tagFg}}"]],"c":["{{pt.title}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--ink)"]],"c":["{{pt.text}}"]}," ",{"t":"sc-if","a":[["value","{{pt.urgent}}"],["hint-placeholder-val","{{ false }}"]],"c":[{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[{"t":"a","a":[["href","tel:911"],["style","display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #C62828; color: #FFFFFF; font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{pt.c911}}"]},{"t":"a","a":[["href","tel:811"],["style","display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: var(--card); border: 1px solid var(--dangerline); color: var(--dangertext); font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{pt.c811}}"]}]}]}," "]}," "]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{isFr}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; padding: 10px 12px; border-radius: 12px; background: var(--soft); font-size: 13px; color: var(--muted2)"]],"c":["Version préliminaire : le contenu médical en français n’a pas encore été révisé par un professionnel de la santé. En cas de doute, fiez-vous à votre clinicien."]}," "]}," ",{"t":"sc-for","a":[["list","{{conditions}}"],["as","c"],["hint-placeholder-count","3"]],"c":[" ",{"t":"article","a":[["style","background: var(--card); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: flex-start; justify-content: space-between; gap: 10px"]],"c":[" ",{"t":"div","a":[["style","display: flex; flex-direction: column; gap: 6px; min-width: 0"]],"c":[" ",{"t":"span","a":[["style","align-self: flex-start; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 800; background: {{c.matchBg}}; color: {{c.matchFg}}"]],"c":["{{c.matchLabel}}"]}," ",{"t":"h3","a":[["style","margin: 0; font-size: 17px; line-height: 1.25; font-weight: 800"]],"c":["{{c.name}}"]}," "]}," ",{"t":"span","a":[["style","flex: 0 0 auto; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 800; background: {{c.tagBg}}; color: {{c.tagFg}}"]],"c":["{{c.tagLabel}}"]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2)"]],"c":["{{c.about}}"]}," ",{"t":"sc-if","a":[["value","{{c.hasWhy}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: var(--oktext); font-weight: 600"]],"c":["{{c.whyText}}"]}," "]}," ",{"t":"div","a":[["style","background: var(--bg); border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; gap: 2px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; color: var(--muted)"]],"c":["{{c.helpLabel}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink)"]],"c":["{{c.helps}}"]}," "]}," ",{"t":"button","a":[["type","button"],["onClick","{{c.openPlan}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{c.planLabel}}"]}," "]}," "]}," ",{"t":"section","a":[["style","background: var(--tealsoft); border-radius: 18px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px"]],"c":[" ",{"t":"p","a":[["style","margin: 0; font-size: 12px; font-weight: 800; color: var(--tealtext)"]],"c":["{{t.k100}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink)"]],"c":["{{regionFact}}"]}," "]}," ",{"t":"section","a":[["style","background: var(--warnbg); border: 1px solid var(--warnline); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"div","a":[["style","display: flex; align-items: center; gap: 8px; color: var(--warntext)"]],"c":[" ",{"t":"svg","a":[["width","20"],["height","20"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"],["aria-hidden","true"]],"c":[{"t":"path","a":[["d","M12 3l9.5 17h-19z"]],"c":[]},{"t":"path","a":[["d","M12 10v4"]],"c":[]},{"t":"path","a":[["d","M12 17.5v.01"]],"c":[]}]}," ",{"t":"h3","a":[["style","margin: 0; font-size: 16px; font-weight: 800"]],"c":["{{t.k101}}"]}," "]}," ",{"t":"ul","a":[["style","margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px"]],"c":[" ",{"t":"sc-for","a":[["list","{{redFlags}}"],["as","r"],["hint-placeholder-count","4"]],"c":[" ",{"t":"li","a":[["style","font-size: 14px; line-height: 1.45; color: var(--warntext)"]],"c":["{{r.text}}"]}," "]}," "]}," ",{"t":"div","a":[["style","display: flex; flex-wrap: wrap; gap: 8px"]],"c":[{"t":"a","a":[["href","tel:911"],["style","display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #C62828; color: #FFFFFF; font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k35}}"]},{"t":"a","a":[["href","tel:811"],["style","display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: var(--card); border: 1px solid var(--dangerline); color: var(--dangertext); font-size: 14px; font-weight: 800; text-decoration: none"]],"c":["{{t.k96}}"]}]}," "]}," ",{"t":"section","a":[["aria-labelledby","rr-h"],["style","background: #2A2118; border-radius: 18px; padding: 16px; display: flex; gap: 14px; align-items: center"]],"c":[" ",{"t":"span","a":[["aria-hidden","true"],["style","flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.14); color: #FFFFFF; display: flex; align-items: center; justify-content: center"]],"c":[{"t":"svg","a":[["width","24"],["height","24"],["viewBox","0 0 24 24"],["fill","none"],["stroke","currentColor"],["stroke-width","2.2"],["stroke-linecap","round"],["stroke-linejoin","round"]],"c":[{"t":"path","a":[["d","M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"]],"c":[]},{"t":"path","a":[["d","M14 3v5h5M9 13h6M9 17h4"]],"c":[]}]}]}," ",{"t":"div","a":[["style","flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 8px"]],"c":[" ",{"t":"h2","a":[["id","rr-h"],["style","margin: 0; font-size: 16px; font-weight: 800; color: #FFFFFF"]],"c":["{{rrH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 13px; line-height: 1.45; color: #E9DFCF"]],"c":["{{rrP}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openReport}}"],["style","align-self: flex-start; min-height: 40px; padding: 0 16px; border-radius: 999px; border: 0; background: #F5D98B; color: #2A2118; font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{rrBtn}}"]}," "]}," "]}," ",{"t":"sc-if","a":[["value","{{wlOn}}"],["hint-placeholder-val","{{ false }}"]],"c":[" ",{"t":"section","a":[["style","background: var(--tealsoft); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 10px"]],"c":[" ",{"t":"h2","a":[["style","margin: 0; font-size: 16px; font-weight: 800; color: var(--tealtext)"]],"c":["{{wlCardH}}"]}," ",{"t":"p","a":[["style","margin: 0; font-size: 14px; line-height: 1.45; color: var(--ink2)"]],"c":["{{wlCardP}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{openWaitlist}}"],["style","align-self: flex-start; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 0; background: {{accent}}; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{wlTitle}}"]}," "]}," "]}," ",{"t":"p","a":[["style","margin: 0; font-size: 12px; line-height: 1.5; color: var(--muted)"]],"c":["{{t.k102}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{startOver}}"],["style","align-self: flex-start; min-height: 36px; padding: 0; border: 0; background: transparent; color: var(--tealtext); font-size: 14px; font-weight: 800; cursor: pointer"]],"c":["{{t.k103}}"]}," "]}," ",{"t":"div","a":[["style","flex: 0 0 auto; display: flex; gap: 10px; padding: 12px 20px 24px; border-top: 1px solid var(--line2)"]],"c":[" ",{"t":"button","a":[["type","button"],["onClick","{{openClinicians}}"],["style","flex: 1 1 0; min-height: 52px; border: 1px solid var(--line); border-radius: 16px; background: var(--card); color: var(--ink); font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{t.k31}}"]}," ",{"t":"button","a":[["type","button"],["onClick","{{saveToDiary}}"],["style","flex: 1 1 0; min-height: 52px; border: 0; border-radius: 16px; background: {{accent}}; color: #FFFFFF; font-size: 15px; font-weight: 800; cursor: pointer"]],"c":["{{t.k104}}"]}," "]}," "]}," "]}," "];
window.PM_DEFAULTS = {"accent":"#0F6B6E","coral":"#E8735A","startView":"front","startTab":"find","startPremium":true};
window.PM_MAKE = function (DCLogic) {

const LAYERS = [
  { id: 'skin', name: 'Skin', short: 'Skin', color: '#E9B9A1', ink: '#9C5A3C', hint: 'Surface pain. Tender to light touch, stinging or itchy, or visibly red or bruised.' },
  { id: 'fat', name: 'Fat & fascia', short: 'Fat', color: '#EFD27F', ink: '#8C6A12', hint: 'Just under the skin. Sore when pressed, and may feel swollen, warm or lumpy.' },
  { id: 'muscle', name: 'Muscle', short: 'Muscle', color: '#CC5B50', ink: '#5E1A15', hint: 'A deeper ache or tightness. Worse when you use, stretch or squeeze the area.' },
  { id: 'tendon', name: 'Tendon & ligament', short: 'Tendon', color: '#D4CBB8', ink: '#5C523F', hint: 'Near a joint. Hurts with certain movements, and the joint may feel stiff or unstable.' },
  { id: 'bone', name: 'Bone & joint', short: 'Bone', color: '#ECE7DD', ink: '#5E5646', hint: 'Deep and hard to pinpoint. Aches at rest or at night, or hurts to put weight on.' },
  { id: 'organ', name: 'Organs', short: 'Organs', color: '#C23B44', ink: '#2E4060', hint: 'Deep inside the head, chest or belly. Often a dull, hard-to-place ache, sometimes with nausea, fever or other symptoms.' }
];

const FEELS = [
  { id: 'sharp', label: 'Sharp' },
  { id: 'dull', label: 'Dull ache' },
  { id: 'throb', label: 'Throbbing' },
  { id: 'burn', label: 'Burning' },
  { id: 'tingle', label: 'Tingling or numb' },
  { id: 'cramp', label: 'Cramping or comes in waves' },
  { id: 'stab', label: 'Stabbing' }
];

// x, y are in the body's 200 x 400 drawing. Front view mirrors the person: their right is on your left.
const REGIONS = {
  front: [
    { id: 'head', key: 'head', label: 'Head', x: 100, y: 24 },
    { id: 'neck-f', key: 'neck', label: 'Front of neck', x: 100, y: 64 },
    { id: 'sh-r', key: 'shoulder', label: 'Right shoulder', x: 62, y: 86 },
    { id: 'sh-l', key: 'shoulder', label: 'Left shoulder', x: 138, y: 86 },
    { id: 'chest', key: 'chest', label: 'Chest', x: 100, y: 112 },
    { id: 'abd', key: 'abdomen', label: 'Abdomen', x: 100, y: 166 },
    { id: 'wr-r', key: 'wrist', label: 'Right wrist & hand', x: 39, y: 214 },
    { id: 'wr-l', key: 'wrist', label: 'Left wrist & hand', x: 161, y: 214 },
    { id: 'hip-r', key: 'hip', label: 'Right hip & groin', x: 80, y: 212 },
    { id: 'hip-l', key: 'hip', label: 'Left hip & groin', x: 120, y: 212 },
    { id: 'kn-r', key: 'knee', label: 'Right knee', x: 81, y: 298 },
    { id: 'kn-l', key: 'knee', label: 'Left knee', x: 119, y: 298 },
    { id: 'sn-r', key: 'shin', label: 'Right shin', x: 80, y: 340 },
    { id: 'sn-l', key: 'shin', label: 'Left shin', x: 120, y: 340 },
    { id: 'an-r', key: 'ankle', label: 'Right ankle & foot', x: 76, y: 382 },
    { id: 'an-l', key: 'ankle', label: 'Left ankle & foot', x: 124, y: 382 }
  ],
  back: [
    { id: 'neck-b', key: 'neck', label: 'Back of neck', x: 100, y: 64 },
    { id: 'ub', key: 'upperback', label: 'Upper back', x: 100, y: 112 },
    { id: 'lb', key: 'lowerback', label: 'Lower back', x: 100, y: 180 },
    { id: 'el-l', key: 'elbow', label: 'Left elbow', x: 48, y: 148 },
    { id: 'el-r', key: 'elbow', label: 'Right elbow', x: 152, y: 148 },
    { id: 'gl-l', key: 'glute', label: 'Left buttock', x: 80, y: 224 },
    { id: 'gl-r', key: 'glute', label: 'Right buttock', x: 120, y: 224 },
    { id: 'hs-l', key: 'hamstring', label: 'Back of left thigh', x: 82, y: 264 },
    { id: 'hs-r', key: 'hamstring', label: 'Back of right thigh', x: 118, y: 264 },
    { id: 'cf-l', key: 'calf', label: 'Left calf', x: 79, y: 336 },
    { id: 'cf-r', key: 'calf', label: 'Right calf', x: 121, y: 336 },
    { id: 'hl-l', key: 'heel', label: 'Left heel', x: 76, y: 384 },
    { id: 'hl-r', key: 'heel', label: 'Right heel', x: 124, y: 384 }
  ]
};

const REGION_FACTS = {
  head: 'Your skull is made of 22 bones, and your brain uses about 20% of your body’s energy.',
  neck: 'Your neck has 7 vertebrae, the same number as a giraffe.',
  shoulder: 'The shoulder is the most mobile joint in the body, which also makes it the easiest to dislocate.',
  chest: 'Your heart sits only slightly left of centre, tucked behind the breastbone.',
  abdomen: 'Your small intestine is about 6 metres long, folded up behind your belly button.',
  wrist: 'Each wrist has 8 small carpal bones arranged in two rows.',
  hip: 'The hip is a ball-and-socket joint that takes several times your body weight when you run.',
  knee: 'The knee is the largest joint in the body.',
  shin: 'The tibia carries most of your body weight below the knee.',
  ankle: 'Most ankle sprains happen on the outside, when the foot rolls inward.',
  upperback: 'Each of the 12 vertebrae in your mid-back connects to a pair of ribs.',
  lowerback: 'About 4 in 5 adults have lower back pain at some point in their lives.',
  elbow: 'The “funny bone” is not a bone. It is the ulnar nerve running close to the surface.',
  glute: 'The gluteus maximus is the largest muscle in the body.',
  hamstring: 'The hamstrings are three muscles that cross both the hip and the knee.',
  calf: 'Your calf muscles join to form the Achilles, the strongest tendon in the body.',
  heel: 'Your heel takes more than your body weight with every walking step.'
};

const c = (name, tag, about, helps) => ({ name, tag, about, helps });

const GENERIC = {
  skin: [
    c('Bruise (contusion)', 'common', 'Bleeding under the skin after a knock. Tender and discoloured, fading over 1 to 2 weeks.', 'Ice for 15 minutes at a time, gentle compression and rest.'),
    c('Skin irritation or rash', 'possible', 'Contact dermatitis, a scrape or an insect bite can sting, itch or burn on the surface.', 'Keep it clean, avoid the trigger, and try a fragrance-free moisturiser.'),
    c('Shingles', 'doctor', 'A burning or tingling band of pain on one side of the body, often followed by a blistering rash.', 'See a doctor within 3 days of the rash appearing. Antiviral medicine works best early.')
  ],
  fat: [
    c('Deep bruise (haematoma)', 'common', 'A pocket of blood under the skin after an impact, felt as a firm, sore swelling.', 'Rest, ice and elevation for the first 48 hours.'),
    c('Fascia tightness', 'possible', 'The connective tissue wrapping your muscles can get tight and sore after overuse or sitting in one position.', 'Gentle movement, heat, light massage or foam rolling.'),
    c('Skin infection (cellulitis)', 'doctor', 'Warm, red, swollen skin that spreads and may come with a fever.', 'See a doctor promptly. It usually needs antibiotics.')
  ],
  muscle: [
    c('Muscle strain', 'common', 'Overstretched or torn muscle fibres. Hurts when you tense or stretch the muscle.', 'Relative rest for 2 to 3 days, then gentle stretching and a gradual return to activity.'),
    c('Post-exercise soreness (DOMS)', 'common', 'A dull, spread-out ache 1 to 3 days after new or hard exercise.', 'Light activity, fluids and time. It usually settles within a few days.'),
    c('Cramp or spasm', 'possible', 'A sudden, tight, involuntary contraction that can leave the muscle sore afterwards.', 'Gently stretch and massage the muscle, and stay hydrated.')
  ],
  tendon: [
    c('Tendinopathy (tendinitis)', 'common', 'An overloaded tendon. Pain where muscle meets bone, often worse when you start moving.', 'Ease off the activity that triggers it, then strengthen gradually.'),
    c('Ligament sprain', 'common', 'A stretched or torn ligament after a twist or awkward landing. Swelling and a wobbly feeling are common.', 'Protect, rest, ice, compress and elevate for 48 hours.'),
    c('Bursitis', 'possible', 'An inflamed fluid sac near a joint. Tender to press and sore when you lie on it.', 'Avoid pressure on the area, rest and ice.')
  ],
  bone: [
    c('Bone bruise', 'possible', 'A deep, aching injury to the bone after a hard impact, without a break.', 'Rest and protect it. It can take several weeks to settle.'),
    c('Stress fracture', 'doctor', 'A tiny crack from repeated impact. Pain builds with activity and one spot is very tender to press.', 'Stop impact activity and see a doctor. It may need an X-ray or scan.'),
    c('Osteoarthritis', 'possible', 'Wear in the joint cartilage. Stiff in the morning or after resting, achy with use.', 'Regular low-impact movement and strengthening.')
  ],
  organ: [
    c('Organs are an unlikely cause here', 'info', 'There are no major organs in this part of the body, so deep pain here more likely comes from bone, joint or nerve.', 'Try the Bone layer, or add Burning or Tingling if that matches how it feels.')
  ]
};

const SPECIFIC = {
  head: {
    muscle: [
      c('Tension headache', 'common', 'Band-like pressure around the forehead, temples or back of the head.', 'Rest, fluids, screen breaks and gentle neck stretches.'),
      c('Jaw joint (TMJ) pain', 'possible', 'An ache near the ear and jaw, worse when chewing, sometimes with clicking.', 'Soft foods, and try not to clench your teeth.')
    ],
    bone: [
      c('Sinus pressure', 'possible', 'Pressure behind the forehead or cheeks, worse bending forward, often with a cold.', 'Steam and fluids. See a doctor if it lasts more than 10 days.'),
      c('Jaw joint (TMJ) pain', 'possible', 'An ache near the ear and jaw, worse when chewing, sometimes with clicking.', 'Soft foods, and try not to clench your teeth.')
    ],
    organ: [
      c('Migraine', 'common', 'A throbbing headache, often on one side, with sensitivity to light or sound, or nausea.', 'Rest in a dark, quiet room, and keep a diary of triggers.'),
      c('Sinusitis', 'possible', 'Pressure and pain behind the eyes, cheeks or forehead, often after a cold.', 'Steam, fluids and rest. See a doctor if it lasts more than 10 days.')
    ]
  },
  neck: {
    muscle: [
      c('Neck strain or tension', 'common', 'A stiff, achy neck, often from posture, screens or sleeping awkwardly.', 'Heat, gentle neck movement and regular screen breaks.'),
      c('Wry neck (torticollis)', 'possible', 'Waking up with your neck stuck turned to one side.', 'Heat and gentle movement. It usually eases in a few days.')
    ],
    bone: [
      c('Neck joint wear (cervical spondylosis)', 'possible', 'Age-related changes in the neck joints causing stiffness and grinding.', 'Keep the neck moving and do strengthening exercises.'),
      c('Whiplash injury', 'doctor', 'Neck pain and stiffness after a car accident or a sudden jolt.', 'Get it checked, especially if there is numbness or severe pain.')
    ],
    organ: [
      c('Sore throat or tonsillitis', 'common', 'Pain at the front of the neck when swallowing, often with a cold.', 'Fluids, rest and lozenges. See a doctor if it lasts over a week or swallowing is hard.'),
      c('Swollen lymph nodes', 'common', 'Tender lumps at the side of the neck while your body fights an infection.', 'They usually settle within 2 weeks. See a doctor if they keep growing.'),
      c('Thyroid problem', 'possible', 'A swelling at the front of the neck, below the Adam’s apple.', 'See a doctor. A blood test can check your thyroid.')
    ]
  },
  shoulder: {
    tendon: [
      c('Rotator cuff tendinopathy', 'common', 'An ache on the outer shoulder, worse reaching overhead or lying on that side.', 'Avoid overhead reaching for now, then gentle strengthening.'),
      c('Shoulder impingement', 'common', 'A pinching pain when you lift your arm between waist and head height.', 'Posture work and shoulder blade strengthening.'),
      c('Rotator cuff tear', 'doctor', 'Weakness lifting the arm, often after a fall or in people over 40.', 'See a clinician for an assessment.')
    ],
    bone: [
      c('Frozen shoulder', 'possible', 'Pain and stiffness that build over months until the shoulder barely moves.', 'Gentle range-of-motion exercises. A clinician can guide treatment.'),
      c('AC joint sprain', 'possible', 'Pain on top of the shoulder after falling onto it.', 'Short rest, ice, and see a clinician if there is a bump.')
    ]
  },
  chest: {
    muscle: [
      c('Chest muscle strain', 'common', 'Sore when you press the area, twist or lift, often after exercise or heavy coughing.', 'Rest from heavy pushing and use heat.')
    ],
    bone: [
      c('Costochondritis', 'common', 'Tenderness where the ribs join the breastbone, worse with deep breaths.', 'Rest and heat. It usually settles within weeks.'),
      c('Rib fracture', 'doctor', 'Sharp pain when breathing after a fall or blow to the chest.', 'See a doctor, especially if you feel short of breath.')
    ],
    organ: [
      c('Heart pain (angina or heart attack)', 'doctor', 'Pressure, squeezing or heaviness in the chest, sometimes spreading to the arm, jaw or back.', 'Call emergency services if it is new, severe, or does not settle with rest.'),
      c('Acid reflux (heartburn)', 'common', 'A burning feeling behind the breastbone, often after meals or when lying down.', 'Smaller meals and not eating late. Antacids can help.'),
      c('Chest infection or pleurisy', 'possible', 'Sharp pain when breathing in, often with a cough or fever.', 'See a doctor.')
    ]
  },
  abdomen: {
    muscle: [
      c('Abdominal muscle strain', 'common', 'Sore when you sit up, twist or laugh, often after exercise.', 'Rest from core work and keep gently moving.')
    ],
    fat: [
      c('Hernia', 'possible', 'A bulge in the belly or groin that aches, especially when lifting or coughing.', 'See a doctor, and go urgently if it turns hard or very painful.')
    ],
    tendon: [
      c('Pain from an internal organ', 'doctor', 'Deep belly pain is often not from muscle or bone. Try the Organs layer for likely causes.', 'See a doctor if it is severe, lasts, or comes with fever or vomiting.')
    ],
    bone: [
      c('Pain from an internal organ', 'doctor', 'Deep belly pain is often not from muscle or bone. Try the Organs layer for likely causes.', 'See a doctor if it is severe, lasts, or comes with fever or vomiting.')
    ],
    organ: [
      c('Indigestion or gastritis', 'common', 'A burning or gnawing ache in the upper belly, often linked to meals.', 'Smaller meals, less alcohol and spicy food. See a doctor if it keeps coming back.'),
      c('Trapped wind or constipation', 'common', 'Crampy, moving belly pain with bloating.', 'Fluids, fibre and gentle walking.'),
      c('Gallstones', 'possible', 'Pain under the right ribs, often after fatty meals, sometimes spreading to the shoulder blade.', 'See a doctor.'),
      c('Appendicitis', 'doctor', 'Pain that starts near the belly button, moves to the lower right and keeps getting worse.', 'Seek urgent care.')
    ]
  },
  upperback: {
    muscle: [
      c('Upper back strain', 'common', 'An ache between the shoulder blades, often from posture or lifting.', 'Movement breaks, heat and shoulder blade exercises.'),
      c('Muscle knot (trigger point)', 'common', 'A tight, tender spot that may send pain elsewhere when pressed.', 'Massage, heat and gentle stretching.')
    ],
    bone: [
      c('Mid-back joint stiffness', 'possible', 'A deep ache and stiffness in the middle of the back that eases as you move.', 'Mobility exercises and gentle twisting stretches.')
    ],
    organ: [
      c('Gallbladder pain', 'possible', 'Gallbladder pain can spread to the right shoulder blade, often after fatty meals.', 'See a doctor.'),
      c('Heart pain', 'doctor', 'Heart problems are sometimes felt between the shoulder blades.', 'Get urgent help if it comes with chest pressure, breathlessness or sweating.')
    ]
  },
  lowerback: {
    muscle: [
      c('Lower back strain', 'common', 'Aching, tight muscles beside the spine, often after lifting or bending.', 'Stay gently active and use heat. Avoid bed rest.'),
      c('Muscle spasm', 'common', 'A sudden locking pain that makes it hard to straighten up.', 'Heat, gentle walking and slow movement.')
    ],
    bone: [
      c('Disc bulge or herniation', 'possible', 'Deep back pain, sometimes with pain shooting into the buttock or leg.', 'Keep moving within comfort. See a clinician if leg pain or numbness lasts.'),
      c('Facet joint irritation', 'possible', 'An ache on one side of the spine, worse leaning back or twisting.', 'Gentle mobility exercises and heat.'),
      c('Sacroiliac (SI) joint pain', 'possible', 'Pain low on one side, near the dimple above the buttock.', 'Core and hip strengthening.')
    ],
    organ: [
      c('Kidney stone', 'doctor', 'Severe pain in the side or back that comes in waves, sometimes moving to the groin.', 'See a doctor, and go urgently if you have a fever or cannot pee.'),
      c('Kidney infection', 'doctor', 'Pain in the side or back with fever, chills, or burning when you pee.', 'See a doctor the same day.')
    ]
  },
  elbow: {
    tendon: [
      c('Tennis elbow', 'common', 'Pain on the outer elbow when gripping, lifting or typing.', 'Rest from gripping, then forearm strengthening.'),
      c('Golfer’s elbow', 'common', 'Pain on the inner elbow, worse when gripping or bending the wrist.', 'Rest, then gradual forearm strengthening.'),
      c('Elbow bursitis', 'possible', 'A soft swelling on the point of the elbow.', 'Avoid leaning on it. See a doctor if it is red or hot.')
    ]
  },
  wrist: {
    tendon: [
      c('De Quervain’s tenosynovitis', 'common', 'Pain on the thumb side of the wrist, worse gripping or lifting.', 'Rest the thumb. A splint can help.'),
      c('Wrist sprain', 'common', 'Pain and swelling after a fall onto an outstretched hand.', 'Rest, ice and compression.')
    ],
    bone: [
      c('Scaphoid fracture', 'doctor', 'Pain in the hollow at the base of the thumb after a fall. Easy to miss.', 'Get an X-ray, even if it seems mild.'),
      c('Thumb base arthritis', 'possible', 'Aching at the base of the thumb when pinching or opening jars.', 'Splints and hand exercises.')
    ]
  },
  hip: {
    muscle: [
      c('Hip flexor strain', 'common', 'Pain at the front of the hip or groin when lifting the knee.', 'Rest from kicking or sprinting, then gentle stretches.'),
      c('Groin strain', 'common', 'Pain in the inner thigh after quick changes of direction.', 'Rest, then gradual strengthening.')
    ],
    bone: [
      c('Hip osteoarthritis', 'possible', 'A groin ache and stiffness, with trouble putting on socks or shoes.', 'Low-impact exercise like cycling or swimming.'),
      c('Hip labral tear', 'possible', 'Deep groin pain with clicking or catching.', 'See a clinician for an assessment.')
    ],
    organ: [
      c('Bladder infection (UTI)', 'common', 'A low belly or groin ache with burning or needing to pee often.', 'Drink plenty of water and see a doctor. It may need antibiotics.'),
      c('Inguinal hernia', 'possible', 'A bulge in the groin that aches when lifting, coughing or standing.', 'See a doctor, and go urgently if it turns hard or very painful.')
    ]
  },
  glute: {
    muscle: [
      c('Piriformis syndrome', 'possible', 'A deep buttock ache, sometimes with pain down the back of the leg.', 'Hip stretches and strengthening. Avoid sitting for long.'),
      c('Glute strain', 'possible', 'Soreness in the buttock after running, climbing or lifting.', 'Rest, then gradual glute exercises.')
    ],
    tendon: [
      c('Gluteal tendinopathy', 'common', 'Pain on the outer hip, worse lying on that side or climbing stairs.', 'Avoid crossing your legs, and strengthen the glutes.')
    ]
  },
  hamstring: {
    muscle: [
      c('Hamstring strain', 'common', 'A sudden pull at the back of the thigh while sprinting or kicking.', 'Rest, then gentle stretching and strengthening. Avoid sprinting for a few weeks.')
    ],
    tendon: [
      c('High hamstring tendinopathy', 'possible', 'A deep ache at the sit bone, worse when sitting or running uphill.', 'Avoid long sitting and deep stretches; strengthen gradually.')
    ]
  },
  knee: {
    tendon: [
      c('Patellar tendinopathy (jumper’s knee)', 'common', 'Pain just below the kneecap, worse with jumping, stairs or squatting.', 'Cut back on jumping, then slow strengthening such as wall sits.'),
      c('Knee ligament sprain (MCL / ACL)', 'doctor', 'Pain after a twist or impact, with swelling or the knee giving way.', 'See a clinician if it swells quickly or feels unstable.'),
      c('IT band syndrome', 'possible', 'Pain on the outer side of the knee, common in runners and cyclists.', 'Reduce mileage and strengthen the hips.')
    ],
    bone: [
      c('Patellofemoral pain', 'common', 'An ache around or behind the kneecap, worse on stairs, squatting or after sitting.', 'Strengthen the thighs and hips; avoid deep squats for now.'),
      c('Meniscus tear', 'possible', 'Pain along the joint line, with clicking, catching or locking after a twist.', 'See a clinician if the knee locks or will not straighten.'),
      c('Knee osteoarthritis', 'possible', 'Stiffness and aching, often worse in the morning or after rest.', 'Regular low-impact movement and strengthening.')
    ]
  },
  shin: {
    muscle: [
      c('Shin splints', 'common', 'An ache along the inner edge of the shin, common when you increase running.', 'Reduce running, check your footwear, then build back gradually.'),
      c('Exertional compartment syndrome', 'doctor', 'Tight, building pain during exercise that goes away with rest.', 'See a clinician for an assessment.')
    ],
    bone: [
      c('Tibial stress fracture', 'doctor', 'One very tender spot on the shin bone that hurts even when walking.', 'Stop running and get it checked.'),
      c('Shin bone bruise', 'possible', 'A deep ache after a knock to the front of the shin.', 'Rest, ice and protection.')
    ]
  },
  calf: {
    muscle: [
      c('Calf strain', 'common', 'Sudden pain in the calf that can feel like being kicked.', 'Rest, heel lifts in your shoes, then gradual calf raises.'),
      c('Calf cramp', 'common', 'A sudden, hard tightening of the calf, often at night.', 'Stretch the calf and stay hydrated.'),
      c('Blood clot (DVT)', 'doctor', 'A swollen, warm, red or tender calf, especially after travel, surgery or being still for long.', 'See a doctor the same day.')
    ]
  },
  ankle: {
    tendon: [
      c('Ankle sprain', 'common', 'A rolled ankle with pain and swelling on the outer side.', 'Protect, ice, compress, elevate; balance exercises once it settles.'),
      c('Achilles tendinopathy', 'common', 'Pain and stiffness at the back of the ankle, worst first thing in the morning.', 'Slow calf raises, and reduce running for now.')
    ],
    bone: [
      c('Ankle fracture', 'doctor', 'You cannot put weight on it, or the ankle bones are tender after an injury.', 'Get an X-ray.'),
      c('Ankle arthritis', 'possible', 'A deep ache and stiffness, often years after an old sprain.', 'Supportive shoes and low-impact exercise.')
    ]
  },
  heel: {
    fat: [
      c('Heel fat pad bruise', 'possible', 'A deep, bruised feeling in the centre of the heel, worse on hard floors.', 'Cushioned shoes or heel cups.')
    ],
    tendon: [
      c('Plantar fasciitis', 'common', 'Sharp heel pain with your first steps in the morning.', 'Calf and foot stretches, supportive shoes, avoid going barefoot.'),
      c('Achilles insertion pain', 'possible', 'Pain right where the Achilles tendon meets the heel bone.', 'Heel lifts and slow calf strengthening.')
    ],
    bone: [
      c('Heel stress fracture', 'doctor', 'Heel pain that builds with walking and hurts when squeezed from both sides.', 'Stop impact activity and see a clinician.')
    ]
  }
};

const NERVE = {
  neck: c('Pinched nerve in the neck', 'possible', 'An irritated nerve root that can send burning, tingling or numbness into the shoulder and arm.', 'Gentle neck movement. See a clinician if your arm feels weak.'),
  upperback: c('Pinched nerve in the neck', 'possible', 'An irritated nerve root that can send burning or tingling between the shoulder blades and down the arm.', 'Gentle movement. See a clinician if your arm feels weak.'),
  lowerback: c('Sciatica', 'common', 'An irritated sciatic nerve sending burning, tingling or electric pain from the back into the leg.', 'Keep gently active. See a clinician if it lasts or your leg feels weak.'),
  glute: c('Sciatica', 'common', 'An irritated sciatic nerve sending burning, tingling or electric pain through the buttock and leg.', 'Keep gently active. See a clinician if it lasts or your leg feels weak.'),
  hamstring: c('Sciatica', 'possible', 'Burning or tingling down the back of the thigh can come from a nerve in the lower back.', 'Keep gently active. See a clinician if it lasts or your leg feels weak.'),
  calf: c('Sciatica', 'possible', 'Burning or tingling in the calf can come from a nerve in the lower back.', 'Keep gently active. See a clinician if it lasts.'),
  wrist: c('Carpal tunnel syndrome', 'common', 'Tingling or numbness in the thumb and first fingers, often worse at night.', 'A night wrist splint, and breaks from repetitive gripping.'),
  elbow: c('Ulnar nerve irritation', 'possible', 'Tingling into the ring and little fingers, worse with the elbow bent for long.', 'Avoid leaning on the elbow and keep it straighter at night.'),
  ankle: c('Tarsal tunnel syndrome', 'possible', 'Burning or tingling on the inner ankle and sole of the foot.', 'Supportive shoes. See a clinician if it lasts.'),
  heel: c('Tarsal tunnel syndrome', 'possible', 'Burning or tingling on the inner ankle, heel and sole of the foot.', 'Supportive shoes. See a clinician if it lasts.')
};
const NERVE_DEFAULT = c('Nerve irritation', 'possible', 'Burning, tingling or numbness often comes from an irritated or compressed nerve rather than the muscle itself.', 'See a clinician if it spreads, lasts, or comes with weakness.');

const FLAGS_DEFAULT = [
  'You cannot put weight on it or use it normally',
  'The area looks misshapen or out of place',
  'It is hot, red and spreading, or you have a fever',
  'You have new numbness or weakness',
  'The pain started after a serious fall, accident or blow'
];
const FLAGS = {
  head: ['A sudden, severe headache, the worst you have had: call emergency services', 'Headache with fever and a stiff neck', 'Confusion, weakness, or changes in vision or speech', 'Headache after a blow to the head'],
  chest: ['Chest pain with shortness of breath, sweating or nausea: call emergency services', 'Pain spreading to your arm, jaw or back', 'Pain after a hard blow to the chest', 'Coughing up blood'],
  abdomen: ['Severe or worsening belly pain', 'Pain with fever, vomiting, or blood in your stool or urine', 'A hard, rigid belly', 'A hernia bulge that turns firm or will not go back in'],
  lowerback: ['Numbness in the groin or inner thighs', 'New trouble controlling your bladder or bowels: seek emergency care', 'Weakness in your legs', 'Back pain with fever or unexplained weight loss'],
  neck: ['Neck pain after a fall or accident', 'Numbness or weakness in your arms', 'Fever with a stiff neck', 'Trouble swallowing or breathing'],
  calf: ['A swollen, warm or red calf: this can be a blood clot, see a doctor today', 'Sudden shortness of breath or chest pain: call emergency services', 'You cannot push off or stand on tiptoe']
};

const TAGS = {
  common: { label: 'Common', bg: 'var(--tealsoft2)', fg: 'var(--tealtext)' },
  possible: { label: 'Possible', bg: 'var(--soft)', fg: 'var(--muted2)' },
  doctor: { label: 'See a doctor', bg: 'var(--warnbg)', fg: 'var(--warntext)' },
  info: { label: 'Note', bg: 'var(--soft)', fg: 'var(--muted2)' }
};

// ---------- Drawing helpers. The body is drawn in a 200 x 400 box; the front view
// mirrors the person, so their right side is on the viewer's left.
const r2 = (n) => +n.toFixed(2);
// Ellipse as cubic curves (no arcs), so mir() can flip it.
const el = (cx, cy, rx, ry) => {
  const k = 0.5523;
  return 'M' + r2(cx - rx) + ' ' + r2(cy) +
    ' C' + r2(cx - rx) + ' ' + r2(cy + k * ry) + ' ' + r2(cx - k * rx) + ' ' + r2(cy + ry) + ' ' + r2(cx) + ' ' + r2(cy + ry) +
    ' C' + r2(cx + k * rx) + ' ' + r2(cy + ry) + ' ' + r2(cx + rx) + ' ' + r2(cy + k * ry) + ' ' + r2(cx + rx) + ' ' + r2(cy) +
    ' C' + r2(cx + rx) + ' ' + r2(cy - k * ry) + ' ' + r2(cx + k * rx) + ' ' + r2(cy - ry) + ' ' + r2(cx) + ' ' + r2(cy - ry) +
    ' C' + r2(cx - k * rx) + ' ' + r2(cy - ry) + ' ' + r2(cx - rx) + ' ' + r2(cy - k * ry) + ' ' + r2(cx - rx) + ' ' + r2(cy) + ' Z';
};
const els = (list) => list.map((e) => el(e[0], e[1], e[2], e[3])).join(' ');
// Paths use only absolute "x y" pairs, so flipping left-right is a swap of every x.
const mir = (d) => d.replace(/(\d*\.?\d+) (\d*\.?\d+)/g, (m, x, y) => r2(200 - parseFloat(x)) + ' ' + y);
const sym = (d) => d + ' ' + mir(d);
const segs = (list) => list.map((q) => 'M' + q[0] + ' ' + q[1] + ' L' + q[2] + ' ' + q[3]).join(' ');
const box = (cx, y, w, h) => 'M' + r2(cx - w) + ' ' + r2(y) + ' L' + r2(cx + w) + ' ' + r2(y) + ' L' + r2(cx + w) + ' ' + r2(y + h) + ' L' + r2(cx - w) + ' ' + r2(y + h) + ' Z';
const F = (d, fill, stroke, sw, op) => ({ d, fill, stroke: stroke || 'none', sw: sw || 0, ve: 'non-scaling-stroke', op: op == null ? 1 : op, dash: 'none' });
const S = (d, stroke, sw, o) => ({ d, fill: 'none', stroke, sw, ve: o && o.scale ? 'none' : 'non-scaling-stroke', op: o && o.op != null ? o.op : 1, dash: o && o.dash ? o.dash : 'none' });

const C = {
  skinInk: '#9C5A3C', sheet: '#FFF4D6', sheetLine: '#B8902A', pad: '#E5B740', padLine: '#A8811F',
  mFill: '#CC5B50', mLine: '#5E1A15', mFiber: '#EE9A8F',
  tFill: '#F5EFE3', tLine: '#7A6F5C', lFill: '#DDE8F3', lLine: '#4F6178', cart: '#9DB8D3',
  bFill: '#F3EEE3', bLine: '#7A6E5C', dark: '#5A4636',
  nerve: '#D9A300', art: '#E0464E', vein: '#5B8DEF', node: '#7DB36A'
};

// Body outline, drawn for the viewer's left half and mirrored.
const TORSO = 'M89 62 Q76 66 64 70 Q54 73 52 84 Q53 96 57 104 Q59 122 62 140 Q60 156 62 170 Q60 186 64 200 Q72 214 86 220 L100 224 L114 220 Q128 214 136 200 Q140 186 138 170 Q140 156 138 140 Q141 122 143 104 Q147 96 148 84 Q146 73 136 70 Q124 66 111 62 Z';
const UPPER_ARM = 'M52 82 Q45 88 44 100 L39 140 Q39 149 46 151 Q53 151 54 143 L59 108 Q61 98 62 92 Z';
const FOREARM = 'M39 140 Q35 160 33 182 L31 203 Q33 208 38 208 Q41 207 41 203 Q44 184 48 166 Q53 152 54 143 Z';
const PALM = 'M31 202 Q27 212 28 224 Q36 228 44 225 Q45 214 41 204 Z';
const DIGITS = 'M30 208 Q23 215 21 226 Q22 231 26 230 Q28 222 32 217 Z M28.5 223 L28.5 241 Q30.3 244 32 241 L32 224 Z M32.5 224 L32.5 245 Q34.3 248 36 245 L36 225 Z M36.5 225 L36.8 243 Q38.6 246 40.2 243 L40 225 Z M40.5 224 L41 238 Q42.6 241 44 238 L43.8 223 Z';
const THIGH = 'M64 198 Q61 230 67 266 L72 298 Q80 306 90 304 L95 298 Q98 262 100 224 L86 220 Z';
const LOWER_LEG = 'M72 296 Q67 318 71 340 Q75 360 77 374 L90 374 Q91 356 94 336 Q97 316 95 298 Z';
const FOOT = 'M77 372 Q73 382 70 390 Q68 398 74 399 L95 399 Q98 393 95 384 Q92 378 90 372 Z';
const LIMBS = UPPER_ARM + ' ' + FOREARM + ' ' + PALM + ' ' + DIGITS + ' ' + THIGH + ' ' + LOWER_LEG + ' ' + FOOT;
// One continuous anatomical outline for the viewer's left half: skull, ear, jaw, neck,
// trapezius slope, deltoid, arm, thumb and fingers, flank, hip, thigh, knee, calf, ankle, foot.
const OUTLINE = 'M100.6 1.5 L100 1.5 Q88 2 83 10 Q79 17 80 26 L78.5 24.5 Q77 28 78.5 33 L81 35 Q82 41 86 45 Q88 48 89 49 L88.5 56 Q84 60 74 64 Q64 66 57 70 Q48 74 46 86 Q45 96 46 100 Q42 108 41 120 Q41 132 40 140 Q38.5 144 38.5 148 Q34 156 33.5 170 Q33 186 31.5 198 L31 203 L30 208 Q23 215 21 226 Q22 231 26 230 Q28 226 28.6 223 L28.5 241 Q30.3 244 32 241 L32.4 225 L32.5 245 Q34.3 248 36 245 L36.4 225.5 L36.8 243 Q38.6 246 40.2 243 L40.4 225 L41 238 Q42.6 241 44 238 L44 223 Q45.5 214 41.5 204 Q45 186 49 168 Q55 156 55 145 Q57 132 57.5 120 Q58 108 59 102 Q58.5 112 59.5 124 Q61 146 65 164 Q64 178 63 190 Q60 210 60 232 Q60 260 67 284 L71 296 Q66 312 68 326 Q71 346 75 364 L76 372 Q73 382 70 390 Q68 398 74 399.5 L95 399.5 Q98 393 95.5 384 Q92 378 90.5 372 Q91 356 94 340 Q99 322 96.5 304 L95.5 299 Q98 286 97.5 276 Q97 252 100.6 228 Z';

// A muscle is four corners [a, b, c, d] plus how far each edge bows outward [ab, bc, cd, da].
// Fibres run from edge a-b to edge d-c, which gives the striped look of anatomy plates.
function mus(m) {
  const P = m[0], k = m[1] || [0, 0, 0, 0];
  let area = 0;
  for (let i = 0; i < 4; i++) { const p = P[i], q = P[(i + 1) % 4]; area += p[0] * q[1] - q[0] * p[1]; }
  const sg = area >= 0 ? 1 : -1;
  const ctrl = (p, q, amt) => {
    const vx = q[0] - p[0], vy = q[1] - p[1], len = Math.hypot(vx, vy) || 1;
    return [(p[0] + q[0]) / 2 + sg * vy / len * amt, (p[1] + q[1]) / 2 - sg * vx / len * amt];
  };
  const pt = (q) => r2(q[0]) + ' ' + r2(q[1]);
  const [a, b, c, d] = P;
  const cab = ctrl(a, b, k[0]), cbc = ctrl(b, c, k[1]), ccd = ctrl(c, d, k[2]), cda = ctrl(d, a, k[3]);
  // Always wind the same way so overlapping muscles in one path fill as a union.
  const shape = sg > 0
    ? 'M' + pt(a) + ' Q' + pt(cab) + ' ' + pt(b) + ' Q' + pt(cbc) + ' ' + pt(c) + ' Q' + pt(ccd) + ' ' + pt(d) + ' Q' + pt(cda) + ' ' + pt(a) + ' Z'
    : 'M' + pt(a) + ' Q' + pt(cda) + ' ' + pt(d) + ' Q' + pt(ccd) + ' ' + pt(c) + ' Q' + pt(cbc) + ' ' + pt(b) + ' Q' + pt(cab) + ' ' + pt(a) + ' Z';
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  const w = Math.max(Math.hypot(b[0] - a[0], b[1] - a[1]), Math.hypot(c[0] - d[0], c[1] - d[1]));
  const n = Math.max(3, Math.round(w / 1.4));
  const offL = [cda[0] - (d[0] + a[0]) / 2, cda[1] - (d[1] + a[1]) / 2];
  const offR = [cbc[0] - (b[0] + c[0]) / 2, cbc[1] - (b[1] + c[1]) / 2];
  let fib = '';
  for (let i = 1; i < n; i++) {
    const t = i / n, s0 = lerp(a, b, t), e0 = lerp(d, c, t);
    const m0 = [(s0[0] + e0[0]) / 2 + offL[0] * (1 - t) + offR[0] * t, (s0[1] + e0[1]) / 2 + offL[1] * (1 - t) + offR[1] * t];
    fib += 'M' + pt(s0) + ' Q' + pt(m0) + ' ' + pt(e0) + ' ';
  }
  return { shape, fib };
}
function muscleArt(list, center) {
  const built = list.map(mus);
  const half = built.map((x) => x.shape).join(' ');
  const fib = built.map((x) => x.fib).join(' ');
  const cb = (center || []).map(mus);
  return [
    F(sym(half) + ' ' + cb.map((x) => x.shape).join(' '), '#C8483D', '#6E1F18', 0.6),
    S(sym(fib) + ' ' + cb.map((x) => x.fib).join(' '), '#8C2A22', 0.45, { op: 0.6 })
  ];
}

// Labelled parts: name, what it is, x, y, flags ("m" = shown on the full-body view, "L"/"R" = label side).
const l = (n, p, x, y, f) => ({ n, p, x, y, f: f || '' });
const LABELS = {};
LABELS.skin = {
  front: [
    l('Frontal region', 'The forehead', 100, 12, 'm'),
    l('Temporal region', 'The temple, beside the eye', 116, 20),
    l('Orbital region', 'Skin around the eye socket', 93, 24),
    l('Nasal region', 'The nose', 100, 30),
    l('Auricle (pinna)', 'The outer ear', 81, 28),
    l('Buccal region', 'The cheek', 110, 34),
    l('Oral region', 'The lips and mouth', 100, 40),
    l('Mental region', 'The chin', 100, 47),
    l('Anterior cervical region', 'Front of the neck', 100, 58, 'm'),
    l('Supraclavicular fossa', 'Hollow above the collarbone', 80, 68),
    l('Deltoid region', 'The rounded shoulder', 146, 86),
    l('Axillary region', 'The armpit', 62, 96),
    l('Pectoral region', 'The chest', 80, 94, 'm'),
    l('Mammary region (areola & nipple)', 'Breast skin and nipple', 120, 104),
    l('Sternal region', 'Skin over the breastbone', 100, 100),
    l('Epigastric region', 'Upper middle belly', 100, 140),
    l('Right hypochondriac region', 'Under the right ribs', 74, 146),
    l('Left hypochondriac region', 'Under the left ribs', 126, 146),
    l('Umbilical region', 'Around the belly button', 100, 172, 'm'),
    l('Right lumbar (flank) region', 'Right side of the belly', 70, 172),
    l('Left lumbar (flank) region', 'Left side of the belly', 130, 172),
    l('Right inguinal (iliac) region', 'Right groin', 78, 204),
    l('Left inguinal (iliac) region', 'Left groin', 122, 204),
    l('Hypogastric (pubic) region', 'Lower middle belly', 100, 208),
    l('Anterior brachial region', 'Front of the upper arm', 50, 118),
    l('Cubital fossa', 'The inner elbow crease', 47, 146, 'm'),
    l('Anterior antebrachial region', 'Front of the forearm', 40, 176),
    l('Carpal region (wrist crease)', 'Front of the wrist', 36, 205),
    l('Palmar region', 'The palm', 37, 218, 'mR'),
    l('Thenar eminence', 'Fleshy pad at the base of the thumb', 30, 214),
    l('Hypothenar eminence', 'Pad below the little finger', 42.5, 214, 'R'),
    l('Interdigital web', 'Skin between the fingers', 32.3, 224),
    l('Digital pulp (fingertip)', 'Fingertip pad, packed with nerve endings', 34.4, 245, 'R'),
    l('Femoral triangle', 'Groin crease at the top of the thigh', 86, 220),
    l('Anterior femoral region', 'Front of the thigh', 116, 250, 'm'),
    l('Patellar region', 'Front of the knee', 84, 300, 'm'),
    l('Anterior crural region', 'The shin', 116, 340),
    l('Talocrural region', 'Front of the ankle', 84, 374),
    l('Dorsum of foot', 'Top of the foot', 82, 386, 'm'),
    l('Hallux', 'The big toe', 92, 396),
    l('Digits of the foot', 'The smaller toes', 76, 397)
  ],
  back: [
    l('Parietal region', 'Crown of the head', 100, 8, 'm'),
    l('Occipital region', 'Back of the head', 100, 26),
    l('Auricle (back of ear)', 'The outer ear from behind', 119, 28),
    l('Mastoid region', 'Bony bump behind the ear', 84, 36),
    l('Nuchal region', 'Back of the neck', 100, 56, 'm'),
    l('Interscapular region', 'Between the shoulder blades', 100, 96),
    l('Scapular region', 'Over the shoulder blade', 80, 100, 'm'),
    l('Vertebral region', 'Skin over the spine', 100, 130),
    l('Infrascapular region', 'Below the shoulder blade', 122, 134),
    l('Flank (loin)', 'Side of the trunk above the hip', 136, 170),
    l('Lumbar region', 'The small of the back', 88, 176, 'm'),
    l('Sacral region', 'Flat area above the buttocks', 100, 198),
    l('Gluteal region', 'The buttock', 82, 212, 'm'),
    l('Intergluteal cleft', 'Crease between the buttocks', 100, 216),
    l('Gluteal fold', 'Crease under the buttock', 116, 230),
    l('Posterior brachial region', 'Back of the upper arm', 50, 118),
    l('Olecranon region', 'Point of the elbow', 46, 148, 'm'),
    l('Posterior antebrachial region', 'Back of the forearm', 40, 176),
    l('Dorsum of hand', 'Back of the hand', 36, 216, 'm'),
    l('Knuckles (MCP joints)', 'Where the fingers meet the hand', 37, 224, 'R'),
    l('Nail folds & cuticle', 'Skin rim around each nail', 30.2, 238),
    l('Nail plates (fingernails)', 'Hard keratin covering the fingertips', 34.3, 243.5, 'R'),
    l('Posterior femoral region', 'Back of the thigh', 118, 256, 'm'),
    l('Popliteal fossa', 'The hollow behind the knee', 84, 302, 'm'),
    l('Sural region', 'The calf', 116, 334, 'm'),
    l('Achilles region', 'Back of the ankle', 84, 372),
    l('Calcaneal region', 'The heel', 84, 392, 'm')
  ]
};

LABELS.fat = {
  front: [
    l('Galea aponeurotica', 'Tough fascia sheet under the scalp', 100, 8),
    l('Temporal fascia', 'Fascia over the temple muscle', 84, 18),
    l('Malar fat pad', 'Fat over the cheekbone', 111, 29),
    l('Buccal fat pad', 'Deep cheek fat that shapes the face', 90, 35, 'm'),
    l('Submental fat', 'Fat under the chin', 100, 50),
    l('Investing cervical fascia', 'Sleeve that wraps the neck', 106, 60),
    l('Pectoral fascia', 'Thin sheet over the chest muscle', 80, 90),
    l('Axillary fat', 'Fat and lymph nodes of the armpit', 62, 98),
    l('Mammary fat pad', 'Fat and glands of the breast', 120, 104, 'm'),
    l('Anterior rectus sheath', 'Sleeve around the six-pack muscle', 108, 150),
    l('Camper’s fascia', 'Fatty layer of the belly wall', 82, 164, 'm'),
    l('Flank fat (“love handles”)', 'Fat above the hip bones', 64, 182),
    l('Scarpa’s fascia', 'Membrane layer under the belly fat', 114, 192),
    l('Mons pubis fat pad', 'Fat pad over the pubic bone', 100, 216),
    l('Brachial fascia', 'Sleeve around the upper arm', 50, 118),
    l('Antebrachial fascia', 'Sleeve around the forearm', 40, 176),
    l('Palmar aponeurosis', 'Tough triangle of fascia in the palm', 37, 216, 'mR'),
    l('Thenar fascia', 'Padding over the thumb muscles', 30, 213),
    l('Digital fat pads', 'Fingertip cushions', 34.4, 244, 'R'),
    l('Femoral triangle fat', 'Groin fat around vessels and lymph nodes', 88, 220),
    l('Iliotibial band (IT band)', 'Thick strip of fascia down the outer thigh', 66, 252, 'm'),
    l('Fascia lata', 'Strong sleeve around the thigh', 116, 252, 'm'),
    l('Prepatellar bursa', 'Fluid sac over the kneecap', 84, 297),
    l('Infrapatellar fat pad (Hoffa’s)', 'Fat cushion under the kneecap', 88, 309),
    l('Crural fascia', 'Sleeve around the lower leg', 116, 340),
    l('Superior extensor retinaculum', 'Band holding the ankle tendons down', 84, 366),
    l('Inferior extensor retinaculum', 'Y-shaped band at the front of the ankle', 86, 379),
    l('Dorsal fascia of foot', 'Thin sheet on top of the foot', 82, 389)
  ],
  back: [
    l('Galea aponeurotica', 'Tough fascia sheet under the scalp', 100, 8),
    l('Dorsocervical fat pad', 'Fat at the base of the back of the neck', 100, 64, 'm'),
    l('Thoracolumbar fascia', 'Diamond of fascia across the lower back', 100, 178, 'm'),
    l('Flank fat', 'Fat over the sides of the lower back', 64, 176),
    l('Gluteal aponeurosis', 'Fascia over the upper buttock muscle', 116, 196),
    l('Gluteal fat pad', 'Thick fat that shapes the buttock', 84, 214, 'm'),
    l('Ischial bursa', 'Fluid sac over the sit bone', 89, 224),
    l('Brachial fascia', 'Sleeve around the upper arm', 50, 118),
    l('Olecranon bursa', 'Fluid sac on the point of the elbow', 46, 148, 'm'),
    l('Antebrachial fascia', 'Sleeve around the forearm', 40, 176),
    l('Extensor retinaculum (wrist)', 'Band holding the back-of-wrist tendons', 36, 204.5),
    l('Dorsal fascia of hand', 'Thin sheet on the back of the hand', 37, 216, 'R'),
    l('Iliotibial band (IT band)', 'Thick strip of fascia down the outer thigh', 66, 254),
    l('Fascia lata', 'Strong sleeve around the thigh', 118, 254),
    l('Popliteal fat pad', 'Fat filling the hollow behind the knee', 84, 302, 'm'),
    l('Crural fascia', 'Sleeve around the lower leg', 116, 336),
    l('Kager’s fat pad', 'Fat in front of the Achilles tendon', 81, 370),
    l('Retrocalcaneal bursa', 'Fluid sac between Achilles and heel bone', 87, 381),
    l('Heel fat pad', 'Shock-absorbing fat under the heel', 84, 393, 'm')
  ]
};
LABELS.muscle = {
  front: [
    l('Frontalis', 'Raises the eyebrows and wrinkles the forehead', 100, 12, 'm'),
    l('Temporalis', 'Closes the jaw when chewing', 118, 20),
    l('Orbicularis oculi', 'Closes the eyelids', 93, 24),
    l('Nasalis', 'Flares and narrows the nostrils', 100, 29),
    l('Zygomaticus major', 'Pulls the mouth into a smile', 108.5, 33.5),
    l('Masseter', 'Main chewing muscle', 85, 38),
    l('Orbicularis oris', 'Closes and purses the lips', 100, 40),
    l('Mentalis', 'Pushes up the lower lip and chin', 100, 46),
    l('Sternocleidomastoid', 'Turns and tilts the head', 90, 52, 'm'),
    l('Sternohyoid', 'Lowers the voice box after swallowing', 102.5, 58),
    l('Trapezius (descending part)', 'Shrugs the shoulders', 78, 66),
    l('Deltoid (anterior part)', 'Lifts the arm forward', 56, 88, 'm'),
    l('Pectoralis major', 'Pushes and pulls the arm across the chest', 82, 92, 'm'),
    l('Pectoralis minor (deep)', 'Steadies the shoulder blade', 120, 90),
    l('Serratus anterior', 'Holds the shoulder blade against the ribs', 64, 120),
    l('Latissimus dorsi (edge)', 'Back muscle seen at the side', 138, 126),
    l('Rectus abdominis', 'The “six-pack”; bends the trunk forward', 106, 158, 'm'),
    l('External oblique', 'Twists and side-bends the trunk', 72, 160, 'm'),
    l('Internal oblique (deep)', 'Works with the external oblique to twist', 130, 176),
    l('Biceps brachii', 'Bends the elbow and turns the palm up', 53, 118, 'm'),
    l('Brachialis', 'Main elbow bender, under the biceps', 44, 132),
    l('Pronator teres', 'Turns the palm down', 49, 153),
    l('Brachioradialis', 'Bends the elbow in a thumbs-up position', 39, 160),
    l('Flexor carpi ulnaris', 'Bends the wrist toward the little finger', 50.5, 170),
    l('Flexor carpi radialis', 'Bends the wrist toward the thumb', 44, 175),
    l('Flexor digitorum superficialis', 'Bends the middle finger joints', 43, 186),
    l('Abductor pollicis brevis', 'Moves the thumb away from the palm', 28.5, 212),
    l('Flexor pollicis brevis', 'Bends the thumb', 31.5, 216),
    l('Adductor pollicis', 'Pulls the thumb in for pinching', 32.5, 218.5),
    l('Abductor digiti minimi', 'Spreads the little finger', 43.5, 212, 'R'),
    l('Flexor digiti minimi brevis', 'Bends the little finger', 41.5, 218, 'R'),
    l('Lumbricals', 'Bend the knuckles and straighten the fingers', 36, 221, 'R'),
    l('Tensor fasciae latae', 'Tightens the IT band and steadies the hip', 67, 206),
    l('Iliopsoas', 'Main hip flexor; lifts the knee', 85, 209, 'm'),
    l('Pectineus', 'Brings the thigh in and forward', 93, 219),
    l('Adductor longus', 'Squeezes the thighs together', 104, 236),
    l('Sartorius', 'Longest muscle; runs across the thigh', 84, 240, 'm'),
    l('Rectus femoris', 'Quadriceps muscle that also lifts the thigh', 119, 250, 'm'),
    l('Vastus lateralis', 'Largest quadriceps muscle, outer thigh', 68, 258),
    l('Gracilis', 'Long, thin inner-thigh muscle', 103, 262),
    l('Vastus medialis', 'Teardrop muscle above the inner knee', 110, 282),
    l('Fibularis longus', 'Turns the sole outward; supports the arch', 71, 322),
    l('Gastrocnemius (medial head)', 'Calf muscle seen from the front', 108, 322),
    l('Tibialis anterior', 'Lifts the foot up', 121, 330, 'm'),
    l('Extensor digitorum longus', 'Lifts the toes', 74.5, 350),
    l('Soleus', 'Deep calf muscle for standing and walking', 110.5, 354),
    l('Extensor digitorum brevis', 'Small muscle on top of the foot', 80, 384),
    l('Abductor hallucis', 'Moves the big toe away from the others', 94.5, 388),
    l('Dorsal interossei (foot)', 'Spread the toes', 82, 391)
  ],
  back: [
    l('Occipitalis', 'Pulls the scalp backward', 100, 26, 'm'),
    l('Splenius capitis', 'Extends and turns the head', 94, 44),
    l('Levator scapulae', 'Lifts the shoulder blade', 86, 56),
    l('Trapezius (descending part)', 'Shrugs and steadies the neck', 112, 58, 'm'),
    l('Trapezius (transverse part)', 'Pulls the shoulder blades together', 118, 84),
    l('Trapezius (ascending part)', 'Pulls the shoulder blades down', 106, 132),
    l('Deltoid (posterior part)', 'Pulls the arm backward', 56, 88, 'm'),
    l('Infraspinatus', 'Rotator cuff muscle; turns the arm outward', 80, 98, 'm'),
    l('Teres minor', 'Rotator cuff muscle below infraspinatus', 66, 101),
    l('Rhomboid major (deep)', 'Squeezes the shoulder blades together', 108, 98),
    l('Teres major', 'Pulls the arm down and in', 72, 115),
    l('Latissimus dorsi', 'Widest muscle; pulls the arms down and back', 124, 152, 'm'),
    l('Erector spinae', 'Keeps the spine upright', 95, 178, 'm'),
    l('External oblique (posterior)', 'Back edge of the side belly muscle', 136, 176),
    l('Gluteus medius', 'Keeps the pelvis level when walking', 76, 198),
    l('Gluteus maximus', 'Largest muscle; straightens the hip', 122, 216, 'm'),
    l('Triceps brachii (lateral head)', 'Straightens the elbow', 47, 112),
    l('Triceps brachii (long head)', 'Straightens the elbow, pulls the arm back', 57, 120, 'm'),
    l('Anconeus', 'Small helper for straightening the elbow', 48, 150),
    l('Extensor carpi radialis longus', 'Lifts the wrist toward the thumb', 40, 152),
    l('Extensor carpi ulnaris', 'Lifts the wrist toward the little finger', 50, 176),
    l('Extensor digitorum', 'Straightens the fingers', 43, 178, 'm'),
    l('Abductor pollicis longus', 'Moves the thumb outward', 36, 190),
    l('First dorsal interosseous', 'Muscle between thumb and index finger', 30, 215),
    l('Dorsal interossei (hand)', 'Spread the fingers apart', 38, 220, 'R'),
    l('Adductor magnus', 'Large inner-thigh muscle', 97, 240),
    l('Biceps femoris', 'Outer hamstring; bends the knee', 73, 262, 'm'),
    l('Semitendinosus', 'Inner hamstring with a long tendon', 114, 262, 'm'),
    l('Semimembranosus', 'Deep inner hamstring', 106, 282),
    l('Popliteus (deep)', 'Unlocks the knee so it can bend', 86, 304),
    l('Gastrocnemius (lateral head)', 'Outer calf; points the foot', 74, 322),
    l('Gastrocnemius (medial head)', 'Inner calf; points the foot', 110, 322, 'm'),
    l('Soleus', 'Deep calf muscle for standing', 116, 356),
    l('Fibularis brevis', 'Turns the sole outward', 75, 358),
    l('Abductor digiti minimi (foot)', 'Moves the little toe outward', 72, 392)
  ]
};
LABELS.tendon = {
  front: [
    l('Temporomandibular ligament', 'Steadies the jaw joint', 84, 31),
    l('Sternoclavicular ligament', 'Holds the collarbone to the breastbone', 96, 69.5),
    l('Acromioclavicular ligament', 'Holds the collarbone to the shoulder tip', 61.5, 75, 'm'),
    l('Coracoclavicular ligament', 'Strong ligament under the collarbone', 66, 79),
    l('Biceps tendon (long head)', 'Runs in a groove at the front of the shoulder', 58, 90),
    l('Distal biceps tendon', 'Attaches the biceps to the forearm', 50.5, 141),
    l('Bicipital aponeurosis', 'Flat tendon sheet across the inner elbow', 53, 149),
    l('Palmaris longus tendon', 'Thin wrist tendon, missing in some people', 40.5, 194),
    l('Flexor carpi radialis tendon', 'Wrist tendon on the thumb side', 38, 196),
    l('Flexor retinaculum', 'Roof of the carpal tunnel', 36.5, 206.8, 'm'),
    l('Flexor pollicis longus tendon', 'Bends the tip of the thumb', 26, 223),
    l('Annular pulleys (A1–A5)', 'Rings holding finger tendons to the bone', 34.5, 228.7, 'R'),
    l('Flexor digitorum tendons', 'Pull the fingers into a fist', 38.5, 234, 'R'),
    l('Tendinous intersections', 'Bands that create the “six-pack” look', 106, 132),
    l('Linea alba', 'Tendon seam down the middle of the belly', 100, 150, 'm'),
    l('Inguinal ligament', 'Runs from the hip bone to the pubic bone', 84, 207, 'm'),
    l('Iliofemoral ligament', 'Strongest ligament; front of the hip', 118, 210),
    l('Pubic symphysis', 'Cartilage joint between the pubic bones', 100, 219),
    l('Quadriceps tendon', 'Connects the thigh muscles to the kneecap', 84, 289),
    l('Iliotibial band insertion', 'Where the IT band attaches below the knee', 75.5, 296),
    l('Anterior cruciate ligament (ACL)', 'Inside the knee; stops the shin sliding forward', 84, 300),
    l('Lateral collateral ligament (LCL)', 'Outer knee ligament', 72.8, 304),
    l('Patellar ligament', 'Connects the kneecap to the shin', 84, 309, 'm'),
    l('Menisci', 'C-shaped cartilage cushions in the knee', 111, 302.5),
    l('Medial collateral ligament (MCL)', 'Inner knee ligament', 106, 305, 'm'),
    l('Pes anserinus', 'Shared tendon of three inner-thigh muscles', 109, 312),
    l('Tibialis anterior tendon', 'Lifts the foot', 86, 372),
    l('Anterior talofibular ligament (ATFL)', 'Most often sprained ankle ligament', 75, 378.5, 'm'),
    l('Deltoid ligament', 'Strong fan of ligaments on the inner ankle', 92.5, 378),
    l('Extensor hallucis longus tendon', 'Lifts the big toe', 90, 386),
    l('Extensor digitorum longus tendons', 'Lift the four smaller toes', 79, 389)
  ],
  back: [
    l('Ligamentum nuchae', 'Elastic ligament at the back of the neck', 100, 48, 'm'),
    l('Supraspinatus tendon', 'Rotator cuff tendon on top of the shoulder', 64, 79, 'm'),
    l('Infraspinatus tendon', 'Rotator cuff tendon at the back of the shoulder', 64, 90),
    l('Teres minor tendon', 'Smallest rotator cuff tendon', 61, 97),
    l('Supraspinous ligament', 'Joins the tips of the spine bones', 100, 120),
    l('Triceps tendon', 'Attaches the triceps to the elbow tip', 50, 138, 'm'),
    l('Ulnar collateral ligament (elbow)', 'Inner elbow ligament, often hurt in throwers', 53, 147),
    l('Extensor retinaculum (wrist)', 'Band holding the back-of-wrist tendons', 36, 204.8),
    l('Extensor hood', 'Tendon web over each finger knuckle', 34.5, 229),
    l('Extensor tendons (hand)', 'Straighten the fingers', 38.5, 232, 'mR'),
    l('Iliolumbar ligament', 'Ties the lowest spine bone to the pelvis', 91, 186),
    l('Posterior sacroiliac ligaments', 'Lock the sacrum to the pelvis', 107, 195),
    l('Sacrotuberous ligament', 'Runs from the sacrum to the sit bone', 92.5, 212),
    l('Proximal hamstring tendon', 'Where the hamstrings attach at the sit bone', 88.5, 227, 'm'),
    l('Biceps femoris tendon', 'Outer hamstring tendon at the knee', 74, 295),
    l('Posterior cruciate ligament (PCL)', 'Inside the knee; stops the shin sliding back', 85, 301),
    l('Semimembranosus tendon', 'Inner hamstring tendon at the knee', 108.5, 295),
    l('Plantaris tendon', 'Long, thin tendon in the calf', 84, 340),
    l('Achilles tendon', 'Strongest tendon; joins the calf to the heel', 84, 370, 'm'),
    l('Tarsal tunnel tendons', 'Tibialis posterior, FDL and FHL behind the inner ankle', 92, 378),
    l('Calcaneofibular ligament', 'Outer ankle ligament below the ankle bone', 75, 381)
  ]
};

LABELS.bone = {
  front: [
    l('Frontal bone', 'The forehead bone', 100, 9, 'm'),
    l('Temporal bone', 'Side of the skull around the ear', 116, 22),
    l('Orbit', 'The bony eye socket', 93, 24),
    l('Nasal bone', 'Bridge of the nose', 100, 26),
    l('Zygomatic bone', 'The cheekbone', 87, 29),
    l('Maxilla', 'The upper jaw', 105, 35),
    l('Mandible', 'Lower jaw, the only skull bone that moves', 100, 47, 'm'),
    l('Hyoid bone', 'Floating U-shaped bone in the neck', 104, 52),
    l('Cervical vertebrae (C1–C7)', 'The seven neck bones', 100, 60),
    l('Clavicle', 'The collarbone', 76, 71, 'm'),
    l('Acromion', 'Tip of the shoulder blade at the top of the shoulder', 59, 75.5),
    l('Coracoid process', 'Hook of the shoulder blade under the collarbone', 66, 80),
    l('Manubrium', 'Top part of the breastbone', 100, 74),
    l('True ribs (1–7)', 'Ribs joined directly to the breastbone', 70, 96, 'm'),
    l('Body of sternum', 'Main part of the breastbone', 100, 100, 'm'),
    l('Costal cartilage', 'Flexible cartilage joining the ribs to the breastbone', 124, 110),
    l('Xiphoid process', 'Small tip at the bottom of the breastbone', 100, 127),
    l('False ribs (8–10)', 'Ribs joined by shared cartilage', 66, 132),
    l('Floating ribs (11–12)', 'Short ribs not attached at the front', 137, 144),
    l('Lumbar vertebrae (L1–L5)', 'The five lower-back bones', 100, 164),
    l('Iliac crest', 'Top rim of the hip bone', 68, 182, 'm'),
    l('Anterior superior iliac spine', 'Bony point at the front of the hip', 73, 196),
    l('Sacrum', 'Triangle of bone at the base of the spine', 100, 198),
    l('Acetabulum', 'The hip socket', 120, 208),
    l('Head of femur', 'Ball of the hip joint', 118, 205),
    l('Neck of femur', 'Where hip fractures often happen', 77, 211),
    l('Greater trochanter', 'Bony point on the outer hip', 68, 215),
    l('Obturator foramen', 'Large opening in the hip bone', 89, 217),
    l('Pubic symphysis', 'Joint between the two pubic bones', 100, 220),
    l('Head of humerus', 'Ball of the shoulder joint', 56, 86),
    l('Humerus', 'The upper arm bone', 52, 118, 'm'),
    l('Lateral epicondyle', 'Outer bump of the elbow', 44.5, 145),
    l('Medial epicondyle', 'Inner elbow bump (funny bone area)', 53, 146),
    l('Radius', 'Forearm bone on the thumb side', 38.5, 178, 'm'),
    l('Ulna', 'Forearm bone on the little-finger side', 46, 180),
    l('Scaphoid', 'The carpal bone most often broken', 32, 204.8),
    l('Lunate', 'Moon-shaped carpal bone', 35.4, 204.6),
    l('Triquetrum', 'Pyramid-shaped carpal bone', 38.6, 204.8, 'R'),
    l('Pisiform', 'Pea-shaped carpal bone', 41.4, 205.6, 'R'),
    l('Trapezium', 'Carpal bone at the base of the thumb', 30.6, 208.6),
    l('Trapezoid', 'Small carpal bone below the index finger', 33.4, 208.8),
    l('Capitate', 'Largest carpal bone', 36.4, 209, 'R'),
    l('Hamate', 'Carpal bone with a small hook', 39.6, 208.8, 'R'),
    l('First metacarpal', 'Thumb bone inside the hand', 27.5, 216),
    l('Metacarpals (2–5)', 'Long bones of the palm', 36.3, 218, 'R'),
    l('Proximal phalanges', 'Finger bones nearest the palm', 30.2, 228),
    l('Middle phalanges', 'Middle finger bones', 34.4, 237, 'R'),
    l('Distal phalanges', 'Fingertip bones', 30.3, 240),
    l('Femur', 'The thigh bone, the longest bone', 82, 250, 'm'),
    l('Medullary cavity (bone marrow)', 'Marrow-filled centre of the long bones', 118, 252),
    l('Patella', 'The kneecap', 116, 297, 'm'),
    l('Head of fibula', 'Top of the thin outer leg bone', 75, 309),
    l('Tibial tuberosity', 'Bump below the kneecap', 116, 311),
    l('Fibula', 'Thin outer leg bone', 75, 340),
    l('Tibia', 'The shin bone', 114, 340, 'm'),
    l('Medial malleolus', 'Inner ankle bone', 91, 376),
    l('Lateral malleolus', 'Outer ankle bone', 74, 377),
    l('Talus', 'Ankle bone under the shin', 84, 381),
    l('Navicular', 'Boat-shaped bone on the inner foot', 88.5, 384.5),
    l('Cuboid', 'Cube-shaped bone on the outer foot', 77, 386),
    l('Cuneiforms', 'Three wedge bones in the midfoot', 83.5, 387.5),
    l('Metatarsals', 'The five long bones of the foot', 82, 392, 'm'),
    l('Phalanges of the toes', 'The toe bones', 77.8, 397.5)
  ],
  back: [
    l('Parietal bone', 'Top and sides of the skull', 100, 9, 'm'),
    l('Lambdoid suture', 'Seam between parietal and occipital bones', 112, 18),
    l('Occipital bone', 'Back of the skull', 100, 28, 'm'),
    l('Mastoid process', 'Bony bump behind the ear', 85, 35),
    l('Cervical vertebrae (C1–C7)', 'The seven neck bones', 100, 56),
    l('Acromion', 'Top of the shoulder', 59, 76),
    l('Spine of scapula', 'Bony ridge across the shoulder blade', 74, 82),
    l('Scapula', 'The shoulder blade', 80, 104, 'm'),
    l('Thoracic vertebrae (T1–T12)', 'The twelve mid-back bones', 100, 110, 'm'),
    l('Ribs (posterior)', 'Ribs where they join the spine', 126, 120),
    l('Inferior angle of scapula', 'Bottom tip of the shoulder blade', 79, 122),
    l('Lumbar vertebrae (L1–L5)', 'The five lower-back bones', 100, 168, 'm'),
    l('Iliac crest', 'Top rim of the hip bone', 68, 182),
    l('Sacroiliac joint', 'Joint between the sacrum and pelvis', 93.5, 196),
    l('Sacrum', 'Base of the spine', 104, 200),
    l('Greater trochanter', 'Bony point on the outer hip', 68, 215),
    l('Coccyx', 'The tailbone', 100, 217),
    l('Ischial tuberosity', 'The sit bone', 88, 222),
    l('Humerus', 'The upper arm bone', 52, 118),
    l('Olecranon', 'Bony point of the elbow', 48, 147, 'm'),
    l('Radius', 'Forearm bone on the thumb side', 38.5, 178),
    l('Ulna', 'Forearm bone on the little-finger side', 46, 180),
    l('Carpal bones', 'Eight small wrist bones', 36, 207),
    l('Metacarpals', 'Long bones of the hand', 36.3, 218, 'R'),
    l('Phalanges', 'The finger bones', 34.4, 236),
    l('Femur', 'The thigh bone', 82, 250, 'm'),
    l('Femoral condyles', 'Rounded ends of the thigh bone at the knee', 116, 298),
    l('Head of fibula', 'Top of the thin outer leg bone', 75, 309),
    l('Fibula', 'Thin outer leg bone', 75, 340),
    l('Tibia', 'The shin bone', 114, 340),
    l('Medial malleolus', 'Inner ankle bone', 91, 376),
    l('Lateral malleolus', 'Outer ankle bone', 74, 377),
    l('Talus', 'Ankle bone under the shin', 84, 381),
    l('Calcaneus', 'The heel bone', 84, 390, 'm')
  ]
};
LABELS.organ = {
  front: [
    l('Frontal lobe', 'Brain area for planning, movement and personality', 100, 10, 'm'),
    l('Frontal sinus', 'Air space behind the forehead', 100, 15.5),
    l('Temporal lobe', 'Brain area for hearing and memory', 87, 20),
    l('Eyeball', 'The organ of sight', 107, 24.5),
    l('Nasal cavity', 'Warms and filters the air you breathe', 100, 30),
    l('Maxillary sinus', 'Air space inside the cheekbone', 91.5, 31),
    l('Parotid gland', 'Largest salivary gland', 117.5, 37),
    l('Tongue', 'Muscle for taste, chewing and speech', 100, 39.5),
    l('Larynx', 'The voice box', 100, 54, 'm'),
    l('Cervical lymph nodes', 'Swell during throat infections', 87, 57),
    l('Thyroid gland', 'Controls your metabolism', 106, 63),
    l('Trachea', 'The windpipe', 100, 70),
    l('Thymus', 'Trains immune cells; shrinks with age', 100, 80),
    l('Right lung, superior lobe', 'Top lobe of the right lung', 79, 92),
    l('Left lung, superior lobe', 'Top lobe of the left lung', 124, 94, 'm'),
    l('Axillary lymph nodes', 'Lymph nodes of the armpit', 63, 99),
    l('Aortic arch', 'Main artery curving out of the heart', 98, 100),
    l('Right lung, middle lobe', 'Only the right lung has this lobe', 78, 117),
    l('Right atrium', 'Receives blood from the body', 97, 118),
    l('Left ventricle', 'Thickest chamber; pumps blood to the body', 116, 121, 'm'),
    l('Right ventricle', 'Pumps blood to the lungs', 104, 128),
    l('Left lung, inferior lobe', 'Bottom lobe of the left lung', 130, 132),
    l('Right lung, inferior lobe', 'Bottom lobe of the right lung', 71, 134),
    l('Epitrochlear lymph nodes', 'Lymph nodes above the inner elbow', 54, 140),
    l('Diaphragm', 'The main breathing muscle', 64, 144),
    l('Left lobe of liver', 'Smaller part of the liver', 104, 150),
    l('Spleen', 'Filters blood and fights infection', 137, 150),
    l('Right lobe of liver', 'Larger part of the liver', 76, 154, 'm'),
    l('Stomach', 'Digests food with acid', 124, 158, 'm'),
    l('Gallbladder', 'Stores bile from the liver', 84, 166),
    l('Pancreas', 'Makes insulin and digestive juices', 122, 168),
    l('Transverse colon', 'Large intestine running across the belly', 112, 174),
    l('Duodenum', 'First part of the small intestine', 91, 178),
    l('Ascending colon', 'Large intestine on the right side', 72, 186),
    l('Jejunum', 'Middle part of the small intestine', 116, 186),
    l('Descending colon', 'Large intestine on the left side', 128, 194),
    l('Ileum', 'Last part of the small intestine', 86, 199),
    l('Cecum', 'Pouch where the large intestine begins', 73, 205),
    l('Sigmoid colon', 'S-shaped end of the colon', 116, 210),
    l('Urinary bladder', 'Stores urine', 100, 214, 'm'),
    l('Appendix', 'Small tube off the cecum', 75, 216),
    l('Inguinal lymph nodes', 'Lymph nodes of the groin', 86, 216)
  ],
  back: [
    l('Parietal lobe', 'Brain area for touch and sense of position', 100, 10, 'm'),
    l('Occipital lobe', 'Brain area for vision', 100, 24),
    l('Cerebellum', 'Coordinates balance and movement', 100, 33, 'm'),
    l('Brainstem', 'Controls breathing and heartbeat', 100, 43),
    l('Esophagus', 'Food pipe to the stomach', 100, 80),
    l('Left lung (posterior)', 'Back of the left lung', 78, 120, 'm'),
    l('Right lung (posterior)', 'Back of the right lung', 122, 120),
    l('Left adrenal gland', 'Makes adrenaline and cortisol', 83, 147),
    l('Liver (posterior)', 'Back of the liver', 126, 148),
    l('Spleen', 'Filters blood and fights infection', 64, 152),
    l('Right adrenal gland', 'Sits on top of the right kidney', 117, 155),
    l('Left kidney', 'Filters the blood', 83, 160, 'm'),
    l('Right kidney', 'Sits a little lower than the left', 117, 167, 'm'),
    l('Ureters', 'Carry urine down to the bladder', 92, 190),
    l('Rectum', 'End of the large intestine', 100, 214),
    l('Popliteal lymph nodes', 'Lymph nodes behind the knee', 84, 300)
  ]
};
LABELS.nerve = {
  front: [
    l('Supraorbital nerve', 'Feeling in the forehead (trigeminal branch)', 92.5, 15),
    l('Facial nerve (CN VII)', 'Moves the muscles of facial expression', 87, 27, 'm'),
    l('Infraorbital nerve', 'Feeling in the cheek and upper lip', 93, 31),
    l('Mental nerve', 'Feeling in the chin and lower lip', 94, 45),
    l('Cervical plexus', 'Network of nerves in the neck', 91, 54),
    l('Vagus nerve (CN X)', 'Slows the heart and controls digestion', 105, 62, 'm'),
    l('Brachial plexus', 'Nerve network supplying the arm', 82, 74, 'm'),
    l('Axillary nerve', 'Supplies the deltoid', 60, 88),
    l('Phrenic nerve', 'Controls the diaphragm', 89, 96),
    l('Musculocutaneous nerve', 'Supplies the biceps', 54, 108),
    l('Intercostal nerves', 'Run along each rib', 72, 118),
    l('Ulnar nerve', 'Supplies the little-finger side of the hand', 57, 128),
    l('Median nerve', 'The carpal tunnel nerve; thumb-side fingers', 52, 146, 'm'),
    l('Radial nerve (superficial branch)', 'Feeling on the thumb side of the forearm', 41, 162),
    l('Iliohypogastric nerve', 'Feeling in the lower belly', 79, 176),
    l('Ilioinguinal nerve', 'Feeling in the groin', 86, 194),
    l('Recurrent branch of median nerve', 'Moves the thumb muscles', 31, 213.5),
    l('Palmar digital nerves', 'Feeling in the fingertips', 34.4, 236, 'R'),
    l('Femoral nerve', 'Straightens the knee; feeling in the front thigh', 85, 220, 'm'),
    l('Obturator nerve', 'Supplies the inner-thigh muscles', 104, 230),
    l('Lateral femoral cutaneous nerve', 'Feeling on the outer thigh', 69, 230),
    l('Common fibular nerve', 'Wraps around the fibula below the knee', 74, 306),
    l('Saphenous nerve', 'Feeling on the inner lower leg', 109, 330),
    l('Superficial fibular nerve', 'Feeling on top of the foot', 77.5, 352),
    l('Deep fibular nerve', 'Lifts the foot and toes', 83.5, 360),
    l('Dorsal digital nerves (foot)', 'Feeling in the toes', 81, 395)
  ],
  back: [
    l('Greater occipital nerve', 'Feeling at the back of the scalp', 93, 26, 'm'),
    l('Lesser occipital nerve', 'Feeling behind the ear', 88, 37),
    l('Suprascapular nerve', 'Supplies two rotator cuff muscles', 80, 80),
    l('Axillary nerve', 'Wraps behind the upper arm bone', 62, 94),
    l('Spinal cord', 'Main nerve cable from the brain', 100, 100, 'm'),
    l('Radial nerve', 'Straightens the wrist and fingers', 49, 116, 'm'),
    l('Dorsal rami of spinal nerves', 'Supply the back muscles and skin', 94, 131),
    l('Ulnar nerve (cubital tunnel)', 'The “funny bone” nerve', 53, 146, 'm'),
    l('Cauda equina', 'Bundle of nerve roots below the spinal cord', 100, 182, 'm'),
    l('Superior gluteal nerve', 'Supplies gluteus medius', 82, 201),
    l('Superficial radial nerve', 'Feeling on the back of the thumb', 31, 211),
    l('Inferior gluteal nerve', 'Supplies gluteus maximus', 85, 215),
    l('Dorsal digital nerves (hand)', 'Feeling on the back of the fingers', 38.6, 232, 'R'),
    l('Sciatic nerve', 'The longest, widest nerve', 85, 250, 'm'),
    l('Posterior femoral cutaneous nerve', 'Feeling at the back of the thigh', 108, 250),
    l('Common fibular nerve', 'Branch around the outer knee', 75, 306),
    l('Tibial nerve', 'Points the foot and curls the toes', 86, 336, 'm'),
    l('Sural nerve', 'Feeling on the outer heel and foot', 79, 356),
    l('Medial & lateral plantar nerves', 'Feeling in the sole of the foot', 86, 390)
  ]
};

LABELS.vessel = {
  front: [
    l('Superficial temporal artery', 'Pulse at the temple', 84, 18),
    l('Facial artery', 'Pulse along the jaw', 91, 36),
    l('External jugular vein', 'Vein visible on the side of the neck', 112, 52),
    l('Internal jugular vein', 'Main vein draining the head', 108, 60),
    l('Common carotid artery', 'Main artery to the head', 95, 60, 'm'),
    l('Subclavian artery', 'Runs under the collarbone', 78, 78),
    l('Axillary artery', 'Artery of the armpit', 64, 89),
    l('Superior vena cava', 'Brings blood from the upper body to the heart', 96, 94),
    l('Aortic arch', 'Curve of the body’s largest artery', 101, 97),
    l('Pulmonary trunk', 'Carries blood to the lungs', 107, 104),
    l('Brachial artery', 'Where blood pressure is measured', 55, 120, 'm'),
    l('Heart', 'Four-chamber pump', 112, 124, 'm'),
    l('Cephalic vein', 'Vein on the thumb side of the arm', 45, 126),
    l('Basilic vein', 'Vein on the little-finger side', 56, 132),
    l('Median cubital vein', 'Common vein for blood tests', 48.5, 145),
    l('Renal arteries & veins', 'Blood to and from the kidneys', 114, 160),
    l('Inferior vena cava', 'Brings blood from the lower body', 97, 182),
    l('Abdominal aorta', 'Main artery of the belly', 103, 186, 'm'),
    l('Radial artery', 'The wrist pulse', 37.5, 192, 'm'),
    l('Ulnar artery', 'Artery on the little-finger side', 43, 196),
    l('Common iliac artery', 'Splits from the aorta toward each leg', 95, 204),
    l('Superficial palmar arch', 'Loop of arteries in the palm', 37.5, 215.5),
    l('Palmar digital arteries', 'Supply the fingers', 34.4, 236, 'R'),
    l('Femoral artery', 'Main leg artery; pulse in the groin', 86, 240, 'm'),
    l('Femoral vein', 'Main vein of the thigh', 110, 246),
    l('Deep femoral artery', 'Supplies the thigh muscles', 80, 256),
    l('Great saphenous vein', 'Longest vein in the body', 105, 300, 'm'),
    l('Anterior tibial artery', 'Artery at the front of the shin', 80, 340),
    l('Dorsalis pedis artery', 'Pulse on top of the foot', 84, 386),
    l('Dorsal venous arch', 'Veins across the top of the foot', 78, 389.5)
  ],
  back: [
    l('Occipital artery', 'Supplies the back of the scalp', 93, 30),
    l('Vertebral arteries', 'Run up through the neck bones to the brain', 97, 56),
    l('Suprascapular artery', 'Supplies the shoulder blade muscles', 84, 80),
    l('Azygos vein', 'Drains the chest wall', 102, 112),
    l('Intercostal arteries', 'Run along each rib', 80, 118),
    l('Deep brachial artery', 'Supplies the back of the upper arm', 50, 120),
    l('Descending aorta', 'Main artery running down behind the heart', 98.5, 140, 'm'),
    l('Superior gluteal artery', 'Supplies the upper buttock', 82, 199),
    l('Inferior gluteal artery', 'Supplies gluteus maximus', 89, 211),
    l('Dorsal venous network (hand)', 'Visible veins on the back of the hand', 33, 214),
    l('Perforating arteries', 'Pierce through to the back of the thigh', 82, 248),
    l('Popliteal vein', 'Main vein behind the knee', 113, 292),
    l('Popliteal artery', 'Pulse behind the knee', 85, 294, 'm'),
    l('Small saphenous vein', 'Vein up the back of the calf', 118, 340),
    l('Posterior tibial artery', 'Pulse behind the inner ankle', 88.5, 350, 'm'),
    l('Fibular artery', 'Deep artery of the outer calf', 78, 352),
    l('Calcaneal branches', 'Supply the heel', 86, 389)
  ]
};
// ---------- Layer drawings (drawn over the outline, back to front).
const ART = {};
const SLEEVES = sym(UPPER_ARM + ' ' + FOREARM + ' ' + THIGH + ' ' + LOWER_LEG + ' ' + FOOT);
const NAILS = els([[30.2, 239.5, 1.2, 1.6], [34.3, 243.5, 1.2, 1.6], [38.4, 241, 1.2, 1.6], [42.3, 235.5, 1.1, 1.5], [22.3, 228.5, 1.3, 1.6]]);

ART.skin = {
  front: [
    S(sym('M88 19 Q92 17 96 19 ' + el(93, 24, 3, 1.4) + ' M96 68 Q80 70 66 74 M42 146 Q47 148 52 145 M31 205 Q36 207 41 205 M30 214 Q36 212 43 214 M31 218 Q37 216 42 220 M78 298 Q84 304 90 298 M74 198 Q86 210 97 222 M76 393 L76 399 M80 393 L80 399 M84 393 L84 399 M89 392 L89 399') + ' M100 26 L99 32 Q100 34 102 33 M95 39 Q100 41 105 39 M96 39 Q100 38 104 39', C.skinInk, 0.9),
    F(el(100, 172, 1.2, 1.6) + ' ' + sym(el(80, 104, 1.6, 1.6)), '#B87A5E'),
    S(sym('M82 126 L84 222') + ' M64 156 L136 156 M66 190 L134 190', C.skinInk, 0.7, { dash: '2 2', op: 0.6 })
  ],
  back: [
    S('M100 66 L100 226 ' + sym('M72 84 L90 88 L86 120 Q80 122 76 118 Q70 100 72 84 M76 228 Q88 234 99 228 M76 302 Q84 298 92 302 M44 146 Q48 150 52 146 M76 392 Q84 398 92 392 M33 224 L41 224'), C.skinInk, 0.8, { op: 0.8 }),
    F(sym(NAILS), '#F6DCCD', C.skinInk, 0.5)
  ]
};

ART.fat = {
  front: [
    F(SLEEVES, C.sheet, C.sheetLine, 0.6, 0.35),
    F('M83 12 Q100 0 117 12 Q100 7 83 12 Z M90 46 L90 66 L110 66 L110 46 Z ' + sym(el(84, 19, 3, 6)), C.sheet, C.sheetLine, 0.7, 0.8),
    F(sym('M68 76 L97 74 L98 108 Q84 114 70 108 L62 96 Q63 84 68 76 Z'), C.sheet, C.sheetLine, 0.7, 0.55),
    F(sym('M99 112 L99 214 L92 214 Q88 180 87 150 Q87 126 89 112 Z'), C.sheet, C.sheetLine, 0.7, 0.6),
    F(sym('M36 207 L30 222 L44 222 Z M64 200 L69 200 L76 304 L72 306 Q66 260 64 200 Z M76 364 L91 364 L91 368 L76 368 Z M77 376 L90 378 L90 381 L77 379 Z'), C.sheet, C.sheetLine, 0.7, 0.95),
    F(sym(els([[90, 35, 4, 3.2], [89, 29, 3.5, 1.8], [80, 104, 9, 7], [66, 182, 4, 9], [87, 309, 4, 3], [30.2, 240, 1.4, 1.8], [34.3, 244, 1.4, 1.8], [38.5, 241.5, 1.4, 1.8], [42.4, 236, 1.3, 1.6], [22.5, 228, 1.5, 1.8]])) + ' ' + el(100, 49, 6, 2.5) + ' ' + el(100, 215, 7, 4), C.pad, C.padLine, 0.6),
    F(sym('M74 198 L97 222 L88 240 Z'), C.pad, C.padLine, 0.6, 0.7),
    S(sym(els([[78, 160, 2, 2], [82, 168, 2, 2], [76, 176, 2, 2], [84, 184, 2, 2], [84, 297.5, 4, 4.5]]) + ' M70 190 Q86 200 98 212'), C.padLine, 0.7)
  ],
  back: [
    F(SLEEVES, C.sheet, C.sheetLine, 0.6, 0.35),
    F('M83 12 Q100 0 117 12 Q100 7 83 12 Z M100 138 L121 176 L100 208 L79 176 Z', C.sheet, C.sheetLine, 0.7, 0.9),
    F(sym('M66 190 Q64 200 68 210 L84 204 Q86 192 82 188 Z M31 203 L41 203 L41 206 L31 206 Z M64 200 L69 200 L76 304 L72 306 Q66 260 64 200 Z'), C.sheet, C.sheetLine, 0.7, 0.9),
    F(sym(PALM), C.sheet, C.sheetLine, 0.6, 0.5),
    F(sym('M70 212 Q64 222 70 232 Q86 240 99 232 L99 212 Q86 208 70 212 Z'), C.pad, C.padLine, 0.6, 0.85),
    F(el(100, 64, 8, 4) + ' ' + sym(els([[66, 176, 4, 9], [84, 302, 6, 5], [81, 370, 2.5, 5], [84, 393, 8, 4]])), C.pad, C.padLine, 0.6),
    S(sym(els([[89, 224, 2.5, 2], [46, 148, 3, 2.5], [87, 381, 1.8, 1.5]])), C.padLine, 0.8)
  ]
};

// Muscles for the viewer's left half (mirrored for the other side). Deep ones are drawn first.
const MF_DEEP = [
  [[[81, 12], [87, 10], [86, 29], [81, 30]], [1, 0, 0, 1.5]],               // temporalis
  [[[82, 31], [87, 30], [89, 44], [85, 46]], [0, 1, 0, 1]],                 // masseter
  [[[96, 50], [98.8, 50], [98.8, 66], [96.5, 66]]],                          // sternohyoid
  [[[88, 50], [91, 54], [80, 68], [64, 70]], [0, 0, 1, 0]],                  // trapezius (front edge)
  [[[64, 114], [63, 176], [89, 206], [88, 128]], [0, 2, 0, 0]],              // external oblique
  [[[90, 112], [98.8, 112], [98.8, 214], [93, 214]], [0, 0, 0, 1.5]],        // rectus abdominis
  [[[60, 112], [64, 116], [66, 150], [62, 150]]],                            // latissimus edge
  [[[72, 108], [72, 112], [62, 110], [62, 107]]],                            // serratus slips
  [[[72, 115], [72, 119], [62, 117], [62, 114]]],
  [[[72, 122], [72, 126], [62.5, 124], [62.5, 121]]],
  [[[72, 129], [72, 133], [63, 131], [63, 128]]],
  [[[45, 114], [48, 120], [47, 143], [42, 139]], [0, 0, 0, 1]],             // brachialis
  [[[44, 128], [46, 132], [36, 197], [33, 195]], [0, 1, 0, 2]],             // brachioradialis
  [[[47, 158], [50, 161], [42, 199], [39, 198]]],                            // flexor digitorum superficialis
  [[[50, 148], [52, 151], [40, 200], [37.5, 200]]],                          // flexor carpi radialis
  [[[51.5, 150], [53, 152], [42, 180], [40.5, 180]]],                        // palmaris longus
  [[[54.5, 146], [56, 150], [43.5, 203], [41, 202]], [0, 1, 0, 0]],          // flexor carpi ulnaris
  [[[31, 207], [33.5, 207], [34, 219], [28.5, 219]], [0, 1, 0, 2]],          // thenar
  [[[40, 206], [42, 206], [43.5, 222], [39.5, 220]], [0, 2, 0, 0]],          // hypothenar
  [[[66, 196], [71, 198], [70, 222], [64, 221]], [0, 0, 0, 2]],             // tensor fasciae latae
  [[[80, 204], [84, 202], [91, 214], [86, 218]]],                            // iliopsoas
  [[[88, 214], [92, 213], [98, 221], [95, 226]]],                            // pectineus
  [[[95, 222], [99.5, 226], [94, 258], [90, 256]], [0, 1, 0, 0]],            // adductor longus
  [[[98, 228], [100, 230], [96.5, 296], [94.5, 296]]],                       // gracilis
  [[[65, 220], [77, 220], [79, 290], [72, 292]], [0, 0, 0, 5]],              // vastus lateralis
  [[[88, 258], [90, 258], [92, 296], [86, 294]], [0, 5, 0, 0]],              // vastus medialis
  [[[77, 214], [84, 214], [86, 286], [80, 286]], [0, 3, 0, 3]],              // rectus femoris
  [[[71, 304], [73.5, 306], [73, 342], [70, 342]], [0, 0, 0, 2]],            // fibularis longus
  [[[73.5, 312], [76, 312], [78, 366], [76, 366]]],                          // extensor digitorum longus
  [[[76.5, 306], [82, 308], [83, 366], [80, 368]], [0, 0, 0, 2]],            // tibialis anterior
  [[[90, 304], [93, 304], [93.5, 342], [90.5, 340]], [0, 4, 0, 0]],          // gastrocnemius (medial)
  [[[89.5, 342], [91.5, 342], [89.5, 366], [87.5, 364]], [0, 2, 0, 0]],      // soleus
  [[[77, 382], [84, 382], [84, 387], [77, 387]]],                            // extensor digitorum brevis
  [[[92, 379], [94, 380], [95.5, 394], [92.5, 392]]]                         // abductor hallucis
];
const MF_TOP = [
  [[[80.5, 34], [84.5, 33], [98, 66], [94, 67]], [0, 1, 0, 1]],             // sternocleidomastoid
  [[[85, 29], [87, 28], [96.5, 37.5], [95, 39]]],                            // zygomaticus major
  [[[98.5, 71], [98.5, 112], [62, 100], [62, 92]], [0, 9, 0, 2]],            // pectoralis major
  [[[52, 77], [67, 73], [58, 106], [55, 107]], [2, 2, 0, 6]],                // deltoid
  [[[57, 92], [62, 96], [53, 142], [49, 140]], [0, 2, 0, 3]],                // biceps brachii
  [[[53, 141], [55, 146], [45, 166], [42, 164]]],                            // pronator teres
  [[[71, 196], [75, 196], [96, 296], [92, 298]]]                             // sartorius
];
const MF_CENTER = [
  [[[86, 8], [99.5, 5], [99.5, 17], [86, 19]], [1, 0, 0, 1]],                // frontalis (both halves)
  [[[100.5, 5], [114, 8], [114, 19], [100.5, 17]], [1, 1, 0, 0]],
  [[[97.5, 25], [102.5, 25], [103, 31], [97, 31]]]                           // nasalis
];
const MB_DEEP = [
  [[[97, 32], [99, 38], [94, 52], [91, 50]]],                                // splenius capitis
  [[[88, 40], [90, 44], [84, 70], [80, 70]]],                                // levator scapulae
  [[[92, 120], [98.5, 120], [98.5, 196], [94, 196]]],                        // erector spinae
  [[[88, 90], [85, 116], [62, 90], [62, 84]], [0, 2, 0, 0]],                 // infraspinatus
  [[[78, 108], [76, 112], [61, 98], [61, 94]]],                              // teres minor
  [[[80, 116], [78, 122], [60, 108], [60, 104]]],                            // teres major
  [[[99.5, 140], [80, 192], [62, 116], [61, 110]], [0, 2, 0, 0]],            // latissimus dorsi
  [[[62, 150], [68, 160], [70, 186], [64, 186]]],                            // external oblique
  [[[66, 188], [86, 190], [72, 212], [66, 212]], [2, 0, 0, 0]],              // gluteus medius
  [[[56, 98], [61, 100], [53, 140], [50, 140]], [0, 1, 0, 1]],               // triceps long head
  [[[52, 86], [57, 94], [48, 130], [44, 122]], [0, 0, 0, 3]],                // triceps lateral head
  [[[42, 136], [45, 140], [39, 170], [36, 168]], [0, 0, 0, 1]],              // extensor carpi radialis longus
  [[[46, 150], [49, 152], [41, 200], [38, 200]]],                            // extensor digitorum
  [[[52.5, 148], [54.5, 150], [44.5, 202], [42, 202]], [0, 1, 0, 0]],        // extensor carpi ulnaris
  [[[39, 180], [41, 182], [34, 201], [32, 200]]],                            // abductor pollicis longus
  [[[30.5, 210], [32, 212], [32, 220], [28, 220]]],                          // first dorsal interosseous
  [[[94, 228], [99.5, 228], [97, 262], [94, 260]]],                          // adductor magnus
  [[[68, 230], [78, 232], [80, 294], [74, 296]], [0, 0, 0, 3]],              // biceps femoris
  [[[88, 234], [90, 234], [95, 296], [92.5, 296]], [0, 3, 0, 0]],            // semimembranosus
  [[[73, 340], [93, 340], [89, 364], [79, 364]], [0, 1, 0, 1]],              // soleus
  [[[71.5, 346], [74.5, 346], [77.5, 370], [75.5, 370]]],                    // fibularis brevis
  [[[71, 386], [74, 386], [75, 396], [73, 398]]]                             // abductor digiti minimi
];
const MB_TOP = [
  [[[99.5, 40], [99.5, 150], [90, 90], [66, 70]], [0, 0, 0, 1]],             // trapezius
  [[[52, 77], [67, 72], [58, 106], [55, 107]], [2, 2, 0, 6]],                // deltoid (posterior)
  [[[45, 145], [51, 147], [48, 155], [47, 155]]],                            // anconeus
  [[[99.5, 196], [99.5, 232], [72, 236], [68, 208]], [0, 6, 0, 2]],          // gluteus maximus
  [[[82, 232], [86, 232], [92, 296], [88, 296]]],                            // semitendinosus
  [[[72, 304], [83, 306], [83, 346], [74, 344]], [0, 0, 0, 5]],              // gastrocnemius (lateral)
  [[[85, 306], [94, 304], [92, 344], [85, 346]], [0, 5, 0, 0]]               // gastrocnemius (medial)
];
const MB_CENTER = [
  [[[87, 18], [99.5, 22], [99.5, 30], [88, 30]]],                            // occipitalis
  [[[100.5, 22], [113, 18], [112, 30], [100.5, 30]]]
];

ART.tendon = {
  front: [
    F(sym('M58 80 L59.5 80 L57.5 100 L56 100 Z M50.5 138 L52 138 L50.5 147 L49 147 Z M50 145 L56 148 L54 152 L49.5 148 Z M39.5 186 L41 186 L36.5 205 L35 205 Z M42 184 L43 184 L37.5 207 L36.5 207 Z M30 222 L31 222 L31 240 L30 240 Z M34 223 L35 223 L35 244 L34 244 Z M38 223 L39 223 L39 241 L38 241 Z M42 222 L43 222 L43 236 L42 236 Z M80 284 L88 284 L87 294 L81 294 Z M95 296 Q93 308 88 316 L86 314 Q91 306 93 296 Z M74 286 L76 286 L77 310 L75 310 Z M81 360 L83 360 L90 384 L88.5 385 Z M84 364 L85.5 364 L93 396 L91.5 396 Z') + ' M99.3 112 L100.7 112 L100.7 214 L99.3 214 Z', C.tFill, C.tLine, 0.6),
    S(sym('M36 207 L30.5 222 M36.5 207 L34.5 223 M37 207 L38.5 223 M37.5 207 L42.5 222 M34 208 L23 228 M78 362 L78 380 L75 396 M79 380 L79.5 397 M79.5 380 L83.5 397 M80 380 L88 397 M89 132 L98.6 132 M88 150 L98.6 150 M88 170 L98.6 170'), C.tFill, 1.1),
    F(sym(el(84, 31, 1.8, 2.5) + ' M95 68 L99 69 L99 72 L95 71 Z M59 74 L64 73 L64 76 L59 77 Z M65 76.5 L68 76.5 L67 82 L64 82 Z M31 205 L42 205 L42 208.5 L31 208.5 Z M33.5 228 L35.5 228 L35.5 229.5 L33.5 229.5 Z M33.6 235 L35.6 235 L35.6 236.5 L33.6 236.5 Z M29.4 229 L31.4 229 L31.4 230.3 L29.4 230.3 Z M78 204 L86 208 L84 216 L78 214 Z M82 304 L86 304 L86.5 314 L81.5 314 Z M93 294 L95.5 294 L95 314 L92.5 314 Z M71.5 294 L73.5 294 L74 312 L72 312 Z M72.5 376 L78 379 L77.5 381 L72 378.5 Z M90 374 L93 374 L95 382 L90 381 Z'), C.lFill, C.lLine, 0.6),
    S(sym('M72 196 Q84 210 96.5 218'), C.lFill, 1.6),
    S(sym('M80 296 L88 304'), C.lFill, 1.4, { dash: '2 1.5' }),
    F(el(100, 219, 1.6, 3) + ' ' + sym(el(78, 302.5, 4, 1.2) + ' ' + el(89, 302.5, 4, 1.2)), C.cart, C.lLine, 0.5)
  ],
  back: [
    F('M99.2 30 L100.8 30 L100.8 66 L99.2 66 Z ' + sym('M52.5 142 L55 142 L53 151 L50.5 151 Z M31 203 L41 203 L41 206.5 L31 206.5 Z M96 184 L86 186 L86 188 L96 187 Z M92 190 L96 192 L95 200 L91 198 Z M97 206 L90 220 L88.5 219 L95.5 205 Z M74 378 L77 384 L75.5 385 L72.5 379 Z'), C.lFill, C.lLine, 0.6),
    S('M100 66 L100 190', C.lFill, 1.4),
    S(sym('M88 296 L82 306'), C.lFill, 1.4, { dash: '2 1.5' }),
    F(sym('M70 78 L60 78 L60 80.5 L70 80.5 Z M70 92 L60 86 L59 88.5 L69 94 Z M64 98 L59 93 L58 95 L63 100 Z M48.5 128 L53 128 L51 146 L47.5 146 Z M33 226 L36 226 L35.5 232 L33.5 232 Z M87 222 L91 222 L90 232 L86 232 Z M73 286 L75.5 286 L75 304 L72.5 304 Z M90 286 L92.5 286 L93 304 L90.5 304 Z M81 350 L87 350 L86.5 386 L81.5 386 Z'), C.tFill, C.tLine, 0.6),
    S(sym('M36 206 L30.5 222 L30.3 240 M36.5 206 L34.5 223 L34.4 244 M37 206 L38.5 223 L38.5 241 M37.5 206 L42.5 222 L42.5 236 M34 206 L23 228 M80 310 L86 362 M91 360 L93 378 L91 392 M89.5 362 L91.5 380 L89 392'), C.tFill, 1.1)
  ]
};

// Ribs, spine and small hand/foot bones are generated.
let RIBS_F = '', CART_F = '';
for (let i = 1; i <= 10; i++) {
  const y0 = 76 + (i - 1) * 5.6, ex = r2(96 - i * 1.6), ey = r2(y0 + i * 1.1);
  RIBS_F += 'M' + ex + ' ' + ey + ' Q62 ' + r2(ey - 5) + ' ' + r2(60 + i * 0.4) + ' ' + r2(ey + 9) + ' ';
  CART_F += i <= 7 ? 'M97 ' + r2(y0) + ' L' + ex + ' ' + ey + ' ' : 'M' + ex + ' ' + ey + ' L' + r2(97 - (10 - i) * 1.5) + ' ' + r2(116 + (i - 7) * 3) + ' ';
}
RIBS_F += 'M67 140 Q62 138 62 146 M68 147 Q64 146 64 152';
let RIBS_B = '';
for (let i = 1; i <= 12; i++) {
  const y0 = r2(72 + (i - 1) * 6.2);
  RIBS_B += i <= 10 ? 'M97 ' + y0 + ' Q66 ' + r2(y0 - 3) + ' ' + r2(61 + i * 0.3) + ' ' + r2(y0 + 11) + ' ' : 'M97 ' + y0 + ' Q80 ' + y0 + ' 72 ' + r2(y0 + 6) + ' ';
}
let SPINE_F = '', SPINE_B = '';
for (let i = 0; i < 7; i++) { SPINE_F += box(100, 46 + i * 2.9, 2.6, 2.3) + ' '; SPINE_B += box(100, 44 + i * 3.1, 2.2, 2.3) + ' '; }
for (let i = 0; i < 12; i++) SPINE_B += box(100, 66.5 + i * 6.9, 2.8, 5.6) + ' ';
for (let i = 0; i < 5; i++) { SPINE_F += box(100, 138 + i * 10, 5, 8) + ' '; SPINE_B += box(100, 150 + i * 7.6, 3.8, 6.4) + ' '; }
const CARPALS = els([[32, 204.8, 1.5, 1.5], [35.4, 204.6, 1.6, 1.5], [38.6, 204.8, 1.4, 1.4], [41.4, 205.6, 1, 1], [30.6, 208.6, 1.3, 1.5], [33.4, 208.8, 1.2, 1.4], [36.4, 209, 1.5, 1.7], [39.6, 208.8, 1.4, 1.6]]);
const HAND_BONES = segs([[30, 211, 25, 221], [33, 211.5, 30.2, 223.5], [36.2, 211.8, 34.3, 224.5], [39, 211.5, 38.4, 224.5], [41.4, 211, 42.3, 223.5], [24.6, 222, 22.4, 227.6], [22.2, 228.4, 21.8, 231], [30.2, 224.3, 30.2, 232], [30.2, 232.8, 30.2, 237.4], [30.2, 238.2, 30.3, 241.4], [34.3, 225.3, 34.4, 234], [34.4, 234.8, 34.5, 240], [34.5, 240.8, 34.5, 244.6], [38.4, 225.3, 38.5, 233.2], [38.5, 234, 38.6, 238.6], [38.6, 239.4, 38.6, 242.4], [42.3, 224.3, 42.5, 230.6], [42.5, 231.4, 42.6, 234.6], [42.6, 235.4, 42.6, 237.8]]);
const FOOT_BONES = segs([[75.5, 388.5, 73.5, 394.5], [79, 389, 78, 395], [82.5, 389, 82.2, 395.5], [86, 389, 86.3, 395.5], [90, 388.5, 91.5, 395], [73.4, 395.3, 73, 398.6], [78, 395.8, 77.8, 398.8], [82.2, 396.2, 82.1, 398.9], [86.3, 396.2, 86.6, 398.9], [91.6, 395.8, 92.4, 398.9]]);
const ARM_BONES = 'M60 80 Q53 79 52 85 Q53 91 56 93 L49 140 Q45 142 44 147 L53 148 Q54 144 52 141 L59 96 Q62 90 61 84 Z M44.5 148 L46.5 149 L37 203 L32 203 Z M50 147 L53 148 L42 203 L39.5 203 Z';
const FEMUR = 'M84 206 Q80 202 77 206 Q76 210 79 212 L70 210 Q66 212 68 218 L74 222 L80 292 Q77 296 77 302 L91 302 Q92 296 88 292 L84 222 Q86 214 84 206 Z';
const SHIN_BONES = 'M78 306 L92 306 Q92 312 89 314 L88 370 Q90 374 92.5 378 L84 378 L84 314 Q78 312 78 306 Z M73.5 309 L77 309 L76.5 372 Q77.5 378 74.5 380 L72.5 378 L73.5 372 Z';
const B = (d) => F(d, C.bFill, C.bLine, 0.7);

ART.bone = {
  front: [
    S(sym(RIBS_F), C.bFill, 2.2, { scale: true }),
    S(sym(CART_F), C.cart, 1.7, { scale: true }),
    B(SPINE_F + ' M95 69 L105 69 L104 80 L96 80 Z M96.5 81 L103.5 81 L103 122 L97 122 Z M98 123 L102 123 L100 130 Z M93 188 L107 188 L104 206 L100 210 L96 206 Z'),
    B(el(100, 22, 16, 19)),
    B('M85 33 Q86 46 100 50 Q114 46 115 33 L111 33 Q110 43 100 45 Q90 43 89 33 Z M92 37 L108 37 L107 40 L93 40 Z'),
    F(sym(el(93, 24, 4, 3.5)) + ' M98 27 L100 33 L102 27 Z', C.dark),
    S('M95 51 Q100 53 105 51', C.bFill, 1.2, { scale: true }),
    B(sym('M84 26 L90 28 L90 31 L85 31 Z M97 68 Q82 68 74 72 Q66 72 60 74 L60 76.5 Q68 75.5 75 75 Q84 71 97 71 Z M64 78 L68 79 L67 81 L64 81 Z')),
    B(sym('M55 73 L64 73 L63 77 L55 78 Z')),
    B(sym(ARM_BONES)),
    B(sym(CARPALS)),
    S(sym(HAND_BONES), C.bFill, 1.5, { scale: true }),
    B(sym('M66 186 Q64 178 72 177 Q86 179 94 196 L95 203 Q88 200 82 206 L79 211 Q72 207 70 200 Q66 194 66 186 Z M82 207 Q88 213 98.5 214 L98.5 222 Q88 225 81 216 Z')),
    F(sym(el(89, 217, 3.5, 2.6)), C.dark),
    B(sym(FEMUR)),
    B(sym(el(84, 297, 4, 5))),
    B(sym(SHIN_BONES)),
    B(sym(els([[84, 381, 5, 2.4], [88.5, 384.5, 2.4, 1.5], [77, 386, 2.4, 1.8], [86.5, 387.5, 1.4, 1.2], [83.5, 387.5, 1.4, 1.2], [80.5, 387.5, 1.4, 1.2]]))),
    S(sym(FOOT_BONES), C.bFill, 1.4, { scale: true })
  ],
  back: [
    S(sym(RIBS_B), C.bFill, 2.2, { scale: true }),
    B(sym('M70 80 L92 84 L86 124 Q80 126 76 120 Q68 100 70 80 Z')),
    S(sym('M92 87.5 L60 77.5'), '#D6CDBB', 1.8, { scale: true }),
    B(sym('M55 73 L64 73 L63 79 L55 79 Z')),
    B(SPINE_B + ' M92 188 L108 188 L104 210 L100 214 L96 210 Z M98 214.5 L102 214.5 L100 220 Z'),
    B(el(100, 22, 16, 19)),
    S('M86 16 Q100 24 114 16', C.bLine, 0.8),
    B(sym(el(85, 35, 1.8, 2.5))),
    B(sym(ARM_BONES)),
    B(sym(el(48, 147, 2.6, 2.4))),
    B(sym(CARPALS)),
    S(sym(HAND_BONES), C.bFill, 1.5, { scale: true }),
    B(sym('M66 186 Q64 178 72 177 Q86 179 93 190 L94 204 Q88 204 84 208 L80 212 Q72 207 70 200 Q66 194 66 186 Z')),
    B(sym('M82 208 L92 208 L92 224 Q88 226 84 223 Z')),
    B(sym(FEMUR)),
    B(sym(SHIN_BONES)),
    B(sym(el(84, 381, 5, 2.4) + ' ' + el(84, 390, 6, 4)))
  ]
};
const BRAIN = [
  F(el(100, 20, 16, 15), '#E7A3B5', '#9E5068', 0.7),
  S('M100 6 L100 34 M88 14 Q94 18 90 24 M112 14 Q106 18 110 24 M86 24 Q92 26 90 32 M114 24 Q108 26 110 32', '#9E5068', 0.6)
];
const LUNG_R = 'M96 76 Q77 74 68 96 L64 140 Q78 148 96 140 Q94.5 110 96 76 Z';
const LUNG_L = 'M104 76 Q123 74 132 96 L136 140 Q122 148 112 142 L111 126 Q105 118 104 76 Z';
const FISSURES = 'M95 108 L69 106 M90 84 Q78 116 72 141 M110 84 Q122 112 130 141';
const HEART = 'M95 108 Q90 120 99 132 Q108 139 119 128 Q123 117 114 108 Q105 102 95 108 Z';
const LIVER = 'M63 144 Q80 136 110 146 Q104 160 82 167 Q65 165 63 144 Z';
const NODES = (list) => F(els(list.map((q) => [q[0], q[1], 1.5, 1.4])), C.node, '#3F6E33', 0.5);

ART.organ = {
  front: [
    F(el(83, 166, 6, 10) + ' ' + el(117, 160, 6, 10), '#9C7BD1', null, 0, 0.55),
    S(sym('M86 175 L97 208'), '#C6B2EA', 1.4, { scale: true, op: 0.7 }),
    F(LUNG_R + ' ' + LUNG_L, '#E89A9A', '#9E3B47', 0.7),
    S(FISSURES, '#9E3B47', 0.7),
    F('M98.5 58 L101.5 58 L101.5 92 L98.5 92 Z', '#F3C9C9', '#B07A7A', 0.5),
    S('M98.5 66 L101.5 66 M98.5 72 L101.5 72 M98.5 78 L101.5 78 M98.5 84 L101.5 84', '#B07A7A', 0.6),
    F('M96.5 74 Q100 71 103.5 74 L103 86 L97 86 Z', '#E9C98A', '#9C7B3A', 0.5, 0.9),
    S('M100 92 L88 102 L80 114 M100 92 L112 102 L120 114', '#9E3B47', 1.4, { scale: true }),
    F(HEART, '#C23B44', '#7A1E26', 0.8),
    S('M106 110 Q104 122 108 134 M95 117 L110 113', '#F2A0A6', 0.7),
    S('M104 108 Q102 96 96 100 Q94 102 97 108', C.art, 2.4, { scale: true }),
    S('M104 108 L107 100', C.vein, 2, { scale: true }),
    S('M62 146 Q80 132 100 138 Q120 132 138 146', '#F0B44C', 1.6),
    F(el(136, 152, 4, 8), '#7E4F8F', '#4A2A57', 0.6),
    F('M92 170 Q110 166 129 163 L129 167.5 Q110 172 92 174.5 Z', '#E9C98A', '#9C7B3A', 0.5),
    F(LIVER, '#A0473A', '#5E2219', 0.7),
    S('M98 144 L94 160', '#D98C7A', 0.7),
    F(el(84, 165, 2.6, 4), '#7DB36A', '#3F6E33', 0.5),
    F('M108 145 Q130 138 134 156 Q132 176 114 172 Q108 164 110 152 Z', '#E9A07A', '#9C5A3C', 0.7),
    S('M110 168 Q92 166 90 178 Q92 186 100 184', '#EDC39B', 3, { scale: true }),
    S('M102 182 Q110 178 118 182 Q124 188 116 192 Q108 188 104 194 Q112 198 120 196 M100 196 Q92 192 84 196 Q80 202 88 204 Q96 200 98 208 Q90 212 80 206', '#EDC39B', 3.2, { scale: true }),
    S('M73 206 L72 176 Q100 168 128 176 L128 204 Q120 214 104 210', '#C68A5E', 6, { scale: true }),
    F(el(73, 206, 4, 4), '#C68A5E'),
    S('M71 209 L75.5 217', '#C68A5E', 1.6, { scale: true }),
    F(el(100, 214, 8, 6), '#C6B2EA', '#5A3D8A', 0.6),
    F(el(100, 20, 16, 15), '#E7A3B5', '#9E5068', 0.7),
    BRAIN[1],
    F('M96 15 Q100 12 104 15 L103 17 L97 17 Z ' + sym(el(91.5, 31, 3, 2.6)), '#9DC3E6', '#4F6178', 0.4),
    F(sym(el(93, 24.5, 3.2, 2.6)), '#F4F1EA', C.bLine, 0.5),
    F(sym(el(93, 24.5, 1.3, 1.3)), '#4C7BE0'),
    F('M98.5 26 L101.5 26 L102 34 L98 34 Z', '#D98C8C'),
    F(sym(el(82.5, 37, 2.6, 5)), '#E9C98A', '#9C7B3A', 0.5),
    F('M94.5 38.5 Q100 43 105.5 38.5 Q100 36.5 94.5 38.5 Z', '#E07A86'),
    F('M96.5 51 L103.5 51 L102.5 58 L97.5 58 Z', '#D9D2C2', C.bLine, 0.5),
    F('M93.5 58 Q91.5 64 95.5 66.5 L100 63.5 L104.5 66.5 Q108.5 64 106.5 58 L103.5 60 L100 61 L96.5 60 Z', '#C77DA0', '#7A3A5A', 0.5),
    NODES([[87, 54], [86, 60], [113, 54], [114, 60], [62, 97], [64, 101], [138, 97], [136, 101], [84, 214], [88, 217], [116, 214], [112, 217], [54, 140], [146, 140]])
  ],
  back: [
    BRAIN[0], BRAIN[1],
    F(el(100, 33, 10, 5), '#D88AA0', '#9E5068', 0.6),
    S('M92 32 L108 32 M93 35 L107 35', '#9E5068', 0.5),
    F('M98 34 L102 34 L101.5 46 L98.5 46 Z', '#C77D95', '#9E5068', 0.5),
    F(mir(LUNG_R + ' ' + LUNG_L), '#E89A9A', '#9E3B47', 0.7),
    S(mir(FISSURES), '#9E3B47', 0.7),
    F(mir(HEART), '#C23B44', '#7A1E26', 0.6, 0.45),
    S('M100 46 L100 100 L92 146', '#E9B48C', 2.4, { scale: true }),
    F(mir(LIVER), '#A0473A', '#5E2219', 0.7),
    F(el(64, 152, 4, 8), '#7E4F8F', '#4A2A57', 0.6),
    F(el(83, 158, 6, 10) + ' ' + el(117, 165, 6, 10), '#9C7BD1', '#5A3D8A', 0.7),
    F('M80 147 L86 146 L84 150 Z M114 154 L120 155 L116 158 Z', '#F0B44C', '#9C6A10', 0.5),
    S('M86 166 L97 208 M114 174 L103 208', '#C6B2EA', 1.4, { scale: true }),
    F('M98 204 L102 204 L102 222 L98 222 Z', '#C68A5E', '#7A4A28', 0.5),
    NODES([[84, 300], [116, 300]])
  ]
};

const N = (d, w) => S(d, C.nerve, w);
ART.nerve = {
  front: [
    F(el(100, 20, 16, 15), '#E7A3B5', '#9E5068', 0.6, 0.9),
    N(sym('M83 31 L90 23 M83 31 L91 29 M83 31 L91 35 M83 31 L89 42 M83 31 L86 46 M93 21 L92 12 M92 28 L94 33 M92 44 L95 46 M95 46 L89 52 M95 50 L88 58'), 0.9),
    N(sym('M95 40 L95 68 L93 110 L97 150 M92 56 L88 100 L76 142'), 1.1),
    N(sym('M96 60 L72 78 M96 66 L72 80 M96 72 L72 82'), 1.3),
    N(sym('M70 80 L57 90 M68 84 L56 104 L48 134 L42 156 L37 186 M68 88 L60 116 L56 146 L48 176 L42 205 L42 214 M66 90 L52 112 L46 140 L41 160 L36 194'), 1.1),
    N(sym('M68 86 L58 120 L52 146 L44 178 L37 206 L35 214'), 1.5),
    N(sym('M35 210 L30 214 M35 214 L23 228 M35 214 L30.2 240 M36 214 L34.4 244 M38 214 L38.6 241 M42 214 L42.5 236'), 0.7),
    N(sym('M98 96 Q80 98 66 108 M98 108 Q80 110 66 120 M98 120 Q80 122 66 132 M98 132 Q80 134 68 144 M98 160 Q82 168 74 190 M98 170 Q86 182 82 200 L92 214'), 0.8),
    N(sym('M90 190 L72 204 L68 240 M97 196 L95 222 L96 244'), 0.9),
    N(sym('M94 190 L86 212 L84 226 M84 214 L76 244 M84 216 L90 254 M84 216 L82 260'), 1.4),
    N(sym('M88 254 L94 296 L91 340 L90 376 L91 384 M72 300 L75 310 M75 310 L77 350 L79 384 L76 394 M79 384 L83 396 M75 310 L81 340 L86 378 L90 394'), 1)
  ],
  back: [
    F(el(100, 20, 16, 15), '#E7A3B5', '#9E5068', 0.6, 0.9),
    F(el(100, 33, 10, 5), '#D88AA0', '#9E5068', 0.6, 0.9),
    N('M100 40 L100 160', 2.6),
    N('M100 160 L99 200 M100 160 L101 200 M100 160 L97.5 200 M100 160 L102.5 200', 0.8),
    N(sym('M98 46 L94 30 L91 14 M96 48 L86 34 M100 70 L92 72 M100 90 L92 92 M100 110 L92 112 M100 130 L92 132 M100 150 L92 152'), 0.9),
    N(sym('M94 68 L76 82 L72 92 M70 88 L58 96 M68 92 L58 116 L53 146 L46 178 L42 206 L42 220'), 1.1),
    N(sym('M70 90 Q52 106 47 136 L41 168 L37 196 L30 214 L27 224'), 1.4),
    N(sym('M31 214 L30.2 236 M34 216 L34.4 240 M38 216 L38.6 238 M42 216 L42.5 234 M96 198 L76 202 M96 206 L80 220 M95 210 L92 250 L90 288'), 0.8),
    N(sym('M96 202 L88 216 L84 260 L82 292'), 2.6),
    N(sym('M82 292 L84 306 L86 340 L88 372 L86 388 M82 292 L73 308'), 1.5),
    N(sym('M84 312 L80 350 L76 384 L71 392 M86 388 L90 396 M86 388 L80 397'), 0.9)
  ]
};

const A = (d, w) => S(d, C.art, w);
const V = (d, w) => S(d, C.vein, w);
ART.vessel = {
  front: [
    F(HEART, '#C23B44', '#7A1E26', 0.8),
    V('M96 76 L96 110 M97 140 L97 200', 2.4),
    A('M104 110 Q102 94 96 98 Q94 102 98 108 M103 112 L103 200', 2.6),
    V('M104 110 L107 100', 2),
    A('M103 162 L86 165 M103 160 L116 158', 1.4),
    V('M97 165 L86 168 M97 162 L116 161', 1.4),
    A(sym('M97 74 L94 46 M93 46 L84 34 L84 12 M93 46 L90 40 L92 30 M97 74 L70 80 L60 96 L50 144 M50 144 L35 204 L33 212 M50 144 L42 204 L42 212 M33 212 Q37 220 42 212'), 1.3),
    A(sym('M35 217 L30.2 238 M37 218 L34.4 242 M39 218 L38.6 240 M41 216 L42.5 234'), 0.7),
    A(sym('M103 200 L90 208 L86 222 L86 280 L84 290 M86 226 L78 262 M80 306 L80 368 M81 372 L86 392'), 1.4),
    V(sym('M95 74 L91 44 M90 66 L86 42 M95 76 L70 82 M66 76 L46 120 L42 146 L35 200 M58 112 L54 146 L44 204 M43 147 L54 143'), 1.2),
    V(sym('M92 210 L90 280 M93 214 L96 300 L92 340 L90 374 L90 384 M76 388 Q84 393 92 388'), 1.3)
  ],
  back: [
    A('M98.5 80 L98.5 200', 2.6),
    V('M102 86 L102 160', 1.4),
    A(sym('M94 44 L92 22 M97 74 L97 40 M95 72 L78 84'), 1.1),
    A(sym('M98.5 100 Q84 102 68 110 M98.5 116 Q84 118 68 126 M98.5 132 Q84 134 68 142'), 0.8),
    A(sym('M60 100 Q50 116 46 140 M95 196 L78 200 M95 206 L84 216 M86 234 L80 240 M86 252 L80 258'), 1),
    A(sym('M86 220 L86 280 L84 304 L88 340 L91 376 L88 390 M84 312 L78 350 L76 374 M88 384 L84 394'), 1.3),
    V(sym('M36 204 Q30 214 30 222 M36 204 Q38 212 40 222 M31 218 Q36 216 41 218 M58 112 L54 146 M88 280 L86 304 M84 302 L82 340 L78 376 L74 388'), 1.1)
  ]
};
// Muscle view: deep muscles, then white tendons and fascia, then the surface muscles on top.
const whiten = (items) => items.map((a) => Object.assign({}, a, a.fill === 'none' ? { stroke: '#F3EEE6' } : { fill: '#F3EEE6', stroke: '#B9AE9C' }));
const FACE = [
  F(sym(el(80, 29, 2.6, 5)), '#E3A493', '#6E1F18', 0.5),
  F(sym(el(93, 24.5, 3, 2.2)), '#F7F4EE', '#6E1F18', 0.5),
  F(sym(el(93.6, 24.5, 1.2, 1.2)), '#3B4A60'),
  S(sym(el(93, 24.5, 5, 3.8)) + ' ' + el(100, 39.5, 5, 2.6), '#8C2A22', 1.1)
];
ART.muscle = {
  front: muscleArt(MF_DEEP, MF_CENTER)
    .concat(whiten(ART.tendon.front))
    .concat([F(sym('M64 200 L69 200 L76 304 L72 306 Q66 260 64 200 Z M76 364 L91 364 L91 368 L76 368 Z M77 376 L90 378 L90 381 L77 379 Z'), '#F3EEE6', '#B9AE9C', 0.5)])
    .concat(muscleArt(MF_TOP)).concat(FACE),
  back: muscleArt(MB_DEEP, MB_CENTER)
    .concat([F('M100 138 L121 176 L100 208 L79 176 Z M100 62 L106 72 L100 84 L94 72 Z ' + sym('M64 200 L69 200 L76 304 L72 306 Q66 260 64 200 Z'), '#F3EEE6', '#B9AE9C', 0.5)])
    .concat(whiten(ART.tendon.back))
    .concat(muscleArt(MB_TOP))
    .concat([F(sym(el(80, 29, 2.6, 5)), '#E3A493', '#6E1F18', 0.5)])
};

// Athletic definition: soft shadows in the grooves between muscles and highlights on the bellies,
// so the skin view reads as a very fit body (pecs, six-pack, V-lines, quad sweep, calf diamond).
const DEF = {
  front: {
    shadow: sym('M64 98 Q78 114 98 110 M66 76 Q61 88 60 100 M47 98 Q52 104 58 100 M45 112 Q45 126 47 138 M58 104 Q57 122 54 140 M44 150 Q40 170 37 196 M63 110 L69 113 M63 117 L69 120 M64 124 L70 127 M90 116 Q87 160 92 206 M90 132 L99 133 M89 150 L99 151 M89 168 L99 168 M66 186 Q78 202 94 214 M90 262 Q97 280 92 296 M76 222 Q74 256 79 288 M72 200 Q86 240 94 292 M78 298 Q84 305 90 298 M80 308 Q80 340 82 366 M93 306 Q97 322 93 342 M97 69 Q82 68 68 72 M84 36 L96 64 M88 54 Q80 62 66 68') + ' M100 72 L100 112 M100 116 L100 206',
    light: sym('M72 90 Q84 92 94 92 M50 84 Q52 92 52 98 M52 112 Q51 124 51 134 M93 124 L97 124 M93 141 L97 141 M93 159 L97 159 M64 236 Q64 256 70 280 M81 226 L83 270 M92 316 L93 334 M40 156 Q38 168 37 180 M80 62 Q74 64 68 66 M70 136 Q72 150 74 164')
  },
  back: {
    shadow: sym('M88 86 Q86 104 82 120 Q76 124 70 112 M62 116 Q66 150 70 184 M100 150 Q92 118 78 84 M62 98 Q72 106 82 114 M47 112 Q50 126 53 128 Q56 120 57 106 M94 130 Q92 160 95 196 M72 228 Q86 238 99 230 M66 200 Q76 196 86 192 M80 236 Q82 262 84 294 M76 302 Q84 298 92 302 M74 314 Q76 340 84 346 Q92 340 94 314 M82 350 L84 372 M86 350 L86 372 M44 150 Q40 170 37 196') + ' M100 64 L100 196 M100 196 L100 228',
    light: sym('M88 52 Q80 60 70 66 M74 96 L84 100 M66 130 Q70 150 74 170 M76 210 Q86 214 94 212 M74 252 L76 280 M76 322 L78 336 M90 322 L89 336 M50 86 Q52 94 53 100 M50 112 L51 122')
  }
};
const defArt = (view, ink, strength) => [
  S(DEF[view].shadow, ink, 3.2, { scale: true, op: 0.13 * strength }),
  S(DEF[view].shadow, ink, 1.1, { scale: true, op: 0.4 * strength }),
  S(DEF[view].light, '#FFFFFF', 2.6, { scale: true, op: 0.22 * strength })
];
ART.skin.front = defArt('front', '#6B3420', 1).concat(ART.skin.front);
ART.skin.back = defArt('back', '#6B3420', 1).concat(ART.skin.back);
ART.fat.front = defArt('front', '#8C6A12', 0.5).concat(ART.fat.front);
ART.fat.back = defArt('back', '#8C6A12', 0.5).concat(ART.fat.back);
ART.muscle.front = ART.muscle.front.concat([S(DEF.front.light, '#FFFFFF', 2.2, { scale: true, op: 0.14 })]);
ART.muscle.back = ART.muscle.back.concat([S(DEF.back.light, '#FFFFFF', 2.2, { scale: true, op: 0.14 })]);

// Extra tappable areas so any part of the body maps to a named area.
REGIONS.front.push(
  { id: 'ua-r', key: 'upperarm', label: 'Right upper arm', x: 52, y: 118 },
  { id: 'ua-l', key: 'upperarm', label: 'Left upper arm', x: 148, y: 118 },
  { id: 'fa-r', key: 'forearm', label: 'Right forearm', x: 42, y: 176 },
  { id: 'fa-l', key: 'forearm', label: 'Left forearm', x: 158, y: 176 },
  { id: 'th-r', key: 'thigh', label: 'Front of right thigh', x: 82, y: 255 },
  { id: 'th-l', key: 'thigh', label: 'Front of left thigh', x: 118, y: 255 },
  { id: 'rib-r', key: 'chest', label: 'Right ribs', x: 70, y: 135 },
  { id: 'rib-l', key: 'chest', label: 'Left ribs', x: 130, y: 135 }
);
REGIONS.back.push(
  { id: 'head-b', key: 'head', label: 'Back of head', x: 100, y: 24 },
  { id: 'sb-l', key: 'shoulder', label: 'Left shoulder blade', x: 76, y: 96 },
  { id: 'sb-r', key: 'shoulder', label: 'Right shoulder blade', x: 124, y: 96 },
  { id: 'uab-l', key: 'upperarm', label: 'Back of left upper arm', x: 52, y: 116 },
  { id: 'uab-r', key: 'upperarm', label: 'Back of right upper arm', x: 148, y: 116 },
  { id: 'fab-l', key: 'forearm', label: 'Back of left forearm', x: 42, y: 180 },
  { id: 'fab-r', key: 'forearm', label: 'Back of right forearm', x: 158, y: 180 },
  { id: 'hb-l', key: 'wrist', label: 'Back of left hand', x: 36, y: 222 },
  { id: 'hb-r', key: 'wrist', label: 'Back of right hand', x: 164, y: 222 }
);
REGION_FACTS.upperarm = 'The triceps makes up about two-thirds of the muscle in your upper arm.';
REGION_FACTS.forearm = 'About 20 muscles in your forearm control your wrist and fingers.';
REGION_FACTS.thigh = 'The quadriceps group on the front of the thigh is one of the strongest muscle groups in the body.';

const BODY_COLOR = { skin: '#D59A78', fat: '#EFD27F', muscle: '#EADFD6', tendon: '#B98D85', bone: '#E6D3C4', organ: '#E6D3C4', nerve: '#E6D3C4', vessel: '#E6D3C4' };
const CHART_TITLE = { skin: 'Surface Anatomy', fat: 'Fat & Fascia', muscle: 'Muscular System', tendon: 'Tendons & Ligaments', bone: 'Skeletal System', organ: 'Internal Organs' };

const EX = [
  { id: 'skin', name: 'Skin', title: 'Skin (integumentary system)', color: '#E9B9A1',
    blurb: 'Skin, hair and nails form a waterproof barrier that blocks germs, senses touch and helps control temperature. Labels show the named surface regions doctors use.',
    stats: [{ big: '~2 m²', text: 'surface area in an adult' }, { big: '~16%', text: 'of body weight' }, { big: '~4 wks', text: 'to renew the outer layer' }] },
  { id: 'fat', name: 'Fat & fascia', title: 'Fat, fascia & bursae', color: '#EFD27F',
    blurb: 'Under the skin sits fat for padding and insulation, and fascia: a web of connective tissue that wraps every muscle. Bursae are small fluid sacs that cushion joints.',
    stats: [{ big: '2', text: 'main fat types: white and brown' }, { big: '~80%', text: 'of body fat sits under the skin' }, { big: '150+', text: 'bursae cushion the joints' }] },
  { id: 'muscle', name: 'Muscle', title: 'Muscular system', color: '#CC5B50',
    blurb: 'Skeletal muscles pull on bones to move you and hold you upright. Each one is named for its shape, position or job.',
    stats: [{ big: '600+', text: 'skeletal muscles' }, { big: '3', text: 'types: skeletal, smooth, cardiac' }, { big: '30–40%', text: 'of body weight in many adults' }] },
  { id: 'tendon', name: 'Tendon & ligament', title: 'Tendons, ligaments & cartilage', color: '#F5EFE3',
    blurb: 'Tendons (cream) join muscle to bone. Ligaments (pale blue) join bone to bone and hold joints together. Cartilage cushions the joints.',
    stats: [{ big: '~900', text: 'ligaments in the body' }, { big: '4', text: 'main knee ligaments' }, { big: 'Achilles', text: 'the strongest tendon' }] },
  { id: 'bone', name: 'Bone', title: 'Skeletal system', color: '#ECE7DD',
    blurb: 'Bones, joints and cartilage give the body its shape, protect the organs, store minerals and make blood cells in the marrow.',
    stats: [{ big: '206', text: 'bones in an adult' }, { big: '~300', text: 'bones at birth; many fuse' }, { big: '27', text: 'bones in each hand' }] },
  { id: 'organ', name: 'Organs', title: 'Organs & glands', color: '#C23B44',
    blurb: 'Organs are groups of tissues that do one job: thinking, breathing, pumping blood, digesting, filtering or making hormones.',
    stats: [{ big: '~1.5 kg', text: 'liver, the largest internal organ' }, { big: '~1.4 kg', text: 'average adult brain' }, { big: '~300 g', text: 'average adult heart' }] },
  { id: 'nerve', name: 'Nerves', title: 'Nervous system', color: '#F2D04B',
    blurb: 'The brain, spinal cord and nerves carry electrical signals that control movement, feeling and thought.',
    stats: [{ big: '86 bn', text: 'neurons in the brain' }, { big: '120 m/s', text: 'top speed of nerve signals' }, { big: '~45 cm', text: 'spinal cord length' }] },
  { id: 'vessel', name: 'Blood vessels', title: 'Arteries (red) & veins (blue)', color: '#E0464E',
    blurb: 'The heart pumps blood out through arteries and it returns through veins, carrying oxygen and nutrients to every cell.',
    stats: [{ big: '~100k', text: 'heartbeats a day' }, { big: '~5 L', text: 'of blood in an adult' }, { big: '~1 min', text: 'for blood to circle the body' }] }
];

// Zoom areas: [x, y, width] of the body drawing; height is always twice the width.
const ZOOMS = [
  { id: 'full', name: 'Full body', v: [0, 0, 200] },
  { id: 'head', name: 'Head & neck', v: [70, 0, 60] },
  { id: 'torso', name: 'Chest & belly', v: [50, 56, 100] },
  { id: 'arm', name: 'Arm', v: [5, 70, 90] },
  { id: 'hand', name: 'Hand', v: [20, 192, 32] },
  { id: 'legs', name: 'Hips & legs', v: [50, 190, 100] },
  { id: 'foot', name: 'Ankle & foot', v: [60, 346, 44] }
];

// Place labels in two columns beside the drawing, pushed apart so they never overlap.
function layoutLabels(list, v, isFull, view, selKey, accent, all) {
  const sc = 200 / v[2];
  const pts = list.map((L, i) => ({ L, key: view + i, px: (L.x - v[0]) * sc, py: (L.y - v[1]) * sc }))
    .filter((q) => q.px >= 1 && q.px <= 199 && q.py >= 1 && q.py <= 399 && (!isFull || q.L.f.indexOf('m') >= 0));
  const out = [];
  out.hidden = 0;
  ['L', 'R'].forEach((side) => {
    const col = pts.filter((q) => (q.L.f.indexOf('L') >= 0 ? 'L' : q.L.f.indexOf('R') >= 0 ? 'R' : (q.px < 100 ? 'L' : 'R')) === side)
      .sort((a, b) => a.py - b.py);
    if (!all && col.length > 9) {
      const keep = col.filter((q, i) => i % Math.ceil(col.length / 9) === 0 || q.key === selKey);
      out.hidden += col.length - keep.length;
      col.splice(0, col.length, ...keep);
    }
    col.forEach((q) => { q.h = Math.min(3, Math.ceil(q.L.n.length * 6.1 / 74)) * 13 + 6; });
    let bottom = -Infinity;
    col.forEach((q) => { q.ly = Math.max(q.py, bottom + q.h / 2 + 2); bottom = q.ly + q.h / 2; });
    let top = 400;
    for (let i = col.length - 1; i >= 0; i--) { const q = col[i]; q.ly = Math.min(q.ly, top - q.h / 2 - 2); top = q.ly - q.h / 2; }
    col.forEach((q) => {
      const x0 = side === 'L' ? -6 : 206, dx = q.px - x0, dy = q.py - q.ly;
      const on = q.key === selKey;
      out.push({
        key: q.key, name: q.L.n, ly: r2(q.ly), lx: x0,
        len: r2(Math.hypot(dx, dy)), ang: r2(Math.atan2(dy, dx) * 180 / Math.PI),
        dotLeft: r2(q.px - 3), dotTop: r2(q.py - 3),
        textLeft: side === 'L' ? -94 : 208,
        justify: side === 'L' ? 'flex-end' : 'flex-start',
        align: side === 'L' ? 'right' : 'left',
        lineColor: on ? 'var(--stageink)' : 'var(--leader)',
        bg: on ? accent : 'var(--labelbg)',
        fg: on ? '#FFFFFF' : 'var(--stageink)',
        pressed: on ? 'true' : 'false'
      });
    });
  });
  return out;
}

// ---------- Body profile: age and sex reshape the drawing, its labels and its tap areas together.
// The base drawing is an adult male; a profile warps every point of it.
const lerpKeys = (keys, y) => {
  if (y <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (y <= keys[i][0]) { const a = keys[i - 1], b = keys[i]; return a[1] + (b[1] - a[1]) * (y - a[0]) / (b[0] - a[0]); }
  }
  return keys[keys.length - 1][1];
};
// Width at each height: narrower shoulders and waist, wider hips for a female body.
const FEMALE_W = [[0, 1], [52, 1], [66, 0.95], [90, 0.9], [120, 0.93], [160, 0.92], [190, 1.03], [215, 1.08], [260, 1.04], [300, 1], [400, 1]];
const OLDER_W = [[0, 1], [140, 1], [170, 1.05], [200, 1.03], [230, 1], [400, 1]];
const ageGroup = (age) => age <= 12 ? 'child' : age <= 17 ? 'teen' : age <= 59 ? 'adult' : 'older';
function makeProfile(age, sex) {
  const g = ageGroup(age);
  const fem = sex === 'female' ? 1 : sex === 'male' ? 0 : 0.5;
  // Children have bigger heads for their size and stand shorter.
  const hf = g === 'child' ? 1.35 - age / 12 * 0.12 : g === 'teen' ? 1.12 - (age - 13) * 0.025 : 1;
  const ts = g === 'child' ? 0.78 + age * 0.008 : g === 'teen' ? 0.9 + (age - 13) * 0.02 : g === 'older' ? 0.98 - Math.min(age - 60, 30) * 0.001 : 1;
  const sexW = g === 'child' ? fem * 0.3 : fem;
  const warp = (x, y) => {
    let sx = 1 + (lerpKeys(FEMALE_W, y) - 1) * sexW;
    if (g === 'older') sx *= lerpKeys(OLDER_W, y);
    if (g === 'child') sx *= 0.94;
    x = 100 + (x - 100) * sx;
    if (y < 62) {
      const h = y <= 44 ? hf : hf + (1 - hf) * (y - 44) / 18;
      x = 100 + (x - 100) * h;
      y = 62 - (62 - y) * h;
    }
    return [100 + (x - 100) * ts, 400 - (400 - y) * ts];
  };
  return {
    key: g + '-' + (Math.round(age / 3)) + '-' + sex, age, sex, group: g, fem, warp,
    definition: (g === 'child' ? 0.25 : g === 'teen' ? 0.6 : g === 'older' ? 0.5 : 1) * (fem === 1 ? 0.7 : 1),
    hair: g === 'older' ? '#B9B4AC' : g === 'child' ? '#6B4A2E' : '#3E2A1C'
  };
}
let PROFILE = makeProfile(30, 'male');
const warpPath = (d, P) => d.replace(/(\d*\.?\d+) (\d*\.?\d+)/g, (m, x, y) => { const q = P.warp(parseFloat(x), parseFloat(y)); return r2(q[0]) + ' ' + r2(q[1]); });
const wpt = (P, x, y) => { const q = P.warp(x, y); return { x: r2(q[0]), y: r2(q[1]) }; };

// Extra drawing and labels that depend on the profile.
function profileArt(P, layerId, view) {
  const out = [];
  const adultish = P.group !== 'child';
  if (layerId === 'skin') {
    const hairD = P.fem === 1
      ? (view === 'front' ? 'M80 22 Q80 0 100 0 Q120 0 120 22 L122 58 Q116 60 112 56 L112 24 Q106 10 100 10 Q94 10 88 24 L88 56 Q84 60 78 58 Z' : 'M80 22 Q80 0 100 0 Q120 0 120 22 L121 62 Q100 66 79 62 Z')
      : (view === 'front' ? 'M81 18 Q84 2 100 1 Q116 2 119 18 Q110 8 100 8 Q90 8 81 18 Z' : 'M80 24 Q80 0 100 0 Q120 0 120 24 Q118 34 110 36 L90 36 Q82 34 80 24 Z');
    out.push(F(hairD, P.hair, 'rgba(0,0,0,0.3)', 0.5));
    if (P.fem === 1 && adultish && view === 'front') {
      out.push(S(sym('M68 100 Q70 118 84 119 Q95 118 98 108'), '#6B3420', 1.4, { scale: true, op: 0.35 }));
      out.push(F(sym(el(81, 108, 2.4, 2.4)), '#A86A50'));
    }
  }
  if (layerId === 'fat' && P.fem === 1 && adultish && view === 'front') out.push(F(sym(el(81, 106, 11, 9)), C.pad, C.padLine, 0.6, 0.85));
  if (layerId === 'organ' && view === 'front' && P.group !== 'child') {
    if (P.sex === 'female') {
      out.push(S(sym('M95 202 Q90 197 87 202'), '#C77DA0', 1, { scale: true }));
      out.push(F(el(100, 203, 6, 5) + ' ' + sym(el(87, 203, 2.2, 1.6)), '#D98CA0', '#8E4A5E', 0.5));
    } else if (P.sex === 'male') {
      out.push(F(el(100, 221.5, 3, 2.2), '#C9A07A', '#7A5A3A', 0.5));
    }
  }
  return out;
}
function profileLabels(P, layerId, view) {
  if (layerId !== 'organ' || view !== 'front' || P.group === 'child') return [];
  if (P.sex === 'female') return [l('Uterus', 'Muscular organ where a pregnancy grows', 100, 202), l('Ovary', 'Makes eggs and the hormones oestrogen and progesterone', 87, 203)];
  if (P.sex === 'male') return [l('Prostate gland', 'Gland below the bladder; often enlarges with age', 100, 222)];
  return [];
}

const ART_CACHE = {}, LABEL_CACHE = {};
function drawing(layerId, view, vb, bodyColor) {
  const P = PROFILE, key = P.key + layerId + view + bodyColor;
  if (!ART_CACHE[key]) {
    const sil = [F(OUTLINE, bodyColor, 'rgba(0,0,0,0.25)', 0.6), F(mir(OUTLINE), bodyColor, 'rgba(0,0,0,0.25)', 0.6)];
    let items = ART[layerId][view];
    // Less muscle definition for children, teens, older adults and female bodies.
    if ((layerId === 'skin' || layerId === 'fat') && P.definition !== 1) {
      items = items.map((a) => /scale/.test(a.ve) || a.ve === 'none' ? Object.assign({}, a, { op: a.op * (a.stroke === '#FFFFFF' || a.stroke === '#6B3420' || a.stroke === '#8C6A12' ? P.definition : 1) }) : a);
    }
    ART_CACHE[key] = sil.concat(items, profileArt(P, layerId, view)).map((a) => Object.assign({}, a, { d: warpPath(a.d, P) }));
  }
  return ART_CACHE[key].map((a) => Object.assign({}, a, { vb }));
}
function labelsFor(layerId, view) {
  const P = PROFILE, key = P.key + layerId + view;
  if (!LABEL_CACHE[key]) LABEL_CACHE[key] = LABELS[layerId][view].concat(profileLabels(P, layerId, view)).map((L) => Object.assign({}, L, wpt(P, L.x, L.y)));
  return LABEL_CACHE[key];
}
const regionsFor = (view) => REGIONS[view].map((r) => Object.assign({}, r, wpt(PROFILE, r.x, r.y)));

// Named parts closest to a tapped spot, for the pain finder.
function partsNear(layerId, view, x, y) {
  return labelsFor(layerId, view)
    .map((L) => ({ n: L.n, d: Math.hypot(L.x - x, L.y - y) }))
    .filter((q) => q.d <= 20)
    .sort((a, b) => a.d - b.d)
    .slice(0, 4)
    .map((q) => q.n);
}

// ---------- Follow-up questions and how each answer shifts the likely causes.
const ONSET = [['injury', 'A sudden injury or fall'], ['overuse', 'After exercise or overuse'], ['gradual', 'Came on gradually'], ['none', 'No clear reason']];
const DURATION = [['days', 'Less than a week'], ['weeks', '1 to 6 weeks'], ['months', 'More than 6 weeks']];
const WORSE = [['moving', 'Moving it'], ['weight', 'Putting weight on it'], ['pressing', 'Pressing on it'], ['rest', 'After rest or first thing in the morning'], ['night', 'At night'], ['standing', 'Standing or walking for a long time']];
const SYMPTOMS = [['swelling', 'Swelling'], ['bruising', 'Bruising'], ['redness', 'Redness or warmth'], ['fever', 'Fever or feeling unwell'], ['numbness', 'Numbness or pins and needles'], ['weakness', 'Weakness'], ['clicking', 'Clicking, catching or locking']];

// [answer id, words in a cause's name or description, score change, reason shown to the person]
const RULES = [
  ['injury', /strain|sprain|fracture|tear|bruise|contusion|haematoma|whiplash|growth plate/i, 2.5, 'started with an injury'],
  ['injury', /arthritis|spondylosis|DOMS|soreness/i, -1.5, null],
  ['overuse', /tendin|strain|DOMS|soreness|splints|stress fracture|fasciitis|IT band|tennis|golfer|jumper|Osgood|Sever|bursitis|impingement/i, 2.5, 'came on with exercise or overuse'],
  ['gradual', /tendin|arthritis|syndrome|fasciitis|bursitis|spondylosis|frozen|impingement|stiffness|wear/i, 2, 'came on gradually'],
  ['none', /arthritis|nerve|sciatica|infection|cellulitis|shingles|organ|gallstone|kidney|reflux|migraine|period|cyst/i, 1.5, 'no clear trigger'],
  ['days', /strain|sprain|bruise|contusion|DOMS|soreness|cramp|spasm|infection|appendicitis|stone/i, 1.2, 'recent'],
  ['days', /arthritis|spondylosis|frozen/i, -1, null],
  ['months', /arthritis|tendin|syndrome|spondylosis|frozen|fasciitis|bursitis|wear|cyst/i, 2, 'has lasted a long time'],
  ['months', /DOMS|soreness|cramp|bruise|contusion/i, -3, null],
  ['moving', /strain|sprain|tendin|bursitis|impingement|tear|spasm/i, 1.2, 'worse with movement'],
  ['weight', /fracture|stress|sprain|arthritis|plantar|meniscus|patellofemoral|Sever|Osgood|bone/i, 1.5, 'hurts to bear weight'],
  ['pressing', /bruise|contusion|bursitis|costochondritis|fracture|tendin|haematoma|trigger point|knot/i, 1.2, 'tender to press'],
  // What the pain feels like.
  ['sharp', /strain|sprain|tear|fracture|disc|stone|pleur|costochondritis|impingement|meniscus/i, 1, 'sharp pain'],
  ['stab', /stone|appendicitis|gallstone|pleur|tear|fracture|disc|trapped nerve/i, 1.2, 'stabbing pain'],
  ['dull', /arthritis|spondylosis|tendin|bursitis|reflux|ulcer|period|cyst|postural|tension|wear|fatty liver/i, 1, 'a dull ache'],
  ['throb', /migraine|infection|abscess|gout|bursitis|cellulitis|fracture|cluster/i, 1.2, 'throbbing pain'],
  ['cramp', /cramp|spasm|period|stone|colic|gallstone|bowel|IBS|constipation|gas/i, 1.6, 'cramping or comes in waves'],
  ['rest', /arthritis|fasciitis|Achilles|spondylosis|stiffness|frozen/i, 1.8, 'stiff after rest'],
  ['night', /fracture|frozen|rotator|nerve|carpal|sciatica|bursitis/i, 1.5, 'worse at night'],
  ['standing', /fasciitis|plantar|arthritis|facet|disc|back strain|lower back|patellofemoral|splints|heel|Sever|fat pad|stress fracture|Achilles|bursitis|tarsal/i, 1.8, 'worse with long standing or walking'],
  ['swelling', /sprain|bursitis|fracture|tear|clot|DVT|cellulitis|haematoma|arthritis|ligament/i, 1.8, 'swelling'],
  ['bruising', /bruise|contusion|haematoma|fracture|sprain|strain|tear/i, 1.8, 'bruising'],
  ['redness', /cellulitis|infection|bursitis|clot|DVT|shingles/i, 2.5, 'redness or warmth'],
  ['fever', /infection|cellulitis|appendicitis|pleurisy|tonsillitis|sinusitis|lymph/i, 3, 'fever'],
  ['numbness', /nerve|sciatica|carpal|tunnel|pinched|shingles|disc/i, 3, 'numbness or tingling'],
  ['weakness', /tear|nerve|sciatica|rotator|pinched|disc/i, 2.2, 'weakness'],
  ['clicking', /meniscus|labral|TMJ|jaw|tear|patellofemoral/i, 2.5, 'clicking or locking']
];

// Causes that only apply at certain ages or to one sex.
function profileConditions(regionKey, layerId, age, sex) {
  const out = [];
  if (regionKey === 'knee' && age >= 9 && age <= 16 && (layerId === 'tendon' || layerId === 'bone')) out.push(c('Osgood-Schlatter disease', 'common', 'A sore bump just below the kneecap in active children and teens during growth spurts.', 'Ease off running and jumping, ice and thigh stretches. It settles once growth finishes.'));
  if (regionKey === 'heel' && age >= 8 && age <= 14 && (layerId === 'tendon' || layerId === 'bone')) out.push(c('Sever’s disease (heel growth plate)', 'common', 'Heel pain in active children while the heel bone is still growing.', 'Rest from running, cushioned heel cups and calf stretches.'));
  if (age < 16 && layerId === 'bone') out.push(c('Growth plate injury', 'doctor', 'Children’s bones have softer growth plates near the joints, which can be hurt instead of the ligaments.', 'See a doctor after any injury with swelling near a joint.'));
  if (age >= 60 && layerId === 'bone' && ['upperback', 'lowerback', 'hip', 'wrist'].indexOf(regionKey) >= 0) out.push(c('Osteoporotic fracture', 'doctor', 'Thinner bones can break after a minor fall, or in the spine with no fall at all.', 'See a doctor, especially after a fall.'));
  if (sex === 'female' && age >= 11 && age <= 55 && layerId === 'organ' && (regionKey === 'abdomen' || regionKey === 'hip' || regionKey === 'lowerback')) {
    out.push(c('Period pain (dysmenorrhoea)', 'common', 'Cramping low in the belly or back around a period.', 'Heat, gentle exercise and anti-inflammatory pain relief. See a doctor if it is severe or new.'));
    out.push(c('Ovarian cyst', 'possible', 'A fluid sac on an ovary that can cause a dull or sharp one-sided pelvic ache.', 'See a doctor, and get urgent care if the pain is sudden and severe.'));
  }
  if (sex === 'male' && layerId === 'organ' && (regionKey === 'hip' || regionKey === 'abdomen')) {
    out.push(c('Testicular problem (including torsion)', 'doctor', 'Groin pain can come from the testicles. Sudden, severe pain may be torsion, which needs surgery within hours.', 'Go to emergency care straight away if the pain is sudden and severe.'));
    if (age >= 35) out.push(c('Prostatitis', 'possible', 'Inflammation of the prostate, causing pain low in the pelvis or groin and trouble peeing.', 'See a doctor. It may need antibiotics.'));
  }
  return out;
}
// How age and sex shift each cause, with the reason shown.
function profileBoost(x, age, sex) {
  const t = x.name + ' ' + x.about;
  const out = [];
  if (/arthritis|spondylosis|frozen shoulder|cuff tear|wear|osteopor/i.test(t)) out.push(age >= 50 ? [2.5, 'common from age 50'] : age < 30 ? [-2.5, null] : [0, null]);
  if (/tendin|jumper|splints|strain|sprain|DOMS|Osgood|Sever|IT band/i.test(t) && age >= 12 && age <= 40) out.push([1, 'common in active younger people']);
  if (/heart|angina/i.test(t)) out.push((sex === 'male' && age >= 45) || age >= 55 ? [2, 'risk rises with age'] : age < 30 ? [-1.5, null] : [0, null]);
  if (/patellofemoral|bladder infection|UTI/i.test(t) && sex === 'female') out.push([1.2, 'more common in women']);
  if (/hernia|gout/i.test(t) && sex === 'male') out.push([1.2, 'more common in men']);
  if (/Osgood|Sever|growth plate/i.test(t)) out.push([2, 'typical at this age']);
  return out;
}

// ---------- Recovery plans: three weekly stages. Week 1 is free; weeks 2 and 3 are Premium.
const ex = (name, dose, how) => ({ name, dose, how });
const PLANS = {
  tendon: { title: 'Tendon loading plan', weeks: [
    ['Calm it down', [ex('Isometric hold', '5 × 45 sec', 'Tense the muscle against something that does not move, at a comfortable effort.'), ex('Gentle range of motion', '2 × 10', 'Move the joint slowly through a pain-free range.'), ex('Ice or heat', '10 min', 'Whichever feels better, once or twice a day.')]],
    ['Build strength', [ex('Slow resistance', '3 × 12', 'Lift a light weight over 3 seconds up and 3 seconds down.'), ex('Eccentric lowering', '3 × 10', 'Lower slowly on the sore side; use the good side to lift.'), ex('Balance hold', '3 × 30 sec', 'Stand on one leg or hold a steady position.')]],
    ['Return to activity', [ex('Heavier loading', '3 × 8', 'Add a little weight if last week felt easy.'), ex('Small hops or quick moves', '3 × 8', 'Only if pain stays below 3/10 during and after.'), ex('Activity intervals', '15 min', 'Alternate easy and normal pace for your sport or walk.')]]
  ] },
  muscle: { title: 'Muscle recovery plan', weeks: [
    ['Ease the pain', [ex('Gentle stretch', '3 × 30 sec', 'Stretch to mild tension only, never into sharp pain.'), ex('Easy movement', '10 min', 'A walk or light activity to keep blood flowing.'), ex('Heat', '10 min', 'Warmth helps tight muscles relax.')]],
    ['Strengthen', [ex('Band strengthening', '3 × 12', 'Work the muscle with a light resistance band.'), ex('Foam rolling', '2 min', 'Roll slowly over the area, easing off tender spots.'), ex('Active stretching', '2 × 10', 'Move in and out of the stretch with control.')]],
    ['Back to full strength', [ex('Full strengthening', '3 × 10', 'Use a weight that feels challenging by the last rep.'), ex('Sport or work moves', '10 min', 'Practise the movements you need day to day.'), ex('Build up activity', '20 min', 'Increase time or speed by about 10% a week.')]]
  ] },
  joint: { title: 'Joint care plan', weeks: [
    ['Keep it moving', [ex('Range-of-motion circles', '2 × 10', 'Slow circles or bends through a comfortable range.'), ex('Low-impact cardio', '15 min', 'Cycling, swimming or walking on a flat surface.'), ex('Gentle muscle squeeze', '5 × 10 sec', 'Tighten the muscles around the joint without moving it.')]],
    ['Support the joint', [ex('Strengthen nearby muscles', '3 × 12', 'For a knee, sit-to-stands; for a shoulder, band rows.'), ex('Balance', '3 × 30 sec', 'Stand on one leg near a wall for support.'), ex('Low-impact cardio', '20 min', 'Keep a steady, comfortable pace.')]],
    ['Everyday strength', [ex('Step-ups or wall push-ups', '3 × 10', 'Pick the one that matches the sore joint.'), ex('Longer cardio', '25 min', 'Aim for most days of the week.'), ex('Morning routine', '5 min', 'Gentle movement to ease stiffness after waking.')]]
  ] },
  spine: { title: 'Back and neck plan', weeks: [
    ['Settle it down', [ex('Short walks', '10–15 min, twice a day', 'Walking is one of the best things for back pain.'), ex('Knee hugs or chin tucks', '2 × 10', 'Knee hugs for the low back, chin tucks for the neck.'), ex('Pelvic tilts', '2 × 10', 'Lie on your back and gently flatten and arch your low back.')]],
    ['Build support', [ex('Bird-dog', '3 × 8 each side', 'On hands and knees, reach out one arm and the opposite leg.'), ex('Glute bridge', '3 × 10', 'Lift your hips while squeezing your buttocks.'), ex('Cat-cow', '2 × 10', 'Slowly round and arch your back on hands and knees.')]],
    ['Strong and steady', [ex('Side plank', '3 × 20 sec', 'From the knees at first, then full.'), ex('Dead bug', '3 × 8', 'Lie on your back and lower opposite arm and leg slowly.'), ex('Hip hinge practice', '3 × 10', 'Bend from the hips with a straight back, as if lifting.')]]
  ] },
  nerve: { title: 'Nerve relief plan', weeks: [
    ['Take the pressure off', [ex('Nerve glides', '2 × 10', 'Gentle sliding movements; stop if tingling increases.'), ex('Posture breaks', 'Every hour', 'Stand, stretch and change position.'), ex('Avoid pressure', 'All day', 'Do not lean on or squeeze the area.')]],
    ['Free up movement', [ex('Nerve glides', '3 × 10', 'A little further than week 1, still comfortable.'), ex('Mobility stretches', '2 × 30 sec', 'Stretch the muscles the nerve passes through.'), ex('Easy walking', '15 min', 'Keeps the nerves and tissues moving.')]],
    ['Build resilience', [ex('Strengthening', '3 × 10', 'Strengthen the muscles around the area.'), ex('Workstation check', 'Once', 'Adjust your chair, screen and keyboard height.'), ex('Activity', '20 min', 'Return to your usual activity gradually.')]]
  ] },
  general: { title: 'Gentle recovery plan', weeks: [
    ['Rest and protect', [ex('Relative rest', 'As needed', 'Avoid what makes it worse, but keep gently moving.'), ex('Easy walking', '10 min', 'Light movement helps healing.'), ex('Track your pain', 'Daily', 'Log it in your diary to see the trend.')]],
    ['Gentle activity', [ex('Light exercise', '15 min', 'Choose something that does not raise the pain.'), ex('Stretching', '2 × 30 sec', 'Stretch nearby muscles gently.'), ex('Track your pain', 'Daily', 'Note what helps and what does not.')]],
    ['Back to normal', [ex('Usual activity', '20 min', 'Build back up a little each week.'), ex('Strengthening', '3 × 10', 'Simple exercises for the area.'), ex('Check in', 'Weekly', 'See a clinician if it is not improving.')]]
  ] }
};
const planTypeFor = (name, layerId) =>
  /nerve|sciatica|carpal|tunnel|pinched/i.test(name) ? 'nerve'
  : /back|neck|disc|facet|spondylosis|whiplash|sacroiliac|spinal|wry/i.test(name) ? 'spine'
  : /tendin|tendon|ligament|sprain|fasciitis|bursitis|elbow|jumper|Osgood|Sever|IT band|cuff|impingement|quervain/i.test(name) || layerId === 'tendon' ? 'tendon'
  : /arthritis|meniscus|patellofemoral|frozen|joint|labral/i.test(name) || layerId === 'bone' ? 'joint'
  : /strain|muscle|DOMS|soreness|cramp|spasm|knot|splints/i.test(name) || layerId === 'muscle' ? 'muscle'
  : 'general';

// Sample diary so the chart has something to show before the first save.
const SAMPLE_DIARY = [
  { date: 'Oct 4', spot: 'Right knee', layer: 'Tendon & ligament', pain: 7, cause: 'Patellar tendinopathy (jumper’s knee)', sample: true },
  { date: 'Oct 8', spot: 'Right knee', layer: 'Tendon & ligament', pain: 6, cause: 'Patellar tendinopathy (jumper’s knee)', sample: true },
  { date: 'Oct 12', spot: 'Right knee', layer: 'Tendon & ligament', pain: 6, cause: 'Patellar tendinopathy (jumper’s knee)', sample: true },
  { date: 'Oct 17', spot: 'Right knee', layer: 'Tendon & ligament', pain: 4, cause: 'Patellar tendinopathy (jumper’s knee)', sample: true },
  { date: 'Oct 22', spot: 'Right knee', layer: 'Tendon & ligament', pain: 3, cause: 'Patellar tendinopathy (jumper’s knee)', sample: true },
  { date: 'Oct 20', spot: 'Lower back', layer: 'Muscle', pain: 5, cause: 'Lower back strain', sample: true },
  { date: 'Oct 25', spot: 'Lower back', layer: 'Muscle', pain: 3, cause: 'Lower back strain', sample: true }
];
const FREE_ENTRIES = 3;
const PREMIUM_PERKS = [
  ['Unlimited pain diary', 'Save every check-in and see your progress over time'],
  ['Full recovery plans', 'All three weeks of guided exercises for your cause'],
  ['Doctor-ready report', 'A one-page summary to bring to your appointment'],
  ['Multiple pain spots', 'Track several areas and spot linked pain patterns'],
  ['Reminders', 'A gentle daily nudge to check in']
];
const PRICE_PLANS = [
  ['yearly', 'Yearly', '$69.99 CAD / year', '7-day free trial · best value'],
  ['monthly', 'Monthly', '$11.99 CAD / month', 'Cancel any time'],
  ['lifetime', 'Lifetime', '$179.99 CAD once', 'Pay once, keep forever']
];

// ---------- Linked pain patterns across several spots.
// spots: [{ key, side }], nerve: burning/tingling/numbness reported.
function findPatterns(spots, nerve, weak) {
  const has = (...keys) => spots.some((s) => keys.indexOf(s.key) >= 0);
  const out = [];
  const p = (title, text, tag, urgent) => out.push({ title, text, tag, urgent: !!urgent });
  if (has('chest') && has('upperarm', 'shoulder', 'neck', 'upperback', 'head'))
    p('Chest pain that spreads', 'Chest pain spreading to the arm, neck, jaw or back can be a heart problem. Call 911 if it is new, severe or comes with breathlessness or sweating.', 'doctor', true);
  if (has('lowerback', 'glute') && has('hamstring', 'calf', 'thigh'))
    p('Possible sciatica', 'Pain in the lower back or buttock together with pain down the leg often comes from an irritated sciatic nerve.', nerve || weak ? 'doctor' : 'possible');
  if (has('neck') && has('shoulder', 'upperarm', 'forearm', 'wrist'))
    p(nerve ? 'Possible pinched nerve in the neck' : 'Neck and arm pain together', nerve ? 'Neck pain with tingling or numbness down the arm often comes from an irritated nerve root in the neck.' : 'Tight neck and shoulder muscles can send pain down into the arm.', nerve ? 'doctor' : 'possible');
  if (has('neck') && has('head'))
    p('Neck-related headache', 'Headaches can start in tight neck muscles or stiff neck joints (tension or cervicogenic headache).', 'possible');
  if (has('wrist') && has('forearm', 'upperarm', 'neck') && nerve)
    p('Possible nerve compression in the arm', 'Tingling in the hand with pain higher up the arm can come from carpal tunnel syndrome or a nerve squeezed at the elbow or neck.', 'possible');
  if (has('hip') && has('knee'))
    p('Hip pain felt in the knee', 'Hip joint problems often send pain down to the knee, especially in children and older adults.', 'possible');
  if (has('lowerback') && has('abdomen'))
    p('Back and belly pain together', 'This combination can come from the kidneys or other organs, especially with fever or trouble peeing.', 'doctor');
  if (has('shoulder') && has('upperback'))
    p('Shoulder and upper-back tension', 'Shoulder blade muscles often refer pain between the shoulder and the spine, commonly from posture or desk work.', 'possible');
  if (has('heel') && has('calf'))
    p('Calf and heel pain together', 'Tight calves are linked to Achilles tendon and plantar fascia (heel) pain.', 'possible');
  const keys = spots.map((s) => s.key);
  const both = keys.filter((k, i) => keys.indexOf(k) !== i && spots.some((s) => s.key === k && s.side === 'R') && spots.some((s) => s.key === k && s.side === 'L'));
  if (both.length) p('Pain on both sides', 'Matching pain on both sides of the body, like both knees or both hands, can point to arthritis or an inflammatory condition.', 'doctor');
  const upper = ['head', 'neck', 'shoulder', 'chest', 'upperback', 'upperarm', 'forearm', 'wrist', 'elbow'];
  const distinct = keys.filter((k, i) => keys.indexOf(k) === i);
  if (distinct.length >= 3 && distinct.some((k) => upper.indexOf(k) >= 0) && distinct.some((k) => upper.indexOf(k) < 0))
    p('Widespread pain', 'Pain in several areas at once is worth discussing with a doctor. It can come from conditions like fibromyalgia, inflammatory arthritis or a viral illness.', 'doctor');
  return out;
}

// ---------- Diary triggers, treatments and insights.
// Sample treatments with any edits applied and deleted ones left out; _si is the sample's index.
const sampleTx = (s) => s.hideSamples ? [] : SAMPLE_TREATMENTS.map((t, i) => Object.assign({}, t, (s.txEdits || {})[i] || {}, { _si: i })).filter((t) => (s.txHidden || []).indexOf(t._si) < 0);
// Sample entries with any edits applied and deleted ones left out; _si is the sample's index.
const sampleDiary = (s) => s.hideSamples ? [] : SAMPLE_DIARY.map((e, i) => Object.assign({}, e, (s.diaryEdits || {})[i] || {}, { _si: i })).filter((e) => (s.diaryHidden || []).indexOf(e._si) < 0);
const TRIGGERS = [['poorsleep', 'Poor sleep'], ['active', 'Very active day'], ['rest', 'Rest day'], ['stress', 'Stressful day'], ['weather', 'Cold or rainy weather'], ['sitting', 'Long hours sitting'], ['meds', 'Took pain medication'], ['period', 'On my period']];
[['poorsleep', 'active'], ['poorsleep'], ['active'], ['rest'], ['rest'], ['sitting', 'stress'], ['rest']].forEach((tags, i) => { SAMPLE_DIARY[i].tags = tags; SAMPLE_DIARY[i].note = ''; });
SAMPLE_DIARY[0].note = 'Sore after basketball.';
SAMPLE_DIARY.push(
  { date: 'Oct 4', spot: 'Left knee', layer: 'Tendon & ligament', pain: 2, cause: 'Patellofemoral pain', sample: true, tags: [], note: '' },
  { date: 'Oct 12', spot: 'Left knee', layer: 'Tendon & ligament', pain: 2, cause: 'Patellofemoral pain', sample: true, tags: [], note: '' },
  { date: 'Oct 22', spot: 'Left knee', layer: 'Tendon & ligament', pain: 1, cause: 'Patellofemoral pain', sample: true, tags: [], note: '' }
);
const TREATMENTS = ['Ice', 'Heat', 'Ibuprofen (Advil)', 'Acetaminophen (Tylenol)', 'Physio visit', 'Massage', 'Stretching', 'Brace or support', 'Other'];
const HELPED = [['yes', 'Helped'], ['little', 'Helped a little'], ['no', 'Did not help']];
const SAMPLE_TREATMENTS = [
  { date: 'Oct 5', spot: 'Right knee', what: 'Ice', helped: 'yes', sample: true },
  { date: 'Oct 8', spot: 'Right knee', what: 'Ibuprofen (Advil)', helped: 'little', sample: true },
  { date: 'Oct 12', spot: 'Right knee', what: 'Physio visit', helped: 'yes', sample: true },
  { date: 'Oct 17', spot: 'Right knee', what: 'Ice', helped: 'yes', sample: true },
  { date: 'Oct 21', spot: 'Lower back', what: 'Heat', helped: 'yes', sample: true }
];
// Average pain with and without each trigger, for the selected spot.
function triggerInsights(entries) {
  const out = [];
  TRIGGERS.forEach((t) => {
    const withT = entries.filter((e) => (e.tags || []).indexOf(t[0]) >= 0), without = entries.filter((e) => (e.tags || []).indexOf(t[0]) < 0);
    if (withT.length < 2 || !without.length) return;
    const avg = (list) => list.reduce((a, e) => a + e.pain, 0) / list.length;
    const diff = avg(withT) - avg(without);
    if (Math.abs(diff) >= 1) out.push({ text: 'Pain is ' + Math.abs(diff).toFixed(1) + ' points ' + (diff > 0 ? 'higher' : 'lower') + ' on days with “' + t[1].toLowerCase() + '”.', up: diff > 0 });
  });
  return out;
}

// ---------- Exercise demos: a jointed stick figure that performs each recovery-plan exercise.
// Poses are joint angles; the figure is built from them, rested on the floor, and animated with SVG <animate>.
// Angles: limbs 0 = pointing down, 90 = forward (right), 180 = up, -90 = back. Torso 0 = upright, 90 = leaning fully forward.
const FIG = { torso: 28, neck: 10, head: 6, upper: 13, fore: 12, thigh: 17, shin: 17, foot: 6, floor: 95 };
const DEG = Math.PI / 180;
const limb = (p, a, len) => [p[0] + Math.sin(a * DEG) * len, p[1] + Math.cos(a * DEG) * len];
const r1 = (n) => Math.round(n * 10) / 10;

// Two-bone reach: angles for a thigh and shin (or arm) so the end lands on a target, with the joint bending forward.
function reach(from, to, l1, l2, bendForward) {
  const dx = to[0] - from[0], dy = to[1] - from[1];
  const d = Math.min(Math.hypot(dx, dy), l1 + l2 - 0.01);
  const base = Math.atan2(dx, dy) / DEG; // angle of the line from 'from' to 'to'
  const k = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d)))) / DEG;
  const a1 = base + (bendForward ? k : -k);
  const knee = limb(from, a1, l1);
  return [a1, Math.atan2(to[0] - knee[0], to[1] - knee[1]) / DEG];
}

function pose(p) {
  const t = p.t || 0, hip = p.hip || [60, 61];
  const sh = [hip[0] + Math.sin(t * DEG) * FIG.torso, hip[1] - Math.cos(t * DEG) * FIG.torso];
  const h = p.h == null ? t : p.h;
  const head = [sh[0] + Math.sin(h * DEG) * FIG.neck, sh[1] - Math.cos(h * DEG) * FIG.neck];
  const L = p.L || [0, 0, 90], l = p.l || L, A = p.A || [0, 0], a = p.a || A;
  const leg = (g) => { const k = limb(hip, g[0], FIG.thigh), an = limb(k, g[1], FIG.shin); return [k, an, limb(an, g[2] == null ? 90 : g[2], FIG.foot)]; };
  const arm = (g) => { const e = limb(sh, g[0], FIG.upper); return [e, limb(e, g[1], FIG.fore)]; };
  return { hip, sh, head, t, c: p.c || 0, near: { leg: leg(L), arm: arm(A) }, far: { leg: leg(l), arm: arm(a) }, up: p.up || 0 };
}

// Blend two poses by joint angle, so limbs keep their length mid-move.
function mixPose(p, q, f) {
  const m = (x, y) => x + (y - x) * f;
  // Turn the short way round, so an arm going from overhead to the floor never swings through the body.
  const ma = (x, y) => { let d = ((y - x) % 360 + 540) % 360 - 180; return x + d * f; };
  const ml = (x, y, n) => Array.from({ length: n }, (_, i) => ma(x[i] == null ? (i === 2 ? 90 : 0) : x[i], y[i] == null ? (i === 2 ? 90 : 0) : y[i]));
  const def = (o) => ({ t: o.t || 0, h: o.h == null ? (o.t || 0) : o.h, c: o.c || 0, up: o.up || 0, hip: o.hip || [60, 61], L: o.L || [0, 0, 90], A: o.A || [0, 0] });
  const P = def(p), Q = def(q);
  const Pl = p.l || P.L, Ql = q.l || Q.L, Pa = p.a || P.A, Qa = q.a || Q.A;
  return { t: ma(P.t, Q.t), h: ma(P.h, Q.h), c: m(P.c, Q.c), up: m(P.up, Q.up), fl: m(p.fl || 95, q.fl || 95), hip: [m(P.hip[0], Q.hip[0]), m(P.hip[1], Q.hip[1])],
    L: ml(P.L, Q.L, 3), l: ml(Pl, Ql, 3), A: ml(P.A, Q.A, 2), a: ml(Pa, Qa, 2) };
}

// Rest the figure on the floor (or leave it where it is for poses held up by a chair, bike or roller).
function place(f, fixed) {
  if (fixed) return f;
  const pts = [f.hip, f.sh, [f.head[0], f.head[1] + FIG.head], ...['near', 'far'].flatMap((s) => [...f[s].leg, ...f[s].arm])];
  const low = Math.max(...pts.map((p) => p[1]));
  const dy = FIG.floor - 1.5 - low - f.up;
  const mv = (p) => [p[0], p[1] + dy];
  const side = (s) => ({ leg: f[s].leg.map(mv), arm: f[s].arm.map(mv) });
  return Object.assign({}, f, { hip: mv(f.hip), sh: mv(f.sh), head: mv(f.head), near: side('near'), far: side('far') });
}

const P = (p) => r1(p[0]) + ' ' + r1(p[1]);
function shapes(f) {
  // Torso as a curve so the back can round and arch.
  const mx = (f.hip[0] + f.sh[0]) / 2, my = (f.hip[1] + f.sh[1]) / 2;
  const nx = -Math.cos(f.t * DEG), ny = -Math.sin(f.t * DEG);
  const ctrl = [mx + nx * f.c, my + ny * f.c];
  const r = FIG.head;
  return {
    farArm: 'M' + P(f.sh) + 'L' + P(f.far.arm[0]) + 'L' + P(f.far.arm[1]),
    farLeg: 'M' + P(f.hip) + 'L' + P(f.far.leg[0]) + 'L' + P(f.far.leg[1]) + 'L' + P(f.far.leg[2]),
    torso: 'M' + P(f.hip) + 'Q' + P(ctrl) + ' ' + P(f.sh) + 'L' + P(f.head),
    head: 'M' + r1(f.head[0] - r) + ' ' + r1(f.head[1]) + 'a' + r + ' ' + r + ' 0 1 0 ' + 2 * r + ' 0a' + r + ' ' + r + ' 0 1 0 ' + -2 * r + ' 0',
    nearLeg: 'M' + P(f.hip) + 'L' + P(f.near.leg[0]) + 'L' + P(f.near.leg[1]) + 'L' + P(f.near.leg[2]),
    nearArm: 'M' + P(f.sh) + 'L' + P(f.near.arm[0]) + 'L' + P(f.near.arm[1])
  };
}

// Props drawn behind the figure.
const PROP = {
  wall: { d: 'M12 18L12 95', stroke: '#C9B9A0', w: 4 },
  wallR: { d: 'M108 18L108 95', stroke: '#C9B9A0', w: 4 },
  chair: { d: 'M30 79L52 79M32 79L32 95M50 79L50 95M31 79L28 52', stroke: '#B8A68A', w: 3.5 },
  step: { d: 'M58 83L104 83L104 95L58 95Z', stroke: '#B8A68A', w: 2.5, fill: '#E3D7C3' },
  stepL: { d: 'M30 85L60 85L60 95L30 95Z', stroke: '#B8A68A', w: 2.5, fill: '#E3D7C3' },
  mat: { d: 'M8 96L112 96', stroke: '#9FC9C6', w: 3 },
  bike: { d: 'M44 60L50 60M47 60L58 82L76 82M76 82L80 48L74 46M58 82L54 95M76 82L84 95M48 95L90 95', stroke: '#B8A68A', w: 3 },
  post: { d: 'M108 30L108 95M104 58L110 58', stroke: '#B8A68A', w: 4 },
  table: { d: 'M80 70L114 70M84 70L84 95M110 70L110 95', stroke: '#B8A68A', w: 3.5 },
  water: { d: 'M2 50q7 -3 14 0t14 0t14 0t14 0t14 0t14 0t14 0t14 0t14 0', stroke: '#7FB6D9', w: 2 },
  roller: { d: 'M68 89a6 6 0 1 0 12 0a6 6 0 1 0 -12 0', stroke: '#8FB8B5', w: 2, fill: '#CFE6E4' }
};

// Each exercise: frames (poses) and how long to move to each one and hold there, in seconds.
// Optional: props, fixed (do not rest on floor), extra (band, weight, box or glow following the figure).
const STAND = { t: 0, L: [0, 0, 90], A: [0, 0] };
const SQUAT = { t: 32, L: [72, -18, 90], A: [70, 80] };
const HANDS_KNEES = { t: 78, h: 88, L: [0, -90, -90], A: [-2, -2] };
const BACK_KNEES = { t: -90, h: -95, L: [138, 32, 90], A: [92, 92] };
const SEAT = { hip: [44, 77], t: 0, L: [90, 0, 90], A: [30, 60] };
const walkCycle = (stride, armS, lift) => [
  { L: [stride, 0], l: [-stride, -stride - 4, 70], A: [-armS, -armS + 15], a: [armS, armS + 25] },
  { L: [0, -lift, 90], l: [8, -8], A: [0, 15], a: [0, 15] },
  { L: [-stride, -stride - 4, 70], l: [stride, 0], A: [armS, armS + 25], a: [-armS, -armS + 15] },
  { L: [8, -8], l: [0, -lift, 90], A: [0, 15], a: [0, 15] }
];
const run = walkCycle(32, 40, 60).map((p) => Object.assign({ t: 10 }, p, { A: [p.A[0], p.A[0] + 80], a: [p.a[0], p.a[0] + 80] }));
const walk = walkCycle(22, 22, 30);
const circle = (r, n) => Array.from({ length: n }, (_, i) => i * 360 / n);

const MOVES = {
  wallSit: { props: ['wall'], frames: [{ hip: [20, 61], t: -4, L: [0, 0, 90], A: [0, 10] }, { hip: [20, 61], t: -2, L: [86, -4, 90], A: [60, 70] }],
    timing: [[1.6, 2.5], [1.6, 0.6]], glow: { on: 1, at: 'nearThigh' } },
  kneeExtSeated: { props: ['chair'], frames: [Object.assign({}, SEAT, { L: [90, 0, 90] }), Object.assign({}, SEAT, { L: [90, 80, 160], l: [90, 0, 90] })], timing: [[1.6, 0.6], [1.6, 0.6]] },
  curl: { frames: [{ A: [8, 8] }, { A: [8, 150] }], timing: [[3, 0.3], [3, 0.3]], weight: true },
  heelDrop: { props: ['step'], frames: [{ hip: [72, 49], L: [0, 0, 90] }, { hip: [72, 49], L: [0, 0, 50] }, { hip: [72, 49], L: [0, 0, 90], l: [10, -40, 90] }], timing: [[1, 0.4], [3, 0.4], [0.8, 0.2]], floor: 83 },
  singleLeg: { frames: [STAND, { l: [70, -20], A: [60, 60], a: [-40, -30] }, { l: [70, -20], A: [50, 60], a: [-30, -20], t: 3 }, { l: [70, -20], A: [60, 60], a: [-40, -30], t: -2 }], timing: [[1, 0.2], [0.8, 0], [0.8, 0], [1, 0.3]] },
  gobletSquat: { frames: [{ A: [55, 160] }, Object.assign({}, SQUAT, { A: [60, 160] })], timing: [[2, 0.3], [2, 0.3]], weight: true },
  hops: { frames: [{ L: [20, -20], A: [10, 40] }, { L: [0, 0, 60], A: [-10, 20], up: 10 }], timing: [[0.3, 0], [0.3, 0.05]] },
  jog: { frames: run, timing: run.map(() => [0.25, 0]), loopBack: true },
  walk: { frames: walk, timing: walk.map(() => [0.45, 0]), loopBack: true },
  briskWalk: { frames: walkCycle(28, 32, 40), timing: [0, 1, 2, 3].map(() => [0.35, 0]), loopBack: true },
  quadStretch: { props: ['wallR'], frames: [{ hip: [86, 61], a: [80, 84], A: [-10, 0] }, { hip: [86, 61], t: 3, a: [80, 84], L: [-4, -160, -110], l: [0, 0, 90], grabAnkle: true }], timing: [[1.5, 2.5], [1.5, 0.6]] },
  bandRow: { props: ['post'], frames: [{ t: 2, L: [10, -6], A: [80, 85] }, { t: 0, L: [10, -6], A: [-40, 80] }], timing: [[1.5, 0.4], [1.5, 0.4]], band: [108, 58] },
  foamRoll: { props: ['roller'], fixed: true, frames: [{ hip: [50, 83], t: -62, h: -45, L: [86, 86, 170], A: [-28, -28] }, { hip: [38, 83], t: -62, h: -45, L: [86, 86, 170], A: [-28, -28] }], timing: [[2, 0.2], [2, 0.2]] },
  legSwing: { props: ['wall'], frames: [{ t: 0, L: [-35, -40, 70], l: [0, 0, 90], A: [-60, -80], hip: [30, 61] }, { t: -4, L: [60, 50, 120], l: [0, 0, 90], A: [-60, -80], hip: [30, 61] }], timing: [[1.1, 0], [1.1, 0]] },
  lunge: { frames: [STAND, { t: 4, L: [80, 0, 90], l: [-30, -100, -20], A: [0, 10] }], timing: [[1.6, 0.4], [1.6, 0.4]] },
  liftBox: { frames: [{ t: 60, L: [70, -15, 90], A: [30, 30] }, { t: 0, A: [30, 90] }], timing: [[2, 0.4], [2, 0.4]], box: true },
  armCircles: { frames: circle(0, 8).map((d) => ({ A: [d, d], a: [d + 180, d + 180] })), timing: circle(0, 8).map(() => [0.35, 0]), loopBack: true, linear: true },
  bike: { props: ['bike'], fixed: true, frames: circle(0, 8).map((d) => ({ hip: [47, 58], t: 22, A: [60, 70], pedal: d })), timing: circle(0, 8).map(() => [0.18, 0]), loopBack: true, linear: true },
  quadSet: { props: ['mat'], frames: [{ t: -8, L: [90, 90, 160], A: [-20, -20], h: -4 }, { t: -8, L: [92, 92, 175], A: [-20, -20], h: -4 }], timing: [[0.6, 2.4], [0.6, 1]], glow: { on: 1, at: 'nearThigh' } },
  sitToStand: { props: ['chair'], frames: [{ hip: [44, 77], t: 8, L: [90, 0, 90], A: [60, 70] }, { hip: [44, 77], t: 40, L: [90, 5, 90], A: [70, 80] }, { hip: [52, 61], t: 2, L: [0, 0, 90], A: [10, 20] }], timing: [[1.2, 0], [1.2, 0.5], [2, 0.3]] },
  wallBalance: { props: ['wall'], frames: [{ hip: [32, 61], A: [-70, -90], l: [70, -20] }, { hip: [32, 61], A: [-70, -90], l: [70, -20], t: 3 }, { hip: [32, 61], A: [-70, -90], l: [70, -20], t: -2 }], timing: [[0.9, 0], [0.9, 0], [0.9, 0]] },
  stepUp: { props: ['stepL'], frames: [{ hip: [30, 61], L: [0, 0, 90] }, { hip: [30, 61], L: [70, -10, 90], l: [0, 0, 90], foot: [42, 84] }, { hip: [42, 49], l: [-8, -40, 50], L: [0, 0, 90], A: [10, 20], fl: 85 }], timing: [[1, 0.2], [1.6, 0.5], [1.4, 0.2]] },
  reachUp: { frames: [STAND, { A: [175, 178], a: [172, 175], h: -10 }, { t: 30, A: [60, 40], a: [60, 40] }], timing: [[2, 1], [2, 1], [1.5, 0.3]] },
  kneeHug: { props: ['mat'], frames: [Object.assign({}, BACK_KNEES), { t: -90, h: -110, L: [175, 40, 90], A: [150, 150] }], timing: [[1.5, 1.5], [1.5, 0.5]] },
  pelvicTilt: { props: ['mat'], frames: [Object.assign({}, BACK_KNEES, { c: -4 }), Object.assign({}, BACK_KNEES, { c: 3, L: [142, 32, 90] })], timing: [[1.2, 0.6], [1.2, 0.6]], glow: { on: 1, at: 'lowBack' } },
  birdDog: { props: ['mat'], frames: [HANDS_KNEES, Object.assign({}, HANDS_KNEES, { a: [96, 96], L: [-92, -92, -150] }), HANDS_KNEES, Object.assign({}, HANDS_KNEES, { A: [96, 96], l: [-92, -92, -150] })], timing: [[1.5, 1], [1.2, 0.2], [1.5, 1], [1.2, 0.2]] },
  bridge: { props: ['mat'], frames: [BACK_KNEES, { t: -112, h: -100, L: [118, 22, 90], A: [92, 92] }], timing: [[1.4, 1], [1.4, 0.4]] },
  catCow: { props: ['mat'], frames: [Object.assign({}, HANDS_KNEES, { c: 8, h: 120 }), Object.assign({}, HANDS_KNEES, { c: -7, h: 60 })], timing: [[2, 0.6], [2, 0.6]] },
  sidePlank: { props: ['mat'], frames: [{ hip: [50, 80], t: 62, h: 70, L: [-86, -90, -180], A: [0, 90], a: [150, 160] }, { hip: [50, 80], t: 72, h: 76, L: [-72, -72, -160], A: [0, 90], a: [180, 180] }], timing: [[1, 0.6], [1, 2]] },
  deadBug: { props: ['mat'], frames: [{ t: -90, h: -95, L: [180, 90, 90], A: [180, 180] }, { t: -90, h: -95, L: [180, 90, 90], l: [100, 95, 120], A: [-110, -110], a: [180, 180] }, { t: -90, h: -95, L: [180, 90, 90], A: [180, 180] }, { t: -90, h: -95, L: [100, 95, 120], l: [180, 90, 90], A: [180, 180], a: [-110, -110] }], timing: [[1.6, 0.3], [1.6, 0.3], [1.6, 0.3], [1.6, 0.3]] },
  hipHinge: { frames: [{ A: [0, 5] }, { t: 68, L: [10, -8, 90], A: [22, 22] }], timing: [[1.8, 0.4], [1.8, 0.4]] },
  nerveGlide: { props: ['chair'], frames: [Object.assign({}, SEAT, { t: 8, h: 40, L: [90, 0, 90] }), Object.assign({}, SEAT, { t: 8, h: -20, L: [90, 80, 150], l: [90, 0, 90] })], timing: [[1.4, 0.3], [1.4, 0.3]] },
  standStretch: { props: ['chair'], frames: [{ hip: [44, 77], t: 8, L: [90, 0, 90], A: [60, 70] }, { hip: [52, 61], A: [176, 178], a: [172, 176] }], timing: [[2, 0.4], [2, 1.5]] },
  hamStretch: { frames: [{ L: [40, 40, 140], l: [-14, -14, 90], A: [10, 10] }, { t: 55, L: [40, 40, 150], l: [-14, -14, 90], A: [60, 60] }], timing: [[1.5, 2.5], [1.5, 0.5]] },
  bodySquat: { frames: [{ A: [10, 10] }, Object.assign({}, SQUAT, { A: [85, 90] })], timing: [[1.6, 0.3], [1.6, 0.3]] },
  march: { frames: [{ L: [80, -10], l: [0, 0, 90], A: [-30, 0], a: [30, 60] }, STAND, { L: [0, 0, 90], l: [80, -10], A: [30, 60], a: [-30, 0] }, STAND], timing: [[0.5, 0.1], [0.5, 0], [0.5, 0.1], [0.5, 0]] },
  calfStretch: { props: ['wallR'], frames: [{ hip: [78, 61], t: 10, L: [12, 0, 90], l: [-14, -14, 90], A: [88, 92] }, { hip: [74, 61], t: 26, L: [40, -8, 90], l: [-30, -30, 90], A: [80, 85] }], timing: [[1.5, 2.5], [1.5, 0.5]] }
};

// More movements for the exercise library (any plan exercise can be swapped for one of these).
// Knee push-up: the body pivots on the knees while the hands stay on the floor.
const kneePush = (deg) => { const K = [30, 93], c = Math.cos(deg * DEG), s = Math.sin(deg * DEG); return { hip: [K[0] + 17 * c, K[1] - 17 * s], t: 90 - deg, h: 96 - deg, L: [deg - 90, -110, -150], hand: [72, 93.5] }; };
const swimArm = (i) => 90 - i * 45;
Object.assign(MOVES, {
  calfRaise: { frames: [{ A: [5, 5] }, { L: [0, 0, 48], A: [5, 5] }], timing: [[1.2, 0.6], [1.8, 0.3]] },
  singleCalfRaise: { props: ['wallR'], frames: [{ hip: [86, 61], a: [80, 84], A: [70, 82], l: [8, -70, 40], L: [0, 0, 90] }, { hip: [86, 61], a: [80, 84], A: [70, 82], l: [8, -70, 40], L: [0, 0, 48] }], timing: [[1.2, 0.6], [2, 0.3]] },
  toeRaise: { props: ['wall'], frames: [{ hip: [24, 61], t: -3, A: [0, 5] }, { hip: [24, 61], t: -3, A: [0, 5], L: [0, 0, 128] }], timing: [[1, 0.5], [1.2, 0.3]] },
  splitSquat: { frames: [{ L: [24, -4, 90], l: [-22, -22, 60], A: [0, 8] }, { t: 3, L: [76, -6, 90], l: [-14, -96, -20], A: [0, 8] }], timing: [[1.6, 0.4], [1.6, 0.4]] },
  stepDown: { props: ['stepL'], fixed: true, frames: [{ hip: [50, 49.5], L: [0, 0, 90], l: [4, -4, 90], A: [10, 20] }, { hip: [54, 63], foot: [50, 83.5], ffoot: [68, 93.5], A: [40, 60], a: [-20, 0] }], timing: [[2.4, 0.2], [1.2, 0.3]] },
  singleBridge: { props: ['mat'], frames: [Object.assign({}, BACK_KNEES, { L: [138, 138, 228] }), { t: -112, h: -100, l: [118, 22, 90], L: [112, 112, 202], A: [92, 92] }], timing: [[1.4, 1], [1.4, 0.4]] },
  sideLegRaise: { props: ['mat'], frames: [{ t: -90, h: -90, L: [90, 90, 180], l: [90, 90, 180], A: [92, 92], a: [-150, -40] }, { t: -90, h: -90, L: [124, 124, 214], l: [90, 90, 180], A: [92, 92], a: [-150, -40] }], timing: [[1.4, 0.6], [1.6, 0.3]] },
  straightLegRaise: { props: ['mat'], frames: [{ t: -90, h: -95, L: [90, 90, 180], l: [138, 32, 90], A: [92, 92] }, { t: -90, h: -95, L: [134, 134, 224], l: [138, 32, 90], A: [92, 92] }], timing: [[1.6, 0.6], [1.8, 0.3]] },
  hamCurl: { props: ['wallR'], frames: [{ hip: [86, 61], a: [80, 84], A: [70, 82] }, { hip: [86, 61], a: [80, 84], A: [70, 82], L: [-4, -112, -30], l: [0, 0, 90] }], timing: [[1.4, 0.6], [1.8, 0.3]] },
  rdl: { frames: [{ A: [0, 0] }, { t: 74, L: [12, -6, 90], A: [16, 16] }], timing: [[2, 0.4], [2, 0.4]], weight: true },
  shoulderPress: { frames: [{ A: [22, 172], a: [22, 172] }, { A: [176, 178], a: [176, 178] }], timing: [[1.4, 0.3], [1.8, 0.4]], weight: true },
  frontRaise: { frames: [{ A: [6, 6], a: [6, 6] }, { A: [92, 92], a: [92, 92] }], timing: [[1.6, 0.4], [2, 0.4]], weight: true },
  wallPushUp: { props: ['wallR'], fixed: true, frames: [{ hip: [72, 61], t: 22, L: [-22, -22, 68], hand: [106, 38] }, { hip: [72, 61], t: 34, L: [-34, -34, 56], hand: [106, 38] }], timing: [[1.6, 0.3], [1.4, 0.3]] },
  kneePushUp: { props: ['mat'], fixed: true, frames: [kneePush(32), kneePush(12)], timing: [[1.6, 0.3], [1.4, 0.3]] },
  tricepDips: { props: ['chair'], fixed: true, frames: [{ hip: [56, 74], t: -6, h: 4, L: [74, 16, 90], hand: [48, 78] }, { hip: [57, 85], t: -10, h: 0, L: [102, 46, 110], hand: [48, 78] }], timing: [[1.8, 0.3], [1.4, 0.4]] },
  scapSqueeze: { frames: [{ A: [12, 96] }, { A: [-34, 70] }], timing: [[1, 1.6], [1, 0.6]], glow: { on: 1, at: 'upperBack' } },
  wallSlide: { props: ['wallR'], fixed: true, frames: [{ hip: [93, 61], A: [104, 178], a: [104, 178] }, { hip: [93, 61], A: [166, 178], a: [166, 178] }], timing: [[2, 0.4], [2, 0.4]] },
  pendulum: { props: ['table'], frames: [{ hip: [52, 61], t: 68, h: 80, L: [16, -4, 90], l: [-12, -12, 90], fhand: [84, 69], A: [-14, -14] }, { hip: [52, 61], t: 68, h: 80, L: [16, -4, 90], l: [-12, -12, 90], fhand: [84, 69], A: [16, 16] }], timing: [[1.2, 0], [1.2, 0]] },
  plank: { props: ['mat'], frames: [{ t: 72, h: 78, L: [-72, -112, -150], A: [0, 90], a: [0, 90] }, { t: 78, h: 84, L: [-78, -78, -150], A: [0, 90], a: [0, 90] }], timing: [[1, 3], [1, 0.8]] },
  curlUp: { props: ['mat'], frames: [BACK_KNEES, Object.assign({}, BACK_KNEES, { t: -116, h: -128, A: [118, 118] })], timing: [[1.2, 0.8], [1.4, 0.4]] },
  cobra: { props: ['mat'], frames: [{ t: 90, h: 94, L: [-90, -90, -180], A: [-92, 90] }, { t: 50, h: 40, L: [-90, -90, -180], A: [-16, 36] }], timing: [[1.6, 1.4], [1.6, 0.6]] },
  chinTuck: { props: ['chair'], frames: [Object.assign({}, SEAT, { h: 14 }), Object.assign({}, SEAT, { h: -10 })], timing: [[1, 2], [1, 0.6]] },
  neckFlex: { props: ['chair'], frames: [Object.assign({}, SEAT, { h: 0 }), Object.assign({}, SEAT, { h: 62 })], timing: [[2, 2.5], [2, 0.6]] },
  anklePumps: { props: ['chair'], frames: [Object.assign({}, SEAT, { L: [90, 78, 172], l: [90, 0, 90] }), Object.assign({}, SEAT, { L: [90, 78, 100], l: [90, 0, 90] })], timing: [[0.7, 0.1], [0.7, 0.1]] },
  hipFlexor: { props: ['mat'], frames: [{ L: [86, 0, 90], l: [0, -90, -90], A: [0, 0] }, { L: [70, -18, 90], l: [-34, -92, -92], A: [0, 0], c: -2 }], timing: [[1.8, 2.5], [1.8, 0.4]] },
  childsPose: { props: ['mat'], frames: [HANDS_KNEES, { t: 100, h: 96, L: [69, -90, -90], A: [94, 94] }], timing: [[2, 2.5], [2, 0.5]] },
  seatedFold: { props: ['mat'], frames: [{ t: -6, h: -4, L: [90, 90, 172], A: [-24, -24] }, { t: 60, h: 76, L: [90, 90, 172], A: [94, 92] }], timing: [[2, 2.5], [2, 0.5]] },
  doorway: { props: ['wall'], frames: [{ hip: [28, 61], hand: [14, 36], a: [0, 10], L: [0, 0, 90] }, { hip: [36, 61], t: 6, hand: [14, 36], a: [0, 10], L: [16, -6, 90], l: [-6, -6, 90] }], timing: [[1.6, 2.5], [1.6, 0.4]] },
  tandemWalk: { frames: walkCycle(9, 6, 16).map((p) => Object.assign({}, p, { A: [70, 80], a: [-60, -50] })), timing: [0, 1, 2, 3].map(() => [0.7, 0]) },
  singleLegReach: { frames: [{ l: [4, -4, 90], L: [0, 0, 90], A: [0, 6] }, { t: 66, l: [10, -6, 90], L: [-62, -62, 20], A: [88, 90], a: [80, 84] }], timing: [[2, 0.8], [2, 0.3]] },
  swim: { props: ['water'], fixed: true, frames: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({ hip: [40, 58], t: 90, h: 100, L: [i % 2 ? -84 : -96, i % 2 ? -84 : -96, -180], l: [i % 2 ? -96 : -84, i % 2 ? -96 : -84, -180], A: [swimArm(i), swimArm(i)], a: [swimArm(i) + 180, swimArm(i) + 180] })), timing: [0, 1, 2, 3, 4, 5, 6, 7].map(() => [0.3, 0]), linear: true }
});

// Which demo each exercise in the recovery plans shows.
const DEMO_FOR = {
  'Isometric hold': 'wallSit', 'Gentle range of motion': 'kneeExtSeated', 'Slow resistance': 'curl', 'Eccentric lowering': 'heelDrop',
  'Balance hold': 'singleLeg', 'Heavier loading': 'gobletSquat', 'Small hops or quick moves': 'hops', 'Activity intervals': 'jog',
  'Gentle stretch': 'quadStretch', 'Easy movement': 'walk', 'Band strengthening': 'bandRow', 'Foam rolling': 'foamRoll',
  'Active stretching': 'legSwing', 'Full strengthening': 'lunge', 'Sport or work moves': 'liftBox', 'Build up activity': 'jog',
  'Range-of-motion circles': 'armCircles', 'Low-impact cardio': 'bike', 'Gentle muscle squeeze': 'quadSet', 'Strengthen nearby muscles': 'sitToStand',
  'Balance': 'wallBalance', 'Step-ups or wall push-ups': 'stepUp', 'Longer cardio': 'briskWalk', 'Morning routine': 'reachUp',
  'Short walks': 'walk', 'Knee hugs or chin tucks': 'kneeHug', 'Pelvic tilts': 'pelvicTilt', 'Bird-dog': 'birdDog', 'Glute bridge': 'bridge',
  'Cat-cow': 'catCow', 'Side plank': 'sidePlank', 'Dead bug': 'deadBug', 'Hip hinge practice': 'hipHinge', 'Nerve glides': 'nerveGlide',
  'Posture breaks': 'standStretch', 'Mobility stretches': 'hamStretch', 'Easy walking': 'walk', 'Strengthening': 'bodySquat',
  'Activity': 'briskWalk', 'Light exercise': 'march', 'Stretching': 'calfStretch', 'Usual activity': 'walk'
};

// Fill in limb angles for poses that name where a hand or foot must go (pedals, a step, a wall, the floor).
function solve(p) {
  let q = Object.assign({}, p);
  if (q.pedal != null) {
    const c = [66, 82], a = q.pedal;
    const near = [c[0] + Math.sin(a * DEG) * 7, c[1] - Math.cos(a * DEG) * 7], far = [c[0] - Math.sin(a * DEG) * 7, c[1] + Math.cos(a * DEG) * 7];
    const L = reach(q.hip, near, FIG.thigh, FIG.shin + 2, true), l = reach(q.hip, far, FIG.thigh, FIG.shin + 2, true);
    q.L = [L[0], L[1], 100]; q.l = [l[0], l[1], 100];
  }
  if (q.foot) { const L = reach(q.hip, q.foot, FIG.thigh, FIG.shin, true); q.L = [L[0], L[1], q.footA == null ? 90 : q.footA]; }
  if (q.ffoot) { const l = reach(q.hip, q.ffoot, FIG.thigh, FIG.shin, true); q.l = [l[0], l[1], q.ffootA == null ? 90 : q.ffootA]; }
  if (q.hand || q.fhand || q.grabAnkle) {
    const f = pose(q);
    // Elbows bend backward (toward the back) unless the pose asks for them to bend forward.
    if (q.hand) { const A = reach(f.sh, q.hand, FIG.upper, FIG.fore, !!q.elbowFwd); q.A = [A[0], A[1]]; }
    if (q.fhand) { const a = reach(f.sh, q.fhand, FIG.upper, FIG.fore, !!q.elbowFwd); q.a = [a[0], a[1]]; }
    if (q.grabAnkle) { const A = reach(f.sh, f.near.leg[1], FIG.upper, FIG.fore, false); q.A = [A[0], A[1]]; }
  }
  return q;
}

const ease = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

// Step through the moves: each exercise moves to the next pose, holds, and loops back to the first.
function demoSteps(mv) {
  const frames = mv.frames.map(solve), n = frames.length, steps = [];
  let time = 0;
  for (let i = 0; i < n; i++) {
    const to = (i + 1) % n, [moveT, holdT] = mv.timing[i];
    const sub = Math.max(2, Math.round(moveT * 8));
    for (let k = 0; k < sub; k++) {
      const f = mv.linear ? k / sub : ease(k / sub);
      steps.push({ p: mixPose(frames[i], frames[to], f), t: time + moveT * k / sub, from: i, to, f });
    }
    time += moveT;
    if (holdT > 0) { steps.push({ p: mixPose(frames[i], frames[to], 1), t: time, from: i, to, f: 1 }); time += holdT; }
  }
  steps.push({ p: mixPose(frames[0], frames[0], 0), t: time, from: 0, to: 0, f: 0 });
  return { steps, dur: time };
}

function demoFigs(mv, steps) {
  return steps.map((s) => {
    const f = pose(s.p);
    if (mv.fixed) return f;
    const save = FIG.floor;
    FIG.floor = mv.floor || s.p.fl;
    const g = place(f, false);
    FIG.floor = save;
    return g;
  });
}

// Build the animation for one exercise: a list of shapes, each with its keyframe path values.
function buildDemo(kind, animate) {
  const mv = MOVES[kind];
  if (!mv) return null;
  const { steps, dur } = demoSteps(mv);
  const figs = demoFigs(mv, steps);
  const kt = steps.map((s) => Math.min(1, Math.round(s.t / dur * 10000) / 10000));
  kt[0] = 0; kt[kt.length - 1] = 1;
  // The still picture (motion turned off) shows the exercise's main position.
  const keyIdx = Math.max(0, steps.findIndex((s) => s.to === 1 && s.f === 1));
  const sh = figs.map(shapes);
  const parts = [];
  const add = (vals, o) => parts.push(Object.assign({ d0: vals[keyIdx], vals: vals.join(';'), anim: animate, opAnim: false, opVals: '', w: 5, op: 1, fill: 'none', stroke: 'currentColor' }, o));
  if (mv.band) add(figs.map((f) => 'M' + mv.band[0] + ' ' + mv.band[1] + 'L' + P(f.near.arm[1])), { w: 2, stroke: '#D9577A' });
  for (const [k, op] of [['farArm', 0.4], ['farLeg', 0.4], ['torso', 1], ['head', 1], ['nearLeg', 1], ['nearArm', 1]]) {
    const isHead = k === 'head';
    add(sh.map((s) => s[k]), { w: isHead ? 0 : 5, op, fill: isHead ? 'currentColor' : 'none', stroke: isHead ? 'none' : 'currentColor' });
  }
  if (mv.weight) add(figs.map((f) => { const h = f.near.arm[1]; return 'M' + r1(h[0] - 5) + ' ' + r1(h[1]) + 'L' + r1(h[0] + 5) + ' ' + r1(h[1]); }), { w: 6, stroke: '#4A3B30' });
  if (mv.box) add(figs.map((f) => { const h = f.near.arm[1]; return 'M' + r1(h[0] - 3) + ' ' + r1(h[1] - 7) + 'h14v14h-14Z'; }), { w: 2, stroke: '#8A6A1A', fill: '#EFD27F' });
  if (mv.glow) {
    // A soft orange spot shows which muscle is working while the exercise is held.
    const on = mv.glow.on;
    const ops = steps.map((s) => { const g = s.to === on ? s.f : s.from === on ? 1 - s.f : 0; return r1(0.1 + 0.7 * g); });
    const at = (f) => mv.glow.at === 'lowBack' ? [f.hip[0] - 6, f.hip[1] - 2] : mv.glow.at === 'upperBack' ? [f.sh[0] - 5, f.sh[1] + 5] : [(f.hip[0] + f.near.leg[0][0]) / 2, (f.hip[1] + f.near.leg[0][1]) / 2];
    add(figs.map((f) => { const c = at(f); return 'M' + r1(c[0] - 5) + ' ' + r1(c[1]) + 'a5 5 0 1 0 10 0a5 5 0 1 0 -10 0'; }), { w: 0, stroke: 'none', fill: '#E8735A', op: animate ? 1 : 0.8, opAnim: animate, opVals: ops.join(';') });
  }
  const props = (mv.props || []).map((k) => PROP[k]).map((p) => ({ d: p.d, stroke: p.stroke, w: p.w, fill: p.fill || 'none' }));
  const durS = r1(dur) + 's', ktS = kt.join(';');
  parts.forEach((p) => { p.dur = durS; p.kt = ktS; });
  return { props, parts, dur: durS, kt: ktS };
}
// ---------- Waitlist: sign-ups go to the PainMap Google Sheet through a small Google Apps Script web app.
// Empty = not connected yet, and the waitlist buttons stay hidden.
const WAITLIST_URL = 'https://script.google.com/macros/s/AKfycbx3eouyYEsjFmgKkhhinvxkaLAZNsD0oXCISPfnHpPJrySDt-ftNP7PPOeovd9hbDeh/exec';
const WL_PROVS = [['AB', 'Alberta', 'Alberta'], ['BC', 'British Columbia', 'Colombie-Britannique'], ['MB', 'Manitoba', 'Manitoba'], ['NB', 'New Brunswick', 'Nouveau-Brunswick'], ['NL', 'Newfoundland and Labrador', 'Terre-Neuve-et-Labrador'], ['NS', 'Nova Scotia', 'Nouvelle-Écosse'], ['NT', 'Northwest Territories', 'Territoires du Nord-Ouest'], ['NU', 'Nunavut', 'Nunavut'], ['ON', 'Ontario', 'Ontario'], ['PE', 'Prince Edward Island', 'Île-du-Prince-Édouard'], ['QC', 'Quebec', 'Québec'], ['SK', 'Saskatchewan', 'Saskatchewan'], ['YT', 'Yukon', 'Yukon'], ['Outside Canada', 'Outside Canada', 'Hors du Canada']];
const WL_EMPTY = { name: '', email: '', province: '', pain: '', test: false, consent: false, status: '' };
const demoKind = (name) => DEMO_FOR[name] || 'none';
// ---------- Exercise library: every exercise people can swap into a recovery plan, each with its own demo.
// [id, name, area, groups, demo, dose, how, French name, French how]
// Areas: legs (legs and hips), upper (arms and shoulders), core (back and core), neck, whole (whole body).
// Groups say which plan exercises it can replace: strength, core, iso (holds), stretch, mobility, balance, cardio.
const EX_LIB = [
  ['squat', 'Squat', 'legs', 'strength', 'bodySquat', '3 × 10', 'Feet hip-width apart, sit back as if into a chair, then stand tall.', 'Squat', 'Pieds écartés à la largeur des hanches, asseyez-vous vers l’arrière comme sur une chaise, puis redressez-vous.'],
  ['goblet', 'Goblet squat', 'legs', 'strength', 'gobletSquat', '3 × 8', 'Hold a weight at your chest and squat as deep as feels comfortable.', 'Squat gobelet', 'Tenez un poids contre la poitrine et descendez aussi bas que c’est confortable.'],
  ['sitstand', 'Sit-to-stand', 'legs', 'strength', 'sitToStand', '3 × 10', 'Stand up from a chair without using your hands, then sit down slowly.', 'Assis-debout', 'Levez-vous d’une chaise sans les mains, puis rasseyez-vous lentement.'],
  ['wallsit', 'Wall sit', 'legs', 'strength iso', 'wallSit', '5 × 30 sec', 'Slide down a wall until your knees are bent, and hold.', 'Chaise contre le mur', 'Glissez le long d’un mur jusqu’à plier les genoux, et tenez la position.'],
  ['lunge', 'Lunge', 'legs', 'strength', 'lunge', '3 × 8 each side', 'Step forward and lower your back knee toward the floor, then push back.', 'Fente avant', 'Avancez d’un pas et descendez le genou arrière vers le sol, puis revenez.'],
  ['split', 'Split squat', 'legs', 'strength', 'splitSquat', '3 × 8 each side', 'With one foot forward, lower straight down and come back up.', 'Squat fendu', 'Un pied devant, descendez à la verticale puis remontez.'],
  ['stepup', 'Step-up', 'legs', 'strength cardio', 'stepUp', '3 × 10 each side', 'Step up onto a stair or sturdy step, then step down with control.', 'Montée sur marche', 'Montez sur une marche solide, puis redescendez avec contrôle.'],
  ['stepdown', 'Step-down', 'legs', 'strength', 'stepDown', '3 × 8 each side', 'Stand on a step and slowly lower the other foot to the floor.', 'Descente de marche', 'Debout sur une marche, descendez lentement l’autre pied jusqu’au sol.'],
  ['calf', 'Calf raise', 'legs', 'strength', 'calfRaise', '3 × 15', 'Rise up onto your toes, then lower slowly.', 'Montée sur la pointe des pieds', 'Montez sur la pointe des pieds, puis redescendez lentement.'],
  ['calf1', 'Single-leg calf raise', 'legs', 'strength', 'singleCalfRaise', '3 × 10 each side', 'Hold a wall for balance and rise up on one foot.', 'Montée sur une jambe', 'Tenez un mur pour l’équilibre et montez sur la pointe d’un pied.'],
  ['heeldrop', 'Heel drop off a step', 'legs', 'strength', 'heelDrop', '3 × 15', 'Rise on both feet, then lower slowly on the sore side.', 'Descente du talon sur une marche', 'Montez sur les deux pieds, puis redescendez lentement sur le côté douloureux.'],
  ['toeraise', 'Toe raise', 'legs', 'strength', 'toeRaise', '3 × 15', 'Lean on a wall and lift your toes, keeping your heels down.', 'Relevé des orteils', 'Appuyé contre un mur, levez les orteils en gardant les talons au sol.'],
  ['bridge', 'Glute bridge', 'legs', 'strength core', 'bridge', '3 × 10', 'Lie on your back, knees bent, and lift your hips by squeezing your buttocks.', 'Pont fessier', 'Sur le dos, genoux pliés, soulevez les hanches en serrant les fesses.'],
  ['bridge1', 'Single-leg bridge', 'legs', 'strength core', 'singleBridge', '3 × 8 each side', 'Do a bridge with one leg held straight out.', 'Pont sur une jambe', 'Faites le pont en gardant une jambe tendue.'],
  ['sideleg', 'Side-lying leg raise', 'legs', 'strength', 'sideLegRaise', '3 × 12 each side', 'Lie on your side and lift the top leg, toes pointing forward.', 'Élévation latérale de la jambe', 'Couché sur le côté, levez la jambe du dessus, orteils vers l’avant.'],
  ['slr', 'Straight leg raise', 'legs', 'strength', 'straightLegRaise', '3 × 10 each side', 'Lie on your back, tighten your thigh and lift the straight leg.', 'Élévation jambe tendue', 'Sur le dos, contractez la cuisse et levez la jambe tendue.'],
  ['hamcurl', 'Standing hamstring curl', 'legs', 'strength', 'hamCurl', '3 × 12 each side', 'Hold a wall and bend one knee to bring your heel toward your buttock.', 'Flexion du genou debout', 'Tenez un mur et pliez un genou pour amener le talon vers la fesse.'],
  ['rdl', 'Romanian deadlift', 'legs', 'strength', 'rdl', '3 × 8', 'Hold a light weight and bend from the hips with a straight back.', 'Soulevé de terre roumain', 'Tenez un poids léger et penchez-vous aux hanches, le dos droit.'],
  ['kneeext', 'Seated knee extension', 'legs', 'strength mobility', 'kneeExtSeated', '3 × 12 each side', 'Sit tall and straighten one knee, then lower slowly.', 'Extension du genou assis', 'Assis bien droit, tendez un genou, puis redescendez lentement.'],
  ['quadset', 'Quad set', 'legs', 'iso', 'quadSet', '5 × 10 sec', 'Sit with your leg straight and press the back of your knee down.', 'Contraction du quadriceps', 'Assis, jambe tendue, poussez l’arrière du genou vers le sol.'],
  ['boxlift', 'Box lift', 'whole', 'strength', 'liftBox', '3 × 8', 'Squat down, hold the box close and stand up with a straight back.', 'Soulever une boîte', 'Accroupissez-vous, tenez la boîte près de vous et levez-vous le dos droit.'],
  ['curl', 'Biceps curl', 'upper', 'strength', 'curl', '3 × 12', 'Bend your elbow to lift a light weight, then lower slowly.', 'Flexion des biceps', 'Pliez le coude pour soulever un poids léger, puis redescendez lentement.'],
  ['row', 'Band row', 'upper', 'strength', 'bandRow', '3 × 12', 'Pull a band toward your ribs, squeezing your shoulder blades.', 'Tirage avec élastique', 'Tirez l’élastique vers vos côtes en serrant les omoplates.'],
  ['press', 'Shoulder press', 'upper', 'strength', 'shoulderPress', '3 × 10', 'Press light weights from your shoulders to overhead.', 'Développé des épaules', 'Poussez des poids légers des épaules jusqu’au-dessus de la tête.'],
  ['frontraise', 'Front raise', 'upper', 'strength', 'frontRaise', '3 × 10', 'Lift straight arms in front of you to shoulder height.', 'Élévation frontale', 'Levez les bras tendus devant vous jusqu’à la hauteur des épaules.'],
  ['wallpush', 'Wall push-up', 'upper', 'strength', 'wallPushUp', '3 × 12', 'Hands on a wall, bend your elbows to bring your chest in, then push away.', 'Pompe au mur', 'Mains au mur, pliez les coudes pour approcher la poitrine, puis repoussez.'],
  ['kneepush', 'Knee push-up', 'upper', 'strength', 'kneePushUp', '3 × 8', 'From your knees, lower your chest toward the floor and push back up.', 'Pompe sur les genoux', 'Sur les genoux, descendez la poitrine vers le sol puis remontez.'],
  ['dips', 'Chair dip', 'upper', 'strength', 'tricepDips', '3 × 8', 'Hands on a sturdy chair behind you, bend your elbows to lower, then push up.', 'Dips sur chaise', 'Mains sur une chaise solide derrière vous, pliez les coudes pour descendre, puis poussez.'],
  ['scap', 'Shoulder blade squeeze', 'upper', 'strength iso', 'scapSqueeze', '3 × 10', 'Draw your elbows back and squeeze your shoulder blades together.', 'Serrement des omoplates', 'Ramenez les coudes vers l’arrière et serrez les omoplates.'],
  ['wallslide', 'Wall slide', 'upper', 'mobility', 'wallSlide', '2 × 10', 'Forearms on a wall, slide your arms up and back down.', 'Glissement au mur', 'Avant-bras au mur, faites glisser les bras vers le haut puis redescendez.'],
  ['pendulum', 'Pendulum swing', 'upper', 'mobility', 'pendulum', '2 × 30 sec', 'Lean on a table and let the sore arm hang and swing gently.', 'Pendule', 'Appuyé sur une table, laissez pendre le bras douloureux et balancez-le doucement.'],
  ['armcircle', 'Arm circles', 'upper', 'mobility', 'armCircles', '2 × 10', 'Make slow, big circles with your arms.', 'Cercles de bras', 'Faites de grands cercles lents avec les bras.'],
  ['birddog', 'Bird-dog', 'core', 'core strength', 'birdDog', '3 × 8 each side', 'On hands and knees, reach out one arm and the opposite leg.', 'Chien-oiseau', 'À quatre pattes, tendez un bras et la jambe opposée.'],
  ['deadbug', 'Dead bug', 'core', 'core strength', 'deadBug', '3 × 8', 'Lie on your back and slowly lower the opposite arm and leg.', 'Insecte mort', 'Sur le dos, descendez lentement le bras et la jambe opposés.'],
  ['sideplank', 'Side plank', 'core', 'core iso', 'sidePlank', '3 × 20 sec', 'Prop up on one forearm and lift your hips. Start from the knees.', 'Planche latérale', 'Appuyé sur un avant-bras, soulevez les hanches. Commencez sur les genoux.'],
  ['plank', 'Plank', 'core', 'core iso', 'plank', '3 × 20 sec', 'On your forearms, hold a straight line from head to heels. Start from the knees.', 'Planche', 'Sur les avant-bras, gardez une ligne droite de la tête aux talons. Commencez sur les genoux.'],
  ['curlup', 'Curl-up', 'core', 'core strength', 'curlUp', '3 × 10', 'Lie on your back and lift your head and shoulders a little.', 'Redressement partiel', 'Sur le dos, soulevez un peu la tête et les épaules.'],
  ['tilt', 'Pelvic tilt', 'core', 'core mobility', 'pelvicTilt', '2 × 10', 'Lie on your back and gently flatten and arch your low back.', 'Bascule du bassin', 'Sur le dos, aplatissez puis cambrez doucement le bas du dos.'],
  ['cobra', 'Press-up (cobra)', 'core', 'mobility stretch', 'cobra', '2 × 10', 'Lie on your front and gently push your chest up, keeping your hips down.', 'Cobra', 'Sur le ventre, poussez doucement la poitrine vers le haut en gardant les hanches au sol.'],
  ['catcow', 'Cat-cow', 'core', 'mobility', 'catCow', '2 × 10', 'Slowly round and arch your back on hands and knees.', 'Chat-vache', 'À quatre pattes, arrondissez puis creusez lentement le dos.'],
  ['hinge', 'Hip hinge', 'core', 'mobility strength', 'hipHinge', '3 × 10', 'Bend from the hips with a straight back, as if lifting.', 'Charnière de hanche', 'Penchez-vous aux hanches, le dos droit, comme pour soulever.'],
  ['chintuck', 'Chin tuck', 'neck', 'mobility iso', 'chinTuck', '2 × 10', 'Sit tall and glide your chin straight back, making a double chin.', 'Rentrer le menton', 'Assis bien droit, reculez le menton pour faire un double menton.'],
  ['neckstretch', 'Neck stretch', 'neck', 'stretch', 'neckFlex', '2 × 30 sec', 'Sit tall and slowly lower your chin toward your chest.', 'Étirement du cou', 'Assis bien droit, descendez lentement le menton vers la poitrine.'],
  ['quadstretch', 'Quad stretch', 'legs', 'stretch', 'quadStretch', '3 × 30 sec each side', 'Hold a wall, bend your knee and hold your ankle behind you.', 'Étirement du quadriceps', 'Tenez un mur, pliez le genou et tenez votre cheville derrière vous.'],
  ['hamstretch', 'Hamstring stretch', 'legs', 'stretch', 'hamStretch', '3 × 30 sec each side', 'Put one heel forward and lean from the hips with a straight back.', 'Étirement des ischio-jambiers', 'Un talon devant, penchez-vous aux hanches, le dos droit.'],
  ['calfstretch', 'Calf stretch', 'legs', 'stretch', 'calfStretch', '3 × 30 sec each side', 'Hands on a wall, step one foot back and keep that heel down.', 'Étirement du mollet', 'Mains au mur, reculez un pied et gardez ce talon au sol.'],
  ['hipflexor', 'Hip flexor stretch', 'legs', 'stretch', 'hipFlexor', '3 × 30 sec each side', 'Kneel on one knee and gently shift your hips forward.', 'Étirement des fléchisseurs de la hanche', 'Un genou au sol, avancez doucement les hanches.'],
  ['child', 'Child’s pose', 'core', 'stretch mobility', 'childsPose', '3 × 30 sec', 'From hands and knees, sit back toward your heels and reach forward.', 'Posture de l’enfant', 'À quatre pattes, asseyez-vous vers les talons et tendez les bras devant.'],
  ['kneechest', 'Knee-to-chest', 'core', 'stretch mobility', 'kneeHug', '3 × 30 sec', 'Lie on your back and hug both knees toward your chest.', 'Genoux à la poitrine', 'Sur le dos, ramenez les deux genoux vers la poitrine.'],
  ['fold', 'Seated forward bend', 'legs', 'stretch', 'seatedFold', '3 × 30 sec', 'Sit with your legs straight and reach toward your toes.', 'Flexion avant assise', 'Assis jambes tendues, tendez les mains vers vos orteils.'],
  ['doorway', 'Doorway chest stretch', 'upper', 'stretch', 'doorway', '3 × 30 sec each side', 'Forearm on a door frame, step forward until you feel a stretch.', 'Étirement des pectoraux', 'Avant-bras sur un cadre de porte, avancez jusqu’à sentir l’étirement.'],
  ['reach', 'Overhead reach', 'whole', 'stretch mobility', 'reachUp', '2 × 5', 'Reach both arms up tall, then bend gently forward.', 'Étirement vers le haut', 'Tendez les deux bras vers le haut, puis penchez-vous doucement vers l’avant.'],
  ['legswing', 'Leg swings', 'legs', 'stretch mobility', 'legSwing', '2 × 10 each side', 'Hold a wall and swing one leg forward and back.', 'Balancements de jambe', 'Tenez un mur et balancez une jambe d’avant en arrière.'],
  ['foam', 'Foam rolling', 'legs', 'stretch', 'foamRoll', '2 min', 'Roll slowly over the area, easing off tender spots.', 'Rouleau de massage', 'Roulez lentement sur la zone en relâchant sur les points sensibles.'],
  ['nerve', 'Nerve glide', 'legs', 'mobility', 'nerveGlide', '2 × 10', 'Sit tall, straighten your knee as you look up, then bend it as you look down.', 'Glissement nerveux', 'Assis, tendez le genou en regardant vers le haut, puis pliez-le en regardant vers le bas.'],
  ['ankle', 'Ankle pumps', 'legs', 'mobility', 'anklePumps', '2 × 20', 'Point your foot down, then pull your toes up.', 'Pompes de cheville', 'Pointez le pied vers le bas, puis tirez les orteils vers vous.'],
  ['standbreak', 'Stand-up break', 'whole', 'mobility', 'standStretch', 'Every hour', 'Stand up from your chair and reach tall.', 'Pause debout', 'Levez-vous de votre chaise et étirez-vous vers le haut.'],
  ['oneleg', 'Single-leg stand', 'legs', 'balance', 'singleLeg', '3 × 30 sec each side', 'Stand on one leg near a wall or counter.', 'Équilibre sur une jambe', 'Tenez-vous sur une jambe près d’un mur ou d’un comptoir.'],
  ['wallbal', 'Supported balance', 'legs', 'balance', 'wallBalance', '3 × 30 sec each side', 'Stand on one leg with one hand on the wall.', 'Équilibre avec appui', 'Tenez-vous sur une jambe, une main au mur.'],
  ['tandem', 'Heel-to-toe walk', 'legs', 'balance', 'tandemWalk', '3 × 10 steps', 'Walk in a straight line, heel touching toe.', 'Marche talon-orteils', 'Marchez en ligne droite, le talon touchant les orteils.'],
  ['legreach', 'Single-leg reach', 'legs', 'balance strength', 'singleLegReach', '3 × 6 each side', 'Balance on one leg and lean forward, reaching your other leg back.', 'Équilibre penché', 'En équilibre sur une jambe, penchez-vous en tendant l’autre jambe derrière vous.'],
  ['walk', 'Walking', 'whole', 'cardio', 'walk', '15 min', 'An easy walk on a flat surface.', 'Marche', 'Une marche facile sur un terrain plat.'],
  ['brisk', 'Brisk walking', 'whole', 'cardio', 'briskWalk', '20 min', 'Walk fast enough to breathe harder but still talk.', 'Marche rapide', 'Marchez assez vite pour respirer plus fort tout en pouvant parler.'],
  ['jog', 'Jogging', 'whole', 'cardio', 'jog', '15 min', 'An easy jog. Walk breaks are fine.', 'Jogging', 'Un jogging facile. Les pauses de marche sont permises.'],
  ['bike', 'Cycling', 'whole', 'cardio', 'bike', '20 min', 'A stationary bike or an easy ride on flat ground.', 'Vélo', 'Un vélo stationnaire ou une balade facile sur terrain plat.'],
  ['swim', 'Swimming', 'whole', 'cardio', 'swim', '20 min', 'Easy lengths at a comfortable pace.', 'Natation', 'Des longueurs faciles à un rythme confortable.'],
  ['march', 'Marching on the spot', 'whole', 'cardio', 'march', '5 min', 'Lift your knees in turn at a comfortable pace.', 'Marche sur place', 'Levez les genoux à tour de rôle à un rythme confortable.'],
  ['hops', 'Small hops', 'legs', 'cardio', 'hops', '3 × 10', 'Small, quick hops on both feet, only if pain stays low.', 'Petits sauts', 'De petits sauts rapides sur les deux pieds, seulement si la douleur reste faible.']
].map((e) => ({ id: e[0], name: e[1], area: e[2], groups: e[3].split(' '), move: e[4], dose: e[5], how: e[6], frName: e[7], frHow: e[8] }));

// Which kind of exercise each plan exercise is, so the swap list offers ones that do the same job.
const PLAN_GROUP = {
  'Isometric hold': 'iso', 'Gentle muscle squeeze': 'iso',
  'Slow resistance': 'strength', 'Eccentric lowering': 'strength', 'Heavier loading': 'strength', 'Band strengthening': 'strength', 'Full strengthening': 'strength',
  'Strengthen nearby muscles': 'strength', 'Step-ups or wall push-ups': 'strength', 'Strengthening': 'strength', 'Sport or work moves': 'strength',
  'Bird-dog': 'core', 'Dead bug': 'core', 'Side plank': 'core', 'Glute bridge': 'core',
  'Gentle stretch': 'stretch', 'Active stretching': 'stretch', 'Mobility stretches': 'stretch', 'Stretching': 'stretch', 'Foam rolling': 'stretch',
  'Gentle range of motion': 'mobility', 'Range-of-motion circles': 'mobility', 'Morning routine': 'mobility', 'Cat-cow': 'mobility', 'Knee hugs or chin tucks': 'mobility',
  'Pelvic tilts': 'mobility', 'Nerve glides': 'mobility', 'Hip hinge practice': 'mobility', 'Posture breaks': 'mobility',
  'Balance hold': 'balance', 'Balance': 'balance',
  'Activity intervals': 'cardio', 'Easy movement': 'cardio', 'Build up activity': 'cardio', 'Low-impact cardio': 'cardio', 'Longer cardio': 'cardio', 'Short walks': 'cardio',
  'Easy walking': 'cardio', 'Activity': 'cardio', 'Usual activity': 'cardio', 'Light exercise': 'cardio', 'Small hops or quick moves': 'cardio'
};
const EX_AREAS = [['legs', 'Legs and hips'], ['upper', 'Arms and shoulders'], ['core', 'Back and core'], ['neck', 'Neck'], ['whole', 'Whole body']];
// The plan's problem decides which body area is listed first.
const EX_AREA_FIRST = { spine: 'core', nerve: 'core', joint: 'legs', tendon: 'legs', muscle: 'legs', general: 'whole' };

// ---------- Which clinicians suit each kind of problem.
const CLINICIAN_FOR = {
  tendon: ['Physiotherapist', 'Sports medicine doctor'], muscle: ['Physiotherapist', 'Registered massage therapist'],
  joint: ['Physiotherapist', 'Family doctor'], spine: ['Physiotherapist', 'Chiropractor'],
  nerve: ['Physiotherapist', 'Family doctor'], general: ['Family doctor', 'Walk-in clinic'], organ: ['Family doctor', 'Walk-in clinic']
};
const CLINICIAN_TYPES = ['Physiotherapist', 'Chiropractor', 'Sports medicine doctor', 'Registered massage therapist', 'Family doctor', 'Walk-in clinic'];

// ---------- English / French. UI text is looked up by its English wording.
const FR = {};
// Medical reference list shown on the Sources screen: [topic, title, publisher, what PainMap uses it for].
const SOURCES = [["Low back pain and sciatica", "Low back pain and sciatica in over 16s: assessment and management (NG59)", "National Institute for Health and Care Excellence (NICE), UK", "Red flags, staying active, and when to see a clinician for back pain and sciatica."], ["Low back pain", "Evidence-informed primary care management of low back pain", "Toward Optimized Practice (TOP), Alberta", "Canadian primary-care guidance on self-care and imaging for back pain."], ["Imaging", "Choosing Wisely Canada recommendations", "Choosing Wisely Canada", "When an X-ray or scan is and is not usually needed."], ["Ankle and foot injuries", "Ottawa Ankle Rules", "Stiell et al., Ottawa Hospital Research Institute", "When an ankle or foot injury needs an X-ray."], ["Knee injuries", "Ottawa Knee Rule", "Stiell et al., Ottawa Hospital Research Institute", "When a knee injury needs an X-ray."], ["Neck injuries", "Canadian C-Spine Rule", "Stiell et al., Ottawa Hospital Research Institute", "Neck pain after a fall or accident: when to get emergency care."], ["Ankle sprain", "Treatment and prevention of acute and recurrent ankle sprain (consensus statement)", "International Ankle Consortium, British Journal of Sports Medicine", "Protect, compress, elevate, then balance and strength exercises."], ["Osteoarthritis", "Guidelines for the non-surgical management of knee, hip and hand osteoarthritis", "Osteoarthritis Research Society International (OARSI)", "Exercise and low-impact activity for joint pain."], ["Heart and stroke warning signs", "Signs of a heart attack and stroke", "Heart & Stroke Foundation of Canada", "Chest pain and stroke red flags that call for 911."], ["Nurse advice lines", "811 HealthLink and provincial health lines", "Provincial and territorial health ministries", "Which number to call for non-emergency advice in each province."]];
Object.assign(FR, {"Early access": "Accès anticipé", "Join waitlist": "Liste d’attente", "Your first name": "Votre prénom", "Your email": "Votre courriel", "Where do you live?": "Où habitez-vous?", "Choose your province": "Choisissez votre province", "Where does it hurt? (optional)": "Où avez-vous mal? (facultatif)", "Yes, I’d like to try new versions early": "Oui, j’aimerais essayer les nouvelles versions en premier", "Yes, you can email me about PainMap (required)": "Oui, vous pouvez m’écrire au sujet de PainMap (obligatoire)", "Join the waitlist": "Rejoindre la liste d’attente", "Be first to try PainMap when it launches in Canada.": "Soyez parmi les premiers à essayer PainMap à son lancement au Canada.", "Want PainMap when it launches?": "Vous voulez PainMap à son lancement?", "Join the waitlist to hear first and help test new versions.": "Inscrivez-vous pour être informé en premier et tester les nouvelles versions.", "First name": "Prénom", "Email": "Courriel", "Province or territory": "Province ou territoire", "Choose…": "Choisir…", "What kind of pain brings you here? (optional)": "Quel type de douleur vous amène ici? (facultatif)", "For example: lower back after work": "Par exemple : bas du dos après le travail", "I’d like to test new versions before launch": "J’aimerais tester les nouvelles versions avant le lancement", "Yes, email me about PainMap (needed to join)": "Oui, écrivez-moi au sujet de PainMap (obligatoire)", "We only use your details to email you about PainMap. Unsubscribe any time.": "Nous utilisons vos coordonnées seulement pour vous écrire au sujet de PainMap. Désabonnez-vous en tout temps.", "Could not send. Check your connection and try again.": "Envoi impossible. Vérifiez votre connexion et réessayez.", "Sending…": "Envoi…", "Fill in the form to join": "Remplissez le formulaire pour vous inscrire", "You’re on the list!": "Vous êtes sur la liste!", "We’ll email you when PainMap launches. Check your inbox for a welcome email.": "Nous vous écrirons au lancement de PainMap. Surveillez votre boîte de réception pour un courriel de bienvenue.", "Back to PainMap": "Retour à PainMap", "About you": "À propos de vous", "I understand. Show me the body": "J’ai compris. Montrez-moi le corps", "Three things to know. Please read them, then tap the button below.": "Trois choses à savoir. Lisez-les, puis touchez le bouton ci-dessous.", "Your age and gender change which causes are most likely.": "Votre âge et votre genre changent les causes les plus probables.", "Choose a gender to see results": "Choisissez un genre pour voir les résultats", "Pick any hour and minute.": "Choisissez n’importe quelle heure et minute.", "Delete": "Supprimer", "Delete this treatment?": "Supprimer ce traitement ?", "Keep": "Garder", "Treatment deleted": "Traitement supprimé", "Delete this entry?": "Supprimer cette entrée ?", "Entry deleted": "Entrée supprimée", "Edit entry": "Modifier l’entrée", "Pain": "Douleur", "Note": "Note", "Save changes": "Enregistrer", "Cancel": "Annuler", "Entry updated": "Entrée modifiée", "Organs": "Organes", "Loading the 3D body…": "Chargement du corps 3D…", "3D body. Drag to turn it, pinch to zoom, tap to mark your pain.": "Corps 3D. Glissez pour le tourner, pincez pour zoomer, touchez pour marquer la douleur.", "Under the skin here:": "Sous la peau à cet endroit :", "Tap again to move it.": "Touchez de nouveau pour le déplacer.", "of 2": "sur 2", "Find it. Track it. Fix it.": "Trouvez-la. Suivez-la. Soignez-la.", "Start finding my pain": "Commencer à trouver ma douleur", "Quick tips": "Astuces rapides", "Report": "Rapport", "Seeing a doctor or physio?": "Vous allez voir un médecin ou un physio ?", "Bring a one-page report with your pain spots, answers, diary and what you have tried.": "Apportez un rapport d’une page avec vos points de douleur, vos réponses, votre journal et ce que vous avez essayé.", "Open my doctor report": "Ouvrir mon rapport pour le médecin", "On my period": "Pendant mes règles", "Drag sideways to spin the body all the way around.": "Glissez sur le côté pour faire tourner le corps sur lui-même.", "Pinch, or scroll with a mouse, to zoom in on a small area.": "Pincez, ou utilisez la molette, pour zoomer sur une petite zone.", "Tap exactly where it hurts. A blue marker shows your spot.": "Touchez exactement où ça fait mal. Un repère bleu indique l’endroit.", "Got it": "Compris", "Next": "Suivant", "Skip": "Passer", "Log pain": "Noter la douleur", "In the real app these buttons sit on the notification itself, so you can log without opening PainMap.": "Dans la vraie application, ces boutons sont sur la notification elle-même : vous notez sans ouvrir PainMap.", "Your month": "Votre mois", "Average pain": "Douleur moyenne", "Check-ins": "Bilans", "Best day": "Meilleur jour", "Worst day": "Pire jour", "Pain eased by ": "La douleur a baissé de ", " points over the month.": " points au cours du mois.", "Pain rose by ": "La douleur a augmenté de ", " points over the month. Consider seeing a clinician.": " points au cours du mois. Pensez à consulter un clinicien.", "Pain held steady over the month.": "La douleur est restée stable ce mois-ci.", "Helped most:": "A le plus aidé :", "Log treatments to see what helps most.": "Notez vos traitements pour voir ce qui aide le plus.", "Start timer": "Démarrer la minuterie", "Set": "Série", "Resume": "Reprendre", "Pause": "Pause", "Stop": "Arrêter", "Exercise done. Nice work.": "Exercice terminé. Bravo.", "Naproxen (Aleve)": "Naproxène (Aleve)", "Prescription medication": "Médicament sur ordonnance", "Recovery plan check-ins": "Bilans du plan de rétablissement", "Better": "Mieux", "Worse": "Pire", "About the same": "Pareil", "Spot kept. Now tap the next place it hurts.": "Point gardé. Touchez maintenant le prochain endroit douloureux.", "Also marked:": "Aussi marqué :", "Clear these": "Effacer ceux-ci", "Your plan works these muscles, shown in blue:": "Votre plan fait travailler ces muscles, en bleu :", "Back to my plan": "Retour à mon plan", "Done": "Terminé", "See the muscles this plan works": "Voir les muscles travaillés par ce plan", "Cramping or comes in waves": "Crampes ou par vagues", "Stabbing": "Coup de poignard", "Strong or feverish pain deep in the body should be checked today. If it is sudden and severe, go to emergency or call 911.": "Une douleur forte ou avec fièvre à l’intérieur du corps doit être vérifiée aujourd’hui. Si elle est soudaine et intense, allez aux urgences ou composez le 911.", "sharp pain": "douleur vive", "stabbing pain": "douleur en coup de poignard", "a dull ache": "une douleur sourde", "throbbing pain": "douleur lancinante", "cramping or comes in waves": "crampes ou douleur par vagues", "Edit treatment": "Modifier le traitement", "Treatment updated": "Traitement modifié", "Appearance": "Apparence", "Match my phone": "Comme mon téléphone", "Light": "Clair", "Dark": "Sombre", "today?": "aujourd’hui ?", "Height:": "Taille :", "Edit": "Modifier", "Choose:": "Choisir :", "Layer": "Couche", "labelled parts on this view. Zoom into an area to see them all, and tap any name to learn what it does.": "parties identifiées dans cette vue. Zoomez sur une zone pour toutes les voir, puis touchez un nom pour savoir à quoi il sert.", "Answers are optional, but each one helps rank the causes. Your age and body are used too:": "Les réponses sont facultatives, mais chacune aide à classer les causes. Votre âge et votre corps comptent aussi :", "pain over time": "douleur au fil du temps", "How’s your": "Comment va votre", "Ranked using where and how deep it hurts, your answers, and your age and body. Best match first.": "Classées selon l’endroit et la profondeur de la douleur, vos réponses, votre âge et votre corps. La plus probable en premier.", "Skip": "Passer", "I already have an account": "J’ai déjà un compte", "Back up your diary": "Sauvegardez votre journal", "Sign in so your pain diary, spots and plans are safe if you change or lose your phone.": "Connectez-vous pour protéger votre journal de douleur, vos points et vos plans si vous changez ou perdez votre téléphone.", "Sign out": "Se déconnecter", "Continue with Apple": "Continuer avec Apple", "Continue with Google": "Continuer avec Google", "Email": "Courriel", "Continue with email": "Continuer avec un courriel", "Your health data is encrypted and stored in Canada [CONFIRM HOSTING]. We never sell it. [PRIVACY LINK]": "Vos données de santé sont chiffrées et stockées au Canada [CONFIRMER L’HÉBERGEMENT]. Nous ne les vendons jamais. [LIEN CONFIDENTIALITÉ]", "Not now": "Pas maintenant", "Settings and privacy": "Paramètres et confidentialité", "Account": "Compte", "Manage account and backup": "Gérer le compte et la sauvegarde", "Your profile": "Votre profil", "Edit age and gender": "Modifier l’âge et le genre", "Language": "Langue", "Accessibility": "Accessibilité", "Larger text": "Texte plus grand", "Reduce motion": "Réduire les animations", "Your data and privacy": "Vos données et votre vie privée", "You own your health data. We follow Canada’s privacy law (PIPEDA) and provincial health privacy laws. We never sell your data.": "Vos données de santé vous appartiennent. Nous respectons la loi canadienne sur la protection des renseignements personnels (LPRPDE) et les lois provinciales sur les renseignements de santé. Nous ne vendons jamais vos données.", "Export my data": "Exporter mes données", "Delete all my data": "Supprimer toutes mes données", "This permanently deletes your diary, spots, treatments and plans. This cannot be undone.": "Cette action supprime définitivement votre journal, vos points, vos traitements et vos plans. Elle est irréversible.", "Delete everything": "Tout supprimer", "Cancel": "Annuler", "[PRIVACY POLICY LINK] · [TERMS LINK]": "[LIEN POLITIQUE DE CONFIDENTIALITÉ] · [LIEN CONDITIONS]", "About PainMap": "À propos de PainMap", "Medical content reviewed by [CLINICIAN NAME, CREDENTIALS]. PainMap gives general information and tracking. It is not a diagnosis and does not replace a health professional.": "Contenu médical révisé par [NOM DU CLINICIEN, TITRES]. PainMap offre de l’information générale et un suivi. Ce n’est pas un diagnostic et cela ne remplace pas un professionnel de la santé.", "Find a clinician": "Trouver un clinicien", "Postal code": "Code postal", "Video visits only": "Consultations vidéo seulement", "Call 811": "Appeler le 811", "Call 911": "Appeler le 911", "Clinic listings are placeholders. Partner clinics will be marked clearly as paid listings.": "Les cliniques affichées sont des exemples. Les cliniques partenaires seront clairement indiquées comme annonces payées.", "Tell us about you": "Parlez-nous de vous", "We shape the body map to match your age and body, so the spots and parts line up with you.": "Nous adaptons la carte du corps à votre âge et à votre corps pour que les points et les parties correspondent à vous.", "Age": "Âge", "Gender (body type)": "Genre (type de corps)", "Used only to shape the diagram and show the right organs. You can change it any time.": "Sert seulement à adapter le schéma et à montrer les bons organes. Vous pouvez le changer à tout moment.", "Front": "Avant", "Back": "Retour", "Zoom": "Zoom", "Drag to locate": "Glissez pour situer", "Investigating": "Analyse en cours", "Clear": "Effacer", "+ Add another spot": "+ Ajouter un autre point", "Everything under this point, from the surface down. Tap a layer to peel to it.": "Tout ce qui se trouve sous ce point, de la surface vers l’intérieur. Touchez une couche pour y descendre.", "Or choose an area from a list": "Ou choisissez une zone dans une liste", "How deep does it feel?": "À quelle profondeur la sentez-vous ?", "What does it feel like?": "Comment la douleur se manifeste-t-elle ?", "Overview": "Aperçu", "Find pain": "Trouver la douleur", "Explore": "Explorer", "My diary": "Mon journal", "A few quick questions": "Quelques questions rapides", "How bad is the pain right now?": "Quelle est l’intensité de la douleur en ce moment ?", "No pain": "Aucune douleur", "Worst imaginable": "Pire douleur imaginable", "How did it start?": "Comment a-t-elle commencé ?", "How long have you had it?": "Depuis combien de temps l’avez-vous ?", "What makes it worse?": "Qu’est-ce qui l’aggrave ?", "Choose all that apply.": "Choisissez tout ce qui s’applique.", "Anything else going on?": "Autre chose ?", "See possible causes": "Voir les causes possibles", "My pain diary": "Mon journal de douleur", "Insights": "Tendances", "Tag a few check-ins with what your day was like and patterns will show up here.": "Notez comment s’est passée votre journée lors de quelques suivis et des tendances apparaîtront ici.", "What was today like?": "Comment s’est passée votre journée ?", "Notes (optional)": "Notes (facultatif)", "Save today’s check-in": "Enregistrer le suivi du jour", "Recovery plan": "Plan de rétablissement", "Exercises for this spot": "Exercices pour ce point", "Doctor report": "Rapport pour le médecin", "One-page PDF · Open": "PDF d’une page · Ouvrir", "One-page PDF · Premium": "PDF d’une page · Premium", "Medication and treatment log": "Journal des médicaments et traitements", "What did you take or try?": "Qu’avez-vous pris ou essayé ?", "Did it help?": "Est-ce que ça a aidé ?", "Log treatment": "Ajouter le traitement", "Daily reminder": "Rappel quotidien", "Premium": "Premium", "Remind me at": "Me le rappeler à", "All entries": "Toutes les entrées", "Stop any exercise that makes the pain sharper or worse. Plan reviewed by [PHYSIOTHERAPIST NAME]. This is general guidance, not a personal prescription.": "Arrêtez tout exercice qui rend la douleur plus vive ou plus forte. Plan révisé par [NOM DU PHYSIOTHÉRAPEUTE]. Il s’agit de conseils généraux, pas d’une prescription personnelle.", "PainMap Premium": "PainMap Premium", "Find it. Track it. Fix it.": "Trouvez-la. Suivez-la. Soignez-la.", "Turn your pain map into a recovery you can see.": "Transformez votre carte de la douleur en un rétablissement visible.", "Payment is charged to your app store account. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the period. [TERMS LINK] · [PRIVACY LINK]": "Le paiement est porté à votre compte de la boutique d’applications. Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période. [LIEN CONDITIONS] · [LIEN CONFIDENTIALITÉ]", "Restore purchase": "Restaurer un achat", "Possible causes": "Causes possibles", "Your pain": "Votre douleur", "Parts at this spot:": "Parties à cet endroit :", "Edit answers": "Modifier les réponses", "Call 811 · nurse line": "Appeler le 811 · ligne infirmière", "Your pain spots": "Vos points de douleur", "Linked pain patterns": "Liens entre les douleurs", "These spots together can point to one cause.": "Ensemble, ces points peuvent indiquer une même cause.", "Did you know?": "Le saviez-vous ?", "Get care right away if": "Consultez immédiatement si", "PainMap gives general information, not a diagnosis. If pain is severe, lasts more than a week or keeps getting worse, see a doctor or physiotherapist.": "PainMap offre de l’information générale, pas un diagnostic. Si la douleur est forte, dure plus d’une semaine ou s’aggrave, consultez un médecin ou un physiothérapeute.", "Start over with a new spot": "Recommencer avec un nouveau point", "Save to diary": "Enregistrer dans le journal", "Units": "Unités", "Confirm delete": "Confirmer la suppression", "Type of care": "Type de soins", "Settings": "Paramètres", "Body side": "Côté du corps", "Body layer": "Couche du corps", "Zoom to area": "Zoomer sur une zone", "Body locator. Use the arrow keys to move it over the body, or drag it with a mouse or finger.": "Localisateur. Utilisez les flèches pour le déplacer sur le corps, ou faites-le glisser avec la souris ou le doigt.", "Pain depth": "Profondeur de la douleur", "Pain type": "Type de douleur", "Back to body map": "Retour à la carte du corps", "Pain spot": "Point de douleur", "For example: sore after a long shift": "Par exemple : douleur après un long quart de travail", "Notification preview": "Aperçu de la notification", "Close": "Fermer", "Choose a plan": "Choisir un forfait", "Saved to your diary": "Enregistré dans votre journal", "Week": "Semaine", "Unlock this week with Premium": "Débloquer cette semaine avec Premium", "Premium ✓": "Premium ✓", "Go Premium": "Passer à Premium", " (sample)": " (exemple)", "Check in again to see your trend.": "Faites un autre suivi pour voir votre tendance.", "Down ": "En baisse de ", " points since ": " points depuis le ", ". Keep going.": ". Continuez !", "Up ": "En hausse de ", ". Consider seeing a clinician.": ". Pensez à consulter un clinicien.", "No change since ": "Aucun changement depuis le ", "Sample": "Exemple", "Mild": "Légère", "Moderate": "Modérée", "Severe": "Forte", "Premium: unlimited check-ins": "Premium : suivis illimités", "Free plan: ": "Forfait gratuit : ", " of ": " sur ", " check-ins left": " suivis restants", "Report created. Ready to share (demo).": "Rapport créé. Prêt à partager (démo).", " exercises done": " exercices faits", "Start 7-day free trial": "Commencer l’essai gratuit de 7 jours", "Subscribe monthly": "S’abonner au mois", "Buy lifetime access": "Acheter l’accès à vie", "Welcome to Premium": "Bienvenue dans Premium", "No previous purchase found (demo)": "Aucun achat précédent trouvé (démo)", "What may help": "Ce qui peut aider", "Start recovery plan →": "Commencer le plan de rétablissement →", "Fits because: ": "Correspond parce que : ", "Choose an area…": "Choisissez une zone…", "Fever with this kind of pain can mean an infection. Please see a doctor today.": "De la fièvre avec ce type de douleur peut indiquer une infection. Consultez un médecin aujourd’hui.", "Numbness together with weakness should be checked by a doctor soon.": "Un engourdissement accompagné de faiblesse doit être vérifié rapidement par un médecin.", "An injury with swelling that hurts to put weight on may be a fracture or tear. Get it checked.": "Une blessure avec enflure qui fait mal quand on s’appuie dessus peut être une fracture ou une déchirure. Faites-la examiner.", "Your pain is severe. If it does not ease with rest and pain relief, see a doctor today.": "Votre douleur est forte. Si elle ne diminue pas avec le repos et des analgésiques, consultez un médecin aujourd’hui.", "Pain ": "Douleur ", "Child": "Enfant", "Teen": "Adolescent", "Adult": "Adulte", "Older adult": "Personne âgée", "Show my body map": "Afficher ma carte du corps", "Choose a gender to continue": "Choisissez un genre pour continuer", "Female": "Femme", "Male": "Homme", "Not specified": "Non précisé", "Not set": "Non défini", "Explore the body": "Explorer le corps", "Where does it hurt?": "Où avez-vous mal ?", "Labels hidden": "Étiquettes masquées", "Drag the locator over the body, then let go to zoom in": "Glissez le localisateur sur le corps, puis relâchez pour zoomer", "Tap a label, or keep dragging to explore": "Touchez une étiquette ou continuez à glisser pour explorer", "Showing": "Couche affichée :", "Drag the locator over the body to find your spot": "Glissez le localisateur sur le corps pour trouver votre point", "Labels on": "Étiquettes visibles", "Labels off": "Étiquettes masquées", "Show details": "Afficher les détails", "Hide details · body only": "Masquer les détails · corps seulement", "Choose the spot first": "Choisissez d’abord le point", "Drag to find your spot": "Glissez pour trouver votre point", "Very severe": "Très forte", "helped": "a aidé", "Clinic name": "Nom de la clinique", "distance": "distance", "PainMap partner": "Partenaire PainMap", "Video visits": "Consultations vidéo", "Request a booking": "Demander un rendez-vous", "Next opening": "Prochaine disponibilité", "Booking request sent (demo)": "Demande de rendez-vous envoyée (démo)", "Spot saved. Now find the next one.": "Point enregistré. Trouvez maintenant le suivant.", "Remove": "Retirer", "Treatment logged": "Traitement ajouté", "Not sure? Call 811 to talk to a nurse (Health Link in Alberta). Free, 24/7 in most provinces.": "Vous hésitez ? Appelez le 811 pour parler à une infirmière (Health Link en Alberta). Gratuit, 24 h/24, 7 j/7 dans la plupart des provinces.", "Suggested for": "Suggéré pour", " or ": " ou ", "Choose the kind of care you need.": "Choisissez le type de soins dont vous avez besoin.", "Signed in with": "Connecté avec", "Not signed in. Your diary is only on this phone.": "Non connecté. Votre journal est seulement sur ce téléphone.", "Signed in. Your diary is backed up.": "Connecté. Votre journal est sauvegardé.", "Enter a valid email": "Entrez un courriel valide", "Check your email to finish signing in (demo)": "Vérifiez vos courriels pour terminer la connexion (démo)", "Signed out": "Déconnecté", "Centimetres": "Centimètres", "Feet and inches": "Pieds et pouces", "Your data export is being prepared (demo)": "Votre exportation de données est en préparation (démo)", "All your data was deleted": "Toutes vos données ont été supprimées", "A sudden injury or fall": "Une blessure soudaine ou une chute", "After exercise or overuse": "Après de l’exercice ou une surutilisation", "Came on gradually": "Apparue graduellement", "No clear reason": "Sans raison évidente", "Less than a week": "Moins d’une semaine", "1 to 6 weeks": "1 à 6 semaines", "More than 6 weeks": "Plus de 6 semaines", "Moving it": "Bouger", "Putting weight on it": "M’appuyer dessus", "Pressing on it": "Appuyer dessus", "After rest or first thing in the morning": "Après le repos ou au réveil", "At night": "La nuit", "Standing or walking for a long time": "Rester debout ou marcher longtemps", "Swelling": "Enflure", "Bruising": "Ecchymose", "Redness or warmth": "Rougeur ou chaleur", "Fever or feeling unwell": "Fièvre ou malaise", "Numbness or pins and needles": "Engourdissement ou picotements", "Weakness": "Faiblesse", "Clicking, catching or locking": "Clics, accrochage ou blocage", "Poor sleep": "Mauvais sommeil", "Very active day": "Journée très active", "Rest day": "Journée de repos", "Stressful day": "Journée stressante", "Cold or rainy weather": "Temps froid ou pluvieux", "Long hours sitting": "Longues heures assis", "Took pain medication": "Analgésique pris", "Helped": "A aidé", "Helped a little": "A un peu aidé", "Did not help": "N’a pas aidé", "Ice": "Glace", "Heat": "Chaleur", "Ibuprofen (Advil)": "Ibuprofène (Advil)", "Acetaminophen (Tylenol)": "Acétaminophène (Tylenol)", "Physio visit": "Visite en physiothérapie", "Massage": "Massage", "Stretching": "Étirements", "Brace or support": "Attelle ou support", "Other": "Autre", "Physiotherapist": "Physiothérapeute", "Chiropractor": "Chiropraticien", "Sports medicine doctor": "Médecin du sport", "Registered massage therapist": "Massothérapeute agréé", "Family doctor": "Médecin de famille", "Walk-in clinic": "Clinique sans rendez-vous", "Sharp": "Vive", "Dull ache": "Douleur sourde", "Throbbing": "Lancinante", "Burning": "Brûlure", "Tingling or numb": "Picotements ou engourdissement", "Skin": "Peau", "Fat & fascia": "Graisse et fascia", "Muscle": "Muscle", "Tendon & ligament": "Tendon et ligament", "Bone & joint": "Os et articulation", "Organs": "Organes", "Fat": "Graisse", "Tendon": "Tendon", "Bone": "Os", "Surface pain. Tender to light touch, stinging or itchy, or visibly red or bruised.": "Douleur en surface. Sensible au toucher léger, piquante ou qui démange, ou visiblement rouge ou meurtrie.", "Just under the skin. Sore when pressed, and may feel swollen, warm or lumpy.": "Juste sous la peau. Douloureuse quand on appuie, parfois enflée, chaude ou bosselée.", "A deeper ache or tightness. Worse when you use, stretch or squeeze the area.": "Douleur plus profonde ou tension. Pire quand on utilise, étire ou serre la zone.", "Near a joint. Hurts with certain movements, and the joint may feel stiff or unstable.": "Près d’une articulation. Fait mal avec certains mouvements; l’articulation peut sembler raide ou instable.", "Deep and hard to pinpoint. Aches at rest or at night, or hurts to put weight on.": "Profonde et difficile à situer. Douleur au repos ou la nuit, ou quand on s’appuie dessus.", "Deep inside the head, chest or belly. Often a dull, hard-to-place ache, sometimes with nausea, fever or other symptoms.": "À l’intérieur de la tête, de la poitrine ou du ventre. Souvent une douleur sourde et difficile à situer, parfois avec nausée, fièvre ou d’autres symptômes.", "Nerves": "Nerfs", "Blood vessels": "Vaisseaux sanguins", "Skin (integumentary system)": "Peau (système tégumentaire)", "Fat, fascia & bursae": "Graisse, fascia et bourses", "Muscular system": "Système musculaire", "Tendons, ligaments & cartilage": "Tendons, ligaments et cartilage", "Skeletal system": "Système squelettique", "Organs & glands": "Organes et glandes", "Nervous system": "Système nerveux", "Arteries (red) & veins (blue)": "Artères (rouge) et veines (bleu)", "Skin, hair and nails form a waterproof barrier that blocks germs, senses touch and helps control temperature. Labels show the named surface regions doctors use.": "La peau, les cheveux et les ongles forment une barrière étanche qui bloque les microbes, perçoit le toucher et aide à régler la température. Les étiquettes montrent les régions de surface utilisées par les médecins.", "Under the skin sits fat for padding and insulation, and fascia: a web of connective tissue that wraps every muscle. Bursae are small fluid sacs that cushion joints.": "Sous la peau se trouvent la graisse, qui protège et isole, et le fascia, un réseau de tissu conjonctif qui enveloppe chaque muscle. Les bourses sont de petits sacs de liquide qui amortissent les articulations.", "Skeletal muscles pull on bones to move you and hold you upright. Each one is named for its shape, position or job.": "Les muscles squelettiques tirent sur les os pour vous faire bouger et vous tenir droit. Chacun est nommé selon sa forme, sa position ou son rôle.", "Tendons (cream) join muscle to bone. Ligaments (pale blue) join bone to bone and hold joints together. Cartilage cushions the joints.": "Les tendons (crème) relient les muscles aux os. Les ligaments (bleu pâle) relient les os entre eux et maintiennent les articulations. Le cartilage les amortit.", "Bones, joints and cartilage give the body its shape, protect the organs, store minerals and make blood cells in the marrow.": "Les os, les articulations et le cartilage donnent sa forme au corps, protègent les organes, stockent les minéraux et fabriquent les cellules sanguines dans la moelle.", "Organs are groups of tissues that do one job: thinking, breathing, pumping blood, digesting, filtering or making hormones.": "Les organes sont des groupes de tissus qui ont une tâche : penser, respirer, pomper le sang, digérer, filtrer ou produire des hormones.", "The brain, spinal cord and nerves carry electrical signals that control movement, feeling and thought.": "Le cerveau, la moelle épinière et les nerfs transmettent des signaux électriques qui contrôlent le mouvement, les sensations et la pensée.", "The heart pumps blood out through arteries and it returns through veins, carrying oxygen and nutrients to every cell.": "Le cœur pompe le sang dans les artères et il revient par les veines, apportant oxygène et nutriments à chaque cellule.", "surface area in an adult": "de surface chez l’adulte", "of body weight": "du poids corporel", "to renew the outer layer": "pour renouveler la couche externe", "main fat types: white and brown": "types de graisse : blanche et brune", "of body fat sits under the skin": "de la graisse se trouve sous la peau", "bursae cushion the joints": "bourses amortissent les articulations", "skeletal muscles": "muscles squelettiques", "types: skeletal, smooth, cardiac": "types : squelettique, lisse, cardiaque", "of body weight in many adults": "du poids corporel chez bien des adultes", "ligaments in the body": "ligaments dans le corps", "main knee ligaments": "ligaments principaux du genou", "the strongest tendon": "le tendon le plus solide", "bones in an adult": "os chez l’adulte", "bones at birth; many fuse": "os à la naissance; plusieurs fusionnent", "bones in each hand": "os dans chaque main", "liver, the largest internal organ": "foie, le plus gros organe interne", "average adult brain": "cerveau adulte moyen", "average adult heart": "cœur adulte moyen", "neurons in the brain": "neurones dans le cerveau", "top speed of nerve signals": "vitesse maximale des signaux nerveux", "spinal cord length": "longueur de la moelle épinière", "heartbeats a day": "battements de cœur par jour", "of blood in an adult": "de sang chez l’adulte", "for blood to circle the body": "pour que le sang fasse le tour du corps", "Full body": "Corps entier", "Head & neck": "Tête et cou", "Chest & belly": "Poitrine et ventre", "Arm": "Bras", "Hand": "Main", "Hips & legs": "Hanches et jambes", "Ankle & foot": "Cheville et pied", "Surface Anatomy": "Anatomie de surface", "Fat & Fascia": "Graisse et fascia", "Muscular System": "Système musculaire", "Tendons & Ligaments": "Tendons et ligaments", "Skeletal System": "Système squelettique", "Internal Organs": "Organes internes", "Tendon loading plan": "Plan de mise en charge du tendon", "Muscle recovery plan": "Plan de récupération musculaire", "Joint care plan": "Plan de soin articulaire", "Back and neck plan": "Plan pour le dos et le cou", "Nerve relief plan": "Plan de soulagement nerveux", "Gentle recovery plan": "Plan de récupération en douceur", "Calm it down": "Calmer la douleur", "Build strength": "Renforcer", "Return to activity": "Reprendre les activités", "Ease the pain": "Apaiser la douleur", "Strengthen": "Renforcer", "Back to full strength": "Retrouver toute sa force", "Keep it moving": "Garder le mouvement", "Support the joint": "Soutenir l’articulation", "Everyday strength": "Force au quotidien", "Settle it down": "Calmer le dos", "Build support": "Bâtir le soutien", "Strong and steady": "Fort et stable", "Take the pressure off": "Relâcher la pression", "Free up movement": "Libérer le mouvement", "Build resilience": "Gagner en résistance", "Rest and protect": "Repos et protection", "Gentle activity": "Activité douce", "Back to normal": "Retour à la normale", "Unlimited pain diary": "Journal de douleur illimité", "Save every check-in and see your progress over time": "Enregistrez chaque suivi et voyez vos progrès au fil du temps", "Full recovery plans": "Plans de rétablissement complets", "All three weeks of guided exercises for your cause": "Les trois semaines d’exercices guidés pour votre cause", "Doctor-ready report": "Rapport pour le médecin", "A one-page summary to bring to your appointment": "Un résumé d’une page à apporter à votre rendez-vous", "Multiple pain spots": "Plusieurs points de douleur", "Track several areas and spot linked pain patterns": "Suivez plusieurs zones et repérez les douleurs liées", "Reminders": "Rappels", "A gentle daily nudge to check in": "Un petit rappel quotidien pour faire votre suivi", "Yearly": "Annuel", "7-day free trial · best value": "Essai gratuit de 7 jours · meilleure valeur", "Monthly": "Mensuel", "Cancel any time": "Annulez en tout temps", "Lifetime": "À vie", "Pay once, keep forever": "Payez une fois, gardez-le pour toujours", "Head": "Tête", "Front of neck": "Avant du cou", "Right shoulder": "Épaule droite", "Left shoulder": "Épaule gauche", "Chest": "Poitrine", "Abdomen": "Abdomen", "Right wrist & hand": "Poignet et main droits", "Left wrist & hand": "Poignet et main gauches", "Right hip & groin": "Hanche et aine droites", "Left hip & groin": "Hanche et aine gauches", "Right knee": "Genou droit", "Left knee": "Genou gauche", "Right shin": "Tibia droit", "Left shin": "Tibia gauche", "Right ankle & foot": "Cheville et pied droits", "Left ankle & foot": "Cheville et pied gauches", "Back of neck": "Arrière du cou", "Upper back": "Haut du dos", "Lower back": "Bas du dos", "Left elbow": "Coude gauche", "Right elbow": "Coude droit", "Left buttock": "Fesse gauche", "Right buttock": "Fesse droite", "Back of left thigh": "Arrière de la cuisse gauche", "Back of right thigh": "Arrière de la cuisse droite", "Left calf": "Mollet gauche", "Right calf": "Mollet droit", "Left heel": "Talon gauche", "Right heel": "Talon droit", "Right upper arm": "Haut du bras droit", "Left upper arm": "Haut du bras gauche", "Right forearm": "Avant-bras droit", "Left forearm": "Avant-bras gauche", "Front of right thigh": "Avant de la cuisse droite", "Front of left thigh": "Avant de la cuisse gauche", "Right ribs": "Côtes droites", "Left ribs": "Côtes gauches", "Back of head": "Arrière de la tête", "Left shoulder blade": "Omoplate gauche", "Right shoulder blade": "Omoplate droite", "Back of left upper arm": "Arrière du haut du bras gauche", "Back of right upper arm": "Arrière du haut du bras droit", "Back of left forearm": "Arrière de l’avant-bras gauche", "Back of right forearm": "Arrière de l’avant-bras droit", "Back of left hand": "Dos de la main gauche", "Back of right hand": "Dos de la main droite", "started with an injury": "a commencé par une blessure", "came on with exercise or overuse": "est apparue avec l’exercice ou la surutilisation", "came on gradually": "est apparue graduellement", "no clear trigger": "sans déclencheur évident", "recent": "récente", "has lasted a long time": "dure depuis longtemps", "worse with movement": "pire en bougeant", "hurts to bear weight": "fait mal en s’appuyant dessus", "tender to press": "sensible à la pression", "stiff after rest": "raide après le repos", "worse at night": "pire la nuit", "worse with long standing or walking": "pire en restant debout ou en marchant longtemps", "swelling": "enflure", "bruising": "ecchymose", "redness or warmth": "rougeur ou chaleur", "fever": "fièvre", "numbness or tingling": "engourdissement ou picotements", "weakness": "faiblesse", "clicking or locking": "clics ou blocage", "common from age 50": "fréquent à partir de 50 ans", "common in active younger people": "fréquent chez les jeunes actifs", "risk rises with age": "le risque augmente avec l’âge", "more common in women": "plus fréquent chez les femmes", "more common in men": "plus fréquent chez les hommes", "typical at this age": "typique à cet âge", "Common": "Fréquent", "Possible": "Possible", "See a doctor": "Consultez un médecin", "Note": "Note", "Strong match": "Forte correspondance", "Good match": "Bonne correspondance", "Possible match": "Correspondance possible", "Prefer not to say": "Préfère ne pas répondre", "burning, tingling or numbness": "brûlure, picotements ou engourdissement", "severe pain": "douleur forte", "year": "an", "years": "ans", "Show demo": "Voir la démo", "Hide demo": "Masquer la démo", "Anterior view": "Vue antérieure", "Posterior view": "Vue postérieure", "Delete my account": "Supprimer mon compte", "This deletes your account, your backup and everything on this phone, and cancels nothing in the app store. To stop paying, cancel your subscription in your App Store or Google Play settings first.": "Cette action supprime votre compte, votre sauvegarde et tout ce qui est sur ce téléphone. Elle n’annule rien dans la boutique d’applications : pour arrêter de payer, annulez d’abord votre abonnement dans les réglages de l’App Store ou de Google Play.", "What we collect and why": "Ce que nous recueillons et pourquoi", "Pain spots, depth, answers and diary entries: to show possible causes and your history.": "Points de douleur, profondeur, réponses et entrées du journal : pour afficher les causes possibles et votre historique.", "Age and gender: to shape the body map and rank causes.": "Âge et genre : pour adapter la carte du corps et classer les causes.", "Email (only with an account): to sign in and back up your diary.": "Courriel (seulement avec un compte) : pour vous connecter et sauvegarder votre journal.", "Purchase status: to unlock Premium.": "Statut d’achat : pour débloquer Premium.", "Anonymous usage counts: to find and fix confusing screens.": "Statistiques d’utilisation anonymes : pour repérer et corriger les écrans difficiles.", "Never collected: your location, contacts or photos (unless you add a photo). No advertising trackers. Never sold.": "Jamais recueillis : votre position, vos contacts ou vos photos (sauf si vous en ajoutez). Aucun traceur publicitaire. Jamais vendus.", "What’s new": "Nouveautés", "Version 1.0": "Version 1.0", "Body map with 8 layers and 500+ named parts, in English and French.": "Carte du corps à 8 couches et plus de 500 parties nommées, en français et en anglais.", "Pain diary with triggers, treatments and insights.": "Journal de douleur avec déclencheurs, traitements et tendances.", "Recovery plans with exercise demos, and a doctor report.": "Plans de rétablissement avec démonstrations d’exercices, et rapport pour le médecin.", "We aim to meet WCAG 2.1 AA. PainMap works with VoiceOver and TalkBack, supports larger text and reduced motion, and every body area can be chosen from a list instead of the drawing. Tell us about any barrier at [ACCESSIBILITY EMAIL].": "Nous visons la conformité WCAG 2.1 AA. PainMap fonctionne avec VoiceOver et TalkBack, prend en charge le texte plus grand et la réduction des animations, et chaque zone du corps peut être choisie dans une liste plutôt que sur le dessin. Signalez-nous tout obstacle à [COURRIEL ACCESSIBILITÉ].", "Setting this up for someone under 16?": "Vous configurez l’application pour une personne de moins de 16 ans ?", "A parent or guardian must set up PainMap and agree to how their information is used.": "Un parent ou tuteur doit configurer PainMap et accepter la façon dont ses renseignements sont utilisés.", "I am the parent or guardian and I agree": "Je suis le parent ou le tuteur et j’accepte", "Your account was deleted": "Votre compte a été supprimé", "A parent or guardian must agree first": "Un parent ou tuteur doit d’abord accepter", "Yearly: free for 7 days, then $69.99 CAD per year. Monthly: $11.99 CAD per month. Prices include no tax; tax is added where it applies. Payment is charged to your App Store or Google Play account. Subscriptions renew automatically unless you cancel at least 24 hours before the end of the trial or period, in your store account settings. Lifetime is a one-time purchase. Terms of use: [TERMS LINK] · Privacy policy: [PRIVACY LINK]": "Annuel : gratuit pendant 7 jours, puis 69,99 $ CA par année. Mensuel : 11,99 $ CA par mois. Les taxes s’ajoutent lorsqu’elles s’appliquent. Le paiement est porté à votre compte App Store ou Google Play. Les abonnements se renouvellent automatiquement à moins d’être annulés au moins 24 heures avant la fin de l’essai ou de la période, dans les réglages de votre compte. L’option À vie est un achat unique. Conditions d’utilisation : [LIEN CONDITIONS] · Politique de confidentialité : [LIEN CONFIDENTIALITÉ]", "$69.99 CAD / year": "69,99 $ CA / an", "$11.99 CAD / month": "11,99 $ CA / mois", "$179.99 CAD once": "179,99 $ CA, une fois", "What it could be": "Ce que ça pourrait être", "See what it could be": "Voir ce que ça pourrait être", "●●● Fits closely": "●●● Correspond bien", "●●○ Fits": "●●○ Correspond", "●○○ Might fit": "●○○ Pourrait correspondre", "Not a diagnosis. Use this to talk with a doctor, nurse or physiotherapist.": "Ce n’est pas un diagnostic. Servez-vous-en pour en parler avec un médecin, une infirmière ou un physiothérapeute.", "Go back": "Retour", "Not sure? Call 811 to talk to a nurse: Health Link in Alberta, Info-Santé in Quebec, HealthLink BC, Health Connect Ontario. Free in most provinces and territories. In an emergency, call 911.": "Vous hésitez ? Composez le 811 pour parler à une infirmière : Info-Santé au Québec, Health Link en Alberta, HealthLink BC, Santé811 en Ontario. Gratuit dans la plupart des provinces et territoires. En cas d’urgence, composez le 911.", "Make the map match you: add your age and gender for a more accurate body and better results.": "Adaptez la carte à vous : ajoutez votre âge et votre genre pour un corps plus juste et de meilleurs résultats.", "Add age and gender": "Ajouter l’âge et le genre", "Show all labels": "Afficher toutes les étiquettes", "Show fewer labels": "Afficher moins d’étiquettes", "Swipe beside the body to scroll": "Glissez à côté du corps pour défiler", "Drag this circle to where it hurts. Let go, then tap Choose.": "Glissez ce cercle là où vous avez mal. Relâchez, puis touchez Choisir.", "Got it": "Compris", "Entries marked “Sample” are examples to show how the diary works.": "Les entrées marquées « Exemple » montrent comment fonctionne le journal.", "Hide examples": "Masquer les exemples", "Show examples": "Afficher les exemples", "No entries yet. Find your spot on the body map, then tap Save to diary on the results screen.": "Aucune entrée pour l’instant. Trouvez votre point sur la carte du corps, puis touchez Enregistrer dans le journal à l’écran des résultats.", "Glad it’s getting better!": "Contents que ça aille mieux !", "Would you rate PainMap? It helps other people find it.": "Voulez-vous évaluer PainMap ? Cela aide d’autres personnes à le trouver.", "Rate PainMap": "Évaluer PainMap", "Thanks! This opens the app store rating in the real app (demo).": "Merci ! Dans la vraie application, ceci ouvre l’évaluation de la boutique (démo).", "Pain report for my appointment": "Rapport de douleur pour mon rendez-vous", "Built from your own entries. Check it, add your questions, then share it.": "Créé à partir de vos propres entrées. Vérifiez-le, ajoutez vos questions, puis partagez-le.", "Where it hurts": "Où ça fait mal", "Recent check-ins": "Suivis récents", "What I reported": "Ce que j’ai signalé", "Possible causes the app suggested": "Causes possibles suggérées par l’application", "Treatments tried": "Traitements essayés", "My questions for the clinician": "Mes questions pour le clinicien", "For example: is it safe to keep running?": "Par exemple : puis-je continuer à courir ?", "Share as PDF": "Partager en PDF", "See the printable layout": "Voir la mise en page imprimable", "Nothing recorded yet.": "Rien d’enregistré pour l’instant.", "Created by the patient with PainMap. General information only, not a diagnosis.": "Créé par le patient avec PainMap. Information générale seulement, pas un diagnostic.", "Pain now": "Douleur actuelle", "Started": "Début", "How long": "Durée", "Worse with": "Aggravée par", "Other symptoms": "Autres symptômes", "Feels like": "Sensation", "Not answered": "Sans réponse", "None": "Aucun", "PDF created. In the real app this opens the share sheet (demo).": "PDF créé. Dans la vraie application, ceci ouvre le menu de partage (démo).", "Open your report": "Ouvrir votre rapport", "I agree to the": "J’accepte les", "Terms of Use": "Conditions d’utilisation", "and": "et la", "Privacy Policy": "Politique de confidentialité", "required": "obligatoire", "optional": "facultatif", "Share anonymous usage stats to help improve PainMap. Never your health entries.": "Partager des statistiques d’utilisation anonymes pour améliorer PainMap. Jamais vos entrées de santé.", "Email me tips and offers. Unsubscribe any time.": "M’envoyer des conseils et des offres par courriel. Désabonnement en tout temps.", "Restore purchases": "Restaurer les achats", "Manage subscription": "Gérer l’abonnement", "Help & feedback": "Aide et commentaires", "Report a problem": "Signaler un problème", "Send feedback": "Envoyer un commentaire", "Include phone model and app version": "Inclure le modèle du téléphone et la version de l’app", "Your diary and health details are never attached.": "Votre journal et vos données de santé ne sont jamais joints.", "Send": "Envoyer", "Medical sources": "Sources médicales", "PainMap’s information is based on these guidelines and clinical rules. It is general information, not a diagnosis.": "L’information de PainMap s’appuie sur ces lignes directrices et règles cliniques. C’est de l’information générale, pas un diagnostic.", "Reference list for clinician review. Confirm the current edition of each source before launch.": "Liste de références à faire réviser par un clinicien. Confirmez l’édition actuelle de chaque source avant le lancement.", "Content last reviewed: [DATE] by [CLINICIAN NAME, CREDENTIALS].": "Contenu révisé le [DATE] par [NOM DU CLINICIEN, TITRES].", "Get a gentle daily reminder?": "Recevoir un léger rappel quotidien ?", "One short notification at the time you pick, to log your pain. It never shows health details on the lock screen.": "Une courte notification à l’heure choisie pour noter votre douleur. Aucun détail de santé n’apparaît sur l’écran verrouillé.", "Allow notifications": "Autoriser les notifications", "Please agree to the Terms of Use and Privacy Policy first": "Veuillez d’abord accepter les conditions d’utilisation et la politique de confidentialité", "Opens painmap.ca/terms (demo)": "Ouvre painmap.ca/conditions (démo)", "Opens painmap.ca/privacy (demo)": "Ouvre painmap.ca/confidentialite (démo)", "Checking the App Store for past purchases… (demo)": "Recherche de vos achats précédents dans l’App Store… (démo)", "Opens your App Store subscriptions (demo)": "Ouvre vos abonnements de l’App Store (démo)", "What went wrong?": "Qu’est-ce qui n’a pas fonctionné ?", "What would make PainMap better?": "Qu’est-ce qui rendrait PainMap meilleure ?", "What you tapped, and what happened": "Ce que vous avez touché, et ce qui s’est passé", "Your idea": "Votre idée", "Write a few words first": "Écrivez quelques mots d’abord", "Thanks! We read every message.": "Merci! Nous lisons chaque message.", "Reminders on. Your phone will ask once to allow notifications.": "Rappels activés. Votre téléphone vous demandera une fois d’autoriser les notifications.", "Low back pain and sciatica": "Mal de dos et sciatique", "Low back pain": "Mal de dos", "Imaging": "Imagerie", "Ankle and foot injuries": "Blessures à la cheville et au pied", "Knee injuries": "Blessures au genou", "Neck injuries": "Blessures au cou", "Ankle sprain": "Entorse de la cheville", "Osteoarthritis": "Arthrose", "Heart and stroke warning signs": "Signes d’alerte de crise cardiaque et d’AVC", "Nurse advice lines": "Lignes infirmières", "Red flags, staying active, and when to see a clinician for back pain and sciatica.": "Signes d’alerte, rester actif et quand consulter pour le mal de dos et la sciatique.", "Canadian primary-care guidance on self-care and imaging for back pain.": "Orientation canadienne en soins primaires sur les soins personnels et l’imagerie pour le mal de dos.", "When an X-ray or scan is and is not usually needed.": "Quand une radiographie ou un examen d’imagerie est habituellement nécessaire, ou non.", "When an ankle or foot injury needs an X-ray.": "Quand une blessure à la cheville ou au pied nécessite une radiographie.", "When a knee injury needs an X-ray.": "Quand une blessure au genou nécessite une radiographie.", "Neck pain after a fall or accident: when to get emergency care.": "Douleur au cou après une chute ou un accident : quand obtenir des soins d’urgence.", "Protect, compress, elevate, then balance and strength exercises.": "Protéger, comprimer, surélever, puis exercices d’équilibre et de force.", "Exercise and low-impact activity for joint pain.": "Exercice et activité à faible impact pour la douleur articulaire.", "Chest pain and stroke red flags that call for 911.": "Douleur thoracique et signes d’AVC qui exigent le 911.", "Which number to call for non-emergency advice in each province.": "Quel numéro appeler pour des conseils non urgents dans chaque province.", "Find it": "Trouvez-la", "Track it": "Suivez-la", "Fix it": "Soignez-la", "Drag the locator over a detailed body map, from skin down to bone, to pinpoint exactly where it hurts.": "Glissez le localisateur sur une carte détaillée du corps, de la peau jusqu’aux os, pour trouver exactement où ça fait mal.", "Log your pain in a diary and see whether it is getting better, with triggers and treatments.": "Notez votre douleur dans un journal et voyez si elle s’améliore, avec ses déclencheurs et vos traitements.", "Get possible causes, warning signs and a guided recovery plan, and a report to share with your doctor.": "Obtenez des causes possibles, des signes d’alerte, un plan de récupération guidé et un rapport à montrer à votre médecin.", "Next": "Suivant", "Get started": "Commencer", "or": "ou", "Main": "Navigation principale", "Line chart of pain score over time": "Graphique linéaire du score de douleur au fil du temps", "Your progress": "Vos progrès", "Left vs right": "Gauche ou droite", "Average pain from your check-ins. One side much worse often points to an injury or overuse; both sides alike can point to arthritis.": "Douleur moyenne selon vos bilans. Un côté bien pire indique souvent une blessure ou une surutilisation; deux côtés semblables peuvent indiquer de l’arthrite.", "Flare-up outlook": "Risque de poussée", "See tomorrow’s flare-up outlook, based on your own triggers like sleep, stress and activity.": "Voyez le risque de poussée pour demain, selon vos propres déclencheurs comme le sommeil, le stress et l’activité.", "Unlock with Premium": "Débloquer avec Premium", "Holding steady": "Stable", "check-in": "bilan", "check-ins": "bilans", "treatment that helped": "traitement utile", "treatments that helped": "traitements utiles", "exercise done": "exercice fait", "exercises done": "exercices faits", "Not enough data yet": "Pas encore assez de données", "Higher chance of a flare-up tomorrow": "Risque plus élevé de poussée demain", "Low chance of a flare-up tomorrow": "Faible risque de poussée demain", "Tag a few check-ins with what happened that day, like sleep or activity, and PainMap will learn your triggers.": "Notez ce qui s’est passé lors de quelques bilans, comme le sommeil ou l’activité, et PainMap apprendra vos déclencheurs.", "Open the 360° body": "Ouvrir le corps à 360°", "Back to the body map": "Retour à la carte du corps", "Introduction progress": "Progression de l’introduction", "Before you start": "Avant de commencer", "Three things to know. Please read them, then tick the box to continue.": "Trois choses à savoir. Lisez-les, puis cochez la case pour continuer.", "It is not a diagnosis.": "Ce n’est pas un diagnostic.", "PainMap suggests what your pain could be and helps you explain it. Only a clinician can diagnose you.": "PainMap suggère ce que pourrait être votre douleur et vous aide à l’expliquer. Seul un clinicien peut poser un diagnostic.", "In an emergency, call 911.": "En cas d’urgence, composez le 911.", "For chest pain, trouble breathing, sudden weakness or a serious injury, don’t use the app. For advice, call 811.": "En cas de douleur à la poitrine, de difficulté à respirer, de faiblesse soudaine ou de blessure grave, n’utilisez pas l’application. Pour des conseils, composez le 811.", "Your data stays yours.": "Vos données vous appartiennent.", "Your diary is private, stored in Canada and never sold.": "Votre journal est privé, stocké au Canada et jamais vendu.", "I understand PainMap is not a diagnosis, and I will call 911 in an emergency.": "Je comprends que PainMap n’est pas un diagnostic et que je composerai le 911 en cas d’urgence.", "Replay the introduction": "Revoir l’introduction", "Next: about you": "Suivant : à propos de vous", "Start finding my pain": "Commencer à trouver ma douleur", "Next: before you start": "Suivant : avant de commencer", "Step": "Étape", "of 5": "sur 5", "Spin the body and tap where it hurts": "Tournez le corps et touchez où ça fait mal", "Drag sideways to spin · tap to mark the spot": "Glissez sur le côté pour tourner · touchez pour marquer", "Turn the body": "Tourner le corps", "Names": "Noms", "Turn 45 degrees left": "Tourner de 45 degrés à gauche", "Turn 45 degrees right": "Tourner de 45 degrés à droite", "Rotate": "Rotation", "Tap anywhere on the body to drop a pin. Spin it first to reach the back or sides.": "Touchez le corps n’importe où pour placer une épingle. Tournez-le d’abord pour atteindre le dos ou les côtés.", "Your spot": "Votre point", "Choose this spot": "Choisir ce point", "Turn to face it": "Le mettre de face", "Right side": "Côté droit", "Left side": "Côté gauche", "Turning": "En rotation", "Body turned to": "Corps tourné à", "Muscles": "Muscles", "Skeleton": "Squelette", "The pin is on the far side. Spin the body to see it.": "L’épingle est de l’autre côté. Tournez le corps pour la voir.", "Spin to check it from another side, or tap again to move it.": "Tournez pour vérifier sous un autre angle, ou touchez de nouveau pour le déplacer.", "Recovery plan and doctor report": "Plan de rétablissement et rapport pour le médecin"});
const tr = (en, lang) => (lang === 'fr' && FR[en]) || en;
// DRAFT French medical content (conditions, red flags, patterns, plans, facts).
// Machine-assisted draft: must be reviewed by a licensed Canadian clinician before launch.
const FR_MED = {"Your skull is made of 22 bones, and your brain uses about 20% of your body’s energy.": "Votre crâne compte 22 os, et votre cerveau utilise environ 20 % de l’énergie de votre corps.", "Your neck has 7 vertebrae, the same number as a giraffe.": "Votre cou compte 7 vertèbres, autant que celui d’une girafe.", "The shoulder is the most mobile joint in the body, which also makes it the easiest to dislocate.": "L’épaule est l’articulation la plus mobile du corps, ce qui la rend aussi la plus facile à disloquer.", "Your heart sits only slightly left of centre, tucked behind the breastbone.": "Votre cœur n’est que légèrement à gauche du centre, caché derrière le sternum.", "Your small intestine is about 6 metres long, folded up behind your belly button.": "Votre intestin grêle mesure environ 6 mètres, replié derrière votre nombril.", "Each wrist has 8 small carpal bones arranged in two rows.": "Chaque poignet compte 8 petits os du carpe disposés en deux rangées.", "The hip is a ball-and-socket joint that takes several times your body weight when you run.": "La hanche est une articulation à rotule qui supporte plusieurs fois votre poids quand vous courez.", "The knee is the largest joint in the body.": "Le genou est la plus grosse articulation du corps.", "The tibia carries most of your body weight below the knee.": "Le tibia porte la majeure partie de votre poids sous le genou.", "Most ankle sprains happen on the outside, when the foot rolls inward.": "La plupart des entorses de la cheville touchent l’extérieur, quand le pied roule vers l’intérieur.", "Each of the 12 vertebrae in your mid-back connects to a pair of ribs.": "Chacune des 12 vertèbres du milieu du dos s’attache à une paire de côtes.", "About 4 in 5 adults have lower back pain at some point in their lives.": "Environ 4 adultes sur 5 auront mal au bas du dos à un moment de leur vie.", "The “funny bone” is not a bone. It is the ulnar nerve running close to the surface.": "Le « petit juif » n’est pas un os. C’est le nerf ulnaire qui passe près de la surface.", "The gluteus maximus is the largest muscle in the body.": "Le grand fessier est le plus gros muscle du corps.", "The hamstrings are three muscles that cross both the hip and the knee.": "Les ischiojambiers sont trois muscles qui croisent à la fois la hanche et le genou.", "Your calf muscles join to form the Achilles, the strongest tendon in the body.": "Les muscles du mollet se rejoignent pour former le tendon d’Achille, le plus solide du corps.", "Your heel takes more than your body weight with every walking step.": "Votre talon supporte plus que votre poids à chaque pas.", "Bruise (contusion)": "Ecchymose (contusion)", "Bleeding under the skin after a knock. Tender and discoloured, fading over 1 to 2 weeks.": "Saignement sous la peau après un coup. Sensible et décoloré, s’estompe en 1 à 2 semaines.", "Ice for 15 minutes at a time, gentle compression and rest.": "De la glace 15 minutes à la fois, une légère compression et du repos.", "Skin irritation or rash": "Irritation ou éruption cutanée", "Contact dermatitis, a scrape or an insect bite can sting, itch or burn on the surface.": "Une dermatite de contact, une éraflure ou une piqûre d’insecte peut piquer, démanger ou brûler en surface.", "Keep it clean, avoid the trigger, and try a fragrance-free moisturiser.": "Gardez la zone propre, évitez le déclencheur et essayez une crème hydratante sans parfum.", "Shingles": "Zona", "A burning or tingling band of pain on one side of the body, often followed by a blistering rash.": "Une bande de douleur brûlante ou de picotements d’un seul côté du corps, souvent suivie d’éruptions avec cloques.", "See a doctor within 3 days of the rash appearing. Antiviral medicine works best early.": "Consultez un médecin dans les 3 jours suivant l’apparition de l’éruption. Les antiviraux agissent mieux tôt.", "Deep bruise (haematoma)": "Ecchymose profonde (hématome)", "A pocket of blood under the skin after an impact, felt as a firm, sore swelling.": "Une poche de sang sous la peau après un impact, ressentie comme une enflure ferme et douloureuse.", "Rest, ice and elevation for the first 48 hours.": "Repos, glace et élévation pendant les 48 premières heures.", "Fascia tightness": "Tension du fascia", "The connective tissue wrapping your muscles can get tight and sore after overuse or sitting in one position.": "Le tissu conjonctif qui enveloppe vos muscles peut devenir tendu et douloureux après un surmenage ou une position prolongée.", "Gentle movement, heat, light massage or foam rolling.": "Mouvement doux, chaleur, massage léger ou rouleau de massage.", "Skin infection (cellulitis)": "Infection de la peau (cellulite infectieuse)", "Warm, red, swollen skin that spreads and may come with a fever.": "Peau chaude, rouge et enflée qui s’étend et peut s’accompagner de fièvre.", "See a doctor promptly. It usually needs antibiotics.": "Consultez un médecin rapidement. Des antibiotiques sont habituellement nécessaires.", "Muscle strain": "Élongation musculaire", "Overstretched or torn muscle fibres. Hurts when you tense or stretch the muscle.": "Fibres musculaires étirées ou déchirées. Fait mal quand vous contractez ou étirez le muscle.", "Relative rest for 2 to 3 days, then gentle stretching and a gradual return to activity.": "Repos relatif pendant 2 à 3 jours, puis étirements doux et retour progressif à l’activité.", "Post-exercise soreness (DOMS)": "Courbatures après l’effort", "A dull, spread-out ache 1 to 3 days after new or hard exercise.": "Une douleur sourde et diffuse 1 à 3 jours après un exercice nouveau ou intense.", "Light activity, fluids and time. It usually settles within a few days.": "Activité légère, liquides et temps. Ça passe habituellement en quelques jours.", "Cramp or spasm": "Crampe ou spasme", "A sudden, tight, involuntary contraction that can leave the muscle sore afterwards.": "Une contraction soudaine, serrée et involontaire qui peut laisser le muscle endolori ensuite.", "Gently stretch and massage the muscle, and stay hydrated.": "Étirez et massez doucement le muscle, et restez bien hydraté.", "Tendinopathy (tendinitis)": "Tendinopathie (tendinite)", "An overloaded tendon. Pain where muscle meets bone, often worse when you start moving.": "Un tendon surchargé. Douleur là où le muscle rejoint l’os, souvent pire au début du mouvement.", "Ease off the activity that triggers it, then strengthen gradually.": "Réduisez l’activité qui la déclenche, puis renforcez progressivement.", "Ligament sprain": "Entorse ligamentaire", "A stretched or torn ligament after a twist or awkward landing. Swelling and a wobbly feeling are common.": "Un ligament étiré ou déchiré après une torsion ou une mauvaise réception. Enflure et sensation d’instabilité fréquentes.", "Protect, rest, ice, compress and elevate for 48 hours.": "Protéger, reposer, glacer, comprimer et surélever pendant 48 heures.", "Bursitis": "Bursite", "An inflamed fluid sac near a joint. Tender to press and sore when you lie on it.": "Une poche de liquide enflammée près d’une articulation. Sensible au toucher et douloureuse quand vous vous couchez dessus.", "Avoid pressure on the area, rest and ice.": "Évitez la pression sur la zone, reposez-vous et appliquez de la glace.", "Bone bruise": "Contusion osseuse", "A deep, aching injury to the bone after a hard impact, without a break.": "Une blessure profonde et douloureuse de l’os après un impact important, sans fracture.", "Rest and protect it. It can take several weeks to settle.": "Reposez et protégez la zone. La guérison peut prendre plusieurs semaines.", "Stress fracture": "Fracture de stress", "A tiny crack from repeated impact. Pain builds with activity and one spot is very tender to press.": "Une petite fissure causée par des impacts répétés. La douleur augmente avec l’activité et un point précis est très sensible.", "Stop impact activity and see a doctor. It may need an X-ray or scan.": "Arrêtez les activités à impact et consultez un médecin. Une radiographie ou un examen d’imagerie peut être nécessaire.", "Osteoarthritis": "Arthrose", "Wear in the joint cartilage. Stiff in the morning or after resting, achy with use.": "Usure du cartilage de l’articulation. Raideur le matin ou après le repos, douleur à l’usage.", "Regular low-impact movement and strengthening.": "Mouvement régulier à faible impact et renforcement.", "Organs are an unlikely cause here": "Les organes sont une cause peu probable ici", "There are no major organs in this part of the body, so deep pain here more likely comes from bone, joint or nerve.": "Il n’y a pas d’organe majeur dans cette partie du corps; une douleur profonde vient donc plus probablement de l’os, de l’articulation ou d’un nerf.", "Try the Bone layer, or add Burning or Tingling if that matches how it feels.": "Essayez la couche Os, ou ajoutez Brûlure ou Picotements si cela correspond à ce que vous ressentez.", "Tension headache": "Céphalée de tension", "Band-like pressure around the forehead, temples or back of the head.": "Une pression en bandeau autour du front, des tempes ou de l’arrière de la tête.", "Rest, fluids, screen breaks and gentle neck stretches.": "Repos, liquides, pauses d’écran et étirements doux du cou.", "Jaw joint (TMJ) pain": "Douleur de l’articulation de la mâchoire (ATM)", "An ache near the ear and jaw, worse when chewing, sometimes with clicking.": "Une douleur près de l’oreille et de la mâchoire, pire en mastiquant, parfois avec des claquements.", "Soft foods, and try not to clench your teeth.": "Aliments mous, et essayez de ne pas serrer les dents.", "Sinus pressure": "Pression des sinus", "Pressure behind the forehead or cheeks, worse bending forward, often with a cold.": "Une pression derrière le front ou les joues, pire en se penchant, souvent avec un rhume.", "Steam and fluids. See a doctor if it lasts more than 10 days.": "Vapeur et liquides. Consultez un médecin si ça dure plus de 10 jours.", "Migraine": "Migraine", "A throbbing headache, often on one side, with sensitivity to light or sound, or nausea.": "Un mal de tête pulsatile, souvent d’un seul côté, avec sensibilité à la lumière ou au bruit, ou nausées.", "Rest in a dark, quiet room, and keep a diary of triggers.": "Reposez-vous dans une pièce sombre et calme, et tenez un journal des déclencheurs.", "Sinusitis": "Sinusite", "Pressure and pain behind the eyes, cheeks or forehead, often after a cold.": "Pression et douleur derrière les yeux, les joues ou le front, souvent après un rhume.", "Steam, fluids and rest. See a doctor if it lasts more than 10 days.": "Vapeur, liquides et repos. Consultez un médecin si ça dure plus de 10 jours.", "Neck strain or tension": "Tension ou étirement du cou", "A stiff, achy neck, often from posture, screens or sleeping awkwardly.": "Un cou raide et douloureux, souvent à cause de la posture, des écrans ou d’une mauvaise position de sommeil.", "Heat, gentle neck movement and regular screen breaks.": "Chaleur, mouvements doux du cou et pauses d’écran régulières.", "Wry neck (torticollis)": "Torticolis", "Waking up with your neck stuck turned to one side.": "Se réveiller avec le cou bloqué tourné d’un côté.", "Heat and gentle movement. It usually eases in a few days.": "Chaleur et mouvement doux. Ça s’améliore habituellement en quelques jours.", "Neck joint wear (cervical spondylosis)": "Usure des articulations du cou (spondylose cervicale)", "Age-related changes in the neck joints causing stiffness and grinding.": "Des changements liés à l’âge dans les articulations du cou causant raideur et craquements.", "Keep the neck moving and do strengthening exercises.": "Gardez le cou en mouvement et faites des exercices de renforcement.", "Whiplash injury": "Coup de fouet cervical", "Neck pain and stiffness after a car accident or a sudden jolt.": "Douleur et raideur au cou après un accident de voiture ou une secousse soudaine.", "Get it checked, especially if there is numbness or severe pain.": "Faites-le évaluer, surtout en cas d’engourdissement ou de douleur intense.", "Sore throat or tonsillitis": "Mal de gorge ou amygdalite", "Pain at the front of the neck when swallowing, often with a cold.": "Douleur à l’avant du cou en avalant, souvent avec un rhume.", "Fluids, rest and lozenges. See a doctor if it lasts over a week or swallowing is hard.": "Liquides, repos et pastilles. Consultez un médecin si ça dure plus d’une semaine ou s’il est difficile d’avaler.", "Swollen lymph nodes": "Ganglions enflés", "Tender lumps at the side of the neck while your body fights an infection.": "Des bosses sensibles sur le côté du cou pendant que votre corps combat une infection.", "They usually settle within 2 weeks. See a doctor if they keep growing.": "Ils diminuent habituellement en 2 semaines. Consultez un médecin s’ils continuent de grossir.", "Thyroid problem": "Problème de thyroïde", "A swelling at the front of the neck, below the Adam’s apple.": "Une enflure à l’avant du cou, sous la pomme d’Adam.", "See a doctor. A blood test can check your thyroid.": "Consultez un médecin. Une prise de sang peut vérifier votre thyroïde.", "Rotator cuff tendinopathy": "Tendinopathie de la coiffe des rotateurs", "An ache on the outer shoulder, worse reaching overhead or lying on that side.": "Une douleur à l’extérieur de l’épaule, pire en levant le bras au-dessus de la tête ou en dormant de ce côté.", "Avoid overhead reaching for now, then gentle strengthening.": "Évitez de lever le bras au-dessus de la tête pour l’instant, puis renforcez doucement.", "Shoulder impingement": "Accrochage de l’épaule", "A pinching pain when you lift your arm between waist and head height.": "Une douleur de pincement quand vous levez le bras entre la taille et la tête.", "Posture work and shoulder blade strengthening.": "Travail de posture et renforcement de l’omoplate.", "Rotator cuff tear": "Déchirure de la coiffe des rotateurs", "Weakness lifting the arm, often after a fall or in people over 40.": "Faiblesse pour lever le bras, souvent après une chute ou chez les plus de 40 ans.", "See a clinician for an assessment.": "Consultez un clinicien pour une évaluation.", "Frozen shoulder": "Capsulite rétractile (épaule gelée)", "Pain and stiffness that build over months until the shoulder barely moves.": "Douleur et raideur qui augmentent sur plusieurs mois jusqu’à ce que l’épaule bouge à peine.", "Gentle range-of-motion exercises. A clinician can guide treatment.": "Exercices doux d’amplitude de mouvement. Un clinicien peut guider le traitement.", "AC joint sprain": "Entorse acromio-claviculaire", "Pain on top of the shoulder after falling onto it.": "Douleur sur le dessus de l’épaule après une chute sur celle-ci.", "Short rest, ice, and see a clinician if there is a bump.": "Court repos, glace, et consultez un clinicien s’il y a une bosse.", "Chest muscle strain": "Élongation d’un muscle de la poitrine", "Sore when you press the area, twist or lift, often after exercise or heavy coughing.": "Douloureux quand vous appuyez sur la zone, vous tournez ou soulevez, souvent après l’exercice ou une forte toux.", "Rest from heavy pushing and use heat.": "Évitez de pousser des charges lourdes et utilisez la chaleur.", "Costochondritis": "Costochondrite", "Tenderness where the ribs join the breastbone, worse with deep breaths.": "Sensibilité là où les côtes rejoignent le sternum, pire en respirant profondément.", "Rest and heat. It usually settles within weeks.": "Repos et chaleur. Ça passe habituellement en quelques semaines.", "Rib fracture": "Fracture de côte", "Sharp pain when breathing after a fall or blow to the chest.": "Douleur vive en respirant après une chute ou un coup à la poitrine.", "See a doctor, especially if you feel short of breath.": "Consultez un médecin, surtout si vous êtes essoufflé.", "Heart pain (angina or heart attack)": "Douleur cardiaque (angine ou crise cardiaque)", "Pressure, squeezing or heaviness in the chest, sometimes spreading to the arm, jaw or back.": "Pression, serrement ou lourdeur dans la poitrine, parfois vers le bras, la mâchoire ou le dos.", "Call emergency services if it is new, severe, or does not settle with rest.": "Appelez les services d’urgence si c’est nouveau, intense ou que ça ne passe pas au repos.", "Acid reflux (heartburn)": "Reflux acide (brûlures d’estomac)", "A burning feeling behind the breastbone, often after meals or when lying down.": "Une sensation de brûlure derrière le sternum, souvent après les repas ou en position couchée.", "Smaller meals and not eating late. Antacids can help.": "Des repas plus petits et ne pas manger tard. Les antiacides peuvent aider.", "Chest infection or pleurisy": "Infection pulmonaire ou pleurésie", "Sharp pain when breathing in, often with a cough or fever.": "Douleur vive en inspirant, souvent avec de la toux ou de la fièvre.", "See a doctor.": "Consultez un médecin.", "Abdominal muscle strain": "Élongation d’un muscle abdominal", "Sore when you sit up, twist or laugh, often after exercise.": "Douloureux quand vous vous redressez, tournez ou riez, souvent après l’exercice.", "Rest from core work and keep gently moving.": "Évitez les exercices du tronc et continuez à bouger doucement.", "Hernia": "Hernie", "A bulge in the belly or groin that aches, especially when lifting or coughing.": "Une bosse au ventre ou à l’aine qui fait mal, surtout en soulevant ou en toussant.", "See a doctor, and go urgently if it turns hard or very painful.": "Consultez un médecin, et allez-y d’urgence si elle devient dure ou très douloureuse.", "Pain from an internal organ": "Douleur provenant d’un organe interne", "Deep belly pain is often not from muscle or bone. Try the Organs layer for likely causes.": "Une douleur profonde au ventre ne vient souvent pas des muscles ou des os. Essayez la couche Organes pour les causes probables.", "See a doctor if it is severe, lasts, or comes with fever or vomiting.": "Consultez un médecin si c’est intense, persistant, ou accompagné de fièvre ou de vomissements.", "Indigestion or gastritis": "Indigestion ou gastrite", "A burning or gnawing ache in the upper belly, often linked to meals.": "Une douleur brûlante ou rongeante dans le haut du ventre, souvent liée aux repas.", "Smaller meals, less alcohol and spicy food. See a doctor if it keeps coming back.": "Repas plus petits, moins d’alcool et d’aliments épicés. Consultez un médecin si ça revient souvent.", "Trapped wind or constipation": "Gaz ou constipation", "Crampy, moving belly pain with bloating.": "Douleur abdominale crampante qui se déplace, avec ballonnements.", "Fluids, fibre and gentle walking.": "Liquides, fibres et marche douce.", "Gallstones": "Calculs biliaires", "Pain under the right ribs, often after fatty meals, sometimes spreading to the shoulder blade.": "Douleur sous les côtes droites, souvent après un repas gras, parfois vers l’omoplate.", "Appendicitis": "Appendicite", "Pain that starts near the belly button, moves to the lower right and keeps getting worse.": "Une douleur qui commence près du nombril, descend en bas à droite et ne cesse d’empirer.", "Seek urgent care.": "Obtenez des soins urgents.", "Upper back strain": "Élongation du haut du dos", "An ache between the shoulder blades, often from posture or lifting.": "Une douleur entre les omoplates, souvent à cause de la posture ou d’un soulèvement.", "Movement breaks, heat and shoulder blade exercises.": "Pauses de mouvement, chaleur et exercices pour les omoplates.", "Muscle knot (trigger point)": "Nœud musculaire (point gâchette)", "A tight, tender spot that may send pain elsewhere when pressed.": "Un point tendu et sensible qui peut envoyer de la douleur ailleurs quand on appuie.", "Massage, heat and gentle stretching.": "Massage, chaleur et étirements doux.", "Mid-back joint stiffness": "Raideur des articulations du milieu du dos", "A deep ache and stiffness in the middle of the back that eases as you move.": "Une douleur profonde et une raideur au milieu du dos qui diminuent en bougeant.", "Mobility exercises and gentle twisting stretches.": "Exercices de mobilité et étirements en rotation doux.", "Gallbladder pain": "Douleur de la vésicule biliaire", "Gallbladder pain can spread to the right shoulder blade, often after fatty meals.": "La douleur de la vésicule biliaire peut s’étendre à l’omoplate droite, souvent après un repas gras.", "Heart pain": "Douleur cardiaque", "Heart problems are sometimes felt between the shoulder blades.": "Les problèmes cardiaques se font parfois sentir entre les omoplates.", "Get urgent help if it comes with chest pressure, breathlessness or sweating.": "Obtenez de l’aide d’urgence si c’est accompagné de pression thoracique, d’essoufflement ou de sueurs.", "Lower back strain": "Élongation du bas du dos", "Aching, tight muscles beside the spine, often after lifting or bending.": "Muscles douloureux et tendus à côté de la colonne, souvent après avoir soulevé ou s’être penché.", "Stay gently active and use heat. Avoid bed rest.": "Restez doucement actif et utilisez la chaleur. Évitez le repos au lit.", "Muscle spasm": "Spasme musculaire", "A sudden locking pain that makes it hard to straighten up.": "Une douleur soudaine qui bloque et rend difficile de se redresser.", "Heat, gentle walking and slow movement.": "Chaleur, marche douce et mouvements lents.", "Disc bulge or herniation": "Bombement ou hernie discale", "Deep back pain, sometimes with pain shooting into the buttock or leg.": "Douleur profonde au dos, parfois avec une douleur qui descend dans la fesse ou la jambe.", "Keep moving within comfort. See a clinician if leg pain or numbness lasts.": "Continuez de bouger selon votre confort. Consultez un clinicien si la douleur à la jambe ou l’engourdissement persiste.", "Facet joint irritation": "Irritation des facettes articulaires", "An ache on one side of the spine, worse leaning back or twisting.": "Une douleur d’un côté de la colonne, pire en se penchant vers l’arrière ou en tournant.", "Gentle mobility exercises and heat.": "Exercices de mobilité doux et chaleur.", "Sacroiliac (SI) joint pain": "Douleur de l’articulation sacro-iliaque", "Pain low on one side, near the dimple above the buttock.": "Douleur basse d’un côté, près de la fossette au-dessus de la fesse.", "Core and hip strengthening.": "Renforcement du tronc et des hanches.", "Kidney stone": "Calcul rénal", "Severe pain in the side or back that comes in waves, sometimes moving to the groin.": "Douleur intense au flanc ou au dos qui vient par vagues, parfois vers l’aine.", "See a doctor, and go urgently if you have a fever or cannot pee.": "Consultez un médecin, et allez-y d’urgence si vous faites de la fièvre ou ne pouvez pas uriner.", "Kidney infection": "Infection rénale", "Pain in the side or back with fever, chills, or burning when you pee.": "Douleur au flanc ou au dos avec fièvre, frissons ou brûlure en urinant.", "See a doctor the same day.": "Consultez un médecin le jour même.", "Tennis elbow": "Épicondylite latérale (tennis elbow)", "Pain on the outer elbow when gripping, lifting or typing.": "Douleur à l’extérieur du coude en serrant, en soulevant ou en tapant au clavier.", "Rest from gripping, then forearm strengthening.": "Évitez de serrer, puis renforcez l’avant-bras.", "Golfer’s elbow": "Épicondylite médiale (coude du golfeur)", "Pain on the inner elbow, worse when gripping or bending the wrist.": "Douleur à l’intérieur du coude, pire en serrant ou en pliant le poignet.", "Rest, then gradual forearm strengthening.": "Repos, puis renforcement progressif de l’avant-bras.", "Elbow bursitis": "Bursite du coude", "A soft swelling on the point of the elbow.": "Une enflure molle sur la pointe du coude.", "Avoid leaning on it. See a doctor if it is red or hot.": "Évitez de vous appuyer dessus. Consultez un médecin si c’est rouge ou chaud.", "De Quervain’s tenosynovitis": "Ténosynovite de De Quervain", "Pain on the thumb side of the wrist, worse gripping or lifting.": "Douleur du côté du pouce au poignet, pire en serrant ou en soulevant.", "Rest the thumb. A splint can help.": "Reposez le pouce. Une attelle peut aider.", "Wrist sprain": "Entorse du poignet", "Pain and swelling after a fall onto an outstretched hand.": "Douleur et enflure après une chute sur la main tendue.", "Rest, ice and compression.": "Repos, glace et compression.", "Scaphoid fracture": "Fracture du scaphoïde", "Pain in the hollow at the base of the thumb after a fall. Easy to miss.": "Douleur dans le creux à la base du pouce après une chute. Facile à manquer.", "Get an X-ray, even if it seems mild.": "Passez une radiographie, même si ça semble léger.", "Thumb base arthritis": "Arthrose de la base du pouce", "Aching at the base of the thumb when pinching or opening jars.": "Douleur à la base du pouce en pinçant ou en ouvrant des pots.", "Splints and hand exercises.": "Attelles et exercices pour la main.", "Hip flexor strain": "Élongation des fléchisseurs de la hanche", "Pain at the front of the hip or groin when lifting the knee.": "Douleur à l’avant de la hanche ou à l’aine en levant le genou.", "Rest from kicking or sprinting, then gentle stretches.": "Évitez de frapper du pied ou de sprinter, puis étirements doux.", "Groin strain": "Élongation de l’aine", "Pain in the inner thigh after quick changes of direction.": "Douleur à l’intérieur de la cuisse après des changements de direction rapides.", "Rest, then gradual strengthening.": "Repos, puis renforcement progressif.", "Hip osteoarthritis": "Arthrose de la hanche", "A groin ache and stiffness, with trouble putting on socks or shoes.": "Douleur à l’aine et raideur, avec difficulté à mettre ses bas ou ses chaussures.", "Low-impact exercise like cycling or swimming.": "Exercice à faible impact comme le vélo ou la natation.", "Hip labral tear": "Déchirure du labrum de la hanche", "Deep groin pain with clicking or catching.": "Douleur profonde à l’aine avec claquements ou accrochages.", "Bladder infection (UTI)": "Infection urinaire (cystite)", "A low belly or groin ache with burning or needing to pee often.": "Douleur au bas du ventre ou à l’aine avec brûlure ou besoin fréquent d’uriner.", "Drink plenty of water and see a doctor. It may need antibiotics.": "Buvez beaucoup d’eau et consultez un médecin. Des antibiotiques peuvent être nécessaires.", "Inguinal hernia": "Hernie inguinale", "A bulge in the groin that aches when lifting, coughing or standing.": "Une bosse à l’aine qui fait mal en soulevant, en toussant ou debout.", "Piriformis syndrome": "Syndrome du piriforme", "A deep buttock ache, sometimes with pain down the back of the leg.": "Une douleur profonde à la fesse, parfois avec une douleur à l’arrière de la jambe.", "Hip stretches and strengthening. Avoid sitting for long.": "Étirements et renforcement des hanches. Évitez de rester assis longtemps.", "Glute strain": "Élongation d’un muscle fessier", "Soreness in the buttock after running, climbing or lifting.": "Douleur à la fesse après la course, l’escalade ou un soulèvement.", "Rest, then gradual glute exercises.": "Repos, puis exercices progressifs des fessiers.", "Gluteal tendinopathy": "Tendinopathie des fessiers", "Pain on the outer hip, worse lying on that side or climbing stairs.": "Douleur à l’extérieur de la hanche, pire en dormant de ce côté ou en montant l’escalier.", "Avoid crossing your legs, and strengthen the glutes.": "Évitez de croiser les jambes et renforcez les fessiers.", "Hamstring strain": "Élongation des ischiojambiers", "A sudden pull at the back of the thigh while sprinting or kicking.": "Un tiraillement soudain à l’arrière de la cuisse en sprintant ou en frappant du pied.", "Rest, then gentle stretching and strengthening. Avoid sprinting for a few weeks.": "Repos, puis étirements et renforcement doux. Évitez de sprinter pendant quelques semaines.", "High hamstring tendinopathy": "Tendinopathie proximale des ischiojambiers", "A deep ache at the sit bone, worse when sitting or running uphill.": "Une douleur profonde à l’ischion, pire assis ou en courant en montée.", "Avoid long sitting and deep stretches; strengthen gradually.": "Évitez de rester assis longtemps et les étirements profonds; renforcez progressivement.", "Patellar tendinopathy (jumper’s knee)": "Tendinopathie rotulienne (genou du sauteur)", "Pain just below the kneecap, worse with jumping, stairs or squatting.": "Douleur juste sous la rotule, pire en sautant, dans l’escalier ou en squat.", "Cut back on jumping, then slow strengthening such as wall sits.": "Réduisez les sauts, puis renforcez lentement, par exemple avec la chaise au mur.", "Knee ligament sprain (MCL / ACL)": "Entorse d’un ligament du genou (LCM / LCA)", "Pain after a twist or impact, with swelling or the knee giving way.": "Douleur après une torsion ou un impact, avec enflure ou genou qui lâche.", "See a clinician if it swells quickly or feels unstable.": "Consultez un clinicien si ça enfle rapidement ou semble instable.", "IT band syndrome": "Syndrome de la bandelette ilio-tibiale", "Pain on the outer side of the knee, common in runners and cyclists.": "Douleur à l’extérieur du genou, fréquente chez les coureurs et les cyclistes.", "Reduce mileage and strengthen the hips.": "Réduisez le kilométrage et renforcez les hanches.", "Patellofemoral pain": "Syndrome fémoro-patellaire", "An ache around or behind the kneecap, worse on stairs, squatting or after sitting.": "Douleur autour ou derrière la rotule, pire dans l’escalier, en squat ou après être resté assis.", "Strengthen the thighs and hips; avoid deep squats for now.": "Renforcez les cuisses et les hanches; évitez les squats profonds pour l’instant.", "Meniscus tear": "Déchirure du ménisque", "Pain along the joint line, with clicking, catching or locking after a twist.": "Douleur le long de l’interligne articulaire, avec claquements, accrochages ou blocage après une torsion.", "See a clinician if the knee locks or will not straighten.": "Consultez un clinicien si le genou bloque ou ne s’étend plus.", "Knee osteoarthritis": "Arthrose du genou", "Stiffness and aching, often worse in the morning or after rest.": "Raideur et douleur, souvent pires le matin ou après le repos.", "Shin splints": "Périostite tibiale", "An ache along the inner edge of the shin, common when you increase running.": "Une douleur le long du bord interne du tibia, fréquente quand vous augmentez la course.", "Reduce running, check your footwear, then build back gradually.": "Réduisez la course, vérifiez vos chaussures, puis reprenez progressivement.", "Exertional compartment syndrome": "Syndrome des loges d’effort", "Tight, building pain during exercise that goes away with rest.": "Une douleur serrée qui augmente pendant l’exercice et disparaît au repos.", "Tibial stress fracture": "Fracture de stress du tibia", "One very tender spot on the shin bone that hurts even when walking.": "Un point très sensible sur le tibia qui fait mal même en marchant.", "Stop running and get it checked.": "Arrêtez de courir et faites-le évaluer.", "Shin bone bruise": "Contusion du tibia", "A deep ache after a knock to the front of the shin.": "Une douleur profonde après un coup à l’avant du tibia.", "Rest, ice and protection.": "Repos, glace et protection.", "Calf strain": "Élongation du mollet", "Sudden pain in the calf that can feel like being kicked.": "Une douleur soudaine au mollet qui peut donner l’impression d’avoir reçu un coup de pied.", "Rest, heel lifts in your shoes, then gradual calf raises.": "Repos, talonnettes dans vos chaussures, puis montées sur la pointe des pieds progressives.", "Calf cramp": "Crampe au mollet", "A sudden, hard tightening of the calf, often at night.": "Un resserrement soudain et dur du mollet, souvent la nuit.", "Stretch the calf and stay hydrated.": "Étirez le mollet et restez bien hydraté.", "Blood clot (DVT)": "Caillot sanguin (thrombose veineuse profonde)", "A swollen, warm, red or tender calf, especially after travel, surgery or being still for long.": "Un mollet enflé, chaud, rouge ou sensible, surtout après un voyage, une chirurgie ou une longue immobilité.", "Ankle sprain": "Entorse de la cheville", "A rolled ankle with pain and swelling on the outer side.": "Une cheville tournée avec douleur et enflure à l’extérieur.", "Protect, ice, compress, elevate; balance exercises once it settles.": "Protéger, glacer, comprimer, surélever; exercices d’équilibre une fois calmé.", "Achilles tendinopathy": "Tendinopathie d’Achille", "Pain and stiffness at the back of the ankle, worst first thing in the morning.": "Douleur et raideur à l’arrière de la cheville, pires au lever le matin.", "Slow calf raises, and reduce running for now.": "Montées lentes sur la pointe des pieds, et réduisez la course pour l’instant.", "Ankle fracture": "Fracture de la cheville", "You cannot put weight on it, or the ankle bones are tender after an injury.": "Vous ne pouvez pas mettre de poids dessus, ou les os de la cheville sont sensibles après une blessure.", "Get an X-ray.": "Passez une radiographie.", "Ankle arthritis": "Arthrose de la cheville", "A deep ache and stiffness, often years after an old sprain.": "Une douleur profonde et une raideur, souvent des années après une vieille entorse.", "Supportive shoes and low-impact exercise.": "Chaussures de soutien et exercice à faible impact.", "Heel fat pad bruise": "Contusion du coussinet graisseux du talon", "A deep, bruised feeling in the centre of the heel, worse on hard floors.": "Une sensation profonde d’ecchymose au centre du talon, pire sur les planchers durs.", "Cushioned shoes or heel cups.": "Chaussures coussinées ou coussinets de talon.", "Plantar fasciitis": "Fasciite plantaire", "Sharp heel pain with your first steps in the morning.": "Douleur vive au talon aux premiers pas du matin.", "Calf and foot stretches, supportive shoes, avoid going barefoot.": "Étirements du mollet et du pied, chaussures de soutien, évitez de marcher pieds nus.", "Achilles insertion pain": "Douleur à l’insertion du tendon d’Achille", "Pain right where the Achilles tendon meets the heel bone.": "Douleur précisément là où le tendon d’Achille rejoint l’os du talon.", "Heel lifts and slow calf strengthening.": "Talonnettes et renforcement lent du mollet.", "Heel stress fracture": "Fracture de stress du talon", "Heel pain that builds with walking and hurts when squeezed from both sides.": "Douleur au talon qui augmente en marchant et fait mal quand on le serre des deux côtés.", "Stop impact activity and see a clinician.": "Arrêtez les activités à impact et consultez un clinicien.", "Pinched nerve in the neck": "Nerf coincé dans le cou", "An irritated nerve root that can send burning, tingling or numbness into the shoulder and arm.": "Une racine nerveuse irritée qui peut causer brûlure, picotements ou engourdissement dans l’épaule et le bras.", "Gentle neck movement. See a clinician if your arm feels weak.": "Mouvement doux du cou. Consultez un clinicien si votre bras semble faible.", "An irritated nerve root that can send burning or tingling between the shoulder blades and down the arm.": "Une racine nerveuse irritée qui peut causer brûlure ou picotements entre les omoplates et dans le bras.", "Gentle movement. See a clinician if your arm feels weak.": "Mouvement doux. Consultez un clinicien si votre bras semble faible.", "Sciatica": "Sciatique", "An irritated sciatic nerve sending burning, tingling or electric pain from the back into the leg.": "Un nerf sciatique irrité qui envoie brûlure, picotements ou décharges électriques du dos à la jambe.", "Keep gently active. See a clinician if it lasts or your leg feels weak.": "Restez doucement actif. Consultez un clinicien si ça persiste ou si votre jambe semble faible.", "An irritated sciatic nerve sending burning, tingling or electric pain through the buttock and leg.": "Un nerf sciatique irrité qui envoie brûlure, picotements ou décharges électriques dans la fesse et la jambe.", "Burning or tingling down the back of the thigh can come from a nerve in the lower back.": "Une brûlure ou des picotements à l’arrière de la cuisse peuvent venir d’un nerf du bas du dos.", "Burning or tingling in the calf can come from a nerve in the lower back.": "Une brûlure ou des picotements au mollet peuvent venir d’un nerf du bas du dos.", "Keep gently active. See a clinician if it lasts.": "Restez doucement actif. Consultez un clinicien si ça persiste.", "Carpal tunnel syndrome": "Syndrome du canal carpien", "Tingling or numbness in the thumb and first fingers, often worse at night.": "Picotements ou engourdissement du pouce et des premiers doigts, souvent pires la nuit.", "A night wrist splint, and breaks from repetitive gripping.": "Une attelle de poignet la nuit, et des pauses dans les gestes de préhension répétitifs.", "Ulnar nerve irritation": "Irritation du nerf ulnaire", "Tingling into the ring and little fingers, worse with the elbow bent for long.": "Picotements vers l’annulaire et l’auriculaire, pires quand le coude reste plié longtemps.", "Avoid leaning on the elbow and keep it straighter at night.": "Évitez de vous appuyer sur le coude et gardez-le plus droit la nuit.", "Tarsal tunnel syndrome": "Syndrome du tunnel tarsien", "Burning or tingling on the inner ankle and sole of the foot.": "Brûlure ou picotements à l’intérieur de la cheville et sous le pied.", "Supportive shoes. See a clinician if it lasts.": "Chaussures de soutien. Consultez un clinicien si ça persiste.", "Burning or tingling on the inner ankle, heel and sole of the foot.": "Brûlure ou picotements à l’intérieur de la cheville, au talon et sous le pied.", "Nerve irritation": "Irritation nerveuse", "Burning, tingling or numbness often comes from an irritated or compressed nerve rather than the muscle itself.": "Une brûlure, des picotements ou un engourdissement viennent souvent d’un nerf irrité ou comprimé plutôt que du muscle lui-même.", "See a clinician if it spreads, lasts, or comes with weakness.": "Consultez un clinicien si ça s’étend, persiste ou s’accompagne de faiblesse.", "You cannot put weight on it or use it normally": "Vous ne pouvez pas mettre de poids dessus ni l’utiliser normalement", "The area looks misshapen or out of place": "La zone semble déformée ou déplacée", "It is hot, red and spreading, or you have a fever": "C’est chaud, rouge et ça s’étend, ou vous faites de la fièvre", "You have new numbness or weakness": "Vous avez un nouvel engourdissement ou une nouvelle faiblesse", "The pain started after a serious fall, accident or blow": "La douleur a commencé après une chute grave, un accident ou un coup", "A sudden, severe headache, the worst you have had: call emergency services": "Un mal de tête soudain et intense, le pire de votre vie : appelez les services d’urgence", "Headache with fever and a stiff neck": "Mal de tête avec fièvre et raideur du cou", "Confusion, weakness, or changes in vision or speech": "Confusion, faiblesse, ou changements de la vision ou de la parole", "Headache after a blow to the head": "Mal de tête après un coup à la tête", "Chest pain with shortness of breath, sweating or nausea: call emergency services": "Douleur thoracique avec essoufflement, sueurs ou nausées : appelez les services d’urgence", "Pain spreading to your arm, jaw or back": "Douleur qui s’étend au bras, à la mâchoire ou au dos", "Pain after a hard blow to the chest": "Douleur après un coup violent à la poitrine", "Coughing up blood": "Tousser du sang", "Severe or worsening belly pain": "Douleur abdominale intense ou qui empire", "Pain with fever, vomiting, or blood in your stool or urine": "Douleur avec fièvre, vomissements, ou sang dans les selles ou l’urine", "A hard, rigid belly": "Un ventre dur et rigide", "A hernia bulge that turns firm or will not go back in": "Une hernie qui devient ferme ou ne rentre plus", "Numbness in the groin or inner thighs": "Engourdissement de l’aine ou de l’intérieur des cuisses", "New trouble controlling your bladder or bowels: seek emergency care": "Nouvelle difficulté à contrôler la vessie ou les intestins : obtenez des soins d’urgence", "Weakness in your legs": "Faiblesse dans les jambes", "Back pain with fever or unexplained weight loss": "Mal de dos avec fièvre ou perte de poids inexpliquée", "Neck pain after a fall or accident": "Douleur au cou après une chute ou un accident", "Numbness or weakness in your arms": "Engourdissement ou faiblesse dans les bras", "Fever with a stiff neck": "Fièvre avec raideur du cou", "Trouble swallowing or breathing": "Difficulté à avaler ou à respirer", "A swollen, warm or red calf: this can be a blood clot, see a doctor today": "Un mollet enflé, chaud ou rouge : ce peut être un caillot sanguin, consultez un médecin aujourd’hui", "Sudden shortness of breath or chest pain: call emergency services": "Essoufflement soudain ou douleur thoracique : appelez les services d’urgence", "You cannot push off or stand on tiptoe": "Vous ne pouvez pas pousser sur le pied ni vous mettre sur la pointe des pieds", "~2 m²": "~2 m²", "~4 wks": "~4 sem.", "Achilles": "Achille", "~1.5 kg": "~1,5 kg", "~1.4 kg": "~1,4 kg", "~300 g": "~300 g", "86 bn": "86 milliards", "120 m/s": "120 m/s", "~45 cm": "~45 cm", "~100k": "~100 000", "~1 min": "~1 min", "Osgood-Schlatter disease": "Maladie d’Osgood-Schlatter", "A sore bump just below the kneecap in active children and teens during growth spurts.": "Une bosse douloureuse juste sous la rotule chez les enfants et les ados actifs pendant les poussées de croissance.", "Ease off running and jumping, ice and thigh stretches. It settles once growth finishes.": "Réduisez la course et les sauts, glace et étirements des cuisses. Ça passe une fois la croissance terminée.", "Sever’s disease (heel growth plate)": "Maladie de Sever (cartilage de croissance du talon)", "Heel pain in active children while the heel bone is still growing.": "Douleur au talon chez les enfants actifs pendant que l’os du talon grandit encore.", "Rest from running, cushioned heel cups and calf stretches.": "Pause de course, coussinets de talon et étirements du mollet.", "Growth plate injury": "Blessure du cartilage de croissance", "Children’s bones have softer growth plates near the joints, which can be hurt instead of the ligaments.": "Les os des enfants ont des cartilages de croissance plus mous près des articulations, qui peuvent être blessés à la place des ligaments.", "See a doctor after any injury with swelling near a joint.": "Consultez un médecin après toute blessure avec enflure près d’une articulation.", "Osteoporotic fracture": "Fracture ostéoporotique", "Thinner bones can break after a minor fall, or in the spine with no fall at all.": "Des os plus minces peuvent se briser après une chute mineure, ou dans la colonne sans aucune chute.", "See a doctor, especially after a fall.": "Consultez un médecin, surtout après une chute.", "Period pain (dysmenorrhoea)": "Douleurs menstruelles (dysménorrhée)", "Cramping low in the belly or back around a period.": "Des crampes au bas du ventre ou du dos autour des règles.", "Heat, gentle exercise and anti-inflammatory pain relief. See a doctor if it is severe or new.": "Chaleur, exercice doux et anti-inflammatoires. Consultez un médecin si c’est intense ou nouveau.", "Ovarian cyst": "Kyste ovarien", "A fluid sac on an ovary that can cause a dull or sharp one-sided pelvic ache.": "Une poche de liquide sur un ovaire qui peut causer une douleur pelvienne sourde ou vive d’un côté.", "See a doctor, and get urgent care if the pain is sudden and severe.": "Consultez un médecin, et obtenez des soins urgents si la douleur est soudaine et intense.", "Testicular problem (including torsion)": "Problème testiculaire (y compris la torsion)", "Groin pain can come from the testicles. Sudden, severe pain may be torsion, which needs surgery within hours.": "La douleur à l’aine peut venir des testicules. Une douleur soudaine et intense peut être une torsion, qui exige une chirurgie en quelques heures.", "Go to emergency care straight away if the pain is sudden and severe.": "Allez à l’urgence immédiatement si la douleur est soudaine et intense.", "Prostatitis": "Prostatite", "Inflammation of the prostate, causing pain low in the pelvis or groin and trouble peeing.": "Inflammation de la prostate, causant une douleur au bas du bassin ou à l’aine et de la difficulté à uriner.", "See a doctor. It may need antibiotics.": "Consultez un médecin. Des antibiotiques peuvent être nécessaires.", "Isometric hold": "Contraction isométrique", "5 × 45 sec": "5 × 45 s", "Tense the muscle against something that does not move, at a comfortable effort.": "Contractez le muscle contre quelque chose d’immobile, avec un effort confortable.", "Gentle range of motion": "Amplitude de mouvement douce", "Move the joint slowly through a pain-free range.": "Bougez l’articulation lentement dans une amplitude sans douleur.", "Ice or heat": "Glace ou chaleur", "10 min": "10 min", "Whichever feels better, once or twice a day.": "Ce qui fait le plus de bien, une ou deux fois par jour.", "Slow resistance": "Résistance lente", "Lift a light weight over 3 seconds up and 3 seconds down.": "Soulevez une charge légère en 3 secondes à la montée et 3 secondes à la descente.", "Eccentric lowering": "Descente excentrique", "Lower slowly on the sore side; use the good side to lift.": "Descendez lentement du côté douloureux; utilisez le bon côté pour remonter.", "Balance hold": "Maintien en équilibre", "3 × 30 sec": "3 × 30 s", "Stand on one leg or hold a steady position.": "Tenez-vous sur une jambe ou gardez une position stable.", "Heavier loading": "Charge plus lourde", "Add a little weight if last week felt easy.": "Ajoutez un peu de poids si la semaine dernière semblait facile.", "Small hops or quick moves": "Petits sauts ou mouvements rapides", "Only if pain stays below 3/10 during and after.": "Seulement si la douleur reste sous 3/10 pendant et après.", "Activity intervals": "Intervalles d’activité", "15 min": "15 min", "Alternate easy and normal pace for your sport or walk.": "Alternez un rythme facile et normal pour votre sport ou votre marche.", "Gentle stretch": "Étirement doux", "Stretch to mild tension only, never into sharp pain.": "Étirez jusqu’à une légère tension seulement, jamais jusqu’à une douleur vive.", "Easy movement": "Mouvement facile", "A walk or light activity to keep blood flowing.": "Une marche ou une activité légère pour garder le sang en circulation.", "Warmth helps tight muscles relax.": "La chaleur aide les muscles tendus à se détendre.", "Band strengthening": "Renforcement avec élastique", "Work the muscle with a light resistance band.": "Travaillez le muscle avec un élastique de résistance léger.", "Foam rolling": "Rouleau de massage", "2 min": "2 min", "Roll slowly over the area, easing off tender spots.": "Roulez lentement sur la zone en relâchant sur les points sensibles.", "Active stretching": "Étirement actif", "Move in and out of the stretch with control.": "Entrez et sortez de l’étirement de façon contrôlée.", "Full strengthening": "Renforcement complet", "Use a weight that feels challenging by the last rep.": "Utilisez une charge qui devient exigeante à la dernière répétition.", "Sport or work moves": "Gestes du sport ou du travail", "Practise the movements you need day to day.": "Pratiquez les mouvements dont vous avez besoin au quotidien.", "Build up activity": "Augmenter l’activité", "20 min": "20 min", "Increase time or speed by about 10% a week.": "Augmentez la durée ou la vitesse d’environ 10 % par semaine.", "Range-of-motion circles": "Cercles d’amplitude", "Slow circles or bends through a comfortable range.": "Cercles ou flexions lents dans une amplitude confortable.", "Low-impact cardio": "Cardio à faible impact", "Cycling, swimming or walking on a flat surface.": "Vélo, natation ou marche sur une surface plane.", "Gentle muscle squeeze": "Contraction musculaire douce", "5 × 10 sec": "5 × 10 s", "Tighten the muscles around the joint without moving it.": "Contractez les muscles autour de l’articulation sans la bouger.", "Strengthen nearby muscles": "Renforcer les muscles voisins", "For a knee, sit-to-stands; for a shoulder, band rows.": "Pour un genou, se lever d’une chaise; pour une épaule, tirages avec élastique.", "Balance": "Équilibre", "Stand on one leg near a wall for support.": "Tenez-vous sur une jambe près d’un mur pour vous appuyer.", "Keep a steady, comfortable pace.": "Gardez un rythme régulier et confortable.", "Step-ups or wall push-ups": "Montées sur marche ou pompes au mur", "Pick the one that matches the sore joint.": "Choisissez celui qui correspond à l’articulation douloureuse.", "Longer cardio": "Cardio plus long", "25 min": "25 min", "Aim for most days of the week.": "Visez la plupart des jours de la semaine.", "Morning routine": "Routine du matin", "5 min": "5 min", "Gentle movement to ease stiffness after waking.": "Mouvements doux pour réduire la raideur au réveil.", "Short walks": "Courtes marches", "10–15 min, twice a day": "10 à 15 min, deux fois par jour", "Walking is one of the best things for back pain.": "La marche est l’une des meilleures choses pour le mal de dos.", "Knee hugs or chin tucks": "Genoux à la poitrine ou rentrées du menton", "Knee hugs for the low back, chin tucks for the neck.": "Genoux à la poitrine pour le bas du dos, rentrées du menton pour le cou.", "Pelvic tilts": "Bascules du bassin", "Lie on your back and gently flatten and arch your low back.": "Couché sur le dos, aplatissez et cambrez doucement le bas du dos.", "Bird-dog": "Chien d’arrêt (bird-dog)", "3 × 8 each side": "3 × 8 de chaque côté", "On hands and knees, reach out one arm and the opposite leg.": "À quatre pattes, allongez un bras et la jambe opposée.", "Glute bridge": "Pont fessier", "Lift your hips while squeezing your buttocks.": "Levez les hanches en serrant les fesses.", "Cat-cow": "Chat-vache", "Slowly round and arch your back on hands and knees.": "À quatre pattes, arrondissez et creusez lentement le dos.", "Side plank": "Planche latérale", "3 × 20 sec": "3 × 20 s", "From the knees at first, then full.": "Sur les genoux au début, puis complète.", "Dead bug": "Insecte mort (dead bug)", "Lie on your back and lower opposite arm and leg slowly.": "Couché sur le dos, descendez lentement le bras et la jambe opposés.", "Hip hinge practice": "Pratique de la charnière de hanche", "Bend from the hips with a straight back, as if lifting.": "Penchez-vous à partir des hanches, le dos droit, comme pour soulever.", "Nerve glides": "Glissements neuraux", "Gentle sliding movements; stop if tingling increases.": "Mouvements de glissement doux; arrêtez si les picotements augmentent.", "Posture breaks": "Pauses de posture", "Every hour": "Toutes les heures", "Stand, stretch and change position.": "Levez-vous, étirez-vous et changez de position.", "Avoid pressure": "Éviter la pression", "All day": "Toute la journée", "Do not lean on or squeeze the area.": "Ne vous appuyez pas sur la zone et ne la serrez pas.", "A little further than week 1, still comfortable.": "Un peu plus loin qu’à la semaine 1, toujours confortable.", "Mobility stretches": "Étirements de mobilité", "2 × 30 sec": "2 × 30 s", "Stretch the muscles the nerve passes through.": "Étirez les muscles que le nerf traverse.", "Easy walking": "Marche facile", "Keeps the nerves and tissues moving.": "Garde les nerfs et les tissus en mouvement.", "Strengthening": "Renforcement", "Strengthen the muscles around the area.": "Renforcez les muscles autour de la zone.", "Workstation check": "Vérification du poste de travail", "Once": "Une fois", "Adjust your chair, screen and keyboard height.": "Ajustez la hauteur de votre chaise, de votre écran et de votre clavier.", "Activity": "Activité", "Return to your usual activity gradually.": "Reprenez votre activité habituelle progressivement.", "Relative rest": "Repos relatif", "As needed": "Au besoin", "Avoid what makes it worse, but keep gently moving.": "Évitez ce qui aggrave la douleur, mais continuez de bouger doucement.", "Light movement helps healing.": "Le mouvement léger aide la guérison.", "Track your pain": "Suivre votre douleur", "Daily": "Chaque jour", "Log it in your diary to see the trend.": "Notez-la dans votre journal pour voir la tendance.", "Light exercise": "Exercice léger", "Choose something that does not raise the pain.": "Choisissez une activité qui n’augmente pas la douleur.", "Stretch nearby muscles gently.": "Étirez doucement les muscles voisins.", "Note what helps and what does not.": "Notez ce qui aide et ce qui n’aide pas.", "Usual activity": "Activité habituelle", "Build back up a little each week.": "Augmentez un peu chaque semaine.", "Simple exercises for the area.": "Exercices simples pour la zone.", "Check in": "Faire le point", "Weekly": "Chaque semaine", "See a clinician if it is not improving.": "Consultez un clinicien si ça ne s’améliore pas.", "Oct 4": "4 oct.", "Oct 8": "8 oct.", "Oct 12": "12 oct.", "Oct 17": "17 oct.", "Oct 22": "22 oct.", "Oct 20": "20 oct.", "Oct 25": "25 oct.", "Chest pain that spreads": "Douleur thoracique qui s’étend", "Chest pain spreading to the arm, neck, jaw or back can be a heart problem. Call 911 if it is new, severe or comes with breathlessness or sweating.": "Une douleur thoracique qui s’étend au bras, au cou, à la mâchoire ou au dos peut être un problème cardiaque. Composez le 911 si c’est nouveau, intense ou accompagné d’essoufflement ou de sueurs.", "Possible sciatica": "Sciatique possible", "Pain in the lower back or buttock together with pain down the leg often comes from an irritated sciatic nerve.": "Une douleur au bas du dos ou à la fesse accompagnée d’une douleur dans la jambe vient souvent d’un nerf sciatique irrité.", "Possible pinched nerve in the neck": "Nerf coincé dans le cou possible", "Neck and arm pain together": "Douleur au cou et au bras ensemble", "Neck pain with tingling or numbness down the arm often comes from an irritated nerve root in the neck.": "Une douleur au cou avec picotements ou engourdissement dans le bras vient souvent d’une racine nerveuse irritée dans le cou.", "Tight neck and shoulder muscles can send pain down into the arm.": "Des muscles tendus du cou et des épaules peuvent envoyer de la douleur dans le bras.", "Neck-related headache": "Mal de tête d’origine cervicale", "Headaches can start in tight neck muscles or stiff neck joints (tension or cervicogenic headache).": "Les maux de tête peuvent venir de muscles du cou tendus ou d’articulations du cou raides (céphalée de tension ou cervicogénique).", "Possible nerve compression in the arm": "Compression nerveuse possible dans le bras", "Tingling in the hand with pain higher up the arm can come from carpal tunnel syndrome or a nerve squeezed at the elbow or neck.": "Des picotements dans la main avec une douleur plus haut dans le bras peuvent venir du syndrome du canal carpien ou d’un nerf comprimé au coude ou au cou.", "Hip pain felt in the knee": "Douleur de hanche ressentie au genou", "Hip joint problems often send pain down to the knee, especially in children and older adults.": "Les problèmes de l’articulation de la hanche envoient souvent de la douleur jusqu’au genou, surtout chez les enfants et les personnes âgées.", "Back and belly pain together": "Douleur au dos et au ventre ensemble", "This combination can come from the kidneys or other organs, especially with fever or trouble peeing.": "Cette combinaison peut venir des reins ou d’autres organes, surtout avec de la fièvre ou de la difficulté à uriner.", "Shoulder and upper-back tension": "Tension de l’épaule et du haut du dos", "Shoulder blade muscles often refer pain between the shoulder and the spine, commonly from posture or desk work.": "Les muscles de l’omoplate projettent souvent de la douleur entre l’épaule et la colonne, souvent à cause de la posture ou du travail de bureau.", "Calf and heel pain together": "Douleur au mollet et au talon ensemble", "Tight calves are linked to Achilles tendon and plantar fascia (heel) pain.": "Des mollets tendus sont liés à la douleur du tendon d’Achille et du fascia plantaire (talon).", "Pain on both sides": "Douleur des deux côtés", "Matching pain on both sides of the body, like both knees or both hands, can point to arthritis or an inflammatory condition.": "Une douleur semblable des deux côtés du corps, comme aux deux genoux ou aux deux mains, peut indiquer de l’arthrite ou une maladie inflammatoire.", "Widespread pain": "Douleur généralisée", "Pain in several areas at once is worth discussing with a doctor. It can come from conditions like fibromyalgia, inflammatory arthritis or a viral illness.": "Une douleur à plusieurs endroits à la fois mérite d’en parler à un médecin. Elle peut venir de la fibromyalgie, d’une arthrite inflammatoire ou d’une infection virale.", "Sore after basketball.": "Douloureux après le basketball.", "Oct 5": "5 oct.", "Oct 21": "21 oct."};
Object.assign(FR_MED, {
  'Chest pressure or tightness, shortness of breath, sweating, or pain spreading to the arm, jaw or back: call 911 now': 'Pression ou serrement dans la poitrine, essoufflement, sueurs, ou douleur qui s’étend au bras, à la mâchoire ou au dos : composez le 911 maintenant',
  'Sudden sharp chest pain with shortness of breath, or coughing up blood: call 911 now': 'Douleur thoracique vive et soudaine avec essoufflement, ou toux avec du sang : composez le 911 maintenant',
  'Belly pain that moves to the lower right and keeps getting worse, especially with fever or vomiting: get urgent care today': 'Douleur au ventre qui descend en bas à droite et empire, surtout avec fièvre ou vomissements : consultez d’urgence aujourd’hui',
  'Severe pain in the side or back that comes in waves, with fever, vomiting or blood in your pee: get urgent care today': 'Douleur intense au flanc ou au dos, par vagues, avec fièvre, vomissements ou sang dans l’urine : consultez d’urgence aujourd’hui',
  'Pain under the right ribs with fever, or yellow skin or eyes: get urgent care today': 'Douleur sous les côtes droites avec fièvre, ou peau ou yeux jaunes : consultez d’urgence aujourd’hui',
  'Vomiting blood, black or tarry stools, or severe upper belly pain spreading to the back: get urgent care now': 'Vomissements de sang, selles noires, ou douleur intense dans le haut du ventre qui s’étend au dos : consultez d’urgence maintenant',
  'Pain under the left ribs after a hit, fall or accident: get urgent care now': 'Douleur sous les côtes gauches après un coup, une chute ou un accident : consultez d’urgence maintenant',
  'You cannot pee, or have fever with pain when peeing: get urgent care today': 'Vous ne pouvez pas uriner, ou vous avez de la fièvre avec douleur en urinant : consultez d’urgence aujourd’hui',
  'Sudden severe one-sided pelvic pain, or pain with a possible pregnancy or heavy bleeding: get urgent care now': 'Douleur pelvienne soudaine et intense d’un côté, ou douleur avec grossesse possible ou saignement abondant : consultez d’urgence maintenant',
  'Sudden, very severe headache, confusion, weakness, a drooping face or trouble speaking: call 911 now': 'Mal de tête soudain et très intense, confusion, faiblesse, visage affaissé ou difficulté à parler : composez le 911 maintenant',
  'New weakness or numbness in both legs, or loss of bladder or bowel control: call 911 now': 'Nouvelle faiblesse ou engourdissement des deux jambes, ou perte de contrôle de la vessie ou des intestins : composez le 911 maintenant'
});
const frMed = (v) => {
  if (typeof v === 'string') return FR_MED[v] || v;
  if (Array.isArray(v)) return v.map(frMed);
  if (v && Object.getPrototypeOf(v) === Object.prototype) { const o = {}; for (const k in v) o[k] = frMed(v[k]); return o; }
  return v;
};

// French for the exercise library: names, instructions and doses, plus the swap list's labels.
const frDose = (d) => d.replace(' each side', ' de chaque côté').replace(' sec', ' s').replace(' steps', ' pas').replace('Every hour', 'Toutes les heures');
EX_LIB.forEach((e) => { [[e.name, e.frName], [e.how, e.frHow], [e.dose, frDose(e.dose)]].forEach((p) => { if (!FR_MED[p[0]]) FR_MED[p[0]] = p[1]; }); });
Object.assign(FR, { 'Swap exercise': 'Changer d’exercice', 'Swapped from': 'Remplace :', 'In your plan': 'Dans votre plan', 'Legs and hips': 'Jambes et hanches', 'Arms and shoulders': 'Bras et épaules', 'Back and core': 'Dos et tronc', 'Neck': 'Cou', 'Whole body': 'Corps entier', 'Pick any exercise that does the same job. Each one has a demo.': 'Choisissez un exercice qui a le même rôle. Chacun a sa démo.', 'Exercise swapped': 'Exercice changé' });
Object.assign(FR, { 'Walking': 'Marche', 'Running': 'Course', 'Gym or weights': 'Gym ou musculation', 'Sports': 'Sports', 'Cycling': 'Vélo', 'Swimming': 'Natation', 'Yoga or stretching': 'Yoga ou étirements', 'Desk or computer work': 'Travail de bureau ou à l’ordinateur', 'Housework': 'Tâches ménagères', 'Lifting or carrying': 'Soulever ou porter', 'Driving': 'Conduite', 'Gardening': 'Jardinage', 'Resting or sleeping': 'Repos ou sommeil', 'Other': 'Autre', 'Choose an activity (optional)': 'Choisir une activité (facultatif)', 'today?': 'aujourd’hui?', 'on': 'le', 'Logging for a past day:': 'Entrée pour un jour passé :', 'Leave the time empty to use the current time.': 'Laissez l’heure vide pour utiliser l’heure actuelle.', 'Add the time if you remember it.': 'Ajoutez l’heure si vous vous en souvenez.', 'When': 'Quand', 'Date': 'Date', 'Time': 'Heure', 'What were you doing?': 'Que faisiez-vous?', 'Type the activity': 'Écrivez l’activité', 'Back to today': 'Revenir à aujourd’hui', 'Activity': 'Activité', 'Save check-in for': 'Enregistrer le suivi du', 'No treatment that day': 'Aucun traitement ce jour-là', 'No treatment': 'Aucun traitement', 'Save: no treatment': 'Enregistrer : aucun traitement', 'Saved: no treatment that day': 'Enregistré : aucun traitement ce jour-là', 'No activity that day': 'Aucune activité ce jour-là', 'No medication or treatment that day': 'Aucun médicament ni traitement ce jour-là', 'No medication or treatment': 'Aucun médicament ni traitement', 'Save: no medication or treatment': 'Enregistrer : aucun médicament ni traitement', 'Saved: no medication or treatment that day': 'Enregistré : aucun médicament ni traitement ce jour-là', 'none that day': 'aucune ce jour-là', 'Log treatment': 'Noter le traitement' });
Object.assign(FR, { 'Not a diagnosis.': 'Pas un diagnostic.', 'PainMap helps you describe your pain. Only a doctor, nurse or physiotherapist can diagnose it. In an emergency, call 911.': 'PainMap vous aide à décrire votre douleur. Seul un médecin, une infirmière ou un physiothérapeute peut la diagnostiquer. En cas d’urgence, composez le 911.', 'Marking a spot helps you describe your pain. It does not tell you what is wrong.': 'Marquer un endroit vous aide à décrire votre douleur. Cela ne vous dit pas ce qui ne va pas.', 'Your answers help you explain your pain to a health professional. They do not diagnose it.': 'Vos réponses vous aident à expliquer votre douleur à un professionnel de la santé. Elles ne la diagnostiquent pas.', 'These are possible causes to talk about with a doctor, nurse or physiotherapist. Do not start treatment based on this list alone.': 'Ce sont des causes possibles à discuter avec un médecin, une infirmière ou un physiothérapeute. Ne commencez pas de traitement d’après cette liste seulement.', 'This report is built from your own entries to help your appointment. It is not a diagnosis or a medical record.': 'Ce rapport est créé à partir de vos propres entrées pour aider votre rendez-vous. Ce n’est pas un diagnostic ni un dossier médical.', 'Trends, insights and the flare-up outlook are estimates from your entries, not a diagnosis or medical advice.': 'Les tendances, les observations et les prévisions de poussée sont des estimations tirées de vos entrées, pas un diagnostic ni un avis médical.', 'These are general exercises, not a diagnosis or a treatment plan made for you. Stop if pain gets worse, and check with a professional.': 'Ce sont des exercices généraux, pas un diagnostic ni un plan de traitement fait pour vous. Arrêtez si la douleur augmente et consultez un professionnel.' });
const UI = {"aboutQH": "About you", "aboutQP": "Your age and gender change which causes are most likely.", "remHint": "Pick any hour and minute.", "appearance": "Appearance", "todayQ": "today?", "height": "Height:", "edit": "Edit", "choose": "Choose:", "layerOf": "Layer", "partsText": "labelled parts on this view. Zoom into an area to see them all, and tap any name to learn what it does.", "answersOpt": "Answers are optional, but each one helps rank the causes. Your age and body are used too:", "painOverTime": "pain over time", "howIsYour": "How’s your", "rankedUsing": "Ranked using where and how deep it hurts, your answers, and your age and body. Best match first.", "k1": "Skip", "k2": "I already have an account", "k3": "Back up your diary", "k4": "Sign in so your pain diary, spots and plans are safe if you change or lose your phone.", "k5": "Sign out", "k6": "Continue with Apple", "k7": "Continue with Google", "k8": "Email", "k9": "Continue with email", "k10": "Your health data is encrypted and stored in Canada [CONFIRM HOSTING]. We never sell it. [PRIVACY LINK]", "k11": "Not now", "k12": "Settings and privacy", "k13": "Account", "k14": "Manage account and backup", "k15": "Your profile", "k16": "Edit age and gender", "k17": "Language", "k18": "Accessibility", "k19": "Larger text", "k20": "Reduce motion", "k21": "Your data and privacy", "k22": "You own your health data. We follow Canada’s privacy law (PIPEDA) and provincial health privacy laws. We never sell your data.", "k23": "Export my data", "k24": "Delete all my data", "k25": "This permanently deletes your diary, spots, treatments and plans. This cannot be undone.", "k26": "Delete everything", "k27": "Cancel", "k28": "[PRIVACY POLICY LINK] · [TERMS LINK]", "k29": "About PainMap", "k30": "Medical content reviewed by [CLINICIAN NAME, CREDENTIALS]. PainMap gives general information and tracking. It is not a diagnosis and does not replace a health professional.", "k31": "Find a clinician", "k32": "Postal code", "k33": "Video visits only", "k34": "Call 811", "k35": "Call 911", "k36": "Clinic listings are placeholders. Partner clinics will be marked clearly as paid listings.", "k37": "Tell us about you", "k38": "We shape the body map to match your age and body, so the spots and parts line up with you.", "k39": "Age", "k40": "Gender (body type)", "k41": "Used only to shape the diagram and show the right organs. You can change it any time.", "k42": "Front", "k43": "Back", "k44": "Zoom", "k45": "Drag to locate", "k46": "Investigating", "k47": "Clear", "k48": "+ Add another spot", "k49": "Everything under this point, from the surface down. Tap a layer to peel to it.", "k50": "Or choose an area from a list", "k51": "How deep does it feel?", "k52": "What does it feel like?", "k53": "Overview", "k54": "Find pain", "k55": "Explore", "k56": "My diary", "k57": "A few quick questions", "k58": "How bad is the pain right now?", "k59": "No pain", "k60": "Worst imaginable", "k61": "How did it start?", "k62": "How long have you had it?", "k63": "What makes it worse?", "k64": "Choose all that apply.", "k65": "Anything else going on?", "k66": "See what it could be", "k67": "My pain diary", "k68": "Insights", "k69": "Tag a few check-ins with what your day was like and patterns will show up here.", "k70": "What was today like?", "k71": "Notes (optional)", "k72": "Save today’s check-in", "k73": "Recovery plan", "k74": "Exercises for this spot", "k75": "Doctor report", "k76": "One-page PDF · Open", "k77": "One-page PDF · Premium", "k78": "Medication and treatment log", "k79": "What did you take or try?", "k80": "Did it help?", "k81": "Log treatment", "k82": "Daily reminder", "k83": "Premium", "k84": "Remind me at", "k85": "All entries", "k86": "Stop any exercise that makes the pain sharper or worse. Plan reviewed by [PHYSIOTHERAPIST NAME]. This is general guidance, not a personal prescription.", "k87": "PainMap Premium", "k88": "Find it. Track it. Fix it.", "k89": "Turn your pain map into a recovery you can see.", "k90": "Yearly: free for 7 days, then $69.99 CAD per year. Monthly: $11.99 CAD per month. Prices include no tax; tax is added where it applies. Payment is charged to your App Store or Google Play account. Subscriptions renew automatically unless you cancel at least 24 hours before the end of the trial or period, in your store account settings. Lifetime is a one-time purchase. Terms of use: [TERMS LINK] · Privacy policy: [PRIVACY LINK]", "k91": "Restore purchase", "k92": "What it could be", "k93": "Your pain", "k94": "Parts at this spot:", "k95": "Edit answers", "k96": "Call 811 · nurse line", "k97": "Your pain spots", "k98": "Linked pain patterns", "k99": "These spots together can point to one cause.", "k100": "Did you know?", "k101": "Get care right away if", "k102": "PainMap gives general information, not a diagnosis. If pain is severe, lasts more than a week or keeps getting worse, see a doctor or physiotherapist.", "k103": "Start over with a new spot", "k104": "Save to diary", "k105": "Units", "k106": "Confirm delete", "k107": "Type of care", "k108": "Settings", "k109": "Body side", "k110": "Body layer", "k111": "Zoom to area", "k112": "Body locator. Use the arrow keys to move it over the body, or drag it with a mouse or finger.", "k113": "Pain depth", "k114": "Pain type", "k115": "Back to body map", "k116": "Pain spot", "k117": "For example: sore after a long shift", "k118": "Notification preview", "k119": "Close", "k120": "Choose a plan", "delAcct": "Delete my account", "delAcctWarn": "This deletes your account, your backup and everything on this phone, and cancels nothing in the app store. To stop paying, cancel your subscription in your App Store or Google Play settings first.", "delAcctYes": "Delete my account", "collectH": "What we collect and why", "c1": "Pain spots, depth, answers and diary entries: to show possible causes and your history.", "c2": "Age and gender: to shape the body map and rank causes.", "c3": "Email (only with an account): to sign in and back up your diary.", "c4": "Purchase status: to unlock Premium.", "c5": "Anonymous usage counts: to find and fix confusing screens.", "c6": "Never collected: your location, contacts or photos (unless you add a photo). No advertising trackers. Never sold.", "newH": "What’s new", "new1": "Version 1.0", "new2": "Body map with 8 layers and 500+ named parts, in English and French.", "new3": "Pain diary with triggers, treatments and insights.", "new4": "Recovery plans with exercise demos, and a doctor report.", "a11yH": "Accessibility", "a11yP": "We aim to meet WCAG 2.1 AA. PainMap works with VoiceOver and TalkBack, supports larger text and reduced motion, and every body area can be chosen from a list instead of the drawing. Tell us about any barrier at [ACCESSIBILITY EMAIL].", "guardH": "Setting this up for someone under 16?", "guardP": "A parent or guardian must set up PainMap and agree to how their information is used.", "guardL": "I am the parent or guardian and I agree", "notDx": "Not a diagnosis. Use this to talk with a doctor, nurse or physiotherapist.", "goBack": "Go back", "profPrompt": "Make the map match you: add your age and gender for a more accurate body and better results.", "profAdd": "Add age and gender", "dismiss": "Not now", "moreLabels": "Show all labels", "fewerLabels": "Show fewer labels", "scrollHint": "Swipe beside the body to scroll", "tutText": "Drag this circle to where it hurts. Let go, then tap Choose.", "tutOk": "Got it", "samplesNote": "Entries marked “Sample” are examples to show how the diary works.", "hideSamples": "Hide examples", "showSamples": "Show examples", "emptyDiary": "No entries yet. Find your spot on the body map, then tap Save to diary on the results screen.", "rateH": "Glad it’s getting better!", "rateP": "Would you rate PainMap? It helps other people find it.", "rateYes": "Rate PainMap", "rpTitle": "Pain report for my appointment", "rpBuilt": "Built from your own entries. Check it, add your questions, then share it.", "rpWhere": "Where it hurts", "rpDiary": "Recent check-ins", "rpAnswers": "What I reported", "rpCauses": "Possible causes the app suggested", "rpTx": "Treatments tried", "rpQ": "My questions for the clinician", "rpQph": "For example: is it safe to keep running?", "rpShare": "Share as PDF", "rpPrint": "See the printable layout", "rpNone": "Nothing recorded yet.", "rpFoot": "Created by the patient with PainMap. General information only, not a diagnosis.", "lcAgree": "I agree to the", "lcTerms": "Terms of Use", "lcAnd": "and", "lcPrivacy": "Privacy Policy", "lcReq": "required", "lcOpt": "optional", "lcStats": "Share anonymous usage stats to help improve PainMap. Never your health entries.", "lcMail": "Email me tips and offers. Unsubscribe any time.", "lcRestore": "Restore purchases", "lcManage": "Manage subscription", "lcHelpH": "Help & feedback", "lcBug": "Report a problem", "lcIdea": "Send feedback", "lcDevice": "Include phone model and app version", "lcNoHealth": "Your diary and health details are never attached.", "lcSend": "Send", "lcSourcesBtn": "Medical sources", "lcSourcesH": "Medical sources", "lcSourcesP": "PainMap’s information is based on these guidelines and clinical rules. It is general information, not a diagnosis.", "lcReviewNote": "Reference list for clinician review. Confirm the current edition of each source before launch.", "lcSourcesFoot": "Content last reviewed: [DATE] by [CLINICIAN NAME, CREDENTIALS].", "lcNotifH": "Get a gentle daily reminder?", "lcNotifP": "One short notification at the time you pick, to log your pain. It never shows health details on the lock screen.", "lcNotifYes": "Allow notifications", "lcNotifNo": "Not now", "lcOr": "or", "lcMainNav": "Main", "lcChartAlt": "Line chart of pain score over time", "wkH": "Your progress", "sideH": "Left vs right", "sideNote": "Average pain from your check-ins. One side much worse often points to an injury or overuse; both sides alike can point to arthritis.", "fcH": "Flare-up outlook", "fcTeaser": "See tomorrow’s flare-up outlook, based on your own triggers like sleep, stress and activity.", "fcUnlock": "Unlock with Premium", "b360Aria": "Open the 360° body", "b360Back": "Back to the body map", "inProg": "Introduction progress", "inBack": "Back", "inSafeH": "Before you start", "inSafeP": "Three things to know. Please read them, then tap the button below.", "inS1h": "It is not a diagnosis.", "inS1p": "PainMap suggests what your pain could be and helps you explain it. Only a clinician can diagnose you.", "inS2h": "In an emergency, call 911.", "inS2p": "For chest pain, trouble breathing, sudden weakness or a serious injury, don’t use the app. For advice, call 811.", "inS3h": "Your data stays yours.", "inS3p": "Your diary is private, stored in Canada and never sold.", "inAgree": "I understand PainMap is not a diagnosis, and I will call 911 in an emergency.", "inReplay": "Replay the introduction", "b3Title": "Spin the body and tap where it hurts", "b3Hint": "Drag sideways to spin · tap to mark the spot", "b3LayerLbl": "Layer", "b3ViewsLbl": "Turn the body", "b3Names": "Names", "b3SpinL": "Turn 45 degrees left", "b3SpinR": "Turn 45 degrees right", "b3Rotate": "Rotate", "b3Empty": "Tap anywhere on the body to drop a pin. Spin it first to reach the back or sides.", "b3YourSpot": "Your spot", "b3Choose": "Choose this spot", "b3FaceIt": "Turn to face it", "b3Clear": "Clear", "dyTools": "Recovery plan and doctor report"};


// ---------- The turnable 3D body used by the 360° view (its own namespace, so its names never clash).
const B3 = (() => {

// A turnable human figure. The body is a mesh of lofted cross-sections (x = the person's left, y = down,
// z = toward their front). Each frame turns it about the vertical axis, culls faces pointing away,
// shades the rest with a fixed light and paints them far to near.

const lerp = (a, b, t) => a + (b - a) * t;
const r1d = (v) => Math.round(v * 10) / 10;
const rotY = (p, c, s) => [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c];
const unrotY = (p, c, s) => [p[0] * c - p[2] * s, p[1], p[0] * s + p[2] * c];
const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };

// Ring = [cx, cy, cz, rx, rFront(or down), rBack(or up)]. Catmull-Rom adds `k - 1` rings between each pair.
function smooth(rings, k) {
  if (k <= 1) return rings;
  const out = [];
  for (let i = 0; i < rings.length - 1; i++) {
    const p0 = rings[Math.max(0, i - 1)], p1 = rings[i], p2 = rings[i + 1], p3 = rings[Math.min(rings.length - 1, i + 2)];
    for (let j = 0; j < k; j++) {
      const t = j / k, t2 = t * t, t3 = t2 * t;
      out.push(p1.map((_, m) => 0.5 * (2 * p1[m] + (-p0[m] + p2[m]) * t + (2 * p0[m] - 5 * p1[m] + 4 * p2[m] - p3[m]) * t2 + (-p0[m] + 3 * p1[m] - 3 * p2[m] + p3[m]) * t3)));
    }
  }
  out.push(rings[rings.length - 1]);
  return out;
}

// Surface-detail helpers: soft bumps placed by height and angle around the body.
const ad = (a, b) => Math.abs(((a - b + 540) % 360) - 180);
const G = (y, y0, sy, g, g0, sg) => Math.exp(-((y - y0) / sy) * ((y - y0) / sy) - (ad(g, g0) / sg) * (ad(g, g0) / sg));
const G2 = (y, y0, sy, g, g0, sg) => Math.max(G(y, y0, sy, g, g0, sg), G(y, y0, sy, g, (540 - g0) % 360, sg));
const win = (y, a, b, e) => Math.min(1, Math.max(0, (y - a) / e)) * Math.min(1, Math.max(0, (b - y) / e));
const U = (g, side) => (side === 'R' ? (540 - g) % 360 : g);
const sig = (v) => 1 / (1 + Math.exp(-v));
// Where the hair is on the head (0 to 1): the crown, and the back down to the nape (longer for the female figure).
function hairMask(y, g, fem) {
  const back = Math.max(0, Math.min(1, -Math.sin(g * Math.PI / 180) + (fem ? 0.45 : 0.15)));
  const sideHair = Math.max(0, Math.abs(Math.cos(g * Math.PI / 180)) - 0.55) * 2;
  return Math.min(1, sig((13.5 - y) * 1.2) + sig(((fem ? 44 : 29) - y) * 0.9) * back + sig((19 - y) * 1.2) * sideHair);
}

function meshKit() {
  const V = [], F = [], L = [], BV = [];
  // Faces between consecutive rings; normals point away from the line through the ring centres.
  const faces = (base, centers, nr, seg, part, side, tone) => {
    for (let i = 0; i < nr - 1; i++) {
      const mid = [0, 1, 2].map((m) => (centers[i][m] + centers[i + 1][m]) / 2);
      for (let j = 0; j < seg; j++) {
        const a = base + i * seg + j, b = base + i * seg + (j + 1) % seg, c = base + (i + 1) * seg + (j + 1) % seg, d = base + (i + 1) * seg + j;
        const P = [V[a], V[b], V[c], V[d]];
        const cen = [0, 1, 2].map((m) => (P[0][m] + P[1][m] + P[2][m] + P[3][m]) / 4);
        let n = unit(cross(sub3(P[2], P[0]), sub3(P[3], P[1])));
        const outv = sub3(cen, mid);
        if (n[0] * outv[0] + n[1] * outv[1] + n[2] * outv[2] < 0) n = [-n[0], -n[1], -n[2]];
        F.push({ v: [a, b, c, d], n, cen, part, side, tone: tone || '', i, j, ang: (j + 0.5) / seg * 360, bv: ((BV[a] || 0) + (BV[b] || 0) + (BV[c] || 0) + (BV[d] || 0)) / 4 });
      }
    }
  };
  // axis 'y': rings lie flat (x, z); axis 'z': rings stand up (x, y) and run front to back.
  const loft = (part, side, rings, seg, axis, pw, tone, bump) => {
    const base = V.length, ex = 2 / (pw || 2);
    L.push({ part, side, rings, axis, ex, bump });
    rings.forEach((r) => {
      for (let j = 0; j < seg; j++) {
        const g = j / seg * Math.PI * 2, cg = Math.cos(g), sg = Math.sin(g);
        const ux = Math.sign(cg) * Math.pow(Math.abs(cg), ex), uv = Math.sign(sg) * Math.pow(Math.abs(sg), ex);
        const ox = r[3] * ux, ov = (uv > 0 ? r[4] : r[5]) * uv;
        const bv = bump && axis === 'y' ? bump(r[1], j / seg * 360, side) : 0, b = bv / (Math.hypot(ox, ov) || 1);
        BV[V.length] = bv;
        V.push(axis === 'z'
          ? [r[0] + ox, r[1] + ov, r[2]]
          : [r[0] + ox * (1 + b), r[1], r[2] + ov * (1 + b)]);
      }
    });
    faces(base, rings.map((r) => [r[0], r[1], r[2]]), rings.length, seg, part, side, tone);
  };
  const ellipsoid = (part, side, c, rx, ry, rz, seg, tone) => {
    const rings = [];
    for (let i = 0; i <= 6; i++) { const a = -Math.PI / 2 + Math.PI * i / 6, k = Math.max(0.04, Math.cos(a)); rings.push([c[0], c[1] + ry * Math.sin(a), c[2], rx * k, rz * k, rz * k]); }
    loft(part, side, rings, seg || 8, 'y', 2, tone);
  };
  // A round tube along a path of points, closed at both ends (bones, ribs).
  const sweep = (part, side, pts, rs, seg, tone) => {
    const L = pts.length - 1, T0 = unit(sub3(pts[1], pts[0])), T1 = unit(sub3(pts[L], pts[L - 1]));
    const P = [sub3(pts[0], T0.map((v) => v * rs[0] * 0.7))].concat(pts, [pts[L].map((v, m) => v + T1[m] * rs[L] * 0.7)]);
    const R = [rs[0] * 0.2].concat(rs, [rs[L] * 0.2]);
    const base = V.length;
    P.forEach((p, i) => {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)];
      const T = unit(sub3(b, a)), up = Math.abs(T[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
      const N = unit(cross(T, up)), B = cross(T, N);
      for (let j = 0; j < seg; j++) {
        const g = j / seg * Math.PI * 2, cg = Math.cos(g), sg = Math.sin(g);
        V.push([0, 1, 2].map((m) => p[m] + R[i] * (cg * N[m] + sg * B[m])));
      }
    });
    faces(base, P, P.length, seg, part, side, tone);
  };
  // Smooth shading: each face is lit by the average normal of its corners.
  const finish = () => {
    const VN = V.map(() => [0, 0, 0]);
    F.forEach((f) => f.v.forEach((ix) => { VN[ix][0] += f.n[0]; VN[ix][1] += f.n[1]; VN[ix][2] += f.n[2]; }));
    F.forEach((f) => { f.sn = unit(f.v.reduce((a, ix) => [a[0] + VN[ix][0], a[1] + VN[ix][1], a[2] + VN[ix][2]], [0, 0, 0])); });
    return { V, F, L };
  };
  return { loft, ellipsoid, sweep, finish };
}

function buildMesh(sex) {
  const K = meshKit(), loft = K.loft, ellipsoid = K.ellipsoid;
  const fem = sex === 'female';

  // Surface detail. Angles: torso and head 0 = the person's left, 90 front, 270 back (bumps mirrored to both sides);
  // limbs use u: 0 outer, 90 front, 180 inner, 270 back.
  const headB = (y, g) => 1.0 * G2(y, 29, 4, g, 52, 18) - 1.1 * G2(y, 23.5, 3, g, 64, 14) + 0.8 * G(y, 42, 3, g, 90, 25) + 0.6 * G2(y, 38, 4, g, 30, 20) - 0.5 * G(y, 22, 2.5, g, 90, 8) + 1.5 * hairMask(y, g, fem);
  const neckB = (y, g) => 0.9 * G2(y, 50, 8, g, 58, 14) + (fem ? 0 : 0.9 * G(y, 46, 2.5, g, 90, 10));
  const torsoB = (y, g) => 3.4 * G2(y, 96, 9, g, 62, 22) + (fem ? 0 : 0.7 * (G2(y, 128, 4, g, 82, 7) + G2(y, 141, 4, g, 82, 7) + G2(y, 154, 4, g, 82, 7)) - 0.6 * G2(y, 180, 6, g, 62, 6)) + (fem ? 3.6 * G2(y, 101, 7, g, 64, 18) : 0) - 0.9 * G2(y, 111, 3, g, 58, 26)
    + 0.9 * G2(y, 67, 2.5, g, 50, 28) - 1.1 * G(y, 64, 3, g, 90, 8) - 1.2 * G(y, 158, 2.2, g, 90, 5) - 0.6 * G(y, 146, 30, g, 90, 3.5) * win(y, 118, 175, 6)
    + 2.2 * G2(y, 98, 12, g, 300, 18) + 1.2 * G2(y, 130, 14, g, 335, 16) - 1.3 * G(y, 130, 60, g, 270, 6) * win(y, 78, 182, 8)
    + (fem ? 3.6 : 3) * G2(y, 195, 10, g, 300, 24) - 2.6 * G(y, 200, 14, g, 270, 4) * win(y, 183, 222, 4);
  const armB = (y, g, side) => { const u = U(g, side); return 2.2 * G(y, 86, 9, u, 20, 70) + 2.3 * G(y, 116, 12, u, 95, 35) + 1.9 * G(y, 112, 14, u, 265, 40) + 1.0 * G(y, 148, 3, u, 270, 25) + 1.2 * G(y, 163, 8, u, 40, 40) + 0.8 * G(y, 165, 8, u, 140, 35); };
  const legB = (y, g, side) => { const u = U(g, side); return 2.1 * G(y, 245, 18, u, 30, 40) + 1.4 * G(y, 240, 20, u, 90, 25) + 2.6 * G(y, 279, 7, u, 140, 25) + 1.0 * G(y, 225, 12, u, 180, 30) + 1.2 * G(y, 250, 20, u, 270, 40) + 2.0 * G(y, 297, 4, u, 90, 22) - 0.8 * G(y, 303, 4, u, 35, 15) - 0.8 * G(y, 303, 4, u, 145, 15) + 3.4 * G(y, 327, 10, u, 230, 30) + 2.6 * G(y, 320, 9, u, 305, 28) + 1.2 * G(y, 373, 2.5, u, 0, 25) + 1.2 * G(y, 371, 2.5, u, 180, 25) - 0.8 * G(y, 360, 6, u, 270, 40) + 0.4 * G(y, 335, 25, u, 115, 12); };
  // Arms hang slightly away from the body.
  const ax = (x, y) => x + Math.max(0, y - 70) * 0.07;

  // Head, face and neck.
  loft('head', '', smooth([[0, 1, -1, 2, 2, 2], [0, 5, -1, 9.5, 10, 11], [0, 11, -1, 13, 13, 14.5], [0, 19, -1, 14.2, 14, 16], [0, 27, -1, 13.6, 14, 14.5], [0, 34, 0, 11.8, 13.2, 11], [0, 40, 0.5, 8.8, 11.5, 7.5], [0, 44, 0.5, 5, 7.5, 4], [0, 46.5, 0, 0.8, 1, 1]], 4), 32, 'y', 2, '', headB);
  K.sweep('nose', '', [[0, 22, 13.4], [0, 26, 14.4], [0, 30, 15.6]], [1.3, 1.6, 2.1], 8);
  ellipsoid('nose', '', [0, 31, 14.2], 2.8, 1.3, 1.7, 8);
  ellipsoid('lips', '', [0, 35.6, 12.6], 3.6, 0.9, 1.2, 8);
  ellipsoid('lips', '', [0, 37.2, 12.3], 3.3, 1.0, 1.2, 8);
  [[-1, 'R'], [1, 'L']].forEach((q) => {
    ellipsoid('eye', q[1], [q[0] * 5.4, 23.6, 12.3], 2.3, 1.25, 1, 8);
    ellipsoid('iris', q[1], [q[0] * 5.2, 23.6, 13.1], 0.95, 0.95, 0.4, 8);
    ellipsoid('brow', q[1], [q[0] * 5.7, 20.2, 13.4], 3.1, 0.55, 0.8, 6);
    ellipsoid('ear', q[1], [q[0] * 14.4, 27, -1.5], 1.4, 4.8, 3.2, 8);
  });
  loft('neck', '', smooth([[0, 38, -2, 8.2, 7, 8], [0, 48, -1.5, 8.8, 7.6, 8.8], [0, 57, -1, 11, 8.4, 10.5], [0, 63, -1, 15, 9, 11.5]], 3), 24, 'y', 2, '', neckB);

  // Torso: trapezius, shoulders, chest, waist, hips and seat.
  const torso = fem
    ? [[0, 58, 0, 9.5, 8, 9], [0, 64, 0, 21, 10.5, 12], [0, 70, 0, 30, 12.5, 14], [0, 78, 0, 34, 16, 15.5], [0, 90, 0, 33, 19, 16], [0, 102, 0.5, 32, 20, 16], [0, 113, 0, 29, 18, 15.5], [0, 127, 0, 26.5, 17, 14.5], [0, 142, 0, 24.5, 16, 14], [0, 158, 0, 27.5, 16.5, 15.5], [0, 172, 0, 32.5, 17, 18.5], [0, 186, 0, 35.5, 16.5, 20], [0, 198, 0, 34.5, 15, 19.5], [0, 210, 0, 28, 12, 15.5], [0, 220, 0, 14, 7, 7], [0, 223, 0, 1, 1, 1]]
    : [[0, 58, 0, 10, 8.5, 9.5], [0, 64, 0, 23, 11, 12.5], [0, 70, 0, 33, 13.5, 15], [0, 78, 0, 37.5, 17.5, 16.5], [0, 88, 0, 37.5, 20, 17], [0, 100, 0, 35.5, 20.5, 17], [0, 112, 0, 33, 19.5, 16.5], [0, 126, 0, 30, 18, 15.5], [0, 142, 0, 27.5, 17, 14.5], [0, 158, 0, 28.5, 17, 15], [0, 172, 0, 31, 17, 17.5], [0, 186, 0, 33, 16.5, 18.5], [0, 198, 0, 32.5, 15, 18.5], [0, 210, 0, 27, 12, 15], [0, 220, 0, 14, 7, 7], [0, 223, 0, 1, 1, 1]];
  loft('torso', '', smooth(torso, 4), 64, 'y', 2.15, '', torsoB);

  [[-1, 'R'], [1, 'L']].forEach((q) => {
    const k = q[0], S = q[1], sh = fem ? 0.93 : 1;
    // Arm: deltoid, biceps, elbow, forearm, wrist.
    const arm = [[36.5, 67.5, 0, 1.5, 1.5, 1.5], [38, 70.5, 0, 9, 9, 9], [40.5, 76, 0, 12.5, 12.5, 12.5], [44, 88, 0, 12, 11.5, 11.5], [46.5, 104, 0, 9.8, 11, 10.5], [48, 122, 0, 9, 10, 9.5], [49.5, 138, 0, 7.8, 8, 8], [50.5, 148, 0, 7.2, 7.2, 7.6], [52, 158, 0.8, 9, 8.6, 8.8], [53.5, 174, 1.5, 7.8, 7.2, 7.2], [55, 192, 2, 5.8, 5, 5], [56, 204, 2.5, 5, 3.8, 3.8]];
    loft('arm', S, smooth(arm, 4).map((r) => [k * ax(r[0] * sh, r[1]), r[1], r[2], r[3] * sh, r[4] * sh, r[5] * sh]), 28, 'y', 2, '', armB);
    // Hand: palm, four fingers and a thumb, palms facing forward.
    const hx = (d, y) => k * ax(57.6 * sh + d, y);
    loft('hand', S, smooth([[56, 204, 2.5, 4.6, 3, 3], [57, 212, 2.8, 5.8, 3, 3], [57.5, 219, 3, 6, 2.7, 2.7], [57.6, 224, 3.2, 5.6, 2.4, 2.4], [57.6, 225.5, 3.2, 3, 1.4, 1.4]], 2).map((r) => [k * ax(r[0] * sh, r[1]), r[1], r[2], r[3], r[4], r[5]]), 16, 'y');
    [[4, 13], [1.3, 14.5], [-1.3, 13.5], [-4, 10.5]].forEach((fd) => {
      const d = fd[0], len = fd[1];
      K.sweep('fingers', S, [[hx(d, 223), 223, 3.2], [hx(d * 1.05, 223 + len * 0.55), 223 + len * 0.55, 3.8], [hx(d * 1.08, 223 + len), 223 + len, 4.4]], [1.35, 1.15, 0.9], 6);
    });
    K.sweep('thumb', S, [[hx(5, 210), 210, 3.5], [hx(7.2, 217), 217, 6], [hx(7.6, 223), 223, 7.6]], [1.8, 1.5, 1.15], 6);
    // Leg: thigh, knee, calf, ankle.
    const hip = fem ? 1.04 : 1;
    const leg = [[16.5, 198, 0, 15.5, 16, 17.5], [17, 214, 0, 17.4, 17.6, 18.6], [17, 235, 0, 16.6, 16.8, 16.2], [16.3, 255, 0, 14.8, 15.4, 14.4], [15.3, 275, 0, 12.6, 13.2, 12], [14.6, 290, 0.5, 11, 11.5, 10.3], [14.3, 298, 1, 10.8, 11, 9.8], [14.2, 306, 0.5, 10.4, 10.4, 10.5], [14.3, 320, 0, 11, 9.6, 12.8], [14.1, 333, 0, 10.2, 9, 12.2], [13.8, 348, 0, 7.6, 7.4, 8.2], [13.6, 362, 0, 5.6, 5.8, 5.8], [13.5, 374, 0, 5, 5.4, 5.6], [13.5, 382, -0.5, 5.6, 6, 7], [13.5, 386, -1, 3, 3, 3]];
    loft('leg', S, smooth(leg, 4).map((r) => [k * r[0] * hip, r[1], r[2], r[3] * hip, r[4], r[5]]), 36, 'y', 2, '', legB);
    // Foot: heel to toes.
    loft('foot', S, smooth([[k * 13.5, 385, -8, 3.5, 3.5, 4], [k * 13.5, 386, -5, 5.6, 4.8, 6], [k * 13.8, 386.5, 2, 6.6, 4, 6], [k * 14.6, 387.5, 9, 7.4, 3.2, 4.4], [k * 15.2, 388.5, 16, 7.4, 2.6, 2.8], [k * 15.4, 389, 21, 6.2, 2, 2], [k * 15.4, 389.2, 24, 0.8, 0.8, 0.8]], 2), 14, 'z');
  });
  return K.finish();
}

// Colour of each face before light: skin (with warmer cheeks, knees and elbows), hair, shorts and the face.
const TONES = { light: [236, 196, 172], medium: [222, 172, 140], tan: [190, 140, 104], deep: [128, 86, 62] };
let SKIN = TONES.medium;
const setSkin = (t) => { SKIN = TONES[t] || TONES.medium; };
const HAIR = [64, 46, 34], SHORTS = [52, 70, 82], EYE = [70, 48, 36], LIP = [190, 112, 104];
function baseColor(f, fem) {
  const c = f.cen;
  if (f.part === 'iris') return EYE;
  if (f.part === 'eye') return [242, 238, 232];
  if (f.part === 'brow') return HAIR;
  if (f.part === 'lips') return LIP;
  if (f.part === 'head') {
    const g = Math.atan2(c[2] + 1, c[0]) * 180 / Math.PI;
    if (hairMask(c[1], (g + 360) % 360, fem) > 0.5) return HAIR;
  }
  if ((f.part === 'torso' && c[1] > 180) || (f.part === 'leg' && c[1] < 242)) return SHORTS;
  if (fem && f.part === 'torso' && c[1] > 84 && c[1] < 118) return [214, 120, 98];
  let warm = 0;
  if (f.part === 'head') { const g = (Math.atan2(c[2] + 1, c[0]) * 180 / Math.PI + 360) % 360; warm = 0.9 * G2(c[1], 30, 4, g, 55, 20) + 0.4 * G(c[1], 30, 3, g, 90, 10); }
  if (f.part === 'leg') warm = 0.7 * G(c[1], 298, 6, U(f.ang, f.side), 90, 35);
  if (f.part === 'arm') warm = 0.6 * G(c[1], 148, 5, U(f.ang, f.side), 270, 35);
  if (f.part === 'ear') warm = 0.5;
  return [Math.min(255, SKIN[0] + 14 * warm), SKIN[1] - 10 * warm, SKIN[2] - 10 * warm];
}

const MESH = { male: buildMesh('male'), female: buildMesh('female') };
// The skeleton, drawn like a vintage wall chart: ivory bone, blue-grey cartilage at the joints.
function buildSkeleton(sex) {
  const K = meshKit(), loft = K.loft, ell = K.ellipsoid, tube = K.sweep;
  const fem = sex === 'female', sh = fem ? 0.93 : 1, hw = fem ? 1.08 : 1;
  loft('skull', '', smooth([[0, 2, -1, 2, 2, 2], [0, 6, -1, 9, 9.5, 10.5], [0, 12, -1, 12.2, 12.2, 13.6], [0, 20, -1, 13, 12.8, 14.6], [0, 27, -1, 12.3, 12.5, 12.5], [0, 32, 0, 10.5, 12, 8.5], [0, 35, 0, 8, 10, 5], [0, 36, 0, 0.8, 0.8, 0.8]], 2), 16, 'y', 2, 'bone');
  ell('socket', 'R', [-4.8, 23.5, 10.9], 3.3, 3, 1.6, 8, 'dark');
  ell('socket', 'L', [4.8, 23.5, 10.9], 3.3, 3, 1.6, 8, 'dark');
  ell('nasal', '', [0, 30, 11.8], 1.8, 2.6, 1, 6, 'dark');
  tube('jaw', '', [[-10.5, 29, -1], [-10, 36, 2], [-7.5, 41.5, 7], [0, 44, 10.5], [7.5, 41.5, 7], [10, 36, 2], [10.5, 29, -1]], [2.2, 2.4, 2.4, 2.6, 2.4, 2.4, 2.2], 6, 'bone');
  ell('teeth', '', [0, 36.6, 10], 5.5, 1.6, 2.4, 10, 'teeth');
  for (let y = 44; y <= 60; y += 4) ell('spine', '', [0, y, -4], 3.2, 1.8, 3.2, 6, 'bone');
  for (let y = 64; y <= 179; y += 5) {
    const g = (y - 64) / 115;
    ell('spine', '', [0, y, -9 + g * 1.5], 3.6 + g * 1.8, 2.2, 3.4 + g * 1.4, 6, 'bone');
    ell('spine', '', [0, y + 0.5, -13.5 + g], 1.2, 1.8, 2.4, 5, 'bone');
  }
  ell('sternum', '', [0, 73, 16.5], 5, 5, 1.8, 8, 'bone');
  ell('sternum', '', [0, 94, 17.6], 3.4, 19, 1.6, 8, 'bone');
  [[-1, 'R'], [1, 'L']].forEach((q) => {
    const k = q[0], S = q[1];
    // Ribs: back half, front half and the cartilage that joins the breastbone, each drawn as its own piece.
    for (let i = 0; i < 10; i++) {
      const y0 = 68 + i * 8.2, bulge = Math.sin(Math.PI * (i + 1.5) / 12), W = 17 + 9 * bulge, D = 12 + 4.5 * bulge;
      const at = (deg) => { const a = deg * Math.PI / 180; return [k * W * Math.cos(a), y0 + (deg + 80) / 165 * (6 + i * 1.2), D * Math.sin(a)]; };
      const run = (a, b, st) => { const out = []; for (let d = a; d <= b + 0.01; d += st) out.push(at(d)); return out; };
      const stop = i < 7 ? 55 : i === 7 ? 45 : i === 8 ? 25 : 5;
      tube('ribB', S, run(-80, 0, 16), [1.3, 1.4, 1.4, 1.4, 1.4, 1.4], 5, 'bone');
      if (stop > 0) { const pts = run(0, stop, stop / 5); tube('ribF', S, pts, pts.map(() => 1.3), 5, 'bone'); }
      if (i < 8) { const pts = run(stop, 85, (85 - stop) / 3); tube('ribC', S, pts, pts.map(() => 1.2), 5, 'cart'); }
    }
    tube('clav', S, [[k * 3, 66, 13], [k * 12, 64.5, 12], [k * 22, 65, 8], [k * 31 * sh, 66.5, 1]], [1.8, 1.8, 1.7, 2.1], 6, 'bone');
    ell('scap', S, [k * 20 * sh, 93, -14.5], 10, 15, 2.2, 10, 'bone');
    tube('scap', S, [[k * 10, 84, -16], [k * 22 * sh, 80, -16], [k * 33 * sh, 74, -10]], [1.2, 1.4, 1.6], 5, 'bone');
    // Arm.
    ell('hum', S, [k * 37 * sh, 75, 0], 5.6, 5.6, 5.6, 8, 'cart');
    tube('hum', S, [[k * 39 * sh, 79, 0], [k * 44 * sh, 112, 0], [k * 48 * sh, 142, 0]], [2.6, 2.3, 2.6], 6, 'bone');
    ell('elbow', S, [k * 48.5 * sh, 146, 0], 5, 3, 3.6, 8, 'cart');
    tube('ulna', S, [[k * 47 * sh, 149, 0.5], [k * 50.5 * sh, 178, 1], [k * 54 * sh, 203, 2]], [2, 1.6, 1.6], 6, 'bone');
    tube('radius', S, [[k * 50.5 * sh, 150, -0.5], [k * 54 * sh, 178, 1], [k * 58 * sh, 203, 2.5]], [1.7, 1.6, 2.2], 6, 'bone');
    ell('carpal', S, [k * 56.5 * sh, 208, 2.5], 4.2, 3, 2.4, 8, 'bone');
    for (let f = 0; f < 4; f++) {
      const x0 = k * (53 + f * 2.2) * sh, tip = f === 0 || f === 3 ? 233 : 236;
      tube('fing', S, [[x0, 211, 2.5], [x0, 223, 2.8], [x0, tip, 3]], [1, 0.9, 0.7], 4, 'bone');
    }
    tube('fing', S, [[k * 59 * sh, 209, 3], [k * 61.5 * sh, 216, 4.5], [k * 63 * sh, 224, 5.5]], [1.1, 1, 0.8], 4, 'bone');
    // Pelvis.
    ell('ilium', S, [k * 16 * hw, 178, -4], 10 * hw, 8, 2.6, 10, 'bone');
    tube('ilium', S, [[k * 5, 172, -11], [k * 14 * hw, 167, -9], [k * 23 * hw, 168, -3], [k * 24 * hw, 175, 3], [k * 19 * hw, 182, 6]], [1.8, 2, 2.2, 2.2, 1.8], 6, 'bone');
    tube('pubis', S, [[k * 15 * hw, 188, -2], [k * 14 * hw, 196, 4], [k * 6, 201, 10], [k * 1, 202, 11]], [2.6, 2.6, 2.4, 2.2], 6, 'bone');
    tube('ischium', S, [[k * 14 * hw, 190, -4], [k * 12 * hw, 203, -4], [k * 8, 205, 1]], [2.6, 2.8, 2.2], 6, 'bone');
    // Leg.
    ell('femhead', S, [k * 14 * hw, 197.5, 0], 4.4, 4.4, 4.4, 8, 'cart');
    tube('femur', S, [[k * 15 * hw, 199, 0], [k * 20 * hw, 203, -0.5], [k * 19.5, 215, 0], [k * 17, 255, 1], [k * 15, 288, 1]], [3, 3.2, 3.2, 2.9, 3.4], 6, 'bone');
    ell('femur', S, [k * 21.5 * hw, 203, -1.5], 4, 4.5, 4, 8, 'bone');
    ell('condyle', S, [k * 14.5, 292, 0], 6.5, 4, 5.6, 10, 'cart');
    ell('patella', S, [k * 14.5, 295.5, 7.6], 3.6, 4.4, 1.8, 8, 'bone');
    ell('tibplat', S, [k * 14.3, 301, 0], 6.4, 3, 5.4, 10, 'cart');
    tube('tibia', S, [[k * 14.3, 302, 0.5], [k * 14, 335, 1], [k * 13.6, 368, 0.5]], [3.2, 2.6, 3], 6, 'bone');
    ell('tibia', S, [k * 11.6, 372, 0.5], 2.2, 2.8, 2.4, 6, 'bone');
    tube('fibula', S, [[k * 19, 303, -2.5], [k * 18.5, 338, -2], [k * 17.6, 372, -1.5]], [1.6, 1.2, 1.6], 5, 'bone');
    ell('fibula', S, [k * 17.6, 375, -1.5], 2, 2.8, 2.2, 6, 'bone');
    ell('tarsal', S, [k * 14, 383.5, -2], 4.6, 3.6, 6.5, 10, 'bone');
    ell('tarsal', S, [k * 13.6, 386, -6], 3.4, 3.4, 3, 8, 'bone');
    for (let m = 0; m < 5; m++) {
      const x = k * (10.5 + m * 2.3);
      tube('meta', S, [[x, 386, 4], [x + k * m * 0.3, 388, 13], [x + k * m * 0.4, 389, 20.5 - m * 1.3]], [1.1, 0.9, 0.7], 4, 'bone');
    }
  });
  ell('sacrum', '', [0, 182, -12], 7, 12, 3, 8, 'bone');
  const M = K.finish(), ARM = ['hum', 'elbow', 'ulna', 'radius', 'carpal', 'fing'], moved = {};
  M.F.forEach((f) => { if (ARM.indexOf(f.part) >= 0) f.v.forEach((ix) => { moved[ix] = 1; }); });
  Object.keys(moved).forEach((ix) => { const v = M.V[ix]; v[0] += Math.sign(v[0]) * Math.max(0, v[1] - 70) * 0.07; });
  M.F.forEach((f) => { if (ARM.indexOf(f.part) >= 0) f.cen = [0, 1, 2].map((m) => f.v.reduce((a, ix) => a + M.V[ix][m], 0) / 4); });
  return M;
}
// ---------- Muscle outlines and fibres, drawn on the body's surface like the lines of a wall chart.
// A point on a loft's surface at height y and ring angle g (degrees), nudged just above the skin.
function surf(mesh, part, side, y, g) {
  const l = mesh.L.find((q) => q.part === part && q.side === side && q.axis === 'y');
  if (!l) return null;
  const R = l.rings;
  let i = 0;
  while (i < R.length - 2 && R[i + 1][1] < y) i++;
  const t = Math.max(0, Math.min(1, (y - R[i][1]) / ((R[i + 1][1] - R[i][1]) || 1)));
  const r = R[i].map((v, m) => lerp(v, R[i + 1][m], t));
  const a = g * Math.PI / 180, cg = Math.cos(a), sg = Math.sin(a);
  const ux = Math.sign(cg) * Math.pow(Math.abs(cg), l.ex), uv = Math.sign(sg) * Math.pow(Math.abs(sg), l.ex);
  const rz = uv > 0 ? r[4] : r[5], ox = r[3] * ux, ov = rz * uv;
  const b = l.bump ? l.bump(y, g, side) / (Math.hypot(ox, ov) || 1) : 0;
  const n = unit([ux / Math.max(1, r[3]), 0, uv / Math.max(1, rz)]);
  return { p: [r[0] + ox * (1 + b) + n[0] * 0.35, y, r[2] + ov * (1 + b) + n[2] * 0.35], n };
}
// Stroke specs: [part, kind, [[y, angle], ...]]. Limb angles: 0 outer, 90 front, 180 inner, 270 back.
// Torso and neck angles are for the person's left side (0 left, 90 front, 270 back) and are mirrored.
const LINES = [
  // Chest and belly.
  ['torso', 'g', [[76, 87], [80, 87], [100, 86], [114, 76], [116, 56], [106, 38], [92, 28]]],
  ['torso', 'h', [[86, 84], [88, 40]]], ['torso', 'h', [[96, 84], [93, 37]]], ['torso', 'h', [[106, 82], [98, 36]]],
  ['torso', 'g', [[120, 78], [150, 79], [190, 83]]],
  ['torso', 'g', [[132, 78], [132, 89]]], ['torso', 'g', [[147, 78], [147, 89]]], ['torso', 'g', [[162, 79], [162, 89]]],
  ['torso', 'g', [[100, 41], [106, 31]]], ['torso', 'g', [[110, 43], [116, 31]]], ['torso', 'g', [[120, 44], [126, 32]]], ['torso', 'g', [[130, 45], [135, 33]]],
  ['torso', 'g', [[122, 46], [150, 52], [172, 62], [190, 76]]],
  ['torso', 'h', [[140, 50], [176, 70]]], ['torso', 'h', [[132, 60], [166, 74]]],
  ['torso', 'g', [[186, 40], [194, 62], [201, 86]]],
  // Back.
  ['torso', 'g', [[62, 330], [74, 342], [92, 322], [114, 286], [128, 271]]],
  ['torso', 'h', [[66, 300], [96, 290]]], ['torso', 'h', [[70, 320], [104, 300]]],
  ['torso', 'g', [[84, 300], [92, 330], [110, 332], [118, 316], [108, 296], [84, 300]]],
  ['torso', 'g', [[118, 354], [150, 332], [172, 300], [180, 281]]],
  ['torso', 'h', [[128, 346], [165, 300]]], ['torso', 'h', [[140, 343], [174, 296]]],
  ['torso', 'g', [[124, 280], [184, 282]]],
  ['torso', 'g', [[186, 302], [200, 330], [213, 300]]],
  ['torso', 'h', [[192, 284], [208, 322]]], ['torso', 'h', [[188, 290], [202, 330]]],
  // Neck.
  ['neck', 'g', [[39, 8], [50, 45], [61, 82]]], ['neck', 'g', [[39, 340], [55, 330], [62, 320]]],
  // Arm.
  ['arm', 'g', [[76, 100], [96, 32], [102, 0], [97, 330], [78, 262]]],
  ['arm', 'h', [[78, 60], [96, 22]]], ['arm', 'h', [[76, 0], [100, 0]]], ['arm', 'h', [[78, 300], [96, 338]]],
  ['arm', 'g', [[104, 50], [140, 70]]], ['arm', 'g', [[104, 132], [140, 112]]], ['arm', 'h', [[108, 90], [138, 90]]],
  ['arm', 'g', [[104, 230], [136, 250]]], ['arm', 'g', [[104, 310], [136, 292]]], ['arm', 'h', [[106, 270], [126, 270]]],
  ['arm', 'g', [[153, 30], [190, 70]]], ['arm', 'g', [[153, 132], [190, 112]]], ['arm', 'g', [[153, 240], [192, 262]]], ['arm', 'g', [[153, 330], [192, 300]]],
  ['arm', 'h', [[156, 80], [188, 92]]], ['arm', 'h', [[156, 290], [188, 282]]],
  // Thigh.
  ['leg', 'g', [[215, 70], [250, 112], [288, 170]]], ['leg', 'g', [[215, 84], [250, 128], [288, 184]]],
  ['leg', 'g', [[226, 82], [285, 86]]], ['leg', 'g', [[230, 100], [278, 100]]],
  ['leg', 'g', [[252, 122], [272, 142], [290, 126], [288, 102]]],
  ['leg', 'g', [[220, 40], [285, 62]]],
  ['leg', 'h', [[228, 92], [276, 93]]], ['leg', 'h', [[226, 55], [280, 72]]], ['leg', 'h', [[262, 118], [284, 118]]],
  ['leg', 'g', [[215, 250], [288, 232]]], ['leg', 'g', [[215, 290], [288, 308]]], ['leg', 'g', [[216, 270], [290, 270]]],
  ['leg', 'h', [[220, 255], [284, 252]]], ['leg', 'h', [[220, 285], [284, 290]]],
  // Knee.
  ['leg', 'g', [[291, 90], [295, 110], [301, 108], [304, 90], [301, 72], [295, 70], [291, 90]]],
  // Lower leg.
  ['leg', 'g', [[308, 220], [330, 205], [346, 240], [348, 270]]], ['leg', 'g', [[308, 320], [330, 336], [346, 300], [348, 270]]],
  ['leg', 'h', [[312, 240], [340, 252]]], ['leg', 'h', [[312, 300], [340, 288]]],
  ['leg', 'g', [[308, 58], [360, 80]]], ['leg', 'h', [[312, 76], [354, 88]]], ['leg', 'g', [[310, 20], [362, 30]]]
];
function buildStrokes(mesh) {
  const out = [];
  const dense = (pts) => {
    const res = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], dg = ((b[1] - a[1] + 540) % 360) - 180;
      for (let k = 0; k < 6; k++) res.push([lerp(a[0], b[0], k / 6), a[1] + dg * k / 6]);
    }
    res.push(pts[pts.length - 1]);
    return res;
  };
  LINES.forEach((ln) => {
    const part = ln[0], kind = ln[1], pts = dense(ln[2]);
    const sides = part === 'torso' || part === 'neck' ? [['', (g) => g], ['', (g) => (540 - g) % 360]] : [['L', (g) => g], ['R', (g) => (540 - g) % 360]];
    sides.forEach((sd) => {
      const P = pts.map((q) => surf(mesh, part, sd[0], q[0], sd[1](q[1]))).filter(Boolean);
      if (P.length > 1) out.push({ key: part + sd[0], kind, P });
    });
  });
  return out;
}
const STROKES = { male: buildStrokes(MESH.male), female: buildStrokes(MESH.female) };
const STROKE_STYLE = { g: { stroke: '#5A120F', sw: 0.6, so: 0.5 }, h: { stroke: '#FFD2C2', sw: 0.45, so: 0.55 } };
const SKEL = { male: buildSkeleton('male'), female: buildSkeleton('female') };
const BONE = [234, 222, 194], CART = [168, 190, 210], DARK = [74, 56, 46], TEETH = [244, 240, 230];

// Muscle chart colouring: red muscle with fibres, darker grooves between muscles,
// white tendon and blue-grey sheets of fascia where the chart shows them.
const MR = [176, 50, 44], MR2 = [200, 76, 62], MR3 = [162, 42, 38], MW = [228, 220, 204], MB = [190, 204, 214], MD = [112, 30, 28];
const near = (u, t, w) => Math.abs(((u - t + 540) % 360) - 180) <= w;
// Each muscle is a soft region on the body: bright in its belly, darker towards its edges, with dark gaps between
// muscles. Tendon and fascia regions (white, blue-grey) sit on top, like the sheets and cords on a wall chart.
// Entries: [y, angle, height spread, angle spread, kind]; kind m = muscle, p = pale (rectus in its sheath), t = white tendon, b = blue fascia.
// Torso, neck and head angles are mirrored to both sides; limb angles are u (0 outer, 90 front, 180 inner, 270 back).
const MUS = {
  head: [[8, 90, 9, 400, 'b'], [20, 20, 8, 22, 'm'], [36, 40, 5, 13, 'm'], [26, 70, 6, 14, 'm'], [33, 85, 4, 10, 'm'], [40, 90, 3.5, 22, 'm'], [16, 90, 4, 30, 'm'], [25, 270, 10, 60, 'b']],
  neck: [[50, 55, 10, 13, 'm'], [44, 90, 5, 10, 'p'], [55, 290, 8, 34, 'm'], [52, 20, 9, 14, 'm']],
  torso: [
    [95, 60, 16, 34, 'm'], [104, 34, 3.5, 8, 'm'], [114, 36, 3.5, 8, 'm'], [124, 38, 3.5, 8, 'm'],
    [152, 90, 40, 40, 't'], [128, 82, 6.5, 9, 'p'], [141, 82, 6.5, 9, 'p'], [154, 82, 6.5, 9, 'p'], [170, 83, 10, 8, 'p'],
    [150, 42, 26, 24, 'm'], [160, 12, 18, 18, 'm'], [197, 72, 9, 30, 't'],
    [68, 300, 10, 32, 'm'], [96, 284, 18, 16, 'm'], [100, 320, 9, 14, 'm'], [116, 336, 5, 12, 'm'],
    [140, 330, 26, 26, 'm'], [150, 281, 30, 9, 'm'], [170, 270, 18, 30, 't'],
    [186, 342, 8, 18, 'm'], [199, 304, 12, 30, 'm']
  ],
  arm: [
    [86, 20, 14, 105, 'm'], [118, 95, 18, 32, 'm'], [128, 30, 10, 15, 'm'], [112, 250, 20, 25, 'm'], [108, 300, 16, 22, 'm'], [134, 270, 8, 26, 't'],
    [149, 270, 3.5, 30, 'b'], [161, 40, 14, 22, 'm'], [168, 120, 18, 35, 'm'], [168, 260, 18, 40, 'm'], [198, 90, 6, 400, 't']
  ],
  leg: [
    [210, 20, 8, 18, 'm'], [255, 0, 36, 13, 'b'], [245, 90, 32, 16, 'm'], [255, 42, 30, 20, 'm'], [279, 136, 10, 22, 'm'], [228, 182, 18, 30, 'm'], [258, 205, 30, 10, 'm'],
    [250, 300, 30, 20, 'm'], [250, 238, 30, 20, 'm'], [297, 90, 7, 32, 't'], [308, 90, 5, 22, 't'], [301, 32, 7, 26, 'b'], [301, 148, 7, 26, 'b'], [300, 270, 6, 36, 'b'],
    [332, 68, 26, 18, 'm'], [336, 112, 32, 12, 't'], [325, 230, 14, 28, 'm'], [322, 305, 13, 26, 'm'], [350, 268, 10, 60, 'm'], [336, 8, 22, 16, 'm'],
    [368, 270, 8, 24, 't'], [377, 90, 5, 400, 't']
  ]
};
const MCOL = { m: [[160, 40, 34], [232, 118, 98]], p: [[200, 120, 104], [236, 172, 156]], t: [[226, 218, 202], [240, 234, 222]], b: [[176, 192, 206], [208, 220, 228]] };
const GAP = [146, 34, 30];
const memb = (e, y, a, mirror) => {
  const dy = (y - e[0]) / e[2], da1 = ad(a, e[1]) / e[3], da2 = mirror ? ad(a, (540 - e[1]) % 360) / e[3] : 9;
  return 1 - dy * dy - Math.min(da1, da2) * Math.min(da1, da2);
};
const mixc = (c1, c2, t) => [0, 1, 2].map((i) => c1[i] + (c2[i] - c1[i]) * t);
function muscleColor(f) {
  if (f.mc) return f.mc;
  const c = f.cen, y = c[1];
  let col;
  switch (f.part) {
    case 'eye': col = [242, 238, 232]; break;
    case 'iris': col = EYE; break;
    case 'brow': col = [150, 40, 34]; break;
    case 'lips': case 'nose': col = [196, 78, 66]; break;
    case 'ear': col = [212, 156, 136]; break;
    case 'fingers': case 'thumb': col = [206, 84, 70]; break;
    case 'hand': col = mixc([196, 70, 58], [222, 214, 204], Math.max(0, Math.min(1, (f.n[2] - 0.1) * 2.5)) * (y < 222 ? 1 : 0.3)); break;
    case 'foot': col = mixc([196, 76, 64], [214, 210, 200], Math.max(0, Math.min(1, (c[2] - 4) / 14))); break;
    default: {
      const list = MUS[f.part];
      if (!list) { col = MCOL.m[1]; break; }
      const mirror = f.part === 'torso' || f.part === 'neck' || f.part === 'head';
      const a = mirror ? f.ang : U(f.ang, f.side);
      let bm = 0, bk = 'm', tm = 0, tk = 't';
      list.forEach((e) => {
        const m = memb(e, y, a, mirror), k = e[4] || 'm';
        if (k === 't' || k === 'b') { if (m > tm) { tm = m; tk = k; } } else if (m > bm) { bm = m; bk = k; }
      });
      // Muscle: dark at its edge, bright in its belly; nothing nearby = the gap between muscles.
      const pal = MCOL[bk];
      // Blend smoothly from the groove into the muscle, so neighbouring faces never jump in colour.
      const sm = (x) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
      col = mixc(GAP, mixc(pal[0], pal[1], Math.pow(Math.max(0, bm), 0.65)), sm(bm / 0.4 + 0.1));
      // Tendon or fascia laid over the muscle.
      if (tm > 0) col = mixc(col, mixc(MCOL[tk][0], MCOL[tk][1], tm), sm(tm / 0.9));
    }
  }
  f.mc = col.map((v) => Math.min(255, Math.round(v / 3) * 3));
  return f.mc;
}

const LIGHT = unit([-0.68, -0.5, 0.52]);
const HALF = unit([LIGHT[0], LIGHT[1], LIGHT[2] + 1]);
// Small parts sit on top of the part they belong to, whatever the angle.
const PRIORITY = { neck: -2, head: 0, hand: 2.5, fingers: 2.6, thumb: 2.7, foot: 0 };
const FACE_PARTS = ['nose', 'lips', 'eye', 'iris', 'brow', 'ear'];
const SKULL_PARTS = ['socket', 'nasal', 'teeth'];

// Turn, cull, light and sort a mesh: each part is painted whole, far parts first,
// and inside a part the faces of one colour share a path.
function paintMesh(mesh, c, sn, colorOf, anchor, onTop, strokes) {
  const RV = mesh.V.map((p) => rotY(p, c, sn));
  const groups = {};
  mesh.F.forEach((f) => {
    const key = f.part + f.side, g = groups[key] || (groups[key] = { part: f.part, z: 0, n: 0, faces: {} });
    g.z += rotY(f.cen, c, sn)[2]; g.n++;
    const nr = rotY(f.n, c, sn);
    if (nr[2] <= 0) return;
    const ns = rotY(f.sn, c, sn);
    const lit = Math.max(0, ns[0] * LIGHT[0] + ns[1] * LIGHT[1] + ns[2] * LIGHT[2]);
    const rim = Math.pow(1 - Math.max(0, ns[2]), 3) * 0.14;
    const spec = Math.pow(Math.max(0, ns[0] * HALF[0] + ns[1] * HALF[1] + ns[2] * HALF[2]), 26) * 0.12;
    const form = Math.max(-0.2, Math.min(0.14, (f.bv || 0) * 0.055));
    const q = 40;
    const k = Math.round((0.36 + 0.76 * lit - rim + spec + form) * q) / q;
    const b = colorOf(f);
    const fill = 'rgb(' + Math.min(255, Math.round(b[0] * k)) + ',' + Math.min(255, Math.round(b[1] * k)) + ',' + Math.min(255, Math.round(b[2] * k)) + ')';
    g.faces[fill] = (g.faces[fill] || '') + 'M' + f.v.map((ix) => r1d(RV[ix][0]) + ' ' + r1d(RV[ix][1])).join('L') + 'Z';
  });
  (strokes || []).forEach((st) => {
    const g = groups[st.key];
    if (!g) return;
    let d = '', run = 0;
    st.P.forEach((q) => {
      const nz = rotY(q.n, c, sn)[2];
      if (nz < 0.12) { run = 0; return; }
      const r = rotY(q.p, c, sn);
      d += (run ? 'L' : 'M') + r1d(r[0]) + ' ' + r1d(r[1]);
      run++;
    });
    if (d.indexOf('L') > 0) {
      const sty = STROKE_STYLE[st.kind];
      (g.lines || (g.lines = [])).push({ fill: 'none', d, stroke: sty.stroke, sw: sty.sw, so: sty.so });
    }
  });
  const az = groups[anchor] ? groups[anchor].z / groups[anchor].n : 0;
  const bias = (g) => {
    const z = g.z / g.n;
    if (onTop.indexOf(g.part) >= 0) return (z > az ? 30 : -30) + (g.part === 'iris' ? 1 : 0);
    if (g.part === 'leg') return 3 * c;
    if (g.part === 'arm') return 2;
    return PRIORITY[g.part] || 0;
  };
  const out = [];
  Object.keys(groups).map((key) => ({ g: groups[key], z: groups[key].z / groups[key].n + bias(groups[key]) }))
    .sort((a, b) => a.z - b.z)
    .forEach((e) => {
      Object.keys(e.g.faces).forEach((fill) => out.push({ fill, d: e.g.faces[fill], stroke: fill, sw: 0.45, so: 1 }));
      (e.g.lines || []).forEach((ln) => out.push(ln));
    });
  return out;
}

// The body's outline as one path, for the faint pink figure behind the skeleton.
function silhouette(mesh, c, sn) {
  const RV = mesh.V.map((p) => rotY(p, c, sn));
  let d = '';
  mesh.F.forEach((f) => { if (rotY(f.n, c, sn)[2] > 0) d += 'M' + f.v.map((ix) => r1d(RV[ix][0]) + ' ' + r1d(RV[ix][1])).join('L') + 'Z'; });
  return d;
}

// Front-most face under a screen point; returns where it is on the body and which way it faces.
function hitTest(mesh, px, py, c, s) {
  const RV = mesh.V.map((p) => rotY(p, c, s));
  let best = null;
  mesh.F.forEach((f) => {
    const nr = rotY(f.n, c, s);
    if (nr[2] <= 0.02) return;
    const P = f.v.map((i) => RV[i]);
    let pos = 0, neg = 0;
    for (let i = 0; i < 4; i++) {
      const a = P[i], b = P[(i + 1) % 4];
      const cr = (b[0] - a[0]) * (py - a[1]) - (b[1] - a[1]) * (px - a[0]);
      if (cr > 1e-6) pos++; else if (cr < -1e-6) neg++;
    }
    if (pos && neg) return;
    const C = rotY(f.cen, c, s);
    const depth = C[2] - (nr[0] * (px - C[0]) + nr[1] * (py - C[1])) / nr[2];
    if (!best || depth > best.depth) best = { f, depth };
  });
  if (!best) return null;
  const f = best.f;
  return { part: f.part, side: f.side, depth: best.depth, p: unrotY([px, py, best.depth], c, s), n: f.n };
}

// Which way a surface faces, for naming.
function facing(h) {
  const p = h.p, n = h.n, S = h.side || (p[0] < 0 ? 'R' : 'L');
  const out = (S === 'R' ? -1 : 1) * n[0];
  const limb = ['arm', 'hand', 'fingers', 'thumb', 'leg'].indexOf(h.part) >= 0;
  const hl = Math.hypot(n[0], n[2]) || 1, nz = limb ? n[2] / hl : n[2];
  const face = !limb && n[1] < -0.6 ? 'top' : !limb && n[1] > 0.6 ? 'bottom' : nz > 0.45 ? 'front' : nz < -0.45 ? 'back' : out > 0 ? 'outer' : 'inner';
  return { S, face };
}

// Plain-language name of a surface point, in English and French.
function spotName(h) {
  const p = h.p, y = p[1], fc = facing(h), S = fc.S, face = fc.face;
  const sub = (en, fr) => {
    const e = en.replace('{s}', S === 'R' ? 'right' : 'left'), f = fr.replace('{m}', S === 'R' ? 'droit' : 'gauche').replace('{f}', S === 'R' ? 'droite' : 'gauche');
    return { en: e.charAt(0).toUpperCase() + e.slice(1), fr: f.charAt(0).toUpperCase() + f.slice(1) };
  };
  const pick = (m) => sub(...(m[face] || m.other));
  const shoulder = { top: ['top of {s} shoulder', 'dessus de l’épaule {f}'], front: ['front of {s} shoulder', 'avant de l’épaule {f}'], back: ['back of {s} shoulder (shoulder blade)', 'arrière de l’épaule {f} (omoplate)'], other: ['outside of {s} shoulder', 'côté de l’épaule {f}'] };
  const elbow = { back: ['point of {s} elbow', 'pointe du coude {m}'], front: ['inside of {s} elbow', 'pli du coude {m}'], other: ['{s} elbow (side)', 'coude {m} (côté)'] };
  const knee = { front: ['{s} kneecap', 'rotule {f}'], back: ['back of {s} knee', 'arrière du genou {m}'], outer: ['outer {s} knee', 'extérieur du genou {m}'], other: ['inner {s} knee', 'intérieur du genou {m}'] };
  const centre = Math.abs(p[0]) < 7;
  switch (h.part) {
    case 'head': case 'nose': case 'lips': case 'eye': case 'iris': case 'brow': case 'ear':
      if (h.part === 'ear') return sub('{s} ear', 'oreille {f}');
      if (h.part === 'eye' || h.part === 'iris' || h.part === 'brow') return sub('around the {s} eye', 'autour de l’œil {m}');
      if (face === 'top') return sub('top of head', 'dessus de la tête');
      if (face === 'front' || h.part === 'nose' || h.part === 'lips') return y < 21 ? sub('forehead', 'front') : y > 37 ? sub('jaw and chin', 'mâchoire et menton') : sub('face', 'visage');
      if (face === 'back') return sub('back of head', 'arrière de la tête');
      return sub('{s} temple, side of head', 'tempe {f}, côté de la tête');
    case 'neck':
      return face === 'front' ? sub('front of neck (throat)', 'avant du cou (gorge)') : face === 'back' ? sub('back of neck', 'nuque') : sub('{s} side of neck', 'côté {m} du cou');
    case 'torso':
      if (y < 84 && Math.abs(p[0]) > 22) return pick(shoulder);
      if (y < 68 && centre && face !== 'back') return sub('base of the neck', 'base du cou');
      if (y < 68) return face === 'back' || face === 'top' ? sub('{s} upper trapezius (top of shoulder)', 'trapèze supérieur {m} (haut de l’épaule)') : sub('{s} collarbone', 'clavicule {f}');
      if (face === 'front' || (face !== 'back' && h.n[2] > 0.15)) {
        if (y < 114) return centre ? sub('breastbone', 'sternum') : sub('{s} chest', 'poitrine, côté {m}');
        if (y < 150) return centre ? sub('upper belly (centre)', 'haut du ventre (centre)') : sub('upper belly, {s} side', 'haut du ventre, côté {m}');
        if (y < 184) return centre ? sub('lower belly (centre)', 'bas du ventre (centre)') : sub('lower belly, {s} side', 'bas du ventre, côté {m}');
        return sub('{s} groin and pelvis', 'aine {f} et bassin');
      }
      if (face === 'back' || h.n[2] < -0.15) {
        if (y > 184) return sub('{s} buttock', 'fesse {f}');
        if (y < 120) return Math.abs(p[0]) < 6 ? sub('upper spine, between the shoulder blades', 'haut de la colonne, entre les omoplates') : sub('{s} shoulder blade area', 'région de l’omoplate {f}');
        if (y < 160) return Math.abs(p[0]) < 6 ? sub('mid spine', 'milieu de la colonne') : sub('mid back, {s} side', 'milieu du dos, côté {m}');
        return Math.abs(p[0]) < 6 ? sub('lower spine', 'bas de la colonne') : sub('lower back, {s} side', 'bas du dos, côté {m}');
      }
      if (y < 125) return sub('{s} ribs, side of chest', 'côtes, côté {m} de la poitrine');
      if (y < 176) return sub('{s} flank, side of waist', 'flanc {m}');
      return sub('{s} hip', 'hanche {f}');
    case 'arm':
      if (y < 88) return pick(shoulder);
      if (y < 140) return pick({ front: ['front of {s} upper arm (biceps)', 'avant du bras {m} (biceps)'], back: ['back of {s} upper arm (triceps)', 'arrière du bras {m} (triceps)'], outer: ['outer {s} upper arm', 'extérieur du bras {m}'], other: ['inner {s} upper arm', 'intérieur du bras {m}'] });
      if (y < 157) return pick(elbow);
      if (y < 196) return pick({ front: ['{s} forearm, palm side', 'avant-bras {m}, côté paume'], back: ['{s} forearm, back', 'avant-bras {m}, dessus'], outer: ['{s} forearm, thumb side', 'avant-bras {m}, côté pouce'], other: ['{s} forearm, little-finger side', 'avant-bras {m}, côté auriculaire'] });
      return pick({ front: ['palm side of {s} wrist', 'poignet {m}, côté paume'], back: ['back of {s} wrist', 'dos du poignet {m}'], outer: ['thumb side of {s} wrist', 'poignet {m}, côté pouce'], other: ['little-finger side of {s} wrist', 'poignet {m}, côté auriculaire'] });
    case 'fingers': return sub('{s} fingers', 'doigts de la main {f}');
    case 'thumb': return sub('{s} thumb', 'pouce {m}');
    case 'hand':
      return pick({ front: ['{s} palm', 'paume {f}'], back: ['back of {s} hand', 'dos de la main {f}'], other: ['{s} hand, side', 'main {f}, côté'] });
    case 'leg':
      if (y < 214) return pick({ front: ['front of {s} hip', 'avant de la hanche {f}'], back: ['{s} buttock crease', 'pli de la fesse {f}'], outer: ['outer {s} hip', 'hanche {f}, côté extérieur'], other: ['{s} groin', 'aine {f}'] });
      if (y < 287) return pick({ front: ['front of {s} thigh (quadriceps)', 'avant de la cuisse {f} (quadriceps)'], back: ['back of {s} thigh (hamstring)', 'arrière de la cuisse {f} (ischiojambiers)'], outer: ['outer {s} thigh (IT band)', 'extérieur de la cuisse {f} (bandelette ilio-tibiale)'], other: ['inner {s} thigh', 'intérieur de la cuisse {f}'] });
      if (y < 309) return pick(knee);
      if (y < 364) return pick({ front: ['{s} shin', 'tibia {m}'], back: ['{s} calf', 'mollet {m}'], outer: ['outer {s} lower leg', 'jambe {f}, côté extérieur'], other: ['inner {s} shin', 'jambe {f}, côté intérieur'] });
      return pick({ front: ['front of {s} ankle', 'avant de la cheville {f}'], back: ['{s} Achilles tendon', 'tendon d’Achille {m}'], outer: ['outer {s} ankle', 'cheville {f}, côté extérieur'], other: ['inner {s} ankle', 'cheville {f}, côté intérieur'] });
    case 'foot':
      if (face === 'bottom') return sub('sole of {s} foot', 'plante du pied {m}');
      if (p[2] < 0) return sub('{s} heel', 'talon {m}');
      if (p[2] > 15) return sub('{s} toes', 'orteils du pied {m}');
      if (face === 'inner') return sub('inner {s} foot (arch)', 'intérieur du pied {m} (arche)');
      if (face === 'outer') return sub('outer {s} foot', 'extérieur du pied {m}');
      return sub('top of {s} foot', 'dessus du pied {m}');
  }
  return sub('body', 'corps');
}

// The PainMap area a spot belongs to (the ids the main prototype uses).
function areaId(h) {
  const y = h.p[1], fc = facing(h), s = fc.S === 'R' ? 'r' : 'l', back = h.n[2] < 0;
  switch (h.part) {
    case 'neck': return back ? 'neck-b' : 'neck-f';
    case 'torso':
      if (y < 84 && Math.abs(h.p[0]) > 22) return 'sh-' + s;
      if (!back) return y < 122 ? 'chest' : y < 194 ? 'abd' : 'hip-' + s;
      return y < 128 ? 'ub' : y < 184 ? 'lb' : 'gl-' + s;
    case 'arm': return y < 118 ? 'sh-' + s : y < 176 ? 'el-' + s : 'wr-' + s;
    case 'hand': case 'fingers': case 'thumb': return 'wr-' + s;
    case 'leg':
      if (y < 214) return back ? 'gl-' + s : 'hip-' + s;
      if (y < 262) return back ? 'hs-' + s : 'hip-' + s;
      if (y < 286) return back ? 'hs-' + s : 'kn-' + s;
      if (y < 310) return 'kn-' + s;
      if (y < 364) return back ? 'cf-' + s : 'sn-' + s;
      return back ? 'hl-' + s : 'an-' + s;
    case 'foot': return h.p[2] < 0 ? 'hl-' + s : 'an-' + s;
  }
  return 'head';
}


// Muscle labels for the chart view: [English, French, part, mirrored?, y, angle]. Limb angles: 0 outer, 90 front, 180 inner, 270 back.
const MLABELS = [
  ['Temporalis', 'Temporal', 'head', 1, 20, 20], ['Masseter', 'Masséter', 'head', 1, 36, 40], ['Orbicularis oris', 'Orbiculaire des lèvres', 'head', 0, 37, 90],
  ['Sternocleidomastoid', 'Sterno-cléido-mast.', 'neck', 1, 50, 55], ['Trapezius', 'Trapèze', 'torso', 1, 74, 300],
  ['Pectoralis major', 'Grand pectoral', 'torso', 1, 95, 60], ['Serratus anterior', 'Dentelé antérieur', 'torso', 1, 114, 36],
  ['Rectus abdominis', 'Grand droit', 'torso', 1, 145, 84], ['External oblique', 'Oblique externe', 'torso', 1, 152, 45],
  ['Latissimus dorsi', 'Grand dorsal', 'torso', 1, 140, 330], ['Infraspinatus', 'Infra-épineux', 'torso', 1, 100, 320], ['Thoracolumbar fascia', 'Fascia lombaire', 'torso', 0, 170, 270],
  ['Gluteus medius', 'Moyen fessier', 'torso', 1, 186, 342], ['Gluteus maximus', 'Grand fessier', 'torso', 1, 200, 304],
  ['Deltoid', 'Deltoïde', 'arm', 1, 86, 20], ['Biceps brachii', 'Biceps brachial', 'arm', 1, 118, 95], ['Triceps brachii', 'Triceps brachial', 'arm', 1, 112, 260],
  ['Brachioradialis', 'Brachioradial', 'arm', 1, 160, 40], ['Flexor carpi radialis', 'Fléchisseur radial', 'arm', 1, 170, 110], ['Extensor digitorum', 'Extenseur des doigts', 'arm', 1, 172, 270],
  ['Iliotibial tract', 'Bandelette ilio-tibiale', 'leg', 1, 255, 0], ['Rectus femoris', 'Droit fémoral', 'leg', 1, 245, 90], ['Vastus lateralis', 'Vaste latéral', 'leg', 1, 262, 42],
  ['Vastus medialis', 'Vaste médial', 'leg', 1, 279, 136], ['Sartorius', 'Couturier', 'leg', 1, 238, 122], ['Adductor longus', 'Long adducteur', 'leg', 1, 224, 172], ['Gracilis', 'Gracile', 'leg', 1, 258, 205],
  ['Biceps femoris', 'Biceps fémoral', 'leg', 1, 250, 300], ['Semitendinosus', 'Semi-tendineux', 'leg', 1, 250, 238], ['Patellar ligament', 'Ligament patellaire', 'leg', 1, 307, 90],
  ['Tibialis anterior', 'Tibial antérieur', 'leg', 1, 330, 68], ['Peroneus longus', 'Long fibulaire', 'leg', 1, 336, 8], ['Gastrocnemius', 'Gastrocnémien', 'leg', 1, 325, 230], ['Soleus', 'Soléaire', 'leg', 1, 350, 268],
  ['Tendo calcaneus', 'Tendon d’Achille', 'leg', 1, 368, 270],
  ['Frontalis', 'Frontal', 'head', 0, 13, 90], ['Orbicularis oculi', 'Orbiculaire de l’œil', 'head', 1, 23, 64], ['Zygomaticus major', 'Grand zygomatique', 'head', 1, 32, 60], ['Occipitalis', 'Occipital', 'head', 0, 22, 270],
  ['Splenius capitis', 'Splénius de la tête', 'neck', 1, 46, 300], ['Rhomboids (under trapezius)', 'Rhomboïdes (sous le trapèze)', 'torso', 1, 98, 290], ['Teres major', 'Grand rond', 'torso', 1, 116, 336],
  ['Erector spinae', 'Érecteurs du rachis', 'torso', 1, 150, 281], ['Linea alba', 'Ligne blanche', 'torso', 0, 138, 90],
  ['Brachialis', 'Brachial', 'arm', 1, 128, 30], ['Coracobrachialis', 'Coraco-brachial', 'arm', 1, 98, 150], ['Anconeus', 'Anconé', 'arm', 1, 152, 270],
  ['Pronator teres', 'Rond pronateur', 'arm', 1, 157, 120], ['Palmaris longus', 'Long palmaire', 'arm', 1, 176, 100], ['Flexor carpi ulnaris', 'Fléchisseur ulnaire du carpe', 'arm', 1, 172, 160],
  ['Extensor carpi radialis', 'Extenseur radial du carpe', 'arm', 1, 165, 330], ['Extensor carpi ulnaris', 'Extenseur ulnaire du carpe', 'arm', 1, 176, 240],
  ['Thenar muscles', 'Éminence thénar', 'hand', 1, 214, 60], ['Hypothenar muscles', 'Éminence hypothénar', 'hand', 1, 216, 130],
  ['Tensor fasciae latae', 'Tenseur du fascia lata', 'leg', 1, 210, 20], ['Pectineus', 'Pectiné', 'leg', 1, 214, 150], ['Adductor magnus', 'Grand adducteur', 'leg', 1, 242, 215],
  ['Semimembranosus', 'Semi-membraneux', 'leg', 1, 268, 225], ['Extensor digitorum longus', 'Long extenseur des orteils', 'leg', 1, 342, 40], ['Flexor digitorum longus', 'Long fléchisseur des orteils', 'leg', 1, 346, 175]
];
// Plain words shown after each medical name: [English, French].
const PLAIN = {
  'Temporalis': ['temple', 'tempe'], 'Masseter': ['jaw', 'mâchoire'], 'Orbicularis oris': ['lips', 'lèvres'], 'Sternocleidomastoid': ['neck', 'cou'], 'Trapezius': ['upper back', 'haut du dos'],
  'Pectoralis major': ['chest', 'poitrine'], 'Serratus anterior': ['side of ribs', 'côtes'], 'Rectus abdominis': ['abs', 'abdos'], 'External oblique': ['side of belly', 'flanc'],
  'Latissimus dorsi': ['mid back', 'milieu du dos'], 'Infraspinatus': ['shoulder blade', 'omoplate'], 'Thoracolumbar fascia': ['lower back', 'bas du dos'], 'Gluteus medius': ['side of hip', 'hanche'], 'Gluteus maximus': ['buttock', 'fesse'],
  'Deltoid': ['shoulder', 'épaule'], 'Biceps brachii': ['front of arm', 'avant du bras'], 'Triceps brachii': ['back of arm', 'arrière du bras'], 'Brachioradialis': ['forearm', 'avant-bras'], 'Flexor carpi radialis': ['forearm', 'avant-bras'], 'Extensor digitorum': ['back of forearm', 'dos de l’avant-bras'],
  'Iliotibial tract': ['outer thigh', 'extérieur de la cuisse'], 'Rectus femoris': ['front of thigh', 'avant de la cuisse'], 'Vastus lateralis': ['outer thigh', 'extérieur de la cuisse'], 'Vastus medialis': ['above inner knee', 'au-dessus du genou'], 'Sartorius': ['thigh', 'cuisse'],
  'Adductor longus': ['inner thigh', 'intérieur de la cuisse'], 'Gracilis': ['inner thigh', 'intérieur de la cuisse'], 'Biceps femoris': ['hamstring', 'ischiojambier'], 'Semitendinosus': ['hamstring', 'ischiojambier'], 'Patellar ligament': ['below kneecap', 'sous la rotule'],
  'Tibialis anterior': ['shin', 'tibia'], 'Peroneus longus': ['outer calf', 'extérieur du mollet'], 'Gastrocnemius': ['calf', 'mollet'], 'Soleus': ['lower calf', 'bas du mollet'], 'Tendo calcaneus': ['Achilles', 'Achille'],
  'Frontalis': ['forehead', 'front'], 'Orbicularis oculi': ['around the eye', 'autour de l’œil'], 'Zygomaticus major': ['cheek', 'joue'], 'Occipitalis': ['back of head', 'arrière de la tête'], 'Splenius capitis': ['back of neck', 'nuque'],
  'Rhomboids (under trapezius)': ['between shoulder blades', 'entre les omoplates'], 'Teres major': ['armpit', 'aisselle'], 'Erector spinae': ['along the spine', 'le long de la colonne'], 'Linea alba': ['belly midline', 'milieu du ventre'],
  'Brachialis': ['upper arm', 'bras'], 'Coracobrachialis': ['inner arm', 'intérieur du bras'], 'Anconeus': ['elbow', 'coude'], 'Pronator teres': ['inner elbow', 'pli du coude'], 'Palmaris longus': ['wrist', 'poignet'],
  'Flexor carpi ulnaris': ['forearm', 'avant-bras'], 'Extensor carpi radialis': ['forearm', 'avant-bras'], 'Extensor carpi ulnaris': ['forearm', 'avant-bras'], 'Thenar muscles': ['thumb', 'pouce'], 'Hypothenar muscles': ['little finger', 'auriculaire'],
  'Tensor fasciae latae': ['hip', 'hanche'], 'Pectineus': ['groin', 'aine'], 'Adductor magnus': ['inner thigh', 'intérieur de la cuisse'], 'Semimembranosus': ['hamstring', 'ischiojambier'], 'Extensor digitorum longus': ['shin', 'tibia'], 'Flexor digitorum longus': ['inner calf', 'intérieur du mollet'],
  'Skull': ['head', 'tête'], 'Clavicle': ['collarbone', 'clavicule'], 'Sternum': ['breastbone', 'os de la poitrine'], 'Ribs': ['chest', 'poitrine'], 'Scapula': ['shoulder blade', 'omoplate'], 'Spine (vertebrae)': ['backbone', 'dos'],
  'Sacrum': ['base of spine', 'bas de la colonne'], 'Humerus': ['upper arm', 'bras'], 'Radius': ['forearm, thumb side', 'avant-bras, côté pouce'], 'Ulna': ['forearm, little-finger side', 'avant-bras, côté auriculaire'], 'Hand bones': ['hand', 'main'],
  'Pelvis (ilium)': ['hip bone', 'os de la hanche'], 'Femur': ['thigh bone', 'os de la cuisse'], 'Patella': ['kneecap', 'rotule'], 'Tibia': ['shin bone', 'os du tibia'], 'Fibula': ['outer leg bone', 'os externe de la jambe'], 'Foot bones': ['foot', 'pied'],
  'Lumbar vertebrae': ['lower back', 'bas du dos'], 'Costal cartilage': ['rib ends', 'bout des côtes'], 'Pubis': ['front of pelvis', 'avant du bassin'], 'Ischium': ['sitting bone', 'os d’assise'], 'Head of femur': ['hip joint', 'articulation de la hanche'],
  'Greater trochanter': ['side of hip', 'côté de la hanche'], 'Metatarsals': ['foot', 'pied'], 'Lateral malleolus': ['outer ankle', 'cheville extérieure'], 'Medial malleolus': ['inner ankle', 'cheville intérieure']
};
const plainEn = (n) => (PLAIN[n] ? n + ' · ' + PLAIN[n][0] : n);
const plainFr = (n, f) => (PLAIN[n] ? f + ' · ' + PLAIN[n][1] : f);
function buildLabels(mesh, list) {
  const out = [];
  list.forEach((m) => {
    const sides = m[2] === 'arm' || m[2] === 'leg' || m[2] === 'hand' ? [['L', m[5]], ['R', (540 - m[5]) % 360]] : m[3] ? [['', m[5]], ['', (540 - m[5]) % 360]] : [['', m[5]]];
    sides.forEach((sd) => { const q = surf(mesh, m[2], sd[0], m[4], sd[1]); if (q) out.push({ en: plainEn(m[0]), fr: plainFr(m[0], m[1]), p: q.p, n: q.n }); });
  });
  return out;
}

// Everyday body areas for the skin view: [English, French, part, mirrored?, y, angle] (same as the muscle labels).
const SLABELS = [
  ['Forehead', 'Front', 'head', 0, 16, 90], ['Cheek', 'Joue', 'head', 1, 30, 58], ['Chin', 'Menton', 'head', 0, 42, 90], ['Back of head', 'Arrière de la tête', 'head', 0, 24, 270],
  ['Neck', 'Cou', 'neck', 1, 50, 40], ['Shoulder', 'Épaule', 'arm', 1, 84, 20], ['Chest', 'Poitrine', 'torso', 1, 100, 70], ['Abdomen', 'Abdomen', 'torso', 0, 150, 90], ['Groin', 'Aine', 'torso', 1, 198, 70],
  ['Upper back', 'Haut du dos', 'torso', 0, 110, 270], ['Shoulder blade', 'Omoplate', 'torso', 1, 100, 315], ['Lower back', 'Bas du dos', 'torso', 0, 172, 270], ['Buttock', 'Fesse', 'torso', 1, 199, 305],
  ['Upper arm', 'Bras', 'arm', 1, 112, 60], ['Elbow', 'Coude', 'arm', 1, 148, 270], ['Forearm', 'Avant-bras', 'arm', 1, 172, 70], ['Wrist', 'Poignet', 'arm', 1, 199, 90], ['Hand', 'Main', 'hand', 1, 216, 90],
  ['Hip', 'Hanche', 'leg', 1, 205, 20], ['Thigh', 'Cuisse', 'leg', 1, 245, 70], ['Back of thigh', 'Arrière de la cuisse', 'leg', 1, 255, 270], ['Knee', 'Genou', 'leg', 1, 297, 90], ['Back of knee', 'Creux du genou', 'leg', 1, 301, 270],
  ['Shin', 'Jambe (tibia)', 'leg', 1, 335, 100], ['Calf', 'Mollet', 'leg', 1, 330, 250], ['Ankle', 'Cheville', 'leg', 1, 373, 40],
  ['Temple', 'Tempe', 'head', 1, 20, 20], ['Nose', 'Nez', 'head', 0, 28, 90], ['Collarbone', 'Clavicule', 'torso', 1, 66, 55], ['Side of ribs', 'Côté des côtes', 'torso', 1, 125, 10],
  ['Belly button', 'Nombril', 'torso', 0, 158, 90], ['Waist', 'Taille', 'torso', 1, 150, 22], ['Lower belly', 'Bas-ventre', 'torso', 0, 180, 90], ['Spine', 'Colonne', 'torso', 0, 140, 270],
  ['Back of arm', 'Arrière du bras', 'arm', 1, 115, 270], ['Back of hand', 'Dos de la main', 'hand', 1, 216, 270],
  ['Inner thigh', 'Intérieur de la cuisse', 'leg', 1, 240, 180], ['Outer thigh', 'Extérieur de la cuisse', 'leg', 1, 250, 0], ['Kneecap', 'Rotule', 'leg', 1, 296, 90],
  ['Achilles tendon', 'Tendon d’Achille', 'leg', 1, 368, 270], ['Inner ankle', 'Cheville intérieure', 'leg', 1, 371, 180]
];
// Bones for the skeleton view, placed directly: [English, French, both sides?, x, y, z, normal x, y, z, follows the arm pose?].
const BLABELS = [
  ['Skull', 'Crâne', 0, 0, 10, 12, 0, -0.3, 1, 0], ['Skull', 'Crâne', 0, 0, 14, -14, 0, -0.2, -1, 0], ['Mandible (jaw)', 'Mandibule', 0, 0, 43, 10.5, 0, 0.3, 1, 0],
  ['Clavicle', 'Clavicule', 1, 14, 64.5, 13, 0, -0.3, 1, 0], ['Sternum', 'Sternum', 0, 0, 96, 19.5, 0, 0, 1, 0], ['Ribs', 'Côtes', 1, 21, 112, 14, 0.4, 0, 1, 0],
  ['Scapula', 'Omoplate', 1, 20, 93, -17, 0, 0, -1, 0], ['Spine (vertebrae)', 'Colonne vertébrale', 0, 0, 140, -15, 0, 0, -1, 0], ['Sacrum', 'Sacrum', 0, 0, 184, -15, 0, 0, -1, 0],
  ['Humerus', 'Humérus', 1, 44.5, 112, 2.6, 0.4, 0, 1, 1], ['Radius', 'Radius', 1, 54.5, 180, 3.5, 0.5, 0, 1, 1], ['Ulna', 'Ulna (cubitus)', 1, 51, 178, -1, 0, 0, -1, 1], ['Hand bones', 'Os de la main', 1, 57, 224, 4, 0, 0, 1, 1],
  ['Pelvis (ilium)', 'Bassin (ilium)', 1, 22, 172, 3, 0.5, 0, 1, 0], ['Femur', 'Fémur', 1, 18, 252, 4.2, 0, 0, 1, 0], ['Patella', 'Rotule', 1, 14.5, 296, 9.6, 0, 0, 1, 0],
  ['Tibia', 'Tibia', 1, 14, 336, 4, 0, 0, 1, 0], ['Fibula', 'Fibula (péroné)', 1, 19.5, 338, -3.5, 0.6, 0, -0.8, 0], ['Foot bones', 'Os du pied', 1, 14, 386, 14, 0, -0.6, 0.8, 0],
  ['Calcaneus (heel)', 'Calcanéus (talon)', 1, 13.6, 386, -9.5, 0, 0, -1, 0],
  ['Eye socket (orbit)', 'Orbite', 1, 4.8, 23.5, 12.5, 0, 0, 1, 0], ['Cervical vertebrae (neck)', 'Vertèbres cervicales', 0, 0, 50, -7, 0, 0, -1, 0], ['Lumbar vertebrae', 'Vertèbres lombaires', 0, 0, 168, -14, 0, 0, -1, 0],
  ['Costal cartilage', 'Cartilage costal', 1, 10, 108, 17.5, 0.3, 0, 1, 0], ['Pubis', 'Pubis', 1, 7, 200, 10.5, 0, 0, 1, 0], ['Ischium', 'Ischion', 1, 12, 203, -5, 0, 0, -1, 0],
  ['Head of femur', 'Tête du fémur', 1, 14, 197.5, 4.5, 0.3, 0, 1, 0], ['Greater trochanter', 'Grand trochanter', 1, 25.5, 203, -1.5, 1, 0, 0, 0], ['Knee joint (cartilage)', 'Articulation du genou', 1, 14.5, 301, 5.5, 0.5, 0, 1, 0],
  ['Carpals (wrist bones)', 'Os du carpe', 1, 56.5, 208, 5, 0, 0, 1, 1], ['Phalanges (finger bones)', 'Phalanges', 1, 57, 234, 3.8, 0, 0, 1, 1],
  ['Metatarsals', 'Métatarsiens', 1, 13, 388, 10, 0, -0.6, 0.8, 0], ['Lateral malleolus', 'Malléole latérale', 1, 19.6, 375, -1.5, 1, 0, 0, 0], ['Medial malleolus', 'Malléole médiale', 1, 9.4, 372, 0.5, -1, 0, 0, 0]
];
function buildBoneLabels() {
  const out = [];
  BLABELS.forEach((b) => {
    (b[2] ? [-1, 1] : [1]).forEach((k) => {
      let x = k * b[3];
      if (b[9]) x += Math.sign(x) * Math.max(0, b[4] - 70) * 0.07;
      out.push({ en: plainEn(b[0]), fr: plainFr(b[0], b[1]), p: [x, b[4], b[5]], n: unit([k * b[6], b[7], b[8]]) });
    });
  });
  return out;
}
const LABELPTS = { muscle: { male: buildLabels(MESH.male, MLABELS), female: buildLabels(MESH.female, MLABELS) }, skin: { male: buildLabels(MESH.male, SLABELS), female: buildLabels(MESH.female, SLABELS) }, bone: { male: buildBoneLabels(), female: buildBoneLabels() } };
// Labels sit on the body at the part they name. Front-facing parts win; a label that would overlap another is nudged up or down, or left out.
function placeLabels(mesh, pts, c, sn, fr) {
  const best = {};
  pts.forEach((q) => {
    const nr = rotY(q.n, c, sn);
    if (nr[2] < 0.2) return;
    // One label per part per side of the body, so both shoulders, knees and so on are named.
    const P = rotY(q.p, c, sn), key = q.en + '|' + Math.sign(Math.round(q.p[0]));
    if (!best[key] || nr[2] > best[key].f) best[key] = { x: P[0], y: P[1], f: nr[2], text: fr ? q.fr : q.en };
  });
  const all = Object.keys(best).map((k) => best[k]).sort((a, b) => b.f - a.f);
  const boxes = [];
  const hits = (b) => boxes.some((o) => b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]);
  const out = [], done = {};
  all.forEach((v) => {
    const fs = r1d(Math.max(5.6, Math.min(7.2, 72 / (v.text.length * 0.52))));
    const w = v.text.length * fs * 0.52, h = fs * 1.1;
    // The second side of a pair (left and right knee) only shows if it fits without moving.
    const tries = done[v.text] ? [0] : [0, -h, h, -2 * h, 2 * h];
    for (let i = 0; i < tries.length; i++) {
      const cy = v.y + tries[i];
      const b = [v.x - w / 2 - 1, cy - h / 2, v.x + w / 2 + 1, cy + h / 2];
      if (b[0] < -176 || b[2] > 176 || b[1] < -4 || b[3] > 392 || hits(b)) continue;
      boxes.push(b); done[v.text] = 1;
      out.push({ text: v.text, fs, tx: r1d(v.x), ty: r1d(cy + fs * 0.36), halo: r1d(fs * 0.32), anchor: 'middle' });
      break;
    }
  });
  return out;
}
  return { MESH, SKEL, STROKES, LABELPTS, paintMesh, silhouette, hitTest, spotName, areaId, rotY, r1d, muscleColor, baseColor, setSkin, placeLabels, SKULL_PARTS, FACE_PARTS, BONE, CART, DARK, TEETH };
})();

// ---------- Legal pages, consents and data rights. Drafts: have a Canadian lawyer review before launch.
// Each document: title [en, fr] and sections [heading en, heading fr, text en, text fr]; ~ starts a new line.
const LEGAL = {
  privacy: { title: ['Privacy policy', 'Politique de confidentialité'], sections: [
    ['Who we are', 'Qui nous sommes', 'PainMap is made by [BUSINESS NAME], [ADDRESS], Canada. Our Privacy Officer is [NAME], [EMAIL]. Contact them with any question about your information.', 'PainMap est conçu par [NOM DE L’ENTREPRISE], [ADRESSE], Canada. Notre responsable de la protection des renseignements personnels est [NOM], [COURRIEL]. Écrivez-lui pour toute question sur vos renseignements.'],
    ['What we collect', 'Ce que nous recueillons', 'Only what the app needs:~• Your age and body type, to tailor possible causes~• The pain spots, answers, diary entries and treatments you choose to save~• Your language and settings~• Your email, only if you create an account~We do not collect your name, location, contacts, photos or advertising ID.', 'Seulement ce dont l’application a besoin :~• Votre âge et votre type de corps, pour adapter les causes possibles~• Les points de douleur, réponses, entrées de journal et traitements que vous enregistrez~• Votre langue et vos réglages~• Votre courriel, seulement si vous créez un compte~Nous ne recueillons ni votre nom, ni votre position, ni vos contacts, photos ou identifiant publicitaire.'],
    ['How we use it', 'Comment nous l’utilisons', 'To show possible causes, track your pain, create your report, run your subscription and keep the app secure. We never sell your information or use it for advertising.', 'Pour afficher des causes possibles, suivre votre douleur, créer votre rapport, gérer votre abonnement et assurer la sécurité de l’application. Nous ne vendons jamais vos renseignements et ne les utilisons pas pour la publicité.'],
    ['Where it is stored', 'Où ils sont conservés', 'On your phone. If you sign in, a backup is encrypted and stored on servers in Canada.', 'Sur votre téléphone. Si vous vous connectez, une sauvegarde est chiffrée et conservée sur des serveurs au Canada.'],
    ['Who we share it with', 'Avec qui nous les partageons', 'Only the service providers listed under Third-party services, and only what each needs to do its job. Optional analytics and crash reports are used only if you agree.', 'Seulement avec les fournisseurs indiqués dans Services tiers, et seulement ce dont chacun a besoin. Les statistiques et rapports de plantage facultatifs ne sont utilisés qu’avec votre accord.'],
    ['Your rights', 'Vos droits', 'You can see, correct, export or delete your information, and withdraw consent at any time, in Settings. We answer requests within 30 days. You can also complain to the Office of the Privacy Commissioner of Canada or, in Quebec, the Commission d’accès à l’information.', 'Vous pouvez consulter, corriger, exporter ou supprimer vos renseignements et retirer votre consentement en tout temps dans les Réglages. Nous répondons aux demandes dans les 30 jours. Vous pouvez aussi porter plainte au Commissariat à la protection de la vie privée du Canada ou, au Québec, à la Commission d’accès à l’information.'],
    ['Children', 'Enfants', 'Anyone under 16 needs a parent or guardian to agree before using PainMap. We never send marketing to anyone under 16.', 'Toute personne de moins de 16 ans doit avoir l’accord d’un parent ou tuteur avant d’utiliser PainMap. Nous n’envoyons jamais de publicité aux moins de 16 ans.'],
    ['How long we keep it', 'Durée de conservation', 'While your account is active. After you delete your account, we erase your information within 30 days and from backups within 90 days.', 'Tant que votre compte est actif. Après la suppression de votre compte, nous effaçons vos renseignements dans les 30 jours, et des sauvegardes dans les 90 jours.'],
    ['Changes', 'Modifications', 'We will tell you in the app before changes take effect, and ask again where your consent is needed. Last updated: [DATE].', 'Nous vous avertirons dans l’application avant toute modification et vous redemanderons votre consentement s’il le faut. Dernière mise à jour : [DATE].']
  ] },
  terms: { title: ['Terms of service', 'Conditions d’utilisation'], sections: [
    ['Agreement', 'Entente', 'By using PainMap you agree to these terms. If you do not agree, please do not use the app.', 'En utilisant PainMap, vous acceptez ces conditions. Si vous ne les acceptez pas, n’utilisez pas l’application.'],
    ['Not medical advice', 'Pas un avis médical', 'PainMap gives general information. It does not diagnose, treat or replace a health professional. In an emergency, call 911.', 'PainMap donne de l’information générale. Il ne pose pas de diagnostic, ne traite pas et ne remplace pas un professionnel de la santé. En cas d’urgence, composez le 911.'],
    ['Who can use it', 'Qui peut l’utiliser', 'You must be 16 or older, or have a parent or guardian’s permission.', 'Vous devez avoir 16 ans ou plus, ou l’autorisation d’un parent ou tuteur.'],
    ['Subscriptions', 'Abonnements', 'Premium is billed by the App Store or Google Play in Canadian dollars, plus applicable taxes. The price, length and renewal terms are shown before you buy. Subscriptions renew automatically until you cancel in your store settings.', 'Premium est facturé par l’App Store ou Google Play en dollars canadiens, taxes applicables en sus. Le prix, la durée et les conditions de renouvellement sont affichés avant l’achat. Les abonnements se renouvellent automatiquement jusqu’à ce que vous les annuliez dans les réglages de la boutique.'],
    ['Your content', 'Votre contenu', 'Your diary and notes belong to you. You let us store and process them only to run the app for you.', 'Votre journal et vos notes vous appartiennent. Vous nous permettez seulement de les conserver et de les traiter pour faire fonctionner l’application.'],
    ['Fair use', 'Utilisation acceptable', 'Do not misuse the app, copy its content to sell, or try to access other people’s information.', 'N’utilisez pas l’application de façon abusive, ne copiez pas son contenu pour le vendre et n’essayez pas d’accéder aux renseignements d’autrui.'],
    ['Liability', 'Responsabilité', 'To the extent the law allows, we are not responsible for decisions made using general information in the app. Nothing here limits your rights under consumer protection laws, including Quebec’s.', 'Dans la mesure permise par la loi, nous ne sommes pas responsables des décisions prises à partir de l’information générale de l’application. Rien ici ne limite vos droits en vertu des lois sur la protection du consommateur, y compris celles du Québec.'],
    ['Ending use', 'Fin de l’utilisation', 'You can stop using PainMap and delete your account at any time.', 'Vous pouvez cesser d’utiliser PainMap et supprimer votre compte en tout temps.'],
    ['Law and contact', 'Droit applicable et contact', 'These terms follow the laws of [PROVINCE] and Canada. Questions: [EMAIL]. Last updated: [DATE].', 'Ces conditions sont régies par les lois de [PROVINCE] et du Canada. Questions : [COURRIEL]. Dernière mise à jour : [DATE].']
  ] },
  refunds: { title: ['Refund policy', 'Politique de remboursement'], sections: [
    ['Free features', 'Fonctions gratuites', 'The body map, questions and possible causes are free. You are never charged without choosing Premium.', 'La carte du corps, les questions et les causes possibles sont gratuites. Vous n’êtes jamais facturé sans choisir Premium.'],
    ['Free trial', 'Essai gratuit', 'The yearly plan starts with a 7-day free trial. Cancel at least 24 hours before it ends and you will not be charged.', 'Le forfait annuel commence par un essai gratuit de 7 jours. Annulez au moins 24 heures avant la fin et vous ne serez pas facturé.'],
    ['Refunds', 'Remboursements', 'Purchases are made through the App Store or Google Play, so refunds are requested through Apple’s or Google’s refund process. We will support any reasonable request.', 'Les achats se font par l’App Store ou Google Play; les remboursements se demandent donc par le processus d’Apple ou de Google. Nous appuierons toute demande raisonnable.'],
    ['Cancelling', 'Annulation', 'Cancel any time in your App Store or Google Play subscription settings. You keep Premium until the end of the period you paid for. There are no cancellation fees.', 'Annulez en tout temps dans les réglages d’abonnement de l’App Store ou de Google Play. Vous gardez Premium jusqu’à la fin de la période payée. Aucuns frais d’annulation.'],
    ['Problems', 'Problèmes', 'If something does not work as described, contact [EMAIL] and we will help.', 'Si quelque chose ne fonctionne pas comme prévu, écrivez à [COURRIEL] et nous vous aiderons.'],
    ['Your rights', 'Vos droits', 'This policy does not limit your rights under Canadian or provincial consumer protection laws.', 'Cette politique ne limite pas vos droits en vertu des lois canadiennes ou provinciales sur la protection du consommateur.']
  ] },
  cookies: { title: ['Cookie and tracking policy', 'Politique sur les témoins et le suivi'], sections: [
    ['In the app', 'Dans l’application', 'The PainMap app does not use cookies and does not track you across other apps or websites.', 'L’application PainMap n’utilise pas de témoins et ne vous suit pas dans d’autres applications ou sites Web.'],
    ['Essential storage', 'Stockage essentiel', 'The app saves your settings, language and diary on your phone so it can work. This cannot be turned off, and it never leaves your phone unless you sign in.', 'L’application enregistre vos réglages, votre langue et votre journal sur votre téléphone pour fonctionner. Cela ne peut pas être désactivé et ne quitte jamais votre téléphone, sauf si vous vous connectez.'],
    ['Optional analytics and crash reports', 'Statistiques et rapports de plantage facultatifs', 'Only if you agree, we collect anonymous usage counts and crash reports to fix problems. They never include your health details.', 'Seulement avec votre accord, nous recueillons des statistiques d’utilisation anonymes et des rapports de plantage pour corriger les problèmes. Ils ne contiennent jamais vos renseignements de santé.'],
    ['Our website', 'Notre site Web', 'The PainMap website uses only essential cookies unless you accept analytics cookies in its cookie banner.', 'Le site Web de PainMap utilise seulement des témoins essentiels, sauf si vous acceptez les témoins de statistiques dans sa bannière.'],
    ['Change your mind', 'Changer d’avis', 'Turn optional tracking on or off any time in Settings › Privacy choices.', 'Activez ou désactivez le suivi facultatif en tout temps dans Réglages › Choix de confidentialité.']
  ] },
  services: { title: ['Third-party services', 'Services tiers'], sections: [
    ['Apple and Google', 'Apple et Google', 'Sign in with Apple or Google, and App Store or Google Play payments. They receive only what is needed to sign you in and process purchases.', 'Connexion avec Apple ou Google, et paiements par l’App Store ou Google Play. Ils reçoivent seulement ce qui est nécessaire pour la connexion et les achats.'],
    ['Subscription service', 'Service d’abonnement', '[SUBSCRIPTION PROVIDER] checks whether you have Premium, using an anonymous ID and purchase records only.', '[FOURNISSEUR D’ABONNEMENT] vérifie si vous avez Premium, à l’aide d’un identifiant anonyme et des données d’achat seulement.'],
    ['Secure hosting in Canada', 'Hébergement sécurisé au Canada', '[HOSTING PROVIDER] stores encrypted backups for signed-in users, in Canadian data centres.', '[HÉBERGEUR] conserve les sauvegardes chiffrées des utilisateurs connectés, dans des centres de données au Canada.'],
    ['Email', 'Courriel', '[EMAIL PROVIDER] sends sign-in links, account notices and, only if you opt in, tips and offers.', '[FOURNISSEUR DE COURRIEL] envoie les liens de connexion, les avis de compte et, seulement si vous l’acceptez, des conseils et offres.'],
    ['Analytics and crash reports (optional)', 'Statistiques et plantages (facultatif)', '[ANALYTICS PROVIDER] and [CRASH PROVIDER] run only after you agree, and never receive health details.', '[FOURNISSEUR DE STATISTIQUES] et [FOURNISSEUR DE RAPPORTS] ne fonctionnent qu’après votre accord et ne reçoivent jamais de données de santé.'],
    ['What we do not use', 'Ce que nous n’utilisons pas', 'No advertising, social media or data-broker tools. Every provider is reviewed before launch and each year after.', 'Aucun outil de publicité, de réseaux sociaux ou de courtier de données. Chaque fournisseur est vérifié avant le lancement et chaque année.']
  ] },
  licences: { title: ['Licences and credits', 'Licences et crédits'], sections: [
    ['Fonts', 'Polices', 'Manrope and Source Serif 4, both under the SIL Open Font License 1.1, which allows use in commercial apps.', 'Manrope et Source Serif 4, toutes deux sous licence SIL Open Font License 1.1, qui permet l’usage dans des applications commerciales.'],
    ['3D anatomy model', 'Modèle d’anatomie 3D', 'Anatomy: BodyParts3D © The Database Center for Life Science (CC BY 4.0); female organs: Human Reference Atlas 3D Reference Organs, HuBMAP (CC BY 4.0); female body: MakeHuman (CC0). Modified by open-anatomy-3d (github.com/MervinR07/open-anatomy-3d), CC BY 4.0. Changed for PainMap: recoloured, clothing added and some parts hidden. Licence: creativecommons.org/licenses/by/4.0', 'Anatomie : BodyParts3D © The Database Center for Life Science (CC BY 4.0); organes féminins : Human Reference Atlas 3D Reference Organs, HuBMAP (CC BY 4.0); corps féminin : MakeHuman (CC0). Modifié par open-anatomy-3d (github.com/MervinR07/open-anatomy-3d), CC BY 4.0. Modifié pour PainMap : recoloré, vêtements ajoutés et certaines parties masquées. Licence : creativecommons.org/licenses/by/4.0'],
    ['Icons and illustrations', 'Icônes et illustrations', 'All icons and the body map were drawn for PainMap. No stock images are used.', 'Toutes les icônes, la carte du corps ont été dessinées pour PainMap. Aucune image de banque d’images n’est utilisée.'],
    ['Medical sources', 'Sources médicales', 'Guidelines PainMap relies on are cited in Medical sources. Their text is not copied.', 'Les lignes directrices utilisées par PainMap sont citées dans Sources médicales. Leur texte n’est pas copié.'],
    ['Open-source software', 'Logiciels libres', 'Licences for open-source code used in the released app will be listed here.', 'Les licences des logiciels libres utilisés dans l’application publiée seront indiquées ici.']
  ] },
  business: { title: ['Business details', 'Coordonnées de l’entreprise'], sections: [
    ['Company', 'Entreprise', '[BUSINESS NAME]~Business number: [BN]', '[NOM DE L’ENTREPRISE]~Numéro d’entreprise : [NE]'],
    ['Address', 'Adresse', '[STREET ADDRESS]~[CITY], [PROVINCE] [POSTAL CODE]~Canada', '[ADRESSE]~[VILLE] ([PROVINCE]) [CODE POSTAL]~Canada'],
    ['Contact', 'Nous joindre', 'Support: [EMAIL]~Phone: [PHONE]~Hours: Monday to Friday, 9 am to 5 pm [TIME ZONE]', 'Soutien : [COURRIEL]~Téléphone : [TÉLÉPHONE]~Heures : du lundi au vendredi, de 9 h à 17 h [FUSEAU HORAIRE]'],
    ['Privacy Officer', 'Responsable de la protection des renseignements', '[NAME], [EMAIL]', '[NOM], [COURRIEL]']
  ] },
  choices: { title: ['Privacy choices', 'Choix de confidentialité'], sections: [] },
  email: { title: ['Email preferences', 'Préférences de courriel'], sections: [] },
  deletion: { title: ['Request data deletion', 'Demande de suppression des données'], sections: [
    ['What happens', 'Ce qui se passe', 'We delete your account, diary, pain spots and backups. We confirm by email and finish within 30 days. Purchase records kept by Apple or Google are managed by them.', 'Nous supprimons votre compte, votre journal, vos points de douleur et vos sauvegardes. Nous confirmons par courriel et terminons dans les 30 jours. Les dossiers d’achat conservés par Apple ou Google sont gérés par eux.'],
    ['Faster option', 'Option plus rapide', 'If you still have the app, Settings › Delete account removes everything right away.', 'Si vous avez encore l’application, Réglages › Supprimer le compte efface tout immédiatement.']
  ] }
};
// ---------- Real 3D body: names for the model's parts, and how a tap becomes a body region.
// Names are keyed by the model's part names; _l/_r (the person's left/right) are added after.
const N3D = {
  abdominal_muscles: ['Abdominal wall muscles', 'Muscles de la paroi abdominale'], back_muscles: ['Back muscles', 'Muscles du dos'], calf: ['Calf muscles', 'Muscles du mollet'],
  chest_muscles: ['Chest (pectoral) muscle', 'Muscle pectoral'], deltoid: ['Deltoid (shoulder)', 'Deltoïde (épaule)'], diaphragm: ['Diaphragm', 'Diaphragme'], foot_muscles: ['Foot muscles', 'Muscles du pied'],
  forearm_muscles: ['Forearm muscles', 'Muscles de l’avant-bras'], gluteal: ['Gluteal (buttock) muscles', 'Muscles fessiers'], hamstrings: ['Hamstrings (back of thigh)', 'Ischio-jambiers'],
  hand_muscles: ['Hand muscles', 'Muscles de la main'], iliopsoas: ['Hip flexor (iliopsoas)', 'Fléchisseur de la hanche (iliopsoas)'], adductors: ['Inner thigh (adductors)', 'Adducteurs (intérieur de la cuisse)'],
  intercostals: ['Muscles between the ribs', 'Muscles intercostaux'], neck_muscles: ['Neck muscles', 'Muscles du cou'], pelvic_floor: ['Pelvic floor', 'Plancher pelvien'],
  quadriceps: ['Quadriceps (front of thigh)', 'Quadriceps (devant de la cuisse)'], rotator_cuff: ['Rotator cuff', 'Coiffe des rotateurs'], shin_muscles: ['Shin muscles', 'Muscles du tibia'],
  shoulder_muscles: ['Shoulder girdle muscles', 'Muscles de la ceinture scapulaire'], trapezius: ['Trapezius', 'Trapèze'], upper_arm_muscles: ['Upper arm muscles', 'Muscles du bras'],
  spine_cervical: ['Neck spine (cervical)', 'Colonne cervicale'], clavicle: ['Collarbone', 'Clavicule'], foot: ['Foot bones', 'Os du pied'], forearm: ['Forearm bones', 'Os de l’avant-bras'], hand: ['Hand bones', 'Os de la main'],
  mandible: ['Jaw (mandible)', 'Mandibule'], patella: ['Kneecap', 'Rotule'], spine_lumbar: ['Lower back spine (lumbar)', 'Colonne lombaire'], pelvis: ['Pelvis and sacrum', 'Bassin et sacrum'],
  ribs: ['Ribs', 'Côtes'], lower_leg: ['Shin bones', 'Os de la jambe'], scapula: ['Shoulder blade', 'Omoplate'], skull: ['Skull', 'Crâne'], sternum: ['Breastbone (sternum)', 'Sternum'], teeth: ['Teeth and gums', 'Dents et gencives'],
  femur: ['Thigh bone (femur)', 'Fémur'], spine_thoracic: ['Upper back spine (thoracic)', 'Colonne thoracique'], humerus: ['Upper arm bone', 'Humérus'], skin: ['Skin', 'Peau'],
  adrenal: ['Adrenal gland', 'Glande surrénale'], appendix: ['Appendix', 'Appendice'], brain: ['Brain', 'Cerveau'], brainstem: ['Brainstem', 'Tronc cérébral'], bronchi: ['Airways (bronchi)', 'Bronches'],
  cerebellum: ['Cerebellum', 'Cervelet'], esophagus: ['Food pipe (esophagus)', 'Œsophage'], eye: ['Eye', 'Œil'], fallopian_tubes: ['Fallopian tubes', 'Trompes de Fallope'], gallbladder: ['Gallbladder and bile ducts', 'Vésicule et voies biliaires'],
  heart: ['Heart', 'Cœur'], kidney: ['Kidney', 'Rein'], colon: ['Large intestine (colon)', 'Gros intestin (côlon)'], larynx: ['Voice box (larynx)', 'Larynx'], liver: ['Liver', 'Foie'], lung: ['Lung', 'Poumon'],
  reproductive: ['Male reproductive organs', 'Organes reproducteurs masculins'], ovary: ['Ovary', 'Ovaire'], pancreas: ['Pancreas', 'Pancréas'], pharynx: ['Throat (pharynx)', 'Gorge (pharynx)'], pituitary: ['Pituitary gland', 'Hypophyse'],
  prostate: ['Prostate', 'Prostate'], salivary_glands: ['Salivary glands', 'Glandes salivaires'], small_intestine: ['Small intestine', 'Intestin grêle'], spleen: ['Spleen', 'Rate'], stomach: ['Stomach', 'Estomac'], thymus: ['Thymus', 'Thymus'],
  tongue: ['Tongue', 'Langue'], trachea: ['Windpipe (trachea)', 'Trachée'], ureter: ['Ureter', 'Uretère'], bladder: ['Bladder', 'Vessie'], uterus: ['Uterus', 'Utérus'], vagina: ['Vagina', 'Vagin'],
  aorta: ['Aorta', 'Aorte'], arteries_abdomen: ['Arteries of the abdomen', 'Artères de l’abdomen'], arteries_thorax: ['Arteries of the chest', 'Artères du thorax'], arteries_head: ['Arteries of the head and neck', 'Artères de la tête et du cou'],
  arteries_arm: ['Arm arteries', 'Artères du bras'], arteries_leg: ['Leg arteries', 'Artères de la jambe'], arteries_pelvis: ['Arteries of the pelvis', 'Artères du bassin'], carotid: ['Carotid artery', 'Artère carotide'],
  coronary_arteries: ['Heart arteries (coronary)', 'Artères coronaires'], vena_cava_inferior: ['Inferior vena cava', 'Veine cave inférieure'], vena_cava_superior: ['Superior vena cava', 'Veine cave supérieure'], pulmonary_vessels: ['Lung blood vessels', 'Vaisseaux pulmonaires'],
  veins_abdomen: ['Veins of the abdomen', 'Veines de l’abdomen'], veins_thorax: ['Veins of the chest', 'Veines du thorax'], veins_arm: ['Arm veins', 'Veines du bras'], veins_leg: ['Leg veins', 'Veines de la jambe'], veins_pelvis: ['Veins of the pelvis', 'Veines du bassin'],
  cranial_nerves: ['Cranial and eye nerves', 'Nerfs crâniens et optiques'], spinal_cord: ['Spinal cord', 'Moelle épinière']
};
const name3D = (key) => {
  const base = key.replace(/_[lr]$/, ''), n = N3D[base] || [base, base], sd = /_l$/.test(key) ? ['left', 'gauche'] : /_r$/.test(key) ? ['right', 'droit'] : null;
  return sd ? { en: n[0] + ' (' + sd[0] + ')', fr: n[1] + ' (' + sd[1] + ')' } : { en: n[0], fr: n[1] };
};
// Which part of the drawn body a model part belongs to, so the prototype's region and spot-naming rules apply.
const PART3D = [
  [/^(deltoid|upper_arm_muscles|forearm_muscles|rotator_cuff|humerus|forearm|arteries_arm|veins_arm)/, 'arm'], [/^(hand_muscles|hand_)/, 'hand'],
  [/^(quadriceps|hamstrings|adductors|calf|shin_muscles|femur|patella|lower_leg|arteries_leg|veins_leg)/, 'leg'], [/^(foot_muscles|foot_)/, 'foot'],
  [/^(neck_muscles|spine_cervical|pharynx|larynx|carotid)/, 'neck'], [/^(skull|mandible|teeth|brain|cerebellum|brainstem|eye|tongue|pituitary|salivary|cranial|arteries_head)/, 'head']
];
function pin3D(h) {
  const k = h.under || h.key, hit = PART3D.find((q) => q[0].test(k));
  const y = h.p[1];
  const part = hit ? hit[1] : h.key === 'skin' && !h.under ? (y < 40 ? 'head' : y < 62 ? 'neck' : 'torso') : 'torso';
  const side = /_l$/.test(k) ? 'L' : /_r$/.test(k) ? 'R' : h.p[0] >= 0 ? 'L' : 'R';
  const b = { part, side, p: h.p, n: h.n };
  const what = name3D(h.key), under = h.under ? name3D(h.under) : null;
  return { p: h.p, n: h.n, name: B3.spotName(b), area: B3.areaId(b), what, under, kind: h.kind, key: h.key, underKey: h.under, world: h.world, normal: h.normal };
}
// Organ-specific warnings for the results screen: [model part names, warning]. Shown first, above the region's own list.
const ORGAN_FLAGS = [
  [/^(heart|coronary|aorta|vena_cava|pulmonary)/, 'Chest pressure or tightness, shortness of breath, sweating, or pain spreading to the arm, jaw or back: call 911 now'],
  [/^(lung|bronchi|trachea)/, 'Sudden sharp chest pain with shortness of breath, or coughing up blood: call 911 now'],
  [/^(appendix|colon|small_intestine)/, 'Belly pain that moves to the lower right and keeps getting worse, especially with fever or vomiting: get urgent care today'],
  [/^(kidney|ureter|adrenal)/, 'Severe pain in the side or back that comes in waves, with fever, vomiting or blood in your pee: get urgent care today'],
  [/^(gallbladder|liver)/, 'Pain under the right ribs with fever, or yellow skin or eyes: get urgent care today'],
  [/^(stomach|esophagus|pancreas|pharynx)/, 'Vomiting blood, black or tarry stools, or severe upper belly pain spreading to the back: get urgent care now'],
  [/^(spleen)/, 'Pain under the left ribs after a hit, fall or accident: get urgent care now'],
  [/^(bladder)/, 'You cannot pee, or have fever with pain when peeing: get urgent care today'],
  [/^(uterus|ovary|fallopian|vagina)/, 'Sudden severe one-sided pelvic pain, or pain with a possible pregnancy or heavy bleeding: get urgent care now'],
  [/^(brain|cerebellum|brainstem|pituitary|cranial|arteries_head|carotid)/, 'Sudden, very severe headache, confusion, weakness, a drooping face or trouble speaking: call 911 now'],
  [/^(spinal_cord)/, 'New weakness or numbness in both legs, or loss of bladder or bowel control: call 911 now']
];
const organFlag = (key) => { const f = key ? ORGAN_FLAGS.find((q) => q[0].test(key)) : null; return f ? f[1] : null; };
// The muscle groups a recovery plan works, from the words in its spot (or its type), for the 3D body's glow.
const PLAN_MUSCLES = [
  [/knee|kneecap|thigh|quad/i, ['quadriceps', 'hamstrings', 'gluteal']], [/hamstring|back of thigh/i, ['hamstrings', 'gluteal']],
  [/hip|groin|buttock|glute/i, ['gluteal', 'iliopsoas', 'adductors']], [/lower back|lumbar|pelvis|sacr/i, ['back_muscles', 'gluteal', 'abdominal_muscles']],
  [/upper back|shoulder blade|neck|trapez/i, ['trapezius', 'neck_muscles', 'shoulder_muscles']], [/shoulder/i, ['deltoid', 'rotator_cuff', 'trapezius']],
  [/elbow|forearm|wrist|hand|finger|thumb/i, ['forearm_muscles', 'upper_arm_muscles', 'hand_muscles']], [/arm/i, ['upper_arm_muscles', 'deltoid']],
  [/ankle|foot|heel|toe|calf|shin|achilles/i, ['calf', 'shin_muscles', 'foot_muscles']], [/chest|rib/i, ['chest_muscles', 'intercostals']], [/belly|abdom/i, ['abdominal_muscles']]
];
const PLAN_TYPE_MUSCLES = { spine: ['back_muscles', 'abdominal_muscles', 'gluteal'], nerve: ['back_muscles', 'gluteal', 'hamstrings'], joint: ['quadriceps', 'gluteal'], tendon: ['calf', 'quadriceps'], muscle: ['back_muscles', 'quadriceps'], general: ['back_muscles', 'gluteal', 'quadriceps'] };
const planMuscles = (spot, type) => { const m = PLAN_MUSCLES.find((q) => q[0].test(spot || '')); return m ? m[1] : PLAN_TYPE_MUSCLES[type] || PLAN_TYPE_MUSCLES.general; };
const LEGAL_ORDER = ['privacy', 'terms', 'refunds', 'cookies', 'choices', 'email', 'deletion', 'services', 'business', 'licences'];

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      view: props.startView || 'front',
      screen: 'welcome', welcomeStep: 0, lang: 'en', afterProfile: props.startTab === 'explore' ? 'explore' : 'find', age: 30, sex: null,
      regionId: null, layerIndex: 2, feels: [],
      exId: 'muscle', zoom: 'full', partKey: null, showLabels: true,
      spot: null, spotZoom: null, dragging: false, confirmed: false, focus: false,
      answers: { pain: 5, onset: null, duration: null, worse: [], symptoms: [] },
      premium: props.startPremium !== false && props.startPremium !== 'false', diary: [], diarySpot: null, diaryPoint: null, checkPain: 4, checkDate: '', checkTime: '', checkAct: '', checkActOther: '', editDate: '', editTime: '', editAct: '', editActOther: '',
      plan: null, planDone: {}, paywallFrom: 'find', priceSel: 'yearly', toast: '',
      savedSpots: [], checkTags: [], checkNote: '', treatments: [], txWhat: 'Ice', txHelped: 'yes', txDate: '', txHidden: [], txDelAsk: null, txEdits: {}, txEditKey: null, txEdWhat: 'Ice', txEdHelped: 'yes', diaryHidden: [], diaryDelAsk: null, diaryEdits: {}, diaryEditKey: null, editPain: 0, editTags: [], editNote: '',
      reminderOn: false, reminderTime: '19:00', units: 'cm', heightCm: 170, bigText: false, reduceMotion: false, theme: 'system',
      deleteAsk: false, delAcctAsk: false, tutorialDone: false, reportNotes: '', reportFrom: 'diary', introDone: false, introAgree: false, consentAsked: false, crashOk: false, consentLog: [], legalDoc: 'privacy', legalFrom: 'settings', delEmail: '', delScope: 'all', precise: null, from360: 'find', b3Angle: 25, b3Layer: 'muscle', b3Names: true, b3Pin: null, b3Focus: null, b3Ready: false, b3Err: false, b3Prog: 0, termsOk: false, analyticsOk: false, marketingOk: false, notifAsk: false, notifAllowed: false, fbOpen: null, fbText: '', fbDevice: true, sourcesFrom: 'settings', allLabels: false, hideSamples: false, profilePromptOff: false, showRate: false, guardianOk: false, account: null, accountEmail: '', accountFrom: 'settings', settingsFrom: 'find',
      postal: '', clinType: null, telehealthOnly: false, demoOpen: {}, planSwap: {}, swapOpen: {}, wl: WL_EMPTY, wlFrom: 'find',
      planChecks: {}, b3TourDone: false, b3TourStep: 0, exTimer: null, healthOn: false, healthAsk: false, medReminders: [], medNone: null, medWhat: 'Ibuprofen (Advil)', medTime: '08:00', medEvery: 'daily', shareOn: false, shareCode: '', shareWhat: { spots: true, diary: true, tx: true, plan: true }
    };
    this.dragging = false;
    // The real 3D body draws into this canvas once the viewer script and model have loaded.
    this.b3CanvasRef = (el) => this.attach3D(el);
    // Rows of buttons that run off the edge scroll sideways with an ordinary mouse wheel or mousepad scroll too.
    // At either end the scroll passes on to the page, so the screen still scrolls normally.
    this.hScrollRef = (el) => {
      if (!el || el.pmWheel) return;
      el.pmWheel = true;
      el.addEventListener('wheel', (e) => {
        if (e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 1) return;
        const next = Math.max(0, Math.min(max, el.scrollLeft + e.deltaY));
        if (next === el.scrollLeft) return;
        e.preventDefault();
        el.scrollLeft = next;
      }, { passive: false });
    };
  }

  // Starts or stops the 3D viewer as its canvas appears and disappears. Without WebGL, or if the model
  // can't load, the drawn 360° body stays in place.
  attach3D(el) {
    if (!el) { if (this.v3d) { this.v3d.dispose(); this.v3d = null; } return; }
    if (this.v3d || !window.PM3D || !window.PM3D.supported()) return;
    this.v3dSex = null; this.v3dLayer = null; this.v3dAngle = null; this.v3dPin = undefined; this.v3dSaved = undefined;
    if (this.state.b3Ready) this.setState({ b3Ready: false });
    this.v3d = window.PM3D.createViewer(el, {
      urls: { male: 'models/anatomy-male.js', female: 'models/anatomy-female.js' },
      onProgress: (p) => { const v = Math.round(p * 20) * 5; if (v !== this.state.b3Prog) this.setState({ b3Prog: v }); },
      onReady: () => { this.v3dAngle = null; this.v3dPin = undefined; this.v3dSaved = undefined; this.setState({ b3Ready: true, b3Err: false }, () => this.sync3D()); },
      onError: () => this.setState({ b3Err: true }),
      onAngle: (deg) => { this.v3dAngle = deg; if (deg !== this.state.b3Angle) this.setState({ b3Angle: deg }); },
      // Touching the body also closes the quick tips.
      onPick: (h) => this.setState({ b3Pin: pin3D(h), b3TourDone: true })
    });
    this.sync3D();
  }
  // Keeps the 3D viewer in step with the buttons: body, layer, turn and the marked spot.
  sync3D() {
    const v = this.v3d, s = this.state;
    if (!v) return;
    const sex = s.sex === 'female' ? 'female' : 'male';
    if (sex !== this.v3dSex) { this.v3dSex = sex; v.setSex(sex); }
    if (s.b3Layer !== this.v3dLayer) { this.v3dLayer = s.b3Layer; v.setLayer(s.b3Layer); }
    if (s.b3Ready && s.b3Angle !== this.v3dAngle) { this.v3dAngle = s.b3Angle; v.turnTo(s.b3Angle); }
    if (s.b3Ready && s.b3Pin !== this.v3dPin) { this.v3dPin = s.b3Pin; if (!s.b3Pin) v.clear(); else if (s.b3Pin.world) v.setMarker(s.b3Pin.world, s.b3Pin.normal); }
    // Other spots already marked show as smaller teal markers.
    if (s.b3Ready && s.savedSpots !== this.v3dSaved) { this.v3dSaved = s.savedSpots; v.setExtras(s.savedSpots.filter((q) => q.w3).map((q) => q.w3)); }
    // Glow: the muscles a recovery plan works, else the part just tapped (not the skin).
    const glow = s.b3Focus ? s.b3Focus.keys : s.b3Pin && s.b3Pin.kind !== 'skin' && s.b3Pin.key ? [s.b3Pin.key] : [];
    if (s.b3Ready) v.highlight(glow);
  }
  componentDidMount() { this.onTouch = () => {}; document.addEventListener('touchstart', this.onTouch, { passive: true }); }
  componentDidUpdate() { this.sync3D(); }
  componentWillUnmount() {
    if (this.v3d) { this.v3d.dispose(); this.v3d = null; }
    clearInterval(this.exInt); clearTimeout(this.toastTimer);
    document.removeEventListener('touchstart', this.onTouch);
    if (this.actx && this.actx.close) { try { this.actx.close().catch(() => {}); } catch (e) {} this.actx = null; }
  }

  // Exercise countdown: one set at a time, a short beep when each set ends, the exercise ticked when all are done.
  startTimer(key, secs, sets) {
    clearInterval(this.exInt);
    try { this.actx = this.actx || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { this.actx = null; }
    // iPhones start sound paused; waking it here, on the tap, lets the end-of-set beep play.
    if (this.actx && this.actx.state === 'suspended' && this.actx.resume) { try { this.actx.resume().catch(() => {}); } catch (e) {} }
    this.setState({ exTimer: { key, secs, sets, set: 1, left: secs, paused: false } });
    this.exInt = setInterval(() => {
      const t = this.state.exTimer;
      if (!t) { clearInterval(this.exInt); return; }
      if (t.paused) return;
      if (t.left > 1) { this.setState({ exTimer: Object.assign({}, t, { left: t.left - 1 }) }); return; }
      this.beep();
      if (t.set < t.sets) { this.setState({ exTimer: Object.assign({}, t, { set: t.set + 1, left: t.secs }) }); return; }
      clearInterval(this.exInt);
      this.setState({ exTimer: null, planDone: Object.assign({}, this.state.planDone, { [key]: true }) });
      this.flash(tr('Exercise done. Nice work.', this.state.lang));
    }, 1000);
  }
  stopTimer() { clearInterval(this.exInt); this.setState({ exTimer: null }); }
  beep() {
    const a = this.actx;
    if (!a) return;
    try {
      const o = a.createOscillator(), g = a.createGain();
      o.frequency.value = 880; g.gain.setValueAtTime(0.2, a.currentTime); g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.35);
      o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime + 0.35);
    } catch (e) {}
  }

  flash(text) {
    this.setState({ toast: text });
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.setState({ toast: '' }), 2600);
  }

  openPlan(name, layerId, spot) {
    this.setState({ plan: { type: planTypeFor(name, layerId), cause: name, spot }, screen: 'plan' });
  }

  // Multiple spots, diary extras, reminders, settings, account, clinicians, welcome and demos.
  moreVals(s, accent, region, layer, chip, ev) {
    const L = s.lang;
    const T = (en) => tr(en, L);
    const go = (screen) => this.setState({ screen });
    const paywall = () => this.setState({ screen: 'premium', paywallFrom: s.screen });
    const sideOf = (id) => (/-r$/.test(id) ? 'R' : /-l$/.test(id) ? 'L' : '');
    const current = region && s.confirmed ? { regionId: region.id, label: region.label, key: region.key, side: sideOf(region.id), x: s.spot ? s.spot.x : region.x, y: s.spot ? s.spot.y : region.y, view: s.view, layer: layer.name } : null;
    const allSpots = s.savedSpots.concat(current ? [current] : []);
    const nerve = s.feels.indexOf('burn') >= 0 || s.feels.indexOf('tingle') >= 0 || s.answers.symptoms.indexOf('numbness') >= 0;
    const patterns = findPatterns(allSpots, nerve, s.answers.symptoms.indexOf('weakness') >= 0);
    const v0 = s.screen === 'explore' ? null : [0, 0, 200];
    const pins = v0 ? s.savedSpots.map((sp, i) => ({ n: i + 1, show: sp.view === s.view, left: r2(sp.x - 11), top: r2(sp.y - 11), label: sp.label })).filter((p) => p.show) : [];

    // Diary extras for the selected spot.
    const entries = sampleDiary(s).concat(s.diary).filter((e) => e.spot === ev.diarySpot);
    const insights = triggerInsights(entries);
    const txKey = (t) => t.sample ? 's' + t._si : 'u' + s.treatments.indexOf(t);
    const txAll = sampleTx(s).concat(s.treatments).filter((t) => t.spot === ev.diarySpot);
    const txSummary = TREATMENTS.map((name) => {
      const list = txAll.filter((t) => t.what === name);
      if (!list.length) return null;
      const helped = list.filter((t) => t.helped !== 'no').length;
      return { name: T(name), text: T('helped') + ' ' + helped + ' / ' + list.length, good: helped / list.length >= 0.5 };
    }).filter(Boolean);
    const today = new Date().toLocaleDateString(L === 'fr' ? 'fr-CA' : 'en-US', { month: 'short', day: 'numeric' });
    // Treatment dates: today or any earlier day, kept as an ISO day next to the short label.
    const txPad = (n) => String(n).padStart(2, '0');
    const txIsoOf = (d) => d.getFullYear() + '-' + txPad(d.getMonth() + 1) + '-' + txPad(d.getDate());
    const txIsoToday = txIsoOf(new Date());
    const txDay = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString(L === 'fr' ? 'fr-CA' : 'en-US', { month: 'short', day: 'numeric' });
    const txIso = (t) => { if (t.iso) return t.iso; const d = new Date((t.date || '') + ' ' + new Date().getFullYear() + ' 12:00'); return isNaN(d) ? '' : txIsoOf(d); };
    const txInsert = (list, item) => { const i = list.findIndex((x) => txIso(x) && txIso(x) > item.iso); return i < 0 ? list.concat([item]) : list.slice(0, i).concat([item], list.slice(i)); };
    const txIsNone = (w) => w === 'None';

    // Clinicians: what suits the top cause.
    const top = region ? (this.conditions(region, layer)[0] || null) : null;
    const kind = layer.id === 'organ' ? 'organ' : top ? planTypeFor(top.name, layer.id) : 'general';
    const recommended = CLINICIAN_FOR[kind];
    const clinType = s.clinType || recommended[0];
    const clinics = [0, 1, 2, 3].map((i) => ({
      name: '[' + T('Clinic name') + ' ' + (i + 1) + ']', type: T(clinType), distance: '[' + T('distance') + ']',
      partner: i === 0, telehealth: i % 2 === 0, partnerText: T('PainMap partner'), teleText: T('Video visits'), bookText: T('Request a booking'), accent, next: '[' + T('Next opening') + ']',
      book: () => this.flash(T('Booking request sent (demo)'))
    })).filter((c) => !s.telehealthOnly || c.telehealth);

    const INTRO_TEXT = {
      'Find it': 'Drag the locator over a detailed body map, from skin down to bone, to pinpoint exactly where it hurts.',
      'Track it': 'Log your pain in a diary and see whether it is getting better, with triggers and treatments.',
      'Fix it': 'Get possible causes, warning signs and a guided recovery plan, and a report to share with your doctor.'
    };
    const welcome = [
      ['Find it', 'Drag the locator over a detailed body map, from skin down to bone, to pinpoint exactly where it hurts.'],
      ['Track it', 'Log your pain in a diary and see whether it is getting better, with triggers and treatments.'],
      ['Fix it', 'Get possible causes, warning signs and a guided recovery plan, and a report to share with your doctor.']
    ][Math.min(2, s.welcomeStep)];
    const toggleIn = (list, v) => (list.indexOf(v) >= 0 ? list.filter((x) => x !== v) : list.concat([v]));
    const height = s.units === 'cm' ? s.heightCm + ' cm' : Math.floor(s.heightCm / 30.48) + '′ ' + Math.round((s.heightCm / 2.54) % 12) + '″';

    return {
      // Multiple spots and patterns
      savedPins: pins,
      hasSaved: s.savedSpots.length > 0,
      spotCountText: s.savedSpots.length ? s.savedSpots.length + ' ' + T(s.savedSpots.length === 1 ? 'other spot saved' : 'other spots saved') : '',
      addSpot: () => {
        if (!current) return;
        if (!s.premium && s.savedSpots.length >= 1) { paywall(); return; }
        this.setState({ savedSpots: s.savedSpots.concat([current]), spot: null, regionId: null, confirmed: false, spotZoom: null });
        this.flash(T('Spot saved. Now find the next one.'));
      },
      spotList: allSpots.map((sp, i) => ({ n: i + 1, label: T(sp.label), layer: T(sp.layer), removeText: T('Remove'), removable: i < s.savedSpots.length, remove: () => this.setState({ savedSpots: s.savedSpots.filter((x, j) => j !== i) }) })),
      hasMulti: allSpots.length > 1,
      patterns: patterns.map((pt) => Object.assign({}, pt, { c911: T('Call 911'), c811: T('Call 811 · nurse line'), tagLabel: T(TAGS[pt.tag].label), tagBg: pt.urgent ? '#FDE7E2' : TAGS[pt.tag].bg, tagFg: pt.urgent ? '#7A1E10' : TAGS[pt.tag].fg })),
      hasPatterns: patterns.length > 0,
      patternUrgent: patterns.some((pt) => pt.urgent),

      // Diary triggers, notes, insights, treatments, reminders
      triggerChips: TRIGGERS.filter((t) => t[0] !== 'period' || s.sex !== 'male').map((t) => Object.assign(chip(s.checkTags.indexOf(t[0]) >= 0), { label: T(t[1]), pick: () => this.setState({ checkTags: toggleIn(s.checkTags, t[0]) }) })),
      checkNote: s.checkNote,
      setCheckNote: (e) => this.setState({ checkNote: e.target.value.slice(0, 200) }),
      insights: insights.map((x) => ({ text: (x.up ? '▲ ' : '▼ ') + x.text, color: x.up ? 'var(--dangertext)' : 'var(--oktext)', bg: x.up ? 'var(--dangerbg)' : 'var(--okbg)' })),
      hasInsights: insights.length > 0,
      noInsights: insights.length === 0,
      txOptions: [{ value: 'None', label: T('No medication or treatment that day') }].concat(TREATMENTS.map((t) => ({ value: t, label: T(t) }))),
      txNeedsHelped: !txIsNone(s.txWhat),
      txDateVal: s.txDate || txIsoToday, txMaxDate: txIsoToday, txDateLbl: T('Date'),
      setTxDate: (e) => { const v = e.target.value || ''; this.setState({ txDate: v > txIsoToday ? txIsoToday : v }); },
      txLogText: txIsNone(s.txWhat) ? T('Save: no medication or treatment') + (s.txDate && s.txDate !== txIsoToday ? ' · ' + txDay(s.txDate) : '') : T('Log treatment') + (s.txDate && s.txDate !== txIsoToday ? ' · ' + txDay(s.txDate) : ''),
      txWhat: s.txWhat,
      setTxWhat: (e) => this.setState({ txWhat: e.target.value }),
      txHelpedChips: HELPED.map((h) => Object.assign(chip(s.txHelped === h[0]), { label: T(h[1]), pick: () => this.setState({ txHelped: h[0] }) })),
      logTreatment: () => { const iso = s.txDate && s.txDate <= txIsoToday ? s.txDate : txIsoToday; const none = txIsNone(s.txWhat);
        this.setState({ treatments: txInsert(s.treatments, { date: txDay(iso), iso, spot: ev.diarySpot, what: s.txWhat, helped: none ? '' : s.txHelped }), txDate: '' });
        this.flash(none ? T('Saved: no medication or treatment that day') : T('Treatment logged')); },
      txList: txAll.slice().reverse().map((t) => ({ date: t.date, what: txIsNone(t.what) ? T('No medication or treatment') : T(t.what), helped: txIsNone(t.what) ? '—' : (t.helped === 'no' ? '✕ ' : t.helped === 'little' ? '~ ' : '✓ ') + T((HELPED.find((h) => h[0] === t.helped) || [0, ''])[1]), color: txIsNone(t.what) ? 'var(--muted)' : t.helped === 'no' ? '#7A1E10' : t.helped === 'little' ? '#8A5A00' : '#14532D', isSample: !!t.sample,
        asking: s.txDelAsk === txKey(t), notAsking: s.txDelAsk !== txKey(t),
        delLabel: T('Delete') + ': ' + t.date + ', ' + (txIsNone(t.what) ? T('No medication or treatment') : T(t.what)), askText: T('Delete this treatment?'), yesText: T('Delete'), noText: T('Keep'),
        ask: () => this.setState({ txDelAsk: txKey(t), txEditKey: null }),
        editing: s.txEditKey === txKey(t), notEditing: s.txEditKey !== txKey(t) && s.txDelAsk !== txKey(t), accent,
        editLabel: T('Edit') + ': ' + t.date + ', ' + (txIsNone(t.what) ? T('No medication or treatment') : T(t.what)), editText: T('Edit'),
        edit: () => this.setState({ txEditKey: txKey(t), txDelAsk: null, txEdWhat: t.what, txEdHelped: t.helped || 'yes' }),
        edHead: T('Edit treatment') + ' · ' + t.date, edId: 'tx-ed-' + txKey(t), edWhatLbl: T('What did you take or try?'), edHelpedLbl: T('Did it help?'),
        edWhat: s.txEdWhat, edOptions: [{ value: 'None', label: T('No medication or treatment that day') }].concat(TREATMENTS.map((o) => ({ value: o, label: T(o) }))), edNeedsHelped: !txIsNone(s.txEdWhat),
        edSetWhat: (e2) => this.setState({ txEdWhat: e2.target.value }),
        edHelped: HELPED.map((h) => Object.assign(chip(s.txEdHelped === h[0]), { label: T(h[1]), pick: () => this.setState({ txEdHelped: h[0] }) })),
        edSaveText: T('Save changes'), edCancelText: T('Cancel'),
        edCancel: () => this.setState({ txEditKey: null }),
        edSave: () => {
          const k = txKey(t);
          const ch = { what: s.txEdWhat, helped: txIsNone(s.txEdWhat) ? '' : s.txEdHelped };
          if (t.sample) { const m = Object.assign({}, s.txEdits || {}); m[t._si] = ch; this.setState({ txEdits: m, txEditKey: null }); }
          else this.setState({ treatments: s.treatments.map((x, i) => ('u' + i === k ? Object.assign({}, x, ch) : x)), txEditKey: null });
          this.flash(T('Treatment updated'));
        },
        keep: () => this.setState({ txDelAsk: null }),
        remove: () => {
          const k = txKey(t);
          if (t.sample) this.setState({ txHidden: (s.txHidden || []).concat([t._si]), txDelAsk: null });
          else this.setState({ treatments: s.treatments.filter((x, i) => 'u' + i !== k), txDelAsk: null });
          this.flash(T('Treatment deleted'));
        } })),
      txSummary,
      hasTxSummary: txSummary.length > 0,
      reminderOn: s.reminderOn ? 'true' : 'false',
      reminderBg: s.reminderOn ? accent : 'var(--line)',
      reminderKnob: s.reminderOn ? '22px' : '2px',
      toggleReminder: () => (!s.premium ? paywall() : s.reminderOn ? this.setState({ reminderOn: false }) : s.notifAllowed ? this.setState({ reminderOn: true }) : this.setState({ notifAsk: true })),
      reminderTime: s.reminderTime,
      setReminderTime: (e) => { if (e.target.value) this.setState({ reminderTime: e.target.value }); },
      reminderPreview: T('How’s your') + ' ' + T(ev.diarySpot || '').toLowerCase() + ' ' + T('today?'),
      showReminderPreview: s.reminderOn,

      // Emergency
      emergencyText: T('Not sure? Call 811 to talk to a nurse: Health Link in Alberta, Info-Santé in Quebec, HealthLink BC, Health Connect Ontario. Free in most provinces and territories. In an emergency, call 911.'),

      // Clinicians
      onClinicians: s.screen === 'clinicians',
      openClinicians: () => this.setState({ screen: 'clinicians', clinType: null, cliniciansFrom: s.screen }),
      cliniciansBack: () => go(s.cliniciansFrom || 'results'),
      clinicianFor: top ? T('Suggested for') + ' ' + top.name + ': ' + recommended.map(T).join(T(' or ')) : T('Choose the kind of care you need.'),
      clinTypes: CLINICIAN_TYPES.map((ct) => Object.assign(chip(ct === clinType), { label: T(ct) + (recommended.indexOf(ct) >= 0 ? ' ★' : ''), pick: () => this.setState({ clinType: ct }) })),
      postal: s.postal,
      setPostal: (e) => this.setState({ postal: e.target.value.toUpperCase().slice(0, 7) }),
      teleOn: s.telehealthOnly ? 'true' : 'false',
      teleBg: s.telehealthOnly ? accent : 'var(--line)',
      teleKnob: s.telehealthOnly ? '22px' : '2px',
      toggleTele: () => this.setState({ telehealthOnly: !s.telehealthOnly }),
      clinics,

      nd: { title: T('Not a diagnosis.'), gen: T('PainMap helps you describe your pain. Only a doctor, nurse or physiotherapist can diagnose it. In an emergency, call 911.'), find: T('Marking a spot helps you describe your pain. It does not tell you what is wrong.'), q: T('Your answers help you explain your pain to a health professional. They do not diagnose it.'), res: T('These are possible causes to talk about with a doctor, nurse or physiotherapist. Do not start treatment based on this list alone.'), rp: T('This report is built from your own entries to help your appointment. It is not a diagnosis or a medical record.'), dy: T('Trends, insights and the flare-up outlook are estimates from your entries, not a diagnosis or medical advice.'), plan: T('These are general exercises, not a diagnosis or a treatment plan made for you. Stop if pain gets worse, and check with a professional.') },
      // Welcome
      onWelcome: s.screen === 'welcome',
      welcomeTitle: T(welcome[0]),
      welcomeText: T(welcome[1]),
      welcomeIcon: ['M12 2v6M12 16v6M2 12h6M16 12h6', 'M4 19V5M4 19h16M8 15l4-5 3 3 5-6', 'M5 12l5 5 9-10'][Math.min(2, s.welcomeStep)],
      // The introduction is two screens: what PainMap does plus the safety agreement, then About you.
      // One tap agrees to the safety points and opens the body; age and gender are asked with the questions.
      welcomeNext: () => this.setState({ introAgree: true, introDone: true, screen: 'find', afterProfile: 'find', spot: null, regionId: null, confirmed: false, spotZoom: null }),
      welcomeNextText: T('I understand. Show me the body'),
      introHead: T('Find it. Track it. Fix it.'),
      introFeatures: [['Find it', 'M12 2v6M12 16v6M2 12h6M16 12h6'], ['Track it', 'M4 19V5M4 19h16M8 15l4-5 3 3 5-6'], ['Fix it', 'M5 12l5 5 9-10']].map((f) => ({ title: T(f[0]), icon: f[1], text: T(INTRO_TEXT[f[0]]) })),
      introSlide: true, introSafety: true, introFirst: true,
      introCanBack: false,
      introBack: () => this.setState({ screen: 'welcome', welcomeStep: 0 }),
      introStepNum: s.screen === 'profile' ? 2 : 1,
      introStepText: T('Step') + ' ' + (s.screen === 'profile' ? 2 : 1) + ' ' + T('of 2'),
      introBars: [1, 2].map((n) => ({ bg: n <= (s.screen === 'profile' ? 2 : 1) ? accent : 'var(--line)' })),
      introAgree: s.introAgree,
      toggleIntroAgree: () => this.setState({ introAgree: !s.introAgree }),
      agreeBorder: s.introAgree ? accent : 'var(--line)',
      agreeBox: s.introAgree ? accent : 'var(--muted)', agreeFill: s.introAgree ? accent : 'var(--card)', agreeTick: s.introAgree ? 1 : 0,
      agreeCard: 'var(--card)',
      introNextOff: false,
      introNextBg: accent,
      introNextFg: '#FFFFFF',
      replayIntro: () => this.setState({ screen: 'welcome', welcomeStep: 0, introDone: false, introAgree: false }),
      welcomeSignIn: () => this.setState({ screen: 'account', accountFrom: 'welcome' }),
      langChips: [['en', 'English'], ['fr', 'Français']].map((q) => Object.assign(chip(L === q[0]), { label: q[1], pick: () => this.setState({ lang: q[0] }) })),
      isFr: L === 'fr',
      reportHref: L === 'fr' ? 'Report-FR.dc.html' : 'Report.dc.html',
      // The printable layout boards live on the main canvas only; the tester copy has just the app, so it hides the link.
      hasPrintLayout: false,

      // Account
      onAccount: s.screen === 'account',
      signedIn: !!s.account,
      notSignedIn: !s.account,
      accountText: s.account ? T('Signed in with') + ' ' + s.account.method + (s.account.email ? ' · ' + s.account.email : '') : T('Not signed in. Your diary is only on this phone.'),
      accountEmail: s.accountEmail,
      setAccountEmail: (e) => this.setState({ accountEmail: e.target.value }),
      signApple: () => { if (!s.termsOk) { this.flash(T('Please agree to the Terms of Use and Privacy Policy first')); return; } this.setState({ account: { method: 'Apple' }, screen: s.accountFrom === 'welcome' ? (s.introDone ? 'find' : 'welcome') : s.accountFrom }); this.flash(T('Signed in. Your diary is backed up.')); },
      signGoogle: () => { if (!s.termsOk) { this.flash(T('Please agree to the Terms of Use and Privacy Policy first')); return; } this.setState({ account: { method: 'Google' }, screen: s.accountFrom === 'welcome' ? (s.introDone ? 'find' : 'welcome') : s.accountFrom }); this.flash(T('Signed in. Your diary is backed up.')); },
      signEmail: () => { if (!s.termsOk) { this.flash(T('Please agree to the Terms of Use and Privacy Policy first')); return; } if (!/.+@.+\..+/.test(s.accountEmail)) { this.flash(T('Enter a valid email')); return; } this.setState({ account: { method: 'email', email: s.accountEmail }, screen: s.accountFrom === 'welcome' ? (s.introDone ? 'find' : 'welcome') : s.accountFrom }); this.flash(T('Check your email to finish signing in (demo)')); },
      accountSkip: () => go(s.accountFrom === 'welcome' ? 'welcome' : s.accountFrom),
      signOut: () => { this.setState({ account: null }); this.flash(T('Signed out')); },
      openAccount: () => this.setState({ screen: 'account', accountFrom: s.screen }),

      // Settings
      onSettings: s.screen === 'settings',
      openSettings: () => this.setState({ screen: 'settings', settingsFrom: s.screen }),
      settingsBack: () => go(s.settingsFrom || 'find'),
      unitChips: [['cm', T('Centimetres')], ['in', T('Feet and inches')]].map((q) => Object.assign(chip(s.units === q[0]), { label: q[1], pick: () => this.setState({ units: q[0] }) })),
      heightCm: s.heightCm,
      heightText: height,
      setHeight: (e) => this.setState({ heightCm: parseInt(e.target.value, 10) || 170 }),
      bigOn: s.bigText ? 'true' : 'false', bigBg: s.bigText ? accent : 'var(--line)', bigKnob: s.bigText ? '22px' : '2px',
      toggleBig: () => this.setState({ bigText: !s.bigText }),
      motionOn: s.reduceMotion ? 'true' : 'false', motionBg: s.reduceMotion ? accent : 'var(--line)', motionKnob: s.reduceMotion ? '22px' : '2px',
      toggleMotion: () => this.setState({ reduceMotion: !s.reduceMotion }),
      rootZoom: s.bigText ? 1.15 : 1,
      // Fills the phone it is opened on (any size), and stays phone-width on a big screen.
      rootW: s.bigText ? 'calc(100vw / 1.15)' : '100vw',
      rootH: s.bigText ? 'calc(100dvh / 1.15)' : '100dvh',
      rootMaxW: s.bigText ? r2(480 / 1.15) + 'px' : '480px',
      exportData: () => this.flash(T('Your data export is being prepared (demo)')),
      askDelete: () => this.setState({ deleteAsk: true }),
      cancelDelete: () => this.setState({ deleteAsk: false }),
      confirmDelete: () => { this.setState({ deleteAsk: false, diary: [], treatments: [], savedSpots: [], planDone: {} }); this.flash(T('All your data was deleted')); },
      deleteAsk: s.deleteAsk,
      delAcctAsk: s.delAcctAsk, noDelAcctAsk: !s.delAcctAsk,
      askDelAcct: () => this.setState({ delAcctAsk: true }),
      cancelDelAcct: () => this.setState({ delAcctAsk: false }),
      confirmDelAcct: () => { this.setState({ delAcctAsk: false, account: null, diary: [], treatments: [], savedSpots: [], planDone: {}, planSwap: {}, premium: false, spot: null, regionId: null, confirmed: false, sex: null, screen: 'welcome', welcomeStep: 0 }); this.flash(T('Your account was deleted')); },
      showProfilePrompt: !s.sex && !s.profilePromptOff,
      showProfilePromptQ: !s.sex,
      showAboutQ: !s.profileSet,
      dismissProfilePrompt: () => this.setState({ profilePromptOff: true }),
      showScrollHint: s.screen === 'find' && !s.focus,
      needGuardian: s.age < 16,
      guardOn: s.guardianOk ? 'true' : 'false', guardBg: s.guardianOk ? accent : 'var(--line)', guardKnob: s.guardianOk ? '22px' : '2px',
      toggleGuard: () => this.setState({ guardianOk: !s.guardianOk }),
      noDeleteAsk: !s.deleteAsk,

      // Exercise demos (animation is off when reduce motion is on)
      demoAnim: s.reduceMotion ? 'none' : 'running',
      themeClass: s.theme === 'dark' ? 'pm-dark' : s.theme === 'light' ? 'pm-light' : 'pm-auto',
      themeChips: [['system', T('Match my phone')], ['light', T('Light')], ['dark', T('Dark')]].map((q) => Object.assign(chip(s.theme === q[0]), { label: q[1], pick: () => this.setState({ theme: q[0] }) }))
    };
  }

  // Doctor report built from the person's own spots, answers, diary and treatments.
  // Diary extras: weekly summary, left/right comparison and flare-up outlook for the selected spot.
  diaryPlusVals(s, accent, ev) {
    const fr = s.lang === 'fr';
    const T = (en) => tr(en, s.lang);
    const all = sampleDiary(s).concat(s.diary);
    const spot = ev.diarySpot;
    const series = all.filter((e) => e.spot === spot);
    const avg = (list) => list.reduce((a, e) => a + e.pain, 0) / list.length;
    const num = (v) => (fr ? v.toFixed(1).replace('.', ',') : v.toFixed(1));
    const first = series[0], last = series[series.length - 1];

    // Weekly summary.
    const pct = series.length > 1 && first.pain > 0 ? Math.round((first.pain - last.pain) / first.pain * 100) : 0;
    const helped = sampleTx(s).concat(s.treatments).filter((t) => t.spot === spot && t.helped === 'yes').length;
    const exDone = Object.keys(s.planDone).filter((k) => s.planDone[k]).length;
    const wkBig = pct > 0 ? (fr ? pct + ' % de mieux' : pct + '% better') : pct < 0 ? (fr ? -pct + ' % de plus' : -pct + '% worse') : T('Holding steady');

    // Left / right comparison.
    const m = /^(Right|Left) (.+)$/.exec(spot || '');
    const otherSpot = m ? (m[1] === 'Right' ? 'Left ' : 'Right ') + m[2] : null;
    const other = otherSpot ? all.filter((e) => e.spot === otherSpot) : [];
    const a = series.length ? avg(series) : 0, b = other.length ? avg(other) : 0, gap = a - b;
    const nameA = T(spot || ''), nameB = otherSpot ? T(otherSpot) : '';
    const lowB = fr ? nameB.toLowerCase() : 'your ' + nameB.toLowerCase();
    const sideText = Math.abs(gap) < 0.5 ? (fr ? 'Les deux côtés font à peu près aussi mal.' : 'Both sides hurt about the same.')
      : (gap > 0 ? nameA : nameB) + (fr ? ' : ' + num(Math.abs(gap)) + ' point' + (Math.abs(gap) >= 2 ? 's' : '') + ' de plus que le ' + (gap > 0 ? nameB : nameA).toLowerCase() + ' en moyenne.'
        : ' hurts ' + num(Math.abs(gap)) + ' points more than ' + (gap > 0 ? lowB : 'your ' + nameA.toLowerCase()) + ' on average.');

    // Flare-up outlook: triggers that go with higher pain for this spot, and whether today's check-in has any.
    const risky = TRIGGERS.map((t) => {
      const withT = series.filter((e) => (e.tags || []).indexOf(t[0]) >= 0), without = series.filter((e) => (e.tags || []).indexOf(t[0]) < 0);
      return withT.length >= 2 && without.length ? { id: t[0], name: T(t[1]).toLowerCase(), diff: avg(withT) - avg(without) } : null;
    }).filter((r) => r && r.diff >= 1).sort((x, y) => y.diff - x.diff);
    const today = risky.filter((r) => s.checkTags.indexOf(r.id) >= 0);
    const list = (rs) => rs.map((r) => r.name + ' (+' + num(r.diff) + ')').join(', ');
    const fcLevel = !risky.length ? T('Not enough data yet') : today.length ? '▲ ' + T('Higher chance of a flare-up tomorrow') : '● ' + T('Low chance of a flare-up tomorrow');
    const fcText = !risky.length ? T('Tag a few check-ins with what happened that day, like sleep or activity, and PainMap will learn your triggers.')
      : today.length ? (fr ? 'Vous avez noté aujourd’hui : ' : 'You tagged today: ') + list(today) + (fr ? '. Ces jours-là, votre douleur est habituellement plus forte. Allez-y doucement demain : exercices légers et repos prévu.' : '. Your pain is usually higher on those days. Go easy tomorrow: keep exercises gentle and plan some rest.')
      : (fr ? 'Vos déclencheurs connus : ' : 'Your known triggers: ') + list(risky) + (fr ? '. Aucun n’est noté aujourd’hui. Ajoutez-les au bilan ci-dessous s’ils s’appliquent.' : '. None are tagged today. Add them in the check-in below if they apply.');
    const warn = today.length > 0;

    return {
      diarySpotLabel: T(spot || ''), diarySpotLower: T(spot || '').toLowerCase(),
      wkShow: series.length > 1,
      wkBig, wkColor: pct > 0 ? 'var(--oktext)' : pct < 0 ? 'var(--dangertext)' : 'var(--ink)',
      wkSub: series.length > 1 ? (fr ? 'Douleur ' + first.pain + ' → ' + last.pain + ' depuis le ' + (FR_MED[first.date] || first.date) : 'Pain ' + first.pain + ' → ' + last.pain + ' since ' + first.date) : '',
      wkStats: [
        { text: series.length + ' ' + T(series.length === 1 ? 'check-in' : 'check-ins') },
        { text: helped + ' ' + T(helped === 1 ? 'treatment that helped' : 'treatments that helped') },
        { text: exDone + ' ' + T(exDone === 1 ? 'exercise done' : 'exercises done') }
      ],
      sideShow: other.length > 0 && series.length > 0,
      sideBars: [[nameA, a, a >= b], [nameB, b, b > a]].map((q) => ({ label: q[0], avg: num(q[1]), w: Math.round(q[1] * 10), color: q[2] ? 'var(--dangertext)' : accent })),
      sideText,
      sideHint: !!m && other.length === 0,
      sideHintText: m ? (fr ? 'Faites aussi un bilan pour : ' + T(otherSpot).toLowerCase() + ', afin de comparer les deux côtés.' : 'Check in on your ' + T(otherSpot).toLowerCase() + ' too, to compare both sides.') : '',
      fcLocked: !s.premium, fcOpen: s.premium,
      fcLevel, fcText,
      fcBg: !risky.length ? 'var(--soft)' : warn ? 'var(--warnbg)' : 'var(--okbg)',
      fcFg: !risky.length ? 'var(--ink)' : warn ? 'var(--warntext)' : 'var(--oktext)',
      fcBasis: (fr ? 'Selon ' + series.length + ' bilans pour cet endroit. Ce n’est pas un avis médical.' : 'Based on ' + series.length + ' check-ins for this spot. Not medical advice.')
    };
  }

  // Legal pages, the first-launch consent banner, privacy choices with a record, email preferences and data deletion.
  // Plan check-ins, Apple Health / Google Fit, medication reminders and the clinician sharing link.
  careVals(s, accent) {
    const fr = s.lang === 'fr', L = (en, frT) => (fr ? frT : en);
    const today = new Date().toLocaleDateString(fr ? 'fr-CA' : 'en-CA', { month: 'short', day: 'numeric' });
    const log = (what, on) => (s.consentLog || []).concat([{ what, on, when: today }]);
    const sw = (on) => ({ on: on ? 'true' : 'false', bg: on ? accent : 'var(--line)', knob: on ? '22px' : '2px' });
    const pill = (on, color) => ({ pressed: on ? 'true' : 'false', bg: on ? color : 'var(--card)', fg: on ? '#FFFFFF' : 'var(--ink)', border: on ? color : 'var(--line)' });

    // 6. "Is it helping?" after each week of a recovery plan. Two check-ins in a row without improvement suggest a clinician.
    const pk = s.plan ? s.plan.cause + '|' + s.plan.spot : '';
    const checks = (s.planChecks || {})[pk] || [];
    const last = checks[checks.length - 1], prev = checks[checks.length - 2];
    const stuck = !!last && last.v !== 'better' && !!prev && prev.v !== 'better';
    const addCheck = (v) => this.setState({ planChecks: Object.assign({}, s.planChecks, { [pk]: checks.concat([{ v, date: today }]) }) });
    const CHECK = [['better', L('Better', 'Mieux'), '#2E7D4F'], ['same', L('About the same', 'Pareil'), '#8A5A00'], ['worse', L('Worse', 'Pire'), '#B3261E']];
    const msg = !last ? '' : stuck
      ? L('No improvement over two check-ins. A physiotherapist or doctor can check what is going on and adjust the plan.', 'Aucune amélioration en deux bilans. Un physiothérapeute ou un médecin peut vérifier ce qui se passe et adapter le plan.')
      : last.v === 'better' ? L('Good progress. Keep going, and move on to the next week once this one feels easy.', 'Beau progrès. Continuez, et passez à la semaine suivante quand celle-ci devient facile.')
      : last.v === 'worse' ? L('Stop any exercise that makes the pain sharper. If it keeps getting worse, see a clinician.', 'Arrêtez tout exercice qui rend la douleur plus vive. Si elle continue d’empirer, consultez un clinicien.')
      : L('Give it another week. Check in again next week.', 'Donnez-lui une autre semaine. Refaites le bilan la semaine prochaine.');

    // 7. Steps and sleep from Apple Health or Google Fit (demo values until the real app connects).
    const healthWeek = [['Mon', 7200, 7.5, 3], ['Tue', 4100, 5.5, 5], ['Wed', 8800, 7.8, 3], ['Thu', 3900, 5.2, 6], ['Fri', 6500, 7, 4], ['Sat', 10200, 8.1, 2], ['Sun', 5600, 6.4, 4]];
    const shortNights = healthWeek.filter((d) => d[2] < 6), longNights = healthWeek.filter((d) => d[2] >= 6);
    const avg = (xs) => xs.reduce((a, d) => a + d[3], 0) / Math.max(1, xs.length);
    const gap = Math.round((avg(shortNights) - avg(longNights)) * 10) / 10;

    // 8. Medication reminders.
    const MEDS = ['Ibuprofen (Advil)', 'Acetaminophen (Tylenol)', 'Naproxen (Aleve)', 'Prescription medication', 'Other'];
    const EVERY = [['daily', L('Once a day', 'Une fois par jour')], ['twice', L('Twice a day', 'Deux fois par jour')], ['asneeded', L('Only on days I log pain', 'Seulement les jours où je note de la douleur')]];

    // 9. Clinician sharing link (read-only, expires, can be stopped at any time).
    const SHARE = [['spots', L('Pain spots and my answers', 'Points de douleur et mes réponses')], ['diary', L('Pain diary and chart', 'Journal et graphique')], ['tx', L('Treatments and medication', 'Traitements et médicaments')], ['plan', L('Recovery plan progress', 'Progrès du plan de rétablissement')]];
    const code = () => { const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let c = ''; for (let i = 0; i < 8; i++) c += a[Math.floor(Math.random() * a.length)]; return c.slice(0, 4) + '-' + c.slice(4); };

    return {
      // 6
      pcH: L('Is the plan helping?', 'Le plan aide-t-il ?'),
      pcP: L('Check in once a week. Your answers go into your doctor report.', 'Faites un bilan une fois par semaine. Vos réponses vont dans votre rapport pour le médecin.'),
      pcOpts: CHECK.map((q) => Object.assign(pill(last && last.v === q[0], q[2]), { label: q[1], pick: () => addCheck(q[0]) })),
      pcHas: !!last, pcMsg: msg, pcStuck: stuck,
      pcHistory: checks.length ? L('Check-ins: ', 'Bilans : ') + checks.map((c) => c.date + ' ' + (CHECK.find((q) => q[0] === c.v) || [0, ''])[1]).join(' · ') : '',
      pcFind: L('Find a physiotherapist or doctor', 'Trouver un physiothérapeute ou un médecin'),
      pcOpenClinicians: () => this.setState({ screen: 'clinicians', clinType: null, cliniciansFrom: 'plan' }),
      // 7
      hlH: L('Connected apps', 'Applications connectées'),
      hlLabel: L('Apple Health / Google Fit', 'Apple Santé / Google Fit'),
      hlSub: L('Read steps and sleep to spot what affects your pain. PainMap never writes to them.', 'Lire les pas et le sommeil pour repérer ce qui influence votre douleur. PainMap n’y écrit jamais rien.'),
      hlSw: sw(s.healthOn),
      hlToggle: () => (s.healthOn ? this.setState({ healthOn: false, consentLog: log('health', false) }) : this.setState({ healthAsk: true })),
      hlAsk: !!s.healthAsk,
      hlAskH: L('Allow PainMap to read steps and sleep?', 'Permettre à PainMap de lire les pas et le sommeil ?'),
      hlAskP: L('Only steps and hours of sleep are read, to compare with your pain. Nothing is shared or sold, and you can turn this off at any time. Your phone will ask you to confirm.', 'Seuls les pas et les heures de sommeil sont lus, pour les comparer à votre douleur. Rien n’est partagé ni vendu, et vous pouvez désactiver ceci en tout temps. Votre téléphone vous demandera de confirmer.'),
      hlAllow: L('Allow', 'Autoriser'), hlNo: L('Not now', 'Pas maintenant'),
      hlYes: () => { this.setState({ healthOn: true, healthAsk: false, consentLog: log('health', true) }); this.flash(L('Connected. In the real app your phone asks for permission (demo).', 'Connecté. Dans la vraie application, votre téléphone demande la permission (démo).')); },
      hlCancel: () => this.setState({ healthAsk: false }),
      hlOn: !!s.healthOn,
      hlCardH: L('Steps and sleep this week', 'Pas et sommeil cette semaine'),
      hlDays: healthWeek.map((d) => ({ day: fr ? ({ Mon: 'lun', Tue: 'mar', Wed: 'mer', Thu: 'jeu', Fri: 'ven', Sat: 'sam', Sun: 'dim' })[d[0]] : d[0], steps: (d[1] / 1000).toFixed(1) + 'k', sleep: d[2] + ' h', bar: Math.round(d[1] / 110), low: d[2] < 6 ? '#B3261E' : 'var(--muted)' })),
      hlInsight: gap > 0
        ? L('After nights under 6 hours of sleep, your pain was ' + gap + ' points higher on average.', 'Après les nuits de moins de 6 heures de sommeil, votre douleur était en moyenne ' + gap + ' points plus élevée.')
        : L('No clear link between sleep and pain yet.', 'Aucun lien clair entre le sommeil et la douleur pour l’instant.'),
      hlDemo: L('Sample data shown until the real app connects.', 'Données d’exemple affichées jusqu’à la connexion de la vraie application.'),
      // 8
      mdH: L('Medication reminders', 'Rappels de médicaments'),
      mdOpts: [{ value: 'None', label: L('No medication (I don’t take any)', 'Aucun médicament (je n’en prends pas)') }].concat(MEDS.map((m) => ({ value: m, label: tr(m, s.lang) }))), mdWhat: s.medWhat, mdTime: s.medTime,
      mdNotNone: s.medWhat !== 'None',
      mdNoneShow: !!s.medNone, mdNoneText: s.medNone ? L('No regular medication · saved ', 'Aucun médicament régulier · enregistré le ') + s.medNone : '',
      mdNoneDelLabel: L('Remove: no regular medication', 'Retirer : aucun médicament régulier'),
      mdNoneDel: () => { this.setState({ medNone: null }); this.flash(L('Removed', 'Retiré')); },
      mdNoneConflict: s.medWhat === 'None' && (s.medReminders || []).length > 0,
      mdNoneConflictText: L('You still have reminders below. Delete any you no longer take.', 'Vous avez encore des rappels ci-dessous. Supprimez ceux que vous ne prenez plus.'),
      mdSetWhat: (e) => this.setState({ medWhat: e.target.value }),
      mdSetTime: (e) => { if (e.target.value) this.setState({ medTime: e.target.value }); },
      mdEvery: EVERY.map((q) => Object.assign(pill(s.medEvery === q[0], accent), { label: q[1], pick: () => this.setState({ medEvery: q[0] }) })),
      mdWhatLbl: L('Medication', 'Médicament'), mdTimeLbl: L('Time', 'Heure'), mdEveryLbl: L('How often', 'Fréquence'),
      mdAddText: s.medWhat === 'None' ? L('Save: no medication', 'Enregistrer : aucun médicament') : L('Add reminder', 'Ajouter le rappel'),
      mdAdd: () => {
        if (s.medWhat === 'None') { this.setState({ medNone: new Date().toLocaleDateString(s.lang === 'fr' ? 'fr-CA' : 'en-US', { month: 'short', day: 'numeric' }) }); this.flash(L('Saved: no medication', 'Enregistré : aucun médicament')); return; }
        this.setState({ medNone: null, medReminders: (s.medReminders || []).concat([{ id: Date.now(), what: s.medWhat, time: s.medTime, every: s.medEvery }]) }); this.flash(L('Reminder added', 'Rappel ajouté')); },
      mdList: (s.medReminders || []).map((r) => ({
        text: tr(r.what, s.lang) + ' · ' + r.time + ' · ' + (EVERY.find((q) => q[0] === r.every) || [0, ''])[1],
        delLabel: L('Delete reminder: ', 'Supprimer le rappel : ') + tr(r.what, s.lang) + ' ' + r.time,
        del: () => { this.setState({ medReminders: s.medReminders.filter((x) => x.id !== r.id) }); this.flash(L('Reminder deleted', 'Rappel supprimé')); }
      })),
      mdHas: (s.medReminders || []).length > 0,
      mdSafe: L('Follow the label or your pharmacist’s directions, and never take more than the daily maximum. Reminders never show the medication name on the lock screen.', 'Suivez l’étiquette ou les directives de votre pharmacien, et ne dépassez jamais la dose maximale par jour. Les rappels n’affichent jamais le nom du médicament sur l’écran verrouillé.'),
      // 9
      shH: L('Share with my clinician', 'Partager avec mon clinicien'),
      shP: L('Create a private, read-only link for your physiotherapist or doctor. It ends after 30 days, and you can stop it at any time.', 'Créez un lien privé en lecture seule pour votre physiothérapeute ou votre médecin. Il expire après 30 jours, et vous pouvez l’arrêter en tout temps.'),
      shWhatLbl: L('What they can see', 'Ce qu’il ou elle peut voir'),
      shOpts: SHARE.map((q) => {
        const on = !!(s.shareWhat || {})[q[0]];
        return { label: q[1], on: on ? 'true' : 'false', bd: on ? accent : 'var(--muted)', bg: on ? accent : 'var(--card)', tk: on ? 1 : 0, toggle: () => this.setState({ shareWhat: Object.assign({}, s.shareWhat, { [q[0]]: !on }) }) };
      }),
      shOff: !s.shareOn, shOn: !!s.shareOn,
      shCreateText: L('Create sharing link', 'Créer le lien de partage'),
      shCreate: () => {
        if (!Object.keys(s.shareWhat || {}).some((k) => s.shareWhat[k])) { this.flash(L('Choose at least one thing to share', 'Choisissez au moins un élément à partager')); return; }
        this.setState({ shareOn: true, shareCode: code(), consentLog: log('share', true) });
      },
      shLink: 'painmap.ca/c/' + (s.shareCode || ''),
      shExpires: L('Read-only · ends in 30 days · viewed 0 times', 'Lecture seule · expire dans 30 jours · consulté 0 fois'),
      shCopyText: L('Copy link', 'Copier le lien'),
      // Copying can be blocked (browser settings or an embedded page), so only say "copied" when it worked.
      shCopy: () => {
        const link = 'painmap.ca/c/' + s.shareCode;
        const ok = () => this.flash(L('Link copied. In the real app this link opens your shared report (demo).', 'Lien copié. Dans la vraie application, ce lien ouvre votre rapport partagé (démo).'));
        const no = () => this.flash(L('Could not copy here. Your link is ', 'Copie impossible ici. Votre lien est ') + link);
        try { const pr = navigator.clipboard && navigator.clipboard.writeText('https://' + link); if (pr && pr.then) pr.then(ok, no); else no(); } catch (e) { no(); }
      },
      shStopText: L('Stop sharing', 'Arrêter le partage'),
      shStop: () => { this.setState({ shareOn: false, shareCode: '', consentLog: log('share', false) }); this.flash(L('Sharing stopped. The link no longer works.', 'Partage arrêté. Le lien ne fonctionne plus.')); }
    };
  }

  legalVals(s, accent) {
    const fr = s.lang === 'fr', L = (en, frT) => (fr ? frT : en);
    const today = new Date().toLocaleDateString(fr ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
    const log = (what, on) => (s.consentLog || []).concat([{ what, on, when: today }]);
    const doc = LEGAL[s.legalDoc] || LEGAL.privacy;
    const sw = (on) => ({ on: on ? 'true' : 'false', bg: on ? accent : 'var(--line)', knob: on ? '22px' : '2px' });
    const openLegal = (key) => this.setState({ screen: 'legal', legalDoc: key, legalFrom: s.screen === 'legal' ? s.legalFrom : s.screen });
    const under16 = s.age < 16;
    const WHAT = {
      health: L('Apple Health / Google Fit: steps and sleep', 'Apple Santé / Google Fit : pas et sommeil'),
      share: L('Sharing link for my clinician', 'Lien de partage pour mon clinicien'),
      analytics: L('Anonymous usage stats', 'Statistiques d’utilisation anonymes'),
      crash: L('Crash reports', 'Rapports de plantage'),
      marketing: L('Tips and offers by email', 'Conseils et offres par courriel'),
      reminders: L('Daily reminder notifications', 'Rappels quotidiens'),
      terms: L('Terms of use and privacy policy', 'Conditions d’utilisation et politique de confidentialité'),
      deletion: L('Data deletion request', 'Demande de suppression des données')
    };
    const choiceRows = [
      ['analytics', s.analyticsOk, L('Help improve PainMap with anonymous usage counts. Never health details.', 'Aidez à améliorer PainMap avec des statistiques anonymes. Jamais de données de santé.'), 'analyticsOk'],
      ['crash', s.crashOk, L('Send a report if the app crashes, so we can fix it.', 'Envoyer un rapport si l’application plante, pour la corriger.'), 'crashOk'],
      ['marketing', s.marketingOk, under16 ? L('Not available under 16.', 'Non offert aux moins de 16 ans.') : L('Occasional tips and offers. Unsubscribe any time.', 'Conseils et offres à l’occasion. Désabonnement en tout temps.'), 'marketingOk'],
      ['reminders', s.reminderOn, L('A daily nudge to check in. Premium.', 'Un rappel quotidien pour votre bilan. Premium.'), 'reminderOn']
    ];
    // Consent checks: optional features run only with a recorded yes.
    const flip = (key, field, cur) => {
      if (key === 'marketing' && under16 && !cur) { this.flash(L('Marketing emails are not available under 16.', 'Les courriels promotionnels ne sont pas offerts aux moins de 16 ans.')); return; }
      if (key === 'reminders' && !s.premium && !cur) { this.setState({ screen: 'premium', paywallFrom: 'legal' }); return; }
      this.setState({ [field]: !cur, consentLog: log(key, !cur) });
    };
    return {
      onLegal: s.screen === 'legal',
      legalBack: () => this.setState({ screen: s.legalFrom && s.legalFrom !== 'legal' ? s.legalFrom : 'settings' }),
      lgTitle: doc.title[fr ? 1 : 0],
      lgSections: doc.sections.map((x) => ({ h: x[fr ? 1 : 0], p: x[fr ? 3 : 2].split('~').join(String.fromCharCode(10)) })),
      lgIsDoc: doc.sections.length > 0 && ['choices', 'email', 'deletion'].indexOf(s.legalDoc) < 0,
      lgIsChoices: s.legalDoc === 'choices', lgIsEmail: s.legalDoc === 'email', lgIsDelete: s.legalDoc === 'deletion',
      lg: {
        draft: L('Draft for review by a Canadian lawyer before launch. Text in [brackets] is a placeholder.', 'Ébauche à faire réviser par un avocat canadien avant le lancement. Le texte entre [crochets] est à remplacer.'),
        hubH: L('Legal and privacy', 'Légal et confidentialité'),
        hubP: L('Policies, your consents and your data rights.', 'Politiques, vos consentements et vos droits sur vos données.'),
        logH: L('Your consent record', 'Historique de vos consentements'),
        logEmpty: L('No choices recorded yet.', 'Aucun choix enregistré pour l’instant.'),
        withdraw: L('Withdraw all optional consents', 'Retirer tous les consentements facultatifs'),
        essentialH: L('Essential (always on)', 'Essentiel (toujours actif)'),
        essentialP: L('Saving your settings and diary on this phone so the app works.', 'Enregistrer vos réglages et votre journal sur ce téléphone pour que l’application fonctionne.'),
        emailP: L('Account emails (sign-in links, receipts, policy changes) are always sent. Everything else is your choice.', 'Les courriels de compte (liens de connexion, reçus, changements de politique) sont toujours envoyés. Le reste est à votre choix.'),
        previewH: L('Example email', 'Exemple de courriel'),
        previewSubj: L('Your weekly PainMap tip', 'Votre conseil PainMap de la semaine'),
        previewBody: L('Hi! A short walk most days is one of the best things for back pain. Log how you feel tonight to see your progress.', 'Bonjour! Une courte marche presque tous les jours est l’une des meilleures choses pour le mal de dos. Notez comment vous vous sentez ce soir pour voir vos progrès.'),
        previewFoot: L('You receive this because you opted in to tips. [BUSINESS NAME], [ADDRESS], Canada.', 'Vous recevez ce courriel parce que vous avez accepté les conseils. [NOM DE L’ENTREPRISE], [ADRESSE], Canada.'),
        unsub: L('Unsubscribe', 'Se désabonner'),
        managePrefs: L('Manage email preferences', 'Gérer les préférences de courriel'),
        delEmailL: L('Email on your account', 'Courriel de votre compte'),
        delScopeL: L('What should we delete?', 'Que devons-nous supprimer?'),
        delSend: L('Send deletion request', 'Envoyer la demande de suppression'),
        bannerH: L('Your privacy choices', 'Vos choix de confidentialité'),
        bannerP: L('PainMap only stores what it needs on your phone. With your permission, we would also use anonymous usage stats and crash reports to improve the app. No ads, no tracking.', 'PainMap ne conserve sur votre téléphone que ce dont il a besoin. Avec votre permission, nous utiliserions aussi des statistiques anonymes et des rapports de plantage pour améliorer l’application. Aucune publicité, aucun suivi.'),
        acceptAll: L('Accept all', 'Tout accepter'), essential: L('Essential only', 'Essentiel seulement'), choose: L('Choose', 'Choisir'),
        policyLinks: L('Terms · Privacy · Refunds', 'Conditions · Confidentialité · Remboursements'),
        areaLbl: L('Or choose an area from a list', 'Ou choisissez une zone dans une liste'),
        areaPick: L('Choose an area…', 'Choisir une zone…')
      },
      legalLinks: LEGAL_ORDER.map((key) => ({ label: LEGAL[key].title[fr ? 1 : 0], open: () => openLegal(key) })),
      openLegalPolicies: () => openLegal('terms'),
      openTerms: () => openLegal('terms'),
      openPrivacy: () => openLegal('privacy'),
      openRefunds: () => openLegal('refunds'),
      lgTermsT: LEGAL.terms.title[fr ? 1 : 0], lgPrivacyT: LEGAL.privacy.title[fr ? 1 : 0], lgRefundsT: LEGAL.refunds.title[fr ? 1 : 0],
      lgChoices: choiceRows.map((r) => Object.assign(sw(!!r[1]), { label: WHAT[r[0]], desc: r[2], toggle: () => flip(r[0], r[3], !!r[1]) })),
      lgLog: (s.consentLog || []).slice(-8).reverse().map((e) => ({ text: (e.on ? '✓ ' : '✕ ') + (WHAT[e.what] || e.what) + ' · ' + e.when })),
      lgNoLog: !(s.consentLog || []).length,
      withdrawAll: () => { this.setState({ analyticsOk: false, crashOk: false, marketingOk: false, reminderOn: false, consentLog: log('analytics', false).concat([{ what: 'crash', on: false, when: today }, { what: 'marketing', on: false, when: today }]) }); this.flash(L('All optional consents withdrawn', 'Tous les consentements facultatifs ont été retirés')); },
      toggleAnalytics: () => flip('analytics', 'analyticsOk', !!s.analyticsOk),
      toggleMarketing: () => flip('marketing', 'marketingOk', !!s.marketingOk),
      // First-launch banner: three equal choices, nothing pre-ticked.
      showConsent: !s.consentAsked && s.introDone && ['results', 'diary', 'explore', 'plan', 'report', 'settings'].indexOf(s.screen) >= 0,
      consentAll: () => this.setState({ consentAsked: true, analyticsOk: true, crashOk: true, consentLog: log('analytics', true).concat([{ what: 'crash', on: true, when: today }]) }),
      consentEssential: () => this.setState({ consentAsked: true, analyticsOk: false, crashOk: false, consentLog: log('analytics', false).concat([{ what: 'crash', on: false, when: today }]) }),
      consentChoose: () => this.setState({ consentAsked: true, screen: 'legal', legalDoc: 'choices', legalFrom: s.screen }),
      // Email preferences and the unsubscribe link every marketing email carries.
      lgEmailMarketing: Object.assign(sw(!!s.marketingOk), { label: WHAT.marketing, toggle: () => flip('marketing', 'marketingOk', !!s.marketingOk) }),
      unsubscribe: () => { this.setState({ marketingOk: false, consentLog: log('marketing', false) }); this.flash(L('You are unsubscribed from tips and offers', 'Vous êtes désabonné des conseils et offres')); },
      // Data deletion request.
      delEmail: s.delEmail, setDelEmail: (e) => this.setState({ delEmail: e.target.value }),
      delScopes: [['all', L('Everything', 'Tout')], ['diary', L('Diary only', 'Journal seulement')], ['account', L('Account and backups', 'Compte et sauvegardes')]].map((q) => {
        const on = s.delScope === q[0];
        return { label: q[1], pressed: on ? 'true' : 'false', bg: on ? 'var(--tealsoft)' : 'var(--card)', fg: on ? 'var(--tealtext)' : 'var(--ink)', border: on ? '2px solid ' + accent : '1px solid var(--line)', pick: () => this.setState({ delScope: q[0] }) };
      }),
      sendDeletion: () => {
        if (!((s.delEmail || '').indexOf('@') > 0 && (s.delEmail || '').indexOf('.') > 0) && !s.account) { this.flash(L('Enter the email on your account', 'Entrez le courriel de votre compte')); return; }
        this.setState({ delEmail: '', consentLog: log('deletion', true) });
        this.flash(L('Request received. We will confirm within 30 days.', 'Demande reçue. Nous confirmerons dans les 30 jours.'));
      },
      // Premium: the full price, renewal and cancellation shown before buying.
      billingText: s.priceSel === 'monthly'
        ? L('$11.99 CAD a month, plus applicable taxes. Renews monthly until you cancel. Cancel any time in your App Store or Google Play settings.', '11,99 $ CA par mois, taxes applicables en sus. Renouvellement mensuel jusqu’à l’annulation. Annulez en tout temps dans les réglages de l’App Store ou de Google Play.')
        : s.priceSel === 'lifetime'
          ? L('One payment of $179.99 CAD, plus applicable taxes. No subscription and no renewals.', 'Un seul paiement de 179,99 $ CA, taxes applicables en sus. Aucun abonnement ni renouvellement.')
          : L('Free for 7 days, then $69.99 CAD a year, plus applicable taxes. Renews yearly until you cancel. Cancel at least 24 hours before the trial ends to avoid being charged.', 'Gratuit pendant 7 jours, puis 69,99 $ CA par année, taxes applicables en sus. Renouvellement annuel jusqu’à l’annulation. Annulez au moins 24 heures avant la fin de l’essai pour ne pas être facturé.'),
      notNow: L('Not now', 'Pas maintenant'),
      premiumH: L('Get more from your pain diary', 'Tirez davantage de votre journal de douleur'),
      premiumP: L('Premium adds the full diary, recovery plans and a doctor report. It gives general information and does not diagnose or treat any condition.', 'Premium ajoute le journal complet, les plans de rétablissement et un rapport pour le médecin. Il donne de l’information générale et ne pose aucun diagnostic ni traitement.'),
      // Buttons with white text use a darker coral, for readable contrast.
      coralBtn: '#B9472D',
      // Keyboard and screen-reader alternative to tapping the 360° body.
      lgAreas: REGIONS.front.concat(REGIONS.back).map((r) => ({ id: r.id, label: tr(r.label, s.lang) })),
      b3PickArea: (e) => {
        const r = REGIONS.front.concat(REGIONS.back).find((q) => q.id === e.target.value);
        if (!r) return;
        this.setState({ screen: 'questions', view: REGIONS.front.indexOf(r) >= 0 ? 'front' : 'back', regionId: r.id, spot: { x: r.x, y: r.y }, confirmed: true, focus: false, partKey: null, spotZoom: null, precise: null, tutorialDone: true });
      }
    };
  }

  // The 360° body: spin it, switch muscles / skeleton / skin, read the muscle names, tap to mark the spot.
  body360Vals(s, accent) {
    const T = (en) => tr(en, s.lang), fr = s.lang === 'fr';
    const fem = s.sex === 'female';
    const mesh = fem ? B3.MESH.female : B3.MESH.male;
    const norm = (a) => ((Math.round(a) % 360) + 360) % 360;
    if (s.screen !== 'body360' && s.screen !== 'find') return { on360: false, b3AsFind: false, b3NotFind: false };
    const ang = s.b3Angle, rad = ang * Math.PI / 180, c = Math.cos(rad), sn = Math.sin(rad);
    // The real 3D body takes over once loaded; until then, or without WebGL, the drawn body shows.
    const is3D = !!this.v3d && s.b3Ready && !s.b3Err;
    // Whether this phone can show the 3D body at all (checked once). When it can, the old drawn body is never
    // drawn, not even while the model loads: a loading indicator shows instead.
    if (this.can3D === undefined) this.can3D = !!(window.PM3D && window.PM3D.supported());
    const show3D = this.can3D && !s.b3Err;
    const layer = s.b3Layer === 'organ' && !is3D ? 'muscle' : s.b3Layer;
    B3.setSkin('medium');
    const tone = { bone: B3.BONE, cart: B3.CART, dark: B3.DARK, teeth: B3.TEETH };
    const faces = show3D ? [] : layer === 'bone'
      ? B3.paintMesh(B3.SKEL[fem ? 'female' : 'male'], c, sn, (f) => tone[f.tone] || B3.BONE, 'skull', B3.SKULL_PARTS)
      : B3.paintMesh(mesh, c, sn, layer === 'muscle' ? B3.muscleColor : (f) => B3.baseColor(f, fem), 'head', B3.FACE_PARTS, layer === 'muscle' ? B3.STROKES[fem ? 'female' : 'male'] : null);
    const labels = s.b3Names && !show3D ? B3.placeLabels(mesh, B3.LABELPTS[layer][fem ? 'female' : 'male'], c, sn, fr) : [];
    const pins = [];
    let hidden = false;
    if (s.b3Pin && !show3D) {
      const P = B3.rotY(s.b3Pin.p, c, sn), Nn = B3.rotY(s.b3Pin.n, c, sn), front = B3.hitTest(mesh, P[0], P[1], c, sn);
      hidden = Nn[2] < -0.05 || !!(front && front.depth > P[2] + 2);
      pins.push({ x: B3.r1d(P[0]), y: B3.r1d(P[1]), op: hidden ? 0.45 : 1, dash: hidden ? '2 2' : 'none' });
    }
    const fromEvent = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return [-178 + (e.clientX - rect.left) / rect.width * 356, -6 + (e.clientY - rect.top) / rect.height * 400];
    };
    const viewOf = (a) => (a <= 20 || a >= 340 ? 0 : a >= 70 && a <= 110 ? 1 : a >= 160 && a <= 200 ? 2 : a >= 250 && a <= 290 ? 3 : -1);
    const vName = fr ? ['Avant', 'Côté droit', 'Arrière', 'Côté gauche'] : ['Front', 'Right side', 'Back', 'Left side'], cur = viewOf(ang);
    const nm = s.b3Pin ? s.b3Pin.name : null;
    return {
      on360: true, b3AsFind: s.screen === 'find', b3NotFind: s.screen !== 'find',
      b3CanvasRef: this.b3CanvasRef, b3CanvasDisplay: show3D ? 'block' : 'none', b3Flat: !show3D, b3Is3D: is3D,
      b3Loading: show3D && !is3D, b3LoadText: T('Loading the 3D body…') + ' ' + s.b3Prog + '%',
      b3Alt3D: T('3D body. Drag to turn it, pinch to zoom, tap to mark your pain.'),
      b3Credit: fr
        ? 'Anatomie : BodyParts3D © The Database Center for Life Science (CC BY 4.0); organes féminins : HuBMAP Human Reference Atlas (CC BY 4.0); corps féminin : MakeHuman (CC0). Modifié par open-anatomy-3d et PainMap (CC BY 4.0). Pas pour un diagnostic.'
        : 'Anatomy: BodyParts3D © The Database Center for Life Science (CC BY 4.0); female organs: HuBMAP Human Reference Atlas (CC BY 4.0); female body: MakeHuman (CC0). Modified by open-anatomy-3d and PainMap (CC BY 4.0). Not for diagnosis.',
      b3Faces: faces, b3Blur: layer === 'muscle' ? 1 : 0.5, b3Halo: layer === 'bone' ? B3.silhouette(mesh, c, sn) : '', b3Labels: labels, b3Pins: pins,
      b3Angle: ang, b3AngleText: ang + '°', b3ViewName: cur >= 0 ? vName[cur] : T('Turning'),
      b3Alt: T('Body turned to') + ' ' + ang + '°',
      b3Cursor: this.drag360 && this.drag360.moved ? 'grabbing' : 'crosshair',
      b3Layers: [['muscle', T('Muscles'), '#B8352D'], ['bone', T('Skeleton'), '#EADFC4'], ['skin', T('Skin'), '#E2B092']].concat(is3D ? [['organ', T('Organs'), '#C98A6E']] : []).map((q) => {
        const on = s.b3Layer === q[0];
        return { label: q[1], dot: q[2], pressed: on ? 'true' : 'false', bg: on ? '#2A2118' : 'var(--card)', fg: on ? '#FFFFFF' : 'var(--ink)', border: on ? '#2A2118' : 'var(--line)', pick: () => this.setState({ b3Layer: q[0] }) };
      }),
      b3LabelsOn: s.b3Names ? 'true' : 'false', b3LabelsBg: s.b3Names ? 'var(--tealsoft)' : 'var(--card)', b3LabelsFg: s.b3Names ? 'var(--tealtext)' : 'var(--ink)',
      b3ToggleLabels: () => this.setState({ b3Names: !s.b3Names }),
      b3Views: [0, 90, 180, 270].map((a, k) => {
        const on = cur === k;
        return { label: vName[k], pressed: on ? 'true' : 'false', bg: on ? 'var(--tealsoft)' : 'var(--card)', fg: on ? 'var(--tealtext)' : 'var(--ink)', border: on ? accent : 'var(--line)', pick: () => this.setState({ b3Angle: a }) };
      }),
      b3SpinL: () => this.setState({ b3Angle: norm(ang - 45) }),
      b3SpinR: () => this.setState({ b3Angle: norm(ang + 45) }),
      b3SetAngle: (e) => this.setState({ b3Angle: norm(Number(e.target.value)) }),
      b3Down: (e) => {
        if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
        this.drag360 = { x0: e.clientX, a0: ang, moved: false };
      },
      b3Move: (e) => {
        const d = this.drag360;
        if (!d) return;
        const dx = e.clientX - d.x0;
        if (!d.moved && Math.abs(dx) < 6) return;
        d.moved = true;
        this.setState({ b3Angle: norm(d.a0 + dx * 1.2) });
      },
      b3Up: (e) => {
        const d = this.drag360;
        this.drag360 = null;
        if (d && !d.moved) {
          const q = fromEvent(e), h = B3.hitTest(mesh, q[0], q[1], c, sn);
          if (h) this.setState({ b3Pin: { p: h.p, n: h.n, name: B3.spotName(h), area: B3.areaId(h) }, b3TourDone: true });
        } else this.setState({});
      },
      b3Cancel: () => { this.drag360 = null; this.setState({}); },
      b3HasPin: !!s.b3Pin, b3NoPin: !s.b3Pin,
      b3PinLabel: nm ? (fr ? nm.fr : nm.en) : '',
      b3PinSub: !s.b3Pin ? '' : is3D && s.b3Pin.what ? (s.b3Pin.under ? T('Under the skin here:') + ' ' + (fr ? s.b3Pin.under.fr : s.b3Pin.under.en) : (fr ? s.b3Pin.what.fr : s.b3Pin.what.en)) + '. ' + T('Tap again to move it.') : hidden ? T('The pin is on the far side. Spin the body to see it.') : T('Spin to check it from another side, or tap again to move it.'),
      b3Choose: () => {
        if (!s.b3Pin) return;
        const r = REGIONS.front.concat(REGIONS.back).find((q) => q.id === s.b3Pin.area);
        if (!r) return;
        // The depth layer follows what was tapped: organs, bone, or muscle (skin taps use the muscle underneath).
        const k = s.b3Pin.kind, inner = k === 'organ' || k === 'vessel' || k === 'nerve';
        const layerIndex = inner ? 5 : k === 'bone' ? 4 : k === 'muscle' || s.b3Pin.underKey ? 2 : s.b3Layer === 'skin' ? 0 : 2;
        this.setState({ screen: 'questions', view: REGIONS.front.indexOf(r) >= 0 ? 'front' : 'back', regionId: r.id, spot: { x: r.x, y: r.y }, confirmed: true, focus: false, partKey: null, spotZoom: null, layerIndex, precise: { id: r.id, en: nm.en, fr: nm.fr, organ: inner ? s.b3Pin.key : null }, tutorialDone: true });
      },
      b3FaceIt: () => { if (is3D) { this.v3d.faceMarker(); return; } if (s.b3Pin) { const n = s.b3Pin.n; this.setState({ b3Angle: norm(Math.atan2(-n[0], n[2]) * 180 / Math.PI) }); } },
      b3Clear: () => { if (this.v3d) this.v3d.clear(); this.setState({ b3Pin: null }); },
      // Pain in more than one place: keep this spot, then tap the next. Together they feed the linked-pattern check.
      b3AddSpot: () => {
        const p = s.b3Pin;
        const r = p ? REGIONS.front.concat(REGIONS.back).find((q) => q.id === p.area) : null;
        if (!r) return;
        const inner = p.kind === 'organ' || p.kind === 'vessel' || p.kind === 'nerve';
        const lyr = LAYERS[inner ? 5 : p.kind === 'bone' ? 4 : p.kind === 'muscle' || p.underKey ? 2 : 0];
        const side = /-r$/.test(r.id) ? 'R' : /-l$/.test(r.id) ? 'L' : '';
        const spot = { regionId: r.id, label: r.label, key: r.key, side, x: r.x, y: r.y, view: REGIONS.front.indexOf(r) >= 0 ? 'front' : 'back', layer: lyr.name, w3: { world: p.world, normal: p.normal, en: nm.en, fr: nm.fr } };
        this.setState({ savedSpots: s.savedSpots.concat([spot]), b3Pin: null });
        this.flash(T('Spot kept. Now tap the next place it hurts.'));
      },
      b3HasSaved: s.savedSpots.some((q) => q.w3),
      b3SavedText: T('Also marked:') + ' ' + s.savedSpots.filter((q) => q.w3).map((q) => (fr ? q.w3.fr : q.w3.en)).join(' · '),
      b3ClearSavedText: T('Clear these'),
      b3ClearSaved: () => this.setState({ savedSpots: s.savedSpots.filter((q) => !q.w3) }),
      // Showing the muscles a recovery plan works.
      b3FocusOn: !!s.b3Focus,
      b3FocusText: s.b3Focus ? T('Your plan works these muscles, shown in blue:') + ' ' + s.b3Focus.keys.map((k) => (fr ? name3D(k).fr : name3D(k).en)).join(', ') + '.' : '',
      b3FocusBackText: T('Back to my plan'), b3FocusDoneText: T('Done'),
      b3FocusBack: () => this.setState({ b3Focus: null, screen: 'plan' }),
      b3FocusDone: () => this.setState({ b3Focus: null }),
      // First-time tour: three short tips the first time the 3D body appears.
      b3TourOn: is3D && !s.b3TourDone && !s.b3Focus,
      b3TourTips: [T('Drag sideways to spin the body all the way around.'), T('Pinch, or scroll with a mouse, to zoom in on a small area.'), T('Tap exactly where it hurts. A blue marker shows your spot.')].map((text) => ({ text })),
      b3TourHead: T('Quick tips'),
      b3TourCount: T('Quick tips'),
      b3TourNextText: T('Got it'),
      b3TourNext: () => this.setState({ b3TourDone: true }),
      b3TourSkip: () => this.setState({ b3TourDone: true }), b3TourSkipText: T('Skip')
    };
  }

  // Launch readiness: consent, subscriptions, feedback, notifications and medical sources.
  launchVals(s, accent) {
    const T = (en) => tr(en, s.lang);
    const tick = (on) => ({ bd: on ? accent : 'var(--muted)', bg: on ? accent : 'var(--card)', tk: on ? 1 : 0 });
    return {
      termsOk: s.termsOk, analyticsOk: s.analyticsOk, marketingOk: s.marketingOk,
      // Teal tick boxes, drawn the same on every phone.
      tbTerms: tick(s.termsOk), tbStats: tick(s.analyticsOk), tbMail: tick(s.marketingOk), tbDev: tick(s.fbDevice),
      toggleTerms: () => this.setState({ termsOk: !s.termsOk }),
      toggleAnalytics: () => this.setState({ analyticsOk: !s.analyticsOk }),
      toggleMarketing: () => this.setState({ marketingOk: !s.marketingOk }),
      openTerms: () => this.flash(T('Opens painmap.ca/terms (demo)')),
      openPrivacy: () => this.flash(T('Opens painmap.ca/privacy (demo)')),
      restorePurchases: () => this.flash(T('Checking the App Store for past purchases… (demo)')),
      manageSub: () => this.flash(T('Opens your App Store subscriptions (demo)')),
      fbClosed: !s.fbOpen, fbIsOpen: !!s.fbOpen,
      fbLabel: s.fbOpen === 'bug' ? T('What went wrong?') : T('What would make PainMap better?'),
      fbPlaceholder: s.fbOpen === 'bug' ? T('What you tapped, and what happened') : T('Your idea'),
      fbText: s.fbText, fbDevice: s.fbDevice,
      setFbText: (e) => this.setState({ fbText: e.target.value }),
      toggleFbDevice: () => this.setState({ fbDevice: !s.fbDevice }),
      openBug: () => this.setState({ fbOpen: 'bug', fbText: '' }),
      openIdea: () => this.setState({ fbOpen: 'idea', fbText: '' }),
      closeFeedback: () => this.setState({ fbOpen: null, fbText: '' }),
      sendFeedback: () => { if (!s.fbText.trim()) { this.flash(T('Write a few words first')); return; } this.setState({ fbOpen: null, fbText: '' }); this.flash(T('Thanks! We read every message.')); },
      notifAsk: s.notifAsk,
      allowNotif: () => { this.setState({ notifAsk: false, notifAllowed: true, reminderOn: true }); this.flash(T('Reminders on. Your phone will ask once to allow notifications.')); },
      skipNotif: () => this.setState({ notifAsk: false }),
      onSources: s.screen === 'sources',
      openSources: () => this.setState({ screen: 'sources', sourcesFrom: s.screen }),
      sourcesBack: () => this.setState({ screen: s.sourcesFrom || 'settings' }),
      sources: SOURCES.map((x) => ({ topic: T(x[0]), title: x[1], who: x[2], use: T(x[3]) }))
    };
  }

  reportVals(s, region, layer) {
    const T = (en) => tr(en, s.lang);
    const sideWord = (v) => T(v === 'back' ? 'Back' : 'Front');
    const current = region && s.confirmed ? [{ label: region.label, layer: layer.name, view: s.view, x: s.spot ? s.spot.x : region.x, y: s.spot ? s.spot.y : region.y }] : [];
    const spots = s.savedSpots.concat(current);
    const pick = (opts, id) => (opts.find((o) => o[0] === id) || [null, null])[1];
    const a = s.answers;
    const list = (ids, opts) => ids.map((id) => T(pick(opts, id))).join(', ');
    const own = s.diary.slice(-6).reverse();
    const tx = s.treatments.slice(-6).reverse();
    const causes = region ? this.conditions(region, layer).slice(0, 3) : [];
    const front = spots.filter((p) => p.view !== 'back');
    return {
      onReport: s.screen === 'report',
      reportBack: () => this.setState({ screen: s.reportFrom || 'diary' }),
      rpDate: new Date().toLocaleDateString(s.lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' }),
      rpArt: drawing('skin', 'front', '0 0 200 400', BODY_COLOR.skin),
      rpPins: front.map((p) => ({ n: spots.indexOf(p) + 1, left: r2(p.x * 0.48 - 8), top: r2(p.y * 0.48 - 8) })),
      rpSpots: spots.map((p) => ({ label: T(p.label), layer: T(p.layer), view: sideWord(p.view) })),
      rpNoSpots: spots.length === 0,
      rpAnswers: [
        [T('Pain now'), a.pain + ' / 10'],
        [T('Feels like'), s.feels.map((id) => T((FEELS.find((f) => f.id === id) || {}).label || '')).join(', ') || T('Not answered')],
        [T('Started'), a.onset ? T(pick(ONSET, a.onset)) : T('Not answered')],
        [T('How long'), a.duration ? T(pick(DURATION, a.duration)) : T('Not answered')],
        [T('Worse with'), a.worse.length ? list(a.worse, WORSE) : T('Not answered')],
        [T('Other symptoms'), a.symptoms.length ? list(a.symptoms, SYMPTOMS) : T('None')],
        [T('Recovery plan check-ins'), Object.keys(s.planChecks || {}).map((k) => (s.planChecks[k] || []).slice(-1)[0]).filter(Boolean).map((c) => c.date + ': ' + T(c.v === 'better' ? 'Better' : c.v === 'worse' ? 'Worse' : 'About the same')).join(' · ') || T('Not answered')]
      ].map((q) => ({ k: q[0], v: q[1] })),
      rpCauses: causes.map((c) => ({ name: c.name, match: c.matchLabel })),
      rpNoCauses: causes.length === 0,
      rpDiary: own.map((e) => ({ date: e.date, spot: T(e.spot), pain: e.pain + '/10' })),
      rpNoDiary: own.length === 0,
      rpTx: tx.map((t) => ({ date: t.date, what: T(t.what), helped: T((HELPED.find((h) => h[0] === t.helped) || [0, ''])[1]) })),
      rpNoTx: tx.length === 0,
      rpNotes: s.reportNotes,
      setRpNotes: (e) => this.setState({ reportNotes: e.target.value.slice(0, 500) }),
      rpShareAct: () => this.flash(T('PDF created. In the real app this opens the share sheet (demo).'))
    };
  }

  // Diary, recovery plan and Premium screens.
  extraVals(s, accent, region, layer, chip) {
    const go = (screen) => this.setState({ screen });
    const paywall = () => this.setState({ screen: 'premium', paywallFrom: s.screen === 'premium' ? s.paywallFrom : s.screen });
    const entries = sampleDiary(s).concat(s.diary);
    // Monthly summary across every spot: average, best and worst days, and the treatment that helped most.
    const monthVals = (() => {
      const nowMon = new Date().toLocaleDateString('en-US', { month: 'short' });
      let mon = nowMon, inMonth = entries.filter((e) => (e.date || '').split(' ')[0] === mon);
      if (!inMonth.length && entries.length) { mon = (entries[entries.length - 1].date || '').split(' ')[0]; inMonth = entries.filter((e) => (e.date || '').split(' ')[0] === mon); }
      if (!inMonth.length) return { mnShow: false };
      const avgP = Math.round(inMonth.reduce((a, e) => a + e.pain, 0) / inMonth.length * 10) / 10;
      const best = inMonth.reduce((a, e) => (e.pain < a.pain ? e : a)), worst = inMonth.reduce((a, e) => (e.pain > a.pain ? e : a));
      const helped = {};
      sampleTx(s).concat(s.treatments).filter((t) => (t.date || '').split(' ')[0] === mon && t.helped === 'yes').forEach((t) => { helped[t.what] = (helped[t.what] || 0) + 1; });
      const topTx = Object.keys(helped).sort((a, b) => helped[b] - helped[a])[0];
      const half = Math.ceil(inMonth.length / 2), early = inMonth.slice(0, half), late = inMonth.slice(half);
      const mean = (xs) => xs.reduce((a, e) => a + e.pain, 0) / Math.max(1, xs.length);
      const drift = late.length ? Math.round((mean(late) - mean(early)) * 10) / 10 : 0;
      const monthName = new Date(mon + ' 1, 2026').toLocaleDateString(s.lang === 'fr' ? 'fr-CA' : 'en-CA', { month: 'long' });
      return {
        mnShow: true,
        mnH: tr('Your month', s.lang) + ': ' + monthName,
        mnStats: [
          { k: tr('Average pain', s.lang), v: avgP + '/10' },
          { k: tr('Check-ins', s.lang), v: String(inMonth.length) },
          { k: tr('Best day', s.lang), v: best.date + ' · ' + best.pain + '/10' },
          { k: tr('Worst day', s.lang), v: worst.date + ' · ' + worst.pain + '/10' }
        ],
        mnTrend: drift < 0 ? tr('Pain eased by ', s.lang) + -drift + tr(' points over the month.', s.lang) : drift > 0 ? tr('Pain rose by ', s.lang) + drift + tr(' points over the month. Consider seeing a clinician.', s.lang) : tr('Pain held steady over the month.', s.lang),
        mnHelped: topTx ? tr('Helped most:', s.lang) + ' ' + tr(topTx, s.lang) + ' (' + helped[topTx] + '×)' : tr('Log treatments to see what helps most.', s.lang),
        mnGood: drift < 0
      };
    })();
    const dyKey = (e) => e.sample ? 's' + e._si : 'u' + s.diary.indexOf(e);
    const dyToggle = (list, v) => (list.indexOf(v) >= 0 ? list.filter((x) => x !== v) : list.concat([v]));
    const spots = entries.map((e) => e.spot).filter((v, i, a) => a.indexOf(v) === i);
    const latest = s.diary.length ? s.diary[s.diary.length - 1].spot : spots[0];
    const dSpot = spots.indexOf(s.diarySpot) >= 0 ? s.diarySpot : latest;
    const series = entries.filter((e) => e.spot === dSpot);
    const W = 318, H = 150, padL = 26, padR = 14, padT = 14, padB = 26;
    const px = (i) => padL + (series.length > 1 ? i * (W - padL - padR) / (series.length - 1) : (W - padL - padR) / 2);
    const py = (v) => padT + (10 - v) / 10 * (H - padT - padB);
    const linePath = series.map((e, i) => (i ? 'L' : 'M') + r2(px(i)) + ' ' + r2(py(e.pain))).join(' ');
    const sel = s.diaryPoint != null && s.diaryPoint < series.length ? s.diaryPoint : series.length - 1;
    const first = series[0], last = series[series.length - 1];
    const change = series.length > 1 ? last.pain - first.pain : 0;
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    // Dates and times for check-ins: a real calendar day (ISO) is kept next to the short label the chart shows.
    const pad2 = (n) => String(n).padStart(2, '0');
    const isoOf = (d) => d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
    const isoToday = isoOf(new Date());
    const fmtDay = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const nowHM = () => { const d = new Date(); return pad2(d.getHours()) + ':' + pad2(d.getMinutes()); };
    const fmtTime = (hm) => { if (!hm) return ''; const p = hm.split(':').map(Number); return s.lang === 'fr' ? p[0] + ' h ' + pad2(p[1]) : ((p[0] % 12) || 12) + ':' + pad2(p[1]) + (p[0] < 12 ? ' AM' : ' PM'); };
    const ACTS = ['None', 'Walking', 'Running', 'Gym or weights', 'Sports', 'Cycling', 'Swimming', 'Yoga or stretching', 'Desk or computer work', 'Housework', 'Lifting or carrying', 'Driving', 'Gardening', 'Resting or sleeping', 'Other'];
    const actOf = (sel, other) => (sel === 'Other' ? (other || '').trim() : sel) || '';
    const actOpts = () => [{ value: '', label: tr('Choose an activity (optional)', s.lang) }].concat(ACTS.map((a) => ({ value: a, label: a === 'None' ? tr('No activity that day', s.lang) : tr(a, s.lang) })));
    // Older entries only have a label such as "Nov 9": read it as a day of this year so new entries still sort around them.
    const isoGuess = (e) => { if (e.iso) return e.iso; const d = new Date((e.date || '') + ' ' + new Date().getFullYear() + ' 12:00'); return isNaN(d) ? '' : isoOf(d); };
    const sortKey = (e) => { const d = isoGuess(e); return d ? d + ' ' + (e.time || '99:99') : ''; };
    const insertByDate = (list, entry) => { const k = sortKey(entry); const i = list.findIndex((x) => sortKey(x) && sortKey(x) > k); return i < 0 ? list.concat([entry]) : list.slice(0, i).concat([entry], list.slice(i)); };
    const ownCount = s.diary.length;
    const top = region ? (this.conditions(region, layer)[0] || null) : null;

    const addEntry = (entry, then) => {
      if (!s.premium && ownCount >= FREE_ENTRIES) { paywall(); return; }
      const prev = entries.filter((e) => e.spot === entry.spot).slice(-1)[0];
      const better = prev && entry.pain < prev.pain;
      this.setState(Object.assign({ diary: insertByDate(s.diary, entry), diarySpot: entry.spot, diaryPoint: null, showRate: better || s.showRate }, then || {}));
      this.flash(tr('Saved to your diary', s.lang));
    };
    const plan = s.plan ? PLANS[s.plan.type] : null;
    const planWeeks = plan ? plan.weeks.map((w, wi) => {
      const locked = wi > 0 && !s.premium;
      return {
        title: tr('Week', s.lang) + ' ' + (wi + 1) + ': ' + tr(w[0], s.lang), locked, open: !locked, unlock: paywall, unlockText: tr('Unlock this week with Premium', s.lang), premiumText: 'Premium',
        exercises: w[1].map((x, xi) => {
          const key = s.plan.type + wi + '-' + xi, done = !!s.planDone[key];
          // A swapped exercise replaces the plan's one: its own name, dose, instructions and demo.
          const lib = s.planSwap[key] ? EX_LIB.find((e) => e.id === s.planSwap[key]) : null;
          const cur = lib ? { name: lib.name, dose: lib.dose, how: lib.how } : x;
          const group = PLAN_GROUP[x.name], swapOpen = !!s.swapOpen[key];
          const kind = lib ? lib.move : demoKind(x.name), open = !!s.demoOpen[key];
          // Timed doses ("5 × 45 sec", "10 min") get a countdown with a beep at the end of each set.
          const secM = /(\d+)\s*sec/.exec(cur.dose), minM = /(\d+)\s*min/.exec(cur.dose), setsM = /^(\d+)\s*×/.exec(cur.dose);
          const secs = secM ? +secM[1] : minM && !/–/.test(cur.dose) ? +minM[1] * 60 : 0, sets = setsM ? +setsM[1] : 1;
          const tm = s.exTimer && s.exTimer.key === key ? s.exTimer : null;
          const mmss = (n) => Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');
          const pickSwap = (id) => {
            const swaps = Object.assign({}, s.planSwap);
            if (id) swaps[key] = id; else delete swaps[key];
            this.setState({ planSwap: swaps, swapOpen: Object.assign({}, s.swapOpen, { [key]: false }), demoOpen: Object.assign({}, s.demoOpen, { [key]: true }) });
            this.flash(tr('Exercise swapped', s.lang));
          };
          const opt = (id, name, dose, on) => ({ name, dose, pressed: on ? 'true' : 'false', bg: on ? 'var(--tealsoft)' : 'var(--soft2)', border: on ? '2px solid var(--tealtext)' : '1px solid var(--line)', pick: () => pickSwap(id) });
          const firstArea = EX_AREA_FIRST[s.plan.type] || 'legs';
          const swapGroups = group && swapOpen ? [{ head: tr('In your plan', s.lang), items: [opt(null, x.name, x.dose, !lib)] }].concat(
            EX_AREAS.slice().sort((p, q) => (q[0] === firstArea) - (p[0] === firstArea)).map((ar) => ({
              head: tr(ar[1], s.lang),
              items: EX_LIB.filter((e) => e.area === ar[0] && e.groups.indexOf(group) >= 0).map((e) => opt(e.id, e.name, e.dose, lib && lib.id === e.id))
            })).filter((g) => g.items.length)) : [];
          return Object.assign({}, cur, {
            canSwap: !!group, swapOpen, swapGroups, swapped: !!lib,
            swapText: tr('Swap exercise', s.lang), swapBg: swapOpen ? 'var(--tealsoft)' : 'var(--card)',
            swapHint: tr('Pick any exercise that does the same job. Each one has a demo.', s.lang),
            swapFromLbl: tr('Swapped from', s.lang), swapFromName: x.name,
            toggleSwap: () => this.setState({ swapOpen: Object.assign({}, s.swapOpen, { [key]: !swapOpen }) }),
            hasDemo: kind !== 'none', demoOpen: open, demoText: tr(open ? 'Hide demo' : 'Show demo', s.lang),
            // Motion off (Settings) shows the exercise's main position as a still picture.
            demo: open && kind !== 'none' ? buildDemo(kind, !s.reduceMotion) : { props: [], parts: [] },
            toggleDemo: () => this.setState({ demoOpen: Object.assign({}, s.demoOpen, { [key]: !open }) }),
            done: done ? 'true' : 'false', mark: done ? '#2E7D4F' : 'var(--card)', markBorder: done ? '#2E7D4F' : 'var(--line)', rowBg: done ? '#DDF3E4' : 'var(--soft2)', rowBorder: done ? '#2E7D4F' : '#ECE4D8',
            toggle: () => this.setState({ planDone: Object.assign({}, s.planDone, { [key]: !done }) }),
            hasTimer: secs > 0, timerOn: !!tm, timerOff: !tm,
            timerLabel: tr('Start timer', s.lang) + ' · ' + mmss(secs),
            timerStart: () => this.startTimer(key, secs, sets),
            timerLeft: tm ? mmss(tm.left) : '', timerSet: tm ? tr('Set', s.lang) + ' ' + tm.set + ' / ' + tm.sets : '',
            timerPct: tm ? Math.round((1 - tm.left / tm.secs) * 100) : 0,
            timerPauseText: tm && tm.paused ? tr('Resume', s.lang) : tr('Pause', s.lang),
            timerPause: () => this.setState({ exTimer: Object.assign({}, s.exTimer, { paused: !s.exTimer.paused }) }),
            timerStopText: tr('Stop', s.lang), timerStop: () => this.stopTimer()
          });
        })
      };
    }) : [];
    const doneCount = planWeeks.length ? planWeeks[0].exercises.concat(s.premium ? planWeeks[1].exercises.concat(planWeeks[2].exercises) : []).filter((x) => x.done === 'true').length : 0;
    const tab = (on) => ({ bg: on ? 'var(--tealsoft)' : 'transparent', fg: on ? 'var(--tealtext)' : 'var(--muted)', pressed: on ? 'true' : 'false' });
    const tf = tab(s.screen === 'find' || s.screen === 'body360'), te = tab(s.screen === 'explore'), td = tab(s.screen === 'diary');

    return {
      hScrollRef: this.hScrollRef,
      // Waitlist sign-up page.
      wlOn: !!WAITLIST_URL,
      onWaitlist: s.screen === 'waitlist',
      openWaitlist: () => this.setState({ screen: 'waitlist', wlFrom: s.screen === 'waitlist' ? s.wlFrom : s.screen, wl: Object.assign({}, s.wl, { status: s.wl.status === 'sent' ? 'sent' : '' }) }),
      wlBack: () => this.setState({ screen: s.wlFrom || 'find' }),
      wlShort: tr('Join waitlist', s.lang), wlEarly: tr('Early access', s.lang),
      wlTitle: tr('Join the waitlist', s.lang), wlIntro: tr('Be first to try PainMap when it launches in Canada.', s.lang),
      wlCardH: tr('Want PainMap when it launches?', s.lang), wlCardP: tr('Join the waitlist to hear first and help test new versions.', s.lang),
      wlNameL: tr('Your first name', s.lang), wlEmailL: tr('Your email', s.lang), wlProvL: tr('Where do you live?', s.lang), wlChoose: tr('Choose your province', s.lang),
      wlPainL: tr('Where does it hurt? (optional)', s.lang), wlPainPh: tr('For example: lower back after work', s.lang),
      wlTestL: tr('Yes, I’d like to try new versions early', s.lang), wlConsentL: tr('Yes, you can email me about PainMap (required)', s.lang),
      wlPrivacy: tr('We only use your details to email you about PainMap. Unsubscribe any time.', s.lang),
      wlName: s.wl.name, wlEmail: s.wl.email, wlProv: s.wl.province, wlPain: s.wl.pain,
      wlProvs: WL_PROVS.map((q) => ({ id: q[0], label: s.lang === 'fr' ? q[2] : q[1] })),
      wlSetName: (e) => this.setState({ wl: Object.assign({}, this.state.wl, { name: e.target.value, status: '' }) }),
      wlSetEmail: (e) => this.setState({ wl: Object.assign({}, this.state.wl, { email: e.target.value, status: '' }) }),
      wlSetProv: (e) => this.setState({ wl: Object.assign({}, this.state.wl, { province: e.target.value, status: '' }) }),
      wlSetPain: (e) => this.setState({ wl: Object.assign({}, this.state.wl, { pain: e.target.value, status: '' }) }),
      wlTestOn: s.wl.test ? 'true' : 'false', wlTestBd: s.wl.test ? accent : 'var(--muted)', wlTestBg: s.wl.test ? accent : 'var(--card)', wlTestTk: s.wl.test ? 1 : 0,
      wlToggleTest: () => this.setState({ wl: Object.assign({}, s.wl, { test: !s.wl.test }) }),
      wlConsentOn: s.wl.consent ? 'true' : 'false', wlConsentBd: s.wl.consent ? accent : 'var(--muted)', wlConsentBg: s.wl.consent ? accent : 'var(--card)', wlConsentTk: s.wl.consent ? 1 : 0,
      wlToggleConsent: () => this.setState({ wl: Object.assign({}, s.wl, { consent: !s.wl.consent }) }),
      ...(() => {
        const w = s.wl, ok = !!w.name.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(w.email.trim()) && !!w.province && w.consent;
        const busy = w.status === 'sending', off = !ok || busy || !WAITLIST_URL;
        return {
          wlSent: w.status === 'sent', wlNotSent: w.status !== 'sent', wlErr: w.status === 'error',
          wlErrText: tr('Could not send. Check your connection and try again.', s.lang),
          wlOff: off, wlBtnBg: off ? 'var(--disabled)' : accent, wlBtnFg: off ? 'var(--muted)' : '#FFFFFF',
          wlBtnText: busy ? tr('Sending…', s.lang) : ok ? tr('Join the waitlist', s.lang) : tr('Fill in the form to join', s.lang),
          wlDoneH: tr('You’re on the list!', s.lang), wlDoneP: tr('We’ll email you when PainMap launches. Check your inbox for a welcome email.', s.lang), wlDoneBtn: tr('Back to PainMap', s.lang),
          // The sheet's script cannot answer a page on another site, so a send that reaches it counts as done.
          wlSubmit: () => {
            if (off) return;
            this.setState({ wl: Object.assign({}, w, { status: 'sending' }) });
            const body = new URLSearchParams({ name: w.name.trim(), email: w.email.trim(), province: w.province, pain: w.pain.trim(), test: w.test ? 'Yes' : 'No', consent: 'Yes', lang: s.lang, source: 'PainMap app', website: '' });
            let sent;
            try { sent = fetch(WAITLIST_URL, { method: 'POST', mode: 'no-cors', body }); } catch (err) { sent = Promise.reject(err); }
            sent.then(() => this.setState({ wl: Object.assign({}, WL_EMPTY, { status: 'sent' }) }), () => this.setState({ wl: Object.assign({}, this.state.wl, { status: 'error' }) }));
          }
        };
      })(),
      tabFind: tf, tabExplore: te, tabDiary: td, tabReport: tab(s.screen === 'report'), tabReportLabel: tr('Report', s.lang),
      // The doctor report has its own tab, so it is one tap from anywhere (Premium; free users see the paywall first).
      rrH: tr('Seeing a doctor or physio?', s.lang), rrP: tr('Bring a one-page report with your pain spots, answers, diary and what you have tried.', s.lang), rrBtn: tr('Open my doctor report', s.lang) + (s.premium ? '' : ' · Premium'),
      goReport: () => (s.premium ? this.setState({ screen: 'report', reportFrom: s.screen === 'report' ? s.reportFrom : s.screen }) : paywall()),
      goDiary: () => go('diary'),
      isPremium: s.premium, notPremium: !s.premium,
      openPaywall: paywall,
      premiumBadge: s.premium ? tr('Premium ✓', s.lang) : tr('Go Premium', s.lang),
      hasToast: !!s.toast, toast: s.toast,

      onDiary: s.screen === 'diary',
      diarySpots: spots.map((sp) => Object.assign(chip(sp === dSpot), { label: tr(sp, s.lang), pick: () => this.setState({ diarySpot: sp, diaryPoint: null }) })),
      diarySpot: dSpot || '',
      hasEntries: entries.length > 0, noEntries: entries.length === 0,
      showSamplesNote: !s.hideSamples,
      samplesBtn: tr(s.hideSamples ? 'Show examples' : 'Hide examples', s.lang),
      toggleSamples: () => this.setState({ hideSamples: !s.hideSamples, diarySpot: null, diaryPoint: null }),
      showRate: s.showRate,
      rateYes: () => { this.setState({ showRate: false }); this.flash(tr('Thanks! This opens the app store rating in the real app (demo).', s.lang)); },
      rateNo: () => this.setState({ showRate: false }),
      chartLine: linePath,
      chartPoints: series.map((e, i) => ({
        left: r2(px(i) - 12), top: r2(py(e.pain) - 12),
        dotBg: i === sel ? accent : 'var(--card)', dotRing: accent,
        label: e.date + ': pain ' + e.pain + ' out of 10',
        pressed: i === sel ? 'true' : 'false',
        pick: () => this.setState({ diaryPoint: i })
      })),
      chartXLabels: series.map((e, i) => ({ left: r2(px(i) - 20), text: e.date })),
      chartSel: series[sel] ? series[sel].date + ' · ' + series[sel].pain + '/10' + (series[sel].sample ? tr(' (sample)', s.lang) : '') : '',
      trendText: series.length < 2 ? tr('Check in again to see your trend.', s.lang) : change < 0 ? tr('Down ', s.lang) + -change + tr(' points since ', s.lang) + first.date + tr('. Keep going.', s.lang) : change > 0 ? tr('Up ', s.lang) + change + tr(' points since ', s.lang) + first.date + tr('. Consider seeing a clinician.', s.lang) : tr('No change since ', s.lang) + first.date + '.',
      trendGood: change < 0,
      entryList: entries.slice().reverse().map((e) => ({ date: e.date, timeText: fmtTime(e.time), hasTime: !!e.time, actText: e.activity ? tr('Activity', s.lang) + ': ' + (e.activity === 'None' ? tr('none that day', s.lang) : tr(e.activity, s.lang)) : '', hasAct: !!e.activity, spot: e.spot, pain: e.pain + '/10', cause: e.cause, layer: e.layer, sampleTag: e.sample ? tr('Sample', s.lang) : '', isSample: !!e.sample, tagsText: (e.tags || []).map((id) => tr((TRIGGERS.find((t) => t[0] === id) || [0, id])[1], s.lang)).join(' · '), hasTags: !!(e.tags && e.tags.length), note: e.note || '', hasNote: !!e.note,
        asking: s.diaryDelAsk === dyKey(e), notAsking: s.diaryDelAsk !== dyKey(e),
        delLabel: tr('Delete', s.lang) + ': ' + e.date + ', ' + tr(e.spot, s.lang) + ', ' + e.pain + '/10', askText: tr('Delete this entry?', s.lang), yesText: tr('Delete', s.lang), noText: tr('Keep', s.lang),
        ask: () => this.setState({ diaryDelAsk: dyKey(e), diaryEditKey: null }),
        keep: () => this.setState({ diaryDelAsk: null }),
        editing: s.diaryEditKey === dyKey(e), notEditing: s.diaryEditKey !== dyKey(e) && s.diaryDelAsk !== dyKey(e),
        editLabel: tr('Edit', s.lang) + ': ' + e.date + ', ' + tr(e.spot, s.lang) + ', ' + e.pain + '/10', editText: tr('Edit', s.lang), accent,
        edit: () => this.setState({ diaryEditKey: dyKey(e), diaryDelAsk: null, editPain: e.pain, editTags: (e.tags || []).slice(), editNote: e.note || '', editDate: isoGuess(e), editTime: e.time || '', editAct: !e.activity ? '' : ACTS.indexOf(e.activity) >= 0 ? e.activity : 'Other', editActOther: e.activity && ACTS.indexOf(e.activity) < 0 ? e.activity : '' }),
        edDateId: 'ed-date-' + dyKey(e), edTimeId: 'ed-time-' + dyKey(e), edActId: 'ed-act-' + dyKey(e), edDateLbl: tr('Date', s.lang), edTimeLbl: tr('Time', s.lang), edActLbl: tr('What were you doing?', s.lang), edOtherLbl: tr('Type the activity', s.lang),
        edDate: s.editDate, edMax: isoToday, edSetDate: (ev2) => { const v = ev2.target.value || ''; this.setState({ editDate: v > isoToday ? isoToday : v }); },
        edTime: s.editTime, edSetTime: (ev2) => this.setState({ editTime: ev2.target.value || '' }),
        edAct: s.editAct, edSetAct: (ev2) => this.setState({ editAct: ev2.target.value }), edActOpts: actOpts(), edActIsOther: s.editAct === 'Other',
        edActOther: s.editActOther, edSetActOther: (ev2) => this.setState({ editActOther: ev2.target.value.slice(0, 60) }),
        edHead: tr('Edit entry', s.lang) + ' · ' + e.date, edPainLbl: tr('Pain', s.lang), edPain: s.editPain,
        edWord: s.editPain <= 3 ? tr('Mild', s.lang) : s.editPain <= 6 ? tr('Moderate', s.lang) : tr('Severe', s.lang),
        edId: 'ed-pain-' + dyKey(e), edNoteId: 'ed-note-' + dyKey(e), edTagsLbl: tr('What was today like?', s.lang), edNoteLbl: tr('Note', s.lang),
        edSetPain: (ev2) => this.setState({ editPain: Math.max(0, Math.min(10, parseInt(ev2.target.value, 10) || 0)) }),
        edTags: TRIGGERS.filter((g) => g[0] !== 'period' || s.sex !== 'male').map((g) => Object.assign(chip(s.editTags.indexOf(g[0]) >= 0), { label: tr(g[1], s.lang), pick: () => this.setState({ editTags: dyToggle(s.editTags, g[0]) }) })),
        edNote: s.editNote, edSetNote: (ev2) => this.setState({ editNote: ev2.target.value.slice(0, 200) }),
        edSaveText: tr('Save changes', s.lang), edCancelText: tr('Cancel', s.lang),
        edCancel: () => this.setState({ diaryEditKey: null }),
        edSave: () => {
          const k = dyKey(e);
          const ch = { pain: s.editPain, tags: s.editTags.slice(), note: s.editNote.trim(), time: s.editTime, activity: actOf(s.editAct, s.editActOther) };
          if (s.editDate) { ch.iso = s.editDate; ch.date = fmtDay(s.editDate); }
          if (e.sample) { const m = Object.assign({}, s.diaryEdits || {}); m[e._si] = ch; this.setState({ diaryEdits: m, diaryEditKey: null, diaryPoint: null }); }
          else { const old = s.diary.find((x, i) => 'u' + i === k); this.setState({ diary: insertByDate(s.diary.filter((x, i) => 'u' + i !== k), Object.assign({}, old, ch)), diaryEditKey: null, diaryPoint: null }); }
          this.flash(tr('Entry updated', s.lang));
        },
        remove: () => {
          const k = dyKey(e);
          if (e.sample) this.setState({ diaryHidden: (s.diaryHidden || []).concat([e._si]), diaryDelAsk: null, diaryPoint: null });
          else this.setState({ diary: s.diary.filter((x, i) => 'u' + i !== k), diaryDelAsk: null, diaryPoint: null });
          this.flash(tr('Entry deleted', s.lang));
        } })),
      checkPain: s.checkPain,
      checkDateVal: s.checkDate || isoToday, checkMaxDate: isoToday,
      setCheckDate: (ev) => { const v = ev.target.value || ''; this.setState({ checkDate: v > isoToday ? isoToday : v }); },
      checkTimeVal: s.checkTime, setCheckTime: (ev) => this.setState({ checkTime: ev.target.value || '' }),
      checkActVal: s.checkAct, setCheckAct: (ev) => this.setState({ checkAct: ev.target.value }), checkActOpts: actOpts(),
      checkActOther: s.checkActOther, setCheckActOther: (ev) => this.setState({ checkActOther: ev.target.value.slice(0, 60) }), checkActIsOther: s.checkAct === 'Other',
      checkIsPast: !!(s.checkDate && s.checkDate !== isoToday),
      checkWhenQ: !s.checkDate || s.checkDate === isoToday ? tr('today?', s.lang) : tr('on', s.lang) + ' ' + fmtDay(s.checkDate) + '?',
      checkPastNote: s.checkDate && s.checkDate !== isoToday ? tr('Logging for a past day:', s.lang) + ' ' + fmtDay(s.checkDate) : '',
      checkTimeHint: !s.checkDate || s.checkDate === isoToday ? tr('Leave the time empty to use the current time.', s.lang) : tr('Add the time if you remember it.', s.lang),
      checkToday: () => this.setState({ checkDate: '' }),
      checkSaveText: s.checkDate && s.checkDate !== isoToday ? tr('Save check-in for', s.lang) + ' ' + fmtDay(s.checkDate) : tr('Save today’s check-in', s.lang),
      checkLbl: { when: tr('When', s.lang), date: tr('Date', s.lang), time: tr('Time', s.lang), act: tr('What were you doing?', s.lang), other: tr('Type the activity', s.lang), today: tr('Back to today', s.lang) },
      checkWord: s.checkPain <= 3 ? tr('Mild', s.lang) : s.checkPain <= 6 ? tr('Moderate', s.lang) : tr('Severe', s.lang),
      setCheckPain: (e) => this.setState({ checkPain: Math.max(0, Math.min(10, parseInt(e.target.value, 10) || 0)) }),
      // One-tap logging straight from the reminder notification (shown on its preview here).
      quickLog: Array.from({ length: 11 }, (_, n) => ({ n: String(n), label: tr('Log pain', s.lang) + ' ' + n + '/10', bg: n <= 3 ? '#DDF3E4' : n <= 6 ? '#FFF1D6' : '#FDE7E2', fg: n <= 3 ? '#14532D' : n <= 6 ? '#5A3A00' : '#7A1E10',
        log: () => addEntry({ date: today, spot: dSpot, layer: last ? last.layer : '', pain: n, cause: last ? last.cause : '', tags: [], note: '' }) })),
      quickLogNote: tr('In the real app these buttons sit on the notification itself, so you can log without opening PainMap.', s.lang),
      ...monthVals,
      checkIn: () => {
        const iso = s.checkDate && s.checkDate <= isoToday ? s.checkDate : isoToday;
        addEntry({ date: fmtDay(iso), iso, time: s.checkTime || (iso === isoToday ? nowHM() : ''), activity: actOf(s.checkAct, s.checkActOther), spot: dSpot, layer: last ? last.layer : '', pain: s.checkPain, cause: last ? last.cause : '', tags: s.checkTags, note: s.checkNote.trim() },
          { checkTags: [], checkNote: '', checkDate: '', checkTime: '', checkAct: '', checkActOther: '' });
      },
      freeLeft: Math.max(0, FREE_ENTRIES - ownCount),
      freeText: s.premium ? tr('Premium: unlimited check-ins', s.lang) : tr('Free plan: ', s.lang) + Math.max(0, FREE_ENTRIES - ownCount) + tr(' of ', s.lang) + FREE_ENTRIES + tr(' check-ins left', s.lang),
      doctorReport: () => (s.premium ? this.setState({ screen: 'report', reportFrom: s.screen }) : paywall()),
      openReport: () => (s.premium ? this.setState({ screen: 'report', reportFrom: s.screen }) : paywall()),
      reportSub: tr(s.premium ? 'Open your report' : 'One-page PDF · Premium', s.lang),
      planFromDiary: () => this.openPlan(last ? last.cause : 'General', '', dSpot),
      saveToDiary: () => {
        if (!region) return;
        addEntry({ date: today, spot: region.label, layer: layer.name, pain: s.answers.pain, cause: top ? top.name : '' }, { screen: 'diary' });
      },

      onPlan: s.screen === 'plan' && !!plan,
      planTitle: plan ? tr(plan.title, s.lang) : '',
      planFor: s.plan ? 'For ' + s.plan.cause + ' · ' + s.plan.spot : '',
      planWeeks,
      planProgress: doneCount + tr(' of ', s.lang) + (s.premium ? 9 : 3) + tr(' exercises done', s.lang),
      planBack: () => go(region ? 'results' : 'diary'),
      planSee3DText: tr('See the muscles this plan works', s.lang),
      planSee3D: () => this.setState({ screen: 'find', b3Layer: 'muscle', b3Pin: null, b3Focus: { keys: planMuscles(s.plan ? s.plan.spot : '', s.plan ? s.plan.type : 'general') } }),

      onPremium: s.screen === 'premium',
      perks: PREMIUM_PERKS.map((q) => ({ title: tr(q[0], s.lang), text: tr(q[1], s.lang) })),
      prices: PRICE_PLANS.map((q) => Object.assign(chip(s.priceSel === q[0]), {
        name: tr(q[1], s.lang), price: tr(q[2], s.lang), note: tr(q[3], s.lang), ring: s.priceSel === q[0] ? '2px solid ' + accent : '1px solid var(--line)', cardBg: s.priceSel === q[0] ? 'var(--tealsoft)' : 'var(--card)',
        pick: () => this.setState({ priceSel: q[0] })
      })),
      trialText: s.priceSel === 'yearly' ? tr('Start 7-day free trial', s.lang) : s.priceSel === 'monthly' ? tr('Subscribe monthly', s.lang) : tr('Buy lifetime access', s.lang),
      startPremium: () => { this.setState({ premium: true, screen: s.paywallFrom || 'find' }); this.flash(tr('Welcome to Premium', s.lang)); },
      closePaywall: () => go(s.paywallFrom || 'find'),
      restorePurchase: () => this.flash(tr('No previous purchase found (demo)', s.lang))
    };
  }

  region() {
    const all = REGIONS.front.concat(REGIONS.back);
    return all.find((r) => r.id === this.state.regionId) || null;
  }

  // Rank causes for this spot and depth using the answers, age and sex. Each keeps its reasons.
  conditions(region, layer) {
    const s = this.state, a = s.answers;
    const spec = (SPECIFIC[region.key] || {})[layer.id];
    let list = (spec || GENERIC[layer.id]).slice();
    const nervy = s.feels.indexOf('burn') >= 0 || s.feels.indexOf('tingle') >= 0 || a.symptoms.indexOf('numbness') >= 0;
    const nerve = NERVE[region.key] || NERVE_DEFAULT;
    if (nervy) list.unshift(nerve);
    list = list.concat(profileConditions(region.key, layer.id, s.age, s.sex));
    const seen = {};
    list = list.filter((x) => (seen[x.name] ? false : (seen[x.name] = true)));
    const picked = [a.onset, a.duration].concat(a.worse, a.symptoms, s.feels).filter(Boolean);
    const base = { common: 3, possible: 2, doctor: 1.8, info: 0.5 };
    const ranked = list.map((x, i) => {
      const text = x.name + ' ' + x.about;
      let score = base[x.tag] + (list.length - i) * 0.05;
      const why = [];
      RULES.forEach((r) => {
        if (picked.indexOf(r[0]) >= 0 && r[1].test(text)) { score += r[2]; if (r[3] && why.indexOf(r[3]) < 0) why.push(r[3]); }
      });
      profileBoost(x, s.age, s.sex).forEach((b) => { score += b[0]; if (b[1]) why.push(b[1]); });
      if (x === nerve && nervy) { score += 2; why.push('burning, tingling or numbness'); }
      if (a.pain >= 8 && x.tag === 'doctor') { score += 1; why.push('severe pain'); }
      return { x, score, why };
    }).sort((p, q) => q.score - p.score);
    return ranked.slice(0, 4).map((r) => {
      const t = TAGS[r.x.tag];
      const level = r.score >= 6.5 ? ['●●● Fits closely', 'var(--okbg)', 'var(--oktext)'] : r.score >= 4.5 ? ['●●○ Fits', 'var(--tealsoft2)', 'var(--tealtext)'] : ['●○○ Might fit', 'var(--soft)', 'var(--muted2)'];
      return Object.assign({}, r.x, {
        tagLabel: tr(t.label, s.lang), tagBg: t.bg, tagFg: t.fg, helpLabel: tr('What may help', s.lang), planLabel: tr('Start recovery plan →', s.lang),
        matchLabel: tr(level[0], s.lang), matchBg: level[1], matchFg: level[2],
        hasWhy: r.why.length > 0,
        openPlan: () => this.openPlan(r.x.name, layer.id, region.label),
        whyText: tr('Fits because: ', s.lang) + r.why.slice(0, 4).map((w) => tr(w, s.lang)).join(', ') + '.'
      });
    });
  }

  renderVals() {
    const out = this.renderValsRaw();
    return this.state.lang === 'fr' ? frMed(out) : out;
  }

  renderValsRaw() {
    const accent = this.props.accent ?? '#0F6B6E';
    const s = this.state;
    PROFILE = makeProfile(s.age, s.sex || 'unspecified');
    const layer = LAYERS[s.layerIndex];
    const region = this.region();
    const isFront = s.view === 'front';
    // The 2D map is for Explore only; Find is the 360° body.
    const onFind = false;
    const onExplore = s.screen === 'explore';
    const ex = EX.find((x) => x.id === s.exId);
    const zoom = s.spotZoom && onExplore ? { id: 'spot', name: 'Close-up', v: s.spotZoom } : ZOOMS.find((z) => z.id === s.zoom);
    const v = onExplore ? zoom.v : [0, 0, 200];
    const drawId = onExplore ? ex.id : layer.id;
    const vb = v[0] + ' ' + v[1] + ' ' + v[2] + ' ' + v[2] * 2;

    const setView = (view) => this.setState({ view, regionId: null, partKey: null, spot: null, spotZoom: null });

    // Nearest named area to a point on the body; null if the point is off the body.
    const nearest = (x, y) => {
      let best = null, bd = Infinity;
      regionsFor(s.view).forEach((r) => { const d = Math.hypot(r.x - x, r.y - y); if (d < bd) { bd = d; best = r; } });
      return bd <= 34 ? best : null;
    };
    // Draggable locator: move it over the body and everything updates live.
    const moveTo = (x, y, extra) => {
      const r = nearest(x, y);
      if (!r) return false;
      if (r.id !== this.state.regionId && typeof navigator !== 'undefined' && navigator.vibrate) { try { navigator.vibrate(8); } catch (err) { /* not supported */ } }
      this.setState(Object.assign({ spot: { x: r2(x), y: r2(y) }, regionId: r.id, partKey: null, confirmed: false, precise: null }, extra || {}));
      return true;
    };
    const fromEvent = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return [v[0] + (e.clientX - rect.left) / rect.width * v[2], v[1] + (e.clientY - rect.top) / rect.height * v[2] * 2];
    };
    // In Explore, a close-up opens around the spot once you let go.
    const closeUp = (x, y) => {
      const w = 64;
      return [r2(Math.min(200 - w, Math.max(0, x - w / 2))), r2(Math.min(400 - w * 2, Math.max(0, y - w))), w];
    };
    const dragStart = (e) => {
      if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
      this.dragging = true;
      const p = fromEvent(e);
      moveTo(p[0], p[1], { dragging: true, tutorialDone: true });
    };
    const dragMove = (e) => {
      if (!this.dragging) return;
      const p = fromEvent(e);
      moveTo(p[0], p[1]);
    };
    const dragEnd = () => {
      if (!this.dragging) return;
      this.dragging = false;
      this.setState({ dragging: false });
    };
    // Nothing is investigated until the person confirms the spot.
    const confirmSpot = () => {
      const sp = this.state.spot;
      if (!sp) return;
      this.setState(onExplore && !s.spotZoom ? { confirmed: true, focus: false, spotZoom: closeUp(sp.x, sp.y) } : { confirmed: true, focus: false });
    };
    const locKey = (e) => {
      const step = { ArrowUp: [0, -3], ArrowDown: [0, 3], ArrowLeft: [-3, 0], ArrowRight: [3, 0] }[e.key];
      const cur = s.spot || { x: 100, y: 150 };
      if (step) { e.preventDefault(); moveTo(cur.x + step[0], cur.y + step[1]); }
      else if (e.key === 'Enter' && s.spot) { e.preventDefault(); confirmSpot(); }
    };
    const spotPt = s.spot || (region ? wpt(PROFILE, region.x, region.y) : null);
    const sc = 200 / v[2];
    const loc = spotPt || { x: 100, y: 150 };
    const locPx = (loc.x - v[0]) * sc, locPy = (loc.y - v[1]) * sc;
    const lensVb = r2(loc.x - 14) + ' ' + r2(loc.y - 14) + ' 28 28';

    // What lies under the point at every depth.
    const stackLayers = onExplore ? EX : LAYERS;
    const stack = spotPt ? stackLayers.map((L, i) => {
      const names = partsNear(L.id, s.view, spotPt.x, spotPt.y);
      const on = onExplore ? L.id === s.exId : i === s.layerIndex;
      return {
        name: tr(L.name, s.lang), color: L.color,
        parts: names.length ? names.join(' · ') : 'Nothing named right here at this depth',
        pressed: on ? 'true' : 'false',
        bg: on ? 'var(--tealsoft)' : 'var(--bg)',
        border: on ? '2px solid ' + accent : '2px solid transparent',
        pick: () => this.setState(onExplore ? { exId: L.id, partKey: null } : { layerIndex: i })
      };
    }) : [];

    const areaOptions = [{ id: '', label: tr('Choose an area…', s.lang) }].concat(REGIONS[s.view].slice().sort((a, b) => a.y - b.y).map((r) => ({ id: r.id, label: tr(r.label, s.lang) })));
    const pickArea = (e) => {
      const r = REGIONS[s.view].find((q) => q.id === e.target.value);
      const w = r ? wpt(PROFILE, r.x, r.y) : null;
      this.setState(r ? Object.assign({ regionId: r.id, spot: w, confirmed: true, tutorialDone: true }, onExplore ? { spotZoom: closeUp(w.x, w.y) } : {}) : { regionId: null, spot: null, confirmed: false });
    };

    const exList = labelsFor(ex.id, s.view);
    const labelsAll = onExplore && s.showLabels && !s.focus ? layoutLabels(labelsFor(ex.id, s.view), v, zoom.id === 'full', s.view, s.partKey, accent, s.allLabels) : [];
    const labels = onExplore && s.showLabels && !s.focus
      ? layoutLabels(exList, v, zoom.id === 'full', s.view, s.partKey, accent, s.allLabels).map((lb) => Object.assign(lb, { pick: () => this.setState({ partKey: lb.pressed === 'true' ? null : lb.key }) }))
      : [];
    const partIdx = s.partKey && s.partKey.indexOf(s.view) === 0 ? parseInt(s.partKey.slice(s.view.length), 10) : -1;
    const part = partIdx >= 0 ? exList[partIdx] : null;

    const chip = (on) => ({ pressed: on ? 'true' : 'false', bg: on ? 'var(--chipon)' : 'var(--card)', fg: on ? 'var(--chipontext)' : 'var(--ink)', border: on ? '1px solid var(--chipon)' : '1px solid var(--line)' });
    const exLayers = EX.map((x) => Object.assign(chip(x.id === s.exId), { name: tr(x.name, s.lang), color: x.color, pick: () => this.setState({ exId: x.id, partKey: null }) }));
    const zooms = ZOOMS.map((z) => Object.assign(chip(z.id === s.zoom && !s.spotZoom), { name: tr(z.name, s.lang), pick: () => this.setState({ zoom: z.id, partKey: null, spotZoom: null }) }));

    const layers = LAYERS.map((l, i) => {
      const on = i === s.layerIndex;
      const peeled = i < s.layerIndex;
      return {
        short: tr(l.short, s.lang),
        color: l.color,
        pressed: on ? 'true' : 'false',
        bg: on ? 'var(--tealsoft)' : 'var(--bg)',
        border: on ? '2px solid ' + accent : '2px solid transparent',
        swatchBorder: peeled ? '2px dashed #7A8696' : '1px solid rgba(18,32,47,0.25)',
        opacity: peeled ? 0.35 : 1,
        pick: () => this.setState({ layerIndex: i })
      };
    });

    const feels = FEELS.map((f) => {
      const on = s.feels.indexOf(f.id) >= 0;
      return {
        label: tr(f.label, s.lang),
        pressed: on ? 'true' : 'false',
        bg: on ? 'var(--chipon)' : 'var(--card)',
        fg: on ? 'var(--chipontext)' : 'var(--ink)',
        border: on ? '1px solid var(--chipon)' : '1px solid var(--line)',
        pick: () => this.setState({ feels: on ? s.feels.filter((x) => x !== f.id) : s.feels.concat([f.id]) })
      };
    });

    const spot = spotPt ? partsNear(layer.id, s.view, spotPt.x, spotPt.y) : [];
    const ev = this.extraVals(s, accent, region, layer, chip);
    let flags = region ? (FLAGS[region.key] || FLAGS_DEFAULT).slice() : FLAGS_DEFAULT.slice();
    if (region && s.sex === 'female' && s.age >= 12 && s.age <= 50 && (region.key === 'abdomen' || region.key === 'hip')) flags.unshift('You are or might be pregnant and have one-sided belly pain or bleeding: get urgent care');
    if (region && s.sex === 'male' && (region.key === 'hip' || region.key === 'abdomen')) flags.unshift('Sudden, severe pain in a testicle: go to emergency care now');
    // An organ tapped on the 3D body puts its own warning first.
    const oFlag = s.precise && s.precise.id === s.regionId ? organFlag(s.precise.organ) : null;
    if (oFlag) flags.unshift(oFlag);

    // Follow-up questions.
    const ans = s.answers;
    const setAns = (patch) => this.setState({ answers: Object.assign({}, ans, patch) });
    const single = (opts, key) => opts.map((o) => Object.assign(chip(ans[key] === o[0]), { label: tr(o[1], s.lang), pick: () => setAns({ [key]: ans[key] === o[0] ? null : o[0] }) }));
    const multi = (opts, key) => opts.map((o) => {
      const on = ans[key].indexOf(o[0]) >= 0;
      return Object.assign(chip(on), { label: tr(o[1], s.lang), pick: () => setAns({ [key]: on ? ans[key].filter((v) => v !== o[0]) : ans[key].concat([o[0]]) }) });
    });
    const hasSym = (id) => ans.symptoms.indexOf(id) >= 0;
    const deep = layer.id === 'organ' || (region && ['chest', 'abdomen', 'head'].indexOf(region.key) >= 0);
    let urgentText = '';
    if (hasSym('fever') && (deep || hasSym('redness'))) urgentText = tr('Fever with this kind of pain can mean an infection. Please see a doctor today.', s.lang);
    else if (hasSym('numbness') && hasSym('weakness')) urgentText = tr('Numbness together with weakness should be checked by a doctor soon.', s.lang);
    else if (ans.onset === 'injury' && ans.worse.indexOf('weight') >= 0 && hasSym('swelling')) urgentText = tr('An injury with swelling that hurts to put weight on may be a fracture or tear. Get it checked.', s.lang);
    else if (layer.id === 'organ' && (ans.pain >= 7 || hasSym('fever')) && ans.onset !== 'injury') urgentText = tr('Strong or feverish pain deep in the body should be checked today. If it is sudden and severe, go to emergency or call 911.', s.lang);
    else if (ans.pain >= 8) urgentText = tr('Your pain is severe. If it does not ease with rest and pain relief, see a doctor today.', s.lang);
    const pick1 = (opts, id) => (opts.find((o) => o[0] === id) || [null, null])[1];
    const answerChips = [{ label: tr('Pain ', s.lang) + ans.pain + '/10' }]
      .concat([pick1(ONSET, ans.onset), pick1(DURATION, ans.duration)].filter(Boolean).map((t) => ({ label: tr(t, s.lang) })))
      .concat(ans.symptoms.map((id) => ({ label: tr(pick1(SYMPTOMS, id), s.lang) })));

    return {
      accent,
      coral: this.props.coral ?? '#E8735A',
      onBody: onFind || onExplore,
      t: Object.keys(UI).reduce((o, k) => { o[k] = tr(UI[k], s.lang); return o; }, {}),
      onProfile: s.screen === 'profile',
      age: s.age,
      ageText: s.age + ' ' + tr(s.age === 1 ? 'year' : 'years', s.lang),
      ageGroupText: { child: tr('Child', s.lang), teen: tr('Teen', s.lang), adult: tr('Adult', s.lang), older: tr('Older adult', s.lang) }[PROFILE.group],
      setAge: (e) => this.setState({ age: Math.max(1, Math.min(100, parseInt(e.target.value, 10) || 1)) }),
      sexes: [['female', 'Female'], ['male', 'Male'], ['unspecified', 'Prefer not to say']].map((q) => Object.assign(chip(s.sex === q[0]), { label: tr(q[1], s.lang), pick: () => this.setState({ sex: q[0] }) })),
      noSex: !s.sex || (s.age < 16 && !s.guardianOk),
      setupBg: s.sex && (s.age >= 16 || s.guardianOk) ? accent : 'var(--disabled)',
      setupFg: s.sex && (s.age >= 16 || s.guardianOk) ? '#FFFFFF' : 'var(--muted)',
      setupText: !s.sex ? tr('Choose a gender to continue', s.lang) : s.age < 16 && !s.guardianOk ? tr('A parent or guardian must agree first', s.lang) : tr(s.introDone ? 'Show my body map' : 'Start finding my pain', s.lang),
      finishSetup: () => { if (s.sex && (s.age >= 16 || s.guardianOk)) this.setState(Object.assign({ profileSet: true }, s.introDone ? { screen: s.afterProfile || 'find', spot: null, regionId: null, confirmed: false, spotZoom: null } : { screen: 'find', introDone: true, spot: null, regionId: null, confirmed: false, spotZoom: null })); },
      inIntro: !s.introDone,
      editProfile: () => this.setState({ screen: 'profile', afterProfile: onExplore ? 'explore' : 'find' }),
      profileText: s.age + ' · ' + ({ female: tr('Female', s.lang), male: tr('Male', s.lang), unspecified: tr('Not specified', s.lang) }[s.sex] || tr('Not set', s.lang)),
      previewArt: drawing('skin', 'front', '0 0 200 400', BODY_COLOR.skin),
      onFind,
      onExplore,
      onResults: s.screen === 'results' && !!region,
      pageTitle: onExplore ? tr('Explore the body', s.lang) : tr('Where does it hurt?', s.lang),
      frontPressed: isFront ? 'true' : 'false',
      backPressed: isFront ? 'false' : 'true',
      frontBg: isFront ? 'var(--card)' : 'transparent',
      frontFg: isFront ? 'var(--ink)' : 'var(--muted)',
      backBg: isFront ? 'transparent' : 'var(--card)',
      backFg: isFront ? 'var(--muted)' : 'var(--ink)',
      open360: () => this.setState({ screen: 'body360', from360: s.screen === 'explore' ? 'explore' : 'find' }),
      back360: () => this.setState({ screen: s.from360 || 'find' }),
      // A spot chosen on the 360° body opens the normal flow for that area, keeping its exact name.
      pick360: (info) => {
        const r = REGIONS.front.concat(REGIONS.back).find((q) => q.id === info.id);
        if (!r) return;
        const view = REGIONS.front.indexOf(r) >= 0 ? 'front' : 'back';
        this.setState({ screen: 'find', view, regionId: r.id, spot: { x: r.x, y: r.y }, confirmed: true, focus: false, partKey: null, spotZoom: null, precise: info, tutorialDone: true });
      },
      showFront: () => setView('front'),
      showBack: () => setView('back'),
      viewLabel: '',
      sideLeft: isFront ? 'R' : 'L',
      sideRight: isFront ? 'L' : 'R',
      stageChip: tr(onExplore ? ex.title : CHART_TITLE[layer.id], s.lang) + ' · ' + tr(isFront ? 'Anterior view' : 'Posterior view', s.lang) + (onExplore && zoom.id !== 'full' ? ' · ' + tr(zoom.name, s.lang) : ''),
      stageCaption: onExplore ? (!s.showLabels ? tr('Labels hidden', s.lang) : zoom.id === 'full' ? tr('Drag the locator over the body, then let go to zoom in', s.lang) : tr('Tap a label, or keep dragging to explore', s.lang)) : (region ? tr('Showing', s.lang) + ' ' + tr(layer.name, s.lang) : tr('Drag the locator over the body to find your spot', s.lang)),
      labelsPressed: s.showLabels ? 'true' : 'false',
      labelsBg: s.showLabels ? 'var(--stageink)' : 'transparent',
      labelsFg: s.showLabels ? 'var(--stage)' : 'var(--stageink)',
      labelsText: s.showLabels ? tr('Labels on', s.lang) : tr('Labels off', s.lang),
      toggleLabels: () => this.setState({ showLabels: !s.showLabels, partKey: null }),
      art: drawing(drawId, s.view, vb, BODY_COLOR[drawId]),
      ...this.reportVals(s, region, layer),
      ...this.launchVals(s, accent),
      ...this.body360Vals(s, accent),
      ...this.legalVals(s, accent),
      ...this.careVals(s, accent),
      dragStart,
      showMoreLabels: !!(labelsAll.hidden || s.allLabels) && zoom.id !== 'full',
      moreLabelsText: tr(s.allLabels ? 'Show fewer labels' : 'Show all labels', s.lang) + (labelsAll.hidden ? ' (+' + labelsAll.hidden + ')' : ''),
      toggleAllLabels: () => this.setState({ allLabels: !s.allLabels }),
      dragMove,
      dragEnd,
      locKey,
      hasPin: !!(spotPt && s.confirmed),
      hasPinUI: !!(spotPt && s.confirmed) && !s.focus,
      chrome: !s.focus,
      focus: s.focus,
      findUI: onFind && !s.focus,
      exploreUI: onExplore && !s.focus,
      stageH: s.focus ? 740 : 450,
      bodyScale: s.focus ? 1.72 : 1,
      detailsOpen: s.focus ? 'false' : 'true',
      toggleFocus: () => this.setState({ focus: !s.focus }),
      focusText: s.focus ? tr('Show details', s.lang) : tr('Hide details · body only', s.lang),
      focusIcon: s.focus ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
      focusFrontFg: isFront ? 'var(--ink)' : 'var(--stageink)',
      focusBackFg: isFront ? 'var(--stageink)' : 'var(--ink)',
      showConfirm: !!(s.spot && !s.confirmed && !s.dragging),
      confirmSpot,
      confirmLeft: r2(Math.min(120, Math.max(-80, locPx - 80))),
      confirmTop: r2(locPy > 330 ? locPy - 66 : locPy + 24),
      locLeft: r2(locPx - 17),
      locTop: r2(locPy - 17),
      showDragHint: !s.spot && !region && !s.tutorialDone && onFind,
      tutLeft: r2(Math.min(30, Math.max(-60, locPx - 85))),
      dismissTutorial: () => this.setState({ tutorialDone: true }),
      hintLeft: r2(locPx - 60),
      hintTop: r2(locPy + 22),
      showLens: !!(s.dragging && s.spot),
      lensLeft: r2(Math.min(150, Math.max(-50, locPx - 52))),
      lensTop: r2(locPy > 160 ? locPy - 160 : locPy + 30),
      lensArt: s.dragging && s.spot ? drawing(drawId, s.view, lensVb, BODY_COLOR[drawId]) : [],
      spotLabel: region ? (s.precise && s.precise.id === region.id ? (s.lang === 'fr' ? s.precise.fr : s.precise.en) : tr(region.label, s.lang)) : '',
      clearSpot: () => this.setState({ spot: null, regionId: null, spotZoom: null, confirmed: false }),
      stack,
      areaOptions,
      areaValue: s.regionId || '',
      pickArea,
      labels,
      exLayers,
      zooms,
      ex: Object.assign({}, ex, { title: tr(ex.title, s.lang), blurb: tr(ex.blurb, s.lang), stats: ex.stats.map((q) => ({ big: q.big, text: tr(q.text, s.lang) })) }),
      partCount: exList.length,
      part: part || { n: '', p: '' },
      partMeta: tr(ex.name, s.lang) + ' · ' + tr(isFront ? 'Front' : 'Back', s.lang),
      hasPart: !!part,
      noPart: !part,
      clearPart: () => this.setState({ partKey: null }),
      layer: Object.assign({}, layer, { name: tr(layer.name, s.lang), hint: tr(layer.hint, s.lang) }),
      layerNumber: s.layerIndex + 1,
      layers,
      feels,
      hasSpot: spot.length > 0,
      spotText: spot.join(' · '),
      chosenFeels: FEELS.filter((f) => s.feels.indexOf(f.id) >= 0).map((f) => ({ label: tr(f.label, s.lang) })),
      noRegion: !(region && s.confirmed),
      ctaBg: region && s.confirmed ? accent : 'var(--disabled)',
      ctaFg: region && s.confirmed ? '#FFFFFF' : 'var(--muted)',
      ctaText: region && s.confirmed ? tr('See what it could be', s.lang) : (region ? tr('Choose the spot first', s.lang) : tr('Drag to find your spot', s.lang)),
      goResults: () => { if (region && s.confirmed) this.setState({ screen: 'questions' }); },
      goFind: () => this.setState({ screen: 'find' }),
      goExplore: () => this.setState({ screen: 'explore' }),
      findPressed: onFind ? 'true' : 'false',
      explorePressed: onExplore ? 'true' : 'false',
      findTabBg: onFind ? '#E3F1F0' : 'transparent',
      findTabFg: onFind ? '#0B5557' : '#55626B',
      exploreTabBg: onExplore ? '#E3F1F0' : 'transparent',
      exploreTabFg: onExplore ? '#0B5557' : '#55626B',
      startOver: () => this.setState({ screen: 'find', regionId: null, spot: null, spotZoom: null, confirmed: false, layerIndex: 2, feels: [], answers: { pain: 5, onset: null, duration: null, worse: [], symptoms: [] } }),
      regionLabel: region ? tr(region.label, s.lang) : '',
      regionFact: region ? REGION_FACTS[region.key] : '',
      conditions: region ? this.conditions(region, layer) : [],
      redFlags: flags.map((text) => ({ text })),
      onQuestions: s.screen === 'questions' && !!region,
      painVal: ans.pain,
      painWord: ans.pain <= 3 ? tr('Mild', s.lang) : ans.pain <= 6 ? tr('Moderate', s.lang) : ans.pain <= 8 ? tr('Severe', s.lang) : tr('Very severe', s.lang),
      setPain: (e) => setAns({ pain: Math.max(0, Math.min(10, parseInt(e.target.value, 10) || 0)) }),
      onsetChips: single(ONSET, 'onset'),
      durationChips: single(DURATION, 'duration'),
      worseChips: multi(WORSE, 'worse'),
      symptomChips: multi(SYMPTOMS, 'symptoms'),
      // Results need a gender (it changes the likely causes); under-16s also need a guardian's agreement.
      showCauses: () => { if (s.sex && (s.age >= 16 || s.guardianOk)) this.setState({ screen: 'results', profileSet: true }); },
      causesOff: !s.sex || (s.age < 16 && !s.guardianOk),
      causesBg: s.sex && (s.age >= 16 || s.guardianOk) ? accent : 'var(--disabled)',
      causesFg: s.sex && (s.age >= 16 || s.guardianOk) ? '#FFFFFF' : 'var(--muted)',
      causesText: !s.sex ? tr('Choose a gender to see results', s.lang) : s.age < 16 && !s.guardianOk ? tr('A parent or guardian must agree first', s.lang) : tr('See what it could be', s.lang),
      goAnswers: () => this.setState({ screen: 'questions' }),
      answerChips,
      hasUrgent: urgentText !== '',
      urgentText,
      questionsTitle: region ? tr(region.label, s.lang) + ' · ' + tr(layer.name, s.lang) : '',
      ...ev,
      ...this.moreVals(s, accent, region, layer, chip, ev),
      ...this.diaryPlusVals(s, accent, ev)
    };
  }
}

return Component;
};
