function palindrome(str) {
  let regex = /[\W_]/g
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  str = str.replace(regex, "");
  console.log(str);
  let str2 =str.split("").reverse().join("");
  console.log(str2);
  if(str===str2){
    return true;
  }else{
    return false;
  }
  
}

function palindromeChecker(){
  let input = document.getElementById("inputPalindromo");
  let valinput = input.value;
  let check = palindrome(valinput);
  let result = document.getElementById("result");
  if(check) result.innerText = "Es un palindromo";
  else result.innerText = "No es un palindromo";
}
