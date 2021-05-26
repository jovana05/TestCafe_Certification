export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'standard_user',
        PASSWORD:'secret_sauce',
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD:'invalid_secret_sauce',
    }
}

export const USERINFORMATION = {
    VALID_INFO:{
        FIRSTNAME: 'Jovana',
        LASTNAME: 'Zermeno',
        ZIP: '44960'

    }
}

export const MESSAGES = {
    ERROR_MESSAGES:{
        INVALID_LOGIN: 'Epic sadface: Username and password do not match any user in this service',
        INVALID_LOCKEDOUT: 'Epic sadface: Sorry, this user has been locked out.',
        MISSING_USERNAME: 'Epic sadface: Username is required',
        MISSING_PASSWORD: 'Epic sadface: Password is required',
        INVALID_FIRSTNAMEINFO: 'Error: First Name is required',
        INVALID_LASTNAMEINFO : 'Error: Last Name is required',
        INVALID_ZIPINFO: 'Error: Postal Code is required'

    },
    PAGES_TITLES:{
        PRODUCT_PAGE: 'PRODUCTS',
        SHOPPINGCART_PAGE: 'YOUR CART',
        CHECKOUTINFO_PAGE: 'CHECKOUT: YOUR INFORMATION',
        CHECKOUTOVERVIEW_PAGE: 'CHECKOUT: OVERVIEW',
        CONFIRMATION_PAGE: 'CHECKOUT: COMPLETE!'

    }
}

export const SHOPPINGCARTITEMS = {
    THREEITEMS: '3',
    TWOITEMS: '2',
    ONEITEM: '1'
}

export const PRODUCTS = {
    ITEMBACKPACK: 'Sauce Labs Backpack',
    ITEMBIKELIGHT: 'Sauce Labs Bike Light',
}

//----------TestCafe User Roles----------
export const USERROLES = {
    STANDARD_USER:{
        USERNAME: 'standard_user',
        PASSWORD:'secret_sauce',
    },
    LOCKED_OUT_USER:{
        USERNAME: 'locked_out_user',
        PASSWORD:'secret_sauce',
    },
    PROBLEM_USER:{
        USERNAME: 'problem_user',
        PASSWORD:'secret_sauce',
    },
    PERFORMANCE_GLITCH_USER_USER:{
        USERNAME: 'performance_glitch_user',
        PASSWORD:'secret_sauce',
    }
}
