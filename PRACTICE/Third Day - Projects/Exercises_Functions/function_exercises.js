//1
// function fullName(){
//    return 'Gulberdiyeva Gulsenem'

// }

// console.log(fullName());

//2
// function fullName(firstName, lastName){
//     return firstName + ' ' + lastName
 
//  }
 
//  console.log(fullName("Gulsenem", "Gulberdiyeva"));

//3
// function addNumbers(num1, num2){
//     return num1 + num2
 
//  }
 
//  console.log(addNumbers(256, 100));

//4
// function areaOfRectangle(length, width){
//     return length * width
 
//  }
 
//  console.log(areaOfRectangle(100, 50));

//5
// function perimeretOfRectangle(length, width){
//     return 2*(length + width)
 
//  }
 
//  console.log(perimeretOfRectangle(100, 50));
//6
// function volumeOfRectangle(length, width, height){
//     return length * width * height
 
//  }
 
//  console.log(volumeOfRectangle(100, 50, 30));
 //7
//  function areaOfCircle(p, r){
//     return p * r * r
 
//  }
 
//  console.log(areaOfCircle(100, 50));

//8
// function circumOfCircle(p, r){
//     return 2*p*r
 
//  }
 
//  console.log(circumOfCircle(100, 50));

//9
// function density(mass, volume){
//     return mass/volume
 
//  }
 
//  console.log(density(10, 50));

//10
// function speed(distance, time){
//     return distance/time
 
//  }
 
//  console.log(speed(10, 2));

 //11

//  function weight(mass, gravity){
//     return mass*gravity
 
//  }
 
//  console.log(weight(10, 5));

//12

// function convertCelciusToFahrenheit(celsuis){
//     return (celsuis*9/5)+32
 
//  }
 
//  console.log(convertCelciusToFahrenheit(10));

//13


function checkSeason(month){
   
    if (month === 'march' || 'april' || 'may') return 'Spring'
    else if (month === 'june' || 'july' || 'august') return 'Summer'
    else if (month === 'september' || 'october' || 'november') return 'Fall'
    else if  (month === 'december' || 'january' || 'february') return 'gysh'
    else  return 'Not a season' 
 }
 
 console.log(checkSeason("september"));

 function checkSeason(month){
     switch(month){
     case (month ==='march' || month === 'april' ||month === 'may'):
     return 'Spring';
     break;
     case ('june' || 'july' || 'august'):
     return 'Summer';
     break;
     case ('september' || 'october' || 'november'):
     return 'Fall';
     break;
     case ('december' || 'november' || 'january'):
     return 'Winter';
     break;
     default: return 'Not a month'}
 }

 console.log(checkSeason("may"))
 

 //14

//  n1 = Max
//  n2 = Gul
//  n3 = Aya 
 function findMax(n1=0,n2=0,n3=0){
     if (n1 > n2 || n1 > n3 || n1 < n2 || n1 < n3){
         return 'Max won'
     }else if (n2 > n1 || n2 > n3 || n2 < n1 || n2 < n3){
         return 'Gul won'} 
    else if (n3 > n2 || n3 > n1 || n3 < n2 || n1 < n1){
        return 'Aya won'
        }
        else return 'tie' 
     }
 console.log(findMax(0,200,100));


 //18
// function solveLinEquation(a,x,b){
//     return a*x+b 
//  }
 
//  console.log(solveLinEquation(7,2,1));

//19
function solveQuadEquation(a,x,b,c){
    return ((a*x)*2+(b*x)+c == 0) 
 }
 
 console.log(solveQuadEquation(7,2,1,1));
