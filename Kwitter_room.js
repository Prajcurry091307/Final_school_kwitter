var firebaseConfig = {
      apiKey: "AIzaSyBz9rplrnnhTLv_LsfTE1UUUx-Y_ZB9C-8",
      authDomain: "schoolkwitter-58709.firebaseapp.com",
      databaseURL: "https://schoolkwitter-58709-default-rtdb.firebaseio.com",
      projectId: "schoolkwitter-58709",
      storageBucket: "schoolkwitter-58709.appspot.com",
      messagingSenderId: "596383741041",
      appId: "1:596383741041:web:a494e6a1dddda35a7717d0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
   var room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });
   localStorage.setItem("room_name",room_name);

   window.location ="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name : " +Room_names);
      row = "<div class='room_name' id='"+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;    
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}