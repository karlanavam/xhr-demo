var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
			var pokemons = response.results;
			// var squads = JSON.parse(this.response);	
			crearPokemons(pokemons);
		}
		
	}
};

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

xhr.send();

function crearPokemons(pokemons) {
	var ul = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var li = document.createElement("li");
		li.textContent = pokemon.name;

		ul.appendChild(li);
	});
}



//GET obtener info , donde está la info, booleano true=asyncrono
//Cross orgin requeste, cuando no hay el mismo protocolo -> levantar servidor
//con AJAX - no console sí network -http-
//HTTP status 404: no existe, 200: OK, 403: no permisos, 500: backEnd mal. 304: no modificado.
// ctl+shift+r: recargan la página borrando caché.    o   shift + f5: solo recargar.
