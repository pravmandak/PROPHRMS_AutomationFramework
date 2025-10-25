exports.LoginPage = 
class LoginPage {

    constructor(page) {
        this.page = page;
        this.welcomeBackheader = page.getByText('Welcome Back');
        this.welcomeBackheader = page.getByRole('heading', { name: 'Welcome Back' });
        this.emailtextBox = page.getByPlaceholder('john@company.com');
        this.emailtextbox = page.getByRole('input', {type: 'email'}); 
        this.emailtextbox = page.getByRole('input', {name: 'email'}); 
        this.password = page.getByRole('input', {name: 'password'}); 
        this.signInButton = page.getByRole('button', { type: 'submit' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.signInButton = page.getByText('Sign In');
        this.forgotlink = page.getByRole('link', { name: 'Forgot password?' });
        this.forgotlink = page.getByText('Forgot password?');
        this.ProfessionEmail = page.getByPlaceholder('Enter your professional email');
        this.ProfessionalEmail = page.getByRole('input', { id: 'email' });
        this.ProfessionalEmail = page.getByRole('textbox', { id: 'email' });
        this.ProfessionalEmail = page.getByRole('textbox', { type: 'email' });
        this.SendPasswordButton = page.getByRole('button', { name: 'Send Password Reset Email' });
        this.SendPasswordButton = page.getByText('Send Password Reset Email');
        this.closeButton = page.locator('//h2[contains(text(),"Forgot Password")]/parent::div/button');
        this.constactSupportLink = page.getByText('Contact Support Team');
        this.contactSupportLink = page.getByRole('link', { name: 'Contact Support Team' });
    }
     
    async verifycloseButton (){
        await this.closeButton.isvisible();
    }
}