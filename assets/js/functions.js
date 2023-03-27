const contenedor = document.getElementById("contenedor");
const contenedorCheck = document.getElementById("checks");

// Function cargar checks
export function createCheckBoxs(array) {
  let arrayCountrys = array.map((event) => event.category);
  let setCountry = new Set(arrayCountrys);
  let arrayChecks = Array.from(setCountry);
  let checkboxs = "";
  arrayChecks.forEach((category) => {
    checkboxs += `<div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
           <label class="form-check-label" for="${category}">${category}</label>
         </div>`;
  });
  contenedorCheck.innerHTML = checkboxs;
}

// Function card todos los eventos
export function addCardsEvents(events) {
  if (events.length == 0) {
    contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
    return;
  }
  let cards = "";
  events.forEach((event) => {
    cards += `<div class="card text-bg-light mb-3" style="max-width: 20rem;">
                  <img src="${event.image}" class="card-img-top mh-70 object-fit-cover" alt="${event.name}">
                  <div class="card-body text-center">
                    <h2 class="card-title"><strong>${event.name}</strong></h2>
                    <p class="card-text">${event.description}</p>
                    <p class="card-price"><strong>Price: </strong>${event.price}</p>
                    <a href="./details.html?id=${event._id}" class="btn btn-primary" id="botoncards">Details</a>
                  </div>
              </div>`;
  });
  contenedor.innerHTML = cards;
}

// Function eventos pasados
export function addCardsEventsPast(events, date) {
  if (events.length == 0) {
    contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
    return;
  }
  let cards = "";
  events.forEach((event) => {
    if (event.date < date) {
      cards += `<div class="card text-bg-light mb-3" style="max-width: 20rem;">
                    <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
                    object-fit: cover;" alt="${event.name}">
                    <div class="card-body text-center">
                      <h2 class="card-title"><strong>${event.name}</strong></h2>
                      <p class="card-text">${event.description}</p>
                      <p class="card-price"><strong>Price: </strong>${event.price}</p>
                      <a href="./details.html?id=${event._id}" class="btn btn-primary" id="botoncards">Details</a>
                    </div>
                  </div>`;
    }
  });
  contenedor.innerHTML = cards;
}

// Function eventos futuros
export function addCardsEventsUpComming(events, date) {
  if (events.length == 0) {
    contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
    return;
  }
  let cards = "";
  events.forEach((event) => {
    if (event.date > date) {
      cards += `<div class="card text-bg-light mb-3" style="max-width: 20rem;">
                  <img src="${event.image}" class="card-img-top mh-70 object-fit-cover;
                  object-fit: cover;" alt="${event.name}">
                  <div class="card-body text-center">
                  <h2 class="card-title"><strong>${event.name}</strong></h2>
                  <p class="card-text">${event.description}</p>
                  <p class="card-price"><strong>Price: </strong>${event.price}</p>
                  <a href="./details.html?id=${event._id}" class="btn btn-primary" id="botoncards">Details</a>
              </div>
              </div>`;
    }
  });
  contenedor.innerHTML = cards;
}

//FILTROS

//Filtrado por search
export function filterOfText(events, text) {
  let arrayFiltrado = events.filter((elemento) =>
    elemento.name.toLowerCase().includes(text.toLowerCase())
  );
  return arrayFiltrado;
}

//Filtrado por los checkboxs
export function filterOfCategory(array) {
  let checkboxs = document.querySelectorAll("input[type='checkbox']");
  let arrayChecks = Array.from(checkboxs);
  let arrayChecksChecked = arrayChecks.filter((check) => check.checked);
  let arrayChecksCheckedValues = arrayChecksChecked.map(
    (checkChecked) => checkChecked.value
  );
  let arrayFiltrado = array.filter((elemento) =>
    arrayChecksCheckedValues.includes(elemento.category)
  );
  if (arrayChecksChecked.length > 0) {
    return arrayFiltrado;
  }
  return array;
}

