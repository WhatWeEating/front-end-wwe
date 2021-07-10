describe('App', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })

  it('Should display "what we eatin"', () => {
    cy.get('#root')
  })

})