import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import { URLS,CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)


test('User can logout', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
        .click(ProductPage.burgerMenuBtn)
        .click(ProductPage.logoutBtn)

    await t.expect(LoginPage.loginButton.exists).ok()
})