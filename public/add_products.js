$(()=>{
    let btnProductAdd = $('#btnProductAdd');
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    btnProductAdd.click(()=>{
        addProduct(productName.val(),productManufacturer.val(),productPrice.val(),(product)=>{
            window.alert("Added " + product.name +" to the Database");
        })
    })
})