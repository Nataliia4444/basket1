!function(){var t={form:document.querySelector(".js-search-form"),list:document.querySelector(".js-list")};t.form.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,a=n.days;(function(t,e){var n=new URLSearchParams({q:t,days:e,lang:"uk",key:"8412dc81021d484f8ff184337230908"});return fetch("".concat("http://api.weatherapi.com/v1/forecast.json","?").concat(n)).then((function(t){if(!t.status)throw new Error(t.statusText);return t.json()}))})(n.city.value,a.value).then((function(e){t.list.innerHTML=e.forecast.forecastday.map((function(t){return'<li class="weather-card">\n          <img src="'.concat(t.day.condition.icon,'" alt="').concat(t.day.condition.text,'" class="weather-icon">\n          <h2 class="date">').concat(t.date,'</h2>\n          <h3 class="weather-text">').concat(t.day.condition.text,'</h3>\n          <h3 class="temperature">').concat(t.day.avgtemp_c," °C</h3>\n      </li>")})).join(""),t.form.reset()}))}))}();
//# sourceMappingURL=index.17f01b07.js.map
