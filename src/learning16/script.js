// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// *********Обробка помилок та парсинг відповіді********* \\

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// function serviceWeather(city, days) {
//   const URL = "http://api.weatherapi.com/v1/forecast.json";
//   const KEY = "66f9e81543404d02beb160521230808";
//   const params = new URLSearchParams({
//     key: KEY,
//     q: city,
//     days,
//     lang: "uk",
//   });
//   return fetch(`${URL}?${params}`).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }
// serviceWeather("Kiev", 3)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const refs = {
//   form: document.querySelector(".js-search-form"),
//   list: document.querySelector(".js-list"),
// };
// refs.form.addEventListener("submit", onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   const { city, days } = refs.form.elements;
//   console.log(city.value, days.value);

//   serviceWeather(city.value, days.value)
//     .then((data) => (refs.list.innerHTML = data.forecast.forecastday))
//     .catch((err) => err);
// }
// function creat(arr) {
//   return arr.map({ date, day: { ava } });
// }
// const refs = {
//   searchForm: document.getElementById("searchForm"),
//   list: document.getElementById("list"),
// };

// refs.searchForm.addEventListener("submit", searchWeater);

// function searchWeater(e) {
//   e.preventDefault();

//   const { city, days } = e.currentTarget.elements;
//   // const city = refs.searchForm.elements.city

//   return fetch(`${FORECAST_URL}?${params}`).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }
// serviceWeather("German", 2);
//

// function createWether(city, days) {
//     const url = "http://api.weatherapi.com/v1/forecast.json";
//     const ke = "8412dc81021d484f8ff184337230908";
//     const parametr = new URLSearchParams({
//       q: city,
//       days,
//       lang: "uk",
//       key: ke,
//     });
//     return fetch(`${url}?${parametr}`).then((res) => {
//       if (!res.status) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     });
//   }
//   // createWether("Kiev", 3)
//   //   .then((res) => console.log(res))
//   //   .catch((err) => console.log(err));
//   const refs = {
//     list: document.querySelector(".js-list"),
//     form: document.querySelector(".js-search-form"),
//   };
  
//   refs.form.addEventListener("submit", onSubmit);
//   function onSubmit(e) {
//     const { days, city } = e.currentTarget.elements;
//     console.log(days.value);
//     console.log(city.value);
//     e.preventDefault();
//     createWether(city.value, days.value)
//       .then((data) => {
//         refs.list.innerHTML = createMarkup(data.forecast.forecastday);
//         //   console.log(data.forecast.forecastday);
//       })
//       .catch((err) => console.error(err));
//   }
//   function createMarkup(arr) {
//     return arr
//       .map(
//         ({
//           date,
//           day: {
//             condition: { text, icon },
//             avgtemp_c,
//           },
//         }) =>
//           `<li class="weather-card">
//         <img src="${icon}" alt="${text}" class="weather-icon">
//         <h2 class="date">${date}</h2>
//         <h3 class="weather-text">${text}</h3>
//         <h3 class="temperature">${avgtemp_c} °C</h3>
//     </li>`
//       )
//       .join("");
//   }

function createWeather(city, days){
    const url = "http://api.weatherapi.com/v1/forecast.json";
    const ke = "8412dc81021d484f8ff184337230908";
    const parametr = new URLSearchParams({
      q: city,
      days,
      lang: "uk",
      key: ke,
    });
    return fetch(`${url}?${parametr}`).then((res) => {
      if (!res.status) {
        throw new Error(res.statusText);
      }
      return res.json();
    });

}
const refs ={
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-list')
}
refs.form.addEventListener('submit', onSubmitForm )
function onSubmitForm(e){
e.preventDefault()
const {days, city} = e.currentTarget.elements
// console.log(typeof(Number(days.value)))
createWeather(city.value, days.value).then((data) => {
   refs.list.innerHTML = createMarkup(data.forecast.forecastday)
   refs.form.reset()
  })

}
function createMarkup(arr) {
      return arr
        .map(
          (el) =>
            `<li class="weather-card">
          <img src="${el.day.condition.icon}" alt="${el.day.condition.text}" class="weather-icon">
          <h2 class="date">${el.date}</h2>
          <h3 class="weather-text">${el.day.condition.text}</h3>
          <h3 class="temperature">${el.day.avgtemp_c} °C</h3>
      </li>`
        )
        .join("");
    }
