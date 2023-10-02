import React, {useState, useEffect, useRef} from 'react';

function RefHook() {
  const [value, setValue] = useState('initial')
  const rendersCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    prevValue.current = value
  }, [value]);

  useEffect(() => {
    rendersCount.current++
    console.log(inputRef.current)
  });

  // const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Renders: {rendersCount.current}</h1>
      <h2>Previous value: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)}
             value={value}/>
      {/*<button onClick={focus} className="btn btn-success">Focus</button>*/}
    </div>
  )
}

export default RefHook;
