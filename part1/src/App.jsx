import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handelClickGood = () =>  setGood((prev) => prev + 1);
  const handelClickNeutral = () => setNeutral((prev) => prev + 1);
  const handelClickBad = () => setBad((prev) => prev + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handelClickGood}>good</button>
      <button onClick={handelClickNeutral}>neutral</button>
      <button onClick={handelClickBad}>bad</button>

      <h1>statics</h1>
      <p>good: {good} </p>
      <p>neutral: {neutral} </p>
      <p>bad: {bad} </p>
    </div>
  )
}

export default App