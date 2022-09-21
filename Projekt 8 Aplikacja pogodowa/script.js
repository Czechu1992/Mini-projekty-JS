const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

let city;
let url;

const API_KEY =''; // API KEY from page https://openweathermap.org/

const API_LINK_LOCATION = 'http://api.openweathermap.org/geo/1.0/direct?q='
const API_LINK_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?';
const API_UNITS ='&units=metric'




const getCityName = ()=> {
    warning.textContent = '';
    city = input.value || 'Wrocław';
    
    const LOCALIZATION_URL = API_LINK_LOCATION + city + '&limit=1' + '&appid='+API_KEY;
    axios.get(LOCALIZATION_URL).then(res => {
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        cityName.textContent = res.data[0].name;
        
        
        getWeather(lat, lon);
    }).catch(()=> warning.textContent = 'Wpisz poprawną nazwę miasta');
}

const getWeather = (lat,lon) => {
    const lAT_LINK = 'lat=' + lat;
    const lON_LINK = '&lon=' + lon;
    
    const URL = API_LINK_WEATHER + lAT_LINK + lON_LINK + '&appid=' + API_KEY + API_UNITS;

    axios.get(URL).then(res =>{
        warning.textContent = '';
        const status = Object.assign({},...res.data.weather);
        
        temperature.textContent = Math.floor(res.data.main.temp) + '℃';
        humidity.textContent = res.data.main.humidity + '%';
        weather.textContent = status.main;
        photo.setAttribute('src', getWeatcherIcon(status.id));
    }).catch(()=> warning.textContent = 'Wpisz poprawną nazwę miasta');
}

const getWeatcherIcon = (statusID) => {
    
    if(statusID >= 200 && statusID < 300){
        return './img/thunderstorm.png';
    } else if (statusID >= 300 && statusID < 400){
        return './img/drizzle.png';
    }else if (statusID >= 500 && statusID < 600){
        return './img/rain.png';
    }else if (statusID >= 600 && statusID < 700){
        return './img/ice.png';
    }else if (statusID >= 700 && statusID < 800){
        return './img/fog.png';
    }else if (statusID === 800){
        return './img/sun.png';
    } else if (statusID >= 801 && statusID < 900){
        return './img/cloud.png';
    } else {
        return './img/unknown.png';
    }
}

const enterCheck = e => {
    if(e.key === 'Enter'){
        getCityName();
    }
}

input.addEventListener('keyup', enterCheck)
button.addEventListener('click', getCityName)
getCityName()

