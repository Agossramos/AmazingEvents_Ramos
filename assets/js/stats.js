import { firstTabla, completeTable, groupByCategory } from "../js/functions.js";

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
        completeTable(firstTabla(eventsList), tbody1); //genero la primera tabla
      groupByCategory(upcomingEvents, tbody2);
      groupByCategory(pastEvents, tbody3);
    });
}getEvents();
