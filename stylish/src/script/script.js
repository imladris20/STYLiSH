import {
  fetchProductByCategory,
  displayElement,
  switchCategoryQuery,
} from "./app.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  products: 'products',
  search: 'products/search',
  endpointPaging: "1",
};

/** Initial fetching Product according to category query */
document.addEventListener("DOMContentLoaded", () => {
  fetchProductByCategory(stylishAPI);
});

/** Fetching product again when Categories be clicked */
document.addEventListener("click", (event) => {
  const categoryToChange = event.target.id;
  const productType = ["women", "men", "accessories", "all"];
  if (productType.includes(categoryToChange)) {
    switchCategoryQuery(categoryToChange);
    displayElement("loading-gif");
    fetchProductByCategory(stylishAPI);
  }
});

/** Make sure previous and next button still functioning */
window.addEventListener("popstate", () => {
  fetchProductByCategory(stylishAPI);
});
