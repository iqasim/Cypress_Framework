/// <reference types = "cypress" />

import DashboardPage from '../../support/PageObjects/DashboardPage'
import Constatnts from '../../fixtures/Constants/Constants'

describe('Dashboard Page Tests', function(){

    const constant = new Constatnts();
    const dashboard = new DashboardPage();

    //beforeEach(()=>{
      //cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword())
    //})

    it('Verify the logout functionality', ()=>{
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword());
        cy.signOut()
        cy.title().should('eq', 'Your store. Login');
    });

    it('verifying the dashboard heading', ()=>{
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword())
        dashboard.getDashboardVerification()
    })

    it('verifying the nopcommerce logo', ()=>{
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword())
        dashboard.validatenopCommerceLogoIsVisible()
    })

    it('verifying the Search box', ()=>{
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword())
        dashboard.validateSearchBox().type("Hello")
    })



});