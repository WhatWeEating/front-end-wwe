describe('Winner Page', () => {
  beforeEach(() => {
    cy.interceptRestaurantsFetch()
  })

  it('should navigate to winner page', () => {
    cy.get('.input-container').type('11111').type('{enter}')
  })
})