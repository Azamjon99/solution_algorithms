var findQavs = function(q) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < q.length; i ++){
        if(q[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[q[i]]){
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0 ? true : false;
};