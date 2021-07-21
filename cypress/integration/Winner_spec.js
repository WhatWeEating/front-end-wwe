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
    cy.get('.tally-votes-button').click()
    .get('h2')
    .contains('ARE YOU SURE YOU WANT TO CLOSE VOTING?')
  })

  it('When "TALLY VOTES!" is clicked, "yes" & "no" buttons are displayed', () => {
    cy.get('.tally-votes-button').click()
    .get('.yes-button')
    .get('.no-button')
  })

  it('if "no" button is clicked, user is navigated to previous view', () => {
    cy.get('.tally-votes-button').click()
    .get('.no-button').click()
    .get('h1')
    .contains('Ready To View Results?')
  })

  it('if "yes" button is clicked, loading ring is displayed', () => {
    cy.get('.tally-votes-button').click()
    .get('.yes-button').click()
    .get('.load-ring')
  })

  it('Should display winner', () => {
    cy.get('.tally-votes-button').click()
    .get('.yes-button').click()
    .wait(3000)
    .get('.winner-text')
    .get('.winner-name')
    .get('.winner-phone')
    .get('.winner-address')
  })

  it('Should allow user to interact with winner phone number', () => {
    cy.get('.tally-votes-button').click()
    .get('.yes-button').click()
    .wait(3000)
    .get('.winner-phone').click()
  })

})

