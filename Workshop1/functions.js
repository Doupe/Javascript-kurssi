function addNumbers(a, b) {
    return a + b;
}

var num1 = 29;
var num2 = 35;

var sum = addNumbers(num1, num2);

if (sum > 100) { // Checking if sum is over 100
    alert("Power level over 100!!");
}    
document.write("<p>First number: " + num1 + "</p>");
document.write("<p>Second number: " + num2 + "</p>");
document.write("<p>Sum: " + sum + "</p>");