import { primeraTabla, segundaTabla, sacarCategorys, llenarTabla, revenuesUpComming} from "../js/functions.js";

const tbody1 = document.getElementById("tbody1");
const tbody2 = document.getElementById("tbody2");
// const tbody3 = document.getElementById("tbody3");

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      llenarTabla(primeraTabla(eventsList), tbody1); //genero la primera tabla
      let categorys = sacarCategorys(eventsList); //genero la segunda tabla
      llenarTabla(segundaTabla(eventsList, categorys), tbody2);
    }).catch((err) => console.error(err));
}getEvents();

async function getEvents2() {
    await fetch("../assets/data/amazing.json")
      .then((response) => response.json())
      .then((data) => {
        let eventsList = data.events;
        let categorys = sacarCategorys(eventsList); //genero la segunda tabla
        llenarTabla(segundaTabla(eventsList, categorys), tbody2);
      }).catch((err) => console.error(err));
  }getEvents2();


