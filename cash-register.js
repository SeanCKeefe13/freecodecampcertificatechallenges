// const currentTransactionArr = [];
// const transactionRecord = {
//   status: '',
//   change: ''
// }
// // function updateTransactionCurrency(val){
// //     let numOfAvailCurrency = val[1]/val;
// //     let numOfNeededCurrency = Math.floor(transactionTotal /val);

// //     console.log(numOfNeededCurrency);

// //     if(numOfAvailCurrency >= numOfNeededCurrency){
// //         transactionTotal-= (val*numOfNeededCurrency);
// //         transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
// //         console.log(transactionTotal)
// //         for(let i =0; i<numOfNeededCurrency;i++){
// //         currentTransactionArr.push([val[0], val]);             
// //     }
// //     val[1] -= (val*numOfNeededCurrency);
// //     }
// //     if(numOfAvailCurrency < numOfNeededCurrency){
// //         transactionTotal -= (val*numOfAvailCurrency);
// //         transactionTotal = Math.round((transactionTotal + Number.EPSILON) * val) / val;
// //         console.log(transactionTotal)
// //         for(let i =0; i<numOfAvailCurrency;i++){
// //             currentTransactionArr.push([val[0], val]);              
// //         }
// //         val[1] -= (val*numOfAvailCurrency);
// //     }
// // }
// function checkCashRegister(price, cash, cid) {
//   let transactionTotal = cash - price;
//   let registerTotal = 0;
//   cid.reverse();

//   cid.forEach(val => registerTotal += val[1]);
//   // console.log(registerTotal)
//   // console.log(transactionTotal)
//   if (transactionTotal === 0) {
//     transactionRecord.status = 'CLOSED';
//     transactionRecord.change = cid;
//     return transactionRecord;
//   }
//   if (transactionTotal < 0) {
//     transactionRecord.status = 'INSUFFICIENT_FUNDS';
//     transactionRecord.change = cid;
//     return transactionRecord;
//   }
//   if (transactionTotal > 0) {
//     cid.forEach(function (val) {
//       // console.log(val)
//       if (transactionTotal >= 100 && val[1] >= 100 && val[0] === 'ONE HUNDRED') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / 100;
//         let numOfNeededCurrency = Math.floor(transactionTotal / 100);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (100 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], 100]);
//           }
//           val[1] -= (100 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (100 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], 100]);
//           }
//           val[1] -= (100 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= 20 && val[1] >= 20 && val[0] === 'TWENTY') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / 20;
//         let numOfNeededCurrency = Math.floor(transactionTotal / 20);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (20 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], 20]);
//           }
//           val[1] -= (20 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (20 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], 20]);
//           }
//           val[1] -= (20 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= 10 && val[1] >= 10 && val[0] === 'TEN') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / 10;
//         let numOfNeededCurrency = Math.floor(transactionTotal / 10);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (10 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], 10]);
//           }
//           val[1] -= (10 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (10 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], 10]);
//           }
//           val[1] -= (10 * numOfAvailCurrency);
//         }
//       }

//       if (transactionTotal >= 5 && val[1] >= 5 && val[0] === 'FIVE') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / 5;
//         let numOfNeededCurrency = Math.floor(transactionTotal / 5);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (5 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], 5]);
//           }
//           val[1] -= (5 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (5 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], 5]);
//           }
//           val[1] -= (5 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= 1 && val[1] >= 1 && val[0] === 'ONE') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / 1;
//         let numOfNeededCurrency = Math.floor(transactionTotal / 1);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (1 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], 1]);
//           }
//           val[1] -= (1 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (1 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], 1]);
//           }
//           val[1] -= (1 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= .25 && val[1] >= .25 && val[0] === 'QUARTER') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / .25;
//         let numOfNeededCurrency = Math.floor(transactionTotal / .25);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (.25 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], .25]);
//           }
//           val[1] -= (.25 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (.25 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], .25]);
//           }
//           val[1] -= (.25 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= .1 && val[1] >= .1 && val[0] === 'DIME') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / .1;
//         let numOfNeededCurrency = Math.floor(transactionTotal / .1);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (.1 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], .10]);
//           }
//           val[1] -= (.1 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (.1 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], .10]);
//           }
//           val[1] -= (.1 * numOfAvailCurrency);
//         }
//       } console.log(transactionTotal)
//       if (transactionTotal >= .05 && val[1] >= .05 && val[0] === 'NICKEL') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / .05;
//         let numOfNeededCurrency = Math.floor(transactionTotal / .05);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (.05 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], .05]);
//           }
//           val[1] -= (.05 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (.05 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], .05]);
//           }
//           val[1] -= (.05 * numOfAvailCurrency);
//         }
//       }
//       if (transactionTotal >= .01 && val[1] >= .01 && val[0] === 'PENNY') {

