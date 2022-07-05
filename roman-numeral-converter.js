//found "numsArr[i]*Math.pow(10,numsArr.length-i-1)" on freeCodeCamp forum for this challenge solution.

function convertToRoman(num) {
	
    const numToRomanNums = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
    10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
    100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
    1000: "M", 2000: "MM", 3000: "MMM"};
    
      let numsArr = String(num).split("");
      let finalNum = '';
      for(let i = 0; i <numsArr.length; i++){
        const numTest = numsArr[i]*Math.pow(10,numsArr.length-i-1);
        if(numToRomanNums[numTest]){
          finalNum +=  numToRomanNums[numTest];
        }    
      }
      return finalNum;    
    }

//completed another way with the suggestion of using an object oriented approach to solve, thanks to my.
    function convertToRoman(num) {
      const arrayFromNum = String(num).split('');
    const lengthOfNum = arrayFromNum.length;
      let romanNumeral = '';
      const numToRomanNums = {
          ones: {
              0: '', 1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 
              8 : "VIII", 9 : "IX",
          },
          tens: {
              0: '', 1 : "X", 2 : "XX", 3 : "XXX", 4 : "XL", 5 : "L", 6 : "LX", 
              7 : "LXX", 8 : "LXXX", 9 : "XC",
          },
          hundreds: {
              0: '', 1 : "C", 2 : "CC", 3 : "CCC", 4 : "CD", 5 : "D", 
              6 : "DC", 7 : "DCC", 8 : "DCCC", 9 : "CM",
          },
          thousands : {
              1: "M", 2: "MM", 3: "MMM"
          }
      };
      if(lengthOfNum === 1){
          romanNumeral = numToRomanNums.ones[arrayFromNum[0]];
          console.log(romanNumeral);
      }
      if(lengthOfNum === 2){
          romanNumeral = `${numToRomanNums.tens[arrayFromNum[0]]}${numToRomanNums.ones[arrayFromNum[1]]}`;
          console.log(romanNumeral);
      }
      if(lengthOfNum === 3){
          romanNumeral = `${numToRomanNums.hundreds[arrayFromNum[0]]}${numToRomanNums.tens[arrayFromNum[1]]}${numToRomanNums.ones[arrayFromNum[2]]}`;
          console.log(romanNumeral);
      }
      if(lengthOfNum === 4){
          romanNumeral = `${numToRomanNums.thousands[arrayFromNum[0]]}${numToRomanNums.hundreds[arrayFromNum[1]]}${numToRomanNums.tens[arrayFromNum[2]]}${numToRomanNums.ones[arrayFromNum[3]]}`;
          console.log(romanNumeral);
      }
      return romanNumeral;
  }
  
  
  convertToRoman(3000);