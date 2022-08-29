const user = {id: 1, name: 'Gorib Amir', job:'actor'};
//javascript object notetion
const strigniFied = JSON.stringify
console.log(user);
console.log(strigniFied);



const shop = {
    owener:'Alia',
    address:{
        street: 'kochukhet vhut er goli',
        city:'ranbir',
        Country:'bd'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard' ],
    revanue:45000,
    isOpen:true,
    isNew:false,
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObject =JSON.parse(shopJSON);
console.log(shopObject)
