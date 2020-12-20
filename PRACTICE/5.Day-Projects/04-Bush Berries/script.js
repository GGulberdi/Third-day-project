/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/

 let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
 let bushBerryColours2 = ["pink", "pink", "pink", "pink"]



const result = bushBerryColours1.filter(function (value)
{  return (value !=='pink')  
})


console.log(`This berries are ${result} they are not eatable.`);

const result1 = bushBerryColours2.filter(function (value)
{  return (value ==='pink')  
})


console.log(`This berries are ${result1[0]} berries, so you can eat them.`);