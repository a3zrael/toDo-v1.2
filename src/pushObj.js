let id = 0;

export function createTaskObj(value) {
    if (!value) {
        return
    }

    const taskObj = {
        id: id,
        title: value,
    }

    id = id + 1

    return taskObj
}
