//Get elements from html
user_cc = document.getElementById("user_cc_id");
answer = document.getElementById("Answer");

// Main Function
function Validate_CC(arr) {
  return function (ccNum) {
    // Khai báo các biến
    var len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    // Thực hiện thuật toán Luhn
    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }
    // Trả về kết quả sau khi validate
    return sum && sum % 10 === 0;
  };
}
// Hàm chính
function Main() {
  user_credit_card_number_arr = user_cc.value;
  user_credit_card_number_arr.split(",");

  if (Validate_CC(user_credit_card_number_arr)) {
    answer.innerText = "This is a credit card";
    answer.style.color = "green";
  } else {
    answer.innerText = "This is not a credit card";
    answer.style.color = "red";
  }
}
