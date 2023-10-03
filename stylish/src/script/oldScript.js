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

const apiHost = "https://api.appworks-school.tw/api";
const apiVersion = "/1.0";
const apiFunction = "/products";
const apiProductCategories = ["/all", "/women", "/men", "/accessories"]
const apiProductPaging = "";

document.addEventListener('DOMContentLoaded', () => {

  const productList = Array.from(document.querySelectorAll('.product__item'));
  console.log(productList);

  const productItemColorBoxes = Array.from(document.querySelectorAll('.product__color--container'));
  // console.log(productItemColorBoxes);

  const renderProduct = ({ data, next_paging }) => {

    const arr = data;
    const page = next_paging;

    // console.log(arr);

    for (const [index, productItem] of productList.entries()) {
      const image = productItem.querySelector('img');
      const title = productItem.querySelector('.product__title');
      const price = productItem.querySelector('.product__price');
      const colorSelections = Array.from(productItem.querySelectorAll('ul li'));

      //  Render images
      image.src = arr[index].main_image;
      /*  Render Colors
          colorIndex: 0,1,2
          color: bg of li   */
      for (const [colorIndex, color] of colorSelections.entries()) {
        if (arr[index].colors[colorIndex]) {
          color.style.backgroundColor = `#${arr[index].colors[colorIndex].code}`;
        } else {
          color.style.display = 'none';
        }
      }
      //  Render titles
      title.textContent = arr[index].title;
      //  Render prices
      price.textContent = `TWD.${arr[index].price}`;

    }
  };

  // fetch: https://api.appworks-school.tw/api/1.0/products/all
  fetchData(`${apiHost}${apiVersion}${apiFunction}${apiProductCategories[0]}`)
    .then(data => {
      renderProduct(data)
    })
    .catch(error => {
      console.error("Something went wrong while getting production information", error);
    });

});

export {fetchData, renderProduct};