<p align="center">
  <a href="" rel="noopener">
 <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" /></a>
</p>

<h3 align="center">Desafio 02: FastFett, o início</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

</p>

---

## :rocket: Sobre o desafio

Criar uma aplicação para uma transportadora fictícia, o FastFeet. A aplicação deve conter funcionalidades basicas de criação e atualização de destinatários, autenticação de usuário e validação de dados


### **Um pouco sobre as ferramentas**

- Express;
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilizando PostgreSQL);
- jsonwebtoken + bcryptjs;
- Yup;


### **Database**

Está API está utilizando PostgreSQL para fazer o relacionamento entre as encomendas, entregadores e destinatários. Temos também a de usuários admin da distribuidora e uma tabela para criação de logs de problemas que os entregadores podem encontrar em seu trabalho.


### **Inicializar API**

- yarn dev
- yarn dev:debug (verificar pasta .vscode para configurações)


### **Autenticação**

A autenticação foi realizada com o uso de jsonwebtoken (JWT). Esse processo tem início quando um usuário admin do sistema abre uma seção por meio da rota Session, após a validação de seus dados cadastrais o mesmo recebe da API um token com seu id.

Agora este usuário só tem de vincular esse token a suas próximas requisição por meio do protocolo Bearer. Neste sistema todas a ações a partir da abertura da seção irá pedir uma validação por meio do token.


### **Validação dos dados**

Nesta aplicação todas as requisições passam por processo de verificação de seu dados. Este procedimento é realizado por meio de lib Yup e verificações condizentes com as regras de negócios, por exemplo existência unica de um email.


### **Rotas**

Abaixo estão descritas as rotas do sistema.

  #### - Users (/users)

  | Resource | Method | Body (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /users    | POST   | {name, email, password} | {/} |

  #### - Repicients (/repicients)

   | Resource | Method | Body (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /repicients    | POST   | {name, street, neighborhood, number, complement, state, city, cep} | JWT |
| /repicients/:id    | PUT    | {name, street, neighborhood, number, complement, state, city, cep} | JWT |

  #### - Sessions (/sessions)

   | Resource | Method | Body (JSON) | Headers |
| :---:      | :---:  |    :---:      |    :---: |
| /sessions    | POST  | {email, password} | {/} |


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Proposto com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
