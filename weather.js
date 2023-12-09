//wether.js
const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  getWether(cityInput.value)
})

const getWether = (city) => {
  weatherResults.innerHTML = `<div class="loading"></div>`
  fetch(`https://api.weatherapi.com/v1/current.json?key=c11787d7d27d4f2c8cc05611230908&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(jsonData =>
      weatherResults.innerHTML = `
      <div class="results-country">${jsonData.location.country}</div>
      <div class="results-city">${jsonData.location.name}</div>
      <div class="results-temp">${jsonData.current.temp_c}<span>℃</span></div>
    <div class="results-condition">
    <img id="arai" src=${"https:"+jsonData.current.condition.icon} alt="Icon"> <span>${jsonData.current.condition.text}</span</div>
  `).catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
}
