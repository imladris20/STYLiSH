const search_button = document.getElementById("search-form__submit");
const search_form = document.getElementById("search-form");
const header__right_section_wrapper = document.getElementById(
  "header__right-section-wrapper"
);
const search_container = document.getElementById("search-container");
const search_form__input = document.getElementById("search-form__input");

const searchElements = [
  search_form,
  header__right_section_wrapper,
  search_container,
  search_form__input,
];

//* Common functions */
const displayElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = "block";
};

const displayInlineBlock = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = "inline-block";
};

const hideElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  if (target) {
    target.style.display = "none";
  }
};

const removeClassedElement = (elementClassName) => {
  const elementToRemove = document.querySelector(`.${elementClassName}`);
  if (elementToRemove) {
    elementToRemove.remove();
  }
};

const createClassedElement = (element, className) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  return newElement;
};

const notFound = () => {
  removeClassedElement("main__product-container");

  const main = document.querySelector("main");
  const notExistBlock = createClassedElement("div", "keyword-not-exist");
  const notExistImg = createClassedElement("img", "keyword-not-exist__img");

  //  Set image
  notExistImg.src = "/no-product.png";
  notExistImg.alt = "invalid keyword";

  notExistBlock.append(notExistImg);
  main.append(notExistBlock);
  console.error("There is no result for this url.");
};

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (Error) {
    console.error("Queries are invalid.", Error);
    throw Error;
  }
}

const fetchProduct = async (
  { host, version, endpoints },
  currentParamKey,
  queryValue,
  pageToFetch
) => {
  // displayElement("loading-gif");
  switch (currentParamKey) {
    case "category":
      return await fetchData(
        `${host}/${version}/${endpoints.productList}/${queryValue}?paging=${pageToFetch}`
      );
    case "search":
      return await fetchData(
        `${host}/${version}/${endpoints.productSearch}?keyword=${queryValue}&paging=${pageToFetch}`
      );
    default:
      console.error("fetchProduct failed");
  }
};

//* Initial Products Rendering related */

const renderProduct = (apiSourceData) => {
  displayElement("loading-gif");
  removeClassedElement("main__product-container");

  const main = document.querySelector("main");
  const productContainer = createClassedElement(
    "div",
    "main__product-container"
  );
  const productGrid = createClassedElement("div", "product-list grid");

  apiSourceData.forEach(({ id, main_image, colors, title, price }) => {
    const productItem = createClassedElement(
      "div",
      "product-item column-flex pointer"
    );
    const productItem_img = createClassedElement(
      "img",
      "product-item__img full-width pointer"
    );
    const productItem_colorBox = createClassedElement(
      "ul",
      "product-item__color-container row-flex flex-x-start pointer"
    );
    const productItem_title = createClassedElement(
      "p",
      "product-item__title pointer"
    );
    const productItem_price = createClassedElement(
      "p",
      "product-item__price pointer"
    );

    //  Set image
    productItem_img.src = main_image;
    productItem_img.alt = "product item";

    //  Produce and set colors
    colors.forEach((color) => {
      const productItem_color = createClassedElement(
        "li",
        "product-item__color-grid bd-lightgrey pointer"
      );
      productItem_color.style.backgroundColor = `#${color.code}`;
      productItem_colorBox.append(productItem_color);
    });

    //  Set title
    productItem_title.textContent = title;

    //  Set price
    productItem_price.textContent = `TWD.${price}`;

    productItem.append(
      productItem_img,
      productItem_colorBox,
      productItem_title,
      productItem_price
    );

    productItem.addEventListener("click", () => {
      window.open(`./product/${id}`, "_self");
    });

    productGrid.append(productItem);
  });

  productContainer.append(productGrid);

  main.insertBefore(productContainer, document.querySelector(".scroll-loader"));
};

const handleRenderSuccess = (data) => {
  renderProduct(data);
  hideElement("loading-gif");
  hideElement("scroll-loader");
};

const handleRenderFail = (error) => {
  console.error("Something went wrong", error);
  hideElement("loading-gif");
  hideElement("scroll-loader");
};

