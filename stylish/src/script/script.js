import { fetchData, fetchProduct, renderProduct, displayElement, hideElement, switchQueryString, removeClassedElement } from './app.js';

const apiHost = "https://api.appworks-school.tw/api";
const apiVersion = "/1.0";
const apiFunction = "/products";
const apiProductPaging = "";

/** Fetching Product according to category query */
document.addEventListener('DOMContentLoaded', () => {
  
  displayElement("loadingGif");

  const urlParams = new URLSearchParams(window.location.search);
  const categoryValue = urlParams.get('category');

  // 檢查是否成功取得值，如果存在該參數，categoryValue 會是該參數的值，否則會是 null
  switch (categoryValue) {
    case 'women':
      console.log("fetch women");
      fetchProduct('women');
      break;
    case 'men':
      console.log("fetch men");
      fetchProduct('men');
      break;
    case 'accessories':
      console.log("fetch accessories");
      fetchProduct('accessories');
      break;
    case 'all':
    case null:
      console.log("fetch all");
      fetchProduct('all');
      break;
    default:
      console.error("Invalid Query");
  }
})

/** Fetching according to category query */
document.addEventListener('click', event => {
  // let elementClicked = "";
  // console.log(event.target);
  console.log(event.target.id);
  const category = event.target.id;

  switchQueryString(event.target.id);

  displayElement("loadingGif");
  removeClassedElement("main__product--container");

  fetchProduct(category);
})