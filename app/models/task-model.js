import { generateId } from "../utils.js";
export default class TaskModel {
  constructor(data) {
    console.log('[TASK DATA]', data);

    this.name = data.name
    this.id = data.id || generateId();
  }


get TaskTemplate() {
  return `
      <ol>
        <li>
          <input class="list-item-checkbox" type="checkbox">
          ${this.name}
          <button type="button" class="close" onclick="app.taskController.deleteTask()"><span>&times;</span>
        </li>
      </ol>
  `
  }

}