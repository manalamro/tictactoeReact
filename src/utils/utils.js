//file for functions.

 const evaluate=(cells)=> {
    // Winner in rows
    if (cells[0] !== "" && cells[0] === cells[1] && cells[1] === cells[2]) {
        return cells[0];
    }
    if (cells[3] !== "" && cells[3] === cells[4] && cells[4] === cells[5]) {
        return cells[3];
    }
    if (cells[6] !== "" && cells[6] === cells[7] && cells[7] === cells[8]) {
        return cells[6];
    }

    // winner in columns
    if (cells[0] !== "" && cells[0] === cells[3] && cells[3] === cells[6]) {
        return cells[0];
    }
    if (cells[1] !== "" && cells[1] === cells[4] && cells[4] === cells[7]) {
        return cells[1];
    }
    if (cells[2] !== "" && cells[2] === cells[5] && cells[5] === cells[8]) {
        return cells[2];
    }

    // winner in diagnoal
    if (cells[0] !== "" && cells[0] === cells[4] && cells[4] === cells[8]) {
        return cells[0];
    }
    if (cells[2] !== "" && cells[2] === cells[4] && cells[4] === cells[6]) {
        return cells[2];
    }

    // if there is an empty cell, then return no winner yet
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === "") return undefined;
    }

    return "draw";
}
export default evaluate;
