import Part from "./Part";

function Total ({course}) {
    return (
        <div>
            <Part exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

export default Total;