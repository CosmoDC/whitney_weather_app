function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let day = days[now.getDay()];
  let currentDate = `${day} ${hour}:${minutes}`;
  return currentDate;
}
formatDate();

//Week 5 additions//

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "ad54f2135489067bc74456800570c981";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
