import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckOutPage from '../pages/CheckOutPage'
import OverviewPage from '../pages/OverviewPage'
import { URLS,CREDENTIALS, USERINFORMATION, MESSAGES, SHOPPINGCARTITEMS, PRODUCTS } from '../data/Constants'


fixture ('Overview feature test')
    .page(`${URLS.LOGIN_PAGE}`)


test('Validate items in overview page match with the added items', async t =>{

    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
    
    ProductPage.addItems(PRODUCTS.ITEMBACKPACK)
    ProductPage.addItems(PRODUCTS.ITEMBIKELIGHT)

    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.TWOITEMS)
        .click (ShoppingCartPage.shoppingCartBtn)

    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(USERINFORMATION.VALID_INFO.FIRSTNAME,USERINFORMATION.VALID_INFO.LASTNAME,USERINFORMATION.VALID_INFO.ZIP)

    await t.expect(OverviewPage.checkOutOverviewTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTOVERVIEW_PAGE)

    await t.expect(OverviewPage.itemCompare.withText(PRODUCTS.ITEMBACKPACK).exists).ok()
    await t.expect(OverviewPage.itemCompare.withText(PRODUCTS.ITEMBIKELIGHT).exists).ok()
})





