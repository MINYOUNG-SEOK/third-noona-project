const API_KEY = `eb563bf813ce4e3484994073af51a24b`;
let news = []; // 밖으로 빼서 전역 변수 처리
const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("ddddd", news);
};

getLatestNews();
