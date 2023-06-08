CSV Upload
This project allows you to upload CSV files, store their information in a MongoDB database, and display the data in a table on the front-end. It also provides a search functionality to filter the displayed data based on a specific column.

Setup
To set up the project on your local system, follow these steps:

Clone the repository:

- git clone https://github.com/roudraneelash/csv-uploaded.git

Navigate to the project directory:

- cd csv-upload

Install the dependencies:

- npm install

Set up the MongoDB database:

Make sure you have MongoDB installed and running on your system.
Create a new MongoDB database.
Update the MongoDB connection URL in the config/db.js file to point to your database.

Start the server:

- npm start

Project Structure
The project follows a scalable folder structure with separate models, controllers, and routes:

The config folder contains the database configuration file (db.js).
The controllers folder holds the file controller (fileController.js), which handles file upload and data retrieval.
The models folder contains the File model (File.js), representing the MongoDB schema for storing file information.
The public folder includes CSS and JavaScript files for styling and client-side functionality.
The routes folder contains the route definitions (index.js) for file upload, file listing, and data retrieval.
The uploads folder is where the uploaded CSV files will be stored.
The views folder contains the EJS templates for file views and the layout file.

Dependencies
The project utilizes the following dependencies:

Express: Fast, unopinionated, minimalist web framework for Node.js.
EJS: Templating engine for rendering views.
Multer: Middleware for handling multipart/form-data, used for file upload.
CSVtoJSON: Library for converting CSV files to JSON.
Mongoose: MongoDB object modeling for Node.js.

Additional Notes
The project uses the CSVtoJSON library to convert the uploaded CSV file to JSON format before rendering it.
The Multer middleware is used to handle file upload and store the file in the uploads folder.
The File model is responsible for defining the schema and methods for interacting with the MongoDB collection.
The file views (fileview.ejs and home.ejs) are rendered using the EJS templating engine.
The front-end functionality, including search and table filtering
