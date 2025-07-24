const sumAll=(arr)=>{
  let min=Math.min(...arr);
  let max=Math.max(...arr);
  let sum=0;
  // add value into sum upto max, so initialise i as min value
  for(let i=min;i<=max;i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll([1,4]));

