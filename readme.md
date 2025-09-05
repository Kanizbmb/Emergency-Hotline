

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    a. `getElementById` selects a single element using its unique ID. Example: `document.getElementById('id');` 
   b. `getElementsByClassName` selects all elements that have a specific class. Example: `document.getElementsByClassName('clas');` 
   c. `querySelector` selects the **first element** that matches a CSS selector. Example: `document.querySelector('.sel');` 
   d. `querySelectorAll` selects **all elements** that match a CSS selector. Example: `document.querySelectorAll('.all');`


# 2. How do you create and insert a new element into the DOM?
  
   a. Create a new element :    let span = document.createElement('span');
   b. Add HTML content   :    span.innerHTML = "<strong>Welcome!</strong>";
   c. Insert into the DOM:   document.body.appendChild(span);
# 3. What is Event Bubbling and how does it work?
   a. Event Bubbling occurs when an event starts on a child element and moves upward to its parent elements. 
   b. The event triggers first on the **target element**, then on its ancestors. 
   Example:
   <ul id="menu">
     <li id="item">Click me</li>
   </ul>


# 4. What is Event Delegation in JavaScript? Why is it useful?


 a. Event Delegation is when you attach a single event listener to a **parent element** to handle events from its **child elements**, instead of adding listeners to each child individually. 


 b. This approach also works for **child elements added dynamically** after the listener is attached. 


 Example:
 <ul id="menu">
   <li>Home</li>
   <li>About</li>
 </ul>


# 5. What is the difference between preventDefault() and stopPropagation() methods?
   a. **preventDefault()** → Prevents the browser from performing its default action. 
   Example:
   
   <a href="https://nusrat.com" id="link"> Example</a>


   b. stopPropagation() → Stops an event from bubbling up or capturing, preventing parent listeners from being triggered.
   Example :<div id="parent">
   <button id="child">Click Me</button>
    </div>



