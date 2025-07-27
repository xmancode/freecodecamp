

const largestOfAll=(arr)=>{
   let num=arr.length;
   let temp=[];
   let sortted=[];
   
   for(let i=0;i<num;i++){
     
     for(let j=0;j<arr[i].length ;j++)
              temp=arr[i].sort((a,b)=>b-a);
              sortted.push(temp[0]);
        
   }
   return sortted;
}
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


