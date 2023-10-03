import {fetchData, renderProduct, displayElement, hideElement} from './app.js';

const apiHost = "https://api.appworks-school.tw/api";
const apiVersion = "/1.0";
const apiFunction = "/products";
const apiProductPaging = "";

document.addEventListener('DOMContentLoaded', () => {
  
  displayElement("loadingGif");

  // fetch: https://api.appworks-school.tw/api/1.0/products/all
  fetchData(`${apiHost}${apiVersion}${apiFunction}/all`)
    .then(({data, next_paging}) => {
      renderProduct(data);
    })
    .catch(error => {
      console.error("Something went wrong while getting production information", error);
    })
    .finally(()=> {
      hideElement("loadingGif");
    })

});