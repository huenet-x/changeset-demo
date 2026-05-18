// 当前只有一个简单的函数
function greet(name) {
  return `Hello, ${name}!`;
}

// 这是我们新增的功能
function farewell(name) {
  return `Goodbye, ${name}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, farewell, add  };
