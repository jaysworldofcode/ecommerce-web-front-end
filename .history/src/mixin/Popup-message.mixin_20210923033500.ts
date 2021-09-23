const PopupMessage = {
    methods: {
        AddToCartMessage(ProductName){
            this.$notify({
                title: 'Success',
                message: ProductName+' has been added to cart!',
                type: 'success'
            });
        },
        AddToWishListMessage(ProductName){
            this.$notify({
                title: 'Success',
                message: ProductName+' has been added to cart!',
                type: 'success'
            });
        },
    }
}

export default PopupMessage;