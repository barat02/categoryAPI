function query(url, method = 'GET', data = []) {
    let query;
    switch (method) {
        case 'GET':
        default:
            query = fetch(url);
        break;

        case 'POST':
            query = fetch(url,{
                method: 'POST',
                body:JSON.stringify(data),
                headers: {
                    'content-type ' : 'application/json'
                }
            })
        break;
    }

    return query.then(result => result.json());
}

const categories = query('https://63731b72348e947299033009.mockapi.io/api/v1/category').then(json => {
    let div_categories = document.querySelector('.categories');
    json.forEach(element => {
        let category = document.createElement('div');
        category.classList.add('category');
        category.innerHTML = `<a href="category.html?category=${element.kairat}">${element.name}</a>`;
        div_categories.append(category);
    });
});
    
    