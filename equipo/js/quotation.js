// // Ads and Bids Forum
// var firebaseConfig = {
//     apiKey: "AIzaSyARcxAC0ra1-NmHb-5WL6KXAomUcFo1Y6A",
//     authDomain: "quotation-3a3dd.firebaseapp.com",
//     databaseURL: "https://quotation-3a3dd.firebaseio.com",
//     projectId: "quotation-3a3dd",
//     storageBucket: "quotation-3a3dd.appspot.com",
//     messagingSenderId: "653502751755",
//     appId: "1:653502751755:web:645e9bd421ec2b51afd30e",
//     measurementId: "G-6YEKQR4JDX"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Reference messages collection
// var quatationRef = firebase.database().ref('quatations');

// // Listen for form submit
// document.getElementById("quatationForm").addEventListener("submit", submitquatationsForm);

// // Submit Form
// function submitquatationsForm(e) {
//     e.preventDefault();

//     var name = getInputValues('name');
//     var email = getInputValues('email');
//     var address = getInputValues('address');
//     var contactnumber = getInputValues('contactnumber');
//     var company = getInputValues('company');
//     var subject = getInputValues('subject');

//     // Save Message
//     saveMessage(name, email, address, contactnumber, company, subject);

//     // Show alert
//     document.querySelector('.sent-message').style.display = 'block';

//     // Hide Alert
//     setTimeout(function () {
//         document.querySelector('.sent-message').style.display = 'none';
//     }, 2000);

//     // Clear Form
//     document.getElementById('quatationForm').reset();

// }

// // Function to get Form values
// function getInputValues(id) {
//     return document.getElementById(id).value;
// }

// // Save the messages to the Firebase
// function saveMessage(name, email, address, contactnumber, company, subject) {
//     var newQuatationRef = quatationRef.push();
//     newQuatationRef.set({
//         name: name,
//         email: email,
//         address: address,
//         contactnumber: contactnumber,
//         company: company,
//         subject: subject
//     });
// }