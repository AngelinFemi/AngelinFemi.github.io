/* ===== EDIT HERE ===== */
// Contact form: messages are delivered straight to this inbox through FormSubmit (free, no account needed).
// One-time step: after the FIRST message is sent from the live site, FormSubmit emails an activation link to this address. Click it once and every later message arrives automatically.
const CONTACT_EMAIL = "angelinfemic@gmail.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;

const HIGHLIGHTS=[["🎓","M.E. CSE Student","2026–2028"],["📘","B.E. CSE Graduate","CGPA 8.36/10"],["💼","FinSurge Experience","March–October 2026"],["🤖","AI and Fintech Project Coordination","PMO phase"],["🔬","GeoPlix Research","ICICEA 2026"],["🏆","Coding Competition","Second Prize, 2025"]];

const INFO=[["Current Role","M.E. CSE Student"],["Core Interests","AI, Fintech, Software Engineering"],["Professional Exposure","QA and PMO"],["Research Interest","AI and Geospatial Optimization"]];

const SKILLS=[["💻","Programming",["Java","Python","SQL"]],["🌐","Web Development",["HTML5","CSS3"]],["👁️","Computer Vision",["OpenCV"]],["✅","Software Quality",["Software Testing","Test Documentation"]],["📋","Project Management",["Agile","Scrum","Taiga"]],["🧩","Other Technical Interests",["AR/VR","Git","GitHub","GitLab"]]];

const CI={"AI & Research":["🧠",282],"Computer Vision":["👁️",250],"Web Development":["🌐",305],"Python Applications":["🐍",228]};

const CATS=["All Projects","AI & Research","Computer Vision","Web Development","Python Applications"];

// Add a project by appending an object. Optional: github, live, liveLabel.
const PROJECTS=[

{title:"GeoPlix",full:"GeoPlix — Smart Surplus Food Redistribution System using AI and Geospatial Optimization",cat:"AI & Research",tags:["AI","Geospatial Optimization","Research"],
 desc:"Research exploring how AI and geospatial optimization can help connect surplus food with nearby organizations or communities that can use it.",
 sections:[["Problem Statement","Edible surplus food can go unused while communities nearby may need food support. A key challenge is identifying suitable redistribution options efficiently."],["Proposed Approach","GeoPlix explores combining AI-supported decision-making with location-aware analysis to help prioritize potential redistribution routes and destinations."],["Core Concepts","AI-assisted decision support; geospatial proximity and location analysis; surplus-to-need matching as a research direction."],["Potential Impact","A more structured way to evaluate redistribution options, reduce avoidable food waste, and support timely delivery. These are intended benefits, not measured results."],["Research and Conference Details","Presented at the International Conference on Intelligent Computing and Explainable AI (ICICEA 2026), organized by A.V.C. College of Engineering, Mayiladuthurai, on 8 April 2026."]]},

{title:"Touchless Digital Sketching with Hand Gesture Recognition",cat:"Computer Vision",tags:["Python","OpenCV"],
 desc:"Built a touchless sketching application using computer vision to interpret hand gestures for drawing, erasing, and color selection.",
 sections:[["Problem Statement","Using a mouse or touch screen is not always convenient for hands-free interaction."],["Approach","A Python and OpenCV-based computer-vision interface interprets hand gestures as drawing controls."],["Key Features","Touchless freehand drawing; gesture-based erasing; color selection; on-screen sketch interaction."],["Technology Stack","Python · OpenCV · Computer Vision"],["Next Improvements","Add a short screen recording, gesture mapping details, and repository link when available."]]},

{title:"OrangeKart — E-commerce Website",cat:"Web Development",tags:["HTML5","CSS3","GitHub","Netlify"],
 desc:"Designed and developed a responsive e-commerce website with product listings and a shopping cart interface.",live:"https://orangekart.netlify.app/",liveLabel:"Visit Live Website",
 sections:[["Problem Statement","Online shoppers need a simple way to browse products and review a potential purchase."],["Solution","OrangeKart is a responsive e-commerce website concept with product listings and a shopping-cart interface."],["Key Features","Product browsing; product listing layout; cart-focused shopping flow; responsive page styling."],["Technology Stack","HTML5 · CSS3"],["Live Demo","The deployed website is linked on this card. Add repository details or screenshots if you want to show implementation evidence."]]},

{title:"Sketch App using Tkinter Canvas",cat:"Python Applications",tags:["Python","Tkinter"],
 desc:"Developed a GUI-based sketching application with freehand drawing, color selection, canvas clearing, and saving functionality.",
 sections:[["Problem Statement","A lightweight desktop sketch tool should let users draw and manage a canvas without a complex design suite."],["Solution","A Python Tkinter application that provides a simple graphical drawing workspace."],["Key Features","Freehand drawing; color selection; canvas clearing; saving the sketch."],["Technology Stack","Python · Tkinter · Canvas widget"]]},

{title:"Daily Sales Report",cat:"Web Development",tags:["Web Application","Sales Tracking"],
 desc:"Contributed to a web application for adding, tracking, and visualizing daily business sales.",
 sections:[["Problem Statement","Daily sales information needs to be recorded consistently and reviewed in a clear format."],["Contribution","Contributed to a web application for entering, tracking, and visualizing daily business sales."],["Key Workflow","Enter daily sales information; review records; view sales data in a more accessible format."],["Project Note","This entry describes the contribution at a high level; specific modules and technologies can be added when confirmed."]]}

];

