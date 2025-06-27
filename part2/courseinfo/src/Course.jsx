import Header from "./Header";
import Content from "./Content";

function Course ({course}) {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

export default Course;