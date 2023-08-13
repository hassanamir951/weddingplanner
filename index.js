// Select all input elements for varification
const userName = document.getElementById("Re-name");
const Email = document.getElementById("Re-email");
const password = document.getElementById("Re-password");
const phoneNumber = document.getElementById("Re-phoneNumber");



// function for form varification
function formValidation() {
  // checking length of name
  if (userName.value.length < 2 || userName.value.length > 20) {
    alert("Please enter the required information");
    userName.focus();
    return false;
  }


  // checking email format
  if (Email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    Email.focus();
    return false;
  }


  
  // checking password character pattern
  if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
    password.focus();
    return false;
  }


  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
}

  return true;
}


