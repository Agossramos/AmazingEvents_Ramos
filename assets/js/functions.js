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
    contenedor.innerHTML = `<h4 class="display-1 fw-bolder">No matches</h4>`;
    return;
  }
  let cards = "";
  events.forEach((event) => {
    cards += `<div class="card text-bg-light" style="max-width: 20rem;">
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
    contenedor.innerHTML = `<h4 class="display-1 fw-bolder">No matches</h4>`;
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
    contenedor.innerHTML = `<h4 class="display-1 fw-bolder">No matches</h4>`;
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
                    <p class="card-text"><strong>CATEGORY:</strong> ${
                      card.category
                    }</p>
                    <p class="card-text"><strong>PLACE: </strong>${
                      card.place
                    }</p>
                    <p class="card-text"><strong>CAPACITY: </strong>${
                      card.capacity
                    }</p>
                    <p> <strong>${card.assistance ? "ASSISTANCE: " : "ESTIMATE: "}</strong>${card.assistance ? card.assistance : card.estimate}</p>
                    <p class="card-text"><strong>PRICE: </strong>${
                      card.price
                    }</p>   
              </div>`;
  detailContainer.innerHTML = cards;
}

//FUNCTION PAGINA STATS

//Función obtener el evento con mayor porcentage de asistencia
export function eventWithMostAssistance(array) {
  let eventWithHighestAttendance = "";
  let highestAttendancePercentage = -1;
  array.forEach((event) => {
    const percentage =
      ((event.assistance ? event.assistance : event.estimate) /
        event.capacity) *
      100;
    if (percentage > highestAttendancePercentage) {
      highestAttendancePercentage = percentage;
      eventWithHighestAttendance = event.name;
    }
  });
  return eventWithHighestAttendance;
}

//Función que obtiene el nombre del evento con menor asistencia
export function eventWithLowestAssistance(array) {
  let eventsWithLowestAttendance = "";
  let lowestAttendancePercentage = 101;
  array.forEach((event) => {
    const percentage =
      ((event.assistance ? event.assistance : event.estimate) /
        event.capacity) *
      100;
    if (percentage < lowestAttendancePercentage) {
      lowestAttendancePercentage = percentage;
      eventsWithLowestAttendance = event.name;
    }
  });
  return eventsWithLowestAttendance;
}

//Funcion calcular las ganancias totales
export function eventsRevenues(events) {
  let revenues = 0;
  events.forEach((event) => {
    const revenue =
      event.price * (event.assistance ? event.assistance : event.estimate);
    revenues += revenue;
  });
  return revenues;
}

//Funcion calcular el porcentaje de asistencia
export function calculateAttendancePercentage(events) {
  let totalAssistance = events.reduce((total, event) => {
    return total + (event.assistance ? event.assistance : event.estimate);
  }, 0);
  let capacity = events.reduce((cap, event) => {
    return cap + event.capacity;
  }, 0);
  return ((totalAssistance / capacity) * 100).toFixed(2);
}

//función para crear las filas con las columnas correspondientes en la tabla que le indiquemos y nos muestre
//las ganancias y el porcentaje de asistencia por categoría.
export function createTableRow(category,revenues,attendancePercentage,container) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${category}</td>
                  <td class="text-end">$${revenues}</td>
                  <td class="text-end">${attendancePercentage}%</td>`;
  container.appendChild(tr);
}

//genero todos los datos para la primera tabla
export function firstTabla(array) {
  let aMayorAsistencia = eventWithMostAssistance(array);
  let aMenorAsistencia = eventWithLowestAssistance(array);
  let mayorCapacidad = array.reduce((prevEvent, actualEvent) => {
    return (prevEvent.capacity > actualEvent.capacity) ? prevEvent : actualEvent;
}).name;

  let resultado = {
    eventConMayorAsistencia: aMayorAsistencia,
    eventConMenorAsistencia: aMenorAsistencia,
    eventMayorCapacidad: mayorCapacidad,
  };
  return resultado;
}

//lleno la tabla
export function llenarTabla(datos, container) {
  let tr = document.createElement("tr");
  for (let indice in datos) {
    let td = document.createElement("td");
    td.innerText = datos[indice];
    tr.appendChild(td);
  }
  container.appendChild(tr);
}

//saco las categorias
export function extractCategorys(array) {
  return [
    ...new Set(
      array
        .map((item) => item.category)
        .flat()
        .map((item) => item.toLowerCase())
    ),
  ];
}

//genero todos los datos para la segunda tabla y tercera
export function groupByCategory(array, container) {
  const groupedCategories = {};
  array.forEach((event) => {
      if (!groupedCategories[event.category]) {
      groupedCategories[event.category] = [];
      }
      groupedCategories[event.category].push(event);
  });

  for (const category in groupedCategories) {
      let events = groupedCategories[category];
      let revenues = eventsRevenues(events);
      let attendancePct = calculateAttendancePercentage(events);
      createTableRow(category, revenues, attendancePct, container);
  }
}

