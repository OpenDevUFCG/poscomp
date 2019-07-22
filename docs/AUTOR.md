# Compreendendo o JSON dos Autores

Para armazenar os dados dos autores das soluções justificadas de questões da POSCOMP neste repositório são utilizados arquivos `.json`.  Todas as informações são armazenadas em um único arquivo, cuja estrutura está apresentada abaixo.

```json
{
    "1": {
        "nome": ...,
        "email": ...,
        "github": ...
    },

    "2": {
        "nome": ...,
        "email": ...,
        "github": ...
    }, 

    "3": { 
        ...
    },
    ...
}
```

O armazenamento dessas informações visa garantir os créditos de autoria adequados e, em caso de divergências dessa natureza, facilitar o contato com os autores das soluções.

O JSON pode ser encontrado em `poscomp/src/lib/autores/autores.json`.

## Estrutura do JSON

Para garantir que você preencha corretamente o JSON, vamos nos aprofundar um pouco na estrutura utilizada, certo?

### Resumo

| Chave | Descrição | Valor |
| :--: | :--: | :--: |
| `nome` | O nome completo do autor de soluções justificadas de questões. | String |
| `email` | O e-mail para contato do autor de soluções justificadas de questões. | String |
| `github` | O *username* do autor de soluções justificadas de questões. | String |

### Observações

- O armazenamento do `email` e do `github`são opcionais, no entanto, contribuem bastante para o futuro do projeto.

- Mesmo que um autor contribua com soluções justificadas de várias questões, deve existir apenas um objeto com suas informações no JSON.

- Note que cada objeto com as informações do autor é o valor respectivo a uma chave única. Fique atento para respeitar a sequência pré-existente, pois esses IDs são utilizados para associação entre autores e suas soluções.

- Se essa será sua primeira contribuição, leia também esse [documento](./QUESTAO.md).

### Exemplos

```json
{
    "1": {
        "nome": "Ivyna Rayany Santino Alves",
        "email": "ivyna.alves@ccc.ufcg.edu.br",
        "github": "ivynasantino"
    },

    "2": {
        "nome": "Matheus Alves dos Santos",
        "email": "matheus.santos@ccc.ufcg.edu.br",
        "github": "alvesmatheus"
    }
}
```