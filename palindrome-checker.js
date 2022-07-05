function palindrome(str) {
    const regex = /[a-z0-9]/g;
    const testStr = str.toLowerCase().match(regex).join('');
    const reverseTestStr = testStr.reverse();
    console.log(testStr, reverseTestStr);
    if(testStr === reverseTestStr){
      return true;
    }
      return false;
  }