Cypress.Commands.add('interceptRestaurantsFetch', () => {
	cy.intercept(
		'mock-restaurant-data.json',
		'../fixtures/restaurants.json'
	).visit('http://localhost:3000')
})
