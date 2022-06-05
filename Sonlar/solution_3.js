let num = 12345678
let bin = (num % 2).toString();
 for(; num>1;){
     num = parseInt(num / 2);
     bin = num % 2 + bin
 }
console.log(bin);