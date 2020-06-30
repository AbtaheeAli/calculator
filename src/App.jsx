import React, { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [operation, setOperation] = useState('')
  const [previousValue, setPreviousValue] = useState()
  console.log(operation)

  const setValueFromButton = (event) => setFirstNumber(event)
  const setOperationType = (type) => setOperation(type)

  const clearAll = () => {
    setFirstNumber(0)
    setOperation('')
    setPreviousValue()
  }

  return (
    <body>
      <main>
        <div className="calculator">
          <div className="display">{firstNumber}</div>
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
              onClick={(event) => setValueFromButton(event.target.value)}
              value="7"
            >
              7
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="8"
            >
              8
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="9"
            >
              9
            </button>
            <button className="button op" onClick={() => setOperationType('*')}>
              &#215;
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="4"
            >
              4
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="5"
            >
              5
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="6"
            >
              6
            </button>
            <button className="button op" onClick={() => setOperationType('-')}>
              &#8722;
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="1"
            >
              1
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="2"
            >
              2
            </button>
            <button
              className="button"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="3"
            >
              3
            </button>
            <button className="button op" onClick={() => setOperationType('+')}>
              &#43;
            </button>
            <button
              className="button x2"
              onClick={(event) => setValueFromButton(event.target.value)}
              value="0"
            >
              0
            </button>
            <button className="button">.</button>
            <button className="button op" onClick={() => setOperationType('=')}>
              &#61;
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
