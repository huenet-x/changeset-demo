// 破坏了原来的调用方式！
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// 这是我们新增的功能
function farewell(name) {
  return `Goodbye, ${name}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, farewell, add };
