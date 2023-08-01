const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

const getWeather = () => {
fetch("https://api.weatherapi.com/v1/current.json?key=210b8e4818a4439694091142232207 &q=London&aqi=no")
    .then(response => response.json())
    .then(jsonData => weatherResults.innerHTML=`
                <div class="results-country">${jsonData.location.country}</div>
                <div class="results-city">${josnDate.location.name}</div>
                <div class="results-temp">${jsonData.current.temp_c}</div>
                <div class="results-condition">
                  <img src="" alt="icon">
                  <span>${jsonData.current.condition.text}</span>
                </div>
                `
    )
}