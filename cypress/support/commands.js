
import {
    ADMIN_USER_NAME,
    ADMIN_USER_PSWD,
    URL,
    PROVIDER_USER_NAME,
    PROVIDER_USER_PSWD,
    THERAPIST_USER_NAME,
    THERAPIST_USER_PSWD
} from '../config.js';
// import 'cypress-file-upload'

import { randomNumber } from '../functions';

const randomNo = randomNumber(5);





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
    // cy.visit('/')
    // if(loginType == 'admin'){
    //     cy.log(ADMIN_USER_NAME)
    //     cy.get('#email_input').type(ADMIN_USER_NAME)
    //     cy.get('#password_input').type(ADMIN_USER_PSWD)
    //     cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter") 
    // }else if (loginType == 'therapist') {
    //     cy.get('#email_input').type(PROVIDER_USER_NAME)
    //     cy.get('#password_input').type(PROVIDER_USER_PSWD)
    //     cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    // }

    const envName = Cypress.env('ENVIRONMENT_NAME');
    cy.log('Running Script in Environment  ' + envName);
    cy.log('Running Login Script')
    //Using cypress.env.json :

    switch(envName){
        case('qa'): {
        cy.visit(Cypress.env('url'))
        // cy.wait('#email_input')
        cy.wait(3000)
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
            cy.get('#email_input').type(Cypress.env('petient_user_name'))
            cy.get('#password_input').type(Cypress.env('patient_user_pswd'))
            cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
        }else if (loginType == 'carer') {
            cy.get('#email_input').type(Cypress.env('carer_user_name'))
            cy.get('#password_input').type(Cypress.env('carer_user_pswd'))
            cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
        }
        }
        case('dev'): {
            
        }
        case('uat'): {
            
        }
        default: {
            
        }
    }
    
        

});


Cypress.Commands.add('logout', () => {
    cy.log('Running Logout Script')
    cy.wait(3000)
    cy.get('.css-o75ps2-MuiBox > .MuiAvatar-root > .MuiAvatar-img').click()
    // cy.get('.MuiAvatar-img').click();
    cy.get('.MuiList-root > [tabindex="-1"]').click(); 

});