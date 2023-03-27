import { firstTabla, secondTabla, extractCategorys, llenarTabla, thirdTabla} from "../js/functions.js";

const tbody1 = document.getElementById("tbody1");
const tbody2 = document.getElementById("tbody2");
const tbody3 = document.getElementById("tbody3");

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      llenarTabla(firstTabla(eventsList), tbody1); //genero la primera tabla
    }).catch((err) => console.error(err));
}getEvents();

async function getEvents2() {
    await fetch("../assets/data/amazing.json")
      .then((response) => response.json())
      .then((data) => {
        let eventsList = data.events;
        let categorys = extractCategorys(eventsList); //saco las categorias sin repetir del json
        llenarTabla(secondTabla(eventsList, categorys), tbody2); //genero la segunda tabla
      }).catch((err) => console.error(err));
  }getEvents2();

  async function getEvents3() {
    await fetch("../assets/data/amazing.json")
      .then((response) => response.json())
      .then((data) => {
        let eventsList = data.events;
        let categorys = extractCategorys(eventsList); //saco las categorias sin repetir del json
        llenarTabla(thirdTabla(eventsList, categorys), tbody3); //genero la tercer tabla
      }).catch((err) => console.error(err));
  }getEvents3();

