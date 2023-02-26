var phoneInput = document.getElementById("inputPhone");

  phoneInput.addEventListener("input", function() {
    var phoneNum = phoneInput.value.replace(/\D/g,''); // Remove all non-numeric characters
    phoneNum = phoneNum.substring(0,3) + '-' + phoneNum.substring(3,6) + '-' + phoneNum.substring(6,10); // Format as "xxx-xxx-xxxx"
    phoneInput.value = phoneNum;
  });

var cardInput = document.getElementById("cardnumber");

  cardInput.addEventListener("input", function() {
    var cardNum = cardInput.value.replace(/\D/g,''); // Remove all non-numeric characters
    cardNum = cardNum.substring(0,4) + '-' + cardNum.substring(4,8) + '-' + cardNum.substring(8,12) + '-' + cardNum.substring(12,16); // Format as "xxxx-xxxx-xxxx"
    cardInput.value = cardNum;
  });

var cvvInput = document.getElementById("cvvCode");

  cvvInput.addEventListener("input", function() {
    var cvvNum = cvvInput.value.replace(/\D/g,''); // Remove all non-numeric characters
    cvvNum = cvvNum.substring(0,3); // Format as "xxx"
    cvvInput.value = cvvNum;
  });

const inputService = document.getElementById("inputService");

  inputService.addEventListener("change", function() {
    const selectedValue = inputService.value;
    console.log(selectedValue); // or do something else with the selected value
  });

const chooseHairdresser = document.getElementById("chooseHairdresser");

chooseHairdresser.addEventListener("change", function() {
    const selectedValue = chooseHairdresser.value;
    console.log(selectedValue); // or do something else with the selected value
  });


const Confirm = document.getElementById("Confirm");
const inputDate = document.getElementById("inputDate");
const expDate = document.getElementById("expDate");

Confirm.addEventListener("click", function(event) {
    event.preventDefault(); // prevent form submission
    if (expDate.value === "") {
        alert("Expiration date cannot be empty");
      } else {
        // continue with form submission
        // ...
      }
      
    if (inputDate.value === ""){
        alert("inputDate cannot be empty");
      } else {
        // continue with form submission
        // ...
      }
      
    });


function checkInput() {
    var inputFirst = document.getElementById("inputFirst").value;
    var inputLast = document.getElementById("inputLast").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputPhone = document.getElementById("inputPhone").value;
    var inputService = document.getElementById("inputService").value;
    var chooseHairdresser = document.getElementById("chooseHairdresser").value;
    var CardholderName = document.getElementById("CardholderName").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var cvvCode = document.getElementById("cvvCode").value;
    if (inputFirst == "") {
      alert("Please enter a value in the inputFirst field");
    }
    if (inputLast == "") {
        alert("Please enter a value in the inputLast field");
      }
    if (inputEmail == "") {
        alert("Please enter a value in the inputEmail field");
      }
    if (inputPhone == "") {
        alert("Please enter a value in the inputPhone field");
      }
    if ( inputService == "") {
        alert("Please enter a value in the inputService field");
      }
      if ( chooseHairdresser == "") {
        alert("Please enter a value in the inputService field");
      }
      if ( CardholderName == "") {
        alert("Please enter a value in the inputService field");
      }
      if ( cardnumber == "") {
        alert("Please enter a value in the inputService field");
      }
      if ( cvvCode == "") {
        alert("Please enter a value in the inputService field");
      }
  }


  function checkInput2() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (email == "") {
        alert("please provide your email for contact");
      }
    if (message == "") {
        alert("Please enter problems or suggestions");
      }
    }