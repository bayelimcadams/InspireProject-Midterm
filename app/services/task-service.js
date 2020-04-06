import TaskModel from "../models/task-model.js";
import store from "../store.js";

// @ts-ignore
const taskApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Bayeli/tasks/",
  timeout: 8000
});

class TaskService {
  getTasks() {
    console.log("Getting the Task List");
    taskApi.get();
    //TODO Handle this response from the server
  }

  addTaskAsync(task) {
    taskApi.post("", task);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTaskStatusAsync(taskId) {
    let task = store.State.tasks.find(task => task._id == taskId);
    //TODO Make sure that you found a task,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    taskApi.put(taskId, task);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTaskAsync(taskId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const taskService = new TaskService();
export default taskService;
