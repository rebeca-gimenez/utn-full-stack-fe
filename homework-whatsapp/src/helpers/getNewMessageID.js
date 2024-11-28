const getNewMessagetID = (messages) => {
    const ids_list = Object.keys(messages).map((id_string) => Number(id_string))

    console.log(ids_list)

    const new_id = Math.max(...ids_list)+1

    console.log(new_id)

    return new_id
}
export default getNewMessagetID