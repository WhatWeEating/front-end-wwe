describe('Winner Page', () => {
  beforeEach(() => {
    cy.interceptRestaurantsFetch()
    cy.get('.input-container').type('11111').type('{enter}')
    .get(':nth-child(1) > .select').click()
    .get(':nth-child(2) > .select').click()
    .get(':nth-child(3) > .select').click()
    cy.intercept('POST', `https://back-end-wwe.herokuapp.com/graphql`, {
      statusCode: 201,
      body: {
        name: 'Peter Pan',
  }
    })
    .get('.selection > :nth-child(3)').click()
    .get('.selection-go-vote-button').click()
    .get('.podium-two')
    cy.testPodium()
  })

  it('should navigate to winner page', () => {
    cy.url().should('include', '/winner')
  })

  it('Should display "Ready To View Results?', () => {
    cy.get('h1')
    .contains('Ready To View Results?')
  })

  it('Should have button that displays "TALLY VOTES!"', () => {
    cy.get('.tally-votes-button')
    .contains('TALLY VOTES!')
  })

  it('When "TALLY VOTES!" is clicked, a confirmation is displayed', () => {
    
  })

})

// cy.get('.form > :nth-child(1)')
//     .first()
//     // .focus()
//     .trigger('dragstart')
//     .get('.podium-two')
//     .eq(0)
//     .trigger('drop')
//     cy.get('.podium-two')
//     .first()
//     .trigger('dragend');

// cy.get('.form > :nth-child(1)')
//         .trigger('mousedown', { button: 0 })
//         .wait(1000)
//         .trigger('mousemove', { which: 1, pageX: 600, pageY: 100 })
//          .trigger('mouseup'
//         //  ,{ force: true }
//          )