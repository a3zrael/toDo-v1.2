import { createTaskElement } from "./createTask";

export function renderTasks(tasks, ul, removeTaks, id) {
    for (let i = 0; i < tasks.length; i++) {
        let taskElem = createTaskElement(tasks[i], removeTaks)
        ul.prepend(taskElem);
    }
}