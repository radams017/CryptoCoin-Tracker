$(function () {
    let coinsVal = $('#coins');
    const currencySigns = {
        "btc": 'BTC ',
        "eth": 'ETH ',
        "ltc": 'LTC ',
        "bch": 'BCH ',
        "bnb": 'BNB ',
        "eos": 'EOS ',
        "xrp": 'XRP ',
        "xlm": 'XLM ',
        "link": 'LINK ',
        "dot": 'DOT ',
        "yfi": 'YFI ',
        "usd": '$',
        "aed": 'د.إ',
        "ars": '$',
        "aud": '$',
        "bdt": '৳',
        "bhd": 'د.ب',
        "bmd": '$',
        "brl": 'R$',
        "cad": '$',
        "chf": 'CHF ',
        "clp": '$',
        "cny": '¥',
        "czk": 'Kč ',
        "dkk": 'kr ',
        "eur": '€',
        "gbp": '£',
        "hkd": '$',
        "huf": 'Ft ',
        "idr": 'Rp ',
        "ils": '₪',
        "inr": '₹',
        "jpy": '¥',
        "krw": '₩',
        "kwd": 'د.ك',
        "lkr": '₨',
        "mmk": 'K ',
        "mxn": '$',
        "myr": 'RM ',
        "ngn": '₦',
        "nok": 'kr ',
        "nzd": '$',
        "php": '₱',
        "pkr": '₨',
        "pln": 'zł',
        "rub": '₽',
        "sar": '﷼',
        "sek": 'kr ',
        "sgd": '$',
        "thb": '฿',
        "try": '&#8378',
        "twd": 'NT$',
        "uah": '₴',
        "vef": 'Bs',
        "vnd": '₫',
        "zar": 'R',
        "xdr": 'XDR ',
        "xag": 'XAG ',
        "xau": 'XAU ',
        "bits": 'BITS ',
        "sats": 'SATS'
    }

    const coinsNamesArray = coinsArray.map(function (item) {
        return item.name;
    });

    //autocomplete form dropdown
    $("#coins").autocomplete({
        source: coinsNamesArray
    });

    //captures submission ID
    const findItemId = function (chosenItem) {
        const objectSelected = coinsArray.find(function (arrayItem) {
            return arrayItem.name === chosenItem;
        });
        return objectSelected.id;
    };

    //get coin market data
    function getCoinData(chosenCoinID, display) {
        let apiURL = `https://api.coingecko.com/api/v3/coins/${chosenCoinID}`
        fetch(apiURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (coinRes) {
                display(coinRes, getVsCurrency());
            });
    };

    //get supported vs currencies
    function getCurrencyOptions() {
        let apiURL = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                $('#currencies').autocomplete({
                    source: data
                });
            });
    };

    //paste market data to page
    function appendMarketData(coin, currency) {
        let vsCurrency = getVsCurrency().toUpperCase();
        $('#results-container').empty().append(`
        </br></br>
        <div class='ui raised segment'>
        <div class='ui two column grid'>
            <div class='row'>
                <div class='column'>
                    <h1 id='current-coin'>${coin.name}</h1>
                </div>
                <div class='column'>
                    <h2 id='comparison-currency'>Currency: ${vsCurrency}</h2>
                </div>
            </div>
        </div>
        <div id='coin-market-data' class='ui two column grid'>
            <div class='row'>
                <div class="column">
                    <h3 id='current-price'>Current Price:</h3><p>${currencySigns[currency]}${coin.market_data.current_price[currency]}</p>
                    <h3 id='market-cap'>Market Cap:</h3><p>${currencySigns[currency]}${coin.market_data.market_cap[currency]}</p>
                    <h3 id='total-supply'>Total Supply:</h3><p>${coin.market_data.total_supply}</p>
                    <h3 id='circulating-supply'>Circulating Supply:</h3><p>${coin.market_data.circulating_supply} / ${coin.market_data.total_supply}</p>
                </div>
                <div class='column'>
                    <h3 id='24hr-high'>24hr High:</h3><p>${currencySigns[currency]}${coin.market_data.high_24h[currency]}</p>
                    <h3 id='24hr-low'>24hr Low:</h3><p>${currencySigns[currency]}${coin.market_data.low_24h[currency]}</p>
                    <h3 id='ATH'>All Time High:</h3><p>${currencySigns[currency]}${coin.market_data.ath[currency]}</p>
                    <h3 id='ATL'>All Time Low:</h3><p>${currencySigns[currency]}${coin.market_data.atl[currency]}</p>
                </div>
            </div>
        </div>
    </div>
       `)
    };

    //get seven trending currencies
    function getTrendingCurrency() {
        let apiURL = 'https://api.coingecko.com/api/v3/search/trending'
        fetch(apiURL)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    //save vs currency to storage
    function saveVsCurrency(VsChoice) {
        localStorage.setItem('VsCurrency', VsChoice);
    };

    //get vs currency from storage
    function getVsCurrency() {
        return localStorage.getItem('VsCurrency') || 'usd';
    }

    //handle coin form submission
    $('#coin-select').submit((e) => {
        e.preventDefault();
        let coinId = findItemId(coinsVal.val());
        getCoinData(coinId, appendMarketData);
        $('#coins').val('');
    });

    //handle currency form submission
    $('#currency-select').submit((e) => {
        e.preventDefault();
        let selectedCurrency = $('#currencies').val();
        saveVsCurrency(selectedCurrency);
        $('#currencies').val('');
    });

    getCurrencyOptions();
});