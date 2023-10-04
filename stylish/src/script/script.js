import {
  fetchProductByCategory,
  displayElement,
  switchCategoryQuery,
} from "./app.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  endpoint: "products",
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
  // console.log("you click: ", categoryToChange);
  if (productType.includes(categoryToChange)) {
    switchCategoryQuery(categoryToChange);
    displayElement("loadingGif");
    fetchProductByCategory(stylishAPI);
  }
});

/** Make sure previous and next button still functioning */
window.addEventListener("popstate", () => {
  fetchProductByCategory(stylishAPI);
});
