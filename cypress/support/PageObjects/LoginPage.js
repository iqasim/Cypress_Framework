///<reference types= "cypress"/>

class LoginPage{

    openURL(url){
        cy.visit(url)
    }

    enterUsername(email){
        const userName = cy.get('input[name=Email]')
        userName.clear().type(email)
        return this
    }

    enterPassword(password){
        const pwd = cy.get('input[name=Password]')
        pwd.clear().type(password)
        return this
    }

    clickSubmitButton(){
        const button = cy.get('input[type=submit]')
        button.click()
    }

    login(url, username, password){
        cy.signIn(url, username, password)
    }
}

export default LoginPage