var articulos = [
    {nombre:"bici", costo: 3000},
    {nombre:"tv", costo: 2500},
    {nombre:"Libro",costo: 320},
    {nombre:"Celular",costo: 1000},
    {nombre:"Laptop",costo: 2500},
    {nombre:"Teclado",costo: 500},
    {nombre:"Audifonos",costo: 1700},];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
}); // Me trae todos los articulos con costo de 500 o igual pero con el obecto de cada array
// El filter sirve para filtrar un array, este se guarda en una variable, al invocar la variabe muestra los elementos que coincidan con esto.
// Este filter genera un nuevo array con las coincidencias generadas, este se guarda en la variable creada articulosFiltrados

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
}); //Este al igual que otro crea un array pero no con los obejetos si no con los nombres de cada uno, este sirve es para mapear los array

var encuentraArticulo = articulos.find(function(articulo){
    return
})