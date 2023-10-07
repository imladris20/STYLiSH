const search_button = document.getElementById("search-form__submit");
const search_form = document.getElementById("search-form");
const header__right_section_wrapper = document.getElementById("header__right-section-wrapper");
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
  notExistImg.src = "./public/no-product.png";
  notExistImg.alt = "invalid keyword";

  notExistBlock.append(notExistImg);
  main.append(notExistBlock);
  console.error("There is no result for this url.")
}

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

const fetchProduct = async ({ host, version, endpoints }, currentParamKey, queryValue, pageToFetch) => {
  // displayElement("loading-gif");
  switch (currentParamKey) {
    case "category":
      return await (fetchData(`${host}/${version}/${endpoints.productList}/${queryValue}?paging=${pageToFetch}`))
    case "search":
      return await (fetchData(`${host}/${version}/${endpoints.productSearch}?keyword=${queryValue}&paging=${pageToFetch}`))
    default:
      console.error("fetchProduct failed")
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

  apiSourceData.forEach(({ main_image, colors, title, price }) => {
    const productItem = createClassedElement("div", "product-item column-flex");
    const productItem_img = createClassedElement("img", "product-item__img full-width");
    const productItem_colorBox = createClassedElement("ul", "product-item__color-container row-flex flex-x-start");
    const productItem_title = createClassedElement("p", "product-item__title");
    const productItem_price = createClassedElement("p", "product-item__price");

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
    productGrid.append(productItem);
  });

  productContainer.append(productGrid);

  main.insertBefore(productContainer,document.querySelector(".scroll-loader"));
};

const handleRenderSuccess = (data) => {
  renderProduct(data);
  hideElement("loading-gif");
  hideElement("scroll-loader");
}

const handleRenderFail = (error) => {
  console.error("Something went wrong", error);
  hideElement("loading-gif");
  hideElement("scroll-loader");
}

const initialRender = (stylishAPI, mutex) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const currentParams = new URLSearchParams(window.location.search);
  const currentParamKey = Array.from(currentParams.keys());
  const categoryValue = currentParams.get("category");
  const keywordValue = currentParams.get("keyword");

  if (currentParamKey.includes("keyword")) {
    fetchProduct(stylishAPI, "search", keywordValue, mutex.currentPage)
      .then(({ data, next_paging }) => {
        mutex.next_paging = next_paging;
        handleKeywordRender(data, keywordValue)
      })
      .catch(handleRenderFail);
  }

  else if (currentParamKey.includes("category") && categoryTypesList.includes(categoryValue)) {
    fetchProduct(stylishAPI, "category", categoryValue, mutex.currentPage)
      .then(({ data, next_paging }) => {
        mutex.next_paging = next_paging;
        handleCategoryRender(data, categoryValue);
      }) 
      .catch(handleRenderFail);
  }

  else {
    console.error("There's no valid queries.");
    fetchProduct(stylishAPI, "category", "all", mutex.currentPage)
      .then(({ data, next_paging }) => {
        mutex.next_paging = next_paging;
        handleRenderSuccess(data)
      })
      .catch(handleRenderFail);
  }
}

//* Category related */
const highlightCategoryTagStyle = (categoryToChange) => {
  const categoryTypesList = ["women", "men", "accessories"];
  resetCategoryTagClassList();
  if (categoryTypesList.includes(categoryToChange)) {
    const selectedElement = document.querySelector(`#${categoryToChange}`);
    selectedElement.classList.replace("tx-grey82", "tx-white");
    selectedElement.classList.replace("wider-tx-black3a", "wider-tx-brown");
  }
}

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
  currentParams.delete('keyword');
  currentParams.delete('paging');
  currentParams.set("category", categoryValue);
  currentUrl.search = currentParams.toString();
  window.history.pushState({}, "", currentUrl.toString());
};

const handleCategoryRender = (data, categoryValue) => {
  removeClassedElement("keyword-not-exist")
  highlightCategoryTagStyle(categoryValue);
  handleRenderSuccess(data);
}

const handleCategoryClicked = (stylishAPI, mutex, event) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const categoryToChange = event.target.id;
  if (categoryTypesList.includes(categoryToChange)) {
    switchCategoryQuery(categoryToChange);
    // displayElement("loading-gif");
    fetchProduct(stylishAPI, "category", categoryToChange, mutex.currentPage)
      .then(({ data, next_paging }) => {
        mutex.next_paging = next_paging;
        handleCategoryRender(data, categoryToChange);
      })
      .catch(handleRenderFail);
  }
}

