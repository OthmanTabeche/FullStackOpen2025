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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1> {course} </h1>
      <p> {parts[0].name} {parts[0]. exercises} </p>
      <p> {parts[1].name} {parts[1]. exercises} </p>
      <p> {parts[2].name} {parts[2]. exercises} </p>
    </div>
  )
}

export default App