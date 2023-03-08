import data from "./amazing.js";

const CardsUpcomingEvents=document.getElementById('cardUpcomingEvents');
let fragment= document.createDocumentFragment();
function upcomingEvents (events, date){
    for (let event of events){
        if (event.date > date){
        let div=document.createElement('div');
        div.classList='card p-2 m-3 ';
        div.innerHTML=`
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h2 class="card-title"><strong>${event.name}</strong></h2>
            <p class="card-text">${event.description}</p>
            <p class="card-price"><strong>Price: </strong> ${event.price}</p>
            <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
        </div>`;
        fragment.appendChild(div);
        }
    }
    CardsUpcomingEvents.appendChild(fragment);
}
let cards=upcomingEvents(data.events, data.currentDate);