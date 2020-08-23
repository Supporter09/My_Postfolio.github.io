user_cc = document.getElementById("user_cc_id");
answer = document.getElementById("Answer");
function Check_cc_id() {
  user_cc_id = user_cc.value;
  console.log(user_cc_id);
  cc_id = user_cc_id.split(",");
  console.log(cc_id);
  if (cc_id.length % 2 == 0) {
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
  console.log(cc_id)
  sum = 0
  for(x=0;x<cc_id.length;x++){
      if(Number.isNaN(parseInt(cc_id[x])) == false){
        sum += parseInt(cc_id[x])
      }
      
  }
  console.log(sum)
  if(sum == 0){
    answer.innerHTML = "Humm this is not a credit card id"
  }else if(sum %10==0){
      answer.innerHTML = "Valid"
  }else{
    answer.innerHTML = "Not Valid"
  }
}
