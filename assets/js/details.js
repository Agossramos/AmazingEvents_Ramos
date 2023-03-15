import data from "./amazing.js";

const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardid = params.get("id");
const card = data.events.find((card) => card._id == cardid);
let detailContainer = document.querySelector("#cardDetails");
// console.log("holis");   
createDetails(card, detailContainer);

function createDetails(card, container) {
  let cards = "";
//   console.log("antes bucle");
//  let array= card.events;
  card.forEach((event) => {
    // console.log("bucle");
    cards += `<img id="imgDetails" src="${event.image}" class="img-fluid rounded-start" alt="${event.category}">
                <div class="card-body">
                    <h5 class="card-title">"${event.name}</h5>
                    <p class="card-text">"${event.date}</p>
                    <p class="card-text">"${event.description}</p>
                    <p class="card-text">"${event.category}</p>
                    <p class="card-text">"${event.place}</p>
                    <p class="card-text">"${event.capacity}</p>
                    <p class="card-text">"${event.estimate}</p>
                    <p class="card-text">"${event.price}</p>   
                </div>`;
  });
//   console.log("holis");
container.innerHTML = cards;
//   console.log("nnose");
}

// function details(events) {
//     for (let event of events) {
//     let div = document.createElement("div");
//     div.classList = "card pcard mb-3";
//     div.style.maxWidth = "540px";
//     div.innerHTML = `
//             <div class="col-md-4" id="fotocarddetails">
//                 <img id="imgDetails" src="${event.image}" class="img-fluid rounded-start"
//                             alt="${event.category}">
//             </div>
//             <div class="col-md-8">
//             <div class="card-body">
//                 <h5 class="card-title">"${event.name}</h5>
//                 <p class="card-text">"${event.date}</p>
//                 <p class="card-text">"${event.description}</p>
//                 <p class="card-text">"${event.category}</p>
//                 <p class="card-text">"${event.place}</p>
//                 <p class="card-text">"${event.capacity}</p>
//                 <p class="card-text">"${event.estimate}</p>
//                 <p class="card-text">"${event.price}</p>
//             </div>
//         </div>`;
//     fragmento.appendChild(div);
//     }
//     divCardsDetails.appendChild(fragmento);
// }
// let cards = details(data.events);
