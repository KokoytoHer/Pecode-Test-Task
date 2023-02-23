/// <reference types="cypress" />

// const {randPrice} = require("../plugins");
import { faker } from '@faker-js/faker';

  const fromPrice = faker.random.numeric(4);
  const toPrice = faker.random.numeric(5);


describe('Verify if the price filter working correctly', () => {

  // const {fromPrice, toPrice} = randPrice();

  it('start page successfuly loads', () => {
    cy.visit('/')
    .url().should('eq', 'https://allo.ua/')
  })

  it('category and subcategory pages loads successfuly', () => {
    cy.get(':nth-child(2) > .mm__a')
    .click()
    .get(':nth-child(1) > .accordion > .content > .portal-category__list > :nth-child(1) > .portal-category__item-link')
    .click()
    .url().should('contain', 'mobile/klass-kommunikator_smartfon/')
  })
  
  it('select 3 filters', () => {
    cy.get('[class="accordion"]')
    .should('have.length.gt', 3)
    .its('length')
    .then((n) => Cypress._.random(0, n - 1))
    .then((k) => {
      cy.log(`picked random index ${k}`)
      cy.get('[class="accordion"]').eq(k).click()

    function getRandomInt(min, max){      
      return Math.floor(Math.random() * (min - max));}

    cy.get('.content > .f-wrap > .f-list').parents('[class="accordion active"]')
      .then(listing => {
        const randomNumber = getRandomInt(0, listing.length -1);
        cy.get('.content > .f-wrap > .f-list').parents('[class="accordion active"]')
        .find('[class="f-check"]').eq(randomNumber).click()
        
      
    cy.get('.f-range__form > :nth-child(1)')
    .clear()
    .type(fromPrice)

    cy.get('.f-range__form > :nth-child(2)')
    .clear()
    .type(toPrice)
      
    cy.get('[class="f-popup__btn-message"]').click()
      })}
    )})

    it('check 3 filters applied', () => {
      cy.get('.f-active > a').should(($a) => {
        expect($a, '6 items').to.have.length(6)
    })
  })
})
