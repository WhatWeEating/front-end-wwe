describe('Selection page and navigation to it', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
		cy.get('input').type('11111').type('{enter}')
		  .get(':nth-child(1) > .select').click()
		  .get(':nth-child(2) > .select').click()
		  .get(':nth-child(3) > .select').click()
      .get('.selection > :nth-child(3)').click()

	})
})
