function mergetoArays(params) {
    let arr1 = [1,3];
let arr2 = [2,5];
let current = 0;
let index1= 0;
let index2= 0;
let newArray = []

while(current < (arr1.length + arr2.length )){
    if(arr1.length>index1&&(arr1[index1]<arr2[index2]||index2>=arr2.length)){
        newArray[current]= arr1[index1];
        index1++
    }
    else{
        newArray[current]= arr2[index2];
        index2++
    }
    current++
}
return newArray;
}