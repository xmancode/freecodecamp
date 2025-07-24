** start of script.js **


let questions=[
  {category:"sports",
question:"How many players are play in one football team?",
choices:["8","9","11"],
answer:"11"
},{
   category:"sciene",
   question:"how many planets are in our planet system?",
   choices:["8","9","10"],
   answer:"8"
},{
   category:"maths",
   question:"what is the value of 8 square ? ",
   choices:["63","64","88"],
   answer:"64"
},{
  category:"Technology",
   question:"who is the founder of apple company ?",
   choices:["sundar pichai","elon musk","stev jobs"],
   answer:"stev jobs"
},{
  category:"politics",
   question:"who known as father of india ? ",
   choices:["gandhi","ambedkar","nehru"],
   answer:"gandhi"
}
];
//create random question
const getRandomQuestion=(questions)=>{
   let randIndex=Math.floor(Math.random()*questions.length)
   
  return questions[randIndex];
}
//using random number from 3
const getRandomComputerChoice=(choices) => {
  let randValue=Math.floor(Math.random()*3);
  return choices[randValue];
}
//asign values to variable because we need to pass as parameter
let selected=getRandomQuestion(questions);
let choices=getRandomComputerChoice(selected.choices);


//checking results
const getResults=(selected,choices) =>{

 if(choices==selected.answer){
   return "The computer's choice is correct!";
 }
 else{
   return "The computer's choice is wrong. The correct answer is: "+selected.answer ;
 }

}


** end of script.js **

