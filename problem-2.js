//Write a program to convert an Infix expression to Postfix form.

function infixToPostfix(expression) {
  let postfix = '';
  const stack = [];

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOperand(char)) {
      postfix += char;
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        postfix += stack.pop();
      }
      stack.pop(); // Pop the opening parenthesis
    } else {
      while (
        stack.length > 0 &&
        precedence[char] <= precedence[stack[stack.length - 1]]
      ) {
        postfix += stack.pop();
      }
      stack.push(char);
    }
  }

  while (stack.length > 0) {
    postfix += stack.pop();
  }

  return postfix;
}

function isOperand(char) {
  return /^[a-zA-Z0-9]+$/.test(char);
}

// Example usage:
const infixExpression = 'a + b * c - ';
const postfixExpression = infixToPostfix(infixExpression);
console.log(postfixExpression); //abc -*+
