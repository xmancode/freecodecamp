

function findLongestWordLength(word){
    let value=0;
    let tempArray=word.split(" ");
    for(let i=0;i<tempArray.length;i++){
      
      if(tempArray[i].length>value){
        value=tempArray[i].length
      }
    }
    return value;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



