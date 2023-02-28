import { createTaskElement } from './createTask';
import { createTaskObj } from './pushObj';
import { removeTask, removeValue } from './removeTask';
import { renderTasks } from './renderTast';
import './scss/index.scss'
import { setData } from './setData';
import { setDate } from './setDate';

export const tasks = JSON.parse(window.localStorage.getItem('task')) || []

function initApp() {
    const tasks = JSON.parse(window.localStorage.getItem('task')) || []

    const button = document.querySelector('.form__btn')
    const input = document.querySelector('.form__input')
    const ul = document.querySelector('.todos__list')

    function removeTaks(currentTask) {
        removeTask(currentTask, tasks, ul)
        setData(tasks);
        renderTasks(tasks, ul, removeTaks, id)
    }

    button.addEventListener('click', () => {
        const task = createTaskObj(input.valu e)
        tasks.push(task)

        setData(tasks);

        let taskElem = createTaskElement(task, removeTaks, id);

        ul.prepend(taskElem);
        removeValue(input)
    })

    console.log('init');

    renderTasks(tasks, ul, removeTaks)
    // setData()
    // pushObj()
    // createTask()
    // removeTask()
    // removeValue()
    // renderTasks()
    // setDate()
}

initApp()


