import { ProductModel } from '../model/product';

class ProductService {
    async GetProductById(ProductId){
        return {
            Id: ProductId,
            ItemCode: "GXS-400",
            ImageURL: [

            ],
            ProductName: "Nike Shoes - GX Stopper",
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

export default ProductService