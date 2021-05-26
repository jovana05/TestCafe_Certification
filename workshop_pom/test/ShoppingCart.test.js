import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { URLS,CREDENTIALS, SHOPPINGCARTITEMS,MESSAGES } from '../data/Constants'


fixture('Shopping Cart feature')
    .page(`${URLS.LOGIN_PAGE}`)


test('User can navigate to the shopping cart ', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ShoppingCartPage.shoppingCartBtn)
    
        await t.expect(ShoppingCartPage.shoppingCartTitle.innerText).eql(MESSAGES.PAGES_TITLES.SHOPPINGCART_PAGE)
    })

test('User can add a single item to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click (ProductPage.addSingleItem)
  
    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.ONEITEM)
})

test('User can add multiple items to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click(ProductPage.addMultipleItems1)
        .click(ProductPage.addMultipleItems2)
        .click(ProductPage.addMultipleItems3)

    await t.expect(ProductPage.shoppingCartItems.innerText).eql(SHOPPINGCARTITEMS.THREEITEMS)

})


