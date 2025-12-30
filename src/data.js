const commandss = [
  {
    command: "Introduction",
    text: `<p>Hii! I am [Your Name],
  
          From the past five years, I've been dedicated to develop user-friendly and visually appealing web applications as a front-end developer. My primary focus has been on utilizing React.js to build interactive and dynamic user interfaces.</p>
          
          <p>I have a strong understanding of HTML, CSS, and JavaScript, which are the building blocks of web development. With React.js, I've been able to create reusable components, manage state efficiently, and ensure high performance in web applications.</p>
          
          <p>Throughout my career, I've worked on various projects where I've collaborated closely with designers and backend developers to turn concepts into reality. I'm experienced in translating design mockups into responsive and perfect layouts, ensuring a seamless user experience across different devices and screen sizes.</p>
          
          
          <p> I'm always eager to stay updated with the latest trends and best practices in front-end development to deliver the best possible solutions.</p>
          
       `,
  },
  {
    command: "HTML5 Features",
    text: `
          <p>The HTML5 introduced semantic elements like header,footer,section and also provided the audio,video support, geolocation for user access and  localStorage for data persistence.</p>
        `,
  },
  {
    command: "What are semantic elements?",
    text: `
        <p>The semantic elements which provide better structure and meaning to web application,semantic elements like footer, header,section they clearly define the role of different parts of a webpage.</p>
        `,
  },
  {
    command: "What is ReactJS?",
    text: `
        <li>ReactJS is an open source javascript library, it is used for building fast and interactive user interfaces. </li>
 <li>We can create the complex UI by using small pieces of code called components </li>
<li>And React efficiently updated the UI using a virtual DOM, which compares changes with real DOM and updated only necessary parts.</li>
        `,
  },
  {
    command: "state definition",
    text: `
        <p>State is an object that allows components to keep track of dynamic data that changed over the time,and re-render component when the state changes, ensuring an interactive and dynamic UI.
</p>
      `,
  },

  {
    command: "what is useState hook?",
    text: `
        <p>The useState hook helps us to manage the data in functional components, usually the useState will give state variable and updater function, by using of updater function we can update the value of state.</p>
      `,
  },
  {
    command: "class and functional difference",
    text: `
   
         <li> Class components are defined using a class that extends from React.Component</li>
         <li>The functional components are javascript functions that returns jsx.</li>
         <hr />
<li>Class components have their own state and lifecycle methods.</li>
<li>In functional components we can manage state by using useState() hook,and bring the lifecycle methods by using useEffect() hook.</li>
      
      `,
  },
  {
    command: "features of react",
    text: `
        <li>React follows a component-based architecture, where UIs are broken into small, reusable components.</li>
 <li>React uses a virtual DOM to efficiently update the UI.</li>
 <li>And provide JSX it is an HTML-like code we can write within js files.</li>
 <li>React enables to create reusable UI components,it make's development easy and maintainable.</li>
      `,
  },
  {
    command: "Virtual DOM",
    text: `
          <p>Virtual DOM is a lightweight copy of the real DOM, instead of  directly manipulating the real DOM to update UI, the changes are first made to virtual DOM, React then compares the virtual DOM with previous version and update the real DOM.
</p>
        `,
  },
  {
    command: "How Does the Virtual DOM Work?",
    text: `
         <p>When an react component is first rendered, it create the virtual DOM, whenever the change in state or props, react re-renders the component and generate the new virtual DOM, then by using diffing algorithm react compare the new virtual DOM with previous one,and update those changes in real dom.</p>
        `,
  },
  {
    command: "Benefits of the Virtual DOM?",
    text: `
        <li>It helps to improve performace by minimizing the number of DOM manipulations.</li>
        <li>It efficiently just update the right part of UI, result in faster rendering and smooth user experience.</li>
        `,
  },

  {
    command: "ES 6 Features",
    text: `
        <p>ES6 features include arrow functions, let and const for variable declaration, promises for asynchronous operations,data structures like Map and Set,rest and spread operators.</p>
      `,
  },
  {
    command: "Difference between var, let and const",
    text: `

    <li>The var,let and const keywords are used to declare an variable in javascript.</li>
  <li>Variables declared with var can be redeclared and reassigned.And they have functional scope.</li>

  <li>The let and const have block scope, means they can access within the block in which they are declared.</li>
  <li>Variables declared with let can be reassigned but not redeclared within the same scope.</li>
  <li>Variables declared with const cannot be reassigned once they are initialized.</li>


        `,
  },
  {
    command: "IIFE",
    text: `
          <p><strong>IIFE (Immediately Invoked Function Expression):</strong></p>
          <ul>
            <li>An IIFE is a JavaScript function that is declared and invoked immediately after its definition.</li>
            <li>It is wrapped within parentheses to ensure that it is treated as an expression and not a declaration.</li>
            <li>IIFEs are commonly used to create a new scope for variables and functions, helping to prevent polluting the global namespace.</li>
            <li>They are also used to encapsulate code and prevent conflicts with other scripts or libraries.</li>
          </ul>
      
          <p><strong>Benefits of IIFE:</strong></p>
          <ol>
            <li><strong>Encapsulation:</strong> IIFEs create a new scope, allowing variables and functions defined within them to be encapsulated and not accessible from outside.</li>
            <li><strong>Avoiding Globals:</strong> By encapsulating code within an IIFE, you can prevent variables and functions from polluting the global namespace, reducing the risk of naming conflicts.</li>
            <li><strong>Self-Execution:</strong> IIFEs are immediately invoked, meaning they execute their code as soon as they are defined. This can be useful for executing initialization code or creating self-contained modules.</li>
          </ol>
      
         `,
  },
  {
    command: "Props",
    text: `
          <p><strong>Props (Properties):</strong></p>
          <p>Props are used to pass data from a parent component to a child component. Props can also be used to pass callback functions for handling events or updating the parent component's state.</p>
          `,
  },
  {
    command: "State and Props Difference",
    text: `
         
          <p><strong>State vs Props:</strong></p>
          <p><strong>State:</strong></p>
          <ul>
            <li>State is a built-in feature of React components that represents the current state of the component.</li>
            <li>State is mutable and can be changed over time,in response to user actions or other events.</li>
             <li>State changes trigger re-rendering of the component, updating the UI to reflect the new state.</li>
          </ul>
      
          <p><strong>Props:</strong></p>
          <ul>
            <li>Props are used to pass data from parent components to child components.</li>
            <li>Props are immutable and read-only, meaning they cannot be modified within the component that receives them.</li>
            <li>Changes to props trigger re-rendering of the component, allowing it to reflect the updated data.</li>
          </ul>`,
  },
  {
    command: "Hoisting",
    text: `
          <p>Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before execution.Example var declarations are hoisted and initialized with undefined, while let and const are hoisted but remain in the temporal dead zone (TDZ) until initialized.</p>
         `,
  },
  {
    command: "Temporal dead zone",
    text: `
       <p>Temporal dead zone means that if you try to access the variable of let and const before its declaration point in the code, you'll get an ReferenceError,The "dead zone" refers to this period in the code where the variable exists, but is in an inaccessible state due to being uninitialized. The variable declared with var also hosted but they are  initialized with undefined.</p>
         
        
          
        `,
  },
  {
    command: "map, filter,Reduce difference",
    text: `<p><strong>Map:</strong> map method is used to iterate over an array, performs an operation on each element, and returns a new array.</p>
<pre>
let arr = [1, 2, 3, 4, 5];  
let res = arr.map((each) => each * 2);
</pre>

      <p><strong>Filter:</strong> Filter method is used to filter elements based on a condition and returns a new array with only matching elements.</p>
      <pre>
let res = arr.filter((each) => each % 2 === 0);
      </pre>

      <p><strong>Reduce:</strong> Reduce method accumulates array values into a single result (e.g., sum, product, etc.).</p>
      <pre>
let res = arr.reduce((acc, curr) => acc + curr, 0);
      </pre>`,
  },
  {
    command: "Arrow vs Normal function",
    text: `
<p><strong>Arrow Functions:</strong></p>
          
            <li>Arrow functions have a shorter and more concise syntax compared to normal functions.</li>
            <li>Arrow functions do not have their own 'this' context, inherit the 'this' value from the surrounding lexical scope.</li>
             <li>Arrow functions do not have their own 'arguments' object.</li>
          
      
          <p><strong>Normal Functions:</strong></p>
       
            <li>Normal functions are defined using the 'function' keyword followed by a function name and a block of code.</li>
            <li>Normal functions have their own 'this' context, which is determined by how they are called.</li>
            <li>Normal functions have argument object,which contains the args passed to function</li>
         
        `,
  },
  {
    command: "Call, Apply, Bind",
    text: `

    <p><strong>call()</strong></p>
          
    <li>The call() method is a function method that allows you to call a function with a specified this value and arguments with comma separated.</li>
    
 

  <p><strong>apply()</strong></p>
  
    <li>The apply() method is similar to call(), but it accepts arguments as an array.</li>
  

  <p><strong>bind()</strong></p>
  
    <li>The bind() method creates a new function with a specified this value and initial arguments.</li>
    <li>bind() returns a new function without executing it immediately.</li>
        `,
  },
  {
    command: "Spread and rest operators",
    text: `
          <p><strong>Spread Operator :</strong></p>

           <li>Spread operator is used to destructre the iterables into individual elements, and also helps to concatenrate the arrays,copy arrays</li>
       
                    <p><strong>Rest Parameter:</strong></p>
          <li>Rest Parameter allows a function to accept the indefinite number of arguments as an array</li>
        `,
  },
  {
    command: "what is Redux?",
    text: `
          <h1>Redux</h1>
          <p>Redux is a state management library that helps manage complex states in an application, it centralizes the entire application state in a single store,and helps in managing the complex interactions.</p>
        
            <li><strong>Store</strong>: Store it holds entire state of application,we can create store by using the createStore method from redux,it allows components to access and update the state.</li>
            <li><strong>Actions</strong>: Actions are plain javascript objects,they have two properties, one is type field that tells what kind of action to perform, and other contain payload for that action.</li>
            <li><strong>Reducers</strong>: Reducers functions take current state and action as arguments and return a new state based on the action type.</li>
            <li><strong>Dispatch</strong>: Dispatch method is used to dispatch the actions, which triggers the reducer function to update the state.</li>
           
        `,
  },
  {
    command: "what are middlewares in redux?",
    text: `
        <h3>Middleware in Redux:-</h3>
        <p>Middlewares helps to interact with actions that have been dispatched to store before they reach to store's reducers, middlewares can be used for like logging,to perform asynchronous actions.</p>
        `,
  },
  {
    command: "Work flow of react-redux application?",
    text: `
        <h3>Work flow :-</h3>
        <p>when an user interacts with the UI or an event happens, the React component dispatches an action to the Redux store. The reducer takes this action, updates the state based on the action type, and returns the new state. The store then updates and informs all subscribed components about the change. The components that are connected to the store re-render with the new state.</p>
        `,
  },

  {
    command: "Event Loop",
    text: `
          <h3><strong>Event Loop:</strong></h3>
          <p>Event loops is an JavaScript runtime mechanism, it constantly checks for the pending tasks in callback queue, when the call stack is empty, it pushes the tasks in queue to stack and execute them, it allows JavaScript to handle non-blocking operations,like fetching data from server, without freezing the execution of other code.</p>
      
          `,
  },
  {
    command: "Event Bubbling and event capturing",
    text: `
          <p><strong>Event Bubbling:</strong></p>
          <li>Event bubbling is the default behavior in JavaScript, When an event occurs on an element, it first triggers the event handlers attached to the innermost element-target element, and then moves up to its parent elements in the DOM tree.</li>
          <p><strong>Event Capturing:</strong></p>
          <li>Event capturing is the opposite of event bubbling, the event starts at the top of the DOM tree and moves down to the target element.</li>
          <li>It is mainly used when you want to handle events before they reach the target element.</li>
      `,
  },
  {
    command:"Uses Cases of Event bubbling and event capturing",
    text :`
    <p><strong>Use Case Event Bubbling:</strong></p>
     <li>Simplifying event management by attaching event handlers to common parent elements instead of individual elements.</li>
    <p><strong>Use CaseEvent Capturing:</strong></p>
    <li>Implementing  event handling logic that requires capturing events before they bubble up.</li>
    
     `

  },
  {
    command: "Undefined and null difference",
    text: `
          <p><strong>undefined:</strong></p>
          <li>When a variable is declared but not initialized, or when a function does not explicitly return a value, JavaScript assigns undefined to that variable or function. undefined is an primitive data type.</li>
      
          <p><strong>null:</strong></p>
          <li>null is a special value in JavaScript that represents the intentional absence of any value. It is often used to explicitly indicate that a variable or object has no value.null is an object.</li>
      `,
  },
  {
    command: "Closure",
    text: `

      <li> A closure is a function that remembers and has access to variables from its outer scope, even after the outer function has finished executing.</li>
         `,
  },
  {
    command:"Benefits of closure",
    text:`
      <li>It helps to encapsulate the data , and provides data privacy by creating the private variables that cant be accessed from outside.</li>
    `
  },
  {
    command: "Syncronous and Asyncronous Javascript ",
    text: `
          <p><strong>Synchronous Code :-</strong></p>
          <li>Executes line by line in a sequential manner.</li>

          <li>Next line waits for the previous one to complete - it is blocking Execution.</li>

     
      
          <p><strong>Asynchronous Code :- </strong></p>

          <li>Next lines run without waiting for the previous one to complete.</li>
          <li>We can use callbacks, promises, or async/await to handle tasks without blocking execution.</li>
          `,
  },
  {
    command: "Display:None and Visibility:Hidden",
    text: `
          <p>Both are  used to hide elements from view, but they behave differently:</p>
      
          <p><strong>display: none:</strong></p>
   
            <li><code>display: none</code> removes the element from the document flow, making it completely invisible and taking up no space on the page.</li>
            <li>The element is not rendered at all, and its dimensions like width,height are zero.</li>
      
          <p><strong>visibility: hidden:</strong></p>

            <li><code>visibility: hidden</code> hides the element from view while still occupying space in the document flow.</li>
            <li>The element remains in the DOM and retains its dimensions width, height.</li>

        `,
  },
  {
    command: "Css Box Model",
    text: `
          <p><strong>CSS Box Model:</strong></p>
          <p>The CSS Box Model describes the layout and rendering of elements in a web page. It consists:
           Content, Padding it is an space between the content and border, and border,margin 
          </p>
          `,
  },
  {
    command: "CSS Selectors",
    text: `
          <p><strong>CSS Selectors:</strong></p>
          <p>CSS selectors are used to select and style HTML elements.</p>
      
          <p><strong>Types of CSS Selectors:</strong></p>
          <ul>
            <li><strong>Element Selector:</strong> Selects all elements of a specific type.
            </li>
            <li><strong>Class Selector:</strong> Selects elements with a specific class attribute.
            </li>
            <li><strong>ID Selector:</strong> Selects a single element with a specific ID attribute.
            </li>
            <li><strong>Attribute Selector:</strong> Selects elements with a specific attribute or attribute value.
            </li>
            <li><strong>Child Selector:</strong> Selects elements that are direct children of another element.
            </li>
          </ul>`,
  },
  {
    command: "CSS Positions",
    text: `
          <p><strong>CSS Positions:</strong></p>
          <p><strong>Static:</strong></p>
            <li>The default position value of an element is <code>static</code>.</li>
            <li>They are not affected by the <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties.</li>
        
      
          <p><strong>Relative:</strong></p>
       
            <li>Relative positioning moves an element relative to its normal position in the document flow.</li>
            <li>Relative elements can be shifted using the <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties.</li>
           
         
      
          <p><strong>Absolute:</strong></p>
          <ul>
            <li>Absolute positioning removes an element from the normal document flow and positions it relative to its closest positioned ancestor.</li>
          
          </ul>
      
          <p><strong>Fixed:</strong></p>
           <li>
           When we give an fixed value to position property, it fixed do not move when the page is scrolled
           </li>
         
      
          <p><strong>Sticky:</strong></p>
          <ul>
            <li>Sticky positioning is a both of relative and fixed positioning.</li>
            <li>It acts like relative positioning until the element reaches a specified scroll position, then it "sticks" in place like fixed positioning.</li>
           
          </ul>`,
  },
  {
    command: "Z-Index",
    text: `
          <p><strong>CSS z-index:</strong></p>
          <p>The <code>z-index</code> property in CSS controls the stacking order of positioned elements.</p>
          <p>When two elements overlap, the one with the higher <code>z-index</code> value will appear on top.</p>
          <p>The <code>z-index</code> property only affects elements that have a <code>position</code> value other than <code>static</code> (the default).</p>
        
          `,
  },
  {
    command: "CSS Units",
    text: `
          <p><strong>CSS Units and Differences:</strong></p>
          <p>CSS provides various units for specifying lengths and sizes. Each unit has its own characteristics and use cases:</p>
      
          <p><strong>Absolute Units:</strong></p>
          <ul>
            <li><strong>px (Pixels):</strong> Represents a single dot on a screen. Pixel values do not change with the size of the viewport.</li>
          </ul>
      
          <p><strong>Relative Units:</strong></p>
          <ul>
            <li><strong>% (Percentage):</strong> Represents a proportion of another value, typically relative to the parent element's size.</li>
            <li><strong>em:</strong> Equal to the computed font-size of the element. Can be used for defining lengths relative to the font size of the element itself.</li>
            <li><strong>rem:</strong> Equal to the computed font-size of the root element (<code>&lt;html&gt;</code>). Provides a way to define lengths relative to the root font size.</li>
            <li><strong>vw (Viewport Width):</strong> Equal to 1% of the width of the viewport. Useful for creating responsive layouts based on the viewport size.</li>
            <li><strong>vh (Viewport Height):</strong> Equal to 1% of the height of the viewport. Similar to <code>vw</code>, but based on viewport height instead of width.</li>
            <li><strong>vmin (Viewport Minimum):</strong> Equal to the smaller value between <code>vw</code> and <code>vh</code>. Useful for ensuring elements fit within the viewport regardless of orientation.</li>
            <li><strong>vmax (Viewport Maximum):</strong> Equal to the larger value between <code>vw</code> and <code>vh</code>. Useful for ensuring elements expand to fill the viewport in either dimension.</li>
          </ul>
      
          <p><strong>Use Cases:</strong></p>
          <ul>
            <li>Absolute units are suitable for defining fixed sizes or dimensions that should remain constant regardless of the context.</li>
            <li>Relative units are more flexible and responsive, adapting to changes in the layout or viewport size.</li>
            <li>Choosing the appropriate unit depends on the specific use case and design requirements.</li>
          </ul>`,
  },
  {
    command: "doctype",
    text: `
          <p><strong>HTML5 Doctype:</strong></p>
          <p>The HTML5 doctype declaration is used to specify the document type and version of HTML being used in a web page. It is placed at the beginning of an HTML document.</p>
          <p>It ensure that the browser renders the page in standards mode, providing a more predictable and consistent rendering behavior.</p>
        `,
  },
  {
    command: "Psuedo Classes and Psuedo elements",
    text: `<p><strong>Pseudo-classes and Pseudo-elements:</strong></p>
          <p>In CSS, pseudo-classes and pseudo-elements are used to style elements based on their state or position in the document:</p>
      
          <p><strong>Pseudo-classes:</strong></p>
          <ul>
            <li>Pseudo-classes are keywords that specify a special state of the selected element(s).</li>
            <li>They are preceded by a colon (<code>:</code>) and are used to style elements based on user interaction or document structure.</li>
            <li>Common pseudo-classes include <code>:hover</code>, <code>:active</code>, <code>:focus</code>, <code>:nth-child()</code>, etc.</li>
            <li>Example: <code>a:hover { color: red; }</code></li>
          </ul>
      
          <p><strong>Pseudo-elements:</strong></p>
          <ul>
            <li>Pseudo-elements create virtual elements in the document tree that can be styled separately from the actual content.</li>
            <li>They are preceded by two colons (<code>::</code>) and are used to style specific parts of an element, such as the first line, first letter, or before/after content.</li>
            <li>Common pseudo-elements include <code>::first-line</code>, <code>::first-letter</code>, <code>::before</code>, <code>::after</code>, etc.</li>
            <li>Example: <code>p::first-line { font-weight: bold; }</code></li>
          </ul>
      
          <p>Pseudo-classes and pseudo-elements provide powerful tools for styling web documents and creating visually appealing user interfaces. Understanding their usage and applying them appropriately can enhance the design and user experience of web pages.</p>
        `,
  },
  {
    command: "Context Api vs Redux",
    text: `
          <p><strong>Context API vs Redux:</strong></p>
          <p>Both Context API and redux are used for state management in react applications.</p>
      
          <p><strong>Context API:</strong></p>
          <ul>
            <li>The Context API is a built-in feature of React that provides a way to share data between components without having to pass props manually through every level of the component tree.</li>
            <li>It allows you to create a global state that can be accessed and updated by any component within the same context.</li>
            <li>It is simpler and lighter-weight,it is suitable for smaller applications with less complex state management needs.</li>
          </ul>
      
          <p><strong>Redux:</strong></p>
          <li>Redux is a state management library that helps manage complex states in an application, it centralizes the entire application state in a single store,and helps in managing the complex interactions.</li>
<li>It is more suitable for larger applications with complex state interactions.</li>

          `,
  },
  {
    command: "Pure Component",
    text: `
          <p><strong>Pure Component in React:</strong></p>
          <li>A Pure Component only re-renders if its props or state change, this helps for optimizing performance by avoiding unnecessary re-renders.
</li> 
<li>
In class components, React provides React.PureComponent, in functional components we can use React.memo().</li>
          `,
  },
  {
    command:"When to use Pure Component",
    text : `
     
          <ul>
            <li>They are particularly useful in scenarios where a component frequently re-renders with the same props and state, and you want to avoid unnecessary re-renders.</li>
          </ul>
    `

  },
  {
    command: "Controlled and UnControlled Components",
    text: `
          <p><strong>Controlled Components:</strong></p>
          <li>In controlled components, form data is handled by React component state.</li>
          <li>The value of the form elements such as input,select is controlled by the state, and any changes to the input are handled by React event handlers.</li>
          <p><strong>Uncontrolled Components:</strong></p>
          <li>In uncontrolled components, form data is handled by the DOM itself.</li>
          <li>The value of the form elements is not controlled by state, but rather by the DOM, using the ref attribute to access the DOM element directly.</li>

         `,
  },
  {
    command: "Hooks in react",
    text: `
    
          <p><strong>React Hooks:</strong></p>
             
          <p><strong>useState:</strong></p>
          <p>The useState hook is used to manage the data that dynamically changes, and useState returns variable that have value, and updater function to update it.</p>
          
<p><strong>useEffect:</strong></p>
          <p>The useEffect hook allows functional components to perform side effects means fetching data,async operations, And it helps us to bring lifecycle methods to functional components.</p>
      
          <p><strong>useContext:</strong></p>
          <p>The useContext hook is used in functional components to use data that created and managed in context</p>
      
          <p><strong>useReducer:</strong></p>
          <p>The useReducer hook is an alternative to useState for managing complex state logic. It is similar to the reducer function used in Redux.</p>
      
          <p><strong>useCallback:</strong></p>
          <p>The useCallback hook returns a memoized callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance.</p>
      
          <p><strong>useMemo:</strong></p>
          <p>The useMemo hook returns a memoized value that only recalculates when one of the dependencies has changed. It is useful for optimizing performance.</p>
      
          <p><strong>useRef:</strong></p>
          <p>useRef is used to access DOM elements and store values between renders without causing re-renders.</p>
      
      
         `,
  },
  {
    command: "Life Cycle Methods",
    text: `
          <p><strong>Lifecycle Methods in React:</strong></p>
          <p>React components have lifecycle methods, these methods can be used to perform actions such as initializing state, fetching data, and cleaning up resources.
</p>
   <p>There are three phases :- </p>
      
          <p><strong>Mounting Phase:</strong></p>
        <li> constructor(): The constructor calls before a component is mounted, it is used for initializing state and binding event handlers.</li>
<li>render(): The render method is called to render the component's UI. It returns JSX representing the component's UI.</li>
<li>componentDidMount(): This method is called after the component has been mounted to the DOM. It is used for performing actions such as fetching data from a server.</li>

      
          <p><strong>Updating Phase:</strong></p>
         <li> shouldComponentUpdate(): This method is called before rendering when new props or state are received. It determines whether the component should re-render or not based on the changes in props or state.</li>
<li>render(): The render method is called again to re-render the component's UI.</li>
<li>componentDidUpdate(): This method is called after the component has been updated in the DOM. It is used for performing actions such as updating the DOM in response to prop or state changes.</li>
      
          <p><strong>Unmounting Phase:</strong></p>
            <li><code>componentWillUnmount()</code>: This method is called immediately before a component is unmounted from the DOM. It is used for cleaning up resources such as event listeners or timers.</li>
          `,
  },
  {
    command: "UseMemo vs UseEffect",
    text: `
          <p><strong>useMemo vs useEffect:</strong></p>
          
           <p><strong>useEffect:</strong></p>

           <li>useEffect is a hook used for managing side effects in functional components.</li>
<li>useEffect takes a function and an optional array of dependencies. The effect is re-run if any of the dependencies change, it allows performing tasks such as data fetching,updating the DOM.</li>
      

<p><strong>useMemo:</strong></p>
<li>useMemo hook is used for memoizing expensive caluclations, it takes a function and array of dependencies as arguments and return the memoized value </li>
<li>Whenever the change in one of dependencies, it again run the logic in that function </li>
<li>It optimize rendering performance by memozing the result of computation and avoiding re-execution of computation on every render. 
</li>
      
         
          
        `,
  },
  {
    command: "UseMemo vs UseCallback",
    text: `
          <p><strong>useMemo vs useCallback:</strong></p>
          <p>Both useMemo and useCallback are hooks used to optimize performance by memoizing values or functions, respectively:-</p>
      
          
 <p><strong>useMemo:</strong></p>
          <li>useMemo hook is used for memoizing expensive caluclations, it takes a function and array of dependencies as arguments and return the memoized value </li>
          <li>Whenever the change in one of dependencies, it again run the logic in that function </li>
<li>It optimize rendering performance by memozing the result of computation and avoiding re-execution of computation on every render. 
          </li>
      
          <p><strong>useCallback:</strong></p>
         <li> useCallback is a hook used to memoize functions and prevent unnecessary re-creations of function instances.</li>
<li>It takes a function and an array of dependencies as arguments, and it memoizes the function instance based on the dependencies.</li>
<li>The memoized function instance is re-created only when one of the dependencies has changed.</li>
        `,
  },
  {
    command:"UseMemo vs React.Memo",
    text : `
     <p><strong>useMemo vs React.memo:</strong></p>
     <p>Both useMemo,React.memo is used to improve the performace of application:-</p>

     
 <p><strong>useMemo:</strong></p>
          <li>useMemo hook is used for memoizing expensive caluclations, it takes a function and array of dependencies as arguments and return the memoized value </li>
          <li>Whenever the change in one of dependencies, it again run the logic in that function </li>
<li>It optimize rendering performance by memozing the result of computation and avoiding re-execution of computation on every render. 
          </li>

           <p><strong>React.memo:</strong></p>
          <ul>
            <li><code>React.memo</code> is a higher-order component in React that memoizes the rendered output of a component.</li>
            <li>It improves the performance by preventing unnecessary re-renders when same props are passed to component.</li>
            
          </ul>
                    

    `
  },

  {
    command: "UseEffect life cycle events",
    text: `
          <p><strong>useEffect with Lifecycle Events in React:</strong></p>
          <p>The useEffect hook allows functional components to perform side effects means fetching data,async operations, And it helps us to bring lifecycle methods to functional components.</p>
           <p><strong>The lifycycle Events by useEffect hook :-</strong></p>
          <p><strong>ComponentDidMount:</strong> useEffect with an empty dependency array. It runs once after the first render.</p>
          
          <p><strong>ComponentDidUpdate:</strong> useEffect with a dependency array. It runs after every render.</p>
          
      
          <p><strong>ComponentWillUnmount:</strong> useEffect with a cleanup function. It runs before the component unmounts.</p>
         
          
        `,
  },
  {
    command: "UseEffect without dependency",
    text: `
          <p><strong>useEffect without Dependency Array:</strong></p>
          
      
          <li>useEffect without a dependency array, it going to be execute for every render, including the initial render and update to state or props it going to execute.</li>
          <li>These can lead to performace issue if the effect performs expensive operations, in order to avoid these we need to use dependencies to control the execution of useEffect</li>
        `,
  },
  {
    command: "Optimization in React",
    text: `
          <p><strong>Optimization Techniques in React:</strong></p>
           <p>we can optimize the performance of react application by using techniques like :- </p>
      
          <p><strong>1. Memoization:</strong></p>
          <li>By using useMemo() hook ,it cache the results of expensive function calls and avoid recalculating the expensive values on every render.</li>
          <li> React.memo() higher-order component can be used to memoize functional components,it improves the performance by preventing unnecessary re-renders when same props are passed to component.</li>
      
          <p><strong>2. Code Splitting:</strong></p>
        
            <li>It is the process of splitting a JavaScript bundle into smaller chunks that can be loaded on demand.</li>
            <li>React.lazy() and Suspense allow components to be loaded asynchronously, reducing the initial bundle size and improving load times.</li>

          <p><strong>3. Virtualized Lists:</strong></p>
          
            <li>Virtualized lists are used to render large lists efficiently by only rendering the items that are currently visible in the viewport.</li>
            <li>we can use libraries like  react-virtualized and react-window provide components for efficiently rendering large datasets.</li>
        
      
          `,
  },
  {
    command: "UseSelector and UseDispatch",
    text: `
          <p><strong>useSelector and useDispatch:</strong></p>
          <p>The useSelector and useDispatch hooks are provided by react-redux, used to interact with the Redux store:</p>
      
          <p><strong>useSelector:</strong></p>
          <li>useSelector hook it allows components to extract data from the store.</li>
<li>It accepts a selector function as an argument, where we can specify which part of the state should be extract from store.</li>
<li>When the store state changes, the component using useSelector will re-render to reflect the updated data.</li>

      
          <p><strong>useDispatch:</strong></p>

          <li>useDispatch hook it allows components to dispatch actions to update the store.</li>
<li>where actions are objects as an argument to dispatch function, which includes type and payload.</li>
         `,
  },
  {
    command: "Higher Order Components",
    text: `
          <p><strong>Higher Order Components (HOCs) in React:</strong></p>
          <p>Higher-Order Components are functions that take component as an argument and return an enhanced version of that component by wrapping it with additional functionality.</p>
      
          `,
  },
  {
    command:"When to use Higher Order Components",
    text :`
       <li>Uses in situation like reusing the logic across multiple components - e.g authentication.</li>
 <li>Enhancing component functionality without modifying the original component.</li>
    `
  },
  {
    command: "Routing",
    text: `
          <p><strong>Routing in React:</strong></p>

          <li> Routing is the process of navigating between different pages in a web application.</li>
          <li> By using React Router library we can handling the routing in react, by enabling dynamic page rendering without full-page reloads.</li>
          `,
  },
  {
    command:"Features of React Router",
    text:`
    <p><strong>React Router Key Features</strong></p>
  <li> <strong> Client-side Routing</strong>: No full-page reload, only components update.</li>
   <li> <strong> Dynamic Routing</strong>: Define routes dynamically using JavaScript.</li>
   <li> <strong> Route Parameters & Query Strings</strong>: Pass data through URLs.</li>
   <li> <strong> Navigation</strong>: useNavigate, Link, and NavLink for seamless transitions.</li>
    `
  },
  {
    command: "Synthetic Events",
    text: `
          <p><strong>Synthetic Events in React:</strong></p>
          <p>Synthetic Events are wrapper events around native browser events. They make event handling consistent across all browsers and improve performance by reusing event objects </p>
          `,
  },
  {
    command: "Key Prop in react",
    text: `
          <p><strong>Key Prop in React:</strong></p>

          <li>The key prop is a special attribute that is used to uniquely identify elements in a React component's list.</li>
        <li>The key prop helps React identify which items have changed, are added, or are removed from a list, it helps efficient updates to the UI.</li>
        <li>Avoid using indexes as keys if the order of items may change.</li>


          `,
  },
  {
    command: "React routing different from conventional routing",
    text: `
          <p><strong>React Routing vs Conventional Routing:</strong></p>
          <p>In React, routing refers to the navigation between different components or pages within a single-page application (SPA). While React does not have built-in routing functionality, it provides libraries like React Router for handling routing.</p>
      
          <p><strong>React Routing:</strong></p>
          <ul>
            <li>React routing involves managing the UI state of a single-page application to display different components based on the URL or user navigation.</li>
            <li>It uses a declarative approach, where routes are defined as components and rendered based on the current URL.</li>
            <li>React Router is the most commonly used library for implementing routing in React applications. It provides components like <code>BrowserRouter</code>, <code>Route</code>, and <code>Link</code> for defining and navigating between routes.</li>
            <li>React routing allows for a seamless user experience by updating the URL and rendering components dynamically without full-page reloads.</li>
          </ul>
      
          <p><strong>Conventional Routing:</strong></p>
          <ul>
            <li>In conventional web development, routing typically involves server-side routing, where different URLs correspond to different server-side routes that serve HTML pages.</li>
            <li>Each URL typically corresponds to a separate HTML page or endpoint on the server, and navigation between pages involves full-page reloads.</li>
            <li>Conventional routing requires server-side logic to handle routing and serve the appropriate content based on the requested URL.</li>
            <li>It is less common in modern web development, especially for SPAs, where React routing or similar client-side routing libraries are preferred for their improved performance and user experience.</li>
          </ul>`,
  },
  {
    command: "Typescript with React",
    text: `<p><strong>TypeScript:</strong></p>
          <p>TypeScript is a superset of JavaScript that adds static type-checking and other features to the language.</p>
          
          <p><strong>Features of TypeScript:</strong></p>
          <ul>
            <li><strong>Static Typing:</strong> TypeScript allows developers to define types for variables, function parameters, return values, and more. This helps catch type-related errors at compile time.</li>
            <li><strong>Interfaces:</strong> TypeScript introduces the concept of interfaces, which define the structure of objects. Interfaces can be used to enforce consistency and provide documentation.</li>
            <li><strong>Enums:</strong> TypeScript supports enums, which allow developers to define a set of named constants. Enums improve code readability and maintainability.</li>
            <li><strong>Generics:</strong> TypeScript provides support for generics, allowing developers to write reusable code that works with a variety of data types.</li>
            <li><strong>Access Modifiers:</strong> TypeScript introduces access modifiers such as <code>public</code>, <code>private</code>, and <code>protected</code>, which control the visibility of class members.</li>
            <li><strong>Nullability:</strong> TypeScript has built-in support for null and undefined types, helping to avoid common runtime errors.</li>
          </ul>
          
          <p><strong>Usage of TypeScript in React:</strong></p>
          <ul>
            <li><strong>Creating React Components:</strong> TypeScript can be used to define the props and state interfaces for React components, providing type safety and documentation.</li>
            <li><strong>Handling Events:</strong> TypeScript helps ensure that event handlers receive the correct event objects and prevent common errors.</li>
            <li><strong>Managing State:</strong> TypeScript allows developers to define types for state variables, ensuring consistency and catching potential errors.</li>
            <li><strong>Working with APIs:</strong> TypeScript provides type definitions for many popular libraries and APIs, making it easier to work with external data sources.</li>
            <li><strong>Enforcing Contracts:</strong> TypeScript's static type-checking helps enforce contracts between components, improving code reliability and maintainability.</li>
          </ul>`,
  },
  {
    command: "Axios vs Fetch",
    text: `
          <p><strong>Axios vs Fetch:</strong></p>
          <p>Axios and Fetch are both JavaScript libraries used for making HTTP requests in web applications, but they have some differences:</p>
      
          <p><strong>Axios:</strong></p>
         
<li>Axios is a popular Promise-based HTTP client for making HTTP requests.</li>
<li>It provides a simple and easy-to-use API for making HTTP requests, with support for features like request and response interceptors, automatic JSON data parsing, and error handling.</li>
<li>It has built-in support for handling cross-origin requests and sending requests with different HTTP methods.</li>
<li>Axios provides a consistent interface for making requests across different browsers and environments.</li>

      
          <p><strong>Fetch:</strong></p>
        <li> Fetch is a built-in web API in browsers for making HTTP requests.</li>
        <li> Fetch uses Promises for handling asynchronous operations, but it lacks some features compared to Axios, such as built-in support for request cancellation, timeout handling, and progress events.</li>`,
  },
  {
    command: "Axios Interceptors",
    text: `
          <p><strong>Axios Interceptors:</strong></p>
          <p>Axios interceptors allow you to intercept requests or responses before they are handled by the 'axios' instance.</p>
      
          <p><strong>Request Interceptors:</strong></p>
          <ul>
            <li>Request interceptors are functions that are executed before sending a request to the server.</li>
            <li>They can be used to modify the request config, add headers, or perform any other preprocessing.</li>
            <li>Request interceptors can be added using the <code>axios.interceptors.request.use()</code> method.</li>
          </ul>
      
          <p><strong>Response Interceptors:</strong></p>
          <ul>
            <li>Response interceptors are functions that are executed after receiving a response from the server.</li>
            <li>They can be used to modify the response data, handle errors, or perform any other postprocessing.</li>
            <li>Response interceptors can be added using the <code>axios.interceptors.response.use()</code> method.</li>
          </ul>
        `,
  },{
    command:"Use Cases of Axios Interceptors",
    text :`
     <p><strong>Use Cases:</strong></p>
          <ul>
            <li><strong>Error Handling:</strong> Intercepting error responses and performing error handling logic.</li>
            <li><strong>Authentication:</strong> Adding authentication headers to requests before they are sent.</li>
            <li><strong>Logging:</strong> Logging request and response data for debugging purposes.</li>
          </ul>
    `
  },
  {
    command: "Redux Toolkit",
    text: ` <p><strong>Redux Toolkit:</strong></p>
          <p>By using redux-toolkit we can write the redux logic in much simpler way:-</p>
      
          <p><strong>Features of Redux Toolkit:</strong></p>
          <ul>
            <li><strong>Slices:</strong> which are predefined collections of reducer logic and actions for a specific slice of the Redux store.</li>
            <li><strong>createSlice:</strong> The createSlice function is used to define a slice of the Redux store. It automatically generates action creators and action types based on the reducer logic provided, reducing boilerplate code.</li>
            <li><strong>configureStore:</strong> It provides the <code>configureStore</code> function, which simplifies the process of creating a Redux store by automatically configuring middleware, including Redux DevTools Extension support.</li>
            <li><strong>Thunks:</strong>It includes built-in support for thunks, which are asynchronous action creators. Thunks provide a convenient way to handle asynchronous logic, such as making API requests, and dispatching multiple actions in response to asynchronous events.</li>
          </ul>
      `,
  },
  {
    command: "Promise",
    text: ` <p><strong>Promises in JavaScript:</strong></p>
          <p>A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous code more easily and avoid callback hell.</p>
          <p>Promises have three states :-</p>
          <ul>
            <li><strong>Pending:</strong> It is initial state, neither fulfilled nor rejected.</li>
            <li><strong>Fulfilled:</strong>Means operation completed successfully.</li>
            <li><strong>Rejected:</strong> when an operation failed.</li>
          </ul>`,
  },{
    command:"Promise Methods",
    text : `
          
          <p><strong>Promise Methods:</strong></p>
          <ul>
            <li><strong>Promise.resolve():</strong>It creates a resolved promise with the specified value.</li>
            <li><strong>Promise.reject():</strong>It creates a rejected promise with the specified reason.</li>
            <li><strong>Promise.all():</strong> It takes an array of promises and returns a single promise that resolves when all the input promises resolve,if any of the promises reject, the entire Promise.all() rejects immediately with that reason.</li>
            <li><strong>Promise.race():</strong>It takes an array of promises and returns any one of first resolved or rejected promise.</li>
            <li><strong>Promise.allSettled():</strong>It takes an array of promises, and wait for all promises to settle either they reject or resolved it wait for all promises to settled. </li>
            <li><strong>Promise.any():</strong>It takes an array of promises,it return the first resolved promises ,ignore the reject promises </li>
          </ul>
    `
  },
  {
    command: "Async/Await",
    text: `  <p><strong>Async/Await in JavaScript:</strong></p>
          <p>Async/await is a modern approach to handle the async operations:-</p>
          <ul>
            <li>An async function is a function that operates asynchronously via the event loop.</li>
            <li>Async functions always return a Promise, which resolves with the value returned by the async function or rejects with an error.</li>
            <li>Inside an async function, you can use the <code>await</code> keyword to pause the execution of the function until a promise is settled,resolved or rejected.</li>
<li>It can only be used inside an async function.</li>
          </ul>    
     `,
  },
  {
    command: "Promises vs Async/Await",
    text: `<p><strong>Async/Await vs Promises:</strong></p>
          <p>Async/Await and Promises are both used in JavaScript to handle asynchronous operations:</p>
      
          <p><strong>Promises:</strong></p>
          <ul>
            <li>Promises are objects representing the eventual completion or failure of an asynchronous operation.</li>
            <li>Promises provide a cleaner and more flexible way to handle asynchronous code compared to callback functions.</li>
            <li>Promises have built-in methods (<code>then</code>, <code>catch</code>, <code>finally</code>) for handling success, failure, and completion of asynchronous tasks.</li>
           <li>Handling chaining of  multiple Promises can  become complex, to make it simpler we can use async and await.</li>

          </ul>
      
          <p><strong>Async/Await:</strong></p>
          <ul>
            <li>Async/Await is a modern approach for writing asynchronous code in a synchronous style.</li>
            <li>Async functions return a Promise, and the <code>await</code> keyword is used to pause the execution of the function until the Promise is settled,resolved or rejected.</li>
            <li>Async/Await simplifies error handling and readability of asynchronous code compared to Promises and callback functions.</li>
          </ul>`,
  },
  {
    command: "Fragment vs Div",
    text: `<p><strong>React Fragments vs. <code>&lt;div&gt;</code>:</strong></p>
          <ul>
            <li><strong>React Fragments:</strong>
              <ul>
                <li>React Fragments allow grouping elements without adding an extra node to the DOM.</li>
                <li>They are useful when you need to return multiple elements from a component, but you don't want to add extra divs to the DOM.</li>
              </ul>
            </li>
            <li><strong>&lt;div&gt;:</strong>
              <ul>
                <li>Using <code>&lt;div&gt;</code> is the traditional way to group elements in React.</li>
                <li>Each <code>&lt;div&gt;</code> adds an extra node to the DOM, which can affect CSS and JavaScript interactions.</li>
              </ul>
            </li>
          </ul>`,
  },
  {
    command: "React.memo",
    text: ` 
     <p><strong>React.memo:</strong></p>
          <ul>
            <li><code>React.memo</code> is a higher-order component in React that memoizes the rendered output of a component.</li>
            <li>It improves the performance by preventing unnecessary re-renders when same props are passed to component.</li>
            
          </ul>
                    

          `,
  },
  {
    command: "Optimization of heavy data in react",
    text: `<p><strong>Optimization of Rendering Large Amounts of Data in React:</strong></p>
          <ul>
            <li><strong>Virtualization:</strong> Instead of rendering all items at once, virtualization renders only the visible items in the viewport, improving performance. Libraries like react-virtualized and react-window help efficiently handle large datasets.
</li>
            <li><strong>Pagination:</strong> Implement pagination to fetch and display data in smaller chunks, reducing the initial load time and memory consumption.</li>
            <li><strong>Memoization:</strong>Use React.memo and useMemo to cache expensive calculations or transformed data, preventing unnecessary re-renders.</li>
            <li><strong>Code Splitting:</strong>By splitting a JavaScript bundle into smaller chunks that can be loaded on demand.React.lazy() and Suspense allow components to be loaded asynchronously, reducing the initial bundle size and improving load times.</li>
          </ul>`,
  },
  {
    command: "SSR VS CSR server side vs client side rendering",
    text: ` 
 <p><strong>SSR (Server-Side Rendering):</strong></p>
          <ul>
            <li>In SSR, the initial HTML content of the web page is generated on the server and sent to the client.</li>
            <li>This means that the server sends a fully rendered HTML page to the browser, including the content of the React components.</li>
            <li>SSR improves performance by reducing the time to first paint and it improve SEO, as search engines can crawl the HTML content more easily.</li>
            <li>SSR can increase server load and latency, especially for complex web applications.</li>
          </ul>
      
          <p><strong>CSR (Client-Side Rendering):</strong></p>
          <ul>
            <li>In CSR,the source code of the React application is then downloaded and executed in the browser.</li>
            <li>CSR provides a better user experience for interactive web applications, as it allows for faster navigation and dynamic content updates without full page reloads.</li>
            <li>But CSR can lead to slower initial load times and issues with SEO, as search engines may have difficulty crawling dynamically generated content.</li>
          </ul>`,
  },
  {
    command: "Lazy Loading and code Splitting",
    text: `<p><strong>Lazy Loading and Code Splitting in React:</strong></p>
          <ul>
            <li>Lazy loading and code splitting are techniques used in React to improve performance by reducing the initial bundle size of an application.</li>
            <li><strong>Lazy Loading:</strong> Lazy loading involves delaying the loading of certain parts of the application until they are needed. This can help reduce the initial load time of the application by only loading the necessary code when it is required.</li>
            <li><strong>Code Splitting:</strong> Code splitting involves breaking the application's bundle into smaller chunks, and only loading the required chunks when they are needed. This can help reduce the initial bundle size and improve loading times, especially for larger applications.</li>
            <li>The <code>React.lazy</code> function allows you to dynamically import a component only when it is needed, while the <code>import()</code> syntax allows you to dynamically import other modules and assets.</li>
          </ul>`,
  },
  {
    command: "Primitive vs Referential",
    text: `  <p><strong>Primitive Data Types:</strong></p>
          <ul>
            <li>Primitive data types are immutable and stored directly in memory.</li>
            <li>Primitive data types are like : <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, and <code>symbol</code>.</li>
            <li>When we perform operations on primitive data types directly manipulate the value itself.</li>
          </ul>
      
          <p><strong>Referential Data Types:</strong></p>
          <ul>
            <li>Referential data types are mutable and stored by reference in memory.</li>
            <li>Object is an referntial data type, array is also an object</li>
            <li>When we perform operations on referential data types it changes the original data.</li>
        </ul>`,
  },
  {
    command: "SCSS",
    text: ` <p><strong>SCSS (Sassy CSS):</strong></p>
          <p>SCSS is a superset of CSS that adds powerful features like variables, nesting, mixins, and inheritance. It provides a more structured and efficient way to write CSS code, making stylesheets easier to maintain and manage.</p>
      `,
  },
  {
    command:"Features of SCSS",
    text :` 
      <p><strong>Features of SCSS:</strong></p>
          <ol>
            <li><strong>Variables:</strong> Variables in SCSS help store colors, font sizes, margins, for reuse throughout the stylesheet.</li>
            <li><strong>Nesting:</strong> SCSS allows you to nest CSS selectors within one another,this helps to reduce repetition in code.</li>
            <li><strong>Mixins:</strong> Mixins help create reusable styles that can be applied to multiple elements.</li>
            <li><strong>Inheritance:</strong> SCSS supports inheritance, allowing you to extend styles from one selector to another.</li>
          </ol>
    `
  },
  {
    command: "Ways to add styling in react",
    text: `  <p><strong>All Possible Ways to Apply Styling in React:</strong></p>
          <ol>
            <li><strong>Inline Styles:</strong> Inline styles allow you to apply CSS directly to elements by using <code>style</code> attribute.</li>
            <li><strong>CSS Modules:</strong> CSS Modules allow you to write CSS styles in separate files and import them into your React components.</li>
            <li><strong>Styled Components:</strong> Styled Components is a library that allows you to write CSS directly within your JavaScript files using tagged template literals.</li>
          </ol>`,
  },
  {
    command: "Web Storages",
    text: `
          <p><strong>Web Storage:</strong></p>
<p>We can store data locally on the client machine using <code>localStorage</code>, <code>sessionStorage</code>, and <code>cookies</code>.</p>
<ul>
  <li><strong>localStorage:</strong> Stores data with no expiration date. Data will persist even after the browser is closed and reopened.</li>
  <li><strong>sessionStorage:</strong> Stores data for one session only. Data is cleared when the browser tab or window is closed.</li>
  <li><strong>cookies:</strong> Small pieces of data stored in the browser. Cookies can have an expiration date.</li>
</ul>
`,
  },
  {
    command: "Accessability in HTML5",
    text: `<p><strong>Accessibility in HTML5:</strong></p>
          <p>Accessibility refers to the design of products, devices, services, or environments for people with disabilities. In the context of web development, accessibility aims to ensure that websites and web applications are usable by all people, including those with disabilities.</p>
          <p>HTML5 introduced several features to improve accessibility and make the web more inclusive:</p>
          <ul>
            <li><strong>Semantic Elements:</strong> HTML5 introduced semantic elements such as &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;, etc., which provide a better structure for web content and make it easier for screen readers and other assistive technologies to interpret the page.</li>
            <li><strong>Accessibility Attributes:</strong> HTML5 added new attributes like <code>role</code>, <code>aria-*</code> attributes (e.g., <code>aria-label</code>, <code>aria-labelledby</code>, <code>aria-describedby</code>), and <code>tabindex</code> to enhance the accessibility of web elements.</li>
            <li><strong>Form Improvements:</strong> HTML5 introduced new input types (e.g., <code>email</code>, <code>tel</code>, <code>url</code>) and attributes (e.g., <code>required</code>, <code>placeholder</code>, <code>autocomplete</code>) that improve the accessibility and usability of web forms.</li>
            <li><strong>Media Elements:</strong> HTML5 media elements like &lt;audio&gt; and &lt;video&gt; support built-in accessibility features such as captions, subtitles, audio descriptions, and transcript support, making multimedia content more accessible.</li>
            <li><strong>Canvas Accessibility:</strong> HTML5 introduced accessibility features for &lt;canvas&gt; elements, allowing developers to provide alternative text descriptions and keyboard navigation for canvas-based content.</li>
            <li><strong>SVG Accessibility:</strong> HTML5 improved accessibility support for Scalable Vector Graphics (SVG), enabling developers to create accessible charts, diagrams, and graphics using SVG.</li>
          </ul>`,
  },
  {
    command: "Webpack",
    text: ` 
       <p>Webpack is a module bundler for JavaScript applications. It takes all the different files JavaScript, CSS, images, processes them, and bundles them into a single optimized file for efficient loading in the browser.</p>
          `,
  },{
    command:"Can you explain why Webpack is needed?",
    text:`
    <p>In applications have multiple files and dependencies. If the browser had to fetch each file separately, it would increase load times and reduce performance.</p>
    `
  },
  {
    command: "configure webpack",
    text: `<p><strong>Configuring Webpack in a React Application:</strong></p>
          <ol>
            <li><strong>Install webpack and webpack-cli:</strong> Use npm or yarn to install webpack and webpack-cli as devDependencies.</li>
            <li><strong>Create a webpack Configuration File:</strong> Create a webpack.config.js file in the root directory of your project and define the webpack configuration.</li>
            <li><strong>Configure Entry and Output:</strong> Specify the entry point and output configuration for bundled files.</li>
            <li><strong>Configure Loaders:</strong> Use loaders to preprocess files before bundling, such as babel-loader for JavaScript files and style-loader/css-loader for CSS files.</li>
            <li><strong>Configure Resolve Extensions:</strong> Ensure webpack can resolve import statements without file extensions.</li>
            <li><strong>Create Scripts in package.json:</strong> Define scripts for building and running the application using webpack.</li>
            <li><strong>Run webpack:</strong> Use npm or yarn scripts to run webpack for development or production builds.</li>
          </ol>`,
  },
  {
    command: "JSX in react",
    text: ` <p><strong>JSX in React:</strong></p>
      <p>JSX is a syntax extension for JavaScript used in React. It allows us to write HTML-like code inside JavaScript. JSX makes it easier to define UI components in React, making the code more readable and expressive.</p>
          `,
  },
  {
    command: "Angular vs React",
    text: `<p><strong>Angular vs. React:</strong></p>
          <p>Both Angular and React are popular JavaScript frameworks/libraries for building web applications, but they have different philosophies, architectures, and ecosystems.</p>
      
          <p><strong>Angular:</strong></p>
          <ul>
            <li>Angular is a comprehensive front-end framework developed and maintained by Google.</li>
            <li>It is a full-fledged MVC (Model-View-Controller) framework with batteries included, providing a lot of built-in features and tools out of the box.</li>
            <li>Angular uses two-way data binding, which means changes to the UI are automatically reflected in the application state and vice versa.</li>
            <li>It follows a component-based architecture, where everything is a component, and components are arranged in a tree hierarchy.</li>
            <li>Angular applications are typically written in TypeScript, a superset of JavaScript that adds static typing and other advanced features.</li>
          </ul>
      
          <p><strong>React:</strong></p>
          <ul>
            <li>React is a JavaScript library developed by Facebook for building user interfaces.</li>
            <li>It is focused on the view layer of the MVC architecture, providing a simple and declarative way to create interactive UI components.</li>
            <li>React uses a virtual DOM (Document Object Model) and one-way data flow, making it highly efficient and performant.</li>
            <li>It follows a component-based architecture similar to Angular, but with a more lightweight and flexible approach.</li>
            <li>React applications can be written in plain JavaScript or using JSX (JavaScript XML), a syntax extension that allows mixing HTML-like code with JavaScript.</li>
          </ul>
      
          <p><strong>Differences:</strong></p>
          <ul>
            <li>Angular is a full-fledged framework with a steep learning curve, while React is a lightweight library that is easier to get started with.</li>
            <li>Angular uses two-way data binding, while React uses one-way data flow.</li>
            <li>Angular applications are typically written in TypeScript, while React applications can be written in plain JavaScript or JSX.</li>
            <li>Angular provides more built-in features and tools out of the box, while React relies on a rich ecosystem of third-party libraries and tools.</li>
            <li>Angular has a more opinionated architecture and convention, while React gives developers more flexibility and freedom to choose their preferred tools and patterns.</li>
          </ul>`,
  },
  {
    command: "Block and Inline",
    text: `<p><strong>Block vs Inline Elements:</strong></p>
      
          <p><strong>Block-level Elements:</strong></p>
          <ul>
           <li> Block-level elements typically start on a new line and occupy the full width of their container.</li>
<li>Examples of block-level elements - div tag, para tag, header tag, list tags.</li>

          </ul>
      
          <p><strong>Inline Elements:</strong></p>
          <ul>
           <li>Inline elements do not start on a new line and only occupy the width of their content.</li>
<li>Examples of inline elements - span tag, anchor tag, image tag.</li>
          </ul>
      
          
      `,
  },
  {
    command: "Callback",
    text: `<p><strong>Callback:</strong></p>
      <p>A callback is a function passed as an argument to another function and executed later when an asynchronous operation completes.</p>
      <p><strong>Callback Hell:</strong></p>
      <li>When we are handling mutiple async tasks, the code will grow with more nested callbacks,it make code hard to read and debug, it leads to callback hell, to avoid that we can use proimses to handle async tasks.</li>

      `,
  },
  {
    command: "Currying",
    text: `<p><strong>Currying in JavaScript:</strong></p>
          <p>Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument.</p>
          `,
  },
  {
    command: "Errors in Javascript",
    text: ` <p><strong>Errors in JavaScript:</strong></p>
          <p>errors occur when something unexpected happens during the execution of code. Errors can occur due to various reasons, including syntax errors, runtime errors, and logical errors.</p>
          <ol>
            <li><strong>Syntax Errors:</strong> Syntax errors occur when the syntax of the code is incorrect.</li>
            <li><strong>Runtime Errors:</strong> Runtime errors occur during the execution of the code when an operation cannot be performed as expected,accessing undefined variables, or calling a method on an undefined object</li>
            <li><strong>Logical Errors:</strong> Logical errors occur when the code does not produce the expected result due to incorrect logic.</li>
          </ol>`,
  },
  {
    command: "Implicit type conversion",
    text: `<p><strong>Implicit Type Conversion in JavaScript:</strong></p>
          <ul>
            <li>Type conversion, also known as type coercion, is the automatic conversion of values from one data type to another by the JavaScript engine.</li>
          </ul>
        `,
  },
  {
    command: "Empty or void elements in HTML",
    text: ` <p><strong>Empty Elements in HTML5:</strong></p>
          <p>In HTML5,some elements do not require closing tags and are called empty elements or self-closing tags.</p>
          <p>Example for void elements like break tag, Image tag, Input tag, HR tag</p>
          
      `,
  },
  {
    command: "Lists in HTML5",
    text: `<p><strong>Lists in HTML5:</strong></p>
          <p>There are 3 different types of lists:</p>
          <ol>
            <li><strong>Ordered Lists (<code>&lt;ol&gt;</code>):</strong> Ordered lists are lists where each list item is numbered.</li>
            <li><strong>Unordered Lists (<code>&lt;ul&gt;</code>):</strong> Unordered lists are lists where each list item is marked with a bullet point.</li>
            <li><strong>Description Lists (<code>&lt;dl&gt;</code>):</strong> Description lists are lists of term-description pairs, with each term followed by its description.</li>
          </ol>`,
  },
  {
    command: "white space",
    text: `<p><strong>Whitespace in JSX:</strong></p>
          <ul>
            <li>Whitespace in JSX is treated differently from regular HTML.</li>
            <li>In JSX, whitespace between elements and within elements is preserved.</li>
            <li>However, leading and trailing whitespace in multiline JSX expressions is typically ignored.</li>
            <li>Whitespace within HTML tags, such as spaces or line breaks, is also preserved.</li>
          </ul>`,
  },
  {
    command: "Responsive Web Page",
    text: `<p><strong>Responsive Web Page:</strong></p>
          <p>A responsive web page is a webpage that adapts and looks good on different screen sizes (desktops, tablets, and mobile devices). It makes that users have a smooth experience, no matter what device they use.</p>
          
          <p><strong>Ways to make web page responsive:</strong></p>
          <ol>
            <li>By using Flexible Grid Layouts - flex and grid</li>
            <li>Flexible Images and Media: by Using CSS such as <code>max-width: 100%</code> to ensure images and media scale proportionally within their containing elements.</li>
            <li>By using Media queries - it allow you to apply different styles based on screen width.</li>
            <li>We can also use built in frameworks like bootstrap</li>
          </ol>
      
      `,
  },
  {
    command: "Specificity",
    text: ` <p><strong>Specificity:</strong></p>
       <p>Specificity determines which styles are applied to an element when multiple conflicting CSS rules target the same element.</p>

<p>When multiple CSS rules apply to the same element, the rule with the highest specificity will apply.</p>

<p>If two rules have the same specificity, the one that appears last in the CSS file is applied.</p>
  <p>Inline Styles have more specificity, then id selectors have more specifity, then class and attribute selectors, the tag or type selectors have least specificity</p>
         
      `,
  },
  {
    command: "Clearfix",
    text: `<p><strong>Clearfix:</strong></p>
          <ul>
            <li>Clearfix is a CSS technique used to fix issues related to floated elements within a container.</li>
            <li>When elements are floated within a container, the container may collapse and not expand to contain the floated elements.</li>
            <li>Clearfix involves adding an element with the CSS <code>clear: both;</code> property after the floated elements to force the container to expand and enclose the floated elements.</li>
            <li>It is commonly used to ensure proper layout and prevent layout issues caused by floated elements.</li>
          </ul>
      
          <p><strong>Example:</strong></p>
          <pre>
            <code>
              .container:after {
                content: "";
                display: table;
                clear: both;
              }
      
              &lt;div class="container"&gt;
                &lt;div class="floated-element" style="float: left;"&gt;Floated Element 1&lt;/div&gt;
                &lt;div class="floated-element" style="float: right;"&gt;Floated Element 2&lt;/div&gt;
              &lt;/div&gt;
            </code>
          </pre>`,
  },
  {
    command: "Floats",
    text: `<p><strong>Floats in CSS:</strong></p>
          <ul>
            <li>Floats in CSS are used to position elements horizontally within their containing element.</li>
            <li>When an element is floated, it is taken out of the normal flow of the document and shifted to the left or right until it reaches the edge of its containing element or another floated element.</li>
            <li>Floats are commonly used for creating layouts, such as multi-column designs or positioning elements beside each other.</li>
            <li>Floating elements can cause the containing element to collapse, so it's often necessary to clear the float to prevent layout issues.</li>
          </ul>
      
          <p><strong>Clearing Floats:</strong></p>
          <ul>
            <li>Clearing floats is the process of ensuring that a parent element expands to contain its floated children.</li>
            <li>There are several methods for clearing floats, including using the <code>clear</code> property, clearfix techniques, and modern layout methods such as Flexbox and CSS Grid.</li>
          </ul>
      
          <p><strong>Use Cases:</strong></p>
          <ul>
            <li>Creating multi-column layouts.</li>
            <li>Positioning elements beside each other.</li>
            <li>Creating complex page layouts.</li>
          </ul>`,
  },
  {
    command: "How to improve performance of page in CSS",
    text: ` <p><strong>How to Improve Performance Using CSS:</strong></p>
          <p>Improving the performance of a web page using CSS involves several techniques:</p>
          <ol>
            <li><strong>Minification:</strong> Minify CSS files to reduce their size by removing unnecessary whitespace, comments, and redundant code.</li>
            <li><strong>CSS Sprites:</strong> Combine multiple images into a single image sprite to reduce the number of HTTP requests required to load images.</li>
            <li><strong>CSS Transforms and Animations:</strong> Use hardware-accelerated CSS transforms and animations for smoother animations and transitions.</li>
            <li><strong>Lazy Loading:</strong> Lazy load CSS files for components that are not immediately visible on the page to improve initial loading performance.</li>
            <li><strong>CSS Grid and Flexbox:</strong> Use CSS grid and flexbox for layout instead of older layout techniques like floats and positioning for more efficient and responsive layouts.</li>
            <li><strong>Media Queries:</strong> Use media queries to apply different styles based on the screen size, device orientation, or other device characteristics to optimize layout and performance for different devices.</li>
            <li><strong>CSS Frameworks:</strong> Consider using lightweight CSS frameworks or customizing larger frameworks to include only the necessary styles to reduce CSS file size.</li>
            <li><strong>Inlining Critical CSS:</strong> Inline critical CSS directly into the HTML document to reduce render-blocking CSS and improve initial rendering performance.</li>
          </ol>`,
  },
  {
    command: "How many ways we can achieve responsive",
    text: `<p><strong>Responsive Web Design Techniques:</strong></p>
          <ol>
            <li><strong>CSS Media Queries:</strong> Adjust CSS styles based on the width of the viewport or device.</li>
            <li><strong>Viewport Units (vw, vh):</strong> Specify dimensions relative to the viewport size.</li>
            <li><strong>Flexbox:</strong> Create flexible layouts that adapt to different screen sizes.</li>
            <li><strong>CSS Grid:</strong> Define a grid layout for more complex and responsive designs.</li>
            <li><strong>Responsive Images:</strong> Use <code>srcset</code> and <code>sizes</code> attributes to serve different image sizes based on device resolution.</li>
            <li><strong>JavaScript Libraries/Frameworks:</strong> Utilize frameworks like Bootstrap, Material-UI, or Tailwind CSS, which offer responsive components and utilities.</li>
            <li><strong>CSS Frameworks:</strong> Use CSS frameworks like Bootstrap, Foundation, or Bulma, which provide pre-built responsive components and grid systems.</li>
          </ol>
          <p>Implementing responsive design techniques is essential for ensuring your website looks and performs well across various devices and screen sizes.</p>
      `,
  },
  {
    command: "Higher Order Functions",
    text: `<p><strong>Higher-Order Functions in JavaScript:</strong></p>
          <ul>
            <li>A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.</li>
          </ul>
          <p>the map, filter, reduce functions are example for higher order functions</p>
      
          `,
  },
  {
    command: "This Keyword",
    text: ` <p><strong>this Keyword:</strong></p>
          <ul>
            <li>In JavaScript, the <code>this</code> keyword refers to the context in which a function is executed.</li>
            <li>The value of <code>this</code> depends on how a function is called.</li>
            <li>In a global context or outside of any function, <code>this</code> refers to the global object.</li>
            <li>Inside a function, <code>this</code> can refer to different objects depending on how the function is called.</li>
            <li>Arrow functions do not have their own <code>this</code> value. Instead, they inherit the <code>this</code> value from surrounding scope.</li>
          </ul>`,
  },
  {
    command: "Constructor",
    text: `<p><strong>Constructors in JavaScript:</strong></p>
          <ul>
            <li>A constructor is a special method in JavaScript that is automatically called when an instance of a class or object is created.</li>
            <li>Constructors are typically used to initialize object properties or perform any setup required when creating an instance of a class.</li>
            <li>In JavaScript, constructors are defined using the <code>constructor</code> method within a class.</li>
            <li>The <code>constructor</code> method is called with the <code>new</code> keyword to create a new instance of the class.</li>
            <li>Constructors can take parameters to customize the initialization of objects.</li>
          </ul>`,
  },
  {
    command: "Polyfills",
    text: `  <p><strong>Polyfills in JavaScript:</strong></p>
          <ul>
            <li>We will write polyfills when an modern features are not supported in older browsers, it bring stability across devices.</li>
          </ul>
      `,
  },{
    "command": "How to Implement Polyfills?",
    "text": `
      <li>By using polyfill libraries like <code>core-js</code>, we can automatically add polyfills for missing features.</li>
      <li>If a browser does not support a feature, we can manually create a polyfill using JavaScript.</li>
    `
},
  {
    command: "Treeshaking",
    text: ` <p><strong>Tree Shaking:</strong></p>
          <ul>
            <li>Tree shaking is a technique used in modern JavaScript build tools, to eliminate dead code from the final bundle.</li>
            <li>It works by analyzing the codebase and only including the code that is actually used, thus reducing the size of the bundle and improving performance.</li>
            <li>It is particularly useful for optimizing large libraries and frameworks where not all features are used in a application.</li>
          </ul>
      `,
  },
   {
    command:"How Tree Shaking Works?",
    text : `
     <p><strong>How Tree Shaking Works:</strong></p>
          <ol>
            <li>Tree shaking tools statically analyze the codebase to determine the dependencies between modules.</li>
            <li>Unused code is marked as dead code during the analysis phase.</li>
            <li>During the bundling process, dead code is eliminated from the final bundle, resulting in a smaller package size.</li>
          </ol>
    `
   },
   {
     command:"Benefits of Tree Shaking",
       text:`
        <p><strong>Benefits of Tree Shaking:</strong></p>
          <ul>
            <li><strong>Reduced Bundle Size:</strong> Eliminating dead code reduces the size of the bundle, resulting in faster load times and improved performance.</li>
            <li><strong>Improved Efficiency:</strong> Developers can focus on writing expressive code without worrying about unnecessary dependencies affecting the final bundle size.</li>
            <li><strong>Better User Experience:</strong> Smaller bundle sizes lead to faster page load times, which contributes to a better user experience.</li>
          </ul>
       `
   },
  {
    command: "Object.freeze()",
    text: ` <p><strong>Object.freeze():</strong></p>
          <ul>
            <li><code>Object.freeze()</code> is a method in JavaScript that freezes an object, preventing new properties from being added to it, existing properties from being removed or changed, and preventing its prototype chain from being modified.</li>
            <li>Once an object is frozen, it becomes immutable.</li>
          </ul>`,
  },
  {
    command: "Debouncing",
    text: ` <p><strong>Debouncing:</strong></p>
          <p>Debouncing is a technique used in JavaScript to ensure that a function is not executed until after a certain amount of time has passed since the last time it was invoked.</p>
          <p>Debouncing helps to improve performance and optimize resource usage by preventing excessive function calls.</p>
          <p>It is commonly used in scenarios where a function is triggered repeatedly  like user input events such as typing or scrolling and you want to delay executing the function until the user has finished performing the action.</p>
          
      `,
  },
  {
    command: "Throttling",
    text: `<p><strong>Throttling:</strong></p>
          <p>Throttling is a technique used to limit the rate at which a function is invoked. It ensures that the function is not called more frequently than a specified time, typically to improve performance.</p>
      
      `,
  },
   {
     command:"How Throttling works?",
     text : `
          <p>When throttling a function,the first time it's called, it runs immediately. After that, if it's called again before a set time has passed, it gets ignored. Once the time is up, it can run again.</p>
     `
   },
  {
    command: "CORS",
    text: ` <p><strong>CORS (Cross-Origin Resource Sharing):</strong></p>
<p>CORS is a security feature,that allows servers to specify which origins are permitted to access their resources.</p>

  <li>By default, browsers block requests made from one website to another for security reasons.</li>
  <p>We can come across these by using CORS Headers:- </p>

<p><strong>CORS Headers:</strong></p>
<ul>
  <li><code>Access-Control-Allow-Origin</code> → Specifies which domains can access the resource.</li>
  <li><code>Access-Control-Allow-Methods</code> → Lists the allowed request methods (GET, POST, etc.).</li>
  <li><code>Access-Control-Allow-Headers</code> → Defines which headers can be used in the request.</li>
</ul>`,
  },
  {
    command: "Real vs Virtual DOM",
    text: ` <p><strong>Virtual DOM vs Real DOM:</strong></p>
          <ul>
            <li>The <strong>Real DOM</strong> (Document Object Model) is the actual tree structure of HTML elements created by the browser when a web page is loaded.</li>
            <li>The <strong>Virtual DOM</strong> is a lightweight copy of the Real DOM .</li>
            <li>When changes are made to the UI in React, the changes are first made to the Virtual DOM instead of directly manipulating the Real DOM.</li>
            <li>React then compares the Virtual DOM with the previous state of the Virtual DOM  to identify the minimal set of changes needed to update the Real DOM.</li>
            <li>Finally, React updates the Real DOM with only the necessary changes, resulting in improved performance and efficiency.</li>
          </ul>
    
         `,
  },
  {
    command: "React Mixins",
    text: ` <p><strong>React Mixins:</strong></p>
          <ul>
            <li>React mixins are a way to share reusable code between React components.</li>
            <li>They allow you to encapsulate logic and share it across multiple components without inheritance.</li>
            <li>Mixins are defined as objects that contain reusable code and can be applied to multiple components.</li>
          </ul>
      
          <p><strong>Using Mixins:</strong></p>
          <ul>
            <li>To use a mixin in a component, you need to include it using the <code>mixins</code> property in the component's definition.</li>
            <li>Once included, the methods and properties defined in the mixin become available to the component.</li>
          </ul>`,
  },
  {
    command: "useReducer vs useRef",
    text: `<p><strong>useReducer vs useRef:</strong></p>
          <p><strong>useReducer:</strong></p>
          <ul>
            <li><code>useReducer</code> is a hook used for managing complex state logic in React.</li>
            <li>It is an alternative to <code>useState</code> when the state logic is more complex.</li>
            <li><code>useReducer</code> accepts a reducer function and an initial state, returning the current state and a dispatch function to dispatch actions to update the state.</li>
          </ul>
      
          <p><strong>useRef:</strong></p>
          <ul>
            <li><code>useRef</code> is a hook used for accessing DOM elements and persisting values across renders.</li>
            <li>It returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument.</li>
            <li>Unlike state variables created with <code>useState</code>, the value returned by <code>useRef</code> persists across component re-renders without causing re-renders.</li>
            
          </ul>
      
         `,
  },
  {
    command: "error boundaries in react",
    text: ` <p><strong>Error Boundaries in React:</strong></p>
        <ul>
          <li>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree.</li>
          <li>They provide a way to gracefully handle errors and prevent the entire application from crashing.</li>
          <li>Error boundaries work like JavaScript catch blocks but for React components.</li>
          <li>When an error occurs in a component inside the error boundary, React will call the static method componentDidCatch(error, info) of the error boundary component.</li>
          <li>The componentDidCatch() method allows the error boundary component to log the error, display a fallback UI, and inform the user that something went wrong.</li>
          <li>Error boundaries only catch errors that occur in their own component tree. They do not catch errors in event handlers, asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks), or during server-side rendering.</li>
          <li>You can define multiple error boundary components in your application to handle different sections of the UI.</li>
          <li>Error boundaries are useful for building robust and reliable React applications by gracefully handling errors and providing a better user experience.</li>
        </ul>`,
  },
  {
    command: "Hooks in redux",
    text: `<p><strong>Hooks in Redux:</strong></p>
        <p>React Redux provides useSelector and useDispatch hooks that allow you to interact with the Redux store and dispatch actions in functional components.</p>
    
        <p><strong>useSelector:</strong></p>
        <ul>
          <li>The useSelector hook allows you to extract data from the Redux store state in functional components.</li>
          <li>It accepts a selector function as an argument, which is called with the entire Redux store state and returns the desired data.</li>
        </ul>
    
        <p><strong>useDispatch:</strong></p>
        <ul>
          <li>The useDispatch hook allows you to dispatch actions to the Redux store in functional components.</li>
          <li>You can use this function to dispatch actions from anywhere in your functional components.</li>
        </ul>`,
  },
  {
    command: "ways to copy object",
    text: `<p><strong>Ways to Copy Objects in JavaScript:</strong></p>
        <ol>
  <li>We can copy objects using the spread operator, which creates a shallow copy and only copies direct properties, not nested properties.</li>
  <li>We can also copy an object using the Object.assign() method, which also creates a shallow copy.</li>
  <li>Using JSON.parse and JSON.stringify makes a deep copy of objects by converting them into a string and then parsing them back into an object.</li>
  <li>We can manually loop through the properties of an object and copy them to a new object for a custom deep copy solution.</li>
</ol>
`,
  },
  {
    command: "shallow copy and deep copy",
    text: ` <p><strong>Shallow Copy:</strong></p>
        <ul>
  <li>A shallow copy creates a new object but keeps references to the original nested objects.</li>
  <li>Changes to nested objects in the copied object will also affect the original object.</li>
  <li>when we make copy of object by using Object.assign() or the spread operator it make shallow copy.</li>
</ul>

    
        <p><strong>Deep Copy:</strong></p>
         <ul>
          <li>A deep copy of an object creates a completely new object with its own copies of all nested objects and properties.</li>
          <li>Modifying a property of the deep copy will not affect the corresponding property in the original object.</li>
          <li>Deep copy can be achieved by using JSON.parse and JSON.stringify method, manually recursive functions.</li>
        </ul>

    `,
  },
  {
    command: "Redux Thunk and redux Saga",
    text: ` <p><strong>Redux Thunk:</strong></p>
<ul>
  <li>Redux Thunk is a middleware that helps handle asynchronous tasks (like API calls) in Redux.</li>
  <li>It allows action creators to return functions instead of plain action objects.</li>
  <li>These functions can delay actions or dispatch multiple actions based on async operations.</li>
</ul>

<p><strong>Redux Saga:</strong></p>
<ul>
  <li>Redux Saga is a middleware for managing async tasks in Redux but in a more organized way.</li>
  <li>It uses generator functions  to listen for actions and perform side effects like API calls.</li>
  <li>Sagas make it easier to manage complex scenarios like  cancellations, and delays.</li>
  <li>It helps keep async logic separate from components, making the code easier to test and maintain.</li>
</ul>
        `,
  },
  {
    command: "Generator function",
    text: `<p><strong>Generator Function in JavaScript:</strong></p>
<ul>
  <li>A generator function is a special function that can pause and resume its execution.</li>
  <li>It is defined using <code>function*</code> (an asterisk after the function keyword).</li>
  <li>The <code>yield</code> keyword pauses execution and returns a value.</li>
  <li>Generators are useful for handling asynchronous tasks, iterating over data lazily, and controlling execution flow.</li>
</ul>
`,
  },
  {
    command: "Css Grid and Flex",
    text: `<p><strong>CSS Grid and Flexbox:</strong></p>
        <p>CSS Grid and Flexbox are two powerful layout systems that allow developers to create complex and responsive layouts with ease.</p>
    
       <p><strong>Flexbox:</strong></p>
        <ul>
          <li>Provides a one-dimensional layout system, either in a row or a column.</li>
        </ul>
    
        <p><strong>CSS Grid:</strong></p>
        <ul>
          <li>Provides a two-dimensional grid-based layout system.</li>
          <li>Allows precise control over both rows and columns.</li>
          <li>Supports aligning items both horizontally and vertically.</li>
        </ul>
`,
  },
  {
    command: "Selection Sort Implementation",
    text: `
        <p><strong>Selection Sort:</strong> Selection Sort is a sorting algorithm. It works by selecting the smallest (or largest) element from given array and swapping it with the element at the current position.</p>
      <p><strong>Time Complexity:</strong></p>
      <ul>
          <li><strong>Best, Worst, and Average Case:</strong> O(n²), where n is the number of elements.</li>
          <li><strong>Space Complexity:</strong> O(1) because it sorts the array in-place with no extra space required.</li>
      </ul>
     <pre style="font-size: 10px;">
  <code>
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Example usage:
const arr = [55, 20, 10,28, 18];
console.log(selectionSort(arr));
// Output: [10,18,20, 28, 55]
  </code>
</pre>

        `,
  },
  {
    command: "Bubble Sort Implementation",
    text: `
    <p><strong>Bubble Sort:</strong> Bubble Sort is a simple sorting algorithm,it pushes the maximum element to the last by adjacent swaps.</p>
    <p><strong>Optimization:</strong> In the optimized version of Bubble Sort, we can stop early if no elements were swapped,indicating that the list is already sorted.</p>
    <p><strong>Time Complexity:</strong></p>
    <ul>
        <li><strong>Best Case:</strong> O(n) – When the array is already sorted, only one pass is needed.</li>
        <li><strong>Average and Worst Case:</strong> O(n²) – In the case of a completely unsorted array.</li>
    </ul>
    <pre style="font-size: 14px;">
        <code>
function bubbleSort(arr) {
let n = arr.length;
let swapped;

for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop: Traverse the array from 0 to n-i-1
    // Last i elements are already sorted

    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap if the element is greater than the next element
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            swapped = true; // Mark that a swap has occurred
        }
    }

    if (!swapped) {
        break; 
    }
}

return arr;
}

// Example usage:
const arr = [55, 20, 10,28, 18];
console.log(bubbleSort(arr));
// Output: [10,18,20, 28, 55]
        </code>
    </pre>
`,
  },
  {
    command: "Insertion Sort Implementation",
    text: `
    <p><strong>Insertion Sort:</strong> Insertion Sort is a sorting algorithm it going to pick an element and kept at right position by swaping.</p>
    <p><strong>Why is Insertion Sort Efficient for Almost Sorted Arrays?</strong></p>
    <ul>
        <li><strong>Efficient for nearly sorted arrays:</strong>Only outer loop was iterate once,while loop doesnt exceute.</li>
        <li><strong>Best Case (already sorted):</strong> O(n) because no shifts or swaps are needed.</li>
        <li><strong>Worst Case (reversely sorted):</strong> O(n²) because every element must be compared and shifted.</li>
    </ul>
    <pre style="font-size: 14px;margin-right:100px;">
        <code>
function insertionSort(arr) {
  let n = arr.length;
   
  for (let i = 1; i < n; i++) {
      let j = i;

      // checking is any prev ele is greater
      // than present ele
      while (j > 0 && arr[j - 1] > arr[j]) {
          // Swap prev and present ele
          let temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;

          // Move to previous index
          j--;
      }
  }

  return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
insertionSort(arr); 
// Output:[5,6,11,12,13]
          </code>
    </pre>
`,
  },{
    command:"Loose and Strict Equal?",
    text:`<p><strong>Loose Equal (==):</strong> It compares only values. If the values are of different types, it converts one type to match the other before comparing.</p>  
<p><strong>Strict Equal (===):</strong> It compares both values and types. It returns false if both types are different and does not perform type conversion.</p>

    
    `
  }
];

export default commandss;
