const apiKey = "3c49d00e87283b40fecd120004d2767a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const weatherBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon i");

async function check_weather(place) {
  const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";

    var data = await response.json();
    console.log(data);
    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".visibility").innerHTML = data.visibility;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".condition").innerHTML = data.weather[0].main;
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
    } else if (data.weather[0].main == "Fog") {
      weatherIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
    } else {
      weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    }

    document.querySelector(".weather").style.display = "block";
  }
}

weatherBtn.addEventListener("click", () => {
  check_weather(searchBox.value);
});
