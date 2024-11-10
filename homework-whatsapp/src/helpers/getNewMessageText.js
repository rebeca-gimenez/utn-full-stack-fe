const getNewMessageText = (messages_jsx) => {
    const message_data = new FormData(messages_jsx)

    //Get value from form field
    const message = message_data.get('message')

    return message
}
export default getNewMessageText