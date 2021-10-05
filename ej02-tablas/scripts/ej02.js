//alert("Funciona")
function getListado(){
    let sitios =[{nombre: "Universidad de Murcia",
                  web: "https://www.um.es"},
                 {nombre: "Instituto José Planes",
                  web:"http://www.iesjoseplanes.es"},
                 {nombre: "Universidad Católica San Antonio de Murcia",
                 web: "http://www.ucam.edu"}]

    return sitios
}

//recuperar la tabla vacia para el listado
const cuerpo = document.querySelector("#tablaListado>tbody")

//por cada elemento del listado insertar una fila nueva
let listado = getListado()
for(let i=0; i<listado.length; i++){
    let nuevaFila = cuerpo.insertRow()
    let nuevaCelda1 = nuevaFila.insertCell()
    let nuevaCelda2 = nuevaFila.insertCell()
    nuevaCelda1.textContent = listado[i].nombre
    nuevaCelda2.innerHTML = '<a href="'+listado[i].web+'">' + listado[i].web + "</a>"
}

