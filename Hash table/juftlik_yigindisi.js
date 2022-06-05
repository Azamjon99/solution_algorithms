function twoSum() {
    let nums=[1,2,3,4,5,6,7,8];
    let target = 9;
   const hashArr={};
    for(let i=0;i<nums.length;i++){
        let num= nums[i];
            if(target-num in hashArr ){
                return true;
            }
            hashArr[num]=i;
        }
    return false;
}