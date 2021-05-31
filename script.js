class Converter  {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest?';
        this.apiKey = '8a401c8e0e05334c32dbec5930a63d9d';
        // this.left = document.querySelector('.value');
        // this.right = document.querySelector('.right')
        this.saleSelected = document.querySelector('.sale_selected');
        this.buySelected = document.querySelector('.buy_selected')
        this.valueCurrensyToSale = document.querySelector('[name="sale"]');
        this.valueCurrensyToBuy = document.querySelector('[name="buy"]');
        this.saleInfo = document.querySelector('.sale-info');
        this.buyInfo = document.querySelector('.buy-info');
        this.data = '';
        //  this.toBase = 0;
        //  this.toSale = 0;
    }

    // Получаем данные о текущих выбраных валютах

    getCurrencyNames () {
        let currencToSale = document.querySelectorAll('.sale-button')
        let currencToBuy = document.querySelectorAll('.buy-button')
        this.base = this.saleSelected.innerHTML
        this.symbol = this.buySelected.innerHTML

        currencToSale.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.saleSelected.classList.remove('sale_selected');
                this.saleSelected = event.target;
                this.saleSelected.classList.add('sale_selected');
                this.getDataFromHost(this.base)
            })
        });
        currencToBuy.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.buySelected.classList.remove('buy_selected');
                this.buySelected = event.target;
                this.buySelected.classList.add('buy_selected');
                this.getDataFromHost(this.symbol)
            })
        });
    }

    //  Получить ответ и вернуть его
    getDataFromHost () {
        fetch(this.url+`access_key=${this.apiKey}&base=${this.base}&symbols=${this.symbol}`)
            .then(response => response.json())
            .then( data => {
                this.toSymbol = data.rates[this.symbol]; 
                console.log(this.toSymbol)
            })
            .catch(error => {
                console.log(error)
            }) 
        
        // this.data = '';
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