var estudiantes = ["Maria","Sergio","Rosa","Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for (var i=0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]) // Aqui manda el numero en el momento de que cumple la condicion y activa la funcion saludarestudiantes
    
}
for (var estudiante of estudiantes) { //Aqui tenemos un array y con el primero lo recorremos
    saludarEstudiantes(estudiante);
    
} // el primer valor es un singular de un array, permite recorrer algo con muchas cosas. 