!function(){function t(t){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(t){return t.json()}))}var e={form:document.querySelector(".form-search-api"),card:document.querySelector(".card")};e.form.addEventListener("submit",(function(n){n.preventDefault(),t(n.currentTarget.elements[0].value).then((function(t){return e.card.innerHTML='\n   <div class="img">\n   <img src="'.concat((n=t).sprites.back_default,'" alt="j">\n   </div>\n   \n   <div class="text">\n     <p class="h3">Name: ').concat(n.abilities[0].ability.name,'</p>\n     <p class="p"> Weight: ').concat(n.weight," </p>\n   </div>\n   ");var n})).catch((function(){return alert("Not search")})),e.form.reset()}))}();
//# sourceMappingURL=index.92088624.js.map
