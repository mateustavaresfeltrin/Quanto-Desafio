/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


import pageCEP from '../pages/PageCEP'

Given('Consulto o CEP: {string} via API Válido', (cep) => {
    cy.request({
        method: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`,
        failOnStatusCode: false
    })

})

Given('Consulto o CEP: {string} via API e verifico o Logradouro: {string}', (cepatributos,logradouro) => {
    cy.request({
        method: 'GET',
        url: `https://viacep.com.br/ws/${cepatributos}/json/`,
        failOnStatusCode: false
    }).as('response')
    cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200),
        expect(response.body.logradouro).to.equal(logradouro)
    })

})

