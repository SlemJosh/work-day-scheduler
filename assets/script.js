// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Adding a listener for clicking the button on each line. It should save to a functino called saveTasks
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
$(".container-fluid").children("div").each(timeColor);

function timeColor(){
  let currentHour = dayjs().format("H");
  // If the current time is later than our listed times...
  for (i = 9; i <= 17; i++){
    if (i < currentHour) {
      $("#hour-" + i).toggleClass("past");
    }
   // If the current hour is the current hour ...
    if (i == currentHour) {
      $("#hour-" + i).toggleClass("present");
    }

  }
}


// TODO!!!
// I'm noticing that as I put info into any box, any button click is saving that box to the localStorage. We want to come back to this and make sure we are only.  I'd prefer that my boxes are only working for the appropriate field. I will
// Need to look into this before I finish.









  // We want to display the current date and time.  Our header has a class already tied to it, so we will just use that here in the function to pull the data from the users pc and display it on the screen.
  // Used the dayjs() function.  And then we chose for it to be display in a format that will show us the abbreviation for the day, followed by the actual date in the format we provide.
  // Then we just take that information and apply it to the class id currentDay given to us on the index page.

  let today = dayjs().format("ddd, MM/DD/YYYY");
  document.getElementById("currentDay").innerHTML = today;

  // reference for dayjs()
  // https://www.freecodecamp.org/news/javascript-date-time-dayjs/#:~:text=const%20currentDate%20%3D%20dayjs()%3B,That's%20it!


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
