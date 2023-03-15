import data from "./amazing.js";

const contenedor = document.getElementById("contenedor");
const contenedorCheck = document.getElementById("checks");
const input = document.querySelector("#input");
let date= data.currentDate;
// input.addEventListener("input", superFiltro);

// contenedorCheck.addEventListener("change", superFiltro);

addCardsEvents(data, date);
createCheckBoxs(data);

input.addEventListener("input", () => {
  let primerFiltro = filterOfText(data, input.value);
  // // let segundoFiltro = filterOfCategory(primerFiltro);
  addCardsEvents(segundoFiltro, date);
});

contenedorCheck.addEventListener("change", () => {
  //   let primerFiltro = filterOfText(data,input.value);
  // // let segundoFiltro = filterOfCategory(primerFiltro);
  //   addCardsEvents(segundoFiltro, date);
});

// function superFiltro() {
//   let primerFiltro = filterOfText(data, input.value);
//   let segundoFiltro = filterOfCategory(primerFiltro);
//   addCardsEvents(segundoFiltro, date);
// }

// function timeEvents(event,date){
//       let time;
//       if (event.date < date) {
//           time;
//       } else if (event.date > date) {
//           time=false;
//       }
//         return time;
//   }

function createCheckBoxs(array) {
  let arrayCountrys = array.events.map((event) => event.category);
  let setCountry = new Set(arrayCountrys);
  let arrayChecks = Array.from(setCountry);
  let checkboxs = "";
  arrayChecks.forEach((category) => {
    checkboxs += `<div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
         <label class="form-check-label" for="${category}">${category}</label>
       </div>`;
  });
  contenedorCheck.innerHTML = checkboxs;
}

function addCardsEvents(array,date) {
  if (array.length == 0) {
    contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
    return;
  }
  let cards = "";
  array.events.forEach((event) => {
    // if (timeEvents(event,date)==true){
    //   console.log("past");
    if (event.date < date) {
              cards += `<div class="card text-bg-light mb-3" style="max-width: 30rem;">
                <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
                object-fit: cover;" alt="${event.name}">
                <div class="card-body text-center">
                <h2 class="card-title"><strong>${event.name}</strong></h2>
                <p class="card-text">${event.description}</p>
                <p class="card-price"><strong>Price: </strong>${event.price}</p>
                <a href="./details.html?id=${event._id}" class="btn btn-primary" id="botoncards">Details</a>
            </div>
            </div>`;
    }
  });
  contenedor.innerHTML = cards;
}

function filterOfText(array, text) {
  let arrayFiltrado = array.events.filter((elemento) =>
    elemento.name.toLowerCase().includes(text.toLowerCase())
  );
  return arrayFiltrado;
}

function filterOfCategory(array) {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes);
  let arrayChecksChecked = arrayChecks.filter((check) => check.checked);
  console.log(arrayChecksChecked);
  let arrayChecksCheckedValues = arrayChecksChecked.map(
    (checkChecked) => checkChecked.value
  );
  console.log(arrayChecksCheckedValues);
  let arrayFiltrado = array.events.filter((elemento) =>
    arrayChecksCheckedValues.includes(elemento.category)
  );
  console.log(arrayFiltrado);
  if (arrayChecksChecked.length > 0) {
    return arrayFiltrado;
  }
  return array;
}
