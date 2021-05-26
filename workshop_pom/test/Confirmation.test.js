import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckOutPage from '../pages/CheckOutPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import { URLS,CREDENTIALS, USERINFORMATION, SHOPPINGCARTITEMS, MESSAGES } from '../data/Constants'


fixture ('Confirmation feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test ('User can navigate to Confirmation page)', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click(ProductPage.addMultipleItems1)
        .click(ProductPage.addMultipleItems2)
        .click(ProductPage.addMultipleItems3)

    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.THREEITEMS)
        .click (ShoppingCartPage.shoppingCartBtn)

    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(USERINFORMATION.VALID_INFO.FIRSTNAME,USERINFORMATION.VALID_INFO.LASTNAME,USERINFORMATION.VALID_INFO.ZIP)

    await t.expect(OverviewPage.checkOutOverviewTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTOVERVIEW_PAGE)
        .click(OverviewPage.finishButton)

    await t.expect(ConfirmationPage.confirmationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CONFIRMATION_PAGE)
})