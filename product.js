let strGET = window.location.search.replace('?', '')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );


console.log(strGET)


const categories = fetch(`https://63731b72348e947299033009.mockapi.io/api/v1/category/${strGET.category}/products`)
    .then(responce => responce.json())
    .then(json => {
        console.log(json);
        let div_products = document.querySelector('.products');
        json.forEach(element => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <div>
                    <div class="item-title">${element.title}</div>
                    <div class="item-image">
                        <img src="${element.image}" alt="" width="400px">
               
                    <div class="item-price">price: <span id="price">${element.price}</span>$</div>
                </div>
                
            `;

        div_products.append(item);
    });

});


