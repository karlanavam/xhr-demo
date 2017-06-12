var cargarPagina = function() {
    cargarPokemones();
    $(document).on("click", ".pokemon", cargarDetallesPokemones);
    $('.modal').modal();
};

var cargarPokemones = function() {
  var url ='http://pokeapi.co/api/v2/pokemon-species/';
  $.getJSON(url, function(response){
    var pokemons = response.results;
    crearPokemons(pokemons);
  });
};

var contador = 1;

function crearPokemons(pokemons) {
	var $section = $("#pokemons");

	pokemons.forEach(function (pokemon) {
        
		var $img = $("<img />");
        var $div = $("<div />");
        var $p = $("<p />");
        var $imgModalPokemon = $('.imgModalPokemon');
        
        $section.addClass("center-align");
        
        $div.addClass("pokemon center-align col s3");
        $div.attr('data-url', pokemon.url);
        
        $img.attr("src" ,'assets/img/' + contador + ".png");
        $img.addClass("center-align responsive-img imgPokemon");
        
        $p.text(pokemon.name);
        $p.addClass("center-align");
        
        $imgModalPokemon.attr("src" ,'assets/img/' + contador + ".png");
        
        $section.append($div);
        $div.append($img);
        $div.append($p);
        $div.attr('data-target', "modal1");
        
        
        contador++;
	});
};

var cargarDetallesPokemones = function() {
  var url = $(this).data('url');
  console.log(url);
  $.getJSON(url, function(response){
    var nombrePokemon = response.name;
    var colorPokemon = response.color.name;
    var habitatPokemon = response.habitat.name;
    var shapePokemon = response.shape.name;
    var generaPokemon = response.genera[0].genus;
    var $imgModalPokemon = $('.imgModalPokemon');
      
      $('#name').text(nombrePokemon);
      $('#color').text(colorPokemon);
      $('#habitat').text(habitatPokemon);
      $('#shape').text(shapePokemon);
      $('#genera').text(generaPokemon);
      
        $imgModalPokemon.attr("src" ,'assets/img/' + contador + ".png");
      
      /*mostrarDetallePokemon(colorPokemon, habitatPokemon, shapePokemon, generaPokemon);*/
    });
};

/*var mostrarDetallePokemon = function(colorPokemon, habitatPokemon, shapePokemon, generaPokemon) {
    var $detallePokemonContenedor = $('#DetallePokemon');
        $detallePokemonContenedor.html(
        plantilla.replace('__color__', colorPokemon)
                .replace('__habitat__', habitatPokemon)
                .replace('__shape__', shapePokemon)
                .replace('__genera__', generaPokemon),
            );
    };*/

/*var plantilla = '<div class="modal">' + 
    '<h2>Datos Pokemon</h2>' +
  '<p><strong>Color: </strong>__color__</p>' +
  '<p><strong>Habitat: </strong>__habitat__</p>' +
  '<p><strong>Shape: </strong>__shape__</p>' +
  '<p><strong>Genera: </strong>__genera__</p>' +
    '</div>';*/

$(document).ready(cargarPagina);