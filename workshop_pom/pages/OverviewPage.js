import {Selector, t} from 'testcafe'

class OverviewPage {
    constructor(){
        this.finishButton = Selector ('#finish')
        this.checkOutOverviewTitle = Selector ('span[class="title"]')
        this.itemCompare = Selector ('.cart_item_label')
    }

    async compareItems (productName){
        await t.expect(this.itemCompare.withText(productName).exists).ok()

    }
}

export default new OverviewPage()