// assistant page: load groups dropdown and students, allow marking paid/present and rating
const groups = [
 'Grade3-SatTue-430','Grade2-SatTue-530','Grade4-SatTue-645','Grade6-SatTue-800',
 'Grade3-SunWed-430','Grade4-SunWed-530','Grade2-SunWed-630','Grade5-SunWed-730','Grade6-SunWed-830',
 'Grade5-MonThu-530','Grade4-MonThu-700','Grade6-MonThu-815'
];
const sel = document.getElementById('groupSelect');
groups.forEach(g=>{ const o = document.createElement('option'); o.value=g; o.innerText=g.replace(/-/g,' '); sel.appendChild(o); });
sel.addEventListener('change', loadStudents);
function loadStudents(){
  const groupId = sel.value;
  const list = document.getElementById('studentsList');
  list.innerHTML='Loading...';
  db.collection('users').where('group','==',groupId).get().then(snap=>{
    list.innerHTML='';
    snap.forEach(doc=>{
      const d = doc.data();
      const div = document.createElement('div'); div.className='item';
      div.innerHTML = `<strong>${d.name||d.email}</strong>
        <div>Paid: <input type='checkbox' ${d.paid?'checked':''} onchange="togglePaid('${doc.id}',this.checked)"></div>
        <div>Present: <input type='checkbox' ${d.present?'checked':''} onchange="togglePresent('${doc.id}',this.checked)"></div>
        <div>Rating: <input type='number' min=0 max=10 value='${d.rating||0}' onchange="setRating('${doc.id}',this.value)"></div>`;
      list.appendChild(div);
    });
  });
}
window.togglePaid = (id,val)=>{ db.collection('users').doc(id).update({paid:val}); }
window.togglePresent = (id,val)=>{ db.collection('users').doc(id).update({present:val}); }
window.setRating = (id,val)=>{ db.collection('users').doc(id).update({rating:parseInt(val||0)}); }
