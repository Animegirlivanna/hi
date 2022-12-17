var firebaseConfig = {
      apiKey: "AIzaSyA8AeoPau5x-fq8TWc4GCMcR467l485j9o",
      authDomain: "kwitter-10fbf.firebaseapp.com",
      databaseURL: "https://kwitter-10fbf-default-rtdb.firebaseio.com",
      projectId: "kwitter-10fbf",
      storageBucket: "kwitter-10fbf.appspot.com",
      messagingSenderId: "586065412495",
      appId: "1:586065412495:web:d31b15025fe5eda8814bfa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}