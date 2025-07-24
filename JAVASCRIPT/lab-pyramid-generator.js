const pyramid=(str,num,bool)=>{

  if(bool){
   let result="\n";
  for(let i=0;i<num;i++){
   let row=num-1-i;
    let numChar=row*2+1;
    let spac=" ".repeat(num-1-row);
    result+=spac+str.repeat(numChar)+"\n";
  }
  return result;
   }
   else{
   let result="\n";
  for(let i=0;i<num;i++){
   let row=i;
    let char=str.repeat(row*2+1);
    let spac=" ".repeat(num-1-row);
    result+=spac+char+"\n";
  }
   return result;
   }
}
pyramid("o", 4, false);

