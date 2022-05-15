// use dict for storing

// records = {
//   words: array of index
// }

// cursor to check around

// ["E", "A", "R", "A"],
// ["N", "L", "E", "C"],
// ["I", "A", "I", "S"],
// ["B", "Y", "O", "R"]

// CSR


export function checkWord(board: string[][], word: string): boolean {


  const dict = {};
  const letterList = word.split('')

  if (board.length == 0) {
    return false
  }
  // build dict

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {

      const letter = board[i][j]
      const index = [i, j]

      if (letter in dict) {
        dict[letter] = [...dict[letter], index]
      } else {
        dict[letter] = [index]
      }
    }
  }




  let result = false

  for (let letterIndex = 0; letterIndex < letterList.length; letterIndex++) {
    recursive(letterList[letterIndex], dict, [], letterList.length)
  }

  // wordIndex.forEach(element => {
  //   console.log(board[element[0]][element[1]]);
  // });


  return result


}

function recursive(letter, dict, result, targetLength) {
  console.log(result);

  // get index from dict
  for (let index = 0; index < dict[letter].length; index++) {
    if (result.length > 0) {
      const isWithinRadius = isValidMovement(result[index - 1], dict[letter][index])
      if (isWithinRadius) {
        result.push(dict[letter][index])
        if (result.length == targetLength) {
          return true
        }
      }
    } else {
      result.push(dict[letter][index])
    }
    return recursive(letter, dict, result, targetLength)
  }
}




export function checkWordOld(board: string[][], word: string): boolean {

  if (board.length == 0) {
    return false
  }

  let dict = {}

  const wordArray = word.split('')

  let previousLetterIndexOnBoard: [number, number] | [] = []

  for (let letterIndex = 0; letterIndex < wordArray.length; letterIndex++) {

    const letter = wordArray[letterIndex]

    const index = getLetterIndex(board, letter)


    if (!index) {
      //current letter didn't exist in board
      return false
    }


    // need to check if current index within movement rules from previous

    if (previousLetterIndexOnBoard != []) {

      const isValid = isValidMovement(previousLetterIndexOnBoard, index)
      // need to handle duplication and then try again 
      // could try build approach instead of find
      // construct dict for quick head search 

      // find next word index if within radius proceed to next word, if there is duplication need to retry within new radius duplication, if all the words can be build without collusion it consider valid.
    }

    const isCollide = checkIfCollide();

    // if collide need recrusive find another way

    if (!isCollide) {
      if (dict[letter] && dict[letter].length > 0) {
        dict[letter] = [...dict[letter], index]
      } else {
        dict[letter] = [index]
      }
    }

    previousLetterIndexOnBoard = index



  }

  return false;
}

function isValidMovement(previousLetterIndexOnBoard: [number, number] | [], index: [number, number],) {

  console.log(JSON.stringify(previousLetterIndexOnBoard), JSON.stringify(index));

  let validRadius = []

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      validRadius.push([index[0] - 1 + i, index[1] - 1 + j])
    }
  }

  return validRadius.find((item) => JSON.stringify(item) === JSON.stringify(previousLetterIndexOnBoard)) ? true : false
}


function checkIfCollide(): boolean {



  return false;

}

function getLetterIndex(board: string[][], letter: string): [number, number] | null {


  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == letter) {
        return [i, j]
      }
    }
  }
  return null
}