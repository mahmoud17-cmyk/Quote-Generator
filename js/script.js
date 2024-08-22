let btn = document.querySelector("button");
let adviceNumber = document.querySelector("h2 span");
let p = document.querySelector("p");
let apiUrl = "https://api.adviceslip.com/advice";
btn.onclick = function () {
  getApiUrl(apiUrl);
};
async function getApiUrl(url) {
  const response = await fetch(url);
  const data = await response.json();

  p.innerHTML = data.slip["advice"];
  adviceNumber.innerHTML = data.slip["id"];
}
getApiUrl(apiUrl);
