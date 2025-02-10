// Synchron und asynchron in JavaScript
// https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/

// console.log('START');

// const time = Date.now();
// while (Date.now() - time < 5000) {}

// console.log('END');

// ASYNC
// console.log('START');

// setTimeout(() => {
//   console.log('wird später ausgeführt');
// }, 5000);

// console.log('END');

// GET REQUEST
// fetch('https://fakestoreapi.com/products').then((response) =>
//   console.log(response)
// );

// FETCH
// fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('you will see this in any condiiton'));

// RENDER PRODUCTS
// function renderProducts(products) {
//   const productList = document.getElementById('product-list');
//   productList.innerHTML = '';

//   products.forEach((product) => {
//     const productItem = document.createElement('li');
//     // productItem.classList.add('product');

//     productItem.innerHTML = `
//     <h2>${product.title}</h2>
//     <p>Price: $ ${product.price}</p>
//     <p>${product.description}</p>
//     <img src="${product.image}" alt="something" width=100" />

//     `;

//     productList.appendChild(productItem);
//   });
// }

// fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     renderProducts(data);
//   });

// POST REQUEST
// fetch('https://fakestoreapi.com/products', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json', // header für JSON-DATEN
//   },
//   body: JSON.stringify({
//     title: 'Test Product',
//     price: 29.99,
//     description: 'This is a test product',
//     image: 'something.png',
//     category: 'electronics',
//   }),
// })
//   .then((response) => {
//     if (!response.ok) throw new Error('Request failed');
//     return response.json();
//   })
//   .then((data) => console.log('Produkt erstellt:', data))
//   .catch((error) => console.error('WDG21:', error))
//   .finally(() => console.log('you will see this in any condiiton'));

// ASYNC AWAIT

// async function fetchProducts() {
//   const response = await fetch('https://fakestoreapi.com/products');
//   if (!response.ok) throw new Error('REquest failed');
//   const data = await response.json();
//   console.log(data);
// }

// fetchProducts();

// async function fetchProducts() {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//     if (!response.ok) throw new Error('REquest failed');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('you will see this in any condition');
//   }
// }

// fetchProducts();
