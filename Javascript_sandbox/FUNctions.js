// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName
}

//greet();
//console.log(greet('John', 'Doe'));
//console.log(greet());


// FUNCTION EXPRESSIONS

const Square = function(x){
    return x*x
};

//console.log(Square(8));


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })()

// (function(name){
//     console.log('Hello ' + name)
// })('Brad');

const Todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(Id){
        console.log(` Edit todo ${Id}`);
    }
}

Todo.delete = function(){
    console.log(`Delete todo..`);
}

Todo.add();
Todo.edit(22);
Todo.delete();