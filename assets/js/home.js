import data from "./amazing.js";
console.log(data);
const divCardsIndex = document.getElementById('cardsIndex');
let fragmento = document.createDocumentFragment();
function allEvents(events) {
    for (let event of events) {
        let div = document.createElement('div');
        div.classList='card mx-2 my-2';
        div.innerHTML=`
            <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
            object-fit: cover;" alt="${event.category}">
            <div class="card-body text-center">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-price">Price: ${event.price}</p>
            <a href="./details.html" class="btn btn-primary" id="">Details</a>
        </div>`;
        fragmento.appendChild(div);
    }
    divCardsIndex.appendChild(fragmento);
}
let cards = allEvents(data.events);

