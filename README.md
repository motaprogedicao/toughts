# THOUGHTS

Aplicação web desenvolvida com Node.js durante meus estudos de desenvolvimento backend, acompanhando o curso **Node.js do Zero a Maestria com diversos Projetos**, de Matheus Battisti.

O projeto está sendo desenvolvido de forma incremental, com foco na compreensão da arquitetura MVC, autenticação de usuários, gerenciamento de sessões e desenvolvimento de aplicações web utilizando Node.js.

> Este projeto está em desenvolvimento e faz parte do meu processo de aprendizado com Node.js.

## Tecnologias utilizadas

- Node.js
- Express
- Handlebars
- JavaScript
- bcrypt
- HTML5
- CSS3
- Arquitetura MVC

## Estrutura do projeto

```text
THOUGHTS/
│
├── controllers/
│   ├── AuthController.js
│   └── ThoughtsController.js
│
├── db/
│
├── models/
│   ├── Thought.js
│   └── User.js
│
├── public/
│   ├── css/
│   │   └── styles.css
│   │
│   └── img/
│
├── routes/
│   ├── authRoutes.js
│   └── thoughtsRoutes.js
│
├── sessions/
│
├── views/
│   ├── auth/
│   │   ├── login.handlebars
│   │   └── register.handlebars
│   │
│   ├── layouts/
│   │   └── main.handlebars
│   │
│   └── thoughts/
│       └── home.handlebars
│
└── index.js
