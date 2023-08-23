const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef3f73b188msh0d00f9ef0024d1dp1ad912jsnae4b8eaeb79e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

console.log("Hello" + temp.innerHTML);

const name1 = document.getElementById("cityName");
const getWeatherCity = (city) => {
  name1.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log("Hello " + response.temp);
      console.log(response);
      tempe.innerHTML = response.temp;
      //   cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;

      if (response.temp <= 32 && response.temp >= 25) {
        document.body.style.backgroundImage = "url('Cloudy.webp')";
        document.body.style.backgroundRepeat = "no repeat";
        document.body.style.backgroundSize = "cover";
      } else if (response.temp > 32) {
        document.body.style.backgroundImage = "url('sunny.jpg')";
      } else if (response.humidity >= 80) {
        document.body.style.backgroundImage = "url('rainy.jpg')";
      }
    })
    .catch((err) => console.error(err));
};

const search = document.getElementById("submit");
const searchCity = document.getElementById("city");

search.addEventListener("click", (e) => {
  getWeatherCity(searchCity.value);
  e.preventDefault();
});
getWeatherCity("Mumbai");

//city 1 external Delhi Fixed

const delhiCity = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      delhicloud_pct.innerHTML = res.cloud_pct;
      delhifeels_like.innerHTML = res.feels_like;
      delhihumidity.innerHTML = res.humidity;
      delhimax_temp.innerHTML = res.max_temp;
      delhimin_temp.innerHTML = res.min_temp;
      delhisunrise.innerHTML = res.sunrise;
      delhisunset.innerHTML = res.sunset;
      delhitemp.innerHTML = res.temp;
      delhiwind_degrees.innerHTML = res.wind_degrees;
      delhiwind_speed.innerHTML = res.wind_speed;
    })
    .catch((err) => console.error(err));
};
delhiCity();

//city 2 Patna Fixed

const patnaCity = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      patnacloud_pct.innerHTML = res.cloud_pct;
      patnafeels_like.innerHTML = res.feels_like;
      patnahumidity.innerHTML = res.humidity;
      patnamax_temp.innerHTML = res.max_temp;
      patnamin_temp.innerHTML = res.min_temp;
      patnasunrise.innerHTML = res.sunrise;
      patnasunset.innerHTML = res.sunset;
      patnatemp.innerHTML = res.temp;
      patnawind_degrees.innerHTML = res.wind_degrees;
      patnawind_speed.innerHTML = res.wind_speed;
    })
    .catch((err) => console.error(err));
};
patnaCity();

//Country 3 America

const chennai = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      chennaicloud_pct.innerHTML = res.cloud_pct;
      chennaifeels_like.innerHTML = res.feels_like;
      chennaihumidity.innerHTML = res.humidity;
      chennaimax_temp.innerHTML = res.max_temp;
      chennaimin_temp.innerHTML = res.min_temp;
      chennaisunrise.innerHTML = res.sunrise;
      chennaisunset.innerHTML = res.sunset;
      chennaitemp.innerHTML = res.temp;
      chennaiwind_degrees.innerHTML = res.wind_degrees;
      chennaiwind_speed.innerHTML = res.wind_speed;
    })
    .catch((err) => console.error(err));
};
chennai();
