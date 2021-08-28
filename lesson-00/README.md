## Pre-requisites

As part of this module, we will be primarily looking into React apps. Typically each app will be its own react app
We will need to have some things setup and running before

However, in order to aid our learning better, it makes sense to have a some things sorted out before we get started on the coding aspect.

I have not provided explicit instructions on how to install things like code editors and web browsers. Its expected
that you can manage such things on your own with a simple google search. Always remember: Google is your best friend.

- A Modern Code Editor - which has good support for syntax highlighting and related plugins for web development.
    - While something as simple as Notepad will work as well, it makes life easier when we use a more specialized text editor.
    - I'd recommend Visual Studio Code for most folks. This is a free tool with practically unlimited plugins.
    - I prefer Jetbrains Webstorm - this is a paid tool. Pick whatever works for you best. There is no compulsion.
    - Install whichever code editor you want, but make sure to setup things like syntax highlighting for JavaScript via the plugins.
- A Modern Web Browser - such Google Chrome or Mozilla Firefox. Pick whichever works for you, for the most part the developer tools are the same. However
  there maybe certain aspects of the tools which maybe better in one browser over the other. From a learning standpoint, both browsers will work fine.
- Nodejs v14 / NPM v6
    - Have Nodejs/NPM installed in your dev machine - this is compulsory for react development. Please install NodeJS v14
    - Download it from - https://nodejs.org/en/download/
    - When you install NodeJS, NPM v6 is also installed automatically with the same installation
    - NodeJS and NPM are made available in pairs - let us stick that itself with whatever version that comes there
    - Make sure `node` and `npm` commands is availabe over your command line / terminal - setup the environment variable as needed
    - Run `node -v` and `npm -v` in your terminal to check if its working or not. You should see something like v14.15.1 and 6.14.8
- Git - Have git installed on your dev machine - this is optional. This is primarily so that you can clone/fork/download the code repo to your local and
  work on it at your convenience. Alternatively, you can simply download the repo via the download option on the Github UI.

### How to run the code
- Each folder is typically its own self-contained react application
- Navigate to whichever folder/lesson you want to run via your terminal/command line
- Start the react app using the create-react-app commands as explained during the class
- Open your browser and navigate to the localhost url and port to see the React application running
