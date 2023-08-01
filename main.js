const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

fetch("https://api.weatherapi.com/v1/current.json?key=210b8e4818a4439694091142232207 &q=London&aqi=no")
    .then(response => response.json())
    .then(jsonData => weatherResults.innerHTML=`
                <div class="results-country">Japan</div>
                <div class="results-city">Tokyo</div>
                <div class="results-temp">28<span>℃</span></div>
                <div class="results-condition">
                  <img src="./sunny-icon.png" alt="icon">
                  <span>Sunny</span>
                </div> 
                `
    )