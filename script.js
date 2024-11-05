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

function roundResult(result) {
  return Math.round(result * 10000) / 10000
}

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#display')
  let currentInput = ''
  let operator = null
  let firstOperand = null
  let shouldResetInput = false

  document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
      if (shouldResetInput) {
        currentInput = ''
        shouldResetInput = false
      }
      currentInput += button.textContent
      display.textContent = currentInput
    })
  })

  document.querySelectorAll('.operator').forEach((button) => {
    button.addEventListener('click', () => {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput)
      } else if (currentInput !== '') {
        const secondOperand = parseFloat(currentInput)
        let result
        switch (operator) {
          case '+':
            result = add(firstOperand, secondOperand)
            break
          case '-':
            result = subtract(firstOperand, secondOperand)
            break
          case '*':
            result = multiply(firstOperand, secondOperand)
            break
          case '/':
            result = divide(firstOperand, secondOperand)
            break
        }
        firstOperand = roundResult(result)
        display.textContent = firstOperand
      }
      operator = button.textContent
      shouldResetInput = true
    })
  })

  document.querySelector('#equals').addEventListener('click', () => {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
      const secondOperand = parseFloat(currentInput)
      let result
      switch (operator) {
        case '+':
          result = add(firstOperand, secondOperand)
          break
        case '-':
          result = subtract(firstOperand, secondOperand)
          break
        case '*':
          result = multiply(firstOperand, secondOperand)
          break
        case '/':
          result = divide(firstOperand, secondOperand)
          break
      }
      display.textContent = roundResult(result)
      firstOperand = roundResult(result)
      operator = null
      currentInput = ''
      shouldResetInput = true
    }
  })

  document.querySelector('#clear').addEventListener('click', () => {
    currentInput = ''
    firstOperand = null
    operator = null
    display.textContent = '0'
  })

  document.querySelector('#decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
      currentInput += '.'
      display.textContent = currentInput
    }
  })

  document.querySelector('#backspace').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1)
    display.textContent = currentInput || '0'
  })
})
