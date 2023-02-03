var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto : function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //This hace referencia al objecto padre, this = miAuto
    }
    }
    miAuto.annio // Trae el valor de esa palabra clave
miAuto.detalleDelAuto(); //Nos trae una funcion y muestra los elementos como el modelo y el año

