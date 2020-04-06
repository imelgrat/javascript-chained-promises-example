const appID = document.getElementById("app");
// Create the promise object.
// Note: The reject param is not used in this example
var firstStep = new Promise(function(resolve, reject) {
  resolve(1);
});

firstStep
  .then(firstVal => {
    // Second step. Receives value from first promise
    return firstVal + 2;
  })
  .then(secondVal => {
    // Third step. Receives value from second promise (created by .then())
    return secondVal * 3;
  })
  .then(thirdVal => {
    // 4th step. Receives value from third promise (created by .then())
    appID.insertAdjacentHTML("beforeend", thirdVal);
  });
