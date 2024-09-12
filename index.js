function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  let difference = income - expenses;
  let tax = difference * 0.2;

  return tax;
}

  function sendNotification(email) {
  const checkEmail = email.indexOf("@");
  if (checkEmail === -1) {
    return "Invalid Email";
  }
  const parts = email.split("@");

  const userName = parts[0];
  const domainName = parts[1];

  const result = userName + " sent you an email form " + domainName;
  return result;
}


function checkDigitsInName(name) {
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


function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    finalScore = finalScore + 20;
  }
  return finalScore >= 80;
}



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
  const totalTime = peopleLeft * averageTime;

  
  return totalTime;
}

 

