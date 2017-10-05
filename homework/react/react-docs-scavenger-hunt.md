# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?
  Yes, in the first page of the docs under installation they instruct us to use NPM install to instal 'create-react-app'
  
2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?
  JSX is reccomended in the React Docs. If we really wanted to we could call everything as a 'React.createElement()' function
  
3. Does React re-render the entire component when one part of it changes?
  No, React only updates what is necessary. It compares the element and it's children to the previous one and only changes 
  what is necessary.

4. Should we ever change `props` (or parameters) inside of a component? 
  a component must never modify it's own props -- https://reactjs.org/docs/components-and-props.html
  This allows our components to be pure.

5. Are all components classes? 
    no, there are functional components as well. as long as it accepts a single 'prop' and returns a React element
    
6. List five "Synthetic Events" provided by React:
    onToggle, onScroll, onSelect, onChange, onFocus, onBlur -- https://reactjs.org/docs/events.html

7. Do we have to use ES6 syntax with React?
    You do not, but it is recommended. you would have to use the 'create-react-class' model without it --
    https://reactjs.org/docs/react-without-es6.html

8. Where can I go to check out React's built-in Accessibility features?
    -- https://reactjs.org/docs/accessibility.html

9. List five React Component Lifecycle Methods:
    mounting - set up, unmounting - clearing, didmount, willunmount, setState -- these are 'lifecycle hooks' 
    --https://reactjs.org/docs/state-and-lifecycle.html

10. Where would I go to check out React's built-in testing tools?
    --https://reactjs.org/docs/test-renderer.html

### Turning in:

* Post a link to this file on Github to Schoology.
