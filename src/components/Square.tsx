import { useState } from "react";
import "../App.css";

interface Props {
  moveCount: number;
  squareNum: number;
  gameOverStatus: boolean;
  setMoveCounter: () => void;
  addToList: (squareNum: number, listType: string) => void;
}
const Square = ({
  moveCount,
  setMoveCounter,
  squareNum,
  addToList,
  gameOverStatus,
}: Props) => {
  const [value, setValue] = useState("D");
  const [visibilityStatus, setVisibleStatus] = useState("invisible");

  function handleClick() {
    if (!gameOverStatus) {
      value == "D" ? setMoveCounter() : null;
      if (moveCount % 2 == 0) {
        visibilityStatus == "invisible" ? setVisibleStatus("visible") : null;
        if (value == "D") {
          addToList(squareNum, "X");
          setValue("X");
        }
      } else {
        visibilityStatus == "invisible" ? setVisibleStatus("visible") : null;
        if (value == "D") {
          addToList(squareNum, "O");
          setValue("O");
        }
      }
    }
  }
  return (
    <button
      className="bg-secondary myBtn border border-1"
      onClick={handleClick}
    >
      <p className={`text-white fs-1 bg-secondary ${visibilityStatus}`}>
        {value}
      </p>
    </button>
  );
};

export default Square;
