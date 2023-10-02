const options = {
  method: 'POST', // HTTP Method (如 GET, POST, PUT, DELETE 等)
  headers: {
    'Content-Type': 'application/json'
  }
};

const getProductList = (URL, setting) => {
  fetch(URL, setting)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error('Fetching calculating error:', error);
    });
}

getProductList("https://api.appworks-school.tw/api/1.0/products/all", options);



/* document.getElementById('submitNumber').addEventListener('click', () => {
  const targetnumber = document.getElementById('targetnumber').value;
  fetch('/getData?number=' + targetnumber)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          const resultElement = document.getElementById('result');
          resultElement.innerHTML = `
            <h2>${data.status}</h2>
            <h2>${data.sum? `Result is: ${data.sum}`: "" }</h2>
            <p>${data.countingDescription}</p>
          `;
      })
      .catch(error => {
          console.error('Fetching calculating error:', error);
      });
}); */