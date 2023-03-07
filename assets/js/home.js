import data from "./amazing";
const divCardsIndex = document.getElementById('cardsIndex');
let fragmento = document.createDocumentFragment();
function allEvents(events) {
    for (let event of events) {
        let div = document.createElement('div');
        div.classList='card mx-2 my-2';
        div.innerHTML=`
            <img src="${event.image}" class="card-img-top" alt="${event.category}">
            <div class="card-body text-center">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <div class="d-flex justify-content-between">
                    <p class="pt-2">Price: ${event.price}</p>
                    <a href="./pages/details.html" class="btn btn-nav align-self-center go">Let's Go</a>
                </div>
            </div>`;
        fragmento.appendChild(div);
    }
    divCardsIndex.appendChild(fragmento);
}
let cards = allEvents(data.events);