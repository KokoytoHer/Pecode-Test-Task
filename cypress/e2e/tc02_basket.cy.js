/// <reference types="cypress" />

describe('Add items to the basket', () => {
  

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

  it('add two products from distinct categories', () => {
    cy.get('.product-card__buy-box > button').eq(Math.floor(Math.random() * 8))
    .click()
    cy.get('.comeback')
    .click()
   
    cy.get('.ct-button')
    .click()
    .get(':nth-child(5) > .mm__a')
    .click()
    cy.get(':nth-child(1) > .portal-group__title > .portal-group__title-link')
    .click()
    cy.get('.product-card__buy-box > button').eq(Math.floor(Math.random() * 8))
    .click()
   })


  it('remove button is clickable', () => {
    cy.get('[class="vi i-shared vi__close remove"]').then(($btn) => {
      if ($btn.is(":enabled")) {
          cy.wrap($btn).click() //Button is enabled
      } else {
          //Button is disabled
      }
    })
  })
  //  it('amount of products(2) and price sum are correct', () => {
  //   let total = 0;
  //   let value1 = 0;
  //   let value2 = 0;
  //   cy.get('span[class="total-box__price"]').then(($val) => {
  //     let totalStr = $val.text()
  //     total = Number(totalStr)
  //   })
  //   cy.get('[class="price-box__cur"]').then(($val2) => {
  //     let value1Str = $val2.text()
  //     value1 = Number(value1Str)
  //     cy.get('[class="price-box__cur"]').should(($val3) => {
  //       let value2Str = $val3.text()
  //       value2 = Number(value2Str)
  //       expect($val3.text()).not.to.eq(value1Str)
        
  //     })
  //     return (value1 + value2) - (total)
  //   })
  //  })
})

