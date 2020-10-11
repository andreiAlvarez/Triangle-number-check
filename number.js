// Solution 1

function isTriangleNumber(number) {
  if (number === 0 || number === 1) {
    return true;
  }
  let c = 0;
  let newNum = 2 * number;
  for(let i = 1; i < newNum / 2; i++){
    if (i * (i + 1) === newNum) {
      c = 1;
      break;
    }
  }

  return c === 1? true: false; 
}

// solution 2

const isTriangleNumber = number => Math.sqrt(1+8*number)%1==0;
