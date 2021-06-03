# QA Automation Certification

# Front end

## Description

Hello, my name is Jovana and I worked creating a new automation project with [TestCafe tool](https://celestialsys.com/blog/testcafe-a-perfect-automation-tool-for-web-based-applications/#:~:text=Test%20Cafe%20is%20a%20Node,in%20JavaScript%20%5Bor%5D%20TypeScript.) and coded with [Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript). The purpose of this project is to navigate through the [Sample page](https://www.saucedemo.com/) using automated test cases to different scenarios as “Login”, “Logout”, “Add items in the shopping cart”, “Complete an order”, etc. This project is organized to use [Page Object Model (POM)](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b#:~:text=What%20is%20POM%3F,a%20page%20of%20your%20AUT%20
) and [CSS Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Setup Environment

By downloading this repo, you should consider to have the proper configuration for running the scripts. For environment setup follow the next steps:

### Node.js setup
1. Install [node.js + npm](https://nodejs.org/en/), after you can follow this [guide]( https://wsvincent.com/install-node-js-npm-windows/).
2. To confirm we've installe everthing correctly, open a new terminal in your preference Coding IDE.
3. To confirm Node is installed, in your terminal enter command:
  ````
  node -v
   ````
   which will print its current version number
4. To confirm NPM is installed, in your terminal enter command:
  ````
  npm -v
  ````
   which will print its current version number

### Create Node project

To create a Node project, we need to create a folder where our Framework is going to live.
1. In terminal, using **"cd"** command, place and locate in the root where you want to create the project
2. After that, in your terminal enter command:
 ````
  mkdir <folder_name>
  ````
3. Move to your new folder and run next command:
  ````
  cd <folder_name>
  ````
4. In your IDE, select **"File"** option in the menu, then select **"Open..."** option, select the new Folder, and click on **"Open"** button
5. Project Folder is available in your IDE
6. Open a new terminal, and be sure your terminal is located in your project Folder
7. To create Node project, in terminal enter commnad: 
  ````
  npm init
  ````
 8. Now you can see some instructions about project, please skip them.
 9. Is this OK? (yes) is available in command line, enter "y" and package.json is available in project folder

### TestCafe setup

1. In terminal, run next command:
  ````
  npm install testcafe
  ````
2. To confirm TestCafe is installed, in your terminal enter command:
  ````
  testcafe -v
  ````
  
## Run UI Test Cases

Runing test cases is very simple and there are thre ways to make customized runs.

1. In terminal, using **"cd"** command, move to "test" folder.

The next are some of the different running options:
  
 ### Run all test cases
 ```
testcafe <browser> *
```
Example:
 ```
testcafe chrome *
```

## Run a test set**
```
testcafe <browser> <testFolderFile>
```
Example:
```
testcafe safari Login.test.js
```

## Run a single test case
```
testcafe <browser> <testFolderFile> -t "<testCaseName>"
```
Example:
```
testcafe firefox Login.test.js -t "User can login with valid credentials"
```

## Run a script
```
npm run <scriptName>
```
Example:
```
npm run test:multiBrowser
```
For this project when you run a script, at the end a reporter is created in folder "report".


**Tips**
>- *The available values for < browser > are the he browsers installed in your computer: ie, chrome, safary, firefox, etc. You can find more information [here](https://testcafe.io/documentation/402828/guides/concepts/browsers).*
>- *The scripts are located in the "package.json" file in the section "scripts". < scriptName > is the key value of the script defined."*
>- *There are other options and commands for run testCases, refer to [here](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) to learn more about it.*


# Back end

## Description

Hi, my name is Jovana and I created a Postman Collection with different scenarios, I coded with JSON and Javascript. The purpose of this project is to navigate through [Square API](https://developer.squareup.com/reference/square/payments-api) using automated test cases for positive and negative scenarios.

## Setup Environment

By downloading this repo, you should consider to have the proper configuration for running the scripts. For environment setup follow the next steps:

### Newman setup

1. Open your IDE
2. Open a terminal and enter command:
  ````
  npm install --save-dev newman
  ````
 3. Enter command script: 
  ````
  npm run api:all
  ````
  the script includes collection and environment location and where you want to save your reports.
  
 4. Please in the environment file add the token and location for your user account.



