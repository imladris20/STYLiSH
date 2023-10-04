async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching calculating error:', error);
    throw error;
  }
}

const displayElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = "block";
}

const hideElement = (elementWithClass) => {
  const target = document.querySelector(`.${elementWithClass}`);
  target.style.display = 'none'
}

const removeClassedElement = (elementClassName) => {
  const elementToRemove = document.querySelector(`.${elementClassName}`);
  console.log("try removing");
  if (elementToRemove) {
    console.log('It will remove');
    elementToRemove.remove();
  }
}

const createClassedElement = (element, className) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  return newElement;
}

const renderProduct = (apiSourceData) => {
  const main = document.querySelector('main');
  const productContainer = createClassedElement("div", "main__product--container");
  const productGrid = createClassedElement('div', "main__product product grid");

  apiSourceData.forEach(({ main_image, colors, title, price }) => {
    const productItem = createClassedElement('div', "product__item columnFlexBox");
    const productItem_img = createClassedElement('img', "full-width");
    const productItem_colorBox = createClassedElement('ul', "product__color--container rowFlexBox flex-space-between");
    const productItem_title = createClassedElement('p', "product__description product__productItem_");
    const productItem_price = createClassedElement('p', "product__description product__price");

    //  Set image
    productItem_img.src = main_image;
    productItem_img.alt = "product item"

    //  Produce and set colors
    colors.forEach(color => {
      const productItem_color = createClassedElement('li', "product__color--grid bd-lightgrey pointer");
      productItem_color.style.backgroundColor = `#${color.code}`;
      productItem_colorBox.append(productItem_color);
    });

    //  Set title
    productItem_title.textContent = title;

    //  Set price
    productItem_price.textContent = `TWD.${price}`;

    productItem.append(productItem_img, productItem_colorBox, productItem_title, productItem_price);
    -
      productGrid.append(productItem);
  })

  productContainer.append(productGrid);

  main.append(productContainer)
};

const switchQueryString = (elementClicked) => {

  const text = document.querySelector(`#${elementClicked}`)
  const women = document.querySelector('.women');
  const men = document.querySelector('.men');
  const accessories = document.querySelector('.accessories');

  const newQueryString = `category=${elementClicked}`;

  // 獲取網址
  const currentUrl = window.location.href;

  // 檢查網址是否已經包含 query string
  if (currentUrl.includes('?')) {
    // 如果已經包含 query string，則替換它
    const updatedUrl = currentUrl.replace(/category=[^&]+/, newQueryString);
    window.history.pushState({}, '', updatedUrl);
  } else {
    // 如果尚未包含 query string，則新增它
    const updatedUrl = currentUrl + '?' + newQueryString;
    window.history.pushState({}, '', updatedUrl);
  }
}

const fetchProduct = (category) => {
  const apiHost = "https://api.appworks-school.tw/api";
  const apiVersion = "/1.0";
  const apiFunction = "/products";

  fetchData(`${apiHost}${apiVersion}${apiFunction}/${category}`)
    .then(({ data, next_paging }) => {
      renderProduct(data);
    })
    .catch(error => {
      console.error("Something went wrong while getting production information", error);
    })
    .finally(() => {
      hideElement("loadingGif");
    })
}

export { fetchData, fetchProduct, renderProduct, displayElement, hideElement, removeClassedElement, switchQueryString };