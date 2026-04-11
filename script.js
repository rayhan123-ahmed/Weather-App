// select all the elements
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityText = document.querySelector("#cityName");
const tempText = document.querySelector("#temperature");
const weatherText = document.querySelector("#weather");
const icon = document.querySelector("#weatherIcon");

// Hold weather API key
const apiKey = "04b7afa2009cfdd91b44e48abf7e8b08";

// creat a function to get weather

async function getWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    // if city not found

    if (data.cod === 404) {
      alert("City not found!");
      return;
    }

    cityText.textContent = data.name;
    tempText.textContent = data.main.temp + "°C";
    weatherText.textContent = data.weather[0].main;

    // get icon from (open weather)
    const iconCode = data.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    icon.style.display = "block";

    const weatherMain = data.weather[0].main.toLowerCase();

    // reseat body class name
    const body = document.body;
    body.className = "";

    if (weatherMain.includes("clear")) {
      body.classList.add("clear");
    } else if (weatherMain.includes("cloud")) {
      body.classList.add("clouds");
    } else if (weatherMain.includes("rain")) {
      body.classList.add("rain");
    } else if (weatherMain.includes("mist")) {
      body.classList.add("mist");
    } else if (weatherMain.includes("snow")) {
      body.classList.add("snow");
    }
  } catch (error) {
    alert("Something went wrong!");
    console.log("error", error);
  }
}

// add eventListner to show the result on display
searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  getWeather(city);
});

// Make enter key work
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(cityInput.value);
  }
});
