import React, {useState, useCallback} from 'react';
import DataFromApi from "../DataFromApi";

function CallbackHook() {
  const [number, setNumber] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'red' : 'black'
  }

  const getDataFromApi = useCallback((index: number) => {
    return new Array(number).fill('').map((_, i) => `Element ${i + index}`)
  }, [number])

  function decr() {
    if (number > 0) setNumber(prev => prev - 1)
  }

  return (
    <>
      <h1 style={styles}>Calculated value: {number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}
              className="btn btn-success">add</button>
      <button onClick={decr}
              className="btn btn-danger">drop</button>
      <button onClick={() => setColored(prev => !prev)}
              className="btn btn-warning">change</button>

      <DataFromApi getData={getDataFromApi} />
    </>
  )
}

export default CallbackHook;
