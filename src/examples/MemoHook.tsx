import React, {useState, useMemo, useEffect} from 'react';

function someComplexStuff(number: number) {
  let i = 0
  while (i < 1000000000) i++
  return number * 2
}

function MemoHook() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const calculated = useMemo(() => {
    return someComplexStuff(number)
  }, [number])

  const styles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])

  useEffect(() => {
    console.log(`Styles have been changed`)
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Calculated value: {calculated}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}
              className="btn btn-success">add</button>
      <button onClick={() => setNumber(prev => prev - 1)}
              className="btn btn-danger">drop</button>
      <button onClick={() => setColored(prev => !prev)}
              className="btn btn-warning">Change</button>
    </>
  )
}

export default MemoHook;
