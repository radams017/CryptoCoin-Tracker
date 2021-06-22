var story1 = document.getElementById("story1");
var story2 = document.getElementById("story2");
var story3 = document.getElementById("story3");
var story4 = document.getElementById("story4");
var story5 = document.getElementById("story5");
var searchBtn = document.getElementById("searchBtn")


searchBtn.addEventListener("click", function getNews() {
    var currency = document.getElementById('coins').value;
    fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" + currency + "&pageNumber=1&pageSize=6&autoCorrect=true&safeSearch=true&fromPublishedDate=2021-06-01&toPublishedDate=null",
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "31821ae77emsh5e7fa0996d8e41bp1cba9cjsn209747bed999",
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())

        .then(data => {
            console.log(data)
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

        });

});

