describe('Selection page and navigation to it', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')

    })

    it('should navigate to a selection screen after clicking on the zip code input, typing 5 numbers and hitting enter', () => {
        cy.get('input').type('11111').type('{enter}')
        cy.get(':nth-child(1) > h3').should('have.text', "Pat's Pub")
        cy.get(':nth-child(2) > h3').should('have.text', "Ashish's Apple Pie House")
        cy.get(':nth-child(3) > address').should('have.text', "Boulder, USA, CO, 1138 Flagstaff Rd, 80302")
    })

})