import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  let random = Math.floor(Math.random() * anecdotes.length)
  //console.log(random);

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleChangeAnecdotes = () => {
    setSelected(random)
  }

  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  console.log(votes)
  return (
    <div>
      {anecdotes[selected]}
      <button style={{display:'block', margin:'10px'}} onClick={vote}>vote</button>
      <button style={{display:'block'}} onClick={handleChangeAnecdotes}>next anecdotes</button>
      <h1>Anecdotes with the most votes</h1>
      <p>{anecdotes[mostVotesIndex]}</p>
    </div>
  )
}

export default App