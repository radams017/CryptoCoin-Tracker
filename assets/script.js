$(function () {
    let coinsVal = $('#coins');
    const currencySigns = {
        "usd": "$",
        "aud": "$",
        "eth": "ETH",
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
        $('#results-container').empty().append(`
        </br></br>
        <div class='ui raised segment'>
        <h1 id='current-coin'>${coin.name}</h1>

        <div id='coin-market-data' class='ui two column grid'>
            <div class='row'>
                <div class="column">
                    <h3 id='current-price'>Price:</h3><p>${currencySigns[currency]}${coin.market_data.current_price[currency]}</p>
                    <h3 id='market-cap'>Market Cap:</h3><p>${currencySigns[currency]}${coin.market_data.market_cap[currency]}</p>
                    <h3 id='circulating-supply'>Circulating Supply:</h3>
                </div>
                <div class='column'>
                    <h3 id='24hr-high'>24hr High:</h3><p>${currencySigns[currency]}${coin.market_data.high_24h[currency]}</p>
                    <h3 id='24hr-low'>24hr Low:</h3><p>${currencySigns[currency]}${coin.market_data.low_24h[currency]}</p>
                    <h3 id='ATH'>All Time High:</h3><p>${currencySigns[currency]}${coin.market_data.ath[currency]}
                    <h3 id='ATL'>All Time Low:</h3><p>${currencySigns[currency]}${coin.market_data.atl[currency]}
                </div>
            </div>
        </div>
        <div class='ui grid'>
            <div class="left floated five wide column">
                <h2>Description</h2>
                <p id='description'></p>
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