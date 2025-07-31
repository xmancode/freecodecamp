

function confirmEnding(string1,string2){
     let leng1=string1.length;
     let leng2=string2.length;
     let index=leng1-leng2;
     let compString=string1.slice(index);
     if(compString==string2){
       return true;
     }
     else {
       return false;
     }
}
console.log(confirmEnding("hellof","of"));



