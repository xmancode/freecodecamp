const maskEmail=(email)=>{
//find index for @ in email
let indexof=email.indexOf("@");
//create hiding star using index-2 because remove two letters before index of @
let maskStar="*".repeat(indexof-2);
//then create new slice for hiding letters
let textForHide=email.slice(1,indexof-1);
// then replace sliced letters with in masked stars
return (email.replace(textForHide,maskStar));
}
let email="apple.pie@example.com";
console.log(maskEmail(email));
email="freecodecamp@example.com";
console.log(maskEmail(email));
email="info@test.dev";
console.log(maskEmail(email));
email="user@domain.org"
console.log(maskEmail(email));

