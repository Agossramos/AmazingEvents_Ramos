import { createDetails} from "../js/functions.js";

let detailContainer = document.querySelector("#cardDetails");

fetch("../assets/data/amazing.json")
  .then((response) => response.json())
  .then((data) => {
    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let cardId = params.get("id");
    const card = data.events.find((card) => card._id == cardId);
    createDetails(card, detailContainer);
  });

