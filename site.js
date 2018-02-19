$('#form').on("submit", function(e) {
  var reAtSign = /@/g;
  e.preventDefault(); //	Prevent link
  console.log("Attempting submission"); //	Add to console
  console.log("Email is : "+$('#email').val());
  if ($('#email').val().match(reAtSign).length <= 0 || $('#email').val().match(/@/g).length > 1) {
    console.log("None or too many @ symbols found.");
  }
  else {
    formsubmitted($('#name').val());
  }
});

function formsubmitted(name) {
  console.log("Form passed proper tests");
  $('#form').remove();
  $('main').append('<h2 id="post">Thank you for signing up '+ name +'.</h2>');
}
