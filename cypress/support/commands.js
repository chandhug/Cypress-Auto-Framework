
import {
    ADMIN_USER_NAME,
    ADMIN_USER_PSWD,
    APP_URL
} from '../config'

import { randomNumber } from '../functions'

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

        cy.visit('https://qa.equipbehavioralhealth.com/login')
        // cy.get('#email_input').type("admin@test.com")
        // cy.get('#password_input').type("letmein")
        // cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")


        if(loginType == 'admin'){
            cy.get('#email_input').type("admin@test.com")
            cy.get('#password_input').type("letmein")
            cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter") 
        }else if ('therapist') {
            cy.get('#email_input').type("chandhu@equip.health")
            cy.get('#password_input').type("!Charlo1")
            cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
        }
        

});


Cypress.Commands.add('logout', () => {

        cy.get('.MuiAvatar-img').click();
        cy.get('.MuiList-root > [tabindex="-1"]').click(); 

});