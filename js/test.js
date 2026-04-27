document.addEventListener("DOMContentLoaded", function(){

  // 🔹 Show login modal on page load
  var modal = new bootstrap.Modal(document.getElementById('loginModal'));
  modal.show();

  // 🔹 Hide error when user starts typing
  document.getElementById("username").addEventListener("input", hideError);
  document.getElementById("password").addEventListener("input", hideError);

  // 🔹 Allow Enter key to submit login
  document.getElementById("password").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
      checkLogin();
    }
  });

});

// 🔹 Hide error box
function hideError(){
  document.getElementById("errorBox").classList.add("d-none");
}

// 🔹 Login check function
function checkLogin(){

  // 👇 Multiple users
  const users = [
    {u: "admin", p: "1234"},
    {u: "staff1", p: "1111"},
    {u: "ashwinsdj", p: "631502"}
  ];

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // 🔹 Check if entered user matches any user
  let valid = users.some(user => user.u === username && user.p === password);

  if(valid){

    // ✅ Show main app
    document.getElementById("app").classList.remove("d-none");

    // 🔹 Close modal
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();

  } else {

    // ❌ Show error message
    let err = document.getElementById("errorBox");
    err.classList.remove("d-none");
    err.innerHTML = "❌ Invalid username or password";

  }
}
