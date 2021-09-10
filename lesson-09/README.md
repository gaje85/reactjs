## Redux
- Redux is a state management library
- Its meant not just for React, but for other JS libs/frameworks like Angular, VueJS and so on
- However, it started first with React and then concepts from the library was taken and made applicable with bindings for other  frameworks


### Things to install for dependencies
- We will need to install the Redux Toolkit
```shell
npm install @reduxjs/toolkit
```
- We also need to install the Redux React binding dependency
```shell
npm install react-redux
```
- Since we are going to work on the same movie app from before, we make sure to install the uuid dependency 
```shell
npm install uuid
```

### Redux Terminology & Concepts
- Common, shared state
Typically in a React app, you would have a state based on which the view is rendered. If a user action happens, that modifies the state causing the
view to render again. This works great, until there multiple components which end up acting upon the state and things get tricky. We then 
"lift the state up" to solve this problem and that works to an extent obviously. With Redux, we basically move the state out of the components
and keep it outside within Redux and declare a bunch of actions which modify the state.
- Immutability
By default, all JS objects and types are mutable, meaning their value can be changed. However, redux requires us that when the state is to be updated
or modified, that it has to happen immutably meaning that a new state object has to be constructed and made use of
  
- Actions
Its a normal JS object which typically has a type field and a payload field. The type field is meant to tell what action it is and the payload is
basically input for the action. 

- Reducers
It is a function that receives the current state and an action object as input and generates a new state based on those inputs. 
Typically the reducer would see if it is going to act on the action type and  if so, it'd make a copy of the state, update the state with the values 
as needed and returns the new state

- Store
The current state of the app is kept within an object in Redux called a Store. Call it a different name for the app state

- Dispatcher
It is the function that fires an action (type + payload) - it is the only way to update the state. 
    
More details here - https://redux.js.org/tutorials/essentials/part-1-overview-concepts

Try getting familiar with reading the docs - tutorials will never be exhaustive

- createSlice and createReducer - these are 2 methods provided by the Redux toolkit
    - Within redux it is expected that when the state has to change for an action, we return a new state object with the required values
    - We should not mutate the same existing state object
    - However doing so can be tricky depending on the complexity of the state object
    - when we make use of createSlice/createReducer, we dont have to worry about this overhead
    - we can simply mutate the state like normal and return it
    - the createSlice/createReducer method uses a library called Immer which keep
