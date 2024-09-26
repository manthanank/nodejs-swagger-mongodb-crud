# Node.js CRUD API with Swagger Documentation

This project is a simple CRUD API built using Node.js, Express, and MongoDB, with Swagger for API documentation. The API allows users to create, read, update, and delete users in the system.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or remotely)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/manthanank/nodejs-swagger.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd nodejs-swagger
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root of your project** and add the following:

    ```bash
    PORT=3000

    MONGODB_USER=your_mongodb_user
    MONGODB_PASSWORD=your_mongodb_password
    MONGODB_DBNAME=your_mongodb_dbname
    ```

   Replace the `MONGO_URI` with your MongoDB connection string if using a remote database.

## Project Structure

```bash
nodejs-swagger/
│
├── config/
│   └── database.js        # MongoDB connection setup
├── controllers/
│   └── userController.js  # User controller with CRUD logic
├── models/
│   └── userModel.js       # Mongoose schema for user
├── routes/
│   └── userRoutes.js      # Routes for CRUD operations
├── swagger/
│   └── swagger.json       # Swagger documentation setup
├── app.js                 # Entry point to initialize the app
├── package.json           # Node.js dependencies
├── .env                   # Environment variables
|── .env.example           # Example environment variables
├── .gitignore             # Files and directories to ignore
|── LICENSE                # MIT License
└── README.md              # Project instructions
```

## Running the Project

1. **Ensure MongoDB is running locally or connected remotely**.
2. **Start the server**:

    ```bash
    node app.js
    ```

3. The server will be running at:

    ```bash
    http://localhost:3000
    ```

4. Open your browser and navigate to:

    ```bash
    http://localhost:3000/api/api-docs
    ```

   This will bring up the Swagger UI where you can test the API.

## API Documentation

The API documentation is provided through Swagger and can be accessed at:

```bash
http://localhost:3000/api/api-docs
```

This provides an interactive interface to try out API requests, view request/response formats, and see detailed documentation for each endpoint.

## Usage

You can interact with the API via:

- **Swagger UI** at `http://localhost:3000/api/api-docs`
- **Postman** or **cURL** by sending HTTP requests to `http://localhost:3000/api/users`

### Example: Create a User via cURL

```bash
curl -X POST "http://localhost:3000/api/users" \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}'
```

## API Endpoints

The following endpoints are available in the API:

### 1. **Get All Users**

- **URL**: `/users`
- **Method**: `GET`
- **Description**: Retrieves a list of all users.
- **Responses**:
  - `200 OK`: Returns a list of users.

### 2. **Get a User by ID**

- **URL**: `/users/{id}`
- **Method**: `GET`
- **Description**: Retrieves a user by their ID.
- **Parameters**:
  - `id` (string, required): The user's ID.
- **Responses**:
  - `200 OK`: Returns the user object.
  - `404 Not Found`: User not found.

### 3. **Create a User**

- **URL**: `/users`
- **Method**: `POST`
- **Description**: Creates a new user.
- **Request Body**:

     ```json
     {
       "name": "string",
       "email": "string",
       "age": "number"
     }
     ```

- **Responses**:
  - `201 Created`: Returns the newly created user.

### 4. **Update a User**

- **URL**: `/users/{id}`
- **Method**: `PUT`
- **Description**: Updates a user by their ID.
- **Parameters**:
  - `id` (string, required): The user's ID.
- **Request Body**:

     ```json
     {
       "name": "string",
       "email": "string",
       "age": "number"
     }
     ```

- **Responses**:
  - `200 OK`: Returns the updated user object.
  - `404 Not Found`: User not found.

### 5. **Delete a User**

- **URL**: `/users/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
- **Parameters**:
  - `id` (string, required): The user's ID.
- **Responses**:
  - `200 OK`: User deleted.
  - `404 Not Found`: User not found.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.