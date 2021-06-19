var story1 = document.getElementById("story1");
var story2 = document.getElementById("story2");
var story3 = document.getElementById("story3");
var story4 = document.getElementById("story4");
var story5 = document.getElementById("story5");

function getNews() {
    var httpRQ = new XMLHttpRequest();

    httpRQ.open('GET', 'https://newsapi.org/v2/everything?q=crypto&language=en&from=2021-06-01&apiKey=c25691dd0dd4443f89cab34c230a7ced')
    httpRQ.onload = function () {
        var data = JSON.parse(httpRQ.response);

        story1.textContent = data.articles[0].title;
        story2.textContent = data.articles[1].title;
        story3.textContent = data.articles[2].title;
        story4.textContent = data.articles[3].title;
        story5.textContent = data.articles[4].title;

        story1.setAttribute("href", data.articles[0].url);
        story2.setAttribute("href", data.articles[1].url);
        story3.setAttribute("href", data.articles[2].url);
        story4.setAttribute("href", data.articles[3].url);
        story5.setAttribute("href", data.articles[4].url);
    };

    httpRQ.send();
}

//oadData()
