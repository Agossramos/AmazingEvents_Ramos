import data from "./amazing";
const divCardsUpcomingEvents=document.getElementById ('cardUpcomingEvents');
let fragmento= document.createDocumentFragment();
function upcomingEvents (events, date){
    for (let event of events){
        if (event.date > date){
        let div=document.createElement('div');
        div.classList='card p-3 m-2';
        div.innerHTML=`
        <img src="${event.image}" class="card-img-top" alt="${event.category}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-price">${event.price}</p>
            <a href="./details.html" class="btn btn-primary">Go somewhere</a>
        </div>`;
        fragmento.appendChild(div);
        }
    }
    divCardsUpcomingEvents.appendChild(fragmento);
}
let cards=upcomingEvents(data.events, data,currentDate);