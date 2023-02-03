if (true) {
    console.log("Hola")
}   //Aqui la condición es verdadera por lo que se mostrara el hola
else {
    console.log("soy falso")
} // muestra el soy falaso ya que la condición es falsa
//ejemplo
var frutas = ["manzanas","manzanas","cerezas","fresa"];
// Arrays empiezan desde el 0 en adelante, el primero es el0

var frutas = frutas.push("Uvas"); //el metodo push agrega elementos al final del array, aqui nos agrega uvas

var ultimo = frutas.pop("Uvas"); // Este .pop elimina el ultimo array en este caso uvas.

var nuevaLongitud = frutas.unshift("Uvas");
// Envia el dato al princpio del array

var borrarFruta = frutas.shift("Uvas")
// Elimina el primer array

var posicion = frutas.indexOf("Cereza")
// Muestra la posición de un elemento en el array, esta posición se le conoce como index
