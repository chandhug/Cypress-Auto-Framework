

describe("login", () => {

    // before(() => {
    //     cy.server()
    // }


    // beforeEach(() => {
    //     cy.server()
    // }

    // after(() => {
    //     cy.server()
    // }


    // afterEach(() => {
    //     cy.server()
    // }

    // it("login to QA", () =>{
    //     cy.visit('https://qa.equipbehavioralhealth.com/login')
    //     cy.get('#email_input').type("admin@test.com")
    //     cy.get('#password_input').type("letmein")
    //     cy.get('.css-1umx0cd-MuiBox').type("{enter}{enter")
    //     cy.get('.MuiAvatar-img').click();
    //     cy.get('.MuiList-root > [tabindex="-1"]').click();
    // });
    
    before(() => {
        cy.login('admin');
    });
    after(() => {
        cy.logout();
    });
    it("open user", () => {
        // print("Good Day!")
    });
});

