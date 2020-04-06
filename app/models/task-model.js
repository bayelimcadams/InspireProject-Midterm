import { generateId } from "../utils.js";
export default class TaskModel {
  constructor(data) {
    console.log('[TASK DATA]', data);

    this.task = data.task
    this.id = data.id || generateId();
  }


get TaskTemplate() {
  return `
      <ol>
        <li>
        <input class="list-item-checkbox" type="checkbox">
          ${this.task}<button type="button" class="close" onclick="app.taskController.deleteTask('${this.id}')">
          <span>&times;</span>
        </li>
      </ol>
  `
  }
}