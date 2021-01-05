import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Livro from '../../services/livros.service'
let id = 0;

//GET -------------------------------------------------------------------------

When(`buscar por todos os livros`, () => {
    Livro.get_all_books().then(res => {
        cy.log('RESPONSE: ' + JSON.stringify(res.body))
        cy.wrap({res}).as('response')
    })
})

Then(`deve retornar a resposta {string} com status {int}`, (schema,status) => {
    cy.get('@response').then(when => {
        cy.validateSchema(when.res.body, `${schema}/${status}`)
        expect(when.res.status).to.eq(status)
    })
})

//POST -------------------------------------------------------------------------

When(`criar um novo livro com {string} e {string}`, (title, description) => {
    id++;
  
    Livro.post_book({id, title, description}).then(res => {            
        cy.log('RESPONSE: ' + JSON.stringify(res.body))
        cy.wrap({res}).as('response')
    })  
})

Then(`deve retornar a resposta {string} com status {int}`, (schema,status) => {
    cy.get('@response').then(when => {
        cy.validateSchema(when.res.body, `${schema}/${status}`)
        expect(when.res.status).to.eq(status)
    })
})

When(`criar um novo livro aleatorio`, () => {
  
    Livro.post_book_faker().then(res => {            
        cy.log('RESPONSE: ' + JSON.stringify(res.body))
        cy.wrap({res}).as('response')
    })  
})

Then(`deve retornar a resposta {string} com status {int}`, (schema,status) => {
    cy.get('@response').then(when => {
        cy.validateSchema(when.res.body, `${schema}/${status}`)
        expect(when.res.status).to.eq(status)
    })
})
//DELETE -----------------------------------------------------------------------

When(`apagar livro com o id {int}`, (id) => {
    Livro.delete_by_id(id).then((res) => {
        cy.log('RESPONSE: ' + JSON.stringify(res.body))
        cy.wrap({res}).as('response')
    })
})

Then(`deve retornar o status {int}`, (status) => {
    cy.get('@response').then(when => {
        expect(when.res.status).to.eq(status)
    })
})