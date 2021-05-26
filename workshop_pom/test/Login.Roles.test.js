import { locked_out_user, performance_glitch_user, problem_user, standard_user } from '../pages/LoginRolesPage'
import ProductPage from '../pages/ProductsPage'
import {MESSAGES} from '../data/Constants'

fixture ('Login with user role feature test')

test('User can login as Stardard user', async t =>{
    await t.useRole(standard_user)
    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
})

test('User cannot login as Locked Out user', async t =>{
    await t.useRole(locked_out_user)
})

test('User can login as Problem user', async t =>{
    await t.useRole(problem_user)
    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
})

test('User can login as Performance Glitch user', async t =>{
    await t.useRole(performance_glitch_user)
    await t.expect(ProductPage.productsTitle.innerText).eql(MESSAGES.PAGES_TITLES.PRODUCT_PAGE)
})