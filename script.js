// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

 document.addEventListener('contextmenu', (e) => e.preventDefault()); // Disable right-click

document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+Shift+C
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U') // Disable Ctrl+U
    ) {
        e.preventDefault();
    }
});
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const questionsAndAnswers = [
            { question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development." },
            { question: "What are JavaScript data types?", answer: "JavaScript has 7 data types: Number, String, Boolean, Null, Undefined, Object, and Symbol." },
            { question: "What is closure in JavaScript?", answer: "A closure is a function that retains access to its outer scope even after the outer function has finished executing." },
            { question: "What is the difference between == and ===?", answer: "== checks for value equality with type conversion, while === checks for both value and type equality." },
            { question: "What is an arrow function?", answer: "An arrow function is a shorter syntax for writing functions using `=>`." },
            { question: "What is a promise in JavaScript?", answer: "A promise represents a value that may be available now, in the future, or never, helping to handle asynchronous operations." },
            { question: "What is an event loop?", answer: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations and callbacks." },
            { question: "What is the difference between var, let, and const?", answer: "`var` has function scope, `let` has block scope, and `const` is block-scoped and cannot be reassigned." },
            { question: "What is hoisting?", answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution." },
            { question: "What is the use of the `this` keyword?", answer: "`this` refers to the object that is executing the current function." },
            { question: "What is DOM?", answer: "The DOM (Document Object Model) is a programming interface that represents the structure of a web page." },
            { question: "What is an IIFE?", answer: "An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after being defined." },
            { question: "What is the difference between null and undefined?", answer: "`null` is an intentional absence of value, while `undefined` means a variable has been declared but not assigned a value." },
            { question: "What is a callback function?", answer: "A callback function is a function passed as an argument to another function to be executed later." },
            { question: "What is a higher-order function?", answer: "A higher-order function is a function that takes another function as an argument or returns a function." },
            { question: "What is the difference between synchronous and asynchronous JavaScript?", answer: "Synchronous code executes in order, while asynchronous code can execute independently without blocking the main thread." },
            { question: "What is destructuring in JavaScript?", answer: "Destructuring allows extracting values from arrays or objects into distinct variables." },
            { question: "What is the spread operator?", answer: "The spread operator (`...`) expands elements of an array or properties of an object." },
            { question: "What is the rest operator?", answer: "The rest operator (`...`) collects multiple elements into a single array parameter." },
            { question: "What is local storage?", answer: "Local storage is a browser feature that allows storing data persistently on the client-side." },
            { question: "What is session storage?", answer: "Session storage is a browser feature that stores data for the duration of a page session." },
            { question: "What is the difference between map and forEach?", answer: "`map` returns a new array, while `forEach` does not return anything." },
            { question: "What is the difference between slice and splice?", answer: "`slice` returns a portion of an array without modifying it, while `splice` modifies the original array." },
            { question: "What are JavaScript prototypes?", answer: "Prototypes are the mechanism by which JavaScript objects inherit properties and methods from other objects." },
            { question: "What is async function?", answer: "An `async` function allows writing asynchronous code using `await`." },
            { question: "What is the use of the fetch API?", answer: "The Fetch API is used to make HTTP requests and handle responses in JavaScript." },
            { question: "What is JSON?", answer: "JSON (JavaScript Object Notation) is a lightweight data format for exchanging data between a server and a client." },
            { question: "What is the difference between function declaration and function expression?", answer: "A function declaration is hoisted, while a function expression is not." },
            { question: "What is a generator function?", answer: "A generator function allows pausing and resuming execution using the `yield` keyword." },
            { question: "What is event delegation?", answer: "Event delegation is a technique where a parent element handles events for its child elements." },
            { question: "What is a WeakMap in JavaScript?", answer: "A WeakMap is a collection of key-value pairs where keys are weakly referenced objects." },
            { question: "What is a WeakSet?", answer: "A WeakSet is a collection of objects that cannot be iterated and do not prevent garbage collection." },
            { question: "What is the difference between push and unshift?", answer: "`push` adds an element to the end of an array, while `unshift` adds an element to the beginning." },
            { question: "What is the difference between pop and shift?", answer: "`pop` removes the last element of an array, while `shift` removes the first element." },
            { question: "What is a Set in JavaScript?", answer: "A Set is a collection of unique values, preventing duplicates." },
            { question: "What is the difference between call, apply, and bind?", answer: "`call` and `apply` invoke a function immediately, while `bind` returns a new function." },
            { question: "What is a debounce function?", answer: "A debounce function limits how often a function can be executed over time." },
            { question: "What is a throttle function?", answer: "A throttle function ensures a function is executed at most once in a specified time period." },
            { question: "What is AJAX?", answer: "AJAX (Asynchronous JavaScript and XML) allows updating web pages without reloading the page." },
            { question: "What is the difference between innerHTML and textContent?", answer: "`innerHTML` includes HTML tags, while `textContent` returns only text." },
            { question: "What is a shallow copy and a deep copy?", answer: "A shallow copy copies references, while a deep copy creates independent copies of objects." },
            { question: "What is the difference between typeof and instanceof?", answer: "`typeof` checks the data type, while `instanceof` checks if an object is an instance of a constructor." },
            { question: "What is a module in JavaScript?", answer: "A module is a reusable piece of code that can be imported and exported between JavaScript files." },
            { question: "What is function currying?", answer: "Function currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument." },
            { question: "What are promises and how do they work?", answer: "Promises represent asynchronous operations that can be in pending, resolved, or rejected states." },
            { question: "What is an immediately invoked function expression (IIFE)?", answer: "An IIFE is a function that executes immediately after being defined, preventing global scope pollution." },
            { question: "What are template literals?", answer: "Template literals allow embedding expressions inside backticks (`) using ${}." }
        ];

        function sendMessage() {
            const userInput = document.getElementById("user-input").value.trim();
            const chatBox = document.getElementById("chat-box");
            if (userInput === "") return;
            const userMessage = document.createElement("div");
            userMessage.classList.add("user-message");
            userMessage.textContent = userInput;
            chatBox.appendChild(userMessage);
            setTimeout(() => {
                const response = questionsAndAnswers.find(qa => qa.question.toLowerCase() === userInput.toLowerCase());
                const botMessage = document.createElement("div");
                botMessage.classList.add("bot-message");
                botMessage.textContent = response ? response.answer : "Sorry, I don't know the answer to that question.";
                chatBox.appendChild(botMessage);
            }, 1000);
            document.getElementById("user-input").value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        document.getElementById("user-input").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });

        function toggleChatbot() {
            const chatContainer = document.getElementById("chat-container");
            chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
        }


 
