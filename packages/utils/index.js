// 当前只有一个简单的函数
function greet(name) {
  return `Hello, ${name}!`;
}

// 这是我们新增的功能
function farewell(name) {
  return `Goodbye, ${name}!`;
}

module.exports = { greet, farewell };
