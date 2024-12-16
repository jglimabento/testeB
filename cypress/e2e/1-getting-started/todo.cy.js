 describe('teste', () => {
   it('register', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('#email').type('testeB@teste.com');
    cy.get('#password').type('senha');
    cy.get('button').click();
   });
 });



describe ('teste API', () => {
  it('post de usuario', () => {

    cy.request({
      method:'POST',
      url:'https://serverest.dev/login',
      body: {
        email:'testeB@teste.com',
        password:'senha'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
    });
  });
});