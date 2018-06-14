var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var nodemailer = require("nodemailer");

// var path = require("path");
// var handlebars = require("handlebars");
// var exphbs = require("express-handlebars");
// var passport = require("./config/passport");
// var env = require('dotenv').load();


var PORT = process.env.PORT || 5000;
// var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session()); 

app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Contact form POST
app.post('/send', (req, res) => {
    // console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Comment</h3>
    <p>${req.body.comment}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'propertycontact2018@gmail.com', // generated ethereal user
          pass: 'r3a1estate' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
  });
  
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"841 19th st contact" <propertycontact2018@gmail.com>', // sender address
      to: 'icedmammoth@yahoo.com, crowleyd1988@gmail.com', // list of receivers
      subject: 'I am interested in the property at 841 19th st', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.redirect('/index.html');
  });
  });

// Opening Port
app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT)
});
// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({force: false}).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });


