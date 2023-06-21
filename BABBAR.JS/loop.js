// for(let i=0;i<5;i++){
//     console.log(i)
//             } 


// let x=20;
// do{
//     console.log('halo')
// }
// while(x!=15)
// {
//     console.log('har har Mahadev')
//     x++;
// }            
          
// ADVANCE OF LOOPS:
//THERE ARE TWO TYPE OF LOOPS WHICH IS FOR IN OR FOR OF LOOPS:LETS SEE ITS EXPLANATION WITH CODE:
// let village={
//     population:10039,
//     location:23.453,
//     Nameofvillage:'mirzapur',
//     greed(){
//         return console.log('namaskaar')
//     }
// };
// for(let key in village)
// console.log(village[key]);


// for of loop in javascript is only applicable for reference VARIABLE:\
//github password =Ajaymalviya@2003
//
let hero={
    Name:'hritik',
    age:38,
    Occupasion:'styling',
};
let zero={};
for (let key in hero)
{
    zero[key]=hero[key]
}
console.log(zero)
hero.age++;
console.log(zero);
