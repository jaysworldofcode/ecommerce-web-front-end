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
                "https://img.pngio.com/nike-running-shoes-free-png-image-png-arts-free-png-athletic-shoes-640_640.png"
            ],
            ProductName: "Nike Shoes - GX Stopper",
            Color: [
                "blue",
                "yellow",
                "green",
                "brown"
            ],
            Price: "4400.00",
            Size: [
                "US 8",
                "US 6"
            ]
        } as ProductModel
    }
    async FetchRecommendedProduct(){
        await delay(2000);
        return [
            {
                Id: "0",
                ItemCode: "GXS-400",
                ImageURL: [
                    "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                    "https://img.pngio.com/nike-running-shoes-free-png-image-png-arts-free-png-athletic-shoes-640_640.png"
                ],
                ProductName: "Nike Shoes - GX Stopper",
                Color: [
                    "blue",
                    "yellow",
                    "green",
                    "brown"
                ],
                Price: "4400.00",
            } as ProductModel,
            {
                Id: "1",
                ItemCode: "GXS-400",
                ImageURL: [
                    "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                    "https://img.pngio.com/nike-running-shoes-free-png-image-png-arts-free-png-athletic-shoes-640_640.png"
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
        ]
    }
    async FetchProductByType(ProductType){
        await delay(2000);
        return [
            {
                Id: "0",
                ItemCode: "GXS-400",
                ImageURL: [
                    "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                    "https://img.pngio.com/nike-running-shoes-free-png-image-png-arts-free-png-athletic-shoes-640_640.png"
                ],
                ProductName: "Nike Shoes - GX Stopper",
                Color: [
                    "blue",
                    "yellow",
                    "green",
                    "brown"
                ],
                Price: "4400.00",
            } as ProductModel,
            {
                Id: "1",
                ItemCode: "GXS-400",
                ImageURL: [
                    "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
                    "https://img.pngio.com/nike-running-shoes-free-png-image-png-arts-free-png-athletic-shoes-640_640.png"
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
        ]
    }
}

export default ProductService