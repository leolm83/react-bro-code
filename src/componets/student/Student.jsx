import PropTypes from 'prop-types'
import style from "./Student.module.css"


function Student(props){
    return(
        <div className={style.student}>
            <p>Name: {props.name?props.name:"empty"} </p>
            <p>Age: {props.age?props.age:"empty"}</p>
            <p>Student: {props.isStudent? "Yes": "No"}</p>
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