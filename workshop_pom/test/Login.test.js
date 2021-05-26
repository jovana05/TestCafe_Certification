import LoginPage from '../pages/Loginpage'
import ProductPage from '../pages/Productspage'
import { URLS,CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)


test('User can login with valid credentials', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)

})

test('User cannot login with invalid credentials', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)

})

test('User cannot login without username', async t =>{
    await LoginPage.submitLoginForm(null,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.MISSING_USERNAME)

})

test('User cannot login without password', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, null)
    await t.expect(LoginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.MISSING_PASSWORD)

})