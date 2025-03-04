import Header from "./Header";
import Content from "./Content";
import Suma from './Suma';

const Course = ( {course} ) => {
    return (
        <div>
            <Header name={course.name}/> 
            <Content parts={course.parts} />
            <Suma parts={course.parts}/>
        </div>
    )
}

export default Course;