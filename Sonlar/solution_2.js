let num = 987654321;
let lastDigit;
let reversedNumber = 0;
while(num != 0){
  lastNumber = num%10;
  reversedNumber = reversedNumber*10 +lastNumber
  num = Math.floor(num/10)
}
console.log(reversedNumber)