import { addCardsEventsPast, createCheckBoxs, filterOfCategory, filterOfText } from "../js/functions.js";

// const contenedor = document.getElementById("contenedor");
const contenedorCheck = document.getElementById("checks");
const input = document.querySelector("#input");

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      let date = data.currentDate;
      addCardsEventsPast(eventsList, date);
      let checksList = data.events;
      createCheckBoxs(checksList);
      let primerFiltro = filterOfText(eventsList, input.value);
      let segundoFiltro = filterOfCategory(primerFiltro);
      addCardsEventsPast(segundoFiltro, date);
    })
    .catch((err) => console.error(err));
}
getEvents();

input.addEventListener("input", getEvents);
contenedorCheck.addEventListener("change", getEvents);
