var arr = [];
for (var i = 0; i < 15; i++) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    arr.push(randomNumber);
    
    console.log("Generated number: " + randomNumber);
    document.write("<p>Generated number: " + randomNumber + "</p>");
}

console.log("All numbers generated:", arr);