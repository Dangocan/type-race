import logo from './logo.svg';
import './App.css';

let a = `console.log("oi mundo")`;

function App() {
  return (
    <>
      <text>{a}</text>
      <input type="text" onChange={(event)=>{

        if(event.target.value === a.substr(0, event.target.value.length)){
          console.log('certo');
        } else{
          console.log("errado");
        };
      }}></input>
    </>  
  );
}

export default App;
