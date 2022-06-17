const reverseString = function(string) {
    let arrayTemp = string.split(" ");//converts string to array when finds a space
    for(let i = 0; i<arrayTemp.length; i++){
        arrayTemp[i]=sortingReversely(arrayTemp[i]);
    }
    sortTheArray(arrayTemp);
    return arrayTemp.join(" ");
  };
  
  
  function sortingReversely(a){
    return (a.split('').reverse().join(''));//reverses the string 
  }
  
  function sortTheArray(a){
    if (a.length % 2 == 0){
      let last = a.length-1;
      for(let i=0; i< a.length/2; i++, last--){
        let temp = a[i];
        a[i] = a[last];
        a[last]  = temp;
      }
    
    }
    else{
      let last = a.length-1;
      for(let i=0; i< (a.length - 1)/2; i++, last--){
        let temp = a[i];
        a[i] = a[last];
        a[last]  = temp;
    }
    }
    return a;
  }
  console.log(reverseString('hello there'));
  
  
// Do not edit below this line
module.exports = reverseString;
