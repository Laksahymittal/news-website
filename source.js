// alert("Search the news you want just by using search-bar");
const API_KEY = "59b31b506f2e452980fa3f89675cccaf";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchnews("cricket"));
async function fetchnews(query) {
  const res = await fetch(`${url}${query}&sortBy=publishedAt&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  binddata(data.articles);
}

function binddata(articles) {
  const cardsContainer = document.getElementById("card-container");
  const newsTemplate = document.getElementById("news-template");

  cardsContainer.innerHTML = "";
  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}
function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSrc = cardClone.querySelector("#news-src");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  // newsSrc.innerHTML = article.source.name;
  newsDesc.innerHTML = article.description;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

const searchBtn = document.getElementById("search-btn");
const searchText = document.getElementById("search-text");

searchBtn.addEventListener("click", () => {
  const query = searchText.value;
  if (!query) return;
  fetchnews(query);
});
// const navtext = document.querySelector("#finance");
// const navtext1 = document.querySelector("#ipl");
// const navtext2 = document.querySelector("#politics");

// navtext.addEventListener("click", () => {
//   const quer = navtext.innerHTML;
//   if (!quer) return;
//   fetchnews(quer);
// });

// navtext1.addEventListener("click", () => {
//   const quer = navtext1.innerHTML;
//   if (!quer) return;
//   fetchnews(quer);
// });

// navtext2.addEventListener("click", () => {
//   const quer = navtext2.innerHTML;
//   if (!quer) return;
//   fetchnews(quer);
// });
const lisst=document.querySelectorAll(".lisst");
for(let f of lisst){
  f.addEventListener("click", () => {
      const quer = f.innerText;
      if (!quer) return;
      fetchnews(quer);
    });
}

