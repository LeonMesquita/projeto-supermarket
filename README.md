# <p align = "center"> Leon's Supermarket </p>

<p align="center" >
   <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height="200"/>
   
</p>




##  :clipboard: Descrição

Leon's Supermarket é um sistema de supermercados onde você pode fazer login, adicionar itens ao carrinho, pesquisar produtos, adicionar endereços e finalizar uma compra.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- Node.js
- TypeScript
- Postgresql with Prisma

***

## :rocket: Rotas
## Autenticação

```yml
POST /signup
    - Rota para criar uma conta
    - headers: {}
    - body: {
        "name": "Seu nome",
        "email": "test@gmail.com",
        "password": "12345",
        "confirmPassword": "12345"
    }
```
    

    
```yml 
POST /signin
    - Rota para logar na sua conta
    - headers: {}
    - body: {
        "email": "test@gmail.com",
        "password": "12345",
    }
```


## Compra
```yml 
POST /cart/add
    - Rota para adicionar um item ao carrinho
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {
        "productId": 1,
        "amount": 2
    }
```
```yml 
DELETE /cart/:productId
    - Rota para remover um item do carrinho
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {}
```

```yml
GET /cart/products
    - Rota que retorna todos os produtos no carrinho
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 2,
                "name": "Coca-Cola 2L",
                "price": 9.289999961853027,
                "barcode": "vgr54645645g",
                "picture_url": "https://static.paodeacucar.com/img/uploads/1/643/20247643.jpg",
                "product_type_id": 3,
                "product_id": 3,
                "cart_id": 2,
                "amount": 2,
                "user_id": 2
            },
        ]
``` 


```yml
POST /purchase
    - Rota que finaliza uma compra
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {
            "total_price": 10,
            "address_id": 17
        }
``` 
 
```yml
POST /cart/reset
    - Rota que reseta todos os produtos no carrinho
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {}
```

```yml
GET /cart/products/:productId
    - Rota que retorna um produto no carrinho pelo seu id
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {}
```


## PRODUTOS

```yml
GET /products
    - Rota que retorna todos os produtos cadastrados
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 2,
                "name": "Coca-Cola 2L",
                "price": 9.289999961853027,
                "barcode": "vgr54645645g",
                "picture_url": "https://static.paodeacucar.com/img/uploads/1/643/20247643.jpg",
                "product_type_id": 3,
                "product_id": 3,
                "cart_id": 2,
                "amount": 2,
                "user_id": 2
            },
        ]
```

```yml
GET /types
    - Rota que retorna todas as categorias de produtos
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 2,
                "name": "Limpeza",
                "picture_url": "https://st.depositphotos.com/1063437/1909/i/600/depositphotos_19096273-stock-photo-shopping-basket-with-detergent-bottles.jpg"
            },
        ]
```
```yml
GET /products/:typeId
    - Rota que retorna todos os produtos de um determinado tipo
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 1,
                "name": "Iogurte Sabor Morango",
                "price": 7,
                "barcode": "ebgvvbt5445",
                "picture_url": "https://static.paodeacucar.com/img/uploads/1/676/677676.png",
                "product_type_id": 1,
                "product_type": "Lacticínios"
            },
        ]
```

```yml
GET /products/name/Des
    - Rota que retorna todos os produtos cujo nome contém os caracteres informados
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 7,
                "name": "Desinfetante Bak YPÊ Lavanda 5 Litros",
                "price": 27.89,
                "barcode": "dfgert4354terg",
                "picture_url": "https://castronaves.vteximg.com.br/arquivos/ids/371240-1000-1000/10524_01.jpg?v=637655839188170000",
                "product_type_id": 2
            },
            {
                "id": 32,
                "name": "Desinfetante Lavanda Sanol 5L",
                "price": 11.99,
                "barcode": "vbnjyjytj436",
                "picture_url": "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/3717.webp",
                "product_type_id": 2
            }
        ]
```


## INFORMAÇÕES DO USUÁRIO

```yml
POST /address
    - Rota que adiciona um novo endereço de entrega
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {
        {
            "street": "rua dos araujos 3",
            "number": 35,
            "district": "frei higino",
            "nickname": "casa 3"
        }
    }
```

```yml
POST /address
    - Rota que retorna todos os endereços de entrega do usuário
    - headers: {
        "Authorization": "Bearer Token"
    }
    - body: {}
    - A resposta tem o formato:
    [
         {
            "id": 1,
            "street": "Rua dos Araújos",
            "district": "Bairro Frei Higino",
            "nickname": "Casa",
            "number": 35
        },
        {
            "id": 2,
            "street": "Rua Augusto Lima",
            "district": "Bairro São José",
            "nickname": "Apartamento",
            "number": 32
        },
    ]
```
***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/LeonMesquita/projeto-supermarket.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```
Em seguida, crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Se baseie no arquivo .env.example.

Após isso, execute o comando do Prisma para a criação das tabelas
```
npx prisma migrate dev
```

Depois, copie o script do arquivo dump.sql e cole no seu banco de dados.



Por fim, é só inicializar o servidor
```
npm run dev
```