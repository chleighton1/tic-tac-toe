import { useState } from "react";
import Square from "./Square";
import Reset from "./Reset";
import Modal from "./Modal";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  function resetBoard() {
    setSquares(Array(9).fill(null));
    setModalOpen(false);
    setXIsNext(true);
  }

  function resetScore() {
    setScore({
      x: 0,
      o: 0,
      tie: 0,
    });
  }

  const winner = calculateWinner(squares);
  if (winner && !modalOpen) {
    const newScore = score;
    newScore[winner]++;
    setScore(newScore);
    setModalOpen(true);

    console.log(score);
  }
  let status = xIsNext ? "X" : "O";

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const handleClose = () => setModalOpen(false);

  function handleQuit() {
    resetBoard();
    resetScore();
  }

  function handleNextRound() {
    resetBoard();
  }

  const boxes = squares.map((square, index) => (
    <Square value={square} onSquareClick={() => handleClick(index)} />
  ));
  return (
    <div>
      <Modal
        open={modalOpen}
        onQuit={handleQuit}
        onNextRound={handleNextRound}
        winner={winner}
      />
      <div className="flex items-center justify-between mb-4">
        <div className="w-20">
          <span className="text-light-blue font-black text-3xl ml-1 mr-1">
            X
          </span>
          <span className="text-light-yellow font-black text-3xl">O</span>
        </div>
        <div className="rounded shadow-box text-sm font-semibold text-silver bg-semi-dark-navy w-20 h-8 flex items-center justify-center">
          <span>{status} TURN</span>
        </div>
        <div className="w-20 flex justify-end">
          <button
            onClick={handleQuit}
            className="rounded shadow-box-silver bg-silver outline-none hover:bg-silver-hover text-dark-navy w-8 h-8"
          >
            <Reset className="block m-auto" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 h-full justify-center w-fit">
        {boxes}
      </div>
      {/* SCORE */}
      <div className="flex justify-between">
        <div>
          <p>X</p>
          <p>{score.x}</p>
        </div>
        <div>
          <p>TIES</p>
          <p>{score.tie}</p>
        </div>
        <div>
          <p>O</p>
          <p>{score.o}</p>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  if (!squares.some((element) => element === null)) {
    return "tie";
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
