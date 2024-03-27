function getRandom3DigitNumber() {
  let num = '0123456789'
  let threeDigitNum = ''
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * num.length);
    threeDigitNum += num[randomNum];
  }
  return threeDigitNum;
}

export default getRandom3DigitNumber;