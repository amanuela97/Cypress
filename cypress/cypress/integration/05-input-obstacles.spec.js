/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    const selectedValue = 'Hulk';
    cy.get('[data-test="select-input"]').select(selectedValue);
    cy.get('[data-test="select-result"]').contains(selectedValue);
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-result"]').contains('(None)');
    cy.get('[data-test="checkbox-tomato"]').check().invoke('val').as('selected');
    cy.get('@selected').then((selected) => {
      cy.get('[data-test="checkbox-result"]').contains(selected);
    });
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-ringo"]').check();
    cy.get('[data-test="radio-result"]').contains('Ringo');
  });

  it('should find and control a color input', () => {
    const color = '#00ffe1';
    cy.get('[data-test="color-input"]').invoke('val', color).trigger('input');
    cy.get('[data-test="color-result"]').contains(color);
  });

  it('should find and control a date input', () => {
    const date = '1999-12-31';
    cy.get('[data-test="date-input"]').type(date);
    cy.get('[data-test="date-result"]').contains(date);
  });

  it('should find and control a range input', () => {
    const range = 6;
    cy.get('[data-test="range-input"]').invoke('val', range).trigger('change');
    cy.get('[data-test="range-result"]').contains(range);
  });

  it('should find and control a file input', () => {
    cy.get('[data-test="file-input"]');
    cy.get('[data-test="file-result"]');
  });
});
