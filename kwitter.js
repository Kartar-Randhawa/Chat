function addUser(){
    user_name= document.getElementById("Sign_up").value;

    localStorage.setItem("Sign_up",Sign_up);

    window.location="kwitter_room.html";
}