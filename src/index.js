import { createTask } from './scripts/createTask';
import { pushObj } from './scripts/pushObj';
import { renderTasks } from './scripts/renderTask';
import { setDate } from './scripts/setDate';
import './scss/index.scss'
import { id } from './scripts/pushObj';

export const tasks = JSON.parse(window.localStorage.getItem('task')) || []

function initApp() {
    console.log('init');
    renderTasks(tasks)
    const button = document.querySelector('.form__btn')

    button.addEventListener('click', () => pushObj(tasks))

    setDate()
    createTask(id)
}

initApp()


