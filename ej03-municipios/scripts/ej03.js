//console.log(provincias)

//for (let i=1; i<=provincias.length; i++){
   // console.log(provincias[i])
//}
const selectProvincias = document.querySelector("#provincias")

for (let i in provincias) {
    //console.log(`La provincia con clave ${i} es ${provincias[i]}`)
    let nuevoOption = document.createElement("OPTION")
    nuevoOption.textContent = provincias[i]
    nuevoOption.value = i
    selectProvincias.append(nuevoOption)
}

selectProvincias.addEventListener(
    "change",
    function() {
console.log(this.children[this.selectedIndex].value)
    }
)