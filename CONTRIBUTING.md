# Contributing

Contribuições sempre serão bem vindas, sejam pequenas ou grandes. Veja abaixo as várias formas de contribuir conosco.

## Issues

As issues são um espaço aberto para requisitar criação, mudança ou conserto. É importante ter em mente que o tema da issue e das discussões sempre deve estar relacionado ao projeto.

## Como Contribuir

Se você escolheu uma issue para contribuir, não esqueça de avisar lá que você está trabalhando naquilo. Se é algo que ainda não exista uma issue, crie! É importante notificar o que você está fazendo.

### Clonar o repositório

Após isso, você deve dar um fork do projeto. Existe um botão na página do github para isso. Quando ele terminar de realizar o fork, você deve copiar a url do repositório do fork e clonar na sua máquina. 

Feito no terminal, será algo assim:
```sh
git clone https://github.com/<seu_usuario>/poscomp.git
```

Onde seu usuário ficará no campo **<seu_usuario>**.

Ao terminar de clonar, será criado um repositório *poscomp* no seu computador. Agora você tem a liberdade de com seu editor favorito fazer as edições que você achar necessário, ao terminar, você deve commitar suas alterações no seu repositório remoto.

Entre no repositório do *poscomp*

```sh
cd poscomp/
```

Esse primeiro comando irá adicionar todos seus arquivos do diretório atual para serem commitados.

```sh
git add . 
```

Commita seus arquivos, junto com sua mensagem do commit, é muito importante que você descreva de maneira simples e clara o que você fez. Nada muito longo, seja objetivo.

```sh
git commit -m "<sua_mensagem_de_commit>"
```

Finalmente, você enviará para seu repositório remoto todas as alterações feitas.

```sh
git push origin master
```

### Fazendo uma Pull Request

Indo para página do seu fork, você irá visualizar um aviso solicitando que em amarelo você faça uma Pull Request para o repositório original. Ao clicar apareçerá uma página onde você deve preencher informações sobre sua pull request

- Referencie a issue que você está trabalhando usando #<numero_da_issue>

- Descreva o que você fez

- Esteja aberto a críticas construtivas e elogios :)

[Tutorial mais detalhado](https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/).

## Indicações
- Seja claro nos seus commits.
- Sempre que for mudar algo, verifica se é necessário mudar alguma documentação. É importante que tudo esteja atualizado.
- Caso esteja tendo dificuldades de trabalhar com o git, contate alguém da equipe (nas issues ou no gitter) e peça ajuda.

