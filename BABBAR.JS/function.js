//factory function
 function creatfunction(length,breath){
    let rectangle={
        length,
        breath,
    
      draw:function() 
      {
       console.log('drawing');
      }
      
    };
    return rectangle;
}
  let rectangleobj1=creatfunction(5,6)
  rectangleobj1.color='yello'
  console.log(rectangleobj1.color)