import {Selector} from 'testcafe'

class ShoppingCartPage {
    constructor(){
        this.shoppingCartTitle = Selector ('span[class="title"]')
        this.shoppingCartBtn = Selector ('a[class="shopping_cart_link"]')
        this.checkOutButton = Selector ('#checkout')
    }
}
export default new ShoppingCartPage()