//Tests for the general settings page.
describe('General settings page tests', () => {
  it('Can access general settings page.', () => {
    cy.visit('http://52.233.158.155:3000/home');
    cy.get('[class*="loginBtn"').click();

    //Complete the command to click on settings
    cy.contains('...').click();

    //Check that Project Settings text is displayed
    cy.contains('Project Settings').should('...');

    //Check that Add button is not displayed
    //...
  });

  it('Checks that new project can be added.', () => {
    //Access general settings page
    //...

    //Click on Project Settings
    //...

    //Click on Add
    cy.get('...').click();

    //Type a project name
    //cy.get('...')...

    //Type a project abbreviation
    //...

    //Click on the confirmation button

    //What assertion can you make to be sure that a project is added?
    //...
  });

  it('Checks that new project can be deleted.', () => {
    //What steps do we need to make?
  });

  it('Checks that a project can be edited.', () => {
    //What steps do we need to make?
  });
});
