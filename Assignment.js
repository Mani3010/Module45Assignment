/*q1
function doubleUsingCallback(arr, callback) {
    // Use the callback function to double each element of the array
    return arr.map(callback);
}
// Define a callback function that doubles a number
function double(number) {
    return number * 2;
}
// Example usage:
const numbers = [1, 2, 3, 4];
const doubledNumbers = doubleUsingCallback(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8]
*/
/*
q2
function manipulateString(str) {
    // Convert the string to uppercase
    const manipulatedString = str.toUpperCase();

    // Define the callback function
    function logString() {
        console.log(`The manipulated string is: ${manipulatedString}`);
    }

    // Return the callback function
    return logString;
}

// Example usage:
const myString = "hello world";
const logResult = manipulateString(myString);
logResult(); // Outputs: The manipulated string is: HELLO WORLD
*/
/*
q3
function ageInDays(person) {
    // Extracting first name, last name, and age from the person object
    const { firstName, lastName, ageInYears } = person;

    // Concatenate the first and last name
    const fullName = `${firstName} ${lastName}`;

    // Calculate age in days (assuming 365 days in a year)
    const ageInDays = ageInYears * 365;

    // Define the callback function
    function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }

    // Return the callback function
    return logMessage;
}

// Example usage:
const person = {
    firstName: 'John',
    lastName: 'Doe',
    ageInYears: 30
};

const logResult = ageInDays(person);
logResult(); // Outputs: The person's full name is John Doe and their age in days is 10950.
*/
/*q4
function arrangeBooksInAlphabeticalOrder(books, callback) {
    // Use map to create a new list containing only the titles of the books
    const titles = books.map(book => book.title);

    // Sort the titles in alphabetical order
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));

    // Pass the sorted titles to the callback function
    callback(sortedTitles);
}

// Callback function to log the titles to the console
function logTitles(titles) {
    console.log('Titles in alphabetical order:');
    titles.forEach(title => console.log(title));
}

// Example usage
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];

arrangeBooksInAlphabeticalOrder(books, logTitles);
*/
/*
q5
function greet(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string' && name.trim() !== '') {
            // Create the greeting message
            const message = `Hello, ${name}!`;
            // Resolve the promise with the greeting message
            resolve(message);
        } else {
            // Reject the promise if the name is not a valid string
            reject('Invalid name provided');
        }
    });
}

// Example usage
greet('Mithun')
    .then(message => {
        console.log(message);  // Output: "Hello, Mithun!"
    })
    .catch(error => {
        console.error(error);
    });
*/
/*
q6
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function
fetchData();
*/
/*
q7
async function fetchMultipleData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('One or more network responses were not ok');
        }

        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        const result = {
            todo: todoData,
            post: postData
        };

        console.log(result);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function
fetchMultipleData();

*/
/*
q8
async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function
fetchAndDisplayData();

*/
/*
q9
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        // Optionally display an error message on the webpage
        document.body.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Call the function
fetchWithErrorHandling();
*/


