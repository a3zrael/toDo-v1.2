import { createTask, pushObj } from './scripts/createTask';
import { setDate } from './scripts/setDate';
import './scss/index.scss'


function initApp() {
    console.log('init');
    function removeValue() {
        input.value = ''
    }

    setDate()
    createTask()
    pushObj()
}

initApp()


