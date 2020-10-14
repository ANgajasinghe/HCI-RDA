// // Ads and Bids Forum
var firebaseConfig = {
    apiKey: "AIzaSyAPerNpYsXIgjgks-Q_wKcHEhG-oSfZKpo",
    authDomain: "rda-hci.firebaseapp.com",
    databaseURL: "https://rda-hci.firebaseio.com",
    projectId: "rda-hci",
    storageBucket: "rda-hci.appspot.com",
    messagingSenderId: "490811445050",
    appId: "1:490811445050:web:0fcec5b9a96428bdfe8a03",
    measurementId: "G-DHTHSJKFZF"

  };
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// // Reference messages collection
var quatationRef = firebase.database().ref("rda-hci");

// // Listen for form submit
 document.getElementById("quatationForm").addEventListener("submit", submitquatationsForm);

// // Submit Form
function submitquatationsForm(e) {
    e.preventDefault();

     var name = getInputValues('name');
     var email = getInputValues('email');
     var address = getInputValues('address');
     var contactnumber = getInputValues('phonenumber');
     var company = getInputValues('company');
     var subject = getInputValues('subject');
     var Description = getInputValues('Description');
     console.log(document.getElementById('email'));

//     // Save Message
     saveMessage(name, email, address, contactnumber, company, subject,Description);

//     // Show alert
     document.querySelector('.sent-message').style.display = 'block';

//     // Hide Alert
     setTimeout(function () {
         document.querySelector('.sent-message').style.display = 'none';
     }, 2000);

//     // Clear Form
     document.getElementById('quatationForm').reset();

// }

// // Function to get Form values
function getInputValues(id) {
    return document.getElementById(id).value;
}

// // Save the messages to the Firebase
function saveMessage(name, email, address, contactnumber, company, subject,Description) {
     var newQuatationRef = quatationRef.push();
     newQuatationRef.set({
         name: name,
         email: email,
         address: address,
         contactnumber: contactnumber,
         company: company,
         subject: subject,
         Description: Description
     });
    }}