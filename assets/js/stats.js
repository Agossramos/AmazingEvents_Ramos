import { firstTabla, llenarTabla, groupByCategory } from "../js/functions.js";

const tbody1 = document.getElementById("tbody1");
const tbody2 = document.getElementById("tbody2");
const tbody3 = document.getElementById("tbody3");

async function getEvents() {
  await fetch("../assets/data/amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      const currentDate= data.currentDate;
      let upcomingEvents = eventsList.filter((event) => {
        return event.date > currentDate;});
      let pastEvents = data.events.filter((event) => {
        return event.date < currentDate;});
      llenarTabla(firstTabla(eventsList), tbody1); //genero la primera tabla
      // let categorys = extractCategorys(eventsList); //saco las categorias sin repetir del json
      groupByCategory(upcomingEvents, tbody2);
      groupByCategory(pastEvents, tbody3);
      // llenarTabla(secondTabla(eventsList, categorys), tbody2); //genero la segunda tabla
      // llenarTabla(thirdTabla(eventsList, categorys), tbody3); //genero la tercer tabla
    });
    // .catch((err) => console.error(err))
}getEvents();

// async function getEvents2() {
//     await fetch("../assets/data/amazing.json")
//       .then((response) => response.json())
//       .then((data) => {
//         let eventsList = data.events;
//         let categorys = extractCategorys(eventsList); //saco las categorias sin repetir del json
//         llenarTabla(secondTabla(eventsList, categorys), tbody2); //genero la segunda tabla
//       }).catch((err) => console.error(err));
//   }getEvents2();

  // async function getEvents3() {
  //   await fetch("../assets/data/amazing.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let eventsList = data.events;
  //       let categorys = extractCategorys(eventsList); //saco las categorias sin repetir del json
  //       llenarTabla(thirdTabla(eventsList, categorys), tbody3); //genero la tercer tabla
  //     }).catch((err) => console.error(err));
  // }getEvents3();

