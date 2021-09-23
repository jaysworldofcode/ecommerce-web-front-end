const PopupMessage = {
methods: {
    AddToCartMessage(ProductName){
        this.$notify({
            title: 'Success',
            message: ProductName+' has been added to cart!',
            type: 'success'
        });
        },
        AddToWishList(ProductName){
        this.$notify({
            title: 'Success',
            message: ProductName+' has been added to cart!',
            type: 'success'
        });
        },
    }
}

export default PopupMessage;