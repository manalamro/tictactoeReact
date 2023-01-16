import { useState } from 'react';
import './App.css';
import Header from './components/header/header.component';
import Board from './components/board/board.component';
function App() {
const [turn, setTurn] = useState('X');
const [wins,setwins]=useState({xWins:parseInt(localStorage.getItem("Xwins"))||0,oWins:parseInt(localStorage.getItem("Owins"))||0})

localStorage.setItem("Xwins",wins.xWins);
localStorage.setItem("Owins",wins.oWins);
let X = localStorage.getItem("Xwins");
let O= localStorage.getItem("Owins");


  return (
    <>
    <Header turn={turn} wins={wins} X={X} O={O}/>
    <Board turn={turn} setTurn={setTurn} setwins={setwins}/>
    </>

  );
}

export default App;