const initialRender = (stylishAPI, mutex) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const currentParams = new URLSearchParams(window.location.search);
  const categoryValue = currentParams.get("category");
  const keywordValue = currentParams.get("keyword");
  const pagingValue = currentParams.get("paging");

  if (pagingValue) {
    mutex.currentPage = pagingValue;
  }

  if (currentParams.has("keyword")) {
    fetchProduct(stylishAPI, "search", keywordValue, mutex.currentPage)
      .then(({ data, next_paging }) => {
        if (next_paging) {
          mutex.next_paging = next_paging;
        }
        handleKeywordRender(data, keywordValue);
      })
      .catch(handleRenderFail);
  } else if (
    currentParams.has("category") &&
    categoryTypesList.includes(categoryValue)
  ) {
    fetchProduct(stylishAPI, "category", categoryValue, mutex.currentPage)
      .then(({ data, next_paging }) => {
        if (next_paging) {
          mutex.next_paging = next_paging;
        }
        handleCategoryRender(data, categoryValue);
      })
      .catch(handleRenderFail);
  } else {
    console.error("There's no valid queries.");
    fetchProduct(stylishAPI, "category", "all", mutex.currentPage)
      .then(({ data, next_paging }) => {
        if (next_paging) {
          mutex.next_paging = next_paging;
        }
        handleRenderSuccess(data);
      })
      .catch(handleRenderFail);
  }
};

//* Category related */
const highlightCategoryTagStyle = (categoryToChange) => {
  const categoryTypesList = ["women", "men", "accessories"];
  resetCategoryTagClassList();
  if (categoryTypesList.includes(categoryToChange)) {
    const selectedElement = document.querySelector(`#${categoryToChange}`);
    selectedElement.classList.replace("tx-grey82", "tx-white");
    selectedElement.classList.replace("wider-tx-black3a", "wider-tx-brown");
  }
};

const resetCategoryTagClassList = () => {
  const women = document.getElementById("women");
  const men = document.getElementById("men");
  const accessories = document.getElementById("accessories");

  const elements = [women, men, accessories];
  elements.forEach((element) => {
    element.classList.replace("tx-white", "tx-grey82");
    element.classList.replace("wider-tx-brown", "wider-tx-black3a");
  });
};

const switchCategoryQuery = (categoryValue) => {
  //  get curent website URL
  const currentUrl = new URL(window.location.href);
  //  get the queries of currentUrl
  const currentParams = new URLSearchParams(currentUrl.search);
  //  add category key and value into ueries of currentUrl
  hideElement("keyword-not-exist");
  currentParams.delete("keyword");
  currentParams.delete("paging");
  currentParams.set("category", categoryValue);
  currentUrl.search = currentParams.toString();
  window.history.pushState({}, "", currentUrl.toString());
};

const handleCategoryRender = (data, categoryValue) => {
  removeClassedElement("keyword-not-exist");
  if (data.length) {
    highlightCategoryTagStyle(categoryValue);
    handleRenderSuccess(data);
  } else {
    console.error("Invalid paging number");
    notFound();
  }
};

const handleCategoryClicked = (stylishAPI, mutex, event) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const categoryToChange = event.target.id;

  if (categoryTypesList.includes(categoryToChange)) {
    switchCategoryQuery(categoryToChange);
    displayElement("loading-gif");
    fetchProduct(stylishAPI, "category", categoryToChange, mutex.currentPage)
      .then(({ data, next_paging }) => {
        mutex.next_paging = next_paging;
        handleCategoryRender(data, categoryToChange);
      })
      .catch(handleRenderFail);
  }
};

//* Searching related */
const widerEnsure = (mutex, elementsToChange) => {
  if (window.innerWidth > 1279) {
    mutex.isSearchBarShowed = true;
    elementsToChange.forEach((element) => {
      element.classList.remove(element.id + "--clicked");
    });
  } else {
    mutex.isSearchBarShowed = false;
  }
};

const showInvalidKeyword = (keywordValue) => {
  const main = document.querySelector("main");
  const notExistBlock = createClassedElement("div", "keyword-not-exist");
  const notExistText = createClassedElement("h1", "keyword-not-exist__text");
  const notExistImg = createClassedElement("img", "keyword-not-exist__img");

  //  Set image
  notExistImg.src = "/no-product.png";
  notExistImg.alt = "invalid keyword";

  //  Set text
  notExistText.textContent = `找不到符合「${keywordValue}」的商品`;
  notExistBlock.append(notExistText, notExistImg);
  main.append(notExistBlock);
  console.error("There is no result for this keyword");
};

