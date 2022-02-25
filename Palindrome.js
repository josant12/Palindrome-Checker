function palindrome(str) {
  
  let newStr = str.toLowerCase().replace(/\W+|_/g,"");
  let reverseStr = newStr.split("").reverse().join("");

  if( newStr === reverseStr){
    return true;
  } else {
    return false;
  }

}


console.log(palindrome("A man, a plan, a canal. Panama"));
