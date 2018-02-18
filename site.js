$('#form').on("submit", function(e) {
  e.preventDefault(); //	Prevent link
  console.log("Attempting submission"); //	Add to console
  console.log($('#email').val());
  formsubmitted($('#name').val());
});

function formsubmitted(name) {
  console.log("Form passed proper tests");
  $('#form').remove();
  $('main').append('<h2 id="post">Thank you for signing up '+ name +'.</h2>');
}
