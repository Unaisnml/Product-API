# Product-API
APIs for the product management

## Getting Started

1. Clone the repository:
   git clone https://github.com/Unaisnml/Product-API.git

2. Change to the project directory:
   cd Product-API,
   cd server

3. Install dependencies:
    npm install

4. create the .env file and include following:
  PORT = Here write server port number eg:8000 to run
  DATABASE_URL = Here paste your mongodb url to store the data into database

5. Run the application:
   nodemon server.js
The server will be running at http://localhost:8000.

## API Endpoints

1.  **POST /api/product/create**: Create a new product.
   `curl -X POST  "Content-Type: application/json"  '{"name": "Product Name", "category": "Category", "imageUrl": "Image URL", "description": "Product Description"}' http://localhost:3000/api/product/create`

2. **GET /products/:productId**: Fetch a product by ID.
  - Example: `curl http://localhost:3000/api/product/your_product_id`
    
3. **GET /products**: Fetch all products with filters and pagination.
  - Example: `curl http://localhost:3000/api/products?page=1&pageSize=10&productName=apple&category=electronics`

4. **DELETE /products/:productId**: Delete a product by ID.
  - Example: `curl -X DELETE http://localhost:3000/api/product/your_product_id`

