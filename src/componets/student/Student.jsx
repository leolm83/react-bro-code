import PropTypes from 'prop-types'
import style from "./Student.module.css"


function Student(props){
    return(
        <div className={style.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent}</p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student;