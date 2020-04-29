<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">
<br>
Rocketseat - GoStack 10 - Challenge 02 
</h1>

<p align="center">
This project was created to solve a challenge requested by Rocketseat. 
Gostack is immersive training in technologies, react and react natively.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features

- Features can be accessed by routes below.

- 💹 **Node Js** — A web framework for Node Js

### **Routes**

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


## Getting started

- Clone project > enter the project folder
- run `yarn`
- run `docker run --name dbimage -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- run `yarn sequelize db:migrate`
- run `yarn dev`

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

---

Created with passion by me 👨🏻‍💻
