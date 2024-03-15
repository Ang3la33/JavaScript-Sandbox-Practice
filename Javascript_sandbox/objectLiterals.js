// const person = {
//     firstName: "Steve",
//     lastName: "Smith",
//     email: "steve@aol.com",
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 1987
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;

// console.log(val);


// JSON - JavaScript Object Notation
// Objects
const person1 = {
    first: 'bob',
    last: 'bobson',
    goodbeer: '1987',
    getFullYear: 'twentytwentyfour',
    address: {
        street: '123 Water St.',
        city: 'St.Johns',
        province: 'NL',
        postal: 'A1F6J7',
        country: 'CANADA'
    },
    hobbies: ['music', 'fishing', 'shed life', 'quad'],
    getAge: function(){
        const today = new Date();
        return today.getFullYear() - this.goodbeer;
    }
};

let peeps;
peeps = person1.getAge();
console.log(`person age: ${peeps}`);
console.log(person1.getFullYear);
console.log(person1.address.city);
let key = 2;
console.log(person1.hobbies[key]);

