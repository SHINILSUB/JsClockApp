const weather = document.querySelector('.js-weather')
const COORDS = 'coords'
const API_KEY = '3b0e200f3ffa4bbff0570a703950645a'

function getWeather(lat, lng){
    fetch(`https://home.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    })
    .then(function(json){
        const temperature = json.main.temperature
        const place = json.name
        weather.innerText = `${temperature} @ ${place}`
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

//console.log(position) 찍어보고 나오는 값들 넣어주기
function handleGeoSucces(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude

    }
    saveCoords(coordsObj)
    getWeather(latitude. longitude)
}

function handleGeoError(){
    console.log('cant access geo')
}
//위치 읽을 수 있도록 요청하는 명령어
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if(loadedCoords === null){
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords)
        getWeather(parsedCoords.latitude, parsedCoords.longitude)

    }

}

function init() {
    loadCoords()

}

init()