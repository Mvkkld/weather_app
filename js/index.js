const apiKey = '71cd9a7a44cf70abc61fdff5f0d96362';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search .search_btn');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener('click', () =>{
   checkWeather(searchBox.value);
})

searchBox.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
   checkWeather(searchBox.value);
    }
}
)
