const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = document.getElementById('su_name').value;
  const email = document.getElementById('su_email').value;
  const pass = document.getElementById('su_pass').value;
  const group = document.getElementById('su_group').value;
  const role = document.getElementById('su_role').value || 'student';
  try{
    const userCred = await auth.createUserWithEmailAndPassword(email,pass);
    const uid = userCred.user.uid;
    await db.collection('users').doc(uid).set({name,email,group,role,paid:false,present:false,rating:0});
    alert('Account created. Now login.');
    window.location='index.html';
  }catch(err){alert(err.message)}
});
