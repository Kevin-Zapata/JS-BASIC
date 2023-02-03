var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`hola ${estudiante}`)
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
} //En este codigo lo que hace el shift es elminar todos los datos del array, poco a poco en los ciclos elimina

