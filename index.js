/*  function calculateTax(income, expenses) {
if(income < 0 ||expenses < 0 || income < expenses ){
return "Invalid Input"
}


  let difference = income - expenses;
  let tax = difference * 0.2;

  return tax;
}

const result = calculateTax(10000, 3000);
console.log(result); 
 */

/* !2 task
function sendNotification(email) {
const cheakEmail = email.indexOf('@');
 if(cheakEmail === -1){
    return "Invalid Email";
 }
 const parts = email.split('@');

 const userName = parts[0];
 const domainName = parts[1];

const result =userName + " sent you an email form " + domainName;
return result;

}

const result =sendNotification('zihadgmail@.com');
console.log(result); */

/* function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (const char of name) {
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}

const result = checkDigitsInName('!@#');
console.log(result); */

/*  const person = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  };
function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    finalScore = finalScore + 20;
  }
  return finalScore >= 80;
}
const result = calculateFinalScore(person);
console.log(result); 
 */

 function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sum = 0;
  for (const time of waitingTimes) {
    sum += time;
  }
  const averageTime = Math.round(sum / waitingTimes.length);
  const peopleLeft = serialNumber - waitingTimes.length - 1;
  const totalTime =peopleLeft * averageTime;


  return totalTime;
}
const result = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result); 
