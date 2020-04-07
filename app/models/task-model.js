import { generateId } from "../utils.js";
export default class TaskModel {
  constructor(data) {
    console.log('[TASK DATA]', data);

    this.completed = data.data.completed
    this.description = data.data.description
    this.id = data.data.id || generateId();
  }


get TaskTemplate() {
  return `
      <ol>
        <li>
          <input class="list-item-checkbox" oncheck="app.taskController.completeTask()" type="checkbox">
          ${this.description}
          <button type="button" class="close" onclick="app.taskController.deleteTask(${this.id})"><span>&times;</span>
        </li>
      </ol>
  `
  }

}