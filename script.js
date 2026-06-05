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
const trades = [];

const addTrade = (tradeObj) => {
  if (tradeObj) {
    trades.push(tradeObj);
    return "trade saved successfuly";
  } else {
    return "Add trade details !";
  }
};

console.log(
  addTrade({
    stockName: "HDFC",
    date:"5/6/26",
    entryPrice: 1400,
    stopLoss: 1300,
    target: 1600,
    entryReason: "momentum shift and breakout of trendline with good volume in prior direction",
  }),
);

addTrade({
    stockName: "SBI",
    date:"1/6/26",
    entryPrice: 700,
    stopLoss: 650,
    target: 800,
    entryReason: "Multi year breakout, good volume, selling exhaustion",
  })

console.log(trades);

// updating trades

const updateTrade = (trade) => {
   for(let i = 0; i<trades.length; i++){

      if(trade.stockName == trades[i].stockName && trade.date == trades[i].date){
         // console.log("trade found");
         for(let [key,value] of Object.entries(trade)){
            trades[i][key] = value
         }
         console.log("trade updated !");
         console.log(trades[i]);
      }
   }  
}

updateTrade({stockName:"HDFC",date:"5/6/26", entryPrice:1500, target:1700})
updateTrade({stockName:"SBI", date:"1/6/26", entryReason:"price is at oversold area, and selling exhaustion is visible, took a trade on bullish momentum with resistance breakout"})
