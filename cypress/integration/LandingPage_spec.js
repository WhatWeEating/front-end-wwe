describe('LandingPage', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should be able to see burger after animation', () => {
		cy.get('.LandingPage').get('.burger').should('be.visible')
	})

	it('should be able to see chips after animation', () => {
		cy.get('.LandingPage').get('.chips').should('be.visible')
	})

	it('should be able to see eggs after animation', () => {
		cy.get('.LandingPage').get('.eggs').should('be.visible')
	})

	it('should be able to see drinks after animation', () => {
		cy.get('.LandingPage').get('.drinks').should('be.visible')
	})

	it('should be able to see tomatoes after animation', () => {
		cy.get('.LandingPage').get('.tomatoes').should('be.visible')
	})

	it('should be able to see "what" word after animation', () => {
		cy.get('.LandingPage').get('.what').should('be.visible')
	})

	it('should be able to see "we" after animation', () => {
		cy.get('.LandingPage').get('.we').should('be.visible')
	})

	it('should be able to see "eatin" after animation', () => {
		cy.get('.LandingPage').get('.eatin').should('be.visible')
	})

	it('should be able to see "question mark" after animation', () => {
		cy.get('.LandingPage').get('.question').should('be.visible')
	})

	it('should display an instruction on load', () => {
		cy.get('.LandingPage')
			.find('h1')
			.should('have.text', 'Find a perf place to go eat')
	})

	it('should be able to see search icon on load', () => {
		cy.get('.LandingPage')
			.get('.input-container > i')
			.should('have.class', 'fas fa-search')
			.should('be.visible')
	})

	it('should be able to see a search bar', () => {
		cy.get('.LandingPage').get('input[name="search"]').should('be.visible')
	})

  it('should have an empty search bar', () => {
    cy.get('.LandingPage').get('input[name="search"]').should('have.value', '')
  })

  it('should be a controlled form', () => {
    cy.get('.LandingPage')
			.get('input[name="search"]')
			.type('a')
			.should('have.value', 'a')
  })

  it('should not fetch data without pressing enter', () => {
    cy.get('.LandingPage')
			.get('input[name="search"]')
			.type('a')
			.url()
			.should('eq', 'http://localhost:3000/')
  })

  it.only('should notify user when invalid zip code is entered', () => {
    cy.get('.LandingPage').get('input[name="search"]').type('00000').get('.err-msg').should('have.text', 'Please enter a valid 5 digit zip code')
  })

	it('should be able to see error for invalid zipcode', () => {
		cy.get('input[name="search"]')
			.type('a')
			.type('{enter}')
			.get('.err-msg')
			.should('have.text', 'Please enter a valid 5 digit zip code')
	})

	it('should display selection page after a valid zipcode', () => {
		cy.get('input[name="search"]')
			.type('11111')
			.type('{enter}')
			.url()
			.should('eq', 'http://localhost:3000/selection')
	})
})
