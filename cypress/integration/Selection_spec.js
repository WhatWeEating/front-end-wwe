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

	it('should be pats restaurant img on index 0', () => {
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

	it('should be pats restaurant name on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .image')
			.get(':nth-child(1) > h3')
			.should('have.text', "Pat's Pub")
	})

	it('should be pats restaurant price on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .image')
			.get(':nth-child(1) > h3')
			.get('.restaurants-container > :nth-child(1) > :nth-child(4)')
			.should('have.text', '$$')
	})

	it.only('should be pats restaurant rating on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .image')
			.get(':nth-child(1) > h3')
			.get('.restaurants-container > :nth-child(1) > :nth-child(4)')
			.get('.restaurants-container > :nth-child(1) > :nth-child(5)')
			.should('have.text', '2.5')
	})
})
