// // Fuction fecha
// function timeEvents(event,date){
//     let time;
//     if (event.date < date) {
//         time;
//     } else if (event.date > date) {
//         time;
//     }
// }


// // Function card todos los eventos
// function allEvents(events) {
//   for (let event of events) {
//     let div = document.createElement("div");
//     div.classList = "card p-2 m-3";
//     div.innerHTML = `
//             <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
//             object-fit: cover;" alt="${event.name}">
//             <div class="card-body text-center">
//             <h2 class="card-title"><strong>${event.name}</strong></h2>
//             <p class="card-text">${event.description}</p>
//             <p class="card-price"><strong>Price: </strong>${event.price}</p>
//             <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
//         </div>`;
//     fragment.appendChild(div);
//   }
//   CardsHome.appendChild(fragment);
// }

// // Fuction eventos pasados
// function pastEvents(events, date) {
//   for (let event of events) {
//     // let div=document.createElement('div');
//     // div.classList='col';
//     //
//     // if (event.date < date) {
//       let div = document.createElement("div");
//       div.classList = "card p-2 m-3";
//       div.innerHTML = `
//             <img src="${event.image}" class="card-img-top" alt="${event.name}">
//             <div class="card-body">
//                 <h2 class="card-title"><strong>${event.name}</strong></h2>
//                 <p class="card-text">${event.description}</p>
//                 <p class="card-price"><strong>Price: </strong>${event.price}</p>
//                 <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
//             </div>`;
//       fragment.appendChild(div);
//     // }
//   }
//   CardsPastEvents.appendChild(fragment);
// }

// // Fuction eventos futuros
// function upcomingEvents(events, date) {
//   for (let event of events) {
//     // if (event.date > date) {
//       let div = document.createElement("div");
//       div.classList = "card p-2 m-3 ";
//       div.innerHTML = `
//         <img src="${event.image}" class="card-img-top" alt="${event.name}">
//         <div class="card-body">
//             <h2 class="card-title"><strong>${event.name}</strong></h2>
//             <p class="card-text">${event.description}</p>
//             <p class="card-price"><strong>Price: </strong> ${event.price}</p>
//             <a href="./details.html" class="btn btn-primary" id="botoncards">Details</a>
//         </div>`;
//       fragment.appendChild(div);
//     // }
//   }
//   CardsUpcomingEvents.appendChild(fragment);
// }

//FILTROS

// export function superFiltro(){
//   let primerFiltro = filtrarPorTexto(data,input.value)
//   let segundoFiltro = filtrarPorPais(primerFiltro)
//   pintarPersonas(segundoFiltro)
// }

// export function crearCheckBoxes(array){
//   let arrayCountrys = array.events.map(persona => persona.category)
//   // console.log(arrayCountrys) 
//   let setCountry = new Set(arrayCountrys)
//   // console.log(setCountry) 
//   let arrayChecks = Array.from(setCountry)
//   // console.log(arrayChecks) 
//   let checkboxes = ''
//   arrayChecks.forEach(category => {
//      checkboxes += `<div class="form-check form-switch">
//        <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
//        <label class="form-check-label" for="${category}">${category}</label>
//      </div>`
//   })
//   contenedorCheck.innerHTML = checkboxes
// // }

// export function pintarPersonas(array){
//   if(array.length == 0){
//       contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
//       return
//   }
//   let tarjetas = ''
//   array.forEach(persona => {
//       tarjetas += `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
//       <div class="card-header">${persona.email}</div>
//       <div class="card-body">
//           <h5 class="card-title">${persona.name}</h5>
//           <p class="card-text">${persona.text}</p>
//           <p class="card-text fw-bolder text-end text-danger">${persona.country}</p>
//       </div>
//   </div>`
//   })
//   contenedor.innerHTML = tarjetas
// }

// export function filtrarPorTexto(array,texto){
//   let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
//   return arrayFiltrado
// }

// export function filtrarPorPais(array){
//   let checkboxes = document.querySelectorAll("input[type='checkbox']")
//   console.log(checkboxes);
//   let arrayChecks = Array.from(checkboxes)
//   let arrayChecksChecked = arrayChecks.filter(check => check.checked)
//   console.log(arrayChecksChecked);
//   let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
//   console.log(arrayChecksCheckedValues);
//   let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
//   console.log(arrayFiltrado);
//   if(arrayChecksChecked.length > 0){
//       return arrayFiltrado
//   }
//   return array
// }
