$(document).ready(function(){
    $("#thank-you-message").hide();
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
            phone: {
                required: true,
                integer: true,
                minLength: 10
            },
            comment:"required"
        },
        // Specify validation error messages
        messages: {
            name: "Please enter your name",
            email: "Invalid email address!",
            comment:"Please enter your question or comment"
        }
    });
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
    var phone = "";
    var comment = "";
    
    $("#add-to-firebase").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();
        //Providing data to Firebase
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        phone = $("#phone-input").val().trim();
        comment = $("#comment-input").val().trim();

        var userComment = {
            name: name,
            email: email,
            phone: phone,
            comment: comment,
        };
            console.log(name, email, comment);
    
            database.ref().push(userComment);
    
            // var postSubmit = $("#form-wrapper").hide();
            var thankYou = $("<h5>").text("Thank you for your interest! We will respond to you as soon as possible.");
            $("#thank-you-message").append(thankYou)
            $("#thank-you-message").show();
    
            name = $("#name-input").val("");
            email = $("#email-input").val("");
            phone = $("#phone-input").val("");
            comment = $("#comment-input").val("");
        });
        
        $(".character-counter").hide();
    });
