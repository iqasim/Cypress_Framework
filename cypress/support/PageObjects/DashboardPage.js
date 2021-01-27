/// <reference types="Cypress" />

class DashboardPage{

    getDashboardVerification(){
        cy.get('.content-header>h1')
    }

    validatenopCommerceLogoIsVisible(){
        cy.get('.main-header>a>.logo-lg')
    }

    validateSearchBox(){
        const searchBox = cy.get('#search-box')
        return searchBox
    }

    clickingOnCatalogLink(){
        cy.get('.treeview>a>.fa.fa-book').click()
    }

    clickingOnProductLink(){
        cy.get('[style="display: block;"] > :nth-child(1) > .menu-item-link > .menu-item-title').click()
    }


}

export default DashboardPage