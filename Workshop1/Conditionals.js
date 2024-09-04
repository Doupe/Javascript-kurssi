var x = 42;
var order = 'Beer';
var message = ''

if (x > 50) {
("He's over 50!" );
} else if  (x < 18) {
message = "You're underage, here's some MILK insted";
} else if  (x == 42) {
message = "Answer to the Ultimate Question of Life, the Universe, and Everything";
} else {
message ="It seems you're bit underaged.";
}

document.write(message);
console.log(message); 