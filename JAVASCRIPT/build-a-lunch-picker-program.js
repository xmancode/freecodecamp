** start of script.js **

let lunches=[];
const addLunchToEnd=(lunches,item)=>{
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;

}
const addLunchToStart=(lunches,item)=>{
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}
const removeLastLunch=(lunches)=>{
  if(lunches.length!=0){
    let item=lunches[lunches.length-1];
   lunches.pop();
  console.log(`${item} removed from the end of the lunch menu.`);
  return lunches;
  }
  else{
    console.log("No lunches to remove.");
  }

}

const removeFirstLunch=(lunches)=>{
  if(lunches.length!=0){
    let item=lunches[0];
    lunches.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
    return lunches;
  }
  else{
    console.log("No lunches to remove.");
  }
}
const getRandomLunch=(lunches)=>{
   if(lunches.length!=0){
     let max=lunches.length;
     let randomNum=Math.round(Math.random()*(max-0)+0);
     let randomLunch=lunches[randomNum];
     console.log(`Randomly selected lunch: ${randomLunch}`);
   }
   else{
     console.log("No lunches available.");
   }
}

let showLunchMenu=(lunches)=>{
  if(lunches.length!=0){
    console.log(`Menu items: ${lunches.join(', ')}`)
  }
else{
    console.log("The menu is empty.");
  }

}






** end of script.js **

