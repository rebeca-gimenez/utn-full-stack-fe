const getClass = (status) => {
    if ( status=='viewed' ) {
        return 'bi bi-check-all viewed'
    } else if ( status=='not-viewed' ){
        return 'bi bi-check-all'
    }
    else {
        return 'bi bi-clock'
    }

}

export default getClass