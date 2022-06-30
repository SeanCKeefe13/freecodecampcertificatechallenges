/*Found  this regex off of stackoverflow. I knew instantly when reading the challenge regex would be the most appropriate solution, 
however i do not possess the indepth knowledge of regex yet to have come up with this on my own.*/
function telephoneCheck(str) {
    const testRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;
    if(testRegex.test(str)){
      return true
    }
    return false;
  }