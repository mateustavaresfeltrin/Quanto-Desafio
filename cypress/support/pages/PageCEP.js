/// <reference types="Cypress" />

const elem = require ('../elements/CEPElements').CEP

class PaginaCEP {
    AbrirCorreios(){
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php?t')
        

    }
    InserirCEP(cep){
        cy.get(elem.TELACEP.CAMPOCEP).type(cep);
        cy.get(elem.TELACEP.BOTAOPESQUISA).click();
        
        
    }

    ValidarEndereco(endereco){
        cy.get('#resultado-DNEC').contains('td', endereco);
    }

    ValidarBairro(bairro){
        cy.get('#resultado-DNEC').contains('td', bairro);
    }

    ValidarEstado(estado){
        cy.get('#resultado-DNEC').contains('td', estado);
      
    }
}

export default new PaginaCEP