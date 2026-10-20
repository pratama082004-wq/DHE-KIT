// Native SVG illustrations. No bitmap from the scanned PDF is embedded.
// Rebuild: node tools/draw-exercises.mjs
import fs from 'node:fs';
import path from 'node:path';
const out=path.resolve('assets/illustrations');
fs.mkdirSync(out,{recursive:true});
const C={ink:'#244c42',shirt:'#7aa88a',light:'#a8c7a4',skin:'#f0c2a1',skinLight:'#f8d9b9',hair:'#91a09b',deep:'#17654c',arrow:'#c29a4e',trouser:'#365e53'};
const pathEl=(d,fill='none',stroke=C.ink,width=3,extra='')=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const ellipse=(cx,cy,rx,ry,fill,extra='')=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
const circle=(cx,cy,r,fill,extra='')=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
const group=(x,y,scale,body,rotate=0)=>`<g transform="translate(${x} ${y}) scale(${scale}) rotate(${rotate})">${body}</g>`;
const label=(x,y,text,size=21)=>`<text x="${x}" y="${y}" font-family="Segoe UI,Arial,sans-serif" font-size="${size}" fill="#688474" text-anchor="middle">${text}</text>`;
function arrowHead(d,color){const p=d.match(/-?\d+(?:\.\d+)?/g).map(Number),x=p.at(-2),y=p.at(-1),a=Math.atan2(y-p.at(-3),x-p.at(-4)),r=12;return pathEl(`M${x-r*Math.cos(a-.55)} ${y-r*Math.sin(a-.55)}L${x} ${y}L${x-r*Math.cos(a+.55)} ${y-r*Math.sin(a+.55)}`,'none',color,3.5);}
const arrow=d=>pathEl(d,'none',C.arrow,4)+arrowHead(d,C.arrow);
const hintArrow=d=>pathEl(d,'none','#8aaf98',3,'stroke-dasharray="5 8"')+arrowHead(d,'#8aaf98');
const contact=(x,y)=>circle(x,y,12,'#e9c783','opacity=".25"')+circle(x,y,4,C.arrow);
const sparkle=(x,y)=>pathEl(`M${x-15} ${y-4}l-10 -7 M${x} ${y-13}v-12 M${x+15} ${y-4}l10 -7`,'none',C.arrow,3);
function head(tilt=0,eyesClosed=false){return `<g transform="translate(0 -10) rotate(${tilt})">`
  +ellipse(0,-69,41,45,C.hair)+circle(0,-112,20,'#a6b3ad')
  +pathEl('M-12 -37L-13 -15Q0 -5 13 -15L12 -37',C.skin,'none')
  +ellipse(-34,-65,7,11,C.skin)+ellipse(34,-65,7,11,C.skin)
  +pathEl('M-32 -83Q-29 -111 0 -109Q31 -106 33 -83L30 -54Q20 -29 0 -28Q-20 -29 -30 -54Z','url(#skin)',C.ink,2)
  +pathEl('M-32 -78Q-35 -104 -18 -109Q-4 -123 16 -109Q36 -103 33 -78Q21 -83 12 -97Q-4 -74 -32 -78Z',C.hair,'none')
  +pathEl('M-23 -82Q-16 -87 -10 -83 M10 -83Q17 -87 23 -82','none','#697e73',2)
  +(eyesClosed?pathEl('M-23 -72Q-16 -66 -10 -72 M10 -72Q17 -66 23 -72','none',C.ink,2):ellipse(-16,-72,2.5,3.5,C.ink)+ellipse(16,-72,2.5,3.5,C.ink))
  +pathEl('M0 -68L-3 -57L3 -56','none','#cb9577',2)
  +pathEl('M-10 -45Q0 -37 10 -45','none','#a9675b',2)
  +ellipse(-21,-57,6,3,'#e9a98e','opacity=".45"')+ellipse(21,-57,6,3,'#e9a98e','opacity=".45"')+'</g>';}
