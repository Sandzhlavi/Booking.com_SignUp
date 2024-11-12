class SignUpPage {
    visit() {
        cy.visit('https://www.booking.com'); 
    }

    clickSignUpButton() {
        cy.get('[data-testid="header-sign-up-button"]').click();
    }

    fillEmail(email) {
        cy.get('input#username').clear().type(email);
    }

    clickContinueWithEmail() {
        cy.get('button[type="submit"]').click();
    }

    clickGoogleSignIn() {
        cy.get('[data-provider-name="google"]').click();
    }

    clickAppleSignIn() {
        cy.get('[data-provider-name="apple"]').click();
    }

    clickFacebookSignIn() {
        cy.get('[data-provider-name="facebook"]').click();
    }
    verifyNoEmailValidationError() {
        cy.contains('Make sure the email address you entered is correct').should('not.exist');
    }


}

export default new SignUpPage();
