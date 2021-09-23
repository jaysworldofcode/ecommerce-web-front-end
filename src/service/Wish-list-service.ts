import { CartModel } from '../model/cart';

class WishListService {
    localStorageKey:string = "ecommerce-my-local-wish-list";

    AddToWishList(Product): boolean{
        let storedData = "";
        if(this.IsCurrentWishListIsEmpty()){
            storedData = "["+JSON.stringify(Product)+"]";
        }
        localStorage.setItem(this.localStorageKey, storedData)
        return localStorage.getItem('') != null ? true : false;
    }
    GetWishList(): CartModel[]{
        return JSON.parse(localStorage.getItem(this.localStorageKey)) as CartModel[];
    }
    ClearWishList(){
        localStorage.removeItem(this.localStorageKey);
    }
    IsCurrentWishListIsEmpty() {
        return localStorage.getItem(this.localStorageKey) == null ? true : false;
    }
}

export default WishListService