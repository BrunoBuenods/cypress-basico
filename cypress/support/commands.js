// ***********************************************
//Este exemplo commands.js mostra como
// cria vários comandos personalizados e sobrescreve
// comandos existentes.
//
// Para exemplos mais abrangentes de custom
// comandos por favor leia mais aqui:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// // // // ========================================================================================

// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
//     cy.get('#firstName').type('Brueno')
//     cy.get('#lastName').type('Bueno')
//     cy.get('#email').type('brunobuenods@outlook.com')
//     cy.get('#phone').type('123456789')
//     cy.get('#open-text-area').type('Exercicio 7 teste')
//     //cy.get('.button[type="submit"]').click()
//     cy.contains('button','Enviar').click()
// })