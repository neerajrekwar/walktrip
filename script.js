//javascript
function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = '0' + month;
  }
  if (day.toString().length == 1) {
    day = '0' + day;
  }
  if (hour.toString().length == 1) {
    hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    minute = '0' + minute;
  }
  if (second.toString().length == 1) {
    second = '0' + second;
  }
  var dateTime =
    year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  return dateTime;
}

// example usage: realtime clock
setInterval(function () {
  var currentTime = getDateTime();
  document.getElementById('digital-clock').innerHTML = currentTime;
}, 1000);

var currentdate = new Date();
var datetime =
  'Last Sync: ' +
  currentdate.getDay() +
  '/' +
  currentdate.getMonth() +
  '/' +
  currentdate.getFullYear() +
  ' @ ' +
  currentdate.getHours() +
  ':' +
  currentdate.getMinutes() +
  ':' +
  currentdate.getSeconds();
console.log(currentdate, datetime);

var myDate = new Date();

let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


let date = myDate.getDate();
let month = monthsList[myDate.getMonth()];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];

let today = `${date} ${month} ${year}, ${day}`;

let amOrPm;
let twelveHours = function (){
    if(myDate.getHours() > 12)
    {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

    }else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`}
};
let hours = twelveHours();
let minutes = myDate.getMinutes();

let currentTime = `${hours}:${minutes} ${amOrPm}`;

console.log(today + ' ' + currentTime);

let nodeDate = require('date-and-time');
let nowAt = nodeDate.format(new Date(), 'DD-MMMM-YYYY, hh:mm:ss a');
console.log(nowAt);