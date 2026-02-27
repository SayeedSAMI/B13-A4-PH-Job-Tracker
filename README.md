## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById -> chooses single Id element and its static
- getElementsByClassName -> chooses multiple class elements if available
- querySelector -> chooses the first element that matches
- querySelectorAll -> chooses nodelist(multiple possible element that matches)

### 2. How do you create and insert a new element into the DOM?

const div = document.createElement('div');
div.innerText = "hello";
document.body.appendChild(div);

### 3. What is Event Bubbling? And how does it work?

Event Bubbling means event starts from the target element and moves upward to its parents

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a method of handling events by placing one event listener on a parent element to manage events of its child elements using event bubbling.
It is useful because it reduces memory usage, improves performance, and handles dynamically added elements easily.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() -> stops browser default action and stopPropagation() -> stops event from bubbling

**Technology Stack:**

- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)
