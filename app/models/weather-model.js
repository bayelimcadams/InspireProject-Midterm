export default class WeatherModel {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.name = data.name
    this.farenheit = data.main.temp
  }



get WeatherTemplate() {
  return `
      <h5>${this.name}</h5>
      <p>${this.farenheit}</p>
      `
  }
}