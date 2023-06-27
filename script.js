const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const feel = document.querySelector(".feel");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const img = document.querySelector("img");

const submitHandler = (event) => {
  event.preventDefault();
};

document.querySelector(".form").addEventListener("submit", submitHandler);

async function getWeather() {
  inputValue = input.value;
  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  inputNormalized = removeAccents(inputValue);

  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=fa7e645695ab4f8db62103857232706&q=" +
        inputNormalized,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    cityName.textContent = weatherData.location.name;
    temperature.textContent = weatherData.current.temp_c + "°C";
    feel.textContent =
      "Feels like:" + " " + weatherData.current.feelslike_c + "°C";
    humidity.textContent =
      "Humidity:" + " " + weatherData.current.feelslike_c + "%";
    wind.textContent = "Wind:" + " " + weatherData.current.feelslike_c + "km/h";
    img.src = weatherData.current.condition.icon;
  } catch (error) {
    alert(`Error: city ${input.value} not found`);
  }

  console.log(weatherData);
}
