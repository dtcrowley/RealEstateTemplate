$(document).ready(function(){
    $("#thank-you-message").hide();
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2tAVWn5WwWOSG53Qy6IQ05udVUi2NnKI",
    authDomain: "th-st-ff10b.firebaseapp.com",
    databaseURL: "https://th-st-ff10b.firebaseio.com",
    projectId: "th-st-ff10b",
    storageBucket: "th-st-ff10b.appspot.com",
    messagingSenderId: "859726883559"
  };
  firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var comment = "";
    
    $("#add-to-firebase").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();
        $('form[name=registration').validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                name: "required",
                email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
                },
                comment:"required"
            },
            // Specify validation error messages
            messages: {
                name: "Please enter your name",
                email: "Please enter a valid email address",
                comment:"Please enter your question or comment"
            }
        });
        //Providing data to Firebase
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        comment = $("#comment-input").val().trim();

        var userComment = {
            name: name,
            email: email,
            comment: comment,
        };
            console.log(name, email, comment);
    
            database.ref().push(userComment);
    
            // var postSubmit = $("#form-wrapper").hide();
            $("#thank-you-message").hide();
            var thankYou = $("<h5>").text("Thanks for reaching out! We will respond to you as soon as possible.");
            $("#thank-you-message").append(thankYou)
            $("#thank-you-message").show();
    
            name = $("#name-input").val("");
            email = $("#email-input").val("");
            comment = $("#comment-input").val("");
        });
        $(".character-counter").hide();
    });
//     // Capture Button Click
    
// });