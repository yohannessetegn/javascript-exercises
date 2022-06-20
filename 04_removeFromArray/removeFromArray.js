const removeFromArray = function(newArray, otherThing) {
    for(let i=0; i < newArray.length; i++){
        let ok;
        if(newArray[i] === otherThing){
            ok = newArray.splice(i,1);
        }
        else{

        }
        return ok;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
