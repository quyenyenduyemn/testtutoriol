
var searchIcon = document.getElementById("search-icon");
var logo = document.getElementById("logo");
var modalBox = document.getElementById("modal-box");
var closeBtn = document.getElementById("box-close");
var keyWord = document.getElementById("keywords");
var fromDate = document.getElementById("date-from");
var toDate = document.getElementById("date-to");
var articleNumber = document.getElementById("article-number");
var searchBtn = document.getElementById("search");
var newsContainer = document.getElementById("news-container");
var topBtn = document.getElementById("top-btn");

// Top Headline Function
logo.addEventListener("click", () => {
    getHeadline();
});

function getHeadline() {
    let htmls = "";
    let url = "https://gnews.io/api/v4/top-headlines?&token=986a770898dad2b29f8ae92d0bc915eb";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let newsList = data.articles;
            newsList.forEach((news) => {
                let publishedDate = news.publishedAt.slice(0, 10);
                let publishedHour = news.publishedAt.slice(11, 19);
                    htmls += `<article class="row">
                    <div class="nc-image col-s-12 col-4">
                    <a href="${news.url}" target="blank"><img src="${news.image}" alt="${news.description}"></a>
                    </div>
                    <div class="nc-content col-s-12 col-8">
                    <h3><a href="${news.url}" target="blank">${news.title}</a></h3>
                    <p>${publishedDate} ${publishedHour}</p>
                    <p>${news.content}</p>
                    </div>
                    </article>`;
               
            });
           setTimeout(() => {
            newsContainer.innerHTML = htmls;
           }, 600);
            

        });
}

// ------ Toggle Modal Box ------
searchIcon.addEventListener("click", () => {
    modalBox.className = "show";
});

closeBtn.addEventListener("click", () => {
    modalBox.className = "none";
});

// ------ Search News ------
searchBtn.addEventListener("click", () => {
    let html = "";
    let word = keyWord.value;
    let dateFrom = fromDate.value;
    let dateTo = toDate.value;
    let amount = articleNumber.value;
    let url =
        "https://gnews.io/api/v4/search?" + "q=" + word + "&from=" + dateFrom + "&to=" + dateTo + "&max=" + amount +
        "&lang=en&sortby=relevance&token=986a770898dad2b29f8ae92d0bc915eb";

    fetch(url)
        .then(res => {
            return res.json();
        })

        .then(data => {
            let newsList = data.articles;

            console.log({newsList:newsList});

            newsList.forEach((news) => {
                let publishedDate = news.publishedAt.slice(0, 10);
                let publishedHour = news.publishedAt.slice(11, 19);

                html += `<article class="row">
        <div class="nc-image col-s-12 col-4">
        <a href="${news.url}" target="blank"><img src="${news.image}" alt="${news.description}"></a>
        </div>
        <div class="nc-content col-s-12 col-8">
        <h3><a href="${news.url}" target="blank">${news.title}</a></h3>
        <p>${publishedDate} ${publishedHour}</p>
        <p>${news.content}</p>
        </div>
        </article>`;
            });

            setTimeout(() => {
                keyWord.value = "";
                fromDate.value = "";
                toDate.value = "";
                articleNumber.value = "";
                modalBox.className = "none";
                newsContainer.innerHTML ="";
                newsContainer.innerHTML = html;
            }, 600);
           
        });
});

// ---------- Scroll to Top Button -----------
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.className = "show";
        searchBar.style.boxShadow = "0 0 3px 3px #eee";
    } else {
        topBtn.className = "none";
        searchBar.style.boxShadow = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Tham khảo w3c link https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
