let school=[
    {Name:'xyz',area:'indore',from:2011},
    {Name:'abs',area:'bhopal',from:1990}];
    console.log(school);
   // console.log(school.indexof('indore'))
   // console.log(school.include('indore'))
   school.find(function (school){
    return school.area=='indore'
   })
   console.log(school)
  
  
   school.find(school=>school.area=='indore');
   