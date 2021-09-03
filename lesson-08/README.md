### State management with Reducers and Context API

We are going slowly build up on state management. In previous lessons, we have already seen, how we can share state 
between sibling components and such via props. This is called Prop drilling where we pass down a state or function down 
a chain of components from the root component to the nested child components. 

Now we are going to make use of Reducers to handle state management for one app
- This will be a simple movie management app
- The app shows a list of existing movies with Movie name, Movie Release year, Watched or not status
- The user can toggle whether they have watched the movie or not
- The user can also add a new movie to the list via a form at the top of the page

Using the above app you can see how the reducer helps be more expressive about how and all the state can be modified.
It forces us to think clearly about possible flows in our app and how the state can be modified. It shows us how we can have a global 
app state as well as a local app state.
