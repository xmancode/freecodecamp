const truncateString=(trunword,num)=>{
 let lengthTrun=trunword.length;

  if(lengthTrun > num){
     return trunword.slice(0,num)+"..." ;
  }
  else{
    return trunword;
  }

}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

console.log(truncateString("A-", 1));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));

