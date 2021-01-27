/// <reference types="Cypress"/>

import DashboardPage from '../../support/PageObjects/DashboardPage'
import AddProductPage from '../../support/PageObjects/AddProductPage'
import Constatnts from '../../fixtures/Constants/Constants'


describe("Add Product Page Tests", ()=>{

    const constant = new Constatnts()
    const addProduct = new AddProductPage()
    const dashboard = new DashboardPage() 

    it("Verify the title of the Add Product Page", ()=>{
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword())
        dashboard.clickingOnCatalogLink()
        dashboard.clickingOnProductLink()
        addProduct.clickingOnAddProductButton()
        cy.title().should('eq', 'Add a new product / nopCommerce administration')
    })







})