import { useState } from 'react';
import './board.css'
import evaluate from '../../utils/utils';

const Board = (props) => {
  const [cells, setcells] = useState(['', '', '', '', '', '', '', '', '']);
  const [winner, setWinner] = useState(null);


  const cellClick = (index) => {
    if (cells[index] !== "") return;  // If this cell was clicked/played then ignore it
    //cells[index] = turn; //we cant using mutation(change the value of a variable by refrence)
    // to change the value of cell.
    const newCells = [...cells];// using deep copy/clone  way : declear new array called newCells and store the cells aray into it.
    newCells[index] = props.turn;
    setcells(newCells);
    props.setTurn(props.turn === 'X' ? 'O' : 'X');
    const result = evaluate(newCells);
    if (result) {
      setWinner(result);
      if(result==="X"){
       props.setwins( wins =>{ return {...wins,xWins:wins.xWins+1} })

      }

      else if (result === "O"){
       props.setwins( wins =>{ return {...wins,oWins:wins.oWins+1} })
      }


      ;
    }

}

const restart=()=>{
  setcells(['', '', '', '', '', '', '', '', '']);
  setWinner(null);
  props.setTurn('X');
}


  return (
    <div>
      <div className="board">
        {
          cells.map((box, index) =>
            <div key={index}
              className={`cell ${box}`}
              onClick={() => cellClick(index)}
            >
              {box}

            </div>
          )
        }

        {
           winner !== null && <div className="result">
            {winner === 'draw' ? "Draw :-(" : "winner is : " + winner}
            <br/> <button onClick={restart}>Restart!</button>

            </div>
        }

      </div>
    </div>
  );

};

export default Board;