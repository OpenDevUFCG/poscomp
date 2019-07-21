# Contributing

Contribuições sempre serão bem-vindas, sejam pequenas ou grandes. Abaixo, conheça as várias formas de contribuir conosco.

## Tipos de Contribuição

### Resolvendo Issues

As *issues* são um espaço aberto para requisitar criação, mudança ou conserto de material. Também podem ser usadas como um espaço de discussão, mas tenha em mente que o tema sempre deve estar relacionado ao projeto.

### Resolução de Questões

Além de contribuições no desenvolvimento, também é muito importante para o crescimento do projeto que recebamos cada vez mais soluções de questões das provas da POSCOMP. Esse tipo de contribuição é particularmente importante, pois torna o impacto do projeto cada vez mais profundo. 

Se você tem esse tipo de material e quer compartilhar, leia [esse](./docs/QUESTAO.md) e [esse](./docs/AUTOR.md) documentos antes de seguir para a próxima seção.

## Como Contribuir?

### 1. Git e GitHub

O Git e o GitHub são poderosas ferramentas de versionamento de código que utilizamos para hospedagem e manutenção do Poscomp. Caso você não tenha experiência com essas tecnologias ou tenha dúvidas sobre as seções a seguir, esse [guia](https://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/) pode ser de grande auxílio em sua jornada.

**Ainda restam dúvidas?** Contate um dos membros de nossa equipe! Estaremos sempre dispostos a ajudar!

### 2. Escolha uma *Issue*

O primeiro passo é escolher uma *issue* em que você deseja contribuir. Lembre-se de avisar nessa *issue* que você estará trabalhando nela, é muito importante manter todos notificados sobre o que já está sendo feito. Quer contribuir com algo que ainda não é uma *issue*? Não tem problema! Todos podem criar *issues* que achem pertinentes ao repositório.

### 3. Crie o seu *Fork*

Com a issue escolhida ou criada, é hora de *forkar* o Poscomp. Vá até a página inicial do [repositório](https://github.com/OpenDevUFCG/poscomp) e clique no botão **Fork** que se encontra no topo da página à direita. Ao fim do processo, copie a URL do repositório criado (o "seu" Poscomp).

**P.S.:** Essa URL seguirá o formato `https://github.com/<seu_usuario>/poscomp`, em que `<seu_usuario>` é o seu usuário do GitHub. Por fins didáticos, iremos chamá-la apenas de `<url_do_fork>` a partir daqui.

### 4. Clone o repositório

Com o *fork* criado, é hora de ter nosso repositório em sua máquina através da clonagem de repositório. Essa operação pode ser feita através do terminal com o comando `git clone` e a URL do seu fork. Dito isso, vá até seu terminal e use o seguinte comando:

```sh
git clone <url_do_fork>
```
Ao término da execução do comando, terá sido criado um repositório *Poscomp* no seu computador.

### 5. Produza conteúdo

Esse momento é todo seu! Com seu repositório local, você tem a liberdade de fazer as alterações que julgar necessárias. Produza ou adicione todo o conteúdo que ache útil para a *issue* que você escolheu, ele será muito bem-vindo! 

### 6. Commite as modificações

Ao terminar de adicionar o conteúdo que desejava, chegou a hora de *commitar* suas alterações para o repositório remoto. Em outras palavras, iremos levar essas modificações para o repositório que todos podem visualizar *online*.

Inicialmente, utilizando o comando `cd` no terminal, navegue até o seu repositório local do *Poscomp*:

```sh
cd poscomp/
```
A seguir, adicione os novos arquivos com o comando `git add`. Com o comando abaixo, todos os arquivos modificados (ou criados) serão adicionados de uma só vez.

```sh
git add . 
```

Após adicioná-los, chegou a hora de commitar esses arquivos usando o comando `git commit`. Escolha uma mensagem que descreva bem as modificações que você fez e utilize o comando abaixo para realizar o commit:

```sh
git commit -m "<sua_mensagem_de_commit>"
```

Por fim, envie todos os *commits* para o seu repositório remoto através do `git push`. Utilize o seguinte comando:

```sh
git push origin master
```
Pronto! Agora todas as modificações que você fez localmente estão também disponíveis no seu repositório remoto (*fork*)!

### 7. Crie uma PR

Agora que as modificações estão no repositório remoto do seu *fork*, você pode sugerir a adição delas no repositório do Poscomp através de uma *Pull Request*. 

Para isto, vá até a página do seu fork e clique no botão **New Pull Request**. Seu navegador será direcionado a uma página que lista todos os commits do seu *fork* que não estão presentes no Poscomp original. Nela, clique no botão **Create Pull Request** e preencha os campos textuais seguindo as instruções ali presentes. Por fim, confirme a criação da PR e aguarde a avaliação de um dos membros de nossa equipe. 

**Assim que possível alguém irá aprovar sua PR ou requisitar as mudanças necessárias!**

## Indicações

- Seja claro em seus commits.
- Caso esteja tendo dificuldades de trabalhar com o Git, contate alguém da equipe e peça ajuda.
- Sempre que for mudar algo, verifique se é necessário alterar algo também na documentação. É importante que tudo esteja atualizado!

