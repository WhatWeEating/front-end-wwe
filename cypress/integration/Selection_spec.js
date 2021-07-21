describe('Selection page and navigation to it', () => {
	beforeEach(() => {
		cy.interceptRestaurantsFetch()
	})

	it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.url()
			.should('include', '/selection')
	})

	it('should be able to see sleections page title', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.title')
			.should('have.text', 'What We Eating?')
	})

  it.only('should be able to see 6 results', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}').get('.card').should('have.length', '6')
	})
})
