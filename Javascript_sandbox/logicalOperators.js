const Name = 'Steve';
const Age = 30;


// AND &&
if(Age > 0 && Age < 13){
    console.log(`${Name} is a child.`);
} else if(Age >= 13 && Age <= 19){
    console.log(`${Name} is a teenager.`);
} else {
    console.log(`${Name} is an adult`);
}

// OR ||
if(Age < 16 || Age > 65){
    console.log(`${Name} can not run in race.`);
} else{
    console.log(`${Name} is registered for the race.`);
}


id = 100
// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

