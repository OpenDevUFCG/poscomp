# Compreendendo os JSONs das Questões

Para armazenar os dados das questões da POSCOMP, neste repositório são utilizados arquivos `.json`. Para cada questão, deve existir um arquivo (único) cuja estrutura está apresentada abaixo.

```json
{
    "ano": ...,
    "questao": ...,
    "area": ...,
    "enunciado": ...,
    "img_url": ...,
    "alternativas": {
        "A": ..., 
        "B": ..., 
        "C": ..., 
        "D": ..., 
        "E": ...
    },
    "resposta": ...,
    "autor": ...,
    "temas": ...,
    "justificativa": ...
}
```

Esse arquivo deverá ser nomeado com o número da questão e estar em um diretório nomeado com o ano de realização da prova em que ela esteve presente. Por sua vez, esse diretório deverá estar inserido em ***poscomp/src/lib/provas/***.

Portanto, para a décima questão da prova da POSCOMP de 2016, teríamos `poscomp/src/lib/provas/2016/10.json`. 

> **Lembrete:** Ao contribuir com uma solução justificada, as informações do autor da justificativa deverão estar presentes no JSON de autores. Caso não estejam, adicione-as!

## Estrutura do JSON

Para garantir que você preencha corretamente os JSONs, vamos nos aprofundar um pouco na estrutura utilizada, certo?

### Resumo

| Chave | Descrição | Valor |
| :--: | :--: | :--: |
| `ano` | O ano de realização da prova em que a questão esteve presente. | String |
| `questao` | O número da questão (igual ao nome do arquivo `.json`). | String |
| `area` | A área de conhecimento em que a POSCOMP classificou a questão. | String |
| `enunciado` | O enunciado completo da questão. | String |
| `img_url` | Uma lista de URLs das imagens utilizadas no enunciado da questão (se existirem). | Array |
| `alternativas` | Um objeto que armazena as 5 alternativas de resposta da questão. | Object |
| `resposta` | O caractere que indica a alternativa correta da questão. | String |
| `autor` | Uma lista com IDs dos autores que produziram a justificativa para a resposta. | Array |
| `temas` | Uma lista dos temas que são contemplados pelo conteúdo da questão. | Array |
| `justificativa` | A justificativa para a escolha da alternativa do gabarito. | String |

### Observações

- A POSCOMP classifica suas questões entre três áreas: **Matemática**, **Fundamentos da Computação** e **Tecnologia da Computação**. Nenhuma outra área informada será válida.

- Todos os textos referentes ao conteúdo das provas (como o `enunciado` e as `alternativas`) devem ser replicados com exatidão.

- Se a questão não utiliza imagens, mantenha o valor de `img_url` como um *array* vazio.

- Os valores de `img_url`, de `autor` e de `temas` são *arrays* que, quando não-vazios, devem conter exclusivamente *strings*.

- O objeto `alternativas` possui 5 propriedades: **A**, **B**, **C**, **D** e **E**. Cada uma delas terá, como valor, a *string* contendo o texto da respectiva alternativa da questão.

- A `resposta` deve sempre ser uma *string* com um único caractere, preferencialmente em caixa alta.

- Se a questão ainda não possui justificativa, mantenha os valores de `autor` e `temas` como *arrays* vazios.

- Se essa será sua primeira contribuição, leia também este [documento](./AUTOR.md).

## Exemplos

Agora você já está pronto para começar a contribuir conosco! Mas antes, que tal dar uma olhada em alguns exemplos?

#### Com Justificativa
```json
{
    "ano": "2015",
    "questao": "29",
    "area": "Fundamentos da Computação",
    "enunciado": "O formato FITS (Flexible Image Transport System) armazena imagens de astronomia. Um cabeçalho FITS é uma coleção de 2.880 bytes contendo registros de 80 bytes ASCII, no qual cada registro contém um metadado. O FITS utiliza o formato ASCII para o cabeçalho e o formato binário para os dados primários. Nesse caso, a inclusão de metadados junto aos dados:",
    "img_url": [],
    "alternativas": {
        "A": "desfavorece a portabilidade, pois dificulta a conversão entre padrões.", 
        "B": "favorece a portabilidade, embora dificulte a conversão entre padrões.", 
        "C": "favorece o acesso ao arquivo por terceiros, por possuir conteúdo autoexplicativo.", 
        "D": "desfavorece o acesso ao arquivo por terceiros.", 
        "E": "é adequada ao emprego de etiquetas e palavras-chave."
    },
    "resposta": "C",
    "autor": ["1", "2"],
    "temas": ["Sistemas Operacionais"],
    "justificativa": "Metadados atuam como uma documentação que descreve os dados em questão [...]."
}
```

#### Sem Justificativa
```json
{
    "ano": "2017",
    "questao": "40",
    "area": "Fundamentos da Computação",
    "enunciado": "Assinale a alternativa INCORRETA.",
    "img_url": [],
    "alternativas": {
        "A": "A união de duas linguagens recursivas é uma linguagem recursiva.", 
        "B": "Segundo a Tese de Church, a capacidade de computação representada pela máquina de Turing é o limite máximo que pode ser atingido por qualquer modelo de computação.", 
        "C": "Seja L uma linguagem enumerável recursivamente, se o complemento de L for enumerável recursivamente, então L é uma linguagem recursiva.", 
        "D": "Um problema X é NP-completo quando X pertence à classe NP e, adicionalmente, X é redutível em tempo polinomial para qualquer outro problema Y na classe NP.", 
        "E": "Todo problema que está na classe P também está na classe NP."
    },
    "resposta": "D",
    "autor": [],
    "temas": [],
    "justificativa": ""
}
```
