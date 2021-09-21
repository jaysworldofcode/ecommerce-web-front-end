import { ProductModel } from '../model/product';

class ProductService {
    async GetProductById(ProductId){
        return {
            Id: "4",
            ItemCode: "GXS-400",
            ImageURL: [

            ],
            ProductName: "Nike Shoes - GX Stopper";
            Color: [
                "blue",
                "yellow",
                "green",
                "brown"
            ],
            Price: "PHP4,400.00",
        } as ProductModel
    }
}