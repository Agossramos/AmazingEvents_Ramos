import data from "./amazing.js";

const contenedor = document.getElementById("contenedor");
const contenedorCheck = document.getElementById("checkContainer");
const input = document.querySelector("#input");

// input.addEventListener("input", superFiltro);

// contenedorCheck.addEventListener("change", superFiltro);

addCardsEvents(data);
createCheckBoxs(data);

input.addEventListener("input", () => {
  let primerFiltro = filterOfText(data, input.value);
  // // let segundoFiltro = filterOfCategory(primerFiltro);
  addCardsEvents(segundoFiltro);
});

contenedorCheck.addEventListener("change", () => {
  //   let primerFiltro = filterOfText(data,input.value);
  // // let segundoFiltro = filterOfCategory(primerFiltro);
  //   addCardsEvents(segundoFiltro);
});

// function superFiltro() {
//   let primerFiltro = filterOfText(data, input.value);
//   let segundoFiltro = filterOfCategory(primerFiltro);
//   addCardsEvents(segundoFiltro);
// }

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

function addCardsEvents(array) {
  if (array.length == 0) {
    contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
    return;
  }
  let cards = "";
  array.events.forEach((event) => {
    cards += `<img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
                object-fit: cover;" alt="${event.name}">
                <div class="card-body text-center">
                <h2 class="card-title"><strong>${event.name}</strong></h2>
                <p class="card-text">${event.description}</p>
                <p class="card-price"><strong>Price: </strong>${event.price}</p>
                <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
            </div>`;
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


// const CardsPastEvents = document.getElementById("cardPastEvents");
// let fragment = document.createDocumentFragment();
// // function pastEvents(events, date) {
// //     for (let event of events) {
// //     // let div=document.createElement('div');
// //     // div.classList='col';
// //     //
// //     if (event.date < date) {
// //         let div = document.createElement("div");
// //         div.classList = "card p-2 m-3";
// //         div.innerHTML = `
// //             <img src="${event.image}" class="card-img-top" alt="${event.name}">
// //             <div class="card-body">
// //                 <h2 class="card-title"><strong>${event.name}</strong></h2>
// //                 <p class="card-text">${event.description}</p>
// //                 <p class="card-price"><strong>Price: </strong>${event.price}</p>
// //                 <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
// //             </div>`;
// //         fragment.appendChild(div);
// //     }
// //     }
// //     CardsPastEvents.appendChild(fragment);
// // }
// let cards = pastEvents(data.events, data.currentDate);
