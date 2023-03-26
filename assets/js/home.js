import { addCardsEvents, createCheckBoxs, filterOfCategory, filterOfText } from "../js/functions.js";

// const contenedor = document.getElementById("contenedor");
const contenedorCheck = document.getElementById("checks");
const input = document.querySelector("#input");

fetch("../assets/data/amazing.json")
  .then((response) => response.json())
  .then((data) => {
    let eventsList = data.events;
    addCardsEvents(eventsList);
  });

fetch("../assets/data/amazing.json")
  .then((response) => response.json())
  .then((data) => {
    let checksList = data.events;
    createCheckBoxs(checksList);
  });

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      let primerFiltro = filterOfText(eventsList, input.value);
      let segundoFiltro = filterOfCategory(primerFiltro);
      addCardsEvents(segundoFiltro);
    })
    .catch((err) => console.error(err));
}
getEvents();

input.addEventListener("input", getEvents);
contenedorCheck.addEventListener("change", getEvents);

// function createCheckBoxs(array) {
//   let arrayCountrys = array.map((event) => event.category);
//   let setCountry = new Set(arrayCountrys);
//   let arrayChecks = Array.from(setCountry);
//   let checkboxs = "";
//   arrayChecks.forEach((category) => {
//     checkboxs += `<div class="form-check form-switch">
//          <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
//          <label class="form-check-label" for="${category}">${category}</label>
//        </div>`;
//   });
//   contenedorCheck.innerHTML = checkboxs;
// }

// function addCardsEvents(events) {
//   if (events.length == 0) {
//     contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
//     return;
//   }
//   let cards = "";
//   events.forEach((event) => {
//     cards += `<div class="card text-bg-light mb-3" style="max-width: 20rem;">
//                 <img src="${event.image}" class="card-img-top mh-70 object-fit-cover" alt="${event.name}">
//                 <div class="card-body text-center">
//                   <h2 class="card-title"><strong>${event.name}</strong></h2>
//                   <p class="card-text">${event.description}</p>
//                   <p class="card-price"><strong>Price: </strong>${event.price}</p>
//                   <a href="./details.html?id=${event._id}" class="btn btn-primary" id="botoncards">Details</a>
//                 </div>
//             </div>`;
//   });
//   contenedor.innerHTML = cards;
// }

// function filterOfText(events, text) {
//   let arrayFiltrado = events.filter((elemento) =>
//     elemento.name.toLowerCase().includes(text.toLowerCase())
//   );
//   return arrayFiltrado;
// }

// function filterOfCategory(array) {
//   let checkboxs = document.querySelectorAll("input[type='checkbox']");
//   let arrayChecks = Array.from(checkboxs);
//   let arrayChecksChecked = arrayChecks.filter((check) => check.checked);
//   let arrayChecksCheckedValues = arrayChecksChecked.map(
//     (checkChecked) => checkChecked.value
//   );
//   let arrayFiltrado = array.filter((elemento) =>
//     arrayChecksCheckedValues.includes(elemento.category)
//   );
//   if (arrayChecksChecked.length > 0) {
//     return arrayFiltrado;
//   }
//   return array;
// }
