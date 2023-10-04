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
    "main__product--container"
  );
  const productGrid = createClassedElement("div", "main__product product grid");

  apiSourceData.forEach(({ main_image, colors, title, price }) => {
    const productItem = createClassedElement(
      "div",
      "product__item columnFlexBox"
    );
    const productItem_img = createClassedElement("img", "full-width");
    const productItem_colorBox = createClassedElement(
      "ul",
      "product__color--container rowFlexBox flex-space-between"
    );
    const productItem_title = createClassedElement(
      "p",
      "product__description product__productItem_"
    );
    const productItem_price = createClassedElement(
      "p",
      "product__description product__price"
    );

    //  Set image
    productItem_img.src = main_image;
    productItem_img.alt = "product item";

    //  Produce and set colors
    colors.forEach((color) => {
      const productItem_color = createClassedElement(
        "li",
        "product__color--grid bd-lightgrey pointer"
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

const fetchProduct = ({ host, version, endpoint }, category) => {
  fetchData(`${host}/${version}/${endpoint}/${category}`)
    .then(({ data, next_paging }) => {
      removeClassedElement("main__product--container");
      renderProduct(data);
    })
    .catch((error) => {
      console.error(
        "Something went wrong while getting production information",
        error
      );
    })
    .finally(() => {
      hideElement("loadingGif");
    });
};

const switchCategoryQuery = (categoryValue) => {
  const newQueryString = `category=${categoryValue}`;
  const currentUrl = window.location.href;

  if (currentUrl.includes("?")) {
    //  replace existed category value in query string
    const updatedUrl = currentUrl.replace(/category=[^&]+/, newQueryString);
    window.history.pushState({}, "", updatedUrl);
  } else {
    //  if not, add new
    const updatedUrl = currentUrl + "?" + newQueryString;
    window.history.pushState({}, "", updatedUrl);
  }
};

const resetClassList = () => {
  const elements = [women, men, accessories];
  elements.forEach((element) => {
    element.classList.replace("tx-white", "tx-grey82");
    element.classList.replace("wider-tx-brown", "wider-tx-black3a");
  });
};

const fetchProductByCategory = (sourceAPI) => {
  displayElement("loadingGif");

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

export {
  fetchData,
  fetchProduct,
  fetchProductByCategory,
  renderProduct,
  displayElement,
  hideElement,
  removeClassedElement,
  switchCategoryQuery,
};
