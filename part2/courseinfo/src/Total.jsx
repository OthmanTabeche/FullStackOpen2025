function Total ({course}) {
    const total = course.parts.reduce((acc, obj) => acc + obj.exercises, 0);
    
    return (
        <div>
            {total}
        </div>
    )
}

export default Total;