//FUNCTION PAGINA DETAILS

//lleno la cards details
export function createDetails(card, detailContainer) {
  let cards = "";
  cards += `<img id="imgDetails" src="${card.image}" class="img-fluid rounded-start" alt="${card.category}">
                  <class="card-body">
                    <h3 class="card-title"><strong>${card.name}</strong></h3>
                    <p class="card-text">${card.date}</p>
                    <p class="card-text">${card.description}</p>
                    <p class="card-text"><strong>CATEGORY:</strong> ${card.category}</p>
                    <p class="card-text"><strong>PLACE: </strong>${card.place}</p>
                    <p class="card-text"><strong>CAPACITY: </strong>${card.capacity}</p>
                    <p class="card-text"><strong>ASSISTENCE/ESTIMATE: </strong>${(card.assistence ? card.assistence : card.estimate)}</p>
                    <p class="card-text"><strong>PRICE: </strong>${card.price}</p>   
              </div>`;
  detailContainer.innerHTML = cards;
}

//FUNCTION PAGINA STATS

//genero todos los datos para la primera tabla
export function primeraTabla(array) {
  let aMenorAsistencia = array.reduce((prev, current) =>
    (prev.assistence ? prev.assistence : prev.estimate) > (current.assistence ? current.assistence : current.estimate) ? prev : current).name;
  let aMayorAsistencia = array.reduce((prev, current) =>
    (prev.assistence ? prev.assistence : prev.estimate) < (current.assistence ? current.assistence : current.estimate) ? prev : current).name;
  let mayorCapacidad = array.sort((a, b) => b.capacity - a.capacity)[0].name;

  let resultado = {
    eventConMenorAsistencia: aMenorAsistencia,
    eventConMayorAsistencia: aMayorAsistencia,
    eventoMayorCapacidad: mayorCapacidad,
  };
  return resultado;
}

//lleno la tabla
export function llenarTabla(datos, container) {
  let tr = document.createElement("tr");
  for (let indice in datos) {
    // console.log(datos[indice]);
    let td = document.createElement("td");
    td.innerText = datos[indice];
    tr.appendChild(td);
  }
  container.appendChild(tr);
}

//saco las categorias
export function sacarCategorys(array) {
  return [
    ...new Set(
      array
        .map((item) => item.category)
        .flat()
        .map((item) => item.toLowerCase())
    ),
  ];
}

//genero todos los datos para la segunda tabla
export function segundaTabla(arrayEvents, arrayGeneros) {
  let eventsXcategory = arrayGeneros.forEach((category) =>
    arrayEvents.filter((event) => event.category[0].toLowerCase() == category));
  revenuesUpComming(eventsXcategory); //falta el parametro del nombre de la categoria );
  return eventsXcategory;
}

//saco el porcentaje de asistencia y estimated
// export function percentage(array){
//   for (let indice in array){
//   let arrayPercentage= ((array[indice].assistance / array[indice].capacity) * 100);
//   return arrayPercentage;
//   }

//   console.log(arrayPercentage);
// }

//realizo la revenues del up comming 
export function revenuesUpComming (array, category){
  for (let indice in array){
    if (array[indice] == category){
      return revenues = ((array[indice].price) * (array[indice].estimate))
    }
    console.log(revenues)
  }
}

//genero todos los datos para la tercera tabla
export function terceraTabla(arrayEvents, arrayGeneros) {
  let eventsXcategory = arrayGeneros.forEach((category) =>
    arrayEvents.filter((event) => event.category[0].toLowerCase() == category));
  revenuesPast(eventsXcategory); //falta el parametro del nombre de la categoria );
  return eventsXcategory;
}

//realizo la revenues del past events 
export function revenuesPast (array, category){
  for (let indice in array){
    if (array[indice] == category){
      return revenues = ((array[indice].price) * (array[indice].assistence))
    }
    console.log(revenues)
  }
}