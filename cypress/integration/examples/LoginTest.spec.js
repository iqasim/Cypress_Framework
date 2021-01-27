/// <reference types = "cypress" />

import LoginPage from '../../support/PageObjects/LoginPage'
import Constatnts from '../../fixtures/Constants/Constants'


describe('Login Test Page Tests', function(){

    const loginPage = new LoginPage();
    const constant = new Constatnts();

    it('Verify the title of the login page', ()=>{
        loginPage.openURL(constant.getURL());
        cy.title().should('eq', 'Your store. Login');
    });

    it('Verify the title of the dashboard page', function(){
        /* cy.fixture('example.json').as('cred')
        cy.signIn(this.cred.url, this.cred.email, this.cred.password); */
        
        cy.signIn(constant.getURL(), constant.getUsername(), constant.getPassword());
        cy.title().should('be.eq', 'Dashboard / nopCommerce administration');
    });

});