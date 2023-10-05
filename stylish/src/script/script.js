import {
  fetchProductByCategoryQuery,
  fetchProductByKeywordQuery,
  displayElement,
  switchCategoryQuery,
  fetchData,
  searchElements,
  search_form,
  widerEnsure,
  fetchProduct
} from "./app.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  products: "products",
  search: "products/search",
  endpointPaging: "1",
};

/** Initial fetching Product according to queries */
document.addEventListener("DOMContentLoaded", () => {
  const currentParams = new URLSearchParams(window.location.search);
  if (currentParams.get("keyword")){
    console.log("initial by keyword");
    fetchProductByKeywordQuery(stylishAPI)
  } else if (currentParams.get("category")){
    console.log("initial by category");
    fetchProductByCategoryQuery(stylishAPI);
  } else {
    console.log("All queries are invalid.");
    fetchProduct(stylishAPI, 'all')
  }
});

/** Fetching product again when Categories be clicked */
document.addEventListener("click", (event) => {
  const categoryToChange = event.target.id;
  const productType = ["women", "men", "accessories", "all"];
  if (productType.includes(categoryToChange)) {
    switchCategoryQuery(categoryToChange);
    displayElement("loading-gif");
    fetchProductByCategoryQuery(stylishAPI);
  }
});

/** Make sure previous and next button still functioning */
window.addEventListener("popstate", () => {
  fetchProductByCategoryQuery(stylishAPI);
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

/** Ensure searchBlock display well when resize window width */
window.addEventListener("resize", () => {
  widerEnsure(isSearchBarShowed, searchElements)
});
