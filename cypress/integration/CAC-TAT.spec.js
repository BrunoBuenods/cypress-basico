/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
      // Exercicio 0 
    beforeEach(function() {
        // executado antes de cada teste no bloco
        cy.visit ('./src/index.html')
      })

    it('verifica o título da aplicação', function() {
    
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

    })
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Exercicio 1
//     it('preenche os campos obrigatórios e envia o formulário', function() {
        
//         const longText = 'De um modo geral, a acessibilidade permite que as pessoas com uma variedade de competências utilizem produtos, serviços e instalações de forma independente.'
//         cy.get('#firstName').type('Brueno')
//         cy.get('#lastName').type('Bueno')
//         cy.get('#email').type('brunobuenods@outlook.com')
//         cy.get('#open-text-area').type(longText, {delay: 0 })
//         cy.get('.button[type="submit"]').click()

//         cy.get('.success').should('be.visible')
//   })
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Exercicio 2
//   it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

//     const longText = 'De um modo geral, a acessibilidade permite que as pessoas com uma variedade de competências utilizem produtos, serviços e instalações de forma independente.'
//     cy.get('#firstName').type('Brueno')
//     cy.get('#lastName').type('Bueno')
//     cy.get('#email').type('brunobuenods@outlook,com')
//     cy.get('#open-text-area').type(longText, { delay: 0 })
//     cy.get('.button[type="submit"]').click()

//     cy.get('.error').should('be.visible')


//   })
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Exercicio 3
//   it('campo telefone continua vazio quando preenchido com o valor não-numerico', function () { 

//     cy.get('#phone')
//       .type('abcdefghij')
//       .should('have.value', '')
//    })
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//    // Exercicio 4
//    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () { 
    
//     cy.get('#firstName').type('Brueno')
//     cy.get('#lastName').type('Bueno')
//     cy.get('#email').type('brunobuenods@outlook.com')
//     cy.get('#phone-checkbox').check()
//     cy.get('#open-text-area')
//     cy.get('.button[type="submit"]').click()

//     cy.get('.error').should('be.visible')
    
//    })
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Exercicio 5
//   it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {

//     cy.get('#firstName')
//     .type('Brueno')
//     .should('have.value', 'Brueno')
//     .clear().should('have.value', '')

//     cy.get('#lastName')
//     .type('Bueno')
//     .should('have.value', 'Bueno')
//     .clear().should('have.value', '')

//     cy.get('#email')
//     .type('brunobuenods@outlook.com')
//     .should('have.value', 'brunobuenods@outlook.com')
//     .clear().should('have.value', '')

    
//     cy.get('#phone')
//     .type('123456789')
//     .should('have.value', '123456789')
//     .clear().should('have.value', '')
   
//   cy.get('#open-text-area')
//   .type('Teste do exercicio 5')
//   .should('have.value','Teste do exercicio 5')
//   .clear().should('have.value','')

//   })
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Exercicio 6
//   it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {

//     cy.get('.button[type="submit"]').click()

//     cy.get('.error').should('be.visible')

//   })
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Exercicio 7
//   it('envia o formuário com sucesso usando um comando customizado', () => {

//       cy.fillMandatoryFieldsAndSubmit()

//       cy.get('.success').should('be.visible')

//     })

//    ////////////////////////////////////////////////////////////////////////////////////////////////////// 

//     // Modulo 3 - Exercicio 0
//   it('seleciona um produto (YouTube) por seu texto', () => {

//     cy.get('#product').select('Blog') // Seleção pelo texto Blog

//     .should('have.value', 'blog')

//   })

//     // Exercicio 1
//     it('seleciona um produto (Mentoria) por seu valor (value)', () => {

//       cy.get('#product').select('youtube') // Seleção pelo value youtube
  
//       .should('have.value', 'youtube')
  
//     })

//     // Exercicio 2
//     it('seleciona um produto (Blog) por seu índice', () => {

//       cy.get('#product').select(3) // Seleção pelo índice 1
  
//       .should('have.value', 'mentoria')
  
//     })
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Modulo 4 - Exercicio 0 - Marcando inputs do tipo radio
//     it('marca o tipo de atendimento "Feedback"', () => {

//       cy.get('input[type="radio"][value="feedback"]').check()
//       .should('have.value', 'feedback')
  
//     })
    
//   // Exercicio 1
//   it('marca cada tipo de atendimento', () => {

//     cy.get('input[type="radio"]')
//       .should('have.length', 3)
//       .each(function ($radio) {
//         cy.wrap($radio).check()
//         cy.wrap($radio).should('be.checked')

//       })

//   })

   // Modulo 5 - Exercicio 0 - marca ambos checkboxes, depois desmarca o último
  //  it('marca ambos checkboxes, depois desmarca o último', () => {

  //   cy.get('input[type="checkbox"]')
  //   .check()
  //   .should('be.checked')
  //   .last()
  //   .uncheck()
  //   //cy.get('input[type="checkbox"][value="phone"]').uncheck()
  //   .should('not.be.checked')

  // })
////////////////////////////////////////////////////////////////////////////////////////////////////////
  // // Modulo 6 - Exercicio 0 - seleciona um arquivo da pasta fixtures
  // it('seleciona um arquivo da pasta fixtures', function () {

  //   cy.get('input[type="file"]')
  //   .should('not.have.value')
  //   .selectFile('cypress/fixtures/example.json')
  //   .should(function($input) {
  //     //console.log($input)
  //    expect($input[0].files[0].name).to.equal('example.json')

  //   })

    //Exercicio 1 - seleciona um arquivo simulando um drag-and-drop
    it('seleciona um arquivo simulando um drag-and-drop', () => {

      cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
        .should(function ($input) {
          expect($input[0].files[0].name).to.equal('example.json')

        })

    })

  //Exercicio 2 - seleciona um arquivo utilizando uma fixture para a qual foi dada um alias
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

    cy.fixture('example.json').as('sampleFile') //alias
    cy.get('input[type="file"]')
      .selectFile('@sampleFile') //alias
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })

  })

  //Modulo 7 - Exercicio 0 - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.get('#privacy a').should('have.attr', 'target', '_blank') //attr: atributo
    

  })

  //Modulo 7 - Exercicio 1 - acessa a página da política de privacidade removendo o target e então clicando no link
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {

    cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()
    
    cy.contains('Talking About Testing').should('be.visible')

  })

  //Exercicio 2 - testa a página da política de privacidade de forma independente
  it.only('testa a página da política de privacidade de forma independente', () => {

    

  })

})
