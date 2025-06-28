function Total ({course}) {

    const total = course.parts.reduce((acc, obj) => acc + obj.exercises, 0)

    return (
        <div>
            <strong>Total of {total} exercises </strong>
        </div>
    )
}

export default Total;