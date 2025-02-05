# Medical Lab Chatbot API

This is a Medical Lab Chatbot API built with Node.js, Express, and MongoDB. The API assists patients in retrieving lab results, checking test prices, booking appointments, and handling general inquiries.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/lab-chatbot.git
    cd lab-chatbot/api
    ```

2. Install dependencies:
    ```sh
    yarn install
    ```

3. Create a `.env` file in the [api](http://_vscodecontentref_/1) directory and add your MongoDB URI and other environment variables:
    ```properties
    MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/
    PORT=5000
    ```

## Configuration

- `MONGO_URI`: Your MongoDB connection string.
- `PORT`: The port on which the server will run (default is 5000).

## Usage

1. Start the server:
    ```sh
    yarn start
    ```

2. The API will be running at `http://localhost:5000`.

## API Endpoints

### Home Route

- **GET /**: Returns a welcome message.
    ```json
    {
        "message": "Welcome to the Medical Lab Chatbot API!"
    }
    ```

### Authentication

- **POST /api/login**: Logs in a user and returns a token.
    ```json
    {
        "username": "user1",
        "password": "password123"
    }
    ```

### Protected Route

- **GET /api/protected**: Returns a protected message. Requires a valid token.
    ```json
    {
        "message": "This is a protected route!"
    }
    ```

### Inquiry

- **GET /api/inquiry**: Returns a message asking how the chatbot can assist.
    ```json
    {
        "message": "How can I assist you with lab services today?"
    }
    ```

### Lab Tests

- **GET /api/tests**: Returns a list of available lab tests.
    ```json
    {
        "tests": [
            { "name": "Blood Test", "price": 50 },
            { "name": "Urine Test", "price": 30 }
        ]
    }
    ```

### Prices

- **GET /api/prices**: Returns a list of test prices.
    ```json
    {
        "prices": [
            { "name": "Blood Test", "price": 50 },
            { "name": "Urine Test", "price": 30 }
        ]
    }
    ```

### Results

- **GET /api/results/:patientName**: Returns test results for a patient or 404 if not found.
    ```json
    {
        "patient": "John Doe",
        "test": "Blood Test",
        "status": "Completed"
    }
    ```

### Appointments

- **POST /api/appointments**: Books an appointment.
    ```json
    {
        "patient": "Alice Doe",
        "test": "Blood Test"
    }
    ```

### Chat

- **POST /api/chat**: Sends a chat message to the chatbot.
    ```json
    {
        "message": "Hello"
    }
    ```

## Testing

1. Run the tests:
    ```sh
    yarn test:api
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
