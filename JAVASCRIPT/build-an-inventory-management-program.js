let inventory=[];
let findProductIndex=(productName)=>{
 return inventory.findIndex(product=> product.name.toLowerCase() === productName.toLowerCase() );
}
const addProduct=(productObj)=>{
  // we passed product name to findIndex for index
   let index= findProductIndex(productObj.name.toLowerCase());

   if(index === -1){
        inventory.push({name:productObj.name.toLowerCase(), quantity:productObj.quantity});
       console.log(`${productObj.name.toLowerCase()} added to inventory`)       
   }
   else{
      inventory[index].quantity += productObj.quantity;
      console.log(`${productObj.name.toLowerCase()} quantity updated`);   
  
   }
}


const removeProduct=(productName,noItems)=>{
  const index=findProductIndex(productName.toLowerCase());
  if(index == -1){
    console.log(`${productName.toLowerCase()} not found`);
  }
  else{
    let remNum=inventory[index].quantity-noItems;
    if(remNum == 0){
      inventory.splice(index,1)[0];
      console.log(`Remaining ${productName.toLowerCase()} pieces: ${remNum}`);
    }
    else if(remNum > 0){
      inventory[index].quantity -= noItems;
      console.log(`Remaining ${productName.toLowerCase()} pieces: ${remNum}`);

    }
    else if(remNum < 0){
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
    }

  }
         
}

