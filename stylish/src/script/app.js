async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching calculating error:", error);
    throw error;
  }
}

const displayElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = "block";
};

const hideElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = "none";
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

const renderProduct = (apiSourceData) => {
  const main = document.querySelector("main");
  const productContainer = createClassedElement(
    "div",
    "main__product-container"
  );
  const productGrid = createClassedElement("div", "product-list grid");

  apiSourceData.forEach(({ main_image, colors, title, price }) => {
    const productItem = createClassedElement("div", "product-item column-flex");
    const productItem_img = createClassedElement(
      "img",
      "product-item__img full-width"
    );
    const productItem_colorBox = createClassedElement(
      "ul",
      "product-item__color-container row-flex flex-x-start"
    );
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
    -productGrid.append(productItem);
  });

  productContainer.append(productGrid);

  main.append(productContainer);
};

const fetchProduct = ({ host, version, products }, category) => {
  fetchData(`${host}/${version}/${products}/${category}`)
    .then(({ data, next_paging }) => {
      removeClassedElement("main__product-container");
      renderProduct(data);
    })
    .catch((error) => {
      console.error(
        "Something went wrong while getting production information",
        error
      );
    })
    .finally(() => {
      hideElement("loading-gif");
    });
};

const switchCategoryQuery = (categoryValue) => {
  //  get curent website URL
  const currentUrl = new URL(window.location.href);
  //  get the queries of currentUrl
  const searchParams = new URLSearchParams(currentUrl.search);
  //  add category key and value into ueries of currentUrl
  searchParams.set("category", categoryValue);
  currentUrl.search = searchParams.toString();
  window.history.pushState({}, "", currentUrl.toString());
};

const resetClassList = () => {
  const elements = [women, men, accessories];
  elements.forEach((element) => {
    element.classList.replace("tx-white", "tx-grey82");
    element.classList.replace("wider-tx-brown", "wider-tx-black3a");
  });
};

const fetchProductByCategory = (sourceAPI) => {
  displayElement("loading-gif");

  const urlParams = new URLSearchParams(window.location.search);
  const categoryValue = urlParams.get("category");

  switch (categoryValue) {
    case "women":
    case "men":
    case "accessories":
      resetClassList();
      const selectedElement = document.querySelector(`#${categoryValue}`);
      selectedElement.classList.replace("tx-grey82", "tx-white");
      selectedElement.classList.replace("wider-tx-black3a", "wider-tx-brown");
      fetchProduct(sourceAPI, categoryValue);
      break;
    case "all":
    case null:
      resetClassList();
      fetchProduct(sourceAPI, "all");
      break;
    default:
      resetClassList();
      fetchProduct(sourceAPI, "all");
      console.error("Invalid Query");
  }
};

//  two word test1: https://api.appworks-school.tw/api/1.0/products/search?keyword=%E6%B4%8B%E8%A3%9D
//  two word test2: https://api.appworks-school.tw/api/1.0/products/search?keyword=%E8%A5%BF%E8%A3%9D
//  one word test: https://api.appworks-school.tw/api/1.0/products/search?keyword=%E7%99%BE
//  no result test: https://api.appworks-school.tw/api/1.0/products/search?keyword=%E7%9A%AE%E5%8D%A1
const searchProduct = ({ host, version, search }, keywordValue) => {
  fetchData(`${host}/${version}/${search}?keyword=${keywordValue}`)
    .then( data => {
      removeClassedElement("main__product-container");
      console.log("search result: ", data);
      renderProduct(data);
    })
    .catch((error) => {
      console.error(
        "Something went wrong while searching",
        error
      );
    })
    .finally(() => {
      hideElement("loading-gif");
    });
};

export {
  fetchData,
  fetchProduct,
  fetchProductByCategory,
  renderProduct,
  displayElement,
  hideElement,
  removeClassedElement,
  switchCategoryQuery,
  searchProduct
};
