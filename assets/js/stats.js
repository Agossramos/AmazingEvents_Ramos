const tbody1 = document.getElementById("tbody1");
const tbody2 = document.getElementById("tbody2");
// const tbody3 = document.getElementById("tbody3");

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      llenarTabla(tablaUno(eventsList), tbody1); //genero la primera parte de la tabla
      let categorys = sacarCategorys(eventsList); //genero la segunda parte de la tabla
      llenarTabla(tablaDos(eventsList, categorys), tbody2);
      console.log(percentage(eventsList));
    }).catch((err) => console.error(err));
}getEvents();

//saco los valores que van en la primera parte de la tabla
function tablaUno(array){
    let aMenorAsistencia = array.reduce((prev, current) => ((prev.assistence ? prev.assistence : prev.estimate) > (current.assistence ? current.assistence : current.estimate)) ? prev : current).name
    let aMayorAsistencia = array.reduce((prev, current) => ((prev.assistence ? prev.assistence : prev.estimate) < (current.assistence ? current.assistence : current.estimate)) ? prev : current).name
    let mayorCapacidad = array.sort((a,b) => b.capacity - a.capacity)[0].name

    let resultado = {
        eventConMenorAsistencia: aMenorAsistencia,
        eventConMayorAsistencia: aMayorAsistencia,
        eventoMayorCapacidad: mayorCapacidad
    }
    return resultado
}

// saco la categoria
function sacarCategorys(array) {
  return [...new Set((array.map(item => item.category).flat()).map(item => item.toLowerCase()))];
}

function tablaDos(arrayEvents, arrayGeneros) {
  let eventsXgenero = arrayGeneros.forEach((genero) =>
    arrayEvents.filter((event) => event.category[0].toLowerCase() == genero));
  console.log(eventsXgenero);
}


function llenarTabla(datos, container) {
  let tr = document.createElement("tr");
  for (let clave in datos) {
    console.log(datos[clave]);
    let td = document.createElement("td");
    td.innerText = datos[clave];
    tr.appendChild(td);
  }
  container.appendChild(tr);
}
//saco el porcentaje de asistencia y estimated
function percentage(array){
    for (let indice in array){
    let arrayPercentage= ((array[indice].assistance / array[indice].capacity) * 100);
    return arrayPercentage;
    }
    
    console.log(arrayPercentage);
}
