var firebaseConfig = {
      apiKey: "AIzaSyBzTPq5b9CPIouFImO32mCwquSsIeSpPTw",
      authDomain: "get-help-3deb4.firebaseapp.com",
      databaseURL: "https://get-help-3deb4-default-rtdb.firebaseio.com",
      projectId: "get-help-3deb4",
      storageBucket: "get-help-3deb4.appspot.com",
      messagingSenderId: "354987734042",
      appId: "1:354987734042:web:1d596c0e5b635bd7800da3"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      Room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
