/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

const randItem = faker.random.word()

describe('search item', () => {
  

  it('start page successfuly loads', () => {
    cy.visit('/')
    .url().should('eq', 'https://allo.ua/')
  })

  it('search random item', () => {
    cy.get('#search-form__input')
    .type(randItem)
    .get('.search-form__submit-button > .vi')
    .click()
    .get('.product-card').should('contain', randItem)
  })


})