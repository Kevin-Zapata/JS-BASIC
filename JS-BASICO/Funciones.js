//Funciones declarativas
function miFuncion () {
    return 3;
}  // El sistema va reservar un espacio en la memoria para ralizar los calculos enesta
//Funciones de expresión

var miFuncion = function(a,b){
  
    return a + b;
} //Tambien se les conoce como variables anonimas, por que no se le esta asignando un nombre a la funcion, es generando una variable y se la asgina a la funcion

//Ejemploes
function saludar(estudiante){
    
    console.log(`hola ${estudiante}`);
    saludar("Diego")
}

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
sumar(1,2)