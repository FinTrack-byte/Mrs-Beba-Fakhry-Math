// student page behavior
const params = new URLSearchParams(location.search);
const groupId = params.get('group') || localStorage.getItem('group');
document.getElementById('groupName').innerText = groupId.replace(/-/g,' ');
const statusBadge = document.getElementById('statusBadge');
const lessonNumberEl = document.getElementById('lessonNumber');

// realtime group meta
const groupRef = db.collection('groups').doc(groupId);

// ensure group doc exists with default fields 
groupRef.get().then(doc=>{ if(!doc.exists){ groupRef.set({lessonNumber:1,active:false,cancelled:false}); }});

// listen for meta changes
groupRef.onSnapshot(snap=>{
  const data = snap.data()||{};
  lessonNumberEl.innerText = data.lessonNumber||1;
  if(data.cancelled) statusBadge.innerHTML = '<span class="badge">Cancelled</span>';
  else if(data.active) statusBadge.innerHTML = '<span class="badge">Lesson in progress</span>';
  else statusBadge.innerHTML = '<span class="badge">Waiting</span>';
});

// simple countdown: we'll compute next scheduled time from group id mapping
function parseGroupToTime(g){
  // examples: Grade3-SatTue-430 => day tokens and time
  const parts = g.split('-');
  const time = parts[2]||'16:30';
  const hh = parseInt(time.slice(0,-2));
  const mm = parseInt(time.slice(-2));
  return {hh,mm};
}

function nextOccurrence(hh,mm){
  const now = new Date();
  let target = new Date();
  target.setHours(hh,mm,0,0);
  if(target<=now) target.setDate(target.getDate()+1);
  return target;
}

let target = (function(){ const t = parseGroupToTime(groupId); return nextOccurrence(t.hh,t.mm); })();

function updateCountdown(){
  const diff = target - new Date();
  if(diff<=0){ document.getElementById('countdown').innerText = 'Lesson is active'; return; }
  const h = Math.floor(diff/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  document.getElementById('countdown').innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
setInterval(updateCountdown,1000);
updateCountdown();

// CHAT
const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
chatForm.addEventListener('submit', async e=>{
  e.preventDefault();
  const txt = document.getElementById('chatInput').value.trim();
  if(!txt) return;
  await db.collection('groups').doc(groupId).collection('chat').add({text:txt,createdAt:new Date()});
  document.getElementById('chatInput').value='';
});

db.collection('groups').doc(groupId).collection('chat').orderBy('createdAt').onSnapshot(snap=>{
  chatBox.innerHTML='';
  snap.docs.forEach(d=>{
    const data = d.data();
    const p = document.createElement('div'); p.className='item'; p.innerText = data.text;
    chatBox.appendChild(p);
  });
});

// HOMEWORK list
const hwList = document.getElementById('homeworkList');
db.collection('groups').doc(groupId).collection('homework').orderBy('timestamp','desc').onSnapshot(snap=>{
  hwList.innerHTML='';
  snap.docs.forEach(d=>{
    const data = d.data();
    const div = document.createElement('div'); div.className='item';
    div.innerHTML = `<div>${data.text||''}</div>${data.file?`<div><a href='${data.file}' target='_blank'>Attachment</a></div>`:''}`;
    hwList.appendChild(div);
  });
});
