const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const group = document.getElementById('group').value;
  try{
    const userCred = await auth.signInWithEmailAndPassword(email,password);
    const uid = userCred.user.uid; 
    // check role from users collection
    const doc = await db.collection('users').doc(uid).get();
    if(!doc.exists){
      // create basic profile if missing
      await db.collection('users').doc(uid).set({email,role:'student',group});
      localStorage.setItem('group',group);
      window.location = `pages/student.html?group=${encodeURIComponent(group)}`;
      return;
    }
    const data = doc.data();
    const role = data.role || 'student';
    localStorage.setItem('group', group);
    if(role==='teacher') window.location='pages/teacher.html';
    else if(role==='assistant') window.location='pages/assistant.html';
    else window.location=`pages/student.html?group=${encodeURIComponent(group)}`;
  }catch(err){alert(err.message)}
});
