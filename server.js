
const rollDice = (faces = 6) => Math.floor(Math.random() * faces) + 1;

console.log('Result: ', rollDice());
console.log('Result (dice 4): ', rollDice(4));
console.log('Result (dice 8: ', rollDice(8));
console.log('Result (dice 20): ', rollDice(20));
