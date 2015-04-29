 function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
      // this sets the AM and PM
    var meridiem = "PM";
    if (hours > 12) {
    hours = hours - 12;
    meridiem = "AM";

// this code makes sure it always has 2 digits in the clock.
if (hours === 0) {
    hours = 12;
}
    var minutes = currentTime.getMinutes();
      if (minutes <10) {
          minutes="0" + minutes;
      }
    var seconds = currentTime.getSeconds();
      if (seconds < 10) {
          seconds= "0" + seconds;
      }
    // This sets the text inside the clock div to the hours, minutes, and seconds of the current time.
    var theTime = document.getElementById('theTime');
      
    theTime.innerText = hours + ":" + minutes + ":" + seconds + meridiem;
  }
// this runs displayTime function for the first time
  displayTime();
setInterval(displayTime, 1000);


var bckin = document.getElementById("bckin");
function myFunction() {
   document.getElementById("theClock").style.backgroundImage = "url(" + bckin.value + ")";
}
//These variables create the dropboxes for hours, minutes, and seconds for the alarm
var hourDropBox = document.getElementById('hourdropbox');
 //This for loop starts the options at 0 and ends at 24. Within the loop it turns i into a string which displays the number into the dropbox and gives it a value. The last line in the loop keeps running through the loop until it reaches 24.
for(var i = 1; i <= 24; i++){
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  hourDropBox.add(toAdd);
}

var minuteDropBox = document.getElementById('minutedropbox');
 //This for loop does the same thing as the one above but for minutes.
for(var i = 0; i < 60; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  minuteDropBox.add(toAdd);
}

var secondDropBox = document.getElementById('seconddropbox');
 //This for loop does the same thing as the one above but for seconds.
for(var i = 0; i < 60; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  secondDropBox.add(toAdd);
}
//Creates alarm
function alarmSet(){}
   var currentTime2 = new Date();
   var hours2 = currentTime2.getHours();
   var minutes2 = currentTime2.getMinutes();
   var seconds2 = currentTime2.getSeconds();
    var tomorrow = false;
	  if( hourDropBox.value < hours2.value )
				{tomorrow = true;}
	  else if( hourDropBox.value == hours2.value && minuteDropBox.value < minutes2.value )
				{tomorrow = true;}
	  else if( hourDropBox.value == hours2.value && minuteDropBox.value == minutes2.value && secondDropBox.value < seconds2.value )
				{tomorrow = true;}
			
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
//parseInt takes in a string and returns an integer
    var day = parseInt( date.getDate() );
				
	  if( tomorrow ){day += 1;}
			
	var time = new Date( year, month, day, hourDropBox.value, minuteDropBox.value, secondDropBox.value, date.getMilliseconds() );
	time = ( time - new Date());
    