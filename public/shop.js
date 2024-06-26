
function fetchProducts(done){
    $.get('http://localhost:3131/api/products/',(data)=>{
        done(data);
    })
}
function addProduct(name,manufacturer,price,done){
    $.post('http://localhost:3131/api/products/',{
        name:name,
        manufacturer:manufacturer,
        price:price
    },(data)=>{
        done(data);
    })
}

function createProductCard(product){
    return $(`
        <div class="col-4 card mx-2 p-2">
            <h4 class="product-name">${product.name.toUpperCase()}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col m-3 p-3">
                    <b>Rs ${product.price}</b>
                </div>
                <button class="btn btn-primary col m-3 p-3">Buy</button>
            </div>
        </div>
    `)
}