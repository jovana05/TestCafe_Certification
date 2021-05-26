import {Selector,t,Role} from 'testcafe'
import { URLS, USERROLES, MESSAGES} from '../data/Constants'


        const usernameField = Selector ('input[name="user-name"]')
        const passwordField = Selector ('input[name="password"]')
        const loginButton = Selector('input[name="login-button"]')
        const errorMessage = Selector ('div[class="error-message-container error"]')


    async function submitLoginForm(username, password) {
        
        await t.typeText (usernameField, username , {paste:true})
        await t.typeText (passwordField, password, {paste:true})
        await t.click(loginButton)    
    }

 export  const standard_user = Role(URLS.LOGIN_PAGE, async t => {
        await submitLoginForm(USERROLES.STANDARD_USER.USERNAME,USERROLES.STANDARD_USER.PASSWORD)
    },
    {preserveUrl: true});

export  const locked_out_user = Role(URLS.LOGIN_PAGE, async t => {
        await submitLoginForm(USERROLES.LOCKED_OUT_USER.USERNAME,USERROLES.LOCKED_OUT_USER.PASSWORD)
        await t.expect(errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOCKEDOUT)

    },
    {preserveUrl: true});

export  const problem_user = Role(URLS.LOGIN_PAGE, async t => {
        await submitLoginForm(USERROLES.PROBLEM_USER.USERNAME,USERROLES.PROBLEM_USER.PASSWORD)
    },
    {preserveUrl: true});

export  const performance_glitch_user = Role(URLS.LOGIN_PAGE, async t => {
        await submitLoginForm(USERROLES.PERFORMANCE_GLITCH_USER_USER.USERNAME,USERROLES.PERFORMANCE_GLITCH_USER_USER.PASSWORD)
    },
    {preserveUrl: true});