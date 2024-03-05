/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    cy.get('[data-test="filter-items"]').as('filterInput');
    cy.get('[data-test="items"] li').as('items');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');
  });

  it('should show items that match whatever is in the filter field', () => {
    cy.get('@filterInput').type('Tooth').invoke('text').as('itemName');
    cy.get('@items').each(($item) => {
      cy.get('@itemName').then((itemName) => {
        expect($item.text()).to.include(itemName);
      });
    });
  });
});
