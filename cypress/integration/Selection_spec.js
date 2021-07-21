describe('Selection page and navigation to it', () => {
	beforeEach(() => {
		cy.interceptRestaurantsFetch()
	})

	it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
		cy.get('input').type('11111').type('{enter}')
    .url().should('include', '/selection')
	})
})
