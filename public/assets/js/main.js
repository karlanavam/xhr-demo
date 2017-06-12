$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
	function (response) {
	var pokemons = response.results;
	crearPokemons(pokemons);
});

function crearPokemons(pokemons) {
	var $section = $("#pokemons");

	pokemons.forEach(function (pokemon) {
		var $div = $("<div />");
        
        $section.append($div);
        
        $div.addClass("pokemon col s3 center");
		$div.text(pokemon.name);
        $div.attr('data-url', pokemon.url);
        
	});
};