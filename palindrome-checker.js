function palindrome(str) {
    const regex = /[a-z0-9]/g;
    const testStr = str.toLowerCase().match(regex).join('');
    const reverseTestStr = str.toLowerCase().match(regex).reverse().join('');
    console.log(testStr, reverseTestStr);
    if(testStr === reverseTestStr){
      return true;
    }
      return false;
  }