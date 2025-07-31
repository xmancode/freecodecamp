

const repeatStringNumTimes=(str,num)=>{
   if(num<=0){
     return "";
   }
   else{
     let temp=str;
     for(let i=1;i<num;i++){
       temp+=str;
     }
     return temp;
   }
    
}
console.log(repeatStringNumTimes("h",1));



