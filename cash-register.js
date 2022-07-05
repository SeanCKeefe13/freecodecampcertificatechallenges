//solution created alongside my mentor
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