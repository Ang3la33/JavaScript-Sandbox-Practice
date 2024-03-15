const firstName = 'Danny';
const lastName = 'Williams';
const city = "St.John's"
const age = 37;
const temperature = 100;
let aString;
let html;

// ''
let singleQuotes = 'Single Quote';
// ""
let doubleQuotes = "Double Quotes";
// ``
let templateLiteralsBackTick = `Back Tick`;



aString = "Welcome" + " " + firstName + " " + "and his friend's.";

// With template strings (ES6)
aString = `Welcome ${firstName} and his friend's to \
our ${age} birthday party in ${city}. We all need \
to stay "quiet" until Mr. ${lastName} arrives. `;

function greeting() {
    return 'Wecome to the Machine'
};

html = `
    <ul>
        <li>First: ${firstName} </li>
        <li>Last: ${lastName} </li>
        <li>Age: ${age} </li>
        <li>City: ${city} </li>
        <li>Maths: ${34 + 66} </li>
        <li>Function: ${greeting()} </li>
        <li>Ternary Operator: ${age < 65? 'Premier' : 'Citizen'} </li>
        <li>Temperature: ${temperature < 100 ? 'Nice out' : 'sun screen'} </li>
    </ul>
`;


console.log(aString);
console.log(html);
document.body.innerHTML = html;


