import { createTask } from "./createTask";
import { setData } from "./setData";
import { ul } from "./renderTask";
import { tasks } from "..";


export let id = 0

export function pushObj(tasks) {
    const input = document.querySelector('.form__input')
    let valueInput = input.value

    const task = {
        id: id,
        title: valueInput,
    }
    id = id + 1

    if (!valueInput) {
        return
    } else tasks.push(task);

    setData();

    let taskElem = createTask(task)

    ul.prepend(taskElem);

    function removeValue() {
        input.value = ''
    }

    removeValue()

    console.log('click');
    return task;
}

