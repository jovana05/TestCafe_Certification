import {Selector} from 'testcafe'

class ConfirmationPage {
    constructor(){
        this.confirmationTitle = Selector ('span[class="title"]')
    }

}
export default new ConfirmationPage()