//* Searching related */
const widerEnsure = ( mutex, elementsToChange) => {
  if (window.innerWidth > 1279) {
    mutex.isSearchBarShowed = true;
    elementsToChange.forEach((element) => {
      element.classList.remove(element.id + "--clicked");
    });
  } else {
    mutex.isSearchBarShowed = false;
  }
}

const showInvalidKeyword = (keywordValue) => {

  const main = document.querySelector("main");
  const notExistBlock = createClassedElement("div", "keyword-not-exist");
  const notExistText = createClassedElement("h1", "keyword-not-exist__text");
  const notExistImg = createClassedElement("img", "keyword-not-exist__img");

  //  Set image
  notExistImg.src = "./public/no-product.png";
  notExistImg.alt = "invalid keyword";

  //  Set text
  notExistText.textContent = `找不到符合「${keywordValue}」的商品`;
  notExistBlock.append(notExistText, notExistImg);
  main.append(notExistBlock);
  console.error("There is no result for this keyword")
};

const switchSearchBar = (mutex, event, elementsToChange) => {
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
}

const handleKeywordRender = (data, keywordValue) => {
  if (!data || data.length === 0) {
    hideElement("loading-gif");
    hideElement("scroll-loader")
    removeClassedElement("keyword-not-exist")
    removeClassedElement("main__product-container");
    showInvalidKeyword(keywordValue);
  } else {
    removeClassedElement("main__product-container");
    handleRenderSuccess(data)
  }
}

//* Infinite Scrolling related  */

const fetchNextPaging = async (stylishAPI, next_paging) => {
  const categoryTypesList = ["women", "men", "accessories", "all"];
  const currentParams = new URLSearchParams(window.location.search);
  const currentParamKey = Array.from(currentParams.keys());
  const categoryValue = currentParams.get("category");
  const keywordValue = currentParams.get("keyword");

  if (currentParamKey.includes("keyword")) {
    const response = await fetchProduct(stylishAPI, "search", keywordValue, next_paging);
    console.log("response in keyword in fetchNextPaging", response);
    return response
  }

  else if (currentParamKey.includes("category") && categoryTypesList.includes(categoryValue)) {
    const response = await fetchProduct(stylishAPI, "category", categoryValue, next_paging);
    console.log("response in category in fetchNextPaging", response);
    return response
  }

  else {
    const response = await fetchProduct(stylishAPI, "category", "all", next_paging);
    console.log("response in general in fetchNextPaging", response);
    return response;
  }
}

const renderMoreProducts = ({data}) => {

  const productList = document.querySelector(".product-list");

  console.log("Now in productList: ", productList);

  data.forEach(({ main_image, colors, title, price }) => {
    const productItem = createClassedElement("div", "product-item column-flex");
    const productItem_img = createClassedElement("img", "product-item__img full-width");
    const productItem_colorBox = createClassedElement("ul", "product-item__color-container row-flex flex-x-start");
    const productItem_title = createClassedElement("p", "product-item__title");
    const productItem_price = createClassedElement("p", "product-item__price");

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
    productList.append(productItem);
  });
}

const handleScrolling = (stylishAPI, mutex) => {
  mutex.isScrolled = true;
  displayInlineBlock('scroll-loader');
  setTimeout(async () => {
    try {
      console.log("It's handling scrolling.")
      const nextPageData = await fetchNextPaging(stylishAPI, mutex.next_paging);
      mutex.currentPage++;
      console.log("before render", nextPageData);
      if(nextPageData.next_paging){
        mutex.next_paging = nextPageData.next_paging
      } else {
        mutex.next_paging = 0
      }
      renderMoreProducts(nextPageData);
    } catch (Error) {
      console.error("Handling failed. Message: ", Error);
    } finally {
      hideElement('scroll-loader');
      mutex.isScrolled = false;
      console.log("Next page after handling: ", mutex.next_paging);
      console.log("Current Page after handling: ", mutex.currentPage);
    }
  }, 1500);
}

export {
  initialRender,
  handleCategoryClicked,
  widerEnsure,
  searchElements,
  search_button,
  switchSearchBar,
  renderMoreProducts,
  fetchNextPaging,
  handleScrolling,
};