/* ===== APP ===== */
const $=(s,e=document)=>e.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const NAV=[["index.html","Home","home"],["about.html","About","about"],["experience.html","Experience","experience"],["projects.html","Projects","projects"],["skills.html","Skills","skills"],["research.html","Research","research"],["contact.html","Contact","contact"]];

const cur0=document.body.dataset.page;

$("#hdr").innerHTML=`<header><div class="wrap"><nav aria-label="Primary"><a class="logo" href="index.html">Angelin Femi C</a><ul id="links">${NAV.map(n=>`<li><a href="${n[0]}"${n[2]===cur0?' class="on" aria-current="page"':""}>${n[1]}</a></li>`).join("")}</ul><a class="btn p s cta-n" href="contact.html">Let’s Connect</a><button id="menu" aria-label="Open menu" aria-expanded="false" aria-controls="links">☰</button></nav></div></header>`;

$("#ftr").innerHTML=`<footer><div class="wrap"><div><b style="font-family:var(--h);color:var(--tx)">Angelin Femi C</b><p>Designed and developed with curiosity and code.</p><p>© ${new Date().getFullYear()}</p></div><div class="fn">${NAV.slice(1).map(n=>`<a href="${n[0]}">${n[1]}</a>`).join("")}<a href="https://github.com/AngelinFemi" target="_blank" rel="noopener">GitHub</a><a href="https://www.linkedin.com/in/angelinfemic/" target="_blank" rel="noopener">LinkedIn</a><a href="#" id="top">Back to top ↑</a></div></div></footer>`;

$("#menu").onclick=()=>{const o=$("#links").classList.toggle("open");$("#menu").setAttribute("aria-expanded",o)};

$("#top").onclick=e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"})};

if($("#hl"))$("#hl").innerHTML=HIGHLIGHTS.map((h,i)=>`<div class="card fl hl reveal"><div class="ico" aria-hidden="true">${h[0]}</div><div><b>${h[1]}</b><small>${h[2]}</small></div><span class="hl-index">0${i+1}</span></div>`).join("");

if($("#info"))$("#info").innerHTML=INFO.map(i=>`<div class="card fl"><small class="mu">${i[0]}</small><p><b>${i[1]}</b></p></div>`).join("");

if($("#sk"))$("#sk").innerHTML=SKILLS.map(s=>`<div class="card fl"><div class="ico" aria-hidden="true" style="margin-bottom:.8rem">${s[0]}</div><h2 style="font-size:1.05rem;margin-bottom:.6rem">${s[1]}</h2>${s[2].map(t=>`<span class="tag k">${t}</span>`).join("")}</div>`).join("");

