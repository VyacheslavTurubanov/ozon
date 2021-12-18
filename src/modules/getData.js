const getData = () => {
    return fetch('https://ozon-c0709-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
        .then((response) => {
            return response.json()
        })


}

export default getData