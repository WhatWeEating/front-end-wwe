Cypress.Commands.add('interceptRestaurantsFetch', () => {
	cy.intercept(
		'https://back-end-wwe.herokuapp.com/restaurants?zip=11111',
		'../fixtures/restaurants.json'
	).visit('http://localhost:3000')
})
