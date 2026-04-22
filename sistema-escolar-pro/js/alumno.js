async function registrar(){
const c=document.getElementById("control").value;
const p=document.getElementById("password").value;
const email=c+"@ith.com";

const exist=await db.collection("alumnos").doc(c).get();
if(exist.exists){alert("Ya existe");return;}

await auth.createUserWithEmailAndPassword(email,p);

await db.collection("alumnos").doc(c).set({
nombre:document.getElementById("nombre").value,
curp:document.getElementById("curp").value,
telefono:document.getElementById("telefono").value,
carrera:document.getElementById("carrera").value,
familiar:{
nombre:document.getElementById("famNombre").value,
tel:document.getElementById("famTel").value,
parentesco:document.getElementById("famParentesco").value
}
});

alert("Registrado");
location="index.html";
}
