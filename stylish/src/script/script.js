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

const productObject = {};

const getProduct = ({data, next_paging}) => {
  const arr = data;
  const page = next_paging
  console.log(arr);
  console.log(page);
};

fetchData(`${api}${apiVersion}${apiFunction}${apiProductCategories[0]}`)
  .then(data => {
    getProduct(data)
  });