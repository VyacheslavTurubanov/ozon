const postData = () => {
    return fetch('https://ozon-c0709-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
        method: 'POST',

    })
        .then(res => res.json())

    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: "Ведьмак 3",
    //         price: 3000,
    //         sale: true,
    //         img: "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
    //         hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg",
    //         category: "Игровая приставка"
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then(res => res.json())


}

export default postData