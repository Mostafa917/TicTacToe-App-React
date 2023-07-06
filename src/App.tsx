import { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  let [count, setCount] = useState(0);
  const [reload, setReload] = useState(0);
  const onButtonClick = () => {
    setReload((key) => key + 1);
    setGameOver(false);
    setXList([]);
    setOList([]);
  };
  function handleMoveCount() {
    setCount(count + 1);
  }
  let [player, setPlayer] = useState("");
  let [gameOver, setGameOver] = useState(false);
  function handleWinner(player: string) {
    setPlayer(player);
    setGameOver(true);
  }
  const [xList, setXList] = useState<any[]>([]);
  const [oList, setOList] = useState<any[]>([]);
  const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  function insertList(squareNumber: number, listType: string) {
    listType == "X"
      ? setXList((xList) => [...xList, squareNumber])
      : setOList((oList) => [...oList, squareNumber]);
  }

  useEffect(() => {
    checkScore("X", xList);
  }, [xList]);
  useEffect(() => {
    checkScore("O", oList);
  }, [oList]);

  function checkScore(player: string, list: any) {
    let counter = 0;
    for (let i = 0; i < winList.length; i++) {
      if (counter == 3) {
        break;
      } else {
        counter = 0;
      }

      for (let j = 0; j < list.length; j++) {
        if (winList[i].includes(list[j])) {
          counter++;
        }
        if (counter == 3) {
          break;
        }
      }
    }
    if (counter == 3) {
      handleWinner(player);
    }
  }
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div>
        <h2 className="text-white text-center titleClass my-5 bg-secondary fw-bold">
          Tic Tac Toe
        </h2>
      </div>
      <div className="text-center">
        <Square
          key={reload}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[0]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />

        <Square
          key={reload + squares[1] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[1]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
        <Square
          key={reload + squares[2] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[2]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
      </div>
      <div className="text-center">
        <Square
          key={reload + squares[3] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[3]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
        <Square
          key={reload + squares[4] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[4]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
        <Square
          key={reload + squares[5] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[5]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
      </div>
      <div className="text-center">
        <Square
          key={reload + squares[6] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[6]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
        <Square
          key={reload + squares[7] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[7]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
        <Square
          key={reload + squares[8] * 2}
          moveCount={count}
          setMoveCounter={handleMoveCount}
          squareNum={squares[8]}
          addToList={insertList}
          gameOverStatus={gameOver}
        />
      </div>
      <div className="text-center my-3">
        {gameOver && (
          <h4 className="text-white">Game Over player {player} has Won</h4>
        )}
      </div>
      <div className="text-center">
        <button
          className="text-white btn btn-secondary"
          onClick={onButtonClick}
        >
          Start/Restart Game
        </button>
      </div>
    </>
  );
}

export default App;
