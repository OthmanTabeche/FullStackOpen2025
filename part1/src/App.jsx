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

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {name: 'Fundamentals of React', exercice: 10},
    {name: 'Using props to pass data', exercice: 7},
    {name: 'State of a component', exercice: 14}
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App