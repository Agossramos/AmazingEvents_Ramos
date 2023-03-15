import data from "./amazing.js";

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardId = params.get("id");
const card = data.events.find((card) => card._id == cardId);

let detailContainer = document.querySelector("#cardDetails");

createDetails(card, detailContainer);

function createDetails(card, detailContainer) {
  let cards = "";
  cards += `<img id="imgDetails" src="${card.image}" class="img-fluid rounded-start" alt="${card.category}">
                  <class="card-body">
                    <h4 class="card-title">${card.name}</h4>
                    <p class="card-text">${card.date}</p>
                    <p class="card-text">${card.description}</p>
                    <p class="card-text">CATEGORY: ${card.category}</p>
                    <p class="card-text">PLACE: ${card.place}</p>
                    <p class="card-text">CAPACITY: ${card.capacity}</p>
                    <p class="card-text">ASSISTENCE: ${card.assistance}</p>
                    <p class="card-text">PRICE: ${card.price}</p>   
              </div>`;
  detailContainer.innerHTML = cards;
}
