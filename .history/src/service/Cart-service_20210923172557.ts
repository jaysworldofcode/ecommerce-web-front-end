import { CartModel } from '../model/cart';

class CartService {
    localStorageKey:string = "ecommerce-my-local-cart";

    AddToCart(Product): boolean{
        let storedData = "";
        if(this.IsCurrentCartIsEmpty()){
            storedData = "["+JSON.stringify(Product)+"]";
        }
        localStorage.setItem(this.localStorageKey, storedData)
        return localStorage.getItem(this.localStorageKey) != null ? true : false;
    }
    GetCart(): CartModel[]{
        return JSON.parse(localStorage.getItem(this.localStorageKey)) as CartModel[];
    }
    ClearCart(){
        localStorage.removeItem(this.localStorageKey);
    }
    IsCurrentCartIsEmpty() {
        return localStorage.getItem(this.localStorageKey) == null ? true : false;
    }
}

export default CartService