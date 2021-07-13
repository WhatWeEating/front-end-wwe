describe('Selection page and navigation to it', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')

    })

	it('should be able to see all the landing page contents in preparation to navigate to the selection', () => {
		cy.get('.LandingPage')
			.find('h1')
			.should('have.text', 'Find a perf place to go eat')
			.get('.input-container > i')
			.should('have.class', 'fas fa-search')
			.should('be.visible')
			.get('input[name="search"]')
			.should('be.visible')
			.get('.burger')
			.should('be.visible')
			.get('.chips')
			.should('be.visible')
			.get('.eggs')
			.should('be.visible')
			.get('.drinks')
			.should('be.visible')
			.get('.tomatoes')
			.should('be.visible')
			.get('.what')
			.should('be.visible')
			.get('.we')
			.should('be.visible')
			.get('.question')
			.should('be.visible')
			.get('.eatin')
			.should('be.visible')
	})

    it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
        cy.get('input').type('11111').type('{enter}')
    })

})