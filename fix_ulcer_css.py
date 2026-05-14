import re

css = """
:root {
  /* Emerald & Deep Slate Aesthetic */
  --primary:   #064E3B; 
  --primary-dk:#022C22;
  --primary-lt:#ECFDF5;
  --accent:    #059669;
  --accent2:   #34D399;
  --gold:      #B8860B;
  --gold-lt:   #FDF8ED;
  --s1:        #064E3B;
  --s2:        #065F46;
  --s3:        #047857;
  --s4:        #059669;
  --s5:        #10B981;
  --s1-lt:     #ECFDF5;
  --s2-lt:     #F0FDF4;
  --s3-lt:     #F0FDFA;
  --s4-lt:     #F5F5F4;
  --s5-lt:     #E7E5E4;
  --sidebar-w: 300px;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Source Serif 4',Georgia,serif;background:var(--bg);color:var(--text);font-size:16px;line-height:1.75;}

/* SLIDE-OVER SIDEBAR */
#sidebar {
  position: fixed; top: 0; left: 0; width: var(--sidebar-w); height: 100vh;
  background: var(--primary-dk); color: #ECFDF5;
  display: flex; flex-direction: column;
  z-index: 1400; overflow: hidden;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 24px rgba(0,0,0,0.3);
}
body.sidebar-open #sidebar { transform: translateX(0); }
#sidebar-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(2, 44, 34, 0.6); backdrop-filter: blur(2px);
  z-index: 1350; opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
body.sidebar-open #sidebar-overlay { opacity: 1; pointer-events: auto; }

#sidebar-header { padding: 20px 20px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); flex-shrink: 0; }
#sidebar-header .logo { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; color: var(--accent2); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
#sidebar-header .sub { font-size: 10.5px; color: rgba(236, 253, 245, 0.6); letter-spacing: 0.04em; }

#sidebar-search { padding: 10px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); flex-shrink: 0; }
#sidebar-search input { width: 100%; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; color: #ECFDF5; padding: 6px 10px; font-size: 12px; font-family: 'Source Serif 4', serif; outline: none; transition: border-color 0.2s; }
#sidebar-search input::placeholder { color: rgba(236, 253, 245, 0.4); }
#sidebar-search input:focus { border-color: var(--accent2); }

#sidebar-nav { flex: 1; overflow-y: auto; padding: 8px 0 20px; }
#sidebar-nav::-webkit-scrollbar { width: 4px; }
#sidebar-nav::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 2px; }

.vol-label { font-size: 9.5px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent2); padding: 14px 18px 4px; }
.nav-item { display: block; padding: 8px 18px 8px 22px; font-size: 12.5px; color: rgba(236, 253, 245, 0.75); text-decoration: none; border-left: 2px solid transparent; transition: all 0.15s; line-height: 1.4; }
.nav-item:hover { color: #fff; background: rgba(255, 255, 255, 0.03); border-left-color: rgba(52, 211, 153, 0.5); }
.nav-item.active { color: #fff; background: rgba(255, 255, 255, 0.06); border-left-color: var(--accent2); font-weight: 600; }
.nav-item .num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(236, 253, 245, 0.4); margin-right: 6px; }

/* MAIN */
#main { margin-left: 0; min-height: 100vh; }

/* HERO */
#hero { background: linear-gradient(135deg, var(--primary-dk) 0%, #064E3B 60%, #022C22 100%); color: white; padding: 90px 72px 60px; position: relative; overflow: hidden; }
#hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 380px; height: 380px; background: radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%); pointer-events: none; }
#hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent2), var(--gold), transparent); }
#hero .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: var(--accent2); text-transform: uppercase; margin-bottom: 14px; }
#hero h1 { font-family: 'Playfair Display', serif; font-size: 46px; font-weight: 700; line-height: 1.15; margin-bottom: 10px; color: #fff; }
#hero .subtitle { font-size: 18px; color: rgba(255, 255, 255, 0.7); font-style: italic; margin-bottom: 28px; }
#hero .badges { display: flex; gap: 10px; flex-wrap: wrap; }
#hero .badge { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px; padding: 4px 14px; font-size: 12px; color: rgba(255, 255, 255, 0.9); font-family: 'JetBrains Mono', monospace; }

/* CONTENT */
.content-wrap { max-width: 900px; margin: 0 auto; padding: 0 48px 80px; }

/* SECTION HEADER */
.sec-header { margin-top: 60px; margin-bottom: 8px; padding: 28px 36px; border-radius: 10px; display: flex; align-items: center; gap: 20px; }
.sec-header.s1 { background: linear-gradient(135deg, #064E3B08, #064E3B15); border-left: 4px solid var(--s1); }
.sec-header.s2 { background: linear-gradient(135deg, #065F4608, #065F4615); border-left: 4px solid var(--s2); }
.sec-header.s3 { background: linear-gradient(135deg, #04785708, #04785715); border-left: 4px solid var(--s3); }
.sec-header.s4 { background: linear-gradient(135deg, #05966908, #05966915); border-left: 4px solid var(--s4); }
.sec-header.s5 { background: linear-gradient(135deg, #10B98108, #10B98115); border-left: 4px solid var(--s5); }

.sec-badge { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; padding: 4px 12px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
.s1 .sec-badge { background: var(--s1); color: white; }
.s2 .sec-badge { background: var(--s2); color: white; }
.s3 .sec-badge { background: var(--s3); color: white; }
.s4 .sec-badge { background: var(--s4); color: white; }
.s5 .sec-badge { background: var(--s5); color: white; }
.sec-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; }
.s1 .sec-title { color: var(--s1); }
.s2 .sec-title { color: var(--s2); }
.s3 .sec-title { color: var(--s3); }
.s4 .sec-title { color: var(--s4); }
.s5 .sec-title { color: var(--s5); }

/* TOPIC */
.topic { margin-top: 48px; padding-top: 48px; border-top: 1px solid var(--border); }
.topic:first-of-type { border-top: none; }
.topic-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
.topic-num { font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 4px; margin-top: 4px; flex-shrink: 0; }
.s1 .topic-num { background: var(--s1-lt); color: var(--s1); }
.s2 .topic-num { background: var(--s2-lt); color: var(--s2); }
.s3 .topic-num { background: var(--s3-lt); color: var(--s3); }
.s4 .topic-num { background: var(--s4-lt); color: var(--s4); }
.s5 .topic-num { background: var(--s5-lt); color: var(--s5); }
.topic h2 { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; line-height: 1.2; }
.s1 .topic h2 { color: var(--s1); }
.s2 .topic h2 { color: var(--s2); }
.s3 .topic h2 { color: var(--s3); }
.s4 .topic h2 { color: var(--s4); }
.s5 .topic h2 { color: var(--s5); }
.topic h3 { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 600; color: var(--muted); margin: 26px 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }
.topic h4 { font-size: 13px; font-weight: 600; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; margin: 18px 0 8px; font-family: 'JetBrains Mono', monospace; }
.topic p { margin-bottom: 12px; color: var(--text); }
.topic ul, .topic ol { margin: 8px 0 14px 20px; color: var(--text); }
.topic li { margin-bottom: 6px; line-height: 1.65; }
.topic li::marker { color: var(--accent2); }
.topic strong { color: var(--text); font-weight: 600; }

/* TABLES */
.table-wrap { overflow-x: auto; margin: 16px 0 20px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04); }
table { width: 100%; border-collapse: collapse; font-size: 13.5px; background: white; }
thead tr { background: var(--s1); }
thead th { color: white; padding: 10px 14px; text-align: left; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13px; }
tbody tr:nth-child(even) { background: var(--bg2); }
tbody tr:hover { background: var(--s1-lt); transition: background 0.15s; }
tbody td { padding: 9px 14px; border-bottom: 1px solid var(--border); vertical-align: top; line-height: 1.5; }
.s2-tbl thead tr { background: var(--s2); }
.s3-tbl thead tr { background: var(--s3); }
.s4-tbl thead tr { background: var(--s4); }
.s5-tbl thead tr { background: var(--s5); }

/* CALLOUTS */
.callout { margin: 18px 0; padding: 14px 18px; border-radius: 0 8px 8px 0; border-left: 4px solid; font-size: 14px; line-height: 1.65; }
.callout .label { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; display: block; margin-bottom: 4px; }
.callout.pearl { background: var(--amber-lt); border-color: var(--amber); }
.callout.pearl .label { color: var(--amber); }
.callout.warn { background: var(--red-lt); border-color: var(--red); }
.callout.warn .label { color: var(--red); }
.callout.clin { background: var(--s1-lt); border-color: var(--s1); }
.callout.clin .label { color: var(--s1); }
.callout.exam { background: var(--blue-lt); border-color: var(--blue); }
.callout.exam .label { color: var(--blue); }

/* RESEARCH INSIGHT CARD */
.research-insight { margin: 32px 0; background: linear-gradient(145deg, #ffffff, #f0fdf4); border: 1px solid rgba(6, 78, 59, 0.15); border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(6, 78, 59, 0.05); position: relative; overflow: hidden; }
.research-insight::before { content: 'LIVE RESEARCH'; position: absolute; top: 12px; right: -30px; background: var(--gold); color: white; font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 700; padding: 4px 40px; transform: rotate(45deg); }
.research-insight h4 { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px; text-transform: none; }
.research-insight .source-tag { font-family: 'JetBrains Mono', monospace; font-size: 10px; background: var(--primary-lt); color: var(--primary); padding: 2px 8px; border-radius: 4px; }
.research-insight p { font-size: 14.5px; line-height: 1.6; color: var(--text); margin-bottom: 16px; }
.research-insight ul { list-style: none; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.research-insight li { font-size: 13px; padding-left: 20px; position: relative; }
.research-insight li::before { content: '→'; position: absolute; left: 0; color: var(--gold); font-weight: bold; }
[data-theme="dark"] .research-insight { background: linear-gradient(145deg, #022c22, #064e3b); border-color: rgba(255, 255, 255, 0.1); }

/* DIAGRAM PLACEHOLDERS */
.diagram-wrap { background: white; border: 1px solid var(--border); border-radius: 8px; padding: 18px; margin: 20px 0; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03); text-align: center; }
.diagram-title { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--s1); margin-bottom: 12px; text-align: left; }

/* RAPID REFERENCE */
.rapid-ref { background: var(--primary-dk); color: var(--primary-lt); border-radius: 10px; padding: 28px 32px; margin: 30px 0; }
.rapid-ref h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--accent2); margin-bottom: 16px; }
.rapid-ref table { font-size: 12.5px; background: transparent; }
.rapid-ref thead tr { background: rgba(52, 211, 153, 0.15); }
.rapid-ref thead th { color: var(--accent2); padding: 8px 12px; font-size: 11px; }
.rapid-ref tbody tr:nth-child(even) { background: rgba(255, 255, 255, 0.03); }
.rapid-ref tbody tr:hover { background: rgba(255, 255, 255, 0.06); }
.rapid-ref tbody td { color: var(--primary-lt); padding: 7px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
.rapid-ref tbody td strong { color: var(--gold); }

/* PROGRESS */
#progress-bar { position: fixed; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent2), var(--gold)); transform-origin: left; transform: scaleX(0); transition: transform 0.1s; z-index: 1500; }

/* TOP BTN */
#top-btn { position: fixed; bottom: 28px; right: 28px; background: var(--primary); color: white; border: none; border-radius: 50%; width: 44px; height: 44px; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.2s; opacity: 0; pointer-events: none; z-index: 1000;}
#top-btn.show { opacity: 1; pointer-events: auto; }
#top-btn:hover { background: var(--accent2); transform: translateY(-2px); }

/* ANIMATION */
.topic { animation: fadeUp 0.4s ease both; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

@media(max-width:900px) {
  .content-wrap { padding: 0 20px 60px; }
  #hero { padding: 72px 20px 40px; }
  #hero h1 { font-size: 30px; }
}
@media print {
  .mono-sidebar-toggle, #sidebar-overlay, #sidebar, #top-btn, #progress-bar, #mainNav { display: none !important; }
  .topic { page-break-inside: avoid; }
  .sec-header { page-break-before: always; }
}
"""

with open('notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html', 'r') as f:
    content = f.read()

# Replace the style block
content = re.sub(r'<style>.*?</style>', f'<style>\n{css}\n</style>', content, flags=re.DOTALL)

with open('notes/Surgical Operative Approach/Repair of Perforated Peptic Ulcer Monograph.html', 'w') as f:
    f.write(content)

