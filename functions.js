var datos = [];
var frecuencia;
var vVarianza = 0;
//funcion que agrega los datos
function agregar(){
    let dato = document.getElementById('entrada').value;
    datos.push(parseInt(dato));
    alert("dato agregado!");
}
//funcion que muestra los datos
function mostrar() {
    alert(datos);
}
//esta funcion ordena los datos del arreglo
function ordenar(){
    datos = datos.sort((a, b) => a - b);
    alert("datos ordenados correctamente!");
}
//esta funcion calcula el maximo del conjunto de datos
function maximo(){
    alert(datos[datos.length-1]);
}
//esta funcion calcula el minimo del conjunto de datos
function minimo(){
    alert(datos[0]);
}
//esta funcion calcula el rango del conjunto de datos
function rango(){
    alert((datos[datos.length - 1])-datos[0]);
}
//esta funcion calcula la media 
function media(){
    let total = datos.reduce((a, b) => a + b, 0);
    alert(total/datos.length);
}
//esta funcion calcula la moda
function moda(){
    frecuenciaAbs();
    var frecOrdenada = [];
    for(i = 0;i < frecuencia.length; i++){
        frecOrdenada[i] = frecuencia[i];
    }
    //console.log(frecOrdenada);
    //console.log(frecuencia);
    frecOrdenada = frecOrdenada.sort((a, b) => a - b);
    //console.log(frecOrdenada);
    fmoda = frecOrdenada[frecOrdenada.length-1];
    //console.log(fmoda);
    const found = frecuencia.indexOf(fmoda);
    //console.log(found);
    alert(found);
}
//esta funcion calcula la frecuencia
function frecuenciaAbs(){ 
    frecuencia = new Array(parseInt(datos[datos.length - 1]) + 1);
    frecuencia.fill(0);
    for (i = 0; i < frecuencia.length; i++) {
        for (j = 0; j < datos.length; j++) {
            if (i == datos[j]) {
                frecuencia[i] += 1;
            }
        }
    }
}
//esta funcion calcula la mediana
function mediana(){
    alert(datos[Math.floor(datos.length / 2)]);
}
//funcion que calcula la varianza
function varianza(){
    var media = datos.reduce((a, b) => a + b, 0) / datos.length;
    var suma = 0;
    for(i = 0; i <datos.length;i++){
        suma += (datos[i] - media) * (datos[i] - media);
    }
    vVarianza = suma/(datos.length);
    alert(vVarianza);
}
//funcion que calcula la desviacion estandard
function desvEst(){
    console.log(vVarianza);
    alert(Math.sqrt(vVarianza));
}
//funcion que calcula la frecuencia relativa
function frecRel(){
    frecuenciaAbs();
    fRel = new Array(frecuencia.length);
    for(i = 0; i < frecuencia.length; i++){
        fRel[i] = frecuencia[i]/datos.length;
    }
    alert(fRel);
}
//funcion que calcula la frecuencia acumulada
function frecAc(){
    frecuenciaAbs();
    fAcumulada = new Array(frecuencia.length);
    for (i = 1; i < frecuencia.length; i++) {
        j=i-1;
        fAcumulada[i] = frecuencia[i]+(frecuencia[j]);
    }
    fAcumulada.splice(0, 0, '0');
    alert(fAcumulada);
}
//funcion que calcula la frecuencia relativa proporcional
function frecRelPor(){
    frecuenciaAbs();
    fRelPor = Array(frecuencia.length);
    for(i =0; i<frecuencia.length;i++){
        fRelPor[i] = (frecuencia[i] / datos.length)*100;
    }
    alert(fRelPor);
}
//funcion que calcula la frecuencia relativa acumulada
function frecRelAc() {
    frecuenciaAbs();
    frecRel();
    fRelAcum = new Array(frecuencia.length);
    for (i = 0; i < frecuencia.length; i++) {
        fRelAcum[i] = (fRel[i] / datos.length);
    }
}
//funcion que vacia el conjunto de datos
function Empty(){
    while(datos.length > 0){
        datos.pop();
    }
    if (datos.length == 0){
        alert("Datos eliminados");
    }
}
//este metodo genera la tabla de frecuencias y la muestra
function genTableFrec() {
    alert("esta funcion esta desactivada por el momento hasta la siguiente versión :c");
    /*
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var div = document.createElement("div");
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var header = document.createElement("tr");
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        hilera.setAttribute("class", "table table-hover");
        for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("class", "table table-hover");
    */
}
