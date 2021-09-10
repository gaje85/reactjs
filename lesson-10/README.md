### Multi-page React Apps
Typically we would use React to create SPAs - Single Page Applications
However, obviously most web applications are not really **single** page applications. They tend to have 
multiple screens/pages and it'd make sense us for us to be able to make our React app behave like regular web applications
where the browser URL changes and we can make use of the browser navigation buttons as well.

To achieve this **multi-page** application, we will make use of a library called React router. 

We will need to install this library seperately via npm as it wont be available as part of the default create-react-app
```shell
npm install react-router-dom
```

Link to actual docs - https://reactrouter.com/web/guides/quick-start
