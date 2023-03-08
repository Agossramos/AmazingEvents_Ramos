import data from "./amazing.js";

const CardsHome = document.getElementById('cardsHome');
let fragment = document.createDocumentFragment();
function allEvents(events) {
    for (let event of events) {
        let div = document.createElement('div');
        div.classList='card p-2 m-3';
        div.innerHTML=`
            <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
            object-fit: cover;" alt="${event.name}">
            <div class="card-body text-center">
            <h2 class="card-title"><strong>${event.name}</strong></h2>
            <p class="card-text">${event.description}</p>
            <p class="card-price"><strong>Price: </strong>${event.price}</p>
            <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
        </div>`;
        fragment.appendChild(div);
    }
    CardsHome.appendChild(fragment);
}
let cards = allEvents(data.events);

