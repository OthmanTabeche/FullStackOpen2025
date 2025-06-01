import { useState } from 'react'

const Statistics = ({good, neutral, bad, average, positive}) => {

  return (
    <div>
      <h2>Statics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good + neutral + bad}</p>
      <p>average: {average.toFixed(2)}</p>
      <p>positive: {positive.toFixed(2)}%</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
     setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  // Calculate the average score
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total

  // Calculate the positive score
  const positive = total === 0 ? 0 : (good / total) * 100
  
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App