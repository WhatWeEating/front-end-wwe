describe('Selection page and navigation to it', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
		cy.get('input').type('11111').type('{enter}')
		cy.get(':nth-child(1) > h3').should(
			'have.text',
			"Joe's Kansas City Bar-B-Que"
		)
		cy.get(':nth-child(2) > h3').should('have.text', 'Q39 South')
		cy.get(':nth-child(3) > address').should(
			'have.text',
			'9520 Metcalf Ave, Overland Park, KS 66212'
		)
	})
})
