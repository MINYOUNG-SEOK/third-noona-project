// const API_KEY = ``;
let news = []; // 밖으로 빼서 전역 변수 처리
const getLatestNews = async () => {
  // const url = new URL(
  //   `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
  // );
  let url = `https://willowy-profiterole-943840.netlify.app/top-headlines`;
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("ddddd", news);
};

getLatestNews();
