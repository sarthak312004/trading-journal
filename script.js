/*
=========================================================
PROJECT: Trading Journal & Performance Analyzer
=========================================================

PROBLEM STATEMENT:
Many beginner traders record trades inconsistently and
struggle to analyze their performance over time.
Without proper records, it becomes difficult to identify
winning patterns, common mistakes, profitability,
and overall trading progress

This project aims to build a Trading Journal system
that stores trade information and provides detailed
performance analysis using JavaScript.

---------------------------------------------------------
PROJECT GOALS:

1. Store trade details efficiently using arrays and objects.

2. Allow users to:
   - Add new trades
   - Update existing trades
   - Delete trades
   - Search trades

3. Calculate trading statistics:
   - Profit/Loss per trade
   - Total Profit/Loss
   - Average Profit/Loss
   - Win Rate
   - Loss Rate

4. Analyze trading performance:
   - Best trade
   - Worst trade
   - Most traded stock
   - Most profitable stock
   - Most profitable day

5. Track consistency:
   - Winning streak
   - Losing streak

6. Generate summaries:
   - Daily Summary
   - Weekly Summary
   - Monthly Summary

7. Sort and filter trade records based on:
   - Profit/Loss
   - Date
   - Stock Name

---------------------------------------------------------
LEARNING OBJECTIVES:

- Variables and Data Types
- Operators
- Conditional Statements
- Loops
- Functions
- Arrays
- Objects
- String Methods
- Date & Time Handling
- Math Operations
- Searching Algorithms
- Sorting Techniques
- Data Analysis Logic
=========================================================
*/

// adding trades
const trades = [
  {
    date: "2026-8-6",
    asset: "Equity",
    style: "swing",
    timeFrame: "4hr",
    assetName: "HDFC",
    direction: "Long",
    entryPrice: "1400",
    exitPrice: "1500",
    quantity: "10",
    context: "Demo trade 1",
    screenshot: "",
  },
  {
    date: "2026-12-6",
    asset: "Commodities",
    style: "Intraday",
    timeFrame: "15",
    assetName: "GOLD",
    direction: "Short",
    entryPrice: "2700",
    exitPrice: "2680",
    quantity: "1",
    context: "Demo trade 2",
    screenshot: "",
  },
];

const addTrade = () => {
  const tradeInfo = {
    date: document.querySelector("#select-date").value,
    asset: document.querySelector("#select-asset").value,
    style: document.querySelector("#select-style").value,
    timeFrame: document.querySelector("#select-TF").value,
    assetName: document.querySelector("#select-asset-name").value,
    direction: document.querySelector("#select-direction").value,
    entryPrice: document.querySelector("#entry-price").value,
    exitPrice: document.querySelector("#exit-price").value,
    quantity: document.querySelector("#enter-qnt").value,
    context: document.querySelector("#add-context").value,
    screenshot: document.querySelector("#file-upload").files[0],
  };
  // console.log(tradeInfo);

const impInputs = ["date", "assetName", "direction" ,"entryPrice" ,"exitPrice" ,"quantity" ]
let emptyInputs = []
  if (
    (tradeInfo.date &&
      tradeInfo.assetName &&
      tradeInfo.direction &&
      tradeInfo.entryPrice &&
      tradeInfo.exitPrice &&
      tradeInfo.quantity) == false
  ) {
    for(let inputKey of impInputs){
      if(!tradeInfo[inputKey]){
         emptyInputs.push(inputKey)
      }
    }
     alert(`Enter :${emptyInputs}`)
    }
     else {
    trades.push(tradeInfo);
  }
  
//   console.log(emptyInputs);
//   console.log(trades);
};

//------------------find trades by Date

const findTrade = (...date) => {
  const findByDate = trades.reduce((acc, val) => {
    for (let tradeDate of date) {
      if (val.date === tradeDate) {
        acc.push(val);
      }
    }
    return acc;
  }, []);

  if (findByDate.length == 0) {
    return "Trade Not Found !";
  } else {
    return findByDate;
  }
};
console.log(findTrade("2026-8-6", "2026-12-6"));

// updating trades

// const updateTrade = (trade) => {
//    for(let i = 0; i<trades.length; i++){

//       if(trade.stockName == trades[i].stockName && trade.date == trades[i].date){
//          // console.log("trade found");
//          for(let [key,value] of Object.entries(trade)){
//             trades[i][key] = value
//          }
//          console.log("trade updated !");
//          console.log(trades[i]);
//       }
//    }
// }

// updateTrade({stockName:"HDFC",date:"5/6/26", entryPrice:1500, target:1700})
// updateTrade({stockName:"SBI", date:"1/6/26", entryReason:"price is at oversold area, and selling exhaustion is visible, took a trade on bullish momentum with resistance breakout"})
