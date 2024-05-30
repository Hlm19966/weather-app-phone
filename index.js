function weatherPerdiction(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time * 1000);
    timeElement.innerHTML = formatDay(date);
    
}


function formatDay(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();

    return`${date} ${hours}:${minutes}`;
}




function getForcast(city) {
    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherPerdiction);
}




function displayWeather(event) {
    event.preventDefault();
    let searchingInput = document.querySelector("#search-two");
    let heading = document.querySelector("#heading");
    heading.innerHTML = searchingInput.value;
    getForcast(searchingInput.value);
}

let inputForm = document.querySelector("#search-form");
inputForm.addEventListener("submit",displayWeather);




function displayForcast(city) {
    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayButton);
    }
 

function displayButton(response) {
    console.log(response.data);
    let searchingInput = document.querySelector("#search-two");
    displayForcast(searchingInput.value);

}

let buttonSearch = document.querySelector("button");
buttonSearch.addEventListener("click", displayButton);