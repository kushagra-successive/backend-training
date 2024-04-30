## Details

1. I have created a file of index.js where i have taken the input for operands from user and passing it to the functions which is created inside math.js which internally calls the lodash arithmetic function for the calculations,and then the output of the function is stored in the solution.csv file.

## Installation:

1. Clone the repository to your local machine:
   git clone https://github.com/kushagra-successive/backend-training.git
2. Install dependencies:
   npm install lodash
   npm install readline-sync

Usage:
Ensure that you have Node.js installed on your system.
Run the application:
node index.js

## Assignment1

1. Set up a stable LTS version of Node.js (optional if already set up).

   1. Here are the steps to install the stable LTS version of Node.js:

   1. Update Package Lists: sudo apt update

   1. Install Node.js:

      1. sudo apt install curl

      2. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

   1. After running the setup script, you can install Node.js and npm:

      1. sudo apt install nodejs

   1. Verify Installation

      1. node -v

      2. npm -v

2. Create a repository (named as backend-training) and generate a README.md file and write all the steps and details in this file.

3. Create a file named 'different-architecture.md' and elucidate the distinctions among various architectural types, outlining their unique characteristics and differences from one another.

4. Generate a file named 'client-server.md' and provide an explanation specifically focusing on the client-server architecture.

5. Set up the nodemon dependency by using cmd - npm install -g nodemon.

6. Create a folder named 'lib.'

7. Create a file named 'math.js' inside the 'lib' folder.

8. Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.

9. In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' according to the given commands. The structure of your project would look something like this:

10. project-root/

|-- index.js

|-- lib/

| |-- math.js

11. Using the Node.js `fs` module, save the aforementioned solution to a CSV file in the following manner
