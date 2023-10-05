import {
  fetchProductByCategory,
  displayElement,
  switchCategoryQuery,
  fetchData,
  searchElements,
  search_form,
  widerEnsure
} from "./app.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  products: "products",
  search: "products/search",
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

/** Make mobile version search form block show and hide */
const search_button = document.getElementById("search-form__submit");
let isSearchBarShowed = false;
let width = window.innerWidth;

search_button.addEventListener("click", () => {
  if (width > 1279) {
    isSearchBarShowed = true;
  }

  if (!isSearchBarShowed) {
    isSearchBarShowed = !isSearchBarShowed;
    search_form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  } else {
    isSearchBarShowed = !isSearchBarShowed;
    search_form.submit();
  }

  if (width < 1280) {
    searchElements.forEach((element) => {
      element.classList.toggle(element.id + "--clicked");
    });
  }
});

window.addEventListener("resize", () => {
  widerEnsure(isSearchBarShowed, searchElements)
});
