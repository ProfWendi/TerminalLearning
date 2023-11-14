// project/modules/test.js

// a variable called "hi"
exports.hi = "Hola!";

// a function called "bye"
exports.bye = function() {
    return "Bien D&iacute;a!";
}
// an object called "conversation"
exports.conversation = {
  give(number) {
		return `Here is ${number * 10} dollars`;
  },
  greet(name) {
      return `&iquest;C&oacute;mo est&aacute;s, ${name}?`;
  }
};