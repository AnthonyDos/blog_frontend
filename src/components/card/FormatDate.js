const FormatDate = ( date ) => {
    const eventDate = new Date (date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const newDate = eventDate.toLocaleDateString(undefined, options)
    return newDate;
}

export default FormatDate;