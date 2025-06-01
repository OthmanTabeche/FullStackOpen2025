import { useState } from 'react'

const Statistics = ({good, neutral, bad, average, positive}) => {

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <h2>Statics</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive" value={positive.toFixed(2)}/>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
  return (
    <p> {text}: {value} </p>
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
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
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