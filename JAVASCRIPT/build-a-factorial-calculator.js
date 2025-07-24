

const num=5;
const factorialCalculator=(number)=>{
    let result=1;
    if(number<=20 && number>=1){
    for (let i=1;i< number;i++){

     result=result*(i+1);
    }
    }
    else {
      return "enter a valid number";
    }
    return result;
}
const factorial=factorialCalculator(num);
const resultMsg="Factorial of "+num+" is "+factorial;
console.log(resultMsg);



