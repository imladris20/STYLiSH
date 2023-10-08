import {
  initialRender,
  handleCategoryClicked,
  widerEnsure,
  searchElements,
  search_button,
  switchSearchBar,
  handleScrolling
} from "./utility.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  endpoints: {
    productList: "products",
    productSearch: "products/search"
  }
};

const mutex = {
  isSearchBarShowed: false,
  currentPage: 0,
  next_paging: 0,
  isScrolled: false
}

document.addEventListener("DOMContentLoaded", () => {
  initialRender(stylishAPI, mutex);
});

window.addEventListener("popstate", () => {
  mutex.currentPage = 0;
  initialRender(stylishAPI, mutex);
});

/** Fetching product again when Categories be clicked */
document.addEventListener("click", (event) => {
  mutex.currentPage = 0;
  handleCategoryClicked(stylishAPI, mutex, event);
  mutex.currentPage = 0;
  handleCategoryClicked(stylishAPI, mutex, event);
});

/** Ensure search form block display well when resize window width */
window.addEventListener("resize", () => {
  widerEnsure(mutex, searchElements);
});

/** Make mobile version search form block show and hide */
search_button.addEventListener("click", (event) => {
  switchSearchBar(mutex, event, searchElements);
});

/** Make scrolling could trigger fetching more products if they exist */
window.addEventListener("scroll", () => {

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= (scrollHeight - 5) && mutex.next_paging > 0) {
    if (mutex.isScrolled) {
      return;
    }
    handleScrolling(stylishAPI, mutex);
  }
}, { passive: true });