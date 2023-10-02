import React, {useEffect, useState} from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value]);
}

function useInput(initValue: string) {
  const [value, setValue] = useState(initValue)

  const onChange = (event) => setValue(event.target.value)
  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const name = useInput('')
  const lastName = useInput('')

  useLogger(name)

  return (
    <div className="container pt-3">
      <input className={'mx-1 rounded shadow'} type="text" {...name.bind}/>
      <input className={'rounded shadow'} type="text" {...lastName.bind}/>
      <button onClick={() => {
        name.clear()
        lastName.clear()
      }} className="btn btn-warning mx-1 py-1 mb-1">Clear</button>
      <hr/>
      <h1>{name.value} {lastName.value}</h1>
    </div>
  )
}

export default App;