//         //make into helper function later to minimize repetition
//         let numOfAvailCurrency = val[1] / .01;
//         let numOfNeededCurrency = Math.floor(transactionTotal / .01);

//         console.log(numOfNeededCurrency);

//         if (numOfAvailCurrency >= numOfNeededCurrency) {
//           transactionTotal -= (.01 * numOfNeededCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfNeededCurrency; i++) {
//             currentTransactionArr.push([val[0], .01]);
//           }
//           val[1] -= (.01 * numOfNeededCurrency);
//         }
//         if (numOfAvailCurrency < numOfNeededCurrency) {
//           transactionTotal -= (.01 * numOfAvailCurrency);
//           transactionTotal = Math.round((transactionTotal + Number.EPSILON) * 100) / 100;
//           console.log(transactionTotal)
//           for (let i = 0; i < numOfAvailCurrency; i++) {
//             currentTransactionArr.push([val[0], .01]);
//           }
//           val[1] -= (.01 * numOfAvailCurrency);
//         }
//       }
//     })
//     if (transactionTotal !== 0) {
//       transactionRecord.status = 'INSUFFICIENT_FUNDS';
//       transactionRecord.change = cid;
//     }
//   }
//   transactionRecord.status = 'OPEN';
//   transactionRecord.change = currentTransactionArr;
//   console.log(transactionRecord)
//   return transactionRecord;
// }
const currencyObj = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 1*100,
  "FIVE": 5*100,
  "TEN": 10*100,
  "TWENTY": 20*100,
  "ONE HUNDRED": 100 * 100
}

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// [
//   [1, 101],
//   [5, 41],
//   [10, 31],
//   [25, 425],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  const totalChangeDue = (cash - price)*100;
  let totalCashInDrawer = 0;
  for(const item of cid){
    totalCashInDrawer += item[1]*100;
  }
  if(totalCashInDrawer < totalChangeDue){
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }

  const availCurrency = cid.map(cidItem=> {
    const faceValue = currencyObj[cidItem[0]]
    const currencyCount = cidItem[1] * 100/ faceValue;
    return [cidItem[0], currencyCount];
  }).sort((a,b) => currencyObj[b[0]] - currencyObj[a[0]]);

  let remainingChangeDue = totalChangeDue;
  const totalChangeTendered = [];

  for(const [currencyKey, availableCount] of availCurrency){
    const faceValue = currencyObj[currencyKey];
    const neededCount = Math.floor(remainingChangeDue / faceValue);

    const amountTendered = Math.min(neededCount, availableCount);
 
    const changeTendered = faceValue * amountTendered;

    remainingChangeDue -= changeTendered;
    if (amountTendered > 0) {
      totalChangeTendered.push([currencyKey, changeTendered / 100])
    }

    if (remainingChangeDue === 0) {
      if (totalChangeDue === totalCashInDrawer) {
        return { status: 'CLOSED', change: cid };
      } else {
        return { status: 'OPEN', change: totalChangeTendered };
      }
    }
  }

  if (remainingChangeDue > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change:[]};
  }
}




checkCashRegister(153.59, 300, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  //console.log(73.59);