const switchSearchBar = (mutex, event, elementsToChange) => {
  const searchDistracter = document.querySelector(".search-distracter");
  searchDistracter.classList.replace("mobile-hide", "mobile-show");

  function clickHandler() {
    elementsToChange.forEach((element) => {
      element.classList.toggle(element.id + "--clicked");
    });
    mutex.isSearchBarShowed = !mutex.isSearchBarShowed;
    searchDistracter.classList.replace("mobile-show", "mobile-hide");
    searchDistracter.removeEventListener("click", clickHandler);
  }

  searchDistracter.addEventListener("click", clickHandler);

  if (window.innerWidth > 1279) {
    elementsToChange[0].submit();
  } else {
    if (!mutex.isSearchBarShowed) {
      elementsToChange.forEach((element) => {
        element.classList.toggle(element.id + "--clicked");
      });
      mutex.isSearchBarShowed = !mutex.isSearchBarShowed;
      event.preventDefault();
    } else {
      mutex.isSearchBarShowed = !mutex.isSearchBarShowed;
      elementsToChange[0].submit();
    }
  }
};

const handleKeywordRender = (data, keywordValue) => {
  if (!data || data.length === 0) {
    hideElement("loading-gif");
    hideElement("scroll-loader");
    removeClassedElement("keyword-not-exist");
    removeClassedElement("main__product-container");
    showInvalidKeyword(keywordValue);
  } else {
    removeClassedElement("main__product-container");
    handleRenderSuccess(data);
  }
};

//* Infinite Scrolling related  */

const fetchNextPaging = async (stylishAPI, next_paging) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const currentParams = new URLSearchParams(window.location.search);
  const categoryValue = currentParams.get("category");
  const keywordValue = currentParams.get("keyword");

  if (currentParams.has("keyword")) {
    const response = await fetchProduct(
      stylishAPI,
      "search",
      keywordValue,
      next_paging
    );
    return response;
  } else if (
    currentParams.has("category") &&
    categoryTypesList.includes(categoryValue)
  ) {
    const response = await fetchProduct(
      stylishAPI,
      "category",
      categoryValue,
      next_paging
    );
    return response;
  } else {
    const response = await fetchProduct(
      stylishAPI,
      "category",
      "all",
      next_paging
    );
    return response;
  }
};

const renderMoreProducts = ({ data }) => {
  const productList = document.querySelector(".product-list");

  data.forEach(({ id, main_image, colors, title, price }) => {
    const productItem = createClassedElement(
      "div",
      "product-item column-flex pointer"
    );
    const productItem_img = createClassedElement(
      "img",
      "product-item__img full-width pointer"
    );
    const productItem_colorBox = createClassedElement(
      "ul",
      "product-item__color-container row-flex flex-x-start pointer"
    );
    const productItem_title = createClassedElement(
      "p",
      "product-item__title pointer"
    );
    const productItem_price = createClassedElement(
      "p",
      "product-item__price pointer"
    );

    //  Set image
    productItem_img.src = main_image;
    productItem_img.alt = "product item";

    //  Produce and set colors
    colors.forEach((color) => {
      const productItem_color = createClassedElement(
        "li",
        "product-item__color-grid bd-lightgrey pointer"
      );
      productItem_color.style.backgroundColor = `#${color.code}`;
      productItem_colorBox.append(productItem_color);
    });

    //  Set title
    productItem_title.textContent = title;

    //  Set price
    productItem_price.textContent = `TWD.${price}`;

    productItem.append(
      productItem_img,
      productItem_colorBox,
      productItem_title,
      productItem_price
    );

    productItem.addEventListener("click", () => {
      window.open(`./product/${id}`, "_self");
    });

    productList.append(productItem);
  });
};

const handleScrolling = async (stylishAPI, mutex) => {
  mutex.isScrolled = true;
  displayInlineBlock("scroll-loader");
  try {
    const nextPageData = await fetchNextPaging(stylishAPI, mutex.next_paging);
    mutex.currentPage++;
    if (nextPageData.next_paging) {
      mutex.next_paging = nextPageData.next_paging;
    } else {
      mutex.next_paging = 0;
    }
    renderMoreProducts(nextPageData);
  } catch (Error) {
    console.error("Handling failed. Message: ", Error);
  } finally {
    hideElement("scroll-loader");
    mutex.isScrolled = false;
  }
};

//* Campaigns Carousel related */

const fetchCampaigns = async ({ host, version, endpoints }) => {
  const data = await fetchData(`${host}/${version}/${endpoints.campaigns}`);
  return data;
};

