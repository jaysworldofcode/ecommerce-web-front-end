import { CartModel } from '../model/cart';

class WishListService {
    var key = "ecommerce-my-local-cart";

    
    AddToCart(Product): boolean{
        let storedData = "";
        if(this.IsCurrentCartIsEmpty()){
            storedData = "["+JSON.stringify(Product)+"]";
        }
        localStorage.setItem('ecommerce-my-local-cart', storedData)
        return localStorage.getItem('') != null ? true : false;
    }
    GetCart(): CartModel[]{
        return JSON.parse(localStorage.getItem('ecommerce-my-local-cart')) as CartModel[];
    }
    ClearCart(){
        localStorage.removeItem('ecommerce-my-local-cart');
    }
    IsCurrentCartIsEmpty() {
        return localStorage.getItem('ecommerce-my-local-cart') == null ? true : false;
    }
}

export default CartService