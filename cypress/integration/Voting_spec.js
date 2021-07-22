describe('Selection page and navigation to it', () => {
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
})
