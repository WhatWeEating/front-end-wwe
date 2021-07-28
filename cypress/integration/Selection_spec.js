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
			.should('have.text', 'What We Eatin?')
	})

	it('should be able to see 6 results', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.should('have.length', '6')
			.get('[disabled=""]')
	})

	it('should be pats restaurant img on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-image')
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
			.get(':nth-child(1) > .restaurant-image')
			.get(':nth-child(1) > .restaurant-details > .name-price > .restaurant-name')
			.should('have.text', "Pat's Pub")
	})

	it('should be pats restaurant price on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-image')
			.get(':nth-child(1) > h3')
			.get(':nth-child(1) > .restaurant-details > .name-price > .restaurant-price')
			.should('have.text', '$$')
	})

	it('should be pats restaurant rating on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-image')
			.get(':nth-child(1) > .restaurant-details > .restaurant-empty-stars > :nth-child(1)')
	})

	it('should be pats restaurant phone number on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-image')
			.get(':nth-child(1) > h3')
			.get(':nth-child(1) > .restaurant-details > .restaurant-phone')
			.should('have.text', '215-620-8777')
	})

	it('should be pats restaurants address on index 0', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-image')
			.get(':nth-child(1) > .restaurant-details > address')
			.should('have.text', 'Philadelphia, USA, PA, 1941 Mountain Street, 19145')
	})

	it('should be able to select a restaurant', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-details > address').click()
      .get('.selected-restaurant').should('have.css', 'border')
	})

	it('should be able to unselect a restaurant', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-details > address').click()
      .get('.selected-restaurant').click()
	})

	it('should be able to select only three restaurants', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(2) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(3) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(4) > .restaurant-details > .name-price')
	})

	it('should be able to submit all the selection', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(2) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(3) > .restaurant-details > .name-price')
			.click()
			.get('.restaurant-selection > :nth-child(4)')
      .get('.restaurant-selection > :nth-child(2)')
			.should('have.text', 'Submit')
			.click()
	})

	it('should be able to see the link page', () => {
		cy.get('input')
			.type('11111')
			.type('{enter}')
			.get('.card')
			.get(':nth-child(1) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(2) > .restaurant-details > .name-price')
			.click()
			.get(':nth-child(3) > .restaurant-details > .name-price')
			.click()
			.get('.restaurant-selection > :nth-child(4)')
      .get('.restaurant-selection > :nth-child(2)')
			.should('have.text', 'Submit')
			.click()
			.get('h1')
			.should('have.text', 'SHARE THIS LINK WITH YOUR FRIENDS')
			.get('.copy-link')
			.contains('https://mysterious-cove-94790.herokuapp.com/voting/')
			.get('.selection-copy-link-button')
			.should('have.text', 'COPY LINK!')
			.get('.selection-go-vote-button')
			.should('have.text', 'GO VOTE!')
	})
})
