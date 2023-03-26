const tbody1 = document.getElementById('tbody1')

fetch("../assets/data/amazing.json")
  .then((response) => response.json())
  .then((data) => {
    let eventsList = data.events;
    createRow(tablaUno(eventsList), tbody1);  //genero la primera parte de la tabla
    let categorys = sacarCategorys(eventsList); //genero la segunda parte de la tabla 
    tablaDos(categorys); 
  });

//saco los valores que van en la primera parte de la tabla
function tablaUno(array){
    // let animeViejo =  array.sort((a, b) => a.capacity - b.capacity)[0].name

    let mayorCapacidad = array.sort((a,b) => b.capacity - a.capacity)[0].name
    let aMenosEpisodios = array.reduce((prev, current) => (prev.episodes < current.episodes) ? prev : current).name
    let aMasEpisodios = array.reduce((prev, current) => (prev.episodes > current.episodes) ? prev : current).name

    let resultado = {
        // animeMasViejo: animeViejo,
        eventoMayorCapacidad: mayorCapacidad,
        animeConMenosEpisodios: aMenosEpisodios,
        animeConMasEpisodios: aMasEpisodios,
    }
    return resultado
}
//saco la categoria
function sacarCategorys(array){
    return [...new Set((array.map(item => item.category).flat()).map(item => item.toLowerCase()))]
}

// function tablaDos( arrayAnimes, arrayGeneros ){
//     let animesXgenero = arrayGeneros.forEach(genero => arrayAnimes.filter(anime => anime.genre[0].toLowerCase() == genero ))
//     console.log(animesXgenero)
// }

//creo la primeras filas
function createRow(datos, container){
    let tr = document.createElement("tr")
    for (let clave in datos){
        console.log(datos[clave])
        let td = document.createElement("td")
        td.innerText = datos[clave]
        tr.appendChild(td)
    }
    container.appendChild(tr)
}
//saco el porcentaje de asistencia y estimated
function percentageDeAssistance(array){
    for (let indice in array){
    let percentage = (array.assistance / array.capacity) * 100;
    }

}

