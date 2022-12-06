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

### User

Every routes about users;

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

- PATCH: /auth/forgot-password

  - parameters: email
  - action: for users to reset their profile
  - response: user's updated object;
    ```json
    {
      "status": 201,
      "message": "Awwn, ooops you forgot your password",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNoZXJsb2Nrc0hAZ21haWwuY29tIiwiaWF0IjoxNjcwMzQ2ODk1LCJleHAiOjE2NzAzNDcxOTV9.JpfAGZfYrc8cAiVmybqYoE61PTkoQFQXcai8D9-jAaw",
      "link": "http://localhost:8000/api/v1/auth/reset-password/1/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InNoZXJsb2Nrc0hAZ21haWwuY29tIiwiaWF0IjoxNjcwMzQ2ODk1LCJleHAiOjE2NzAzNDcxOTV9.JpfAGZfYrc8cAiVmybqYoE61PTkoQFQXcai8D9-jAaw"
    }
    ```

- PATCH: /auth/<token>

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

- PATCH: /auth/update
  - parameters: properties on the users model
  - action: for users to update their profile
  - response: user's updated object;
    ```json
    {
      "_id": "638a2b0756d9124aff9a15ce",
      "email": "Og@mail.com",
      "password": "$2b$08$wejMtv9ytAVmSLOSc5r25OmKKoAT9XW9N.IZJjDNxJxC2Fe1qKYFi",
      "createdAt": "2022-12-02T16:42:48.008Z",
      "updatedAt": "2022-12-02T16:54:31.188Z",
      "__v": 0
    }
    ```

## Transactions

Every routes about transactions

- POST: /transaction/deposit

  - parameters: amount (amount deposited)
  - response: transaction details with model structure
  - response format: json
  - action: for users to deposit their account

- POST: /transaction/requestForWithdrawal

  - parameters: amount
  - response: transaction details with model structure
  - response format: json
  - action: for users to request funds in their account with amount to withdraw

- GET: /transaction/user-transactions

  - parameters: none
  - response: an array transaction details with model structure
  - response format: json
  - action: for users to check thier transactions

- GET: /transaction/:id

  - parameters: id
  - response: transaction details with model structure
  - response format: json
  - action: to get a transaction detail with id

- GET: /transaction/all
  - parameters: none
    - response: an array transaction details with model structure
  - response format: json
  - action: for admin to get lists of all transactions

## Built With

- Node js
- Node-Mailer
- Cors
- Environment Variable

## Developer Information

- Website [`Blyncnov`](https://pro-blyncnov.vercel.app).
- Twitter [`@jeremytechie`](https://twitter.com/jeremytechie).
- Linkedin [`Taiwo Boluwatife`](https://linkedin.com/in/blyncnov).
