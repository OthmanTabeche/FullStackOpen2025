/*
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.name} {props.exercice} </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercice={props.parts[0].exercice} />
      <Part name={props.parts[1].name} exercice={props.parts[1].exercice} />
      <Part name={props.parts[2].name} exercice={props.parts[2].exercice} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.parts[0].exercice + props.parts[1].exercice + props.parts[2].exercice}</p>
    </div>
  )
}
*/

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1> {course} </h1>
      <p> {part1.name} {part1.exercises} </p>
      <p> {part2.name} {part2.exercises} </p>
      <p> {part3.name} {part3.exercises} </p>
    </div>
  )
}

export default App