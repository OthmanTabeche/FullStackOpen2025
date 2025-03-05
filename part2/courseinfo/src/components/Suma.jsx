const Suma = ( {parts} ) => {
    const sumExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div>
            {sumExercises}
        </div>
    )
}

export default Suma;