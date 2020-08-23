//Get elements from html
user_cc = document.getElementById("user_cc_id");
answer = document.getElementById("Answer");

// Main Function
function Check_cc_id() {
  user_cc_id = user_cc.value;
  console.log(user_cc_id);
  cc_id = user_cc_id.split(",");
  console.log(cc_id);
  if (cc_id.length % 2 == 0) { //This line is to check if the credit card list have the length even or odd
    for (i = 0; i <= user_cc_id.length; i += 2) {
      cc_id[i] = cc_id[i] * 2;
      if (parseInt(cc_id[i]) > 9) {
        cc_id[i] -= 9;
      }
    }
  } else {
    for (i = 1; i <= user_cc_id.length; i += 2) {
      cc_id[i] = cc_id[i] * 2;
      if (parseInt(cc_id[i]) > 9) {
        cc_id[i] -= 9;
      }
    }
  }
  console.log(cc_id);
  sum = 0;
  for (x = 0; x < cc_id.length; x++) { //Sum all the number
    if (Number.isNaN(parseInt(cc_id[x])) == false) {
      sum += parseInt(cc_id[x]);
    }
  }
  console.log(sum);
  if (sum == 0) {
    answer.innerHTML = "Humm this is not a credit card id";//Check if what user input is a really credit card
  } else if (sum % 10 == 0) { // Line 33 and 35 check if what user provide is a credit card number or not
    answer.innerHTML = "Valid";
  } else {
    answer.innerHTML = "Not Valid";
  }
}
