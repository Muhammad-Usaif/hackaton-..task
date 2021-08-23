
function signup() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
     console.log(username);
    console.log(email);
    console.log(password);
    console.log(city);
    console.log(country);


    // var db = firebase.firestore();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("Login Successfull");

            firebase.firestore().collection("user").doc(user.uid).set({
                    name: name,
                    email: email,
                    uid: user.uid,
                    password: password,
                    city: city,
                    country: country,
                })
                .then(function() {
                    console.log("Data Succesfull");
                }).catch(error => {
                    console.log(error);
                })
            swal({
                title: "Good job!",
                text: "Successfully sign up",
                icon: "success",
                button: "next",
            }).then((value) => {
                location.href = "./add.html";
            })


            // location.href = ("./login.html")
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error", errorMessage)
            swal("OOpS!", errorMessage, "error");

            // ..
        });



}


// Login

let Login = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(email);
    // console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Login Successfull")
            location.href = ("./dashboard.html")
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error", errorMessage)
        });



}