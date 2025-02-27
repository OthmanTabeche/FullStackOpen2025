import { useState } from 'react'

const Statistics = ( {good, neutral, bad, all, average, positive} ) => {
    
  if (all === 0) {
    return <p>No feedback given</p>
  }
  
  return (
      <div>
        <h1>statics</h1>
        <p>good: {good} </p>
        <p>neutral: {neutral} </p>
        <p>bad: {bad} </p>
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive}</p>
      </div>
    )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handelClickGood = () =>  setGood((prev) => prev + 1);
  const handelClickNeutral = () => setNeutral((prev) => prev + 1);
  const handelClickBad = () => setBad((prev) => prev + 1);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handelClickGood}>good</button>
      <button onClick={handelClickNeutral}>neutral</button>
      <button onClick={handelClickBad}>bad</button>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App