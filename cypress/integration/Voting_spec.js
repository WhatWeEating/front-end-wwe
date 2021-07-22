describe('Voting page and navigation to it', () => {
	beforeEach(() => {
    cy.interceptRestaurantsFetch()
		  .visit('http://localhost:3000')
      .get('input').type('11111').type('{enter}')
      .get(':nth-child(1) > .select').click()
      .get(':nth-child(2) > .select').click()
      .get(':nth-child(3) > .select').click()
      .get('.selection > :nth-child(3)').click()
      .viewport(375, 812)
      .get('.selection-go-vote-button').click()
	})

  it('Should display podium', () => {
    cy.get('.podium-one').contains('2nd')
      .get('.podium-two').contains('1st')
      .get('.podium-three').contains('3rd')
  })

  it('Should display instructions', () => {
    cy.get('.instruction').contains('Drag and Drop')
  })

})
describe('Voting page submit button', () => {
	beforeEach(() => {
    cy.interceptRestaurantsFetch()
		  .visit('http://localhost:3000')
      .get('input').type('11111').type('{enter}')
      .get(':nth-child(1) > .select').click()
      .get(':nth-child(2) > .select').click()
      .get(':nth-child(3) > .select').click()
      .get('.selection > :nth-child(3)').click()
      .get('.selection-go-vote-button').click()
	})

  it('Should display submit button when all states are filled', () => {
    cy.get('.submit').contains('SUBMIT')
  })

  it('Should switch to /winner url when submit is clicked', () => {
    cy.get('.submit').click()
    cy.location('href').should('include', '/winner')
  })

})
