import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckOutPage from '../pages/CheckOutPage'
import OverviewPage from '../pages/OverviewPage'
import { URLS,CREDENTIALS, USERINFORMATION, MESSAGES, SHOPPINGCARTITEMS } from '../data/Constants'

fixture ('Check out feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('User can navigate to Overview page)', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ProductPage.addSingleItem)
    
    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.ONEITEM)
        .click (ShoppingCartPage.shoppingCartBtn)

    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(USERINFORMATION.VALID_INFO.FIRSTNAME,USERINFORMATION.VALID_INFO.LASTNAME,USERINFORMATION.VALID_INFO.ZIP)

    await t.expect(OverviewPage.checkOutOverviewTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTOVERVIEW_PAGE)

})

test('User cannot navigate to Overview page (missing FirtName)', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ProductPage.addSingleItem)

    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.ONEITEM)
        .click (ShoppingCartPage.shoppingCartBtn)
    
    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(null,USERINFORMATION.VALID_INFO.LASTNAME,USERINFORMATION.VALID_INFO.ZIP)

    await t.expect(CheckOutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_FIRSTNAMEINFO)

})

test('User cannot navigate to Overview page (missing LastName)', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ProductPage.addSingleItem)

    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.ONEITEM)
        .click (ShoppingCartPage.shoppingCartBtn)
    
    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(USERINFORMATION.VALID_INFO.FIRSTNAME,null,USERINFORMATION.VALID_INFO.ZIP)

    await t.expect(CheckOutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LASTNAMEINFO)

})

test('User cannot navigate to Overview page (missing Zip)', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ProductPage.addSingleItem)
    
    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.ONEITEM)
        .click (ShoppingCartPage.shoppingCartBtn)

    await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
        .click(ShoppingCartPage.checkOutButton)

    await t.expect(CheckOutPage.checkOutInformationTitle.innerText).eql(MESSAGES.PAGES_TITLES.CHECKOUTINFO_PAGE)

    await CheckOutPage.submitUserInfo(USERINFORMATION.VALID_INFO.FIRSTNAME,USERINFORMATION.VALID_INFO.LASTNAME,null)

    await t.expect(CheckOutPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_ZIPINFO)

})