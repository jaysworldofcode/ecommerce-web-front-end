import { ProductModel } from '../model/product';

class CartService {
    AddToCart(Product): boolean{
        localStorage.setItem('ecommerce-my-local-cart', JSON.stringify(Product))
        return localStorage.getItem('ecommerce-my-local-cart') != null ? true : false;
    }
    GetCart(): ProductModel[]{
        return JSON.parse(localStorage.getItem('ecommerce-my-local-cart')) as ProductModel[];
    }
    ClearCart(){
        localStorage.removeItem('ecommerce-my-local-cart');
    }
}

export default CartService