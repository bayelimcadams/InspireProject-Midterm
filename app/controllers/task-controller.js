import TaskService from "../services/task-service.js";
import store from "../store.js";


function _drawTasks() {
  // TODO create for each task
  // document.getElementById('list-area').innerHTML = store.State.tasks.TaskTemplate;
  console.log("THE TASK MAN SAYS:", store.State.tasks);
  // event.preventDefault();
}

function _drawError() {
	console.error('[TASK ERROR]')
}


export default class TaskController {
  constructor() {

    store.subscribe("tasks", _drawTasks)
    // TaskService.addSubscriber('error', _drawError)
    TaskService.getTasks()
  }

  addTask(event) {
    event.preventDefault();
    let formData = event.target;

    let task = {

      //TODO build the task object from the data that comes into this method

      description: formData.taskInput.value
    };
      // debugger;
      TaskService.addTask(task)
    // _drawTasks()
    formData.reset()
  }

  //NOTE This method will pass an Id to your service for the TASK that will need to be toggled
  toggleTaskStatus(taskId) {
    TaskService.toggleTaskStatus(taskId);
  }

  //NOTE This method will pass an Id to your service for the TASK that will need to be deleted
  deleteTask(taskId) {
    event.preventDefault();
    console.log(taskId);

    TaskService.deleteTask(taskId);
    _drawTasks();
  }
}
