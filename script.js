const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4cf13224ecmsh0240cd265ce3f0fp141f25jsn21be6685ef56",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};



const getWeather  = (city)=>
{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then((response) => response.json())
  .then((response) => {

  if(response.error){
    alert("City not found")
  }

  else{
    cityname.innerHTML = city
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = " " + response.temp +" °C"
    feels_like.innerHTML = response.feels_like +" °C"
    humidity.innerHTML = response.humidity + "  g.m-3"
    min_temp.innerHTML = " " + response.min_temp +" °C"
    max_temp.innerHTML = " " + response.max_temp +" °C"
    wind_speed.innerHTML = response.wind_speed + " km/hr"
    wind_degrees.innerHTML = response.wind_degrees +" °"
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  }

  
  })

    .catch(err => console.error(err));
}

function getData(){
  var cityname=document.getElementById("cityname")
  var city=document.getElementById("city").value

  var cloud_pct=document.getElementById("cloud_pct")
  var temp=document.getElementById("temp")
  // var temp2=document.getElementById("temp2")
  var feels_like=document.getElementById("feels_like")
  var humidity=document.getElementById("humidity")
  // var humidity2=document.getElementById("humidity2")
  var min_temp=document.getElementById("min_temp")
  var max_temp=document.getElementById("max_temp")
  var  wind_speed=document.getElementById("wind_speed")
  // var wind_speed2=document.getElementById("wind_speed2")
  var sunrise=document.getElementById("sunrise")
  var sunset=document.getElementById("sunset")
  

  getWeather(city)
}
  //   submits.addEventListener("click", (e) => {
  //   e.preventDefault()
  //   getWeather(city.value)
  // })
  
  // getWeather("Kakinada")