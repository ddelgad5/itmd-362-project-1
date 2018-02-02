$('#form').on("submit", function(e) {
  var today = new Date(); //	Get todays date
  var bdate = new Date($('#date')[0].value); //		Get user DOB
  var tyear = today.getFullYear(); //	Get todays year
  var byear = bdate.getFullYear(); //	Get users YOB
  var tmonth = today.getMonth() + 1;
  var bmonth = bdate.getMonth() + 1;
  var tday = today.getDate();
  var bday = bdate.getDate() + 1; //	for some reason I need to add 1 to date

  //  console.log("Today is: " + tmonth + " " + tday + " " + tyear);
  //  console.log("DOB is  : " + bmonth + " " + bday + " " + byear);
  e.preventDefault(); //	Prevent link
  console.log("Attempting submission"); //	Add to console
  if ( tyear - byear > 18 ) {
    console.log("Greater than 18 yrs. old");
    formsubmitted();
  }
  else if ( tyear - byear === 18 ) {

    console.log("Equal to 18 yrs. old");
    // console.log("tmonth = " + tmonth);
    // console.log("bmonth = " + bmonth);
    if ( tmonth > bmonth ) {
      console.log("Birth month already passed.");
      formsubmitted();
    }
    else if ( tmonth === bmonth ) {
      //  console.log("tday = " + tday);
      //  console.log("bday = " + bday);
      if ( tday > bday ) {
        console.log("Your bday already passed.");
        formsubmitted();
      }
      else if ( tday === bday ) {
        console.log("HAPPY BIRTHDAY");
        formsubmitted();
      }
      else {
        console.log("Less than 18 yrs. old");
        notlegal();
      }
    }
    else {
      console.log("Less than 18 yrs. old");
      notlegal();
    }
  }
  else {
    console.log("Less than 18 yrs. old");
    notlegal();
  }
});

function formsubmitted() {
  console.log("Form passed proper tests");
  $('#form').remove();
  $('body').append('<h2 id="post">Form submitted successfully.</h2>');
}

function notlegal() {
  if ( $('#date-alert').length===0 ) {
    $('#lidate').append('<p class="alert" id="date-alert">You must be 18 years or older.</p>');
  }
  //  window.alert("You must be 18 years or older.");
}
