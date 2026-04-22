async function buscar(){
const t=document.getElementById("buscar").value;
const snap=await db.collection("alumnos").get();
let html="";
snap.forEach(doc=>{
let d=doc.data();
if(d.nombre.includes(t)||doc.id.includes(t)||d.carrera.includes(t)){
html+=`<div class="card">
<h3>${d.nombre}</h3>
<p>${doc.id}</p>
<button onclick="eliminar('${doc.id}')">Eliminar</button>
</div>`;
}
});
document.getElementById("lista").innerHTML=html;
}

async function eliminar(id){
await db.collection("alumnos").doc(id).delete();
alert("Eliminado");
}