function torso(){return pathEl('M-18 -23Q-42 -26 -62 -12L-54 82Q0 100 54 82L62 -12Q42 -26 18 -23Q0 -9 -18 -23Z','url(#shirt)',C.ink,2.8)+pathEl('M-18 -23Q0 -7 18 -23 M-53 73Q0 90 53 73','none','#61937b',2);}
function limb(points,width=27,color='url(#shirt)'){return pathEl(points,'none',C.ink,width+4)+pathEl(points,'none',color,width);}
function simpleHand(x,y,rotate=0){return group(x,y,1,pathEl('M-9 9Q-14 -2 -9 -9L-7 -16Q-4 -20 -1 -15L0 -7L2 -20Q5 -25 8 -19L8 -4Q15 -10 16 -4Q14 6 6 14Z','url(#skin)',C.ink,2),rotate);}
function arms(pose='rest'){
  if(pose==='wide')return limb('M-51 -8Q-84 -1 -126 -3')+limb('M51 -8Q84 -1 126 -3')+simpleHand(-139,-5,-90)+simpleHand(139,-5,90);
  if(pose==='up')return limb('M-50 -7Q-74 -36 -42 -91L-13 -131')+limb('M50 -7Q74 -36 42 -91L13 -131')+simpleHand(-8,-139,18)+simpleHand(8,-139,-18);
  if(pose==='clap')return limb('M-52 -7Q-72 42 -20 24L-3 -5')+limb('M52 -7Q72 42 20 24L3 -5')+simpleHand(-3,-15,15)+simpleHand(4,-13,-15);
  if(pose==='breathe')return limb('M-52 -7Q-77 44 -24 52L-3 36')+limb('M52 -7Q77 44 24 52L3 36')+simpleHand(-10,32,-70)+simpleHand(11,32,70);
  if(pose==='shoulder')return limb('M-50 -6Q-70 47 -13 38L39 -17')+limb('M50 -6Q77 42 34 56')+simpleHand(43,-25,70)+simpleHand(25,57,100);
  if(pose==='hands')return limb('M-52 -7Q-74 47 -20 43L-6 17')+limb('M52 -7Q74 47 20 43L6 17')+simpleHand(-7,10,15)+simpleHand(8,10,-15);
  if(pose==='waist')return limb('M-52 -7Q-92 45 -40 66')+limb('M52 -7Q92 45 40 66')+simpleHand(-34,65,-100)+simpleHand(34,65,100);
  if(pose==='belly')return limb('M-52 -7Q-85 46 -32 62L-3 61')+limb('M52 -7Q85 46 32 62L3 61')+simpleHand(-9,59,-85)+simpleHand(10,59,85);
  if(pose==='thigh')return limb('M-52 -7Q-64 40 -41 102')+limb('M52 -7Q64 40 41 102')+simpleHand(-38,111,180)+simpleHand(38,111,180);
  if(pose==='calf')return limb('M-52 -7Q-65 45 -40 97')+limb('M52 -7Q82 62 65 158')+simpleHand(-38,106,180)+simpleHand(65,167,180);
  return limb('M-52 -7Q-68 38 -65 76')+limb('M52 -7Q68 38 65 76')+simpleHand(-65,85,180)+simpleHand(65,85,180);
}
function legs(pose='stand'){
  const trousers=(d,w=32)=>limb(d,w,C.trouser);
  const shoe=(x,y)=>pathEl(`M${x-14} ${y-11}Q${x+1} ${y-4} ${x+24} ${y+2}L${x+24} ${y+10}L${x-18} ${y+10}Q${x-22} ${y} ${x-14} ${y-11}Z`,'#f6f7eb',C.ink,2);
  if(pose==='march')return trousers('M-25 85L-28 165L-34 227')+trousers('M25 85L64 134L20 148')+shoe(-35,234)+shoe(12,151);
  if(pose==='squat')return trousers('M-26 85L-74 128L-37 211')+trousers('M26 85L74 128L37 211')+shoe(-37,220)+shoe(37,220);
  if(pose==='sit')return trousers('M-24 85L-54 133L-48 197')+trousers('M24 85L54 133L48 197')+shoe(-48,207)+shoe(48,207);
  return trousers('M-25 85L-32 158L-35 227')+trousers('M25 85L32 158L35 227')+shoe(-35,234)+shoe(35,234);
}
function person(x,y,scale,{pose='rest',tilt=0,full=false,leg='stand',closed=false,bodyTilt=0}={}){
  return group(x,y,scale,(full?legs(leg):'')+`<g transform="rotate(${bodyTilt} 0 50)">`+torso()+head(tilt,closed)+arms(pose)+'</g>');
}
function hand(kind='open',rotation=0,mirror=false){
  let shape='';
  if(kind==='fist'){
    shape=pathEl('M-33 23L-35 -8Q-36 -25 -22 -26Q-15 -38 -4 -29Q7 -39 17 -27Q31 -31 36 -14L37 18Q34 42 19 49L-18 49Q-33 42 -33 23Z','url(#skin)',C.ink,2.6)
      +pathEl('M-22 -24L-21 -7 M-4 -28L-3 -8 M17 -26L18 -7 M-30 17Q-6 11 12 2Q28 -3 29 7Q17 23 -9 28','none','#bd8d72',2.4);
  }else if(kind==='index'){
    shape=pathEl('M-29 24L-30 -7Q-28 -20 -14 -17L-10 -22L-10 -76Q-10 -91 0 -91Q10 -91 10 -77L10 -20Q20 -27 29 -17Q40 -19 43 -4L41 21Q32 44 17 50L-12 50Q-27 41 -29 24Z','url(#skin)',C.ink,2.6)
      +pathEl('M-23 1Q-9 -3 6 3L21 12 M15 -18L14 -2 M29 -15L28 2 M-4 -64L4 -64','none','#bd8d72',2.2);
  }else if(kind==='thumb'){
    shape=pathEl('M-24 40L-29 5Q-39 -6 -31 -15Q-23 -23 -14 -9L-4 3L0 -58Q0 -74 10 -73Q20 -72 18 -56L16 -9Q32 -18 39 -5L39 20Q32 45 15 51L-9 51Z','url(#skin)',C.ink,2.6)
      +pathEl('M17 -6L16 23 M27 -6L26 20','none','#bd8d72',2);
  }else if(kind==='edge'){
    shape=pathEl('M-13 51L-24 21Q-28 4 -25 -16L-21 -77Q-20 -88 -12 -86Q-4 -85 -6 -72L-9 -14L-4 -67Q-1 -80 6 -77Q14 -74 9 -61L2 -11L7 -54Q10 -65 17 -61Q24 -58 19 -46L10 -7L15 -34Q19 -45 25 -41Q32 -37 27 -27L17 14Q12 39 1 51Z','url(#skin)',C.ink,2.6)
      +pathEl('M-18 8Q-7 1 3 -3','none','#bd8d72',2);
  }else{
    shape=pathEl('M-34 30Q-48 7 -39 -6Q-33 -13 -25 -3L-19 5L-20 -63Q-20 -77 -11 -77Q-3 -77 -3 -64L0 -18L0 -82Q0 -94 9 -94Q18 -94 18 -81L18 -18L22 -70Q22 -82 31 -80Q40 -78 38 -67L34 -15L39 -48Q41 -59 49 -55Q57 -52 53 -40L44 7Q40 37 22 49L-12 49Q-26 43 -34 30Z','url(#skin)',C.ink,2.6)
      +pathEl('M-16 20Q0 10 22 17 M-14 33Q4 28 17 31 M-15 -52L-8 -52 M5 -69L13 -69 M26 -58L33 -57 M41 -36L47 -34','none','#c69476',1.8);
  }
  return `<g transform="rotate(${rotation}) scale(${mirror?-1:1} 1)">`+pathEl('M-18 45L-21 87L24 87L20 45','url(#skin)',C.ink,2.5)+shape+'</g>';
}
function handDetail(x,y,scale,kind='open',rotation=0,mirror=false){return group(x,y,scale,hand(kind,rotation,mirror));}
function inset(body){return circle(709,253,169,'#fffdf5','stroke="#e4dbc1" stroke-width="2"')+body;}
function tap(x,y){return pathEl(`M${x-18} ${y-13}l-9 -9 M${x} ${y-18}v-13 M${x+18} ${y-13}l9 -9`,'none',C.arrow,3.6);}
function base(title,body){return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="560" viewBox="0 0 960 560" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">Ilustrasi vektor gerakan ${title.toLowerCase()} untuk panduan DHE-KIT. Ikuti instruksi teks dan kemampuan tubuh.</desc>
<defs><linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a0c3a0"/><stop offset="1" stop-color="#68997f"/></linearGradient><linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f9dab9"/><stop offset="1" stop-color="#eab897"/></linearGradient><marker id="arrow" markerWidth="7" markerHeight="7" refX="5.3" refY="3.5" orient="auto"><path d="M1 1L5 3.5L1 6" fill="none" stroke="#c29a4e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker><marker id="soft-arrow" markerWidth="7" markerHeight="7" refX="5.3" refY="3.5" orient="auto"><path d="M1 1L5 3.5L1 6" fill="none" stroke="#8aaf98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect width="960" height="560" rx="28" fill="#f3f6eb"/>
${ellipse(480,270,392,231,'#fbfcf6')}${body}
</svg>`;}
const saved=[];
function save(name,title,body){const svg=base(title,body).replaceAll('url(#shirt)',C.shirt).replaceAll('url(#skin)',C.skinLight);fs.writeFileSync(path.join(out,name+'.svg'),svg);saved.push({file:name+'.svg',title});}
// Warm-up: two positions make the direction visible without relying on a crop.
save('warm-1','Tekuk kepala ke samping',person(291,297,1.48,{tilt:-15})+person(677,297,1.48,{tilt:15})+arrow('M320 132Q276 103 234 133')+arrow('M649 132Q694 103 736 133')+label(291,482,'Miringkan perlahan ke satu sisi')+label(677,482,'Lalu ke sisi lainnya'));
save('warm-2','Tautkan jari kedua tangan',person(310,295,1.3,{pose:'hands'})+person(680,315,1.3,{pose:'up'})+arrow('M463 300Q520 230 559 170')+label(310,483,'Tautkan jari dengan nyaman')+label(680,483,'Angkat perlahan sesuai jangkauan'));
save('warm-3','Tarik napas dalam',person(320,315,1.6,{pose:'breathe',closed:true})+inset(arrow('M633 233Q704 162 776 231')+hintArrow('M775 271Q704 341 634 273')+label(710,365,'Tarik dan hembuskan perlahan')));
// Core: full-body motion and hand detail panels.
save('step-1','Jalan di tempat',person(315,212,1.08,{full:true,leg:'march'})+`<g transform="translate(960 0) scale(-1 1)">${person(315,212,1.08,{full:true,leg:'march'})}</g>`+arrow('M423 400L423 341')+arrow('M539 400L539 341')+label(315,525,'Kaki bergantian')+label(645,525,'Gerak perlahan dan stabil'));
save('step-2','Tepuk tangan',person(283,318,1.55,{pose:'clap'})+inset(handDetail(656,245,1.2,'edge',35)+handDetail(763,245,1.2,'edge',-35,true)+tap(710,178))+label(710,462,'Tepuk lembut di depan dada'));
save('step-3','Tepuk jari',person(268,320,1.5,{pose:'hands'})+inset(handDetail(647,288,.99,'open',35)+handDetail(772,288,.99,'open',-35,true)+contact(709,207)+tap(709,180))+label(710,462,'Pertemukan ujung-ujung jari'));
save('step-4','Silang ibu jari',person(268,320,1.5,{pose:'hands'})+inset(handDetail(657,278,1.17,'thumb',35)+handDetail(764,278,1.17,'thumb',-35,true)+contact(710,218)+arrow('M649 174Q711 136 769 174'))+label(710,462,'Silangkan ibu jari bergantian'));
save('step-5','Adu sisi kelingking',person(268,320,1.5,{pose:'hands'})+inset(handDetail(676,260,1.3,'edge',0)+handDetail(744,260,1.3,'edge',0,true)+contact(710,208)+tap(710,179))+label(710,462,'Pertemukan sisi kelingking'));
save('step-6','Adu sisi telunjuk',person(268,320,1.5,{pose:'hands'})+inset(handDetail(675,280,1.15,'index',20)+handDetail(745,280,1.15,'index',-20,true)+contact(710,181)+tap(710,155))+label(710,462,'Pertemukan sisi telunjuk'));
save('step-7','Ketuk pergelangan dan nadi',person(268,320,1.5,{pose:'hands'})+inset(handDetail(670,263,1.18,'open',-18)+handDetail(773,310,.92,'fist',-67,true)+contact(684,334)+tap(710,322))+label(710,462,'Ketuk lembut, lakukan bergantian'));
save('step-8','Tekan jari-jari',person(268,320,1.5,{pose:'hands'})+inset(handDetail(674,276,1.18,'open',0)+handDetail(771,233,.95,'fist',-62,true)+contact(693,191)+arrow('M760 145Q716 127 694 165'))+label(710,462,'Tekan jari satu per satu dengan lembut'));
save('step-9','Buka dan mengepal',handDetail(300,281,1.8,'open',0)+handDetail(670,270,1.8,'fist',0)+arrow('M426 253Q480 224 534 253')+hintArrow('M534 332Q480 360 426 332')+label(300,495,'Buka tangan')+label(670,495,'Lalu kepalkan perlahan'));
save('step-10','Menepuk punggung tangan',person(268,320,1.5,{pose:'hands'})+inset(handDetail(679,281,1.2,'open',-15)+handDetail(766,254,1,'edge',-70,true)+contact(691,285)+tap(713,273))+label(710,462,'Tepuk punggung tangan bergantian'));
save('step-11','Menepuk lengan dan bahu',person(360,317,1.8,{pose:'shoulder'})+tap(430,245)+arrow('M649 228Q602 213 555 226')+label(715,296,'Lengan dan bahu')+label(715,324,'kanan–kiri bergantian'));
save('step-12','Menepuk pinggang',person(440,239,1.07,{full:true,pose:'waist'})+tap(398,300)+tap(483,300)+label(738,290,'Tepuk ringan')+label(738,316,'sisi pinggang'));
save('step-13','Menepuk paha',person(440,239,1.07,{full:true,pose:'thigh'})+tap(399,352)+tap(482,352)+label(738,290,'Tepuk lembut')+label(738,316,'paha bergantian'));
save('step-14','Menepuk samping betis',person(418,248,1.04,{full:true,pose:'calf',bodyTilt:22})+arrow('M551 310Q578 355 550 398')+contact(439,438)+label(730,288,'Jangkau sesuai kemampuan')+label(730,316,'tanpa memaksa membungkuk'));
save('step-15','Jongkok berdiri',person(285,213,1.05,{full:true})+person(657,230,1.05,{full:true,pose:'wide',leg:'squat'})+pathEl('M822 284L822 470 M810 284H845 M812 422H851 M850 284L850 470','none','#b8c8b7',9)+arrow('M472 268L472 360')+label(285,523,'Berdiri stabil')+label(675,523,'Gunakan penopang; sesuai arahan'));
save('step-16','Menepuk perut',person(425,242,1.07,{full:true,pose:'belly'})+tap(427,301)+label(732,284,'Tepuk sangat lembut')+label(732,312,'Lewati bila terasa nyeri'));
// Cooling down.
save('cool-1','Rentangkan tangan',person(480,309,1.65,{pose:'wide'})+arrow('M340 245L271 245')+arrow('M620 245L689 245')+label(480,496,'Rentangkan perlahan ke samping'));
save('cool-2','Tarik tangan ke atas',person(480,337,1.4,{pose:'up'})+arrow('M310 286Q291 205 339 144')+arrow('M650 286Q669 205 621 144')+label(480,509,'Angkat sesuai jangkauan yang nyaman'));
save('cool-3','Tarik tangan ke samping',person(285,305,1.38,{pose:'wide',bodyTilt:-8})+person(685,305,1.38,{pose:'wide',bodyTilt:8})+arrow('M302 133Q255 115 218 148')+arrow('M666 133Q713 115 750 148')+label(285,495,'Regangkan satu sisi')+label(685,495,'Lalu sisi lainnya'));
save('cool-4','Putar bahu',person(480,300,1.65,{pose:'rest'})+arrow('M338 245C291 188 308 161 343 175C370 186 365 213 346 222')+arrow('M622 245C669 188 652 161 617 175C590 186 595 213 614 222')+label(480,510,'Putar bahu perlahan, depan dan belakang'));
save('cool-5','Rilekskan leher',person(291,297,1.48,{tilt:-12,closed:true})+person(677,297,1.48,{tilt:12,closed:true})+hintArrow('M320 131Q277 107 240 131')+hintArrow('M649 131Q692 107 729 131')+label(480,491,'Gerakan ringan; jangan memaksa leher'));
save('cool-6','Napas perlahan',person(320,315,1.6,{pose:'breathe',closed:true})+inset(arrow('M633 233Q704 162 776 231')+hintArrow('M775 271Q704 341 634 273')+label(710,365,'Napas normal dan nyaman')));
save('cool-7','Relaksasi tubuh',pathEl('M377 355V475 M577 355V475 M370 356H584','none','#b9cbb9',12)+person(480,246,1.04,{full:true,leg:'sit',pose:'thigh',closed:true})+ellipse(480,505,125,10,'#dce8d6')+label(739,277,'Duduk nyaman')+label(739,307,'Rilekskan tubuh dan napas'));
fs.writeFileSync(path.join(out,'catalog.json'),JSON.stringify({format:'SVG',viewBox:'0 0 960 560',count:saved.length,assets:saved},null,2));
console.log(`Created ${saved.length} native SVG exercise illustrations.`);
