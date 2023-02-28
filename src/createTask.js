export function createTaskElement(task, callback, id) {
    const li = document.createElement('li')
    const text = document.createElement('span')
    const btn = document.createElement('button')

    li.className = ('todos__item')
    li.setAttribute('id', task.id);

    text.innerHTML = `${task.title}`;

    btn.innerHTML = 'Удалить'
    btn.className = 'del__btn'

    btn.addEventListener('click', () => {
        callback(task)
    })

    li.append(text, btn)

    return li;
}