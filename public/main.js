
//Vamos a acceder a una api de perros que nos permite listar las razas
import fetch from "node-fetch";
const API = "https://dog.ceo/api/breeds/list/all";

//Por defecto fetch hace una petición get
/*
*   Yo podria hacerlo solo con fetch, pero lo mejor
*   es tenerlo en funciones separadas por si requiero especificar
*   algunos atributos, como indicar si es POST. 
*/

//Primera versión
// fetch(API)
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(console.log("Petición get fallida."))

//Vamos a trabajarlo con funciones separadas
const getDataRazas = function (apiUrl){
    //fetch es un promesa.
    return fetch(apiUrl);
}

//Llamamos a nuestra función que contiene la promesa
let razas;
getDataRazas(API)
    .then(response => response.json()) //Convertimos a JSON
    //.then(json => console.log(json)) //Imprimimos el json
    .then(data => { 
        //Guardamos el valor en una variable externa
        razas = data;
        //Debe ser impresa aqui, porque todo es asincrono.
        //Si tratamos de imprimir por fuera eso se ejecuta antes de la promesa.
        console.log(razas);
    })
    .catch(() => console.log("Petición get fallida.")) //En caso de que falle.


//Debemos ejecutar una función que imprima la data en pantalla
function printData(data){
    console.log(data)
}

printData(culo)