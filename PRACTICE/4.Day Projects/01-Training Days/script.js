 
const random = Math.floor(Math.random() * 3);   
// Create random number
   // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
   const getRandEvent = () =>{
if (random == 0){ return 'Marathon';}
else if (random == 1){ return 'Triathloh';
} else if (random == 2){ return 'Pentathlon';}
   }
console.log(`${getRandEvent()}`);

// The scope of `days` is too tight 
const getTrainingDays = () => {
  if (getRandEvent() == 'Marathon') {
  return Number(50);
  }
  else if (getRandEvent() == 'Penthathlon') {
  return Number(75);
  }
  else if (getRandEvent() == `Triathlon`) {
  return Number(100);
  }

// decide the day according to the condition, write a conditional;

return days;
};

const logEvent = condition => {
  const name = 'Nala';
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();
const days = getTrainingDays(condition);


logEvent(condition);
logTime(days);
