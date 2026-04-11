// select all the elements
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityText = document.querySelector("#cityName");
const tempText = document.querySelector("#temperature");
const weatherText = document.querySelector("#weather");

// Hold weather API key
const apiKey = "04b7afa2009cfdd91b44e48abf7e8b08";

// creat a function to get weather

async function getWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    cityText.textContent = data.name;
    tempText.textContent = data.main.temp + "°C";
    weatherText.textContent = data.weather[0].main;
  } catch (error) {
    console.log("error", error);
  }
}
