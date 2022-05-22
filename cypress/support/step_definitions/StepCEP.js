/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


import pageCEP from '../pages/PageCEP'

Given('que acesso o site dos Correios', () => {
pageCEP.AbrirCorreios();

})

When('insiro o cep : {string}',(cep) =>{
pageCEP.InserirCEP(cep);

})

And('verifico o endereco: {string}',(endereco) =>{
    pageCEP.ValidarEndereco(endereco);
    
})


And('verifico o bairro: {string} e verifico o estado: {string}',(bairro,estado) =>{
    pageCEP.ValidarBairro(bairro);
    pageCEP.ValidarEstado(estado);
    
})





