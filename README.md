# Appliance Management System

This project is a REST API built with Node.js and Express that manages an inventory of appliances. It allows you to check the availability of an appliance and update its quantity in stock.

## Features

- **Retrieve an appliance**: Fetches the details of an appliance by its ID, including its availability.
- **Update an appliance**: Allows updating the quantity of a specific appliance in inventory.

## Requirements

- Node.js
- MySQL
- npm

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/appliance-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd appliance-management
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the MySQL database:

   - Create a database named `almacen`.
   - Configure the database credentials in the connection file (`conexion.js`).

5. Start the server:

   ```bash
   npm start
   ```

   The server will be available at `http://127.0.0.1:3000/`.

## Endpoints

### 1. Get an Appliance by ID

- **URL**: `/electrodomestico/:id`
- **Method**: `GET`
- **Description**: Fetches the details of an appliance and its availability.
- **Response**:
  - `200 OK`: Appliance information.
  - `404 Not Found`: The appliance was not found.
  - `400 Bad Request`: Error in retrieving data.

### 2. Update Appliance Quantity

- **URL**: `/electrodomestico/:id`
- **Method**: `PUT`
- **Description**: Updates the quantity of an appliance.
- **Body**:
  - `cantidad` (number): New quantity of units.
- **Response**:
  - `200 OK`: The appliance was successfully updated.
  - `404 Not Found`: The appliance was not found.
  - `400 Bad Request`: Error in updating data.

## Project Structure

```bash
.
├── app.js                # Main file to start the server
├── conexion.js           # Database connection configuration
├── routes
│   └── electrodomestico.js  # Routes for managing appliances
└── package.json          # Project dependencies and scripts
```

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework.
- **MySQL**: Relational database management system.
- **Body-Parser**: Middleware to parse request bodies.

## Contributions

Contributions are welcome. Please open an issue to discuss any major changes before submitting a pull request.

## License

This project is licensed under the MIT License.
