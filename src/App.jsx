import React, { useState } from 'react'

function App() {
  const initialValue = 0
  const [firstNumber, setFirstNumber] = useState(0)
  const [operation, setOperation] = useState('')
  const [previousValue, setPreviousValue] = useState()

  const setOperationType = (type) => {
    if (!previousValue) {
      setPreviousValue(firstNumber)
      setFirstNumber('')
    }
    setOperation(type)
  }

  const clearAll = () => {
    setFirstNumber(0)
    setOperation('')
    setPreviousValue()
  }

  const setNumberFromBelow = (event) => {
    if (firstNumber === parseInt(initialValue)) {
      setFirstNumber(event)
    } else {
      const numberFromBelow = isNaN(firstNumber) ? '' : firstNumber
      setFirstNumber(numberFromBelow + event)
    }
  }

  const setAfterOp = () => {
    setFirstNumber('')
    setOperation('')
  }

  const getCalculation = (operation) => {
    if (firstNumber === '') {
      setFirstNumber('0')
    }
    switch (operation) {
      case '/':
        setPreviousValue(parseInt(previousValue) / parseInt(firstNumber))
        setAfterOp()
        break
      case '*':
        setPreviousValue(parseInt(previousValue) * parseInt(firstNumber))
        setAfterOp()
        break
      case '-':
        setPreviousValue(parseInt(previousValue) - parseInt(firstNumber))
        setAfterOp()
        break
      case '+':
        setPreviousValue(parseInt(previousValue) + parseInt(firstNumber))
        setAfterOp()
        break
      default:
        break
    }
  }

  return (
    <body>
      <main>
        <div className="calculator">
          <div className="display">
            {''}
            {firstNumber !== ''
              ? firstNumber
              : '' === operation
              ? previousValue
              : firstNumber}
          </div>
          <div className="buttons">
            <button className="button c" onClick={() => clearAll()} value="">
              AC
            </button>
            <button className="button fn">&#177;</button>
            <button className="button fn">&#37;</button>
            <button className="button op" onClick={() => setOperationType('/')}>
              &#247;
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="7"
            >
              7
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="8"
            >
              8
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="9"
            >
              9
            </button>
            <button className="button op" onClick={() => setOperationType('*')}>
              &#215;
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="4"
            >
              4
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="5"
            >
              5
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="6"
            >
              6
            </button>
            <button className="button op" onClick={() => setOperationType('-')}>
              &#8722;
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="1"
            >
              1
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="2"
            >
              2
            </button>
            <button
              className="button"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="3"
            >
              3
            </button>
            <button className="button op" onClick={() => setOperationType('+')}>
              &#43;
            </button>
            <button
              className="button x2"
              onClick={(event) => setNumberFromBelow(event.target.value)}
              value="0"
            >
              0
            </button>
            <button className="button">.</button>
            <button
              className="button op"
              onClick={(event) => getCalculation(operation)}
              value="="
            >
              &#61;
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
