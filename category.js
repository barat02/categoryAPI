// const categories = query('https://63731b72348e947299033009.mockapi.io/api/v1/category').then(json => {
//     let div_categories = document.querySelector('.categories');
//     json.forEach(element => {
//         let category = document.createElement('div');
//         category.classList.add('category');
//         category.innerHTML = `<a href="category.html?category=${element.id}">${element.name}</a>`;
//         div_categories.append(category);
//     });
// });

let strGET = window.location.search.replace('?', '');
console.log(strGET);
