Cypress.Commands.add('interceptRestaurantsFetch', () => {
  cy.fixture('restaurants.json')
  .then(data => {
    cy.intercept('GET', 'https://back-end-wwe.herokuapp.com/restaurants?zip=11111', {
    statusCode: 201,
    body: data
  })
  })
  .visit('https://mysterious-cove-94790.herokuapp.com/')
})
