function reverseRecursive(word){
  
    if(word.length <= 1){
        return word;
    }
  
    else {
        return word.charAt(word.length - 1) + reverseRecursive(word.substring(0, word.length - 1));
    }
}