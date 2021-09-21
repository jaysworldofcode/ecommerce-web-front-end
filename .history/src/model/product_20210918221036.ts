class UserModel {
    constructor(Id, ImageURL, ProductName) {
        this.Id;
        this.ImageUrl;
        this.ProductName;
    }

    getId = function(){ return this.Id }

    getImageUrl = function(){ return this.ImageUrl }

    getProductName = function(){ return this.ProductName }

}
  