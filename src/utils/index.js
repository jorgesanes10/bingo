export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBoardColumn(min, max) {
  const nums = [];
  
  while (true) {
    if (nums.length === 5) {
      break;
    }

    const num = generateRandomNumber(min, max);

    if (!nums.find(item => item === num)) {
      nums.push(num);
    }
  }

  return nums.sort((a, b) => a - b);
}

export default function generateBoard() {
  return [
    generateBoardColumn(1, 15),
    generateBoardColumn(16, 30),
    generateBoardColumn(31, 45),
    generateBoardColumn(46, 60),
    generateBoardColumn(60, 75),
  ]
}