if($("#plist")){
 let cur=CATS[0];const dlg=$("#dlg");

 const draw=()=>{
  $("#filters").innerHTML=CATS.map(c=>`<button aria-pressed="${c===cur}" data-c="${esc(c)}">${esc(c)}</button>`).join("");

  const list=PROJECTS.map((p,i)=>[p,i]).filter(([p])=>cur===CATS[0]||p.cat===cur);

  $("#plist").innerHTML=list.map(([p,i])=>`<article class="card fl pc"><div class="thumb" aria-hidden="true" style="--hue:${(CI[p.cat]||[0,280])[1]}"><span class="th-ico">${(CI[p.cat]||["✦"])[0]}</span><span class="th-n">0${i+1}</span></div><div><span class="tag k" style="align-self:flex-start">${esc(p.cat)}</span><h2>${esc(p.title)}</h2><p>${esc(p.desc)}</p><div>${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><div class="row"><button class="btn s p" data-i="${i}">View Details</button>${p.live?`<a class="btn s" href="${p.live}" target="_blank" rel="noopener">${esc(p.liveLabel||"Live demo")}</a>`:""}${p.github?`<a class="btn s" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`:""}</div></div></article>`).join("")+(cur===CATS[0]?`<div class="card empty"><p>Additional projects will appear here.</p></div>`:"");
 };

 draw();

 $("#filters").onclick=e=>{const c=e.target.closest("button");if(c){cur=c.dataset.c;draw()}};

 $("#plist").onclick=e=>{const b=e.target.closest("button[data-i]");if(!b)return;const p=PROJECTS[b.dataset.i];

  $("#dbody").innerHTML=`<span class="tag k">${esc(p.cat)}</span><h2 id="dt">${esc(p.full||p.title)}</h2><p>${esc(p.desc)}</p>${p.sections.map(s=>`<h3>${esc(s[0])}</h3><p>${esc(s[1])}</p>`).join("")}<div style="margin-top:1rem">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>${p.live?`<p style="margin-top:1rem"><a class="btn p" href="${p.live}" target="_blank" rel="noopener">${esc(p.liveLabel)}</a></p>`:""}`;

  dlg.showModal()
 };

 $("#close").onclick=()=>dlg.close();

 dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
}

if($("#form")){const form=$("#form"),st=$("#status");

 form.addEventListener("submit",async e=>{
  e.preventDefault();st.textContent="";let ok=true;

  form.querySelectorAll("input:not([name=_honey]),textarea").forEach(f=>{const er=f.parentElement.querySelector(".err");let m="";
   if(!f.value.trim())m="This field is required.";else if(f.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value))m="Enter a valid email address.";
   er.textContent=m;if(m)ok=false});

  if(!ok)return;

  const btn=form.querySelector("button[type=submit]"),label=btn.textContent;

  const fallback=()=>{const d=new FormData(form);const href="mailto:"+CONTACT_EMAIL+"?subject="+encodeURIComponent(d.get("subject")||"")+"&body="+encodeURIComponent((d.get("message")||"")+"\n\n— "+(d.get("name")||"")+" ("+(d.get("email")||"")+")");return '<a href="'+href+'">Open it in your email app instead</a>.'};

  if(location.protocol==="file:"){st.innerHTML="Sending works once the site is live (GitHub Pages or any web host), not from a file opened on your computer. "+fallback();return}

  btn.disabled=true;btn.textContent="Sending…";st.className="";st.textContent="";

  try{
   const d=new FormData(form);
   const payload={name:d.get("name"),email:d.get("email"),message:d.get("message"),_subject:"Portfolio message: "+d.get("subject"),_template:"table",_captcha:"false",_honey:d.get("_honey")||""};

   const r=await fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(payload)});

   const j=await r.json().catch(()=>({}));

   if(r.ok&&(j.success===true||j.success==="true")){st.className="ok";st.textContent="Message sent — thank you! I’ll get back to you soon.";form.reset()}
   else{st.className="bad";st.innerHTML=(j.message?esc(j.message)+" ":"The message could not be sent. ")+fallback()}
  }catch(_){st.className="bad";st.innerHTML="Network error — please try again. "+fallback()}
  finally{btn.disabled=false;btn.textContent=label}
 })
}

/* ===== Motion system: navigation wipe, reveal-on-scroll and button press feedback ===== */

document.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')||a.target==='_blank'||a.hasAttribute('download'))return;const dest=new URL(a.href,location.href);if(dest.origin!==location.origin||dest.pathname===location.pathname)return;a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=dest.href,320)})});

const revealTargets=document.querySelectorAll('main section,main .card,main .role,main .ph,main .pj');

