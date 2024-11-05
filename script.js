function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    return 'Error'
  }
  return a / b
}

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#display')
  let currentInput = ''
  let operator = null
  let firstOperand = null

  document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
      currentInput += button.textContent
      display.textContent = currentInput
    })
  })

  document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', () => {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput)
        operator = button.textContent
        currentInput = ''
      } else {
        const secondOperand = parseFloat(currentInput)
        switch (operator) {
          case '+':
            firstOperand = add(firstOperand, secondOperand)
            break
          case '-':
            firstOperand = subtract(firstOperand, secondOperand)
            break
          case '*':
            firstOperand = multiply(firstOperand, secondOperand)
            break
          case '/':
            firstOperand = divide(firstOperand, secondOperand)
            break
        }
        display.textContent = firstOperand
        operator = button.textContent
        currentInput = ''
      }
    })
  })

  document.querySelector('#equals').addEventListener('click', () => {
    if (firstOperand !== null && operator !== null) {
      const secondOperand = parseFloat(currentInput)
      switch (operator) {
        case '+':
          display.textContent = add(firstOperand, secondOperand)
          break
        case '-':
          display.textContent = subtract(firstOperand, secondOperand)
          break
        case '*':
          display.textContent = multiply(firstOperand, secondOperand)
          break
        case '/':
          display.textContent = divide(firstOperand, secondOperand)
          break
      }
      firstOperand = null
      operator = null
      currentInput = ''
    }
  })

  document.querySelector('#clear').addEventListener('click', () => {
    currentInput = ''
    firstOperand = null
    operator = null
    display.textContent = '0'
  })
})
