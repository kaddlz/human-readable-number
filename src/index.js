module.exports = function toReadable(number) {
  let readableNumber = ''
  let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tyNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  if (number.toString().length == 3) {
    readableNumber += numbers[number.toString()[0] - 1] + ' hundred'
    if (number.toString()[1] > 1) {
      readableNumber += ' ' + tyNumbers[number.toString()[1] - 2]
      if (number.toString()[2] != 0) {
        readableNumber += ' ' + numbers[number.toString()[2] - 1]
      } else { return readableNumber }

    } else if (number.toString()[1] == 1) {
      readableNumber += ' ' + teenNumbers[number.toString()[2]]
    } else {
      if (number.toString()[2] != 0) {
        readableNumber += ' ' + numbers[number.toString()[2] - 1]
      } else { return readableNumber }
    }
    return readableNumber
  }

  if (number.toString().length == 2) {
    if (number.toString()[0] != 1) {
      readableNumber += tyNumbers[number.toString()[0] - 2]
      if (number.toString()[1] != 0) {
        readableNumber += ' ' + numbers[number.toString()[1] - 1]
      } else { return readableNumber }
    } else {
      readableNumber += teenNumbers[number.toString()[1]]
    }
    return readableNumber
  }
  if (number.toString().length == 1 && number.toString()[0] != 0) {
    readableNumber += numbers[number.toString()[0] - 1]
  } else {
    readableNumber = 'zero'
  }
  return readableNumber
}
