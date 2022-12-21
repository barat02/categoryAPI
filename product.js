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
                        <img src="${element.image}" alt="" width="300px">
               
                    <div class="item-price">price: <span id="price">${element.price}</span>$</div>
                    <button class="btn-ens-self btn-ens-style" 
                    data-name="your product" data-price="50,70" 

                    data-img="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg">Купить</button>

                
                </div>
                


                
			

                
                
            `;

        div_products.append(item);
    });

});




