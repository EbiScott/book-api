# Books API

A RESTful API for managing books, built with Node.js, Express, and MongoDB. This project demonstrates how to create, read, update, and delete book records using a TypeScript backend.

## Features

- **Create a new book**: Add a new book with title, author, published date, ISBN, and optional cover image.
- **Get all books**: Retrieve a list of all books in the database.
- **Get a book by ID**: Fetch details of a single book by its ID.
- **Update a book**: Modify book details by ID, including updating the cover image.
- **Delete a book**: Remove a book from the database by ID.

## Technologies

- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing book records.
- **TypeScript**: Adds type safety to JavaScript.
- **Mongoose**: MongoDB object modeling tool.
- **Supertest**: Testing library for HTTP assertions.

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/book-api.git
    cd book-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory and add your MongoDB URI:

    ```plaintext
    MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/book_api_db?retryWrites=true&w=majority
    PORT=5000
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

   The server will start on port 5000 (or another port if specified in the `.env` file).

## Testing

1. **Run tests:**

    ```bash
    npm test
    ```

   This will execute the tests defined in the `src/tests` directory using Jest.

## API Endpoints

- `POST /api/books` - Create a new book
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a book by ID
- `PUT /api/books/:id` - Update a book by ID
- `DELETE /api/books/:id` - Delete a book by ID

## Postman Collection

You can test the API endpoints using the Postman collection provided in this repository.

1. **Download the Collection**:
   - Download the Postman collection from [postman-collection.json](Books_API.postman_collection.json).

2. **Import the Collection into Postman**:
   - Open Postman.
   - Click on "Import" in the top left.
   - Select the downloaded `postman-collection.json` file.
   - Click "Open" to import it into Postman.

3. **Use the Collection**:
   - You can now use the imported collection to test the API endpoints.

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
