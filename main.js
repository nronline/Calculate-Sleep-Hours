// initialize variable via arrow function to calculate sleep
const getSleepHours = day => {
   if (day === 'monday') {
    return 8;
  } 
   else if (day === 'tuesday') {
    return 8;
  } 
   else if (day === 'wednesday') {
    return 10;
  } 
   else if (day === 'thursday') {
    return 8;
  }
   else if (day === 'friday') {
    return 8;
  }
   else if (day === 'saturday') {
    return 8;
  }
   else if (day === 'sunday') {
    return 8;
  } 
  else{}
};

// calculate actual sleep hours
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// figure out your ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

// figure out what the sleep debt is
const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep, nice one homie');
  } else if (actualSleepHours > idealSleepHours) {
    //variable to change from a negative to positive num
    let moreSleep = Math.abs((idealSleepHours - actualSleepHours));
    console.log('You got ' + moreSleep + ' hours more sleep than needed');
  } else {
console.log('Dude You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }

}

calculateSleepDept();


/** Testing
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday')); */
