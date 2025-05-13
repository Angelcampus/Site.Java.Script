// JS INDEX
let button = document.getElementById("buttonPoke");
let container = document.getElementById("pokemonContainer");
let buttonReload = document.getElementById("reloadPokemon");
let buttonDevine = document.getElementById("buttonDevine");
let devineLePokemon = document.getElementById("devineLePokemon");
// let nombrePokemon=4;
const changePokemon = async () => {
// for(let i=0;i<nombrePokemon;i++){} 
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
changePokemon();
buttonPoke.addEventListener("click", changePokemon);
buttonReload.addEventListener("click", function () {
    container.innerHTML = ""; 
});


// JS GALERIE
function Changevue(type) {
       const gallery = document.getElementById('Galerie');
        gallery.className = 'Galerie ' + type;
        }
        function addImage(event) {
         const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;

        const item = document.createElement('div');
        item.className = 'item';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = '✖';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
        item.remove(); // Supprime toute la div .item
        };

        item.appendChild(img);
        item.appendChild(deleteBtn); // On ajoute le bouton dans l'image
        document.getElementById('Galerie').appendChild(item);
        };
        reader.readAsDataURL(file);
        }
