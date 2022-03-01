import axios from "axios";

async function getWeather(search) {
  let weather = null;
  const apiKey = "8a2e86eb68b7c4da8fde99960fffc13f";
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${apiKey}`;

  await axios
    .get(requestURL)
    .then((res) => {
      weather = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
  return weather;
}

export default getWeather;
