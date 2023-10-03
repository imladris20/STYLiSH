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

const createClassedElement = (element, className) => {
  const newElement =document.createElement(element);
  newElement.className = className;
  return newElement;
}

const renderProduct = (apiSourceData) => {

  apiSourceData.forEach ( ({main_image, colors, title, price}) => {

    const main = document.querySelector('main');

    const productContainer = createClassedElement("div", "main__product--container");
    const productGrid = createClassedElement('div', "main__product product grid");
    const productItem = createClassedElement('div', "product__item columnFlexBox");
    const productItem_img = createClassedElement('img', "full-width");
    const productItem_colorBox = createClassedElement('ul', "product__color--container rowFlexBox flex-space-between");
    const productItem_title = createClassedElement('p', "product__description product__productItem_");
    const productItem_price = createClassedElement('p', "product__description product__price");

    //  Set image
    productItem_img.src = main_image;
    productItem_img.alt = "product item"
    
    //  Produce and set colors
    colors.forEach( color => {
      const productItem_color = createClassedElement('li', "product__color--grid bd-lightgrey pointer");
      productItem_color.style.backgroundColor = `#${color.code}`;
      productItem_colorBox.append(productItem_color);
    });

    //  Set title
    productItem_title.textContent = title;

    //  Set price
    productItem_price.textContent = `TWD.${price}`;

    productItem.append(productItem_img, productItem_colorBox, productItem_title, productItem_price);

    productGrid.append(productItem);

    productContainer.append(productGrid);

    main.append(productContainer)
  })

};

export {fetchData, renderProduct, displayElement, hideElement};