
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "40b76633f9msha96d6259b224a4bp195d65jsn622e9b6db719",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then((response)=>{

  temp.innerHTML = response.temp;
  feels_like.innerHTML = response.feels_like;
  humidity.innerHTML = response.humidity;
  min_temp.innerHTML = response.min_temp;
  max_temp.innerHTML = response.max_temp;
  wind_speed.innerHTML = response.wind_speed;
  wind_degrees.innerHTML= response.wind_degrees;
  sunrise.innerHTML= response.sunrise;
  sunset.innerHTML = response.sunset;
})
.catch(err=>console.error(err));
}
document.getElementById('submit').addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
      getWeather(this.textContent); // Pass the city name when clicked
    });
  });
  


const staticCities=(city)=>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
  .then(response=>response.json())
  .then((response)=>{
    
    const  cloudpctId = document.getElementById(city + "_cloud_pct");
    const feelslikeId=document.getElementById(city + "_feels_like");
    const tempId=document.getElementById(city + "_temp");
    const mintempId=document.getElementById(city + "_min_temp");
    const maxtempId=document.getElementById(city + "_max_temp");
    const windspeedId=document.getElementById(city+"_wind_speed")
    const winddegreesId=document.getElementById(city + "_wind_degrees");
    const sunsetId=document.getElementById(city + "_sunset");



    cloudpctId.textContent=response.cloud_pct;
    feelslikeId.textContent=response.feels_like;
    tempId.innerHTML=response.temp;
    mintempId.innerHTML=response.min_temp;
    maxtempId.innerHTML=response.max_temp;
    windspeedId.innerHTML=response.wind_speed;
    winddegreesId.innerHTML=response.wind_degrees;
    sunsetId.innerHTML=response.sunset;

  })
  .catch(err=>console.error(err));
}

staticCities('california');
staticCities('seattle');
staticCities('mexico');
staticCities('london');
staticCities('washington');
staticCities('lucknow')
// Fetch weather for Delhi
 getWeather("Delhi");
 

