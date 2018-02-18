$('#form').on("submit", function(e) {
  e.preventDefault(); //	Prevent link
  console.log("Attempting submission"); //	Add to console
});

function formsubmitted() {
  console.log("Form passed proper tests");
  $('#form').remove();
  $('body').append('<h2 id="post">Form submitted successfully.</h2>');
}
