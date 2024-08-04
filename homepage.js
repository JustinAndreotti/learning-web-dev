const todaysDate = Date();
console.log(todaysDate);

var month = todaysDate.slice(4, 7);
var day = todaysDate.slice(8, 11);
var year = todaysDate.slice(11, 15);

document.querySelector("#dynamic-date").textContent = month + " " + day + "," + year;