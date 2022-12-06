## Node + TypeScript-server boiler-plate

This todoapi services is to provide the functionalities of every user on bien which includes

- Login & Registration
- Forgot and Reset Password
- Create and Edit Todo
- Update & Delete Todo

For now, this server has not been deployed, hence the developer is expected to run the server locally, with the help of the following:

- clone the repository or download the /api folder : git clone https://github.com/blyncnov/pg-node-todoapi.
  Note: You're only concerned with the src folder, so you should navigate there

- Ensure node is installed else, download [https://nodejs.org/en/download/]here
- Install all dependencies: npm install
- run server: npm run start

### Base url: http://localhost:8000/api/v1

Scheme: "http"

- Todoapi DATABASE

  - users
  - todo

### User Authentication

Every routes about users authentication;

- GET: /auth/profile

  - parameters: null
  - action: for users to view thier profile
  - response: user's object;
  - requirements : user must be logged in

    ```json
    {
            "id": "1",
            "todoid": "1",
            "username": "todoapi Holmes",
            "email": "todoapi@gmail.com",
            "password": "$2b$10$KwC0kokzCtQrJqMsASIbq.8iUnXJwgEbGujHyDoEtji/TEqPqzvyO"
        },
    ```

- POST: /auth/signup

  - parameters: username, email & password
  - action: for users to sign up
  - response: status object;

    ```json
    {
      "statusCode": 201,
      "message": "User created successfully"
    }
    ```

- POST: /auth/login

  - parameters: email & password
  - action: for users to login
  - response: status object;

    ```json
    {
      "status": 200,
      "message": "You've logged in successfully",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6InNoZXJsb2NrcyBIb2xtZXMiLCJpYXQiOjE2NzAzNDY5MTEsImV4cCI6MTY3MDM0NzUxMX0.bPdj6eiuPFuamgls6Vur8XyFj5k4HfH61-TobYcEaoA"
    }
    ```

- POST: /auth/forgot-password

  - parameters: email
  - action: for users to reset their password
  - response: detailed object;

    ```json
    {
      "status": 201,
      "message": "Awwn, ooops you forgot your password",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNoZXJsb2Nrc0hAZ21haWwuY29tIiwiaWF0IjoxNjcwMzQ2ODk1LCJleHAiOjE2NzAzNDcxOTV9.JpfAGZfYrc8cAiVmybqYoE61PTkoQFQXcai8D9-jAaw",
      "link": "http://localhost:8000/api/v1/auth/reset-password/1/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNoZXJsb2Nrc0hAZ21haWwuY29tIiwiaWF0IjoxNjcwMzQ2ODk1LCJleHAiOjE2NzAzNDcxOTV9.JpfAGZfYrc8cAiVmybqYoE61PTkoQFQXcai8D9-jAaw"
    }
    ```

- PATCH: /auth/:id/:token

  - parameters: password and confirmPassword
  - action: for users to enter new password
  - response: user's updated object;

    ```json
    {
      "id": "1",
      "todoid": "1",
      "username": "sherlocks Holmes",
      "email": "sherlocksH@gmail.com",
      "password": "Ajala"
    }
    ```

### Todo Routes

Every routes about todo;

Requirements: : user must be logged in to use any of this routes

- GET: /todo

  - parameters: null
  - action: To fetch all todo
  - response: todo object;

    ```json
    {
      "statusCode": 200,
      "message": "Todo successfully retrieved",
      "data": [
        {
          "id": "1",
          "userid": "1",
          "title": "I am working on a new project",
          "description": "What do you think ?",
          "iscompleted": false
        },
        {
          "id": "2",
          "userid": "1",
          "title": "I am working on a new project",
          "description": "What do you think ?",
          "iscompleted": false
        },
        {
          "id": "3",
          "userid": "1",
          "title": "I am working on a new project",
          "description": "What do you think ?",
          "iscompleted": false
        }
      ]
    }
    ```

- GET: /todo

  - parameters: null
  - action: To fetch a single todo
  - response: todo object;

    ```json
    {
      "statusCode": 200,
      "message": "Todo data successfully retrieved",
      "data": {
        "id": "17",
        "userid": "1",
        "title": "I am getting better at PSQL",
        "description": "yeah!!! i love PSQL 2",
        "iscompleted": false
      }
    }
    ```

- POST: /todo

  - parameters: title and description
  - action: To create a new todo item
  - response: todo object;

    ```json
    {
      "statusCode": 200,
      "message": "Todo Created Sucessfully",
      "data": [
        {
          "id": "17",
          "userid": "1",
          "title": "I am getting better at PSQL",
          "description": "yeah!!! i love PSQL 2",
          "iscompleted": false
        }
      ]
    }
    ```

- PATCH: /todo/:id

  - parameters: title and description
  - action: for users to update single todo data
  - response: todo's updated object;

    ```json
    {
      "statusCode": 200,
      "message": "Todo Updated Sucessfully",
      "data": {
        "id": "17",
        "userid": "1",
        "title": "I am getting better at PSQL",
        "description": "yeah!!! i love PSQL 2",
        "iscompleted": false
      }
    }
    ```

- DELETE: /todo/:id

  - parameters: null
  - action: for users to delete specific todo data
  - response: todo's updated object;

    ```json
    {
      "statusCode": 200,
      "message": "Todo Deleted Sucessfully"
    }
    ```

## Built With

- Node js
- Node-Mailer
- Cors
- Environment Variable

## Developer Information

- Website [`Blyncnov`](https://pro-blyncnov.vercel.app).
- Twitter [`@jeremytechie`](https://twitter.com/jeremytechie).
- Linkedin [`Taiwo Boluwatife`](https://linkedin.com/in/blyncnov).
