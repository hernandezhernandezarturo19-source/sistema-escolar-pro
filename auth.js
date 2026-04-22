async function login(){
const c=document.getElementById("control").value;
const p=document.getElementById("password").value;
const email=c+"@ith.com";
try{
await auth.signInWithEmailAndPassword(email,p);
const admin=await db.collection("admins").doc(c).get();
if(admin.exists){
location="admin.html";
}else{
location="dashboard.html";
}
}catch(e){
document.getElementById("error").innerText="Error login";
}
}
