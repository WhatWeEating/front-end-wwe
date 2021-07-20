describe('Winner Page', () => {
  beforeEach(() => {
    cy.interceptRestaurantsFetch()
  })

  it('should navigate to winner page', () => {
    cy.get('.input-container').type('11111').type('{enter}')
    cy.get(':nth-child(1) > .select').click()
    cy.get(':nth-child(2) > .select').click()
    cy.get(':nth-child(3) > .select').click()
    cy.get('.selection > :nth-child(3)').click()
  })
})