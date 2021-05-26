import {Selector, t} from 'testcafe'

class CheckOutPage {
    constructor(){
        this.checkOutInformationTitle = Selector ('span[class="title"]')
        this.firstNameField = Selector ('#first-name')
        this.lastNameField = Selector ('#last-name')
        this.zipField = Selector ('#postal-code')
        this.continueButton = Selector('#continue')
        this.errorMessage = Selector ('h3')
    }

    async submitUserInfo (firstname, lastname, zip){

        if(firstname != null){
            await t.typeText(this.firstNameField, firstname, {paste:true})
        }
        if (lastname != null){
            await t.typeText(this.lastNameField, lastname, {paste:true})
        }
        if (zip != null){
            await t.typeText(this.zipField, zip, {paste:true})
        }
        await t.click(this.continueButton)
    }
}
export default new CheckOutPage()