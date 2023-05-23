var startTime, elapsedTime, timerInterval;

var display = document.querySelector(".stop-num");

function start(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}   

function stop(){
    clearInterval(timerInterval);
}

function reset() {
    // Clear the interval to stop the timer
    clearInterval(timerInterval);
    // Reset the elapsed time and update the display to "00:00:00"
    elapsedTime = 0;
    display.textContent = "00:00:00";
  }

  function updateTime() {
    // Calculate the elapsed time by subtracting the start time from the current time
    elapsedTime = Date.now() - startTime;
    // Calculate minutes, seconds, and milliseconds
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    
    // Update the display with the formatted time
    display.textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
  }
  function formatTime(time) {
    // Add a leading zero if the time is less than 10
    return time < 10 ? "0" + time : time;
  }