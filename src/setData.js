export function setData(tasks) {
    window.localStorage.setItem('task', JSON.stringify(tasks))
}