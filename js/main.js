var val = document.getElementById('btn1');

var um = 0;

function nextPage(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => {urlApi = 'https://rickandmortyapi.com/api/character/' + ++um;
        fetch(urlApi)
        .then(response => response.json())
        .then(data => {
        var container = document.getElementsByTagName('main')[0];
        var element = document.createElement('div');
        console.log(data)
        element.innerHTML = `<div id="padre"> <div id="image"><img src ="${data.image}" ></div>
        <div id="info">
        <div id="nombre"><p>${data.name}</p></div>
        <div id="car"><h2> Species: ${data.species}</h2></div>
        <div id="car"><h2> Gender: ${data.gender}</h2></div>
        <div id="car"><h2> Status: ${data.status}</h2></div>
        </div></div>
        <div id = "salto"></div>
        `;
        container.appendChild(element);
    })

    })
}

function prevPage(urlApi){
    fetch(urlApi)
    .then(response => response.json())
    .then(data => {  um = um -1;
        urlApi = 'https://rickandmortyapi.com/api/character/' + um;
        fetch(urlApi)
        .then(response => response.json())
        .then(data => {
        

        var container = document.getElementsByTagName('main')[0];
        var element = document.createElement('div');

        element.innerHTML =`<div id="padre"> <div id="image"><img src ="${data.image}" ></div>
        <div id="info">
        <div id="nombre"> <p>${data.name}</p></div>
        <div id="car"><h2> Species: ${data.species}</h2></div>
        <div id="car"><h2> Gender: ${data.gender}</h2></div>
        <div id="car"><h2> Status: ${data.status}</h2></div>
        </div></div>
        <div id = "salto"></div>
        `;
        container.appendChild(element);
    })

    })
}


fetch('https://rickandmortyapi.com/api/character/1')
    .then(response => response.json())
    .then(data => console.log(data))