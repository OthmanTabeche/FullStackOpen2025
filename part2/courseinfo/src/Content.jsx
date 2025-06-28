import Header from "./Header"
import Total from "./Total"

function Content ( {courses} ) {

    return (
        <div>
            {courses.map((course) =>
                <div key={course.id}>
                    <Header course={course} />
                    <ul>
                       {course.parts.map((part) => 
                        <li key={part.id}>
                            {part.name} {part.exercises}
                        </li>
                    )} 
                    </ul>
                    <Total course={course} />
                </div>
            )}
        </div>
    )
}

export default Content