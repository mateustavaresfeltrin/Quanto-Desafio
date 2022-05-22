Feature: Consultar CEP

    Scenario Outline: Consultar CEP Desafio API
        Given Consulto o CEP: "<CEP>" via API Válido
       
        Examples:
            | CEP       | 
            | 06705050  |

    Scenario Outline: Consultar CEP Desafio API Inválido
        Given Consulto o CEP: "<CEPATRIBUTOS>" via API e verifico o Logradouro: "<LOGRADOURO>"
       
        Examples:
            | CEPATRIBUTOS | LOGRADOURO |
            | 06705050  | Estrada Manoel Lages do Chao |  
            | 06463200 | Rua Petrolina |
            | 06701202 | Rua dos Angicos |
        