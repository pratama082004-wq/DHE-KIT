// Runs the real Preact app and event handlers in a DOM implementation.
// This checks behavior, persistence, and migration, not browser layout.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {parseHTML}=require('linkedom');
const {window:domWindow}=parseHTML(fs.readFileSync('index.html','utf8'));
const window={document:domWindow.document,HTMLElement:domWindow.HTMLElement,HTMLAnchorElement:domWindow.HTMLAnchorElement,Event:domWindow.Event,addEventListener:domWindow.addEventListener.bind(domWindow),removeEventListener:domWindow.removeEventListener.bind(domWindow),dispatchEvent:domWindow.dispatchEvent.bind(domWindow)};
window.window=window;window.globalThis=window;
const stored=new Map(),downloads=[],errors=[];
const storage={getItem:k=>stored.get(k)??null,setItem:(k,v)=>stored.set(k,String(v)),removeItem:k=>stored.delete(k)};
const intervals=new Set();
window.localStorage=storage;window.sessionStorage={getItem:()=>null,setItem:()=>{}};
window.location={hash:''};window.matchMedia=()=>({matches:true});window.scrollTo=()=>{};window.print=()=>{window.printed=true;};window.confirm=()=>true;
window.setInterval=(fn,delay)=>{const id=setInterval(fn,delay);id.unref();intervals.add(id);return id;};
window.clearInterval=id=>{clearInterval(id);intervals.delete(id);};
window.setTimeout=(fn,delay)=>{const id=setTimeout(fn,delay);id.unref();return id;};window.clearTimeout=clearTimeout;
window.HTMLElement.prototype.getClientRects=function(){return [{}];};
window.HTMLElement.prototype.focus=function(){window.document.activeElement=this;};
window.HTMLAnchorElement.prototype.click=function(){downloads.push({name:this.download,url:this.href});};
window.URL={createObjectURL:blob=>{window.lastBlob=blob;return 'blob:test';},revokeObjectURL:()=>{}};window.Blob=Blob;
window.crypto=require('node:crypto').webcrypto;
window.console={...console,error:(...args)=>errors.push(args.join(' '))};
// Exercise compatibility with the existing storage keys and original numeric IDs.
stored.set('dhekit_bp_v2',JSON.stringify([{id:1,date:'2026-10-01',sys:134,dia:85}]));
stored.set('dhekit_sessions_v2',JSON.stringify([{id:1,date:'2026-10-06',minutes:45,moves:15}]));
stored.set('dhekit_settings_v3',JSON.stringify({large:false,contrast:false,dark:false}));
const ctx=vm.createContext(window);
for(const name of ['assets/runtime.js','domain.js','content.js','app.js'])vm.runInContext(fs.readFileSync(name,'utf8'),ctx,{filename:name});
const tick=()=>new Promise(r=>setTimeout(r,20));
const text=()=>window.document.body.textContent;
const buttons=()=>[...window.document.querySelectorAll('button')];
const findButton=(label)=>buttons().find(b=>b.textContent.trim()===label)||buttons().find(b=>b.getAttribute('aria-label')===label);
async function click(label){const b=findButton(label);assert.ok(b,`Button not found: ${label}`);assert.ok(!b.disabled,`Button disabled: ${label}`);b.dispatchEvent(new window.Event('click',{bubbles:true}));await tick();}
async function input(label,value,type='input'){
 const lab=[...window.document.querySelectorAll('label')].find(n=>n.querySelector('span')?.textContent===label);
 const node=lab?.querySelector('input,textarea,select')||window.document.querySelector(`[aria-label="${label}"]`);
 assert.ok(node,`Field not found: ${label}`);node.value=value;node.dispatchEvent(new window.Event(type,{bubbles:true}));await tick();
}
async function submit(){const form=window.document.querySelector('[role=dialog] form')||window.document.querySelector('main form');assert.ok(form);form.dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));await tick();}
async function close(){await click('Tutup dialog');}
const parse=k=>JSON.parse(stored.get(k));
(async()=>{
 await tick();assert.match(text(),/Gerak ringan/);assert.equal(parse('dhekit_bp_v2')[0].sys,134);
 assert.equal(window.document.querySelector('.ambient-scene').getAttribute('aria-hidden'),'true');assert.ok(window.document.querySelector('.hero-decoration'));assert.equal(window.document.querySelector('.ambient-scene').querySelectorAll('button,a,input').length,0);
 for(const name of ['Panduan Senam','Jadwal & Pengingat','Jurnal Kesehatan','Rekap & Pencapaian','Pusat Edukasi','Dukungan & Konsultasi','Tentang Program','Beranda']){await click(name);assert.ok(window.document.querySelector('h1'),`Missing page: ${name}`);}
 await click('Jadwal & Pengingat');await input('Waktu senam','09:30','change');await submit();assert.equal(parse('dhekit_plan_v3').time,'09:30');await click('Unduh ke kalender');assert.match(downloads.at(-1).name,/\.ics$/);assert.match(await window.lastBlob.text(),/DTSTART:.*T093000/);
 await click('Jurnal Kesehatan');await click('Catat tekanan darah');await input('Sistolik (mmHg)','70');await input('Diastolik (mmHg)','80');await submit();assert.match(text(),/Sistolik harus lebih besar/);
 await input('Sistolik (mmHg)','128');await input('Diastolik (mmHg)','82');await input('Nadi / menit (opsional)','72');await submit();assert.equal(parse('dhekit_bp_v2').length,2);assert.equal(parse('dhekit_bp_v2').at(-1).sys,128);
 await click('Ubah tekanan darah '+new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}));await input('Sistolik (mmHg)','126');await submit();assert.equal(parse('dhekit_bp_v2').at(-1).sys,126);
 await click('Panduan Senam');assert.equal(window.document.querySelectorAll('.move-card').length,26);await click('Pelajari Jalan di tempat');assert.match(text(),/Jalan di tempat/);await close();
 await click('Mulai sesi');await input('Sistolik saat ini (mmHg)','120');await input('Diastolik saat ini (mmHg)','110');assert.equal(findButton('Lanjut ke panduan').disabled,true);assert.match(text(),/Tunda senam dan minta/);
 await input('Diastolik saat ini (mmHg)','80');const checks=[...window.document.querySelectorAll('[role=dialog] input[type=checkbox]')];checks[0].checked=true;checks[0].dispatchEvent(new window.Event('change',{bubbles:true}));checks[3].checked=true;checks[3].dispatchEvent(new window.Event('change',{bubbles:true}));await tick();await click('Lanjut ke panduan');assert.match(text(),/1 dari 26 langkah/);
 await click('Mulai timer');assert.ok(intervals.size>=2);await click('Jeda timer');
 for(let n=1;n<26;n++)await click('Gerakan berikutnya');await click('Catat hasil sesi');await input('Durasi sebenarnya (menit)','12');await submit();assert.equal(parse('dhekit_sessions_v2').at(-1).minutes,12,'Real duration must replace fixed 45 minutes');assert.equal(window.document.querySelector('[role=dialog]'),null);
 await click('Pusat Edukasi');await input('Cari artikel','zzzz');assert.match(text(),/Topik belum ditemukan/);await input('Cari artikel','darah');assert.ok(window.document.querySelectorAll('.edu-card').length>0);
 await click('Rekap & Pencapaian');await click('Unduh CSV');assert.match(downloads.at(-1).name,/\.csv$/);await click('Cetak / Simpan PDF');assert.equal(window.printed,true);
 await click('Dukungan & Konsultasi');await input('Nama fasilitas / pendamping','Puskesmas Uji');await input('Nomor telepon','081234567890');await submit();assert.equal(parse('dhekit_profile_v3').contactPhone,'081234567890');
 await click('Catat keluhan & tindak lanjut');await input('Keluhan / apa yang terjadi','Nyeri lutut ringan');await input('Tindakan yang sudah dilakukan','Menghentikan latihan');await submit();assert.equal(parse('dhekit_incidents_v3').length,1);
 await click('Catat evaluasi program');await input('Sistolik (opsional)','125');await input('Diastolik (opsional)','80');await input('Catatan evaluasi','Hasil pemeriksaan tenaga kesehatan');await submit();assert.equal(parse('dhekit_outcomes_v3').length,1);
 await click('Buka profil dan pengaturan');await input('Nama panggilan','Peserta Uji');await input('Acuan sistolik dari tenaga kesehatan','130');await input('Acuan diastolik dari tenaga kesehatan','80');await submit();assert.equal(parse('dhekit_profile_v3').name,'Peserta Uji');assert.equal(parse('dhekit_profile_v3').bpTargetSys,'130');
 await click('Buka profil dan pengaturan');await click('Tampilan');await click('Teks lebih besar');assert.ok(window.document.body.className.includes('large-text'));await click('Tema gelap');assert.ok(window.document.body.className.includes('dark'));assert.equal(findButton('Dekorasi bergerak').getAttribute('aria-checked'),'true');await click('Dekorasi bergerak');assert.ok(window.document.body.className.includes('motion-paused'));assert.equal(parse('dhekit_settings_v3').motion,false);await click('Data & cadangan');await click('Cadangkan data');const backup=await window.lastBlob.text();assert.equal(JSON.parse(backup).format,'DHE-KIT');
 // Restoring requires a validated preview and preserves the previous data in a download.
 const importField=window.document.querySelector('input[type=file]');
 Object.defineProperty(importField,'files',{configurable:true,value:[{size:2,text:async()=>'{bad JSON'}]});importField.dispatchEvent(new window.Event('change',{bubbles:true}));await tick();assert.match(text(),/File bukan JSON/);
 const saved=JSON.parse(backup);saved.profile.name='Hasil Pemulihan';
 Object.defineProperty(importField,'files',{configurable:true,value:[{size:backup.length,text:async()=>JSON.stringify(saved)}]});importField.dispatchEvent(new window.Event('change',{bubbles:true}));await tick();assert.match(text(),/Cadangan siap ditinjau/);assert.equal(parse('dhekit_profile_v3').name,'Peserta Uji');await click('Pulihkan cadangan ini');assert.equal(parse('dhekit_profile_v3').name,'Hasil Pemulihan');assert.equal(parse('dhekit_settings_v3').motion,false);assert.ok(window.document.body.className.includes('motion-paused'));
 await click('Hapus contoh data saja');assert.equal(parse('dhekit_bp_v2').length,1,'Removing demos must preserve personal BP records');assert.equal(parse('dhekit_sessions_v2').length,1,'Removing demos must preserve personal sessions');
 await close();await click('Panduan Senam');await click('Buka pemutar video');assert.match(text(),/Belum ada video dipilih/);await close();
 assert.equal(errors.length,0,errors.join('\n'));
 for(const id of intervals)clearInterval(id);
 console.log('PASS: all eight pages, legacy data, schedule/ICS, BP validation/edit, all 26 steps, screening, real duration, search, reports/CSV/print, support, incidents, outcomes, profile, display settings, backup, video fallback');
})().catch(e=>{for(const id of intervals)clearInterval(id);console.error(e);process.exitCode=1;});
