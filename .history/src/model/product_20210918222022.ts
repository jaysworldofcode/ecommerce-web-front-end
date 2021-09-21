export default class ProductModel {
    Id = "";
    ImageURL = "";
    ProductName = "";
    
    constructor(Id, ImageURL, ProductName) {
        this.Id = Id;
        this.ImageUrl = ImageURL;
        this.ProductName = ProductName;
    }

    getId(){
        return this.Id;
    }

    getImageUrl(){
        return this.ImageUrl;
    }

    getProductName(){
        return this.ProductName;
    }
}
  