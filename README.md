## Description

1. Prepare a comprehensive document that explains Express.js and provides an overview of other frameworks. Additionally, elucidate the reasons why frameworks are necessary. Include information on REST APIs and their components and store it in client-server-architecture.md.

2. Install and set up the latest stable version of Express.

   1. npm install express

3. Setup and configure cookie-parser dependency

4. Install and set up the latest stable version of Postman.

   1. Open a terminal

   2. Add the postman repository

      1. sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'

5. Import the Postman GPG Key

   1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61

6. Update the package list

   1. sudo apt-get update

7. Install Postman

   1. sudo apt-get install postman

8. Add these details to the README.md file.

9. Create a GET API that returns a mock list as a response.

   1. FileName -

      1. app.js: This file will contain the main Express application code.

      2. mockData.js: This file will contain your mock data (an array, for instance).
