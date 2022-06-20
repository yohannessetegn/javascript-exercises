const sumAll = function(start) {
        let control = Array.from(arguments);
        let summation=0;
        if (typeof(control[0]) === 'number' && typeof(control[1]) === 'number'){
            if (control[0] > 0 && control[1] > 0){
                if (control[0] < control[1]){
                    for(let i=control[0]; i<=control[1]; i++){
                        summation += i;
                      }
                }
                else{
                    for(let i=control[1]; i<=control[0]; i++){
                        summation += i;
                      }
                }
               
                return summation;
            }
            else{
                return ("ERROR")
            }
        }
        else{
            return ("ERROR")
        }
       
      };

// Do not edit below this line
module.exports = sumAll;
