describe('Selection page and navigation to it', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
      .get('input').type('11111').type('{enter}')
      .get(':nth-child(1) > .select').click()
      .get(':nth-child(2) > .select').click()
      .get(':nth-child(3) > .select').click()
      .get('.selection > :nth-child(3)').click()
      .get('.selection-go-vote-button').click()
	})

  it('Should allow the user to drag and drop to vote', () => {
    .get('.form > :nth-child(2)')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 400, clientY: 600 })
      .trigger('mouseup', { force: true })

  })
})
