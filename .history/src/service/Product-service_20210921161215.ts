import { ProductModel } from '../model/product';
import delay from '../shared/delay';

class ProductService {
    async GetProductById(ProductId){
        await delay(2000);
        return {
            Id: ProductId,
            ItemCode: "GXS-400",
            ImageURL: [
                "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
            ],
            ProductName: "Nike Shoes - GX Stopper",
            Color: [
                "blue",
                "yellow",
                "green",
                "brown"
            ],
            Price: "4400.00",
        } as ProductModel
    }
}

export default ProductService