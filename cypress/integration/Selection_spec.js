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

	it('should be able to see 6 results', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.should('have.length', '6')
			.get('[disabled=""]')
	})

	it('should be able to see a disabled button', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('[disabled=""]')
			.should('have.text', 'Not Enough Selections')
	})

	it.only('should be pats restaurant on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .image')
			.should('have.attr', 'src')
			.should(
				'include',
				'https://i.pinimg.com/564x/4d/72/02/4d7202eaef303577c46ec703f9f2a2db.jpg'
			)
	})
})
