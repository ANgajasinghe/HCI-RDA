// Contact Us Forum
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKPyI1OGH-8OTnbY6BpJKLWFDhDqVlh9A",
    authDomain: "contact-us-ced4f.firebaseapp.com",
    databaseURL: "https://contact-us-ced4f.firebaseio.com",
    projectId: "contact-us-ced4f",
    storageBucket: "contact-us-ced4f.appspot.com",
    messagingSenderId: "228840736990",
    appId: "1:228840736990:web:1773f007ad69ada16a9a4f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    var name = getInputValues('name');
    var email = getInputValues('email');
    var subject = getInputValues('subject');
    var message = getInputValues('message');

    // Save Message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.sent-message').style.display = 'block';

    // Hide Alert
    setTimeout(function () {
        document.querySelector('.sent-message').style.display = 'none';
    }, 2000);

    // Clear Form
    document.getElementById('contactForm').reset();

}

// Function to get Form values
function getInputValues(id) {
    return document.getElementById(id).value;
}

// Save the messages to the Firebase
function saveMessage(name, email, subject, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}