describe('Winner Page', () => {
  beforeEach(() => {
    cy.interceptRestaurantsFetch()
  })

  it('should navigate to winner page', () => {
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
    cy.viewport(100, 812)
    cy.get('.form > :nth-child(1)')
    .trigger('mousedown', { button: 0 })
    .wait(1000)
    // .trigger("dragstart")
    .trigger("dragleave")
    cy.get('.podium-two')
    .trigger("dragenter")
    .trigger("dragover")
    .trigger("drop")
    .trigger("dragend");
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