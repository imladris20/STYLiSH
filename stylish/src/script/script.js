async function fetchData(url){
  try {
    const response = await fetch(url);
    const data =  await response.json();
    return data;
  } catch (error) {
    console.error('Fetching calculating error:', error);
    throw error;
  }
}

const api = "https://api.appworks-school.tw/api";
const apiVersion = "/1.0";
const apiFunction = "/products";
const apiProductCategories = ["/all", "/women", "/men", "/accessories"]
const apiProductPaging = "";

document.addEventListener('DOMContentLoaded', () => {
  
  const productList = Array.from(document.querySelectorAll('.product__item'));
  // console.log(productList);

  const productItemColorBoxes = Array.from(document.querySelectorAll('.product__color--container'));
  // console.log(productItemColorBoxes);

  const renderProduct = ({data, next_paging}) => {

    const arr = data;
    const page = next_paging;
    
    // console.log(arr);

    //  Render images
    productList.map( productItem => productItem.querySelector('img'))
      .forEach ( (image, number) => {
        image.src = arr[number].main_image;
      })

    //  Render titles
    productList.map( productItem => productItem.querySelector('.product__title'))
      .forEach ( (title, number) => {
        title.textContent = arr[number].title; 
      })

    // Render prices
    productList.map( productItem => productItem.querySelector('.product__price'))
      .forEach ((price, number) => {
        price.textContent = `TWD.${arr[number].price}`;
      })

    // Render colors selection
    productItemColorBoxes.map( (productItemColorbox, number) => {
      const selections = Array.from(productItemColorbox.querySelectorAll('li'));
      console.log("selections Array", selections);
      
      for (let j = 0 ; j < 3 ; j++) {
        if (arr[number].colors[j]) {
          console.log(arr[number].colors[j].code);
          console.log("origin-dom", selections[j].style.backgroundColor);
          selections[j].style.backgroundColor = `#${arr[number].colors[j].code}`; 
        } else {
          console.log('none');
          selections[j].style.display = "none";
        }
      }
    })

  };

  fetchData(`${api}${apiVersion}${apiFunction}${apiProductCategories[0]}`)
    .then(data => {
      renderProduct(data)
    })
    .catch (error => {
      console.error("Something went wrong while getting production information", error);
    });

});