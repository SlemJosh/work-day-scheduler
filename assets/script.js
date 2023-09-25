$(function () {
  // Adding a listener for clicking the button on each line. It should save to a function called saveTasks.  Any of the buttons will casue the entire page to save any fields that are currently occupied. Could be good, but something
  // to consider for a future iteration.  
  $(".btn").click(saveTasks);

  // Added the function saveTasks so that we can take what information is given and store it in the local storage.  Users can refresh or even leave the page and the info will stay there until cleared/we set a timer to auto delete it.
  // Formatting is just so that we can save it to the appropriate time slot.  As long as it's between our 9am and 5pm (17hour) we want to be able to save that data in addition to whatever they put into the text box.
  function saveTasks() {
    for (i = 9; i <= 17; i++) {
      localStorage.setItem("hour" + i, $("#hour" + i + "text").val());
    }
  }

  // Now that we have that information being saved, we need a way to display it, outside of just being stored on the developer tools. So we use a function to pull that information and display it to the user.
  for (i = 9; i <= 17; i++) {
    $("#hour" + i + "text").val(localStorage.getItem("hour" + i));
  }

  // Time to deal with the time coding. Our stylesheet already has it setup to display the colors for past, present, and future.  We just need to be able to tell the system how those hours relate to our current time.
  // We go into our container as specificed on the index.  And then for each time interval (children) and telling it to change the div class to our new values based on the time.
  $(".container-lg").children("div").each(timeColor);

  function timeColor() {
    let currentHour = dayjs().format("H");
    console.log(currentHour)
    // If the current time is later than our listed times...
    for (i = 9; i <= 17; i++) {
      if (i < currentHour) {
        $("#hour-" + i).toggleClass("past");
      }
      // If the current hour is the current hour ...
      if (i == currentHour) {
        $("#hour-" + i).toggleClass("present");
      }
      // If the current hour is before the hours listed ...
      if (i > currentHour) {
        $("#hour-" + i).toggleClass("future");
      }
    }
  }
  // We want to display the current date and time.  Our header has a class already tied to it, so we will just use that here in the function to pull the data from the users pc and display it on the screen.
  // Used the dayjs() function.  And then we chose for it to be display in a format that will show us the abbreviation for the day, followed by the actual date in the format we provide.
  // Then we just take that information and apply it to the class id currentDay given to us on the index page.

  let today = dayjs().format("dddd, MM/DD/YYYY, hh:mm");  //https://day.js.org/docs/en/display/format
  document.getElementById("currentDay").innerHTML = today;

  // reference for dayjs()
  // https://www.freecodecamp.org/news/javascript-date-time-dayjs/#:~:text=const%20currentDate%20%3D%20dayjs()%3B,That's%20it!

});
