import Header from "./Header";
import Content from "./Content";
import Suma from './Suma';

const Course = ( {course} ) => {
    return (
        <div>
            {course.map((singleCourse) => (
                <div key={singleCourse.id}>
                    <Header name={singleCourse.name}/> 
                    <Content parts={singleCourse.parts} />
                    <Suma parts={singleCourse.parts}/>
                </div>
            ))}
        </div>
    )
}

export default Course;