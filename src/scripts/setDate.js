export function setDate() {
    let date = new Date()
    let day = document.querySelector('.today');

    function getWeekDay(date) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[date.getDay()]
    }
    function getMon(date) {
        let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря']
        return month[date.getMonth()]
    }
    day.innerHTML = `${getWeekDay(date)}, ${date.getDate()} ${getMon(date)}`
}