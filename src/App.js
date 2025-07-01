import './App.css';
import Greet from './Greet';
import { Goal } from './goal/Goal';
import { Garage } from './Garage/garage';
import { MyForm } from './Form/myForm';

function App() {
  const myName= "Nanjego Afuwa"
  const age= 22
  const school = "WITI";
  const address = "Kamwokya";

  const herName= "Birungi Afua"
  const herAge= 24
  const herSchool = "WITU";
  const herAddress = "Kasese";

  const hisName= "Atom Mark"
  const hisAge= 28
  const hisSchool = "WIT";
  const hisAddress = "Namugongo";



  return (
    <div>
      <div className='App'>
        <h1>greeting_cards</h1>
        <Greet name = {myName} age={22} school = {school} address={address}/>
        <Greet name = {herName} age={24} school={herSchool} address= {herAddress}/>
        <Greet name = {hisName} age={28} school={hisSchool} address= {hisAddress}/>
      </div>

      <div className='App'>
        <h1>Goal options</h1>
       <Goal isGoal = {false}/>
       <Goal isGoal = {true}/>
      </div>

      <div className='App'>
        <Garage/>
      </div>
       
      <div className='App'>
        <h1>My Form</h1>
       <MyForm/>
      </div>
  



      
    </div>
   
  );
   
}

export default App;
