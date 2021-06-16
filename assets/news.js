var topStories = document.getElementById("topStoriesList")

function getNews() {
    var httpRQ = new XMLHttpRequest();
    httpRQ.open('GET', 'https://newsdata.io/api/1/news?apikey=pub_381b5930794fc58a9ddf44f4d6585994a39')
    httpRQ.onload = function () {
        console.log(httpRQ.response);
    };
    httpRQ.send();
}
getNews();