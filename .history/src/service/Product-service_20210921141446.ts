import { ProductModel } from '../model/product';
import delay from '../shared/delay';

class ProductService {
    async GetProductById(ProductId){
        // await timer(1000).pipe(take(1)).toPromise();
        await delay(40000);
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
            Price: "4400.00",
        } as ProductModel
    }
}

export default ProductService