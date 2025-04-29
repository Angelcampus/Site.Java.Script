let button = document.getElementById("buttonPoke");
let container = document.getElementById("pokemonContainer");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150);
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString);
    let response = await data.json();
    // variable toute la carte pokemon
    let divPost = document.createElement("div");
    divPost.classList.add("wrapper");
    // creation de html dans le div post  sert à faire rentre le java `` 
        divPost.innerHTML = `
        <div class="imageWraper">
            <img class="imagePoke" src="${response.sprites.front_shiny}" alt="${response.name}" />   
            <div class="header">
                <div class="number">#${response.id}</div>
                <div class="name">${response.name}</div>
             </div>
        </div>
    `;
    // pour que divpost devienne enfant pour le mettre dans le html 
    container.appendChild(divPost);
};

buttonPoke.addEventListener("click", changePokemon);
