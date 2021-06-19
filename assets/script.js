$(function () {

    let filteResult = null;
    let coinsVal = $('#coins');

    function getCoinObj() {
        const apiUrl = 'https://api.coingecko.com/api/v3/coins/list'
        const word = ''
        fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (coinsObj) {
                if (coinsObj.length > 0) {
                    filteResult = coinsObj.filter(function (item) {
                        return item.name.toLowerCase().includes(word.toLowerCase());
                    });
                    console.log(filteResult);
                }
            });
    };

    const coinsNamesArray = coinsArray.map(function (item) {
        return item.name;
    });


    $("#coins").autocomplete({
        source: coinsNamesArray
    });



    $('#coin-select').submit((e) => {
        e.preventDefault();

        let coinId = findItemId(coinsVal.val());
        console.log(coinId);
        coinsVal.val('');
    });

    //capture the item the user clickeck over
    //name

    //find the name clicked in the original array (coinsArray) you will get the id

    const findItemId = function (choosenItem) {
        const objectSelected = coinsArray.find(function (arrayItem) {
            return arrayItem.name === choosenItem;
        });

        return objectSelected.id;

    }
});