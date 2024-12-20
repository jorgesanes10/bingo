import { useRef, useState } from 'react';
import generateBoard, { generateRandomNumber } from '../utils';

export default function BingoBoard() {
  const [pickedNumbers, setPickedNumbers] = useState([]);

  const boardNumbers = useRef(generateBoard());

  const renderBoard = () => {
    const columns = [];

    boardNumbers.current.forEach((column, index) => {
      columns.push(
        <div key={index}>
          {column.map((number) => (
            <div
              className={`number-container ${pickedNumbers.find((num) => num === number) ? 'selected' : ''}`}
              key={number}
            >
              <span>{number}</span>
            </div>
          ))}
        </div>,
      );
    });

    return columns;
  };

  const generateNumber = () => {
    const newNumber = generateRandomNumber(1, 75);

    if (!pickedNumbers.find((num) => num === newNumber)) {
      setPickedNumbers((prevState) => [...prevState, newNumber]);
    } else {
      return generateNumber();
    }
  };

  const handleButtonClick = () => {
    generateNumber();
  };

  console.log(pickedNumbers);

  return (
    <div>
      <p className="picked-number">
        {pickedNumbers[pickedNumbers.length - 1] || '?'}
      </p>
      <button onClick={handleButtonClick}>Pick number</button>
      <div className="bingo-board">{renderBoard()}</div>
    </div>
  );
}
