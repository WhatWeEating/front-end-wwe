Cypress.Commands.add('interceptRestaurantsFetch', () => {
  cy.fixture('restaurants.json')
  .then(data => {
    cy.intercept('GET', 'https://back-end-wwe.herokuapp.com/restaurants?zip=11111', {
    body: data
  })
  })
  // .visit('https://mysterious-cove-94790.herokuapp.com/')
  .visit('localhost:3000')
})

Cypress.Commands.add('interceptSelectionsFetch', () => {
  cy.fixture('selections.json')
  .then(data => {
    cy.intercept('POST', 'https://back-end-wwe.herokuapp.com/graphql', {
    body: data
  })
  })
})

Cypress.Commands.add('testPodium', () => {
  cy.viewport(100, 812)
    .get('.submit').click()
    .viewport(1000, 660)
})
