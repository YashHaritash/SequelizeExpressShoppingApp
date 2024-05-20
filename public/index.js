
$(()=>{
    let productList = $('#product-list');
    
    fetchProducts((products)=>{
        productList.empty();
        products.forEach(product => {
            productList.append(createProductCard(product));
        });

    })

})