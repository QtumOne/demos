// GLobal scope
var rdx = 'hi';
let ntg = 'hi';
const petn = 'hi';

// Function scope
function matrix() {
  var rdx = 'hi';
  let ntg = 'hi';
  const petn = 'hi';
  // Assign to an undeclared variable, which will automatically become a global variable.
  hi2 = 'hello world';

  if (true) {
    // the declaration of var, function, class will be hoisted to the top of their scope, prior to execution of the code.
    // Which means accessing the name before the code will not result in a ReferenceError.
    var anfo = 'hi';
  }
}

class TNT {
  constructor() {}
}

// Block scope, only let and const is block scoped. The tnt variable is only accessible inside the for block.
// Out of the block accessing results in a ReferenceError.
for (let tnt = 0; tnt < 10; tnt++) {}
