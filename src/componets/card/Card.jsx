import profilePicture from "../../assets/react.svg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePicture}></img>
            <h2 className="card-title" >Leolm</h2>
            <p className="card-text">Software Engineer</p>
        </div>
    );
}
export default Card;