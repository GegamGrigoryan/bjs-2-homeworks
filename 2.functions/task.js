function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  const sum = 0;
  let avg;

  if (arr == 0) {
    return 0
  }

  max = Math.max(...arr)
  min = Math.min(...arr)

  let getAvg = arr.reduce((acum, number) => {
    return acum + number
  }, 0)
  avg = getAvg / arr.length

  return `min: ${min} ,max: ${max}, avg: ${avg.toFixed(2)}`;
}

function summElementsWorker(...arr) {
  let getSum = arr.reduce((acum, number) => {
    return acum + number
  }, 0)

  return getSum
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  if (arr == 0) {
    return 0
  }

  max = Math.max(...arr)
  min = Math.min(...arr)
  return max - min
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr == 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    }
    if (!(arr[i] % 2 === 0)) {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let evenResult;

  let sumOddElement = 0;
  let countOddElement = 0;
  let oddResult;

  if (arr == 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement++

    }
    if (!(arr[i] % 2 === 0)) {
      sumOddElement += arr[i]
      countOddElement++

    }
  }
  evenResult = sumEvenElement / countEvenElement;
  oddResult = sumOddElement / countOddElement;
  return evenResult || oddResult

}

function makeWork(arr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const funcArr = func(...arr[i]);
    if (maxWorkerResult < funcArr) {
      maxWorkerResult = funcArr;
    }
  }
  return maxWorkerResult
}
