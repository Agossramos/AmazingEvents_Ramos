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
                    <h3 class="card-title"><strong>${card.name}</strong></h3>
                    <p class="card-text">${card.date}</p>
                    <p class="card-text">${card.description}</p>
                    <p class="card-text"><strong>CATEGORY:</strong> ${card.category}</p>
                    <p class="card-text"><strong>PLACE: </strong>${card.place}</p>
                    <p class="card-text"><strong>CAPACITY: </strong>${card.capacity}</p>
                    <p class="card-text"><strong>ASSISTENCE: </strong>${card.assistance}</p>
                    <p class="card-text"><strong>PRICE: </strong>${card.price}</p>   
              </div>`;
  detailContainer.innerHTML = cards;
}
