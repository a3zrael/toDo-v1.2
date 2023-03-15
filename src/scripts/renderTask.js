import { createTask } from "./createTask";
export const ul = document.querySelector('.todos__list')

export function renderTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        let taskElem = createTask(tasks[i])
        ul.prepend(taskElem);
    }
}