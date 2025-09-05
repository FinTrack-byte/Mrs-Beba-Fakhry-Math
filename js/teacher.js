// populate groups
const groups = [
 'Grade3-SatTue-430','Grade2-SatTue-530','Grade4-SatTue-645','Grade6-SatTue-800',
 'Grade3-SunWed-430','Grade4-SunWed-530','Grade2-SunWed-630','Grade5-SunWed-730','Grade6-SunWed-830',
 'Grade5-MonThu-530','Grade4-MonThu-700','Grade6-MonThu-815'
];
const sel = document.getElementById('groupSelect');
groups.forEach(g=>{ const o=document.createElement('option'); o.value=g; o.innerText=g.replace(/-/g,' '); sel.appendChild(o); });
sel.addEventListener('change', loadMeta);
function loadMeta(){ const gid = sel.value; db.collection('groups').doc(gid).get().then(doc=>{ const d=doc.data()||{}; document.getElementById('lessonNumber').value=d.lessonNumber||1; }); }
async function updateLesson(){
  const gid = sel.value; const val = parseInt(document.getElementById('lessonNumber').value)||1; 
  await db.collection('groups').doc(gid).set({lessonNumber:val,active:false,cancelled:false},{merge:true});
  alert('Lesson number updated');
}
async function cancelThisLesson(){
  const gid = sel.value;
  await db.collection('groups').doc(gid).set({cancelled:true,active:false},{merge:true});
  alert('Lesson cancelled (will skip)');
}
async function postHomework(){
  const gid = sel.value; const txt = document.getElementById('hwText').value;
  await db.collection('groups').doc(gid).collection('homework').add({text:txt,timestamp:new Date()});
  document.getElementById('hwText').value='';
  alert('Homework posted');
}
async function banStudent(){ const email = document.getElementById('studentEmail').value; if(!email) return alert('Enter email'); 
  // find user doc by email then set banned flag
  const snap = await db.collection('users').where('email','==',email).get();
  if(snap.empty) return alert('User not found');
  snap.forEach(d=> d.ref.update({banned:true}));
  alert('Banned');
}
async function unbanStudent(){ const email = document.getElementById('studentEmail').value; if(!email) return alert('Enter email');
  const snap = await db.collection('users').where('email','==',email).get();
  if(snap.empty) return alert('User not found');
  snap.forEach(d=> d.ref.update({banned:false}));
  alert('Unbanned');
}
