let URL = "https://pokeapi.co/api/v2/pokemon/"

let container = document.querySelector(".container");
let measures = document.querySelector(".measures");
const typeButtons = document.querySelectorAll(".btn-nav");

//Muestra todos los pkmn
async function fetchPokemon(){
    for (let i = 1; i <= 151; i++){
        const response = await fetch(URL + i);
        const data = await response.json();
        showPokemon(data);
    }
}

//Muestra todos los pkmn con atributo normal


function showPokemon(pokemon) {
    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    
    let pokemonId = idFormater(pokemon.id);
    let pokemonNombre = (pokemon.name).toUpperCase();
    let types =  "";
    let height = pokemon.height/10;
    let weight = pokemon.weight/10;
    
    pokemon.types.forEach(type => {
        //console.log(type.type.name); linea solo para debuguear 
        let pokemonType = (type.type.name);
        types = types +`
            <button class="info ${pokemonType}">
                ${pokemonType.toUpperCase()}
            </button>
        `
      });
    

    pokemonCard.innerHTML = `
        <h1>
            #${pokemonId}
        </h1>
        <img class="pokemon-image" 
        src="${pokemon.sprites.other["official-artwork"].front_default}" 
        alt="imagen de ${pokemonNombre}">
        <div class="nombre-id">
            <button class="btn info">
                #${pokemonId}
            </button>
            <h2>
                ${pokemonNombre}
            </h2>
        </div>
        <div class="types">
            ${types}
        </div>
        <div class="measures">
            <button class="btn info">
                ${height} M
            </button>
            <button class="btn info">
                ${weight} KG
            </button>
        </div>
    `;
    container.append(pokemonCard);
}

function idFormater(idNumber) {
    if(idNumber < 10){
        return "00"+idNumber
    }else if (idNumber < 100){
        return "0"+idNumber
    }
    return idNumber;
}

fetchPokemon(); // Ejecucion inicial para mostrar todos los Pkmn

typeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        container.innerHTML = "";
        const botonId = e.currentTarget.id;
        if(botonId == "show-all"){
            fetchPokemon();
            return;
        }

        async function fetchPokemonByType(){
            for (let i = 1; i <= 151; i++){

                const response = await fetch(URL + i);
                const data = await response.json();
                data.types.forEach(type => {
                    //console.log(type.type.name);
                    if(type.type.name == botonId){
                        showPokemon(data);
                    }
                  });
                //
                
            }

        }
        fetchPokemonByType();
    })
    
})