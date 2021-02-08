# FizzBuzz UI

The application is built using ReactJS and Material UI
- The code is written in JavaScript following functional programming pattern
- Axios library is used to make API calls to the [FizzBuzzAPI] (https://github.com/Abirath/FizzBuzzAPI)

**Note:** Make sure to run the [FizzBuzzAPI](https://github.com/Abirath/FizzBuzzAPI) project first to make the API up and running.

## Frontend Features

The webpage displays the list of values exposed by the FizzBuzzAPI. 
- A table with two columns, **Number** and **Value** for the numbers **1** to **100** are displayed.
- The value **"Fizz"** is displayed for multiples of **3**, **"Buzz"** for multiples of **5** and the value **"FizzBuzz"** for multiples of both **3** and **5**.

### Running the frontend project

The frontend repository was created using `create-react-app fizzbuzz-ui`

To startup the frontend client run the following command.

- `npm install` - This will fetch the required node modules for the website to run (and for the other scripts below).
- `npm start` - This will start the application for development
- `npm run build` - Will create a production optimised build
- `npm test` - Will run the front end tests

Ideally this application would run on port **3000**.

## Creating an Azure app service.

1.	Login to Azure portal.
2.	Navigate to All services --> web --> app services. 
3.	Add new app, configure name, and resource group then click create button. 
4.	Hit refresh button to make sure the created app service shows up on the dashboard.

## Deploying the app to Azure:

1.	Go to deployment center, select github as source control version and configure the path to the github repo.
2.	Select the appropriate build provider and click continue.
3.	Specify what node engine and the version will be used to the build provider in package.json file. 
4.	Build the react app by executing `npm build` in the terminal. 
5.	Now, navigate to the build folder and initialize the git repo by following the commands,
-	`git init`
-	`git add .`
-	`git commit -m “Commit message”`
-	`git remote add azure <git clone url>` (the url to clone will be provided in the azure overview page) 
-	`git push azure master`
 
Now, visit the live app by using the url on the overview page. 

