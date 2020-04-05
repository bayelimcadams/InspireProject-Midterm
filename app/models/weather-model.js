export default class WeatherModel {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

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