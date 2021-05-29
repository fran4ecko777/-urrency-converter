class Converter  {
    constructor() {
        this.url = 'https://api.ratesapi.io/api/latest?';
        this.apiKey = '8a401c8e0e05334c32dbec5930a63d9d';
        this.data = '';
        
    }

    // Получаем данные о текущих выбраных валютах

    getCurrencyNames () {
        let saleSelected = document.querySelector('.sale_selected')
        let buySelected = document.querySelector('.buy_selected')
        this.base = saleSelected.innerHTML
        this.symbol = buySelected.innerHTML
        // console.log(this.base);
        // console.log(this.symbol);
    }

    //  Получить ответ и вернуть его

    getDataFromHost () {
        fetch(this.url+`access_key =${this.apiKey}&base=${this.base}&symbols=${this.symbol}`)
            .then(response => response.json())
            .then( data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            }) 
        


        this.data = '';
    }

    // Вывод информации на экран
    render () {

    }

    // Метод выводит информацию на экран 

    init () {
        this.getCurrencyNames();
        this.getDataFromHost();
        this.render();
    }
}

let converter = new Converter();
converter.init();