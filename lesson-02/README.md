## Getting Started with React
In this lesson we will set up another basic app and along the way try to pick up some essential React concepts that we 
should all be aware of.

### What is ReactJS?
- ReactJS is a library/framework (don't get overly hung up on the terminology of this!) - that primarily deals with the 
  presentation layer or view layer of an application.
- Although we say it deals with the view layer / application layer - It doesn't mean the other parts - the model & 
  business logic is not present there. What they basically mean is it primarily deals with sorting out the presentation
  layer well via JSX / Re-rendering mechanisms with the Virtual DOM
- Other aspects such as storing the data model, and the logic also happens - because lets be honest - without data and logic
  what can be actually presented or viewed for a UI?
- But beyond these things - React rarely has an opinion on how you should achieve things like state management or route management, 
  how you make http calls to your backend systems and so on. In all those aspects, we are mostly free to choose our own libraries 
  to make things work
  
### What's all the fuss about the virtual dom?
- In the regular DOM world
    - Based on the given HTML content, the DOM is constructed
    - Then based on how the content changes, the DOM is re-built - typically we would use the DOM APIs to make these kinds of changes
    - You have already explored some of these DOM APIs
- People keep saying React uses something called Virtual DOM and hence it's faster than actual DOM.
- Virtual DOM is nothing but an in-memory, light weight representation of the actual DOM
- We tell React via JSX how the UI element should look like
- React uses constructs a virtual DOM on the basis of the JSX code 
- This virtual DOM is then converted to the actual DOM by React
- Now say, there is a change in our UI because of some logic in  application
  - We tell React how the DOM should like again through our JSX code
  - A virtual DOM is constructed. The previous and current virtual DOMs are compared via a diffing algorithm.
  - Through this diffing algorithm, React figures out which parts of the page are going to be changed and selectively applies the change at that place only
- It is smart enough to take care of updates like when the parent element type changes, or when the elements are same, but the attributes of the element changes.
  ```html
  <div>
    <h2>Hello world</h2>
  </div>
  
  <!-- Becomes Like this for example -->
  <span>
    <h2>Hello world</h2>
  </span>
  
  <!-- It also checks for things like attributes alone changing -->
  
  <div class="classA">Hello World</div>
  
  <!-- becomes -->
  
  <div class="classB">Hello World</div>
  ```
- The key thing to know is this - all this stuff about virtual dom are all internal implementation details of React :)  which means
you dont have to really know about it to work with React - however, a superficial understanding is beneficial




