

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile=(name,property)=>{
  let hasContact=false;
  let hasProperty=true;

  let num=contacts.length;
   for(let i=0;i<num;i++){
      if(contacts[i].firstName==name){
         hasContact=true;
         if(contacts[i][property]!=undefined){
            return contacts[i][property];
         }
         else{
            hasProperty=false
           }
        }
     
   }
   if(hasContact==false){
     return "No such contact";
   }
   if(hasProperty==false){
     return "No such property";
   }
}
console.log(lookUpProfile("Akira", "address"));


