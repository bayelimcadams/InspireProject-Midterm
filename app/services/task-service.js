import TaskModel from "../models/task-model.js";
import store from "../store.js";

// @ts-ignore
const taskApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Bayeli/todos/",
  timeout: 8000
});


// let _state = {
// 	todos: [],
// 	error: {},
// }
// let _subscribers = {
// 	todos: [],
// 	error: []
// }

// function _setState(prop, data) {
// 	_state[prop] = data
// 	_subscribers[prop].forEach(fn => fn())
// }


class TaskService {

  // get TodoError() {
	// 	return _state.error
	// }

	// addSubscriber(prop, fn) {
	// 	_subscribers[prop].push(fn)
	// }

  getTasks() {
    console.log("Getting the Task List");

    taskApi.get() 

      // .catch(err => _setState('error', err.res.data))
  }

  addTask(task) {
    console.log("Adding Task")
    // debugger
    taskApi.post("", task)
      .then(res => {
        console.log(res.data)
        let rawDataObject = res.data
        let task = new TaskModel(rawDataObject)
        store.commit('tasks', task)
        
      //TODO Handle this response from the server
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTaskStatus(taskId) {

    let task = store.State.tasks.find(task => task._id == taskId);
    //TODO Make sure that you found a task,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    taskApi.put(taskId, task);
    //TODO do you care about this data? or should you go get something else?
  }

  deleteTask(taskId) {

    let task = store.State.tasks.find(task => task._id == taskId);
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?

    taskApi.delete(task)
  }
}

const _taskService = new TaskService();
export default _taskService;