// var inputEl = $('#')

// function selectionHandler() {
//     let coin = inputEl.val();
    
    
// }
let filteResult = null;

function getCoinObj() {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/list'
    const word = 
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

getCoinObj();
