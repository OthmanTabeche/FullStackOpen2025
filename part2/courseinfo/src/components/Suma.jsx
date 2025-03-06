const Suma = ( {parts} ) => {
    const sumExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
            <p><strong>total of {sumExercises} exercice </strong> </p> 
    )
}

export default Suma;