Feature: Consultar CEP

    Scenario Outline: Consultar CEP Desafio
        Given que acesso o site dos Correios
        When insiro o cep : "<CEP>"
        And verifico o endereco: "<ENDERECO>"
        And verifico o bairro: "<BAIRRO>" e verifico o estado: "<ESTADO>"
        
        

        Examples:
            | CEP       | ENDERECO                      | BAIRRO            | ESTADO        |
            | 06705050  | Estrada Manoel Lages do Chao  | Jardim Caiapiá    | Cotia/SP      |
            | 06463200  | Rua Petrolina                 | Mutinga           | Barueri/SP    |
            | 06701202  | Rua dos Angicos               | Chácara Recanto Verde | Cotia/SP  |