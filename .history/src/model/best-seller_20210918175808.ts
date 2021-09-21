import { ProductModel } from "./product";

export interface BestSellerModel {
    Items: ProductModel[];
    FilteType: string;
}