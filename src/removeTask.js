export function removeValue(inputElement) {
    inputElement.value = ''
}

export function removeTask(task, tasks, ul) {
    let indexTasks = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(indexTasks, 1);

    ul.children[ul.children.length - 1 - indexTasks].remove()
}