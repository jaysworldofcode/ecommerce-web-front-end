import { ProductModel } from '../model/product';

export interface HomeModel {
    CarouselImageURL: string[];
    GoalImageURL: string;
    RecomendedProduct: ProductModel[]
}