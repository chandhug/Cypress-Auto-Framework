
import {
    ADMIN_USER_NAME,
    ADMIN_USER_PSWD,
    URL,
    PROVIDER_USER_NAME,
    PROVIDER_USER_PASSWORD,
    THERAPIST_USER_NAME,
    THERAPIST_USER_PASSWORD
} from '../config'
// import 'cypress-file-upload'

import { randomNumber } from '../functions'

const randomNo = randomNumber(5);

const app_url = URL



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import 'cypress-file-upload'
// import cypress from 'cypress';


/* Addes this to prevent localstorage from beaing cleared between each test. which is handi becuase we woudl like to keep any tokens or special data from expiring */

Cypress.LocalStorage.clear = function () {
    return;
}

/* Adding Commands to Cypress */

Cypress.Commands.add('login', (loginType) => {
    

//Not working - Do not use it
    // cy.visit(app_url)
    // if(loginType == 'admin'){
    //     cy.get('#email_input').type(ADMIN_USER_NAME)
    //     cy.get('#password_input').type(ADMIN_USER_PSWD)
    //     cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter") 
    // }else if (loginType == 'therapist') {
    //     cy.get('#email_input').type(PROVIDER_USER_NAME)
    //     cy.get('#password_input').type(PROVIDER_USER_NAME)
    //     cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    // }


    //Using cypress.env.json :
    cy.visit(Cypress.env('url'));
    if(loginType == 'admin'){
        cy.get('#email_input').type(Cypress.env('admin_user_name'))
        cy.get('#password_input').type(Cypress.env('admin_user_pswd'))
        cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    }else if (loginType == 'provider') {
        cy.get('#email_input').type(Cypress.env('provider_user_name'))
        cy.get('#password_input').type(Cypress.env('provider_user_pswd'))
        cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    }else if (loginType == 'therapist') {
        cy.get('#email_input').type(Cypress.env('therapist_user_name'))
        cy.get('#password_input').type(Cypress.env('therapist_user_pswd'))
        cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    }else if (loginType == 'patient') {
        cy.get('#email_input').type(Cypress.env('patient_user_name'))
        cy.get('#password_input').type(Cypress.env('patient_user_pswd'))
        cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    }else if (loginType == 'carer') {
        cy.get('#email_input').type(Cypress.env('carer_user_name'))
        cy.get('#password_input').type(Cypress.env('carer_user_pswd'))
        cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    }
        

});


Cypress.Commands.add('logout', () => {

        cy.get('.MuiAvatar-img').click();
        cy.get('.MuiList-root > [tabindex="-1"]').click(); 

});