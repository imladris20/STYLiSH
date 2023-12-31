import {
  initialRender,
  handleCategoryClicked,
  widerEnsure,
  searchElements,
  search_button,
  switchSearchBar,
  handleScrolling,
  fetchCampaigns,
  renderCarousel,
  createDots,
  showCampaign,
  startAutoSwitch,
  stopAutoSwitch,
} from "./utility.js";

const stylishAPI = {
  host: "https://api.appworks-school.tw/api",
  version: "1.0",
  endpoints: {
    productList: "products",
    productSearch: "products/search",
    campaigns: "marketing/campaigns",
  },
};

const mutex = {
  isSearchBarShowed: false,
  currentPage: 0,
  next_paging: 0,
  isScrolled: false,
  campaignIndex: 0,
  autoInterval: null,
};

document.addEventListener("DOMContentLoaded", async () => {
  // Retrieve the value of 'cartCount' from localStorage
  const cartCount = localStorage.getItem("cartCount");

  // Find the cart-link__counter element in your DOM
  const cartCounterElement = document.querySelectorAll(".cart-link__counter");

  // Update the cart-link__counter element with the value from localStorage
  if (cartCounterElement) {
    cartCounterElement.forEach((element) => {
      element.textContent = cartCount || 0;
    });
  }

  const response = await fetchCampaigns(stylishAPI);
  renderCarousel(response);
  createDots(response, mutex);
  initialRender(stylishAPI, mutex);
  showCampaign(0, mutex);
  startAutoSwitch(mutex);
});

window.addEventListener("popstate", () => {
  mutex.currentPage = 0;
  initialRender(stylishAPI, mutex);
});

/** Fetching product again when Categories be clicked */
document.addEventListener("click", (event) => {
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
window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && mutex.next_paging > 0) {
      if (mutex.isScrolled) {
        return;
      }
      handleScrolling(stylishAPI, mutex);
    }
  },
  { passive: true }
);

/** carousel campaigns optional effects */
document
  .querySelector(".carousel")
  .addEventListener("mouseenter", () => stopAutoSwitch(mutex));
document
  .querySelector(".carousel")
  .addEventListener("mouseleave", () => startAutoSwitch(mutex));
