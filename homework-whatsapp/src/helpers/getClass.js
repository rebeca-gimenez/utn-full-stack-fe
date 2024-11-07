const getClass = (status) => {
    if ( status=='viewed' ) {
        return 'bi bi-check-all'
    } else if ( status=='not-viewed' ){
        return 'bi bi-check'
    }
    else {
        return 'bi bi-clock'
    }

}

export default getClass