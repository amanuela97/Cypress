/// <reference types="cypress" />

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-up');
    cy.get('[data-test="sign-up-submit"]').as('submit');
  });

  it('should require an email', () => {
    cy.get('@submit').click();
    cy.get('[data-test="sign-up-email"]:invalid')
      .invoke('prop', 'validity')
      .its('valueMissing')
      .should('be.true');
  });

  it('should require that the email actually be an email address', () => {
    cy.get('[data-test="sign-up-email"]').type('manu@gmail.com');
    cy.get('@submit').click();
    cy.get('[data-test="sign-up-email"]')
      .invoke('val')
      .then((sometext) => {
        cy.wrap(sometext).should('match', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      });
  });

  it('should require a password when the email is present', () => {});
});
