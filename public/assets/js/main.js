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

function imagendiv(div) {
       var imagen = document.createElement("img");
       imagen.setAttribute("src", "~/Imagenes/libro.jpg");
       var div = document.getElementById("capa");
       div.appendChild(imagen);
   }

function crearPokemons(pokemons) {
	var section = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var div = document.createElement("div");
        div.className = "col s3 center";
		div.textContent = pokemon.name;

		section.appendChild(div);
	});
}




//GET obtener info , donde está la info, booleano true=asyncrono
//Cross orgin requeste, cuando no hay el mismo protocolo -> levantar servidor
//con AJAX - no console sí network -http-
//HTTP status 404: no existe, 200: OK, 403: no permisos, 500: backEnd mal. 304: no modificado.
// ctl+shift+r: recargan la página borrando caché.    o   shift + f5: solo recargar.
