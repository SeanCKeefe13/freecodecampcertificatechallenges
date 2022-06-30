function rot13(str) {

    const strArr = str.split('');
    return strArr.map(function(letter){
      const letterCode = letter.charCodeAt();
      if(letterCode < 65 || letterCode > 90){
        return letter;
      }
      if((letterCode + 13) > 90){
        let remaining = 90 - letterCode;
        return String.fromCharCode([64 + (13 - remaining)]) ;
      }
        return String.fromCharCode([letterCode + 13]);
    }).join('');
    }
  
  rot13("SERR PBQR PNZC");