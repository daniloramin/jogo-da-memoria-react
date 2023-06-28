# Jogo da Memória React 🧠

<img height="500px" src="https://user-images.githubusercontent.com/83323822/227807100-907fda7a-2a62-4476-913a-c037c64750a4.png" alt="Tema light" /> <img height="500px" src="https://user-images.githubusercontent.com/83323822/227807202-adf7cb8b-0ed0-4ba8-a3cb-0a6b667a79a2.png" alt="Cartas viradas e jogo finalizado light" /> 

<img height="500px" src="https://user-images.githubusercontent.com/83323822/227806870-0d0e80b8-36ec-4bb3-b750-50683877cc5b.png" alt="Tema dark" /> <img height="500px" src="https://user-images.githubusercontent.com/83323822/227807222-be62f0fb-8617-4391-8909-9c72fc83a43c.png" alt="Cartas viradas e jogo finalizado dark" />

Acessar o [Jogo da Memória React](https://daniloramin.github.io/jogo-da-memoria-react/ "Link para acessar o Jogo da Memória React").

---

## Sobre
O Jogo da Memória React foi feito com o objetivo de utilizar React.js para refatorar e trazer melhorias para um projeto que foi feito somente utilizando javascript como linguagem de programação. O projeto em questão foi o [Jogo da Memória](https://github.com/daniloramin/jogo-da-memoria "Link para acessar o projeto anterior do Jogo da Memória") que eu havia desenvolvido anteriormente.

---

## Tecnologias usadas
Para desenvolver esse projeto, foram utilizadas as seguintes tecnologias: 
- HTML
- node-sass
- React.js
- Context-API
- React Icons

---

## Funcionalidades
O projeto, além de manter todas as funcionalidades presentes no antigo <a href="https://github.com/daniloramin/jogo-da-memoria" target="_blank">Jogo da Memória</a>, possúi novas funcionalidades.

Funcionalidades antigas: 
- Virar as cartas, sendo permitido somente duas cartas por vez.
- Formar pares ao virar duas cartas iguais.
- Virar as cartas para baixo novamente caso as cartas escolhidas não forem iguais.
- Embaralhar as cartas ao inicial e reiniciar o jogo.
- Botão para reiniciar o jogo

Novas funcionalidades:
- Trocar entre dificuldades (fácil, médio e difícil);
- Trocar entre temas light e dark;
- Salvar no localstorage o tema escolhido pelo usuário, ficando selecionado o tema mesmo após o usuário sair ou abrir a página novamente.
- Timer e Contador de movimentos.

--- 

## Arquitetura
A estrutura de pastas do projeto foi distribuída dentro de uma pasta principal chamada "src". Dentro da pasta principal está o arquivo "index.js", sendo esse responsável por renderizar a aplicação React, o arquivo "cards.js" sendo o responsável por exportar os emojis que irão representar as cartas do jogo em sua respectiva dificuldade, o arquivo "getCardsBasedOnDifficulty.js" sendo o responsável por embaralhar e exportar as cartas baseado na dificuldade selecionada pelo jogador.

Também existem outras três pastas dentro de "src", sendo essas "components", "context" e "styles", onde são armazenados os componentes, contextos e configurações de estilos globais, respectivamente. 

<img height="400px" src="https://user-images.githubusercontent.com/83323822/227817489-35198146-b7fb-48e7-9fe5-b8b57983ca1d.png" alt="Estrutura de pastas to projeto" />








