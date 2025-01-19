```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs
  }

  return a / b; // Potential for division by zero if b is 0
}

console.log(myFunction(10, 0)); // Throws an error
```