import WeatherModel from "../models/weather-model.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=Boise&appid=c047f61b0d88cabb172180596ca8fdec&units=imperial",
  // timeout: 3000
});

class WeatherService {

  constructor() {
    this.getWeather();
  }


  // async 
  getWeather() {
    console.log("Calling the Weatherman");

    weatherApi.get()
      .then(res => {
        console.log(res.data)
        let rawDataObject = res.data
        let weather = new WeatherModel(rawDataObject)
        store.commit('weather', weather)
      })
    // let res = await weatherApi.get();
    // store.commit("weather", new Weather(res.data));

    .catch(err => console.error(err))
  }
}

const weatherService = new WeatherService();
export default weatherService;
