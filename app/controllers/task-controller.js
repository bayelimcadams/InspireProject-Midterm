import TaskService from "../services/task-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTasks() {}

export default class TaskController {
  constructor() {
    //TODO Remember to register your subscribers
    TaskService.getTasks();
  }

  addTask(e) {
    e.preventDefault();
    var form = e.target;
    var task = {
      //TODO build the task object from the data that comes into this method
    };
    TaskService.addTaskAsync(task);
  }

  //NOTE This method will pass an Id to your service for the TASK that will need to be toggled
  toggleTaskStatus(taskId) {
    TaskService.toggleTaskStatusAsync(taskId);
  }

  //NOTE This method will pass an Id to your service for the TASK that will need to be deleted
  removeTask(taskId) {
    TaskService.removeTaskAsync(taskId);
  }
}
