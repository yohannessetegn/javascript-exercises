const repeatString = function(string, num) {
    let storage = ""// creating a string variable 
    if (num < 0){
        storage = "ERROR";
    }
    else{
        
        for(let i = 0; i<num; i++){
            storage += string;
        }
    }
    return(storage);
};

// Do not edit below this line
module.exports = repeatString;







