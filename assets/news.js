// document.addEventListener('DOMContentLoaded', function () {

// var topStories = document.getElementById("topStoriesList");
// var story1 = document.getElementById("story1");
// var story2 = document.getElementById("story2");
// var story3 = document.getElementById("story3");
// var story4 = document.getElementById("story4");
// var story5 = document.getElementById("story5");


// function getNews() {
//     var httpRQ = new XMLHttpRequest();

//     httpRQ.open('GET', 'https://newsdata.io/api/1/news?apikey=pub_381b5930794fc58a9ddf44f4d6585994a39&country=us&language=en&q=Cryptocurrency')

//     httpRQ.onload = function () {
//         var data = JSON.parse(httpRQ.response);

//         story1.textContent = data.results[0].title;
//         story2.textContent = data.results[1].title;
//         story3.textContent = data.results[2].title;
//         story4.textContent = data.results[3].title;
//         story5.textContent = data.results[4].title;

//         story1.setAttribute("href", data.results[0].link);
//         story2.setAttribute("href", data.results[1].link);
//         story3.setAttribute("href", data.results[2].link);
//         story4.setAttribute("href", data.results[3].link);
//         story5.setAttribute("href", data.results[4].link);

//     };

//     httpRQ.send();
// }
// // getNews();

// loadData();
// });
var apiKey = 'pub_381b5930794fc58a9ddf44f4d6585994a39'

document.addEventListener('DOMContentLoaded', function () {
loadData();
})
var loadData = function() {
    fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&language=en&q=Cryptocurrency`, {
        headers: {
            'Access-Control-Allow-Origin': 'localhost',
            'Access-Control-Allow-Credentials': 'true',
        }
    }).then(function(data){
        console.log(data)}
    ).catch(function(error){
        console.log(error)
    });
//   .then(response => response.json())
//   .then(data => console.log(data));
}

//oadData()
