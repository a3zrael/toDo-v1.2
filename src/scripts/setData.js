import { tasks } from "..";

export function setData() {
    window.localStorage.setItem('task', JSON.stringify(tasks))
    localStorage.setItem('task', JSON.stringify(tasks));
}