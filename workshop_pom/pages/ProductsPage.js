import {Selector,t} from 'testcafe'

class ProductsPage {
    constructor(){
        this.productsTitle = Selector ('span[class="title"]')
        this.burgerMenuBtn = Selector ('#react-burger-menu-btn')
        this.logoutBtn = Selector ('#logout_sidebar_link')
        this.addSingleItem = Selector ('#add-to-cart-sauce-labs-onesie')
        this.addMultipleItems1 = Selector ('#add-to-cart-sauce-labs-fleece-jacket')
        this.addMultipleItems2 = Selector ('#add-to-cart-sauce-labs-bike-light')
        this.addMultipleItems3 = Selector ('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.shoppingCartItems = Selector ('span[class="shopping_cart_badge"]')
        this.itemCompare= Selector ('.inventory_item_description')
    }

    async addItems (productName){
        await t
        .click (this.itemCompare.withText(productName).find ('button'))
    }
}
export default new ProductsPage()