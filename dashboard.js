auth.onAuthStateChanged(async user=>{
if(!user){location="index.html";return;}
const control=user.email.split("@")[0];
const doc=await db.collection("alumnos").doc(control).get();
const d=doc.data();

document.getElementById("datos").innerHTML=`
<div class="card">
<h3>${d.nombre}</h3>
<p>${d.carrera}</p>
<p>${d.telefono}</p>
<p>Familiar: ${d.familiar.nombre}</p>
</div>
`;
});

function logout(){auth.signOut();location="index.html";}
