import SignUpPage from '../support/pages/signUpPage';

describe('Booking.com Email Field Validation Tests', () => {
    beforeEach(() => {
        SignUpPage.visit();
        SignUpPage.clickSignUpButton();
    });

    it('Should accept a simple valid email format', () => {
        SignUpPage.fillEmail('testuser@example.com');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();

    });

    it('Should accept email with subdomain', () => {
        SignUpPage.fillEmail('user@mail.example.com');
        SignUpPage.clickContinueWithEmail();
       SignUpPage.verifyNoEmailValidationError();
    });

    it('Should accept email with numeric domain', () => {
        SignUpPage.fillEmail('user@domain123.com');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });

    it('Should accept email with special characters', () => {
        SignUpPage.fillEmail('user.name+tag@example.com');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });

    it('Should accept email with uppercase characters', () => {
        SignUpPage.fillEmail('User.Name@Example.com');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });


    it('Should accept minimum allowed email length', () => {
        SignUpPage.fillEmail('a@i.ua');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });

    it('Should accept numeric local part in email', () => {
        SignUpPage.fillEmail('5@i.ua');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });

    it('Should accept fully numeric email format', () => {
        SignUpPage.fillEmail('123@123.ua');
        SignUpPage.clickContinueWithEmail();
        SignUpPage.verifyNoEmailValidationError();
    });

    it('Clicks on Sign in via Google and verifies Google Auth redirection', () => {

        SignUpPage.clickGoogleSignIn();

    });

    it('Clicks on Sign in via Apple and verifies Apple Auth redirection', () => {

        SignUpPage.clickAppleSignIn();

    });

    it('Clicks on Sign in via Facebook and verifies Facebook OAuth redirection', () => {

        SignUpPage.clickFacebookSignIn();

    });

});
