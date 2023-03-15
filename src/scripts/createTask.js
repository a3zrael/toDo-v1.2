import { tasks } from "..";
import { removeTask } from "./removeTask";
export function createTask(task, id) {
    const li = document.createElement('li')
    const text = document.createElement('span')
    const btn = document.createElement('button')

    li.className = ('todos__item')
    li.setAttribute('id', task.id);

    text.innerHTML = `${task.title}`;

    btn.innerHTML = 'Удалить'
    btn.className = 'del__btn'
    btn.addEventListener('click', () => {
        removeTask(task, tasks)
    })

    li.append(text, btn)

    return li;
}
