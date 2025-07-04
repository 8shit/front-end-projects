const GetWeather = document.getElementById("submit");
async function fetchData() {
  try {
    const cityInput = document.getElementById("cityInput").value.toLowerCase();
    const API = "API_KEY";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API}`
    );

    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const humidity = document.getElementById("humidity");
    const description = document.getElementById("description");
    const icon = document.getElementById("icon");

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    city.textContent = data.name;
    temp.textContent = Math.round(data.main.temp - 273.15);
    humidity.textContent = data.main.humidity;
    description.textContent = data.weather[0].description;
    const iconURL = data.weather[0].icon;
    console.log(iconURL);
    icon.src = `https://openweathermap.org/img/wn/${iconURL}.png`;
    console.log(icon.src);
  } catch (error) {
    console.error(error);
  }
}

GetWeather.addEventListener("click", (event) => {
  fetchData();
});
