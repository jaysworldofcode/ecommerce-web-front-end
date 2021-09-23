import { ProductModel } from '../model/product';

class CartService {
    AddToCart(Product): boolean{
        let storedData = "";
        if(this.IsCurrentCartIsEmpty()){
            storedData = "["+JSON.stringify(Product)+"]";
        }
        localStorage.setItem('ecommerce-my-local-cart', storedData)
        return localStorage.getItem('ecommerce-my-local-cart') != null ? true : false;
    }
    GetCart(): ProductModel[]{
        return JSON.parse(localStorage.getItem('ecommerce-my-local-cart')) as ProductModel[];
    }
    ClearCart(){
        localStorage.removeItem('ecommerce-my-local-cart');
    }
    IsCurrentCartIsEmpty() { return localStorage.getItem('ecommerce-my-local-cart') != null ? true : false; }
}

export default CartService