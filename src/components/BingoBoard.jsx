import { useRef, useState } from "react"
import generateBoard, { generateRandomNumber } from "../utils"

export default function BingoBoard() {
    const [pickedNumber, setPickedNumber] = useState(undefined);
    const [pickedNumbers, setPickedNumbers] = useState([]);
    
    const boardNumbers = useRef(generateBoard());

    const renderBoard = () => {
        const columns = [];

        boardNumbers.current.forEach((column, index) => {
            columns.push(<div key={index}>{column.map(number => <span className={pickedNumbers.find(num => num === number) ? 'selected' : ''} key={number}>{number}</span>)}</div>)
        })

        return columns;
    }

    const generateNumber = () => {
        const newNumber = generateRandomNumber(1, 75);
        setPickedNumber(newNumber);

        if (!pickedNumbers.find(num => num === newNumber)) {
            setPickedNumbers(prevState => [...prevState, newNumber])
        } else {
            return generateNumber();
        }
    }

    const handleButtonClick = () => {
        generateNumber();
    }

    console.log(pickedNumbers);
    
    
    return <div>
        <p className="picked-number">{pickedNumber || '?'}</p>
        <button onClick={handleButtonClick}>Pick number</button>
        <div className="bingo-board">
        {renderBoard()}
    </div>
    </div>
}