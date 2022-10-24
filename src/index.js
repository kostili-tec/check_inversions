import "./styles.css";

const numberArr = [...Array(9).keys()];
const numberArrEven = [...Array(16).keys()];

const testArr = [1, 0, 3, 4, 5, 6, 7];

// evenSizeBoard(numberArr);
oddSizeBoard(numberArrEven);

// console.log('checkInversions(testArr)', checkInversions(testArr))

// console.log(numberArr);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createNavArr(array) {
  const navArr = array.reduce(
    (acc, item) => {
      if (acc[acc.length - 1].length === Math.sqrt(array.length)) {
        acc.push([]);
      }
      acc[acc.length - 1].push(item);
      return acc;
    },
    [[]]
  );
  return navArr;
}

function checkInversions(array) {
  console.log("array", array);
  let countInvers = 0;
  let nullElementRow = 0;
  const sizeOfBoard = Math.sqrt(array.length);
  if (sizeOfBoard % 2 !== 0) {
    console.log("нечетн");
    for (let i = 0; i < array.length; i++) {
      let stopper = i + 1;
      while (stopper < array.length) {
        if (array[i] === 0) {
          stopper++;
          break;
        }
        if (array[i] > array[stopper] && array[stopper] !== 0) {
          countInvers++;
        }
        stopper++;
      }
    }
  }
  if (sizeOfBoard % 2 === 0) {
    console.log("четн");
    for (let i = 0; i < array.length; i++) {
      let stopper = i + 1;
      while (stopper < array.length) {
        if (array[i] === 0) {
          const maxtrixArr = createNavArr(array);
          console.log("maxtrix", array[i], i);
          maxtrixArr.find((arr, ind) => {
            if (arr.includes(array[i])) {
              console.log("ind", ind);
              nullElementRow = ind;
            }
          });
          console.log("nullElementRow", nullElementRow);
          stopper++;
          break;
        }
        if (array[i] > array[stopper] && array[stopper] !== 0) {
          countInvers++;
        }
        stopper++;
      }
    }
  }
  if (array === undefined || array.length <= 1) {
    throw new Error("wrong array!");
  }
  return countInvers + nullElementRow;
}

function evenSizeBoard(array) {
  console.log("recourse");
  const shuffledArr = shuffle(array);
  // const shuffledArr = [...array];
  const inversions = checkInversions(shuffledArr);
  if (inversions % 2 !== 0) {
    evenSizeBoard(array);
  } else {
    console.log("shuffledArr", shuffledArr);
    console.log("inversions", inversions);
  }
}

function oddSizeBoard(array) {
  console.log("oddrecourse");
  const shuffledArr = shuffle(array);
  const inversions = checkInversions(shuffledArr);
  if (inversions % 2 === 0) {
    oddSizeBoard(array);
  } else {
    console.log(shuffledArr);
    console.log(inversions);
  }
}
