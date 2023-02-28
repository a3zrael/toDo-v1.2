export function createTask(task) {
    console.log(task);
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

let id = 1

export function pushObj() {
    let valueInput = input.value
    const task = {
        id: id,
        title: valueInput,
    }

    if (!valueInput) {
        return
    } else tasks.push(task);

    setData();

    let taskElem = createTask(task);

    ul.prepend(taskElem);

    removeValue()

    id = id + 1

    return task;
}