const renderCarousel = ({ data }) => {
  const carousel = document.querySelector(".carousel");

  data.forEach(({ product_id, picture, story }) => {
    const campaignItem = createClassedElement(
      "div",
      "campaignItem fade relative wider-row-flex flex-align-center flex-space-center pointer"
    );
    const campaignItem__image = createClassedElement(
      "img",
      "campaignItem__image full-width"
    );
    const campaignItem__story_container = createClassedElement(
      "div",
      "campaignItem__story-container full-width wider-absolute"
    );
    const campaignItem__story = createClassedElement(
      "div",
      "campaignItem__story absolute text-left tx-black wider-tx-black07"
    );
    const campaignItem__story_description = createClassedElement(
      "p",
      "campaignItem__story-description text-left margin-block-none"
    );
    const campaignItem__story_quote = createClassedElement(
      "h4",
      "campaignItem__story-quote wider-tx-size20 text-left margin-block-none"
    );

    //  make campaignItem redirect to corresponding link after clicked
    campaignItem.addEventListener("click", () => {
      window.open(`./product/${product_id}`, "_self");
    });

    //  set Image
    campaignItem__image.src = picture;
    campaignItem__image.alt = "campaign item";

    //  set Story
    story = story.replace(/\r\n/g, "<br />");
    const lastIndexOfLineBreak = story.lastIndexOf("<br />");
    if (lastIndexOfLineBreak !== -1) {
      campaignItem__story_description.innerHTML = `${story.slice(
        0,
        lastIndexOfLineBreak
      )}`;
      campaignItem__story_quote.textContent = story.slice(
        lastIndexOfLineBreak + 6
      );
    } else {
      console.error("Campaign Story is not as expected.");
    }

    campaignItem__story.append(
      campaignItem__story_description,
      campaignItem__story_quote
    );
    campaignItem__story_container.append(campaignItem__story);
    campaignItem.append(campaignItem__image, campaignItem__story_container);
    carousel.append(campaignItem);
  });
};

const createDots = ({ data }, mutex) => {
  const carousel = document.querySelector(".carousel");

  const carousel__dots_container = createClassedElement(
    "div",
    "carousel__dots-container row-flex flex-space-between flex-align-center absolute"
  );

  for (let i = 0; i < data.length; i++) {
    const carousel__dot_link = createClassedElement(
      "a",
      "carousel__dot-link pointer"
    );
    const carousel__dot = createClassedElement(
      "div",
      "carousel__dot radius-100 bg-white wider-bg-white"
    );

    carousel__dot_link.append(carousel__dot);
    carousel__dot_link.addEventListener("click", () => {
      switchCampaign(i, mutex);
    });
    carousel__dots_container.append(carousel__dot_link);
  }

  carousel.append(carousel__dots_container);
};

const nextCampaign = (amount, mutex) => {
  mutex.campaignIndex += amount;
  showCampaign(mutex.campaignIndex, mutex);
};

function switchCampaign(number, mutex) {
  mutex.campaignIndex = number;
  showCampaign(mutex.campaignIndex, mutex);
}

const autoSwitch = (mutex) => {
  nextCampaign(1, mutex);
};

function startAutoSwitch(mutex) {
  mutex.autoInterval = setInterval(() => autoSwitch(mutex), 5000);
}

function stopAutoSwitch(mutex) {
  clearInterval(mutex.autoInterval);
}

const showCampaign = (number, mutex) => {
  let campaigns = document.getElementsByClassName("campaignItem");
  let dots = document.getElementsByClassName("carousel__dot");

  //  if overflow, reset
  if (number >= campaigns.length) {
    mutex.campaignIndex = 0;
  }

  //  hide all campaigns
  for (let i = 0; i < campaigns.length; i++) {
    campaigns[i].classList.remove("wider-row-flex");
    campaigns[i].classList.add("mobile-hide", "wider-hide");
  }

  //  set all dots to white
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-brown");
    dots[i].classList.add("bg-white", "wider-bg-white");
  }

  //  display only currentindex and color corresponding dot to brown.
  campaigns[mutex.campaignIndex].classList.remove("wider-hide", "mobile-hide");
  campaigns[mutex.campaignIndex].classList.add("wider-row-flex");
  dots[mutex.campaignIndex].classList.remove("bg-white", "wider-bg-white");
  dots[mutex.campaignIndex].classList.add("bg-brown");
};

export {
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
};
