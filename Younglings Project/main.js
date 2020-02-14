 // Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyBWqraZ57m0jnd37A9PwR9ZcByUb8V6GIo",
    authDomain: "sihle-1252d.firebaseapp.com",
    databaseURL: "https://sihle-1252d.firebaseio.com",
    projectId: "sihle-1252d",
    storageBucket: "sihle-1252d.appspot.com",
    messagingSenderId: "90112748669",
    appId: "1:90112748669:web:46e3164fe9f411c2115514",
    measurementId: "G-EL9N1ZGVVY"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

//Reference messages collection
    var messagesRef = firebase.database().ref("messages")


// Listen for form submit 
    document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form 
    function submitForm(e){
        e.preventDefault();
        

//Get values

     var fname = getInputVal('fname');
     var lname = getInputVal('lname');
     var tel = getInputVal('tel');
     var email = getInputVal('email');
     var message = getInputVal('message');

// Save message 	
     saveMessage(fname, lname, tel, email, message)

// Clear form
document.getElementById('contactForm').reset();

}



//Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;

}



// Save message to firebase
    function saveMessage(fname, lname, tel,email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            fname: fname,
            lname: lname,
            tel: tel,
            email: email,
            message:message

        });
     }