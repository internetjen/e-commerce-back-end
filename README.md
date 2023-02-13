# E-Commerce Back-End

  ## Description
  This project builds a back end for an e-commerce site using: Express.js API, Sequelize, a MySQL database.

  The application allows its user to manage an e-commerce database. The user will be able to view, edit, and delete any categories, products, or tags. 

  ## Table of Contents
  * [Prerequisites](#prerequisites)
  * [Installation](#installing)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Getting Started

  ### Prerequisites
  * In order to run the app, you'll need to have [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/about-npm) installed on your local machine. 

  ### Installing
  * Clone the repository to your local machine.
  * Open the terminal and navigate to the project directory.
  * Run `npm install` to install all the required packages.
  * Add your database name, MySQL username, and MySQL password to an environment variable to connect to a database using Sequelize.
  * Connect to MySql server and `source db/schema.sql`
  * Seed your database by typing `npm run seed` in the terminal.
  * Start server by typing `node app.js` or `npm start` in the terminal.

  ## Usage

  ### App Functionality

  Using [Insomnia core](https://insomnia.rest/download), test various routes.

  * Open API GET routes for categories, products, and tags to display the data for each of these routes in a formatted JSON.

  * Test API POST routes by creating new data in database.

  * Test API PUT routes by editing existing data in database.

  * Test API DELETE routes by deleting existing data in database.

  ### Walk-through Video
  To see all of these in action, take a look at this video.
  ![App Walk-through]https://user-images.githubusercontent.com/108141392/218563259-b35555e6-5a06-47f0-97f5-477601abeb66.mp4





  ## License
  N/A

  ## Questions
  For inquiries, please email me at arboleda.jen@gmail.com or visit my [GitHub](https://github.com/internetjen)
