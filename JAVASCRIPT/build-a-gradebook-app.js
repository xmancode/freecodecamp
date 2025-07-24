const getAverage=(testScores)=>{
  let avg=0;
// for finding average should take each element ,so use for of .
   for(let score of testScores){
     avg+=score;
   }
   return avg/testScores.length;
}
const getGrade=(studScores)=>{
     if(studScores > 99){
       return "A+";
     }
     else if(studScores <= 99 && studScores >= 90){
       return "A";
     }
     else if(studScores <= 89 && studScores >= 80){
       return "B";
     }
     else if(studScores <= 79 && studScores >= 70){
       return "C";
     }
     else if(studScores <= 69 && studScores >= 60){
       return "D";
     }
     else if(studScores <= 59){
       return "F";
     }
}
const hasPassingGrade=(scores)=>{
  let grade=getGrade(scores);
  if(grade=="A+" || grade=="A"||grade=="B"||grade=="C"||grade=="D"){
    return true;
  }
  else{
    return false;
  }
}
const studentMsg=(classScores,studScore)=>{
  let classAvg=getAverage(classScores);
  let grade=getGrade(studScore);
  let studResult=hasPassingGrade(studScore);
  if(studResult){
    return `Class average: ${classAvg}. Your grade: ${grade}. You passed the course.`;
  }
  else{
    return `Class average: ${classAvg}. Your grade: ${grade}. You failed the course.`;
  }
}

