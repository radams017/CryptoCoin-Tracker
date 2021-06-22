var story1 = document.getElementById("story1");
var story2 = document.getElementById("story2");
var story3 = document.getElementById("story3");
var story4 = document.getElementById("story4");
var story5 = document.getElementById("story5");

function getNews() {
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");
    var story4 = document.getElementById("story4");
    var story5 = document.getElementById("story5");
    var httpRQ = new XMLHttpRequest();

    httpRQ.open('GET', "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=crypto&pageNumber=1&pageSize=6&autoCorrect=true&safeSearch=true&fromPublishedDate=2021-06-01&toPublishedDate=null");
    httpRQ.setRequestHeader("x-rapidapi-key", "31821ae77emsh5e7fa0996d8e41bp1cba9cjsn209747bed999");
    httpRQ.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
    httpRQ.onload = function () {
        var data = JSON.parse(httpRQ.response);
        story1.textContent = data.value[1].title;
        story2.textContent = data.value[2].title;
        story3.textContent = data.value[3].title;
        story4.textContent = data.value[4].title;
        story5.textContent = data.value[5].title;

        story1.setAttribute("href", data.value[1].url);
        story2.setAttribute("href", data.value[2].url);
        story3.setAttribute("href", data.value[3].url);
        story4.setAttribute("href", data.value[4].url);
        story5.setAttribute("href", data.value[5].url);

        story1.setAttribute("target", '_blank');
        story2.setAttribute("target", '_blank');
        story3.setAttribute("target", '_blank');
        story4.setAttribute("target", '_blank');
        story5.setAttribute("target", '_blank');
    };

    httpRQ.send();
}

getNews();

//oadData()