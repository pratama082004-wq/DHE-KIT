(function (root) {
  'use strict';
  const iso = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const parse = s => new Date(`${s}T12:00:00`);
  const addDays = (s,n) => { const d=parse(s);d.setDate(d.getDate()+n);return iso(d); };
  const monday = (s=iso()) => addDays(s,-((parse(s).getDay()+6)%7));
  const validDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s||'') && !Number.isNaN(+parse(s)) && iso(parse(s))===s;
  function plannedDates(plan, start=plan.start, end=addDays(plan.start,plan.weeks*7-1)) {
    if (!validDate(plan.start)||!validDate(start)||!validDate(end))return [];
    const finish=addDays(plan.start,plan.weeks*7-1),result=[];
    for(let d=start<plan.start?plan.start:start;d<=end&&d<=finish;d=addDays(d,1)) if(plan.days.includes(parse(d).getDay()))result.push(d);
    return result;
  }
  const completed = s => !s.status || s.status==='Selesai';
  function stats(sessions,bps,plan,start,end=iso()) {
    const list=sessions.filter(s=>s.date>=start&&s.date<=end);
    const done=list.filter(completed), scheduled=plannedDates(plan,start,end);
    const attended=scheduled.filter(d=>done.some(s=>s.date===d));
    const adhering=scheduled.filter(d=>done.some(s=>s.date===d && s.minutes>=plan.minutes && ['Ringan','Sedang'].includes(s.intensity)));
    const pressure=bps.filter(b=>b.date>=start&&b.date<=end).sort((a,b)=>(a.date+(a.time||'')).localeCompare(b.date+(b.time||'')));
    const avg=k=>pressure.length?Math.round(pressure.reduce((n,b)=>n+b[k],0)/pressure.length):null;
    return {list,done,scheduled,attended,minutes:done.reduce((n,s)=>n+s.minutes,0),attendance:scheduled.length?Math.round(attended.length/scheduled.length*100):null,adherence:scheduled.length?Math.round(adhering.length/scheduled.length*100):null,avgSys:avg('sys'),avgDia:avg('dia'),pressure};
  }
  function screen(sys,dia,symptoms=false,concern=false) {
    if(symptoms)return {level:'danger',blocked:true,title:'Jangan mulai latihan',text:'Keluhan seperti nyeri dada, sesak berat, pusing hebat, atau kelemahan mendadak perlu segera dinilai. Minta bantuan dan cari pertolongan medis segera jika keluhan berat atau menetap.'};
    if(!Number.isInteger(sys)||!Number.isInteger(dia)||sys<60||sys>260||dia<40||dia>180||sys<=dia)return {level:'neutral',blocked:true,title:'Lengkapi hasil pengukuran',text:'Isi sistolik dan diastolik setelah duduk tenang setidaknya 5 menit.'};
    if(sys>=180||dia>=110)return {level:'danger',blocked:true,title:'Tunda senam dan minta penilaian medis',text:'Nilai ini melewati batas skrining latihan dalam modul (sistolik ≥180 atau diastolik ≥110 mmHg). Jangan mulai latihan. Bila disertai gejala berat, segera cari pertolongan medis.'};
    if(sys>160||dia>100||concern)return {level:'warning',blocked:true,title:'Konsultasikan dahulu sebelum senam',text:'Modul menyarankan menunda latihan bila sistolik >160 atau diastolik >100 mmHg, atau ada kondisi kesehatan yang memerlukan penilaian tenaga kesehatan.'};
    return {level:'success',blocked:false,title:'Pemeriksaan awal sudah terisi',text:'Tetap ikuti arahan tenaga kesehatan dan berhenti bila muncul keluhan. Hasil ini bukan izin medis atau jaminan keamanan latihan.'};
  }
  function csv(rows){return '\uFEFF'+rows.map(r=>r.map(v=>{let s=String(v??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}).join(',')).join('\r\n');}
  function calendar(plan){
    const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DHE-KIT//Jadwal Senam//ID','CALSCALE:GREGORIAN'];
    const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
    for(const d of plannedDates(plan)) {
      const start=new Date(`${d}T${plan.time}:00`),finish=new Date(+start+plan.minutes*60000);
      const local=x=>iso(x).replace(/-/g,'')+'T'+String(x.getHours()).padStart(2,'0')+String(x.getMinutes()).padStart(2,'0')+'00';
      lines.push('BEGIN:VEVENT',`UID:dhekit-${d}-${plan.time.replace(':','')}@local`,`DTSTAMP:${stamp}`,`DTSTART:${local(start)}`,`DTEND:${local(finish)}`,'SUMMARY:Senam hipertensi DHE-KIT','DESCRIPTION:Periksa kesiapan sebelum latihan. Ikuti arahan tenaga kesehatan.','BEGIN:VALARM','TRIGGER:-PT15M','ACTION:DISPLAY','DESCRIPTION:Persiapan senam DHE-KIT','END:VALARM','END:VEVENT');
    }return lines.concat('END:VCALENDAR').join('\r\n')+'\r\n';
  }
  const api={iso,parse,addDays,monday,validDate,plannedDates,completed,stats,screen,csv,calendar};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.DHE=api;
})(typeof globalThis!=='undefined'?globalThis:this);
