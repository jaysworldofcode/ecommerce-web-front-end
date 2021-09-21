import { ProductModel } from '../model/product';
import { timer } from 'rxjs';

class ProductService {
    async GetProductById(ProductId){
        // await timer(1000).pipe(take(1)).toPromise();

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