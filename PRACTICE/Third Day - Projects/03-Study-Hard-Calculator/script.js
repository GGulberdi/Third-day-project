
// let monday = 3;
// let tuesday = 3;
// let wednesday = 3;
// let thursday = 3;
// let friday = 1;
// let saturday = 5;
// let sunday = 5;

// //1 2
// let studyHours;
// function getStudyHours(day){
//  switch(day.toLowerCase()){
//    case "monday":
//      studyHours=8;
//      break;
//   case "tuesday" || "wednesday":
//      studyHours=7;
//      break;
//   case "thursday":
//     studyHours=8;
//     break;
//   case "friday" || "saturday":
//     studyHours=4;
//     break;
//   case "sunday":
//     studyHours=6
//     break;
//     default: "Please enter correct day!"
//       break;
//  }
//     return studyHours;
//  }
//  //3
//  console.log(getStudyHours(prompt("enter")));




 function getStudyHours(day){
let studyHours;
    switch(day){
        case "sunday":  
            studyHours=5;
        break
        case "monday":
            studyHours=3;
        break
        case "tuesday":
            studyHours=3;
        break
        case "wednesday":
            studyHours=3;
        break
        case "thursday":
            studyHours=3;
        break
        case "friday":
            studyHours=1;
        break
        case "saturday":
            studyHours=5;
        break
    }
        return studyHours
 }

 console.log(getStudyHours(saturday));

 // getting total hours
//  function getActualStudyHours(){
//      getStudyHours("sunday")+ getStudyHours("monday")+ getStudyHours("tuesday")+getStudyHours("wednesday")+getStudyHours("thursday")+getStudyHours("friday")+ getStudyHours("saturday") 
 
//     }
//   console.log(getActualStudyHours);

//   function getActualStudyHours(){
//     let total = getStudyHours("monday")+getStudyHours("tuesday")+getStudyHours("wednesday")+getStudyHours("thursday")+getStudyHours("friday")+getStudyHours("saturday")+getStudyHours("sunday");
//     return total
//     }
// console.log(getActualStudyHours);
