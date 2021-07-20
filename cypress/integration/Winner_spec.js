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
  })
})