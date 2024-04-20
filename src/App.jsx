import Button from "./componets/button/Button";
import Card from "./componets/card/Card";
import Food from "./componets/food/Food";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import MainTitle from "./componets/main_title/MainTitle";
import Student from "./componets/student/Student";
function App() {
  return (
    <>
    <Header/>
    <MainTitle></MainTitle>
    <Student name="SpongeBob" age={30} isStudent={true}/>
    <Student name= "Patrick" age={42} isStudent={false}/>
    <h1>Hello!</h1>
    <Button></Button>
    <Card></Card>
    <Card></Card>
    <Food/>
    <Footer/>
    </>
  )
}

export default App;
