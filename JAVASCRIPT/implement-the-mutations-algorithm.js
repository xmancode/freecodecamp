const mutation=(arr)=>{
  let a=arr[0].toLowerCase();
  let b=arr[1].toLowerCase();
  let i=true;
  for(const char of b){
    if(a.includes(char)){
      //if characture there return true and compare with i
      i=(i && true);

    }
    // if characture not there return false and compare with i;
    else{
      i=(i && false)
    }
  }
  // if all char are occur in first arrary logical opration result must be true so return true  i==true
    if(i==true){
    return true;
  }
  else{
    return false;
  }

}
console.log(mutation(["Tiger", "Zebra"]));

