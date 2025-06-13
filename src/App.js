import './App.css';
import Greet from './Greet';

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
    <div className='App'>
      <h1>greeting_cards</h1>
      <Greet name = {myName} age={22} school = {school} address={address}/>
      <Greet name = {herName} age={24} school={herSchool} address= {herAddress}/>
      <Greet name = {hisName} age={28} school={hisSchool} address= {hisAddress}/>
    </div>
  );
}

export default App;
