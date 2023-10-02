import React, {useState} from 'react';

function StateHook() {
  const [counter, setCounter] = useState(initCounterState)
  const [state, setState] = useState({
    title: 'Counter',
    data: Date.now()
  })

  function initCounterState() {
    console.log('mathematics...')
    return Math.trunc(Math.random() * 20)
  }

  function increment() {
    setCounter((prevState) => prevState + 1)
    setCounter(prevState => prevState + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }

  return (
    <div>
      <h1>Counter { counter }</h1>
      <button className={'btn btn-success'} onClick={increment}>Add</button>
      <button className={'btn btn-danger'} onClick={decrement}>Remove</button>
      <button onClick={() => updateTitle()} className={'btn btn-info'}>Update</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default StateHook;
