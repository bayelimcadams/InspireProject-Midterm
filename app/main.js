import WeatherController from "./controllers/weather-controller.js";
import TaskController from "./controllers/task-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";

class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.taskController = new TaskController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
  }
}

window["app"] = new App();
