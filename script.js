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

console.log("To diplay all trade: display()");
console.log("To search trade: findTrade('YYYY-DD-MM',)");
console.log("To delete trade: deleteTrade('YYYY-DD-MM','id')");
console.log("To update trade: updateTrade({id:'', attributes:'value'})");

// adding trades
const trades = [
  {
    id: "1",
    date: "2026-8-6",
    asset: "Equity",
    style: "swing",
    timeFrame: "4hr",
    assetName: "HDFC",
    direction: "Long",
    entryPrice: "1600",
    exitPrice: "1500",
    quantity: "10",
    context: "Demo trade 1",
    screenshot: "",
  },
  {
    id: "2",
    date: "2026-12-6",
    asset: "Commodities",
    style: "Intraday",
    timeFrame: "15",
    assetName: "XAUUSD",
    direction: "Short",
    entryPrice: "2700",
    exitPrice: "2680",
    quantity: "50",
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

  // >>>>>>>> giving unique ID
  if (trades.length != 0) {
    const preTrade = trades.length - 1;
    tradeInfo.id = parseInt(trades[preTrade].id) + 1;
  } else {
    tradeInfo.id = 1;
  }

  // >>>>>>>>input validation
  const impInputs = [
    "date",
    "assetName",
    "direction",
    "entryPrice",
    "exitPrice",
    "quantity",
  ];
  let emptyInputs = [];
  if (
    !(
      tradeInfo.date &&
      tradeInfo.assetName &&
      tradeInfo.direction &&
      tradeInfo.entryPrice &&
      tradeInfo.exitPrice &&
      tradeInfo.quantity
    )
  ) {
    for (let inputKey of impInputs) {
      if (!tradeInfo[inputKey]) {
        emptyInputs.push(inputKey);
      }
    }
    alert(`Enter :${emptyInputs}`);
  } else {
    alert("Trade Added Successfully !");
    trades.push(tradeInfo);
    document.querySelector("form").reset();
  }

  //console.log(emptyInputs);
  // console.log(trades);
};

// -----------------display all existing trades
function display() {
  for (let obj of trades) {
    for (let [key, value] of Object.entries(obj)) {
      // console.log(`${key}:${value}`);
    }
    // console.log("---------------------------------------");
  }

  document.querySelector(".analytics-heading h3").innerText = "/ Trades";
  for (let node of document.querySelector(".analytics-info").children) {
    node.remove();
  }

  trades.forEach((tradeObj, index) => {
    const tradeCard = document.createElement("div");
    tradeCard.className = "trade-cards";

    const info = document.createElement("div");
    info.className = "name-date";
    info.style.height = "100%";
    info.style.width = "100%";
    info.style.display = "flex";
    info.style.flexDirection = "column";

    const assetName = document.createElement("p");
    assetName.innerText = tradeObj.assetName;
    assetName.style.margin = "0";
    info.appendChild(assetName);
    tradeCard.appendChild(info);


    const tradeDate = document.createElement("p");
    tradeDate.innerText = tradeObj.date;
    tradeDate.style.margin = "0";
    tradeDate.style.fontSize = "0.8rem";
    info.appendChild(tradeDate);

    const moreinfo = document.createElement("div");
    moreinfo.className = "more-info";
    moreinfo.style.height = "100%";
    moreinfo.style.width = "100%";
    moreinfo.style.display = "flex";
    moreinfo.style.flexDirection = "column";

    const tradeDirection = document.createElement("p");
    tradeDirection.innerText = tradeObj.direction;
    tradeDirection.style.margin = "0";
    tradeDirection.style.fontSize = "0.8rem";
    moreinfo.appendChild(tradeDirection);

    const pnl = document.createElement("p");
    pnl.style.margin = "0";
    pnl.style.fontSize = "0.8rem";
    const entry = Number(tradeObj.entryPrice);
    const exit = Number(tradeObj.exitPrice);
    const qty = Number(tradeObj.quantity);
    
    const pnlValue = tradeObj.direction === "Long"? (exit-entry)*qty : (entry-exit)*qty;
    pnl.innerText = pnlValue
    if(pnlValue >= 0){
      pnl.style.color = "rgba(0, 255, 0, 0.75)"
    }else{
      pnl.style.color = "orange"
    }
    moreinfo.appendChild(pnl);
    tradeCard.appendChild(moreinfo);


    const tradeOptions = document.createElement('div')
    tradeOptions.className = "trade-options-btns"
    tradeOptions.style.height = "100%";
    tradeOptions.style.width = "100%";
    tradeOptions.style.display = "flex";
    tradeOptions.style.flexDirection = "column";
    tradeOptions.style.justifyContent = "space-between";

    const editBnt = document.createElement('button')
    editBnt.innerText = "Edit"
    editBnt.style.backgroundColor = "#00eaff91"
    tradeOptions.appendChild(editBnt)

    const deleteBnt = document.createElement('button')
    deleteBnt.innerText = "Delete"
    deleteBnt.style.backgroundColor = "#f44036"

    tradeOptions.appendChild(deleteBnt)
    
    tradeCard.appendChild(tradeOptions)

  

    document.querySelector(".analytics-info").appendChild(tradeCard);
  });
}

//-----------------------find trades by Date

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
    for (let obj of findByDate) {
      for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}:${value}`);
      }
      console.log("-------------------------------------");
    }
  }
};

//------------------------deleting trade

const deleteTrade = (date, id) => {
  let counter = 0;
  let deletedTrades = [];
  for (let key = trades.length - 1; key >= 0; key--) {
    if (date && !id && trades[key].date == date) {
      // console.log("true condition 1",trades[key].id);
      deletedTrades.push(trades.splice(key, 1));
      counter++;
    } else if (date && id && trades[key].date == date && trades[key].id == id) {
      //  console.log("true condition 2");
      deletedTrades.push(trades.splice(key, 1));
      counter++;
    }
  }
  if (counter) {
    console.log("Trade deleted successfully !", deletedTrades);
  } else {
    console.log("Trade not found !");
  }
};
// deleteTrade("2026-12-6")
// deleteTrade("2026-8-6")

// ------------------------Update existing trades
const updateTrade = (trade) => {
  let isExist = false;
  if (trade.id) {
    for (let obj of trades) {
      if (obj.id == trade.id) {
        isExist = true;
        for (let [key, value] of Object.entries(trade)) {
          obj[key] = value;
        }
      }
    }
  } else {
    console.log("Enter trade id");
  }
  if (isExist) {
    console.log("Trade updated successfully !");
  } else {
    console.log("Give Id does not exist !");
  }
};
// updateTrade({ id:1, assetName:"Mahindra Motors", asset:"Equity", entryPrice:1780, exitPrice:2000 });
