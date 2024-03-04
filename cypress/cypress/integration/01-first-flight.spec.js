/// <reference types="cypress" />

describe('Create a New Item', () => {
  //runs before each test below
  beforeEach('visit jetsetter page', () => {
    cy.visit('/jetsetter');
  });

  it('should have a form', () => {
    cy.get('form').should('exist');
  });
});
