var story1 = "#"
var story2 = "#"
var story3 = "#"
var currency = "#"
function getNews() {
    var httpRQ = new XMLHttpRequest();

    httpRQ.open('GET', "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" + currency + "&pageNumber=1&pageSize=6&autoCorrect=true&safeSearch=true&fromPublishedDate=2021-06-01&toPublishedDate=null");
    httpRQ.setRequestHeader("x-rapidapi-key", "31821ae77emsh5e7fa0996d8e41bp1cba9cjsn209747bed999");
    httpRQ.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
    httpRQ.onload = function () {
        var data = JSON.parse(httpRQ.response);
        story1.textContent = data.value[1].title;
        story2.textContent = data.value[2].title;
        story3.textContent = data.value[3].title;

        story1.setAttribute("href", data.value[1].url);
        story2.setAttribute("href", data.value[2].url);
        story3.setAttribute("href", data.value[3].url);

    };

    httpRQ.send();
}

getNews();
