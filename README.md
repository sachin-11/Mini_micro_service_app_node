# Microservices App

This is a basic example of a microservices application built using Node.js, Express.js, and Axios for communication between services. The application consists of two microservices: one for managing users and another for managing products. Each microservice runs independently and communicates over HTTP.

## Microservices

### User Microservice

The User Microservice manages user data.

- Endpoint: `/users`
- Port: 3001
- Data: MongoDB
- Routes: GET `/users`, POST `/users`

### Product Microservice

The Product Microservice manages product data.

- Endpoint: `/products`
- Port: 3002
- Data: MongoDB
- Routes: GET `/products`, POST `/products`

## Aggregation

The `GET /users` route in the User Microservice fetches user data and then communicates with the Product Microservice to fetch product data. The user and product data are combined and returned as a response.

## Running the App

1. Start User Microservice:
   - Navigate to `user-service` directory: `cd user-service`
   - Run: `npm install && node users.js`

2. Start Product Microservice:
   - Navigate to `product-service` directory: `cd product-service`
   - Run: `npm install && node products.js`

3. Access the Combined Data:
   - Make a GET request to `http://localhost:3001/users`

## Note

This example provides a basic illustration of microservices architecture and communication. In real-world scenarios, you would need to implement additional features, such as error handling, authentication, and deployment strategies.


