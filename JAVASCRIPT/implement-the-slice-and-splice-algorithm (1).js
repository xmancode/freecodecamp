const frankenSplice=(array1,array2,index)=>{
   let copyA=array1.slice();
   let copyB=array2.slice();
   copyB.splice(index,0,...copyA);
   return copyB;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

