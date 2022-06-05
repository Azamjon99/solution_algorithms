let length = word.length;

for(let i = 0; i < length / 2; i++){
      if (word[i] !== word[length - 1 - i]) {  
            console.log(false)
        }  
}
console.log(true)
 