class Converter  {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest?';
        this.apiKey = '27ccbd923747485232da8b614ba2c25f';
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

    setEventListenersForButtons() {
        let currencToSale = document.querySelectorAll('.sale-button')
        let currencToBuy = document.querySelectorAll('.buy-button')
        currencToSale.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.saleSelected.classList.remove('sale_selected');
                this.saleSelected = event.target;
                this.saleSelected.classList.add('sale_selected');
                
                // 1. getCurrencyNames() 

                // 2. getDataFromHost()
            })
        });
        currencToBuy.forEach((element) => {
            element.addEventListener('click', (event) => {
                this.buySelected.classList.remove('buy_selected');
                this.buySelected = event.target;
                this.buySelected.classList.add('buy_selected');
                
            })
        });
    }

    // Получаем данные о текущих выбраных валютах
    getCurrencyNames () {
        this.base = this.saleSelected.getAttribute('data-currency');
        this.symbol = this.buySelected.getAttribute('data-currency');
    }

    //  Получить ответ и вернуть его
    getDataFromHost () {
        fetch(this.url+`access_key=${this.apiKey}&base=${this.base}&symbols=${this.symbol}`)
            .then(response => response.json())
            .then( data => {
                this.toSymbol = data.rates[this.symbol]; 
                console.log(this.toSymbol)
                this.render();
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    // Вывод информации на экран
    render () {
        let leftinput = document.querySelector('#leftinput')
        let rightinput = document.querySelector('#rightinput')
        // console.log(leftinput)
        // console.log(rightinput)
        rightinput.value = (parseFloat(leftinput.value) * this.toSymbol).toFixed(2)

    }

    // Метод выводит информацию на экран 
    init () {
        this.setEventListenersForButtons();
        this.getCurrencyNames();
        this.getDataFromHost();
    }
}

let converter = new Converter();
converter.init();