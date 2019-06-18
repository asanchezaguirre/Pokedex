// Función que consume API Pokemon
$.ajax({
  url: "https://pokeapi.co/api/v2/",
  type: "GET",
  dataType: "JSON",
  success: function( data ) {
      console.log(data);
  }
});

// función que pinta en html cada pokemon
function paintPokemonCard(pokemon){
  let card = '';
  card +=
  `<section class="col-lg-3 col-8 pokemon-card" data-toggle="modal" data-target="#pokemon-detail" data-id="${pokemon.id}">
    <div class="card">
      <img class="card-img-top img-fluid rounded mx-auto d-block" src="${pokemon.image}" alt="pokemon-${pokemon.name}">
      <div class="card-body">
        <h2 class="text-center">${pokemon.name}</h2>
      </div>
    </div>
  </section>`

  $('#pokemons-container').append(card)
}

// función que filtra los pokemones
function filterPokemons(){
  let searchPokemon = $filterInput.val().toLowerCase();
  $('#pokemons-container').empty();
  if($filterInput.val().trim().length > 0){
    var filteredPokemons = JSON.parse(localStorage.getItem('data-pokemon')).filter( pokemon => {
      let nameMatch = pokemon.name.toLowerCase().indexOf(searchPokemon) >=0
      return nameMatch
    }).forEach(pokemon => {
      paintPokemonCard(pokemon)
    })
    $('#pokemons-container:empty').html('<p class="h1">Lo sentimos, no encontramos coincidencias <i class="fa fa-frown-o" aria-hidden="true"></i></p>');
  } else {
    $('#pokemons-container').empty();
    JSON.parse(localStorage.getItem('data-pokemon')).forEach(pokemon => {
      paintPokemonCard(pokemon)
    })
  }
}
