## Your First React App
- In this module, we will setup a basic react app
- It will help us understand the following things
    - learn to use npm to install create-react-app module
    - use create-react-app npm module to setup or create the basic react app
    - we will see the various parts of the project/app for our better understanding

### Installing create-react-app
- We will be using something called create-react-app - https://create-react-app.dev/
- It is a npm module that lets us to quickly and easily setup a react app with just a few commands
- But first we need to install create-react-app
  - **WARNING** - Make sure you have NodeJS and NPM in running shape from your terminal before proceeding further
  - Run the following command
    ```shell
    npm install -g create-react-app
    ```
  - The above command will run and eventually complete
  - To test if we were successful in install create-react-app, run the following command from your terminal to confirm
    ```shell
    create-react-app -V
    ```
    This should print the version of the create-react-app, currently at the time of writing this it should be 4.x.x

### Create a ReactJS application with create-react-app
- **WARNING** - Make sure you have create-react-app, NodeJS, NPM in running shape before proceeding further
- Run the following command
    ```shell
    create-react-app first-app --use-npm
    ```
- The command will take sometime to run for the first time - it took roughly 4-5 minutes for me
- Once everything is complete you'll see a success message

### Running the app
- Change your directory into the app folder
- Run the following command
  ```shell
    npm run start
  ```
  or
  ```shell
    npm start
  ```
- The app should start running automatically. It will also typically launch a browser window/tab with the react app loaded
- If the tab/window does not open automatically, you can open your browser window with `http://localhost:3000` as the URL

### Things to keep note off in this sample app
- Take a look at the `package.json`
- Take a look at the `App.js` and `index.js`
- Take a look at the `index.html`
