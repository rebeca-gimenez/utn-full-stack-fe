export const getFormattedHour =() => {
    const currentDate = new Date()

    let hours = currentDate.getHours()

    let am_pm = 'AM'

    if (hours > 12) {
        hours = hours - 12
        am_pm = 'PM'
    }

    return `${hours}:${currentDate.getMinutes()} ${am_pm}`
}