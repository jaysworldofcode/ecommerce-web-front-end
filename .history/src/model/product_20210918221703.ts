export default class ProductModel {
    constructor(Id, ImageURL, ProductName) {
        this.Id = Id;
        this.ImageUrl = ImageURL;
        this.ProductName = ProductName;
    }

    getId = function(){ return this.Id }

    getImageUrl = function(){ return this.ImageUrl }

    getProductName = function(){ return this.ProductName }

}
  