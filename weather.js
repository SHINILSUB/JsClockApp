const COORDS = 'coords'

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
}

function handleGeoError(){
    console.log('cant access geo')
}
//위치 읽을 수 있도록 요청하는 명령어
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS)
    if(loadedCords === null){
        askForCoords()
    } else {

    }

}

function init() {
    loadCoords()

}

init()