console.log(miNombre);

var miNombre = "Kevin" // Sale undefined debido a que el codigo que muestra el mensaje esta primero y luego se declara la variabel por lo cual en el mensaje no existe la variable

hey();
function hey(){
    console.log("Hola " + miNombre);
}
var miNombre = "Diego" // Lo que pasa es que la funcion se ejecuta primero antes que la declaración de variables