revealTargets.forEach((el,i)=>{if(!el.classList.contains('reveal'))el.classList.add('reveal');el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`});

if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));

document.querySelectorAll('.btn, .filters button, #menu, .x').forEach(el=>el.addEventListener('pointerdown',()=>{el.classList.remove('pressed');void el.offsetWidth;el.classList.add('pressed');setTimeout(()=>el.classList.remove('pressed'),180)}));

/* ===== Plexus network background: glowing nodes drift slowly and are joined by faint indigo lines ===== */
(()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas=document.createElement('canvas');canvas.id='plexus-canvas';canvas.setAttribute('aria-hidden','true');
  document.body.prepend(canvas);
  const ctx=canvas.getContext('2d');if(!ctx)return;
  let w=0,h=0,dpr=1,nodes=[],dust=[],blobs=[],prev=0;
  const mouse={x:0,y:0,tx:0,ty:0};
  const rand=(a,b)=>a+Math.random()*(b-a);
  const sprite=(size,stops)=>{const c=document.createElement('canvas');c.width=c.height=size;const g=c.getContext('2d'),r=g.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);stops.forEach(s=>r.addColorStop(s[0],s[1]));g.fillStyle=r;g.fillRect(0,0,size,size);return c};
  const NODE=sprite(64,[[0,'rgba(255,240,255,1)'],[.16,'rgba(226,140,255,1)'],[.3,'rgba(176,70,255,.6)'],[.55,'rgba(118,52,255,.12)'],[1,'rgba(100,40,255,0)']]);
  const DUST=sprite(32,[[0,'rgba(210,140,255,.95)'],[.35,'rgba(150,80,255,.35)'],[1,'rgba(110,50,255,0)']]);
  const BLOB=sprite(128,[[0,'rgba(120,64,255,.5)'],[.65,'rgba(100,50,255,.22)'],[1,'rgba(90,40,255,0)']]);

  function build(){
    const n=Math.max(34,Math.min(105,Math.round(w*h/15500)));
    nodes=Array.from({length:n},()=>{const z=rand(.4,1),big=Math.random()<.14;
      return{x:rand(-60,w+60),y:rand(-60,h+60),vx:rand(-1,1)*15*z,vy:rand(-1,1)*15*z,z,big,r:big?rand(2.6,3.8):rand(.9,2.1)*(.6+z*.5),ph:rand(0,6.283),tw:rand(.6,1.5),px:0,py:0}});
    dust=Array.from({length:Math.round(n*.9)},()=>({x:rand(0,w),y:rand(0,h),vx:rand(-4,4),vy:rand(-4,4),z:rand(.3,1),r:rand(1.5,3.2),ph:rand(0,6.283)}));
    blobs=Array.from({length:7},()=>({x:rand(0,w),y:rand(0,h),vx:rand(-3,3),vy:rand(-3,3),r:rand(40,95),a:rand(.04,.09)}));
  }

  function resize(){
    const ow=w;dpr=Math.min(window.devicePixelRatio||1,1.5);w=window.innerWidth;h=window.innerHeight;
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    if(!nodes.length||Math.abs(w-ow)>80)build();
    if(reduce)render(0,0);
  }

  const wrap=(o,max,m)=>{if(o.x<-m)o.x=max.w+m;else if(o.x>max.w+m)o.x=-m;if(o.y<-m)o.y=max.h+m;else if(o.y>max.h+m)o.y=-m};

  function render(t,dt){
    mouse.x+=(mouse.tx-mouse.x)*.04;mouse.y+=(mouse.ty-mouse.y)*.04;
    const box={w,h};ctx.clearRect(0,0,w,h);
    for(const o of blobs){o.x+=o.vx*dt;o.y+=o.vy*dt;wrap(o,box,o.r);ctx.globalAlpha=o.a;ctx.drawImage(BLOB,o.x-o.r,o.y-o.r,o.r*2,o.r*2)}
    for(const o of dust){o.x+=o.vx*dt;o.y+=o.vy*dt;wrap(o,box,10);
      ctx.globalAlpha=(.28+.22*Math.sin(t*.9+o.ph))*o.z;const s=o.r*2.4;ctx.drawImage(DUST,o.x+mouse.x*10*o.z-s/2,o.y+mouse.y*10*o.z-s/2,s,s)}
    for(const n of nodes){n.x+=n.vx*dt;n.y+=n.vy*dt;wrap(n,box,70);
      n.px=n.x+Math.sin(t*.32*n.tw+n.ph)*8*n.z+mouse.x*22*n.z;n.py=n.y+Math.cos(t*.27*n.tw+n.ph)*8*n.z+mouse.y*22*n.z}
    ctx.globalAlpha=1;
    const N=nodes.length,maxD=Math.min(Math.max(w,h)*.25,340),maxD2=maxD*maxD,seen=new Uint8Array(N*N);
    ctx.lineCap='round';
    for(let i=0;i<N;i++){const a=nodes[i],best=[];
      for(let j=0;j<N;j++){if(j===i)continue;const b=nodes[j],dx=a.px-b.px,dy=a.py-b.py,d2=dx*dx+dy*dy;
        if(d2<maxD2){best.push([d2,j]);if(best.length>3){best.sort((p,q)=>p[0]-q[0]);best.pop()}}}
      for(const [d2,j] of best){const k=i<j?i*N+j:j*N+i;if(seen[k])continue;seen[k]=1;
        const b=nodes[j],f=1-Math.sqrt(d2)/maxD,boost=(a.big||b.big)?1.5:1,al=Math.min(.85,Math.pow(f,1.15)*.8*boost*(a.z+b.z)/2);
        ctx.strokeStyle='rgba(104,72,255,'+al.toFixed(3)+')';ctx.lineWidth=(a.big||b.big)?1.1:.7;
        ctx.beginPath();ctx.moveTo(a.px,a.py);ctx.lineTo(b.px,b.py);ctx.stroke()}}
    for(const n of nodes){if(n.px<-30||n.px>w+30||n.py<-30||n.py>h+30)continue;
      ctx.globalAlpha=Math.min(1,(.62+.38*Math.sin(t*n.tw*1.3+n.ph))*(.55+.45*n.z));const s=n.r*11;ctx.drawImage(NODE,n.px-s/2,n.py-s/2,s,s)}
    ctx.globalAlpha=1;
  }

  function frame(ts){
    const dt=Math.min(.05,(ts-prev)/1000)||0;prev=ts;
    if(!document.hidden)render(ts/1000,dt);
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize',resize,{passive:true});
  if(!reduce)window.addEventListener('pointermove',e=>{mouse.tx=e.clientX/w-.5;mouse.ty=e.clientY/h-.5},{passive:true});
  resize();
  requestAnimationFrame(()=>canvas.classList.add('on'));
  if(!reduce)requestAnimationFrame(frame);
})();

/* ===== Polish layer: photo protection, progress bar, spotlight + tilt cards, count-up, skills ribbon ===== */
(()=>{
  document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('.av,.av-ring,img'))e.preventDefault()});
  document.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG')e.preventDefault()});

  const bar=document.createElement('div');bar.id='progress';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  let tick=false;const upd=()=>{const m=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')';tick=false};
  addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();

  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches,still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(fine){
    document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
    if(!still){
      document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.pc');if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.classList.add('tilt');c.style.transform='perspective(900px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg) translateY(-6px)'},{passive:true});
      document.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.pc');if(c&&!c.contains(e.relatedTarget)){c.classList.remove('tilt');c.style.transform=''}});
    }
  }

  document.querySelectorAll('.stats-strip strong').forEach(el=>{
    const t=el.textContent.trim();if(!/^\d+(\.\d+)?$/.test(t)||still)return;
    const end=parseFloat(t),dec=(t.split('.')[1]||'').length;el.textContent=(0).toFixed(dec);
    const io=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;io.disconnect();const s=performance.now();
      const step=n=>{const k=Math.min(1,(n-s)/1400),v=end*(1-Math.pow(1-k,3));el.textContent=v.toFixed(dec);if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)},{threshold:.6});io.observe(el)});

  const ss=document.querySelector('.stats-strip');
  if(ss){const items=['Java','Python','SQL','OpenCV','HTML5 / CSS3','Software Testing','Agile · Scrum','Taiga','Git & GitHub','AI & Geospatial Research','Fintech Projects'];
    const row=items.map(t=>'<span>'+t+'</span>').join('');
    ss.insertAdjacentHTML('afterend','<div class="marquee" aria-hidden="true"><div class="mq-track">'+row+row+'</div></div>')}
})();
