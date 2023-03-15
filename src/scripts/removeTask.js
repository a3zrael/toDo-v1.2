import { ul } from "./renderTask";
import { pushObj } from "./pushObj";
import { setData } from "./setData";
import { tasks } from "..";

export function removeTask(task, tasks) {
    let indexTasks = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(indexTasks, 1);

    ul.children[ul.children.length - 1 - indexTasks].remove()
    setData()
}