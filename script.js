// adding trades
const trades = [
  {
    id: "1",
    date: "2026-06-12",
    asset: "Equity",
    style: "Swing",
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
    date: "2026-06-10",
    asset: "Commodity",
    style: "Intraday",
    timeFrame: "15m",
    assetName: "XAUUSD",
    direction: "Short",
    entryPrice: "2700",
    exitPrice: "2680",
    quantity: "100",
    context: "Demo trade 2",
    screenshot: "",
  },
  {
    id: "3",
    date: "2026-06-03",
    asset: "Index",
    style: "Intraday",
    timeFrame: "5m",
    assetName: "NASDAQ",
    direction: "Long",
    entryPrice: "22150",
    exitPrice: "22300",
    quantity: "2",
    context: "Opening range breakout",
    screenshot: "",
  },
  {
    id: "4",
    date: "2026-06-04",
    asset: "Crypto",
    style: "Swing",
    timeFrame: "4h",
    assetName: "BTCUSD",
    direction: "Long",
    entryPrice: "104000",
    exitPrice: "102500",
    quantity: "0.1",
    context: "Failed support retest",
    screenshot: "",
  },
  {
    id: "5",
    date: "2026-06-05",
    asset: "Commodity",
    style: "Intraday",
    timeFrame: "15m",
    assetName: "XAUUSD",
    direction: "Short",
    entryPrice: "2720",
    exitPrice: "2695",
    quantity: "40",
    context: "Bearish engulfing confirmation",
    screenshot: "",
  },
  {
    id: "6",
    date: "2026-06-06",
    asset: "Forex",
    style: "Intraday",
    timeFrame: "30m",
    assetName: "GBPUSD",
    direction: "Long",
    entryPrice: "13",
    exitPrice: "14",
    quantity: "8000",
    context: "Trend continuation setup",
    screenshot: "",
  },
  {
    id: "7",
    date: "2026-06-07",
    asset: "Index",
    style: "Scalping",
    timeFrame: "1m",
    assetName: "NIFTY50",
    direction: "Short",
    entryPrice: "25850",
    exitPrice: "25780",
    quantity: "25",
    context: "Quick scalp after rejection",
    screenshot: "",
  },
  {
    id: "8",
    date: "2026-06-08",
    asset: "Crypto",
    style: "Intraday",
    timeFrame: "15m",
    assetName: "ETHUSD",
    direction: "Long",
    entryPrice: "2550",
    exitPrice: "2630",
    quantity: "2",
    context: "Breakout from consolidation",
    screenshot: "",
  },
  {
    id: "9",
    date: "2026-06-09",
    asset: "Forex",
    style: "Swing",
    timeFrame: "4h",
    assetName: "USDJPY",
    direction: "Short",
    entryPrice: "149",
    exitPrice: "150",
    quantity: "500",
    context: "Counter-trend attempt failed",
    screenshot: "",
  },
  {
    id: "10",
    date: "2026-06-10",
    asset: "Commodity",
    style: "Intraday",
    timeFrame: "15m",
    assetName: "XAUUSD",
    direction: "Short",
    entryPrice: "2700",
    exitPrice: "2680",
    quantity: "100",
    context: "Breakdown below support",
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
let displayCount = 0
function display() {
  for (let obj of trades) {
    for (let [key, value] of Object.entries(obj)) {
      // console.log(`${key}:${value}`);
    }
    // console.log("---------------------------------------");
  }

  if (trades.length === 0) {
    document.querySelector(".analytics-info p").innerText = "Add trades !";
  } else {
    document.querySelector(".analytics-heading h3").innerText = "/ Trades";
    const childrens = document.querySelector(".analytics-info").children;
    const arrOfChild = Array.from(childrens);
    for (let node of arrOfChild) {
      node.remove();
    } 

     displayCount++
    if(displayCount == 1 ){
      const analyseBtn = document.createElement('button')
      analyseBtn.className = "after-display-analyse-btn"
      analyseBtn.innerText = "Analyse"
      analyseBtn.onclick = () => analyse()
      document.querySelector('.analytics-tab').appendChild(analyseBtn)
    }
    trades.forEach((tradeObj, index) => {
      const tradeCard = document.createElement("div");
      tradeCard.className = "trade-cards";
      tradeCard.id = tradeObj.id;

      const info = document.createElement("div");
      info.className = "name-date";
      info.style.height = "100%";
      info.style.width = "100%";
      info.style.display = "flex";
      info.style.flexDirection = "column";

      const assetName = document.createElement("p");
      assetName.innerText = tradeObj.assetName;
      assetName.id = "asset-name";
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

      const pnlValue =
        tradeObj.direction === "Long"
          ? (exit - entry) * qty
          : (entry - exit) * qty;
      pnl.innerText = pnlValue;
      if (pnlValue >= 0) {
        pnl.style.color = "rgba(0, 255, 0, 0.75)";
      } else {
        pnl.style.color = "orange";
      }
      moreinfo.appendChild(pnl);
      tradeCard.appendChild(moreinfo);

      const tradeOptions = document.createElement("div");
      tradeOptions.className = "trade-options-btns";
      tradeOptions.style.height = "100%";
      tradeOptions.style.width = "100%";
      tradeOptions.style.display = "flex";
      tradeOptions.style.flexDirection = "column";
      tradeOptions.style.justifyContent = "space-between";

      const editBnt = document.createElement("button");
      editBnt.innerText = "Edit";
      editBnt.style.backgroundColor = "#00eaff91";
      editBnt.onclick = () => showOnForm(tradeObj);
      tradeOptions.appendChild(editBnt);

      const deleteBnt = document.createElement("button");
      deleteBnt.innerText = "Delete";
      deleteBnt.className = "delete-trade";
      deleteBnt.style.backgroundColor = "#f44036";
      deleteBnt.onclick = () => deleteTrade(tradeObj.date, tradeObj.id);

      tradeOptions.appendChild(deleteBnt);

      tradeCard.appendChild(tradeOptions);

      document.querySelector(".analytics-info").appendChild(tradeCard);
    });
  }
}

//-----------------------find trades by Date

const findTrade = () => {
  const filterDate = document.querySelector("#filter-date").value;
  if (filterDate) {
    let findByDate = trades.reduce((acc, val) => {
      if (val.date === filterDate) {
        acc.push(val);
        return acc;
      }
      return acc;
    }, []);

    if (findByDate.length == 0) {
      alert("Trade not found !");
    } else {
      // for (let obj of findByDate) {
      //   for (let [key, value] of Object.entries(obj)) {
      //     console.log(`${key}:${value}`);
      //   }
      //   console.log("-------------------------------------");
      // }
      document.querySelector(".analytics-heading h3").innerText = "/ Trades";
      const childrens = document.querySelector(".analytics-info").children;
      const arrOfChild = Array.from(childrens);
      for (let node of arrOfChild) {
        node.remove();
      }

      findByDate.forEach((tradeObj, index) => {
        const tradeCard = document.createElement("div");
        tradeCard.className = "trade-cards";
        tradeCard.id = tradeObj.id;

        const info = document.createElement("div");
        info.className = "name-date";
        info.style.height = "100%";
        info.style.width = "100%";
        info.style.display = "flex";
        info.style.flexDirection = "column";

        const assetName = document.createElement("p");
        assetName.innerText = tradeObj.assetName;
        assetName.id = "asset-name";
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

        const pnlValue =
          tradeObj.direction === "Long"
            ? (exit - entry) * qty
            : (entry - exit) * qty;
        pnl.innerText = pnlValue;
        if (pnlValue >= 0) {
          pnl.style.color = "rgba(0, 255, 0, 0.75)";
        } else {
          pnl.style.color = "orange";
        }
        moreinfo.appendChild(pnl);
        tradeCard.appendChild(moreinfo);

        const tradeOptions = document.createElement("div");
        tradeOptions.className = "trade-options-btns";
        tradeOptions.style.height = "100%";
        tradeOptions.style.width = "100%";
        tradeOptions.style.display = "flex";
        tradeOptions.style.flexDirection = "column";
        tradeOptions.style.justifyContent = "space-between";

        const editBnt = document.createElement("button");
        editBnt.innerText = "Edit";
        editBnt.style.backgroundColor = "#00eaff91";
        editBnt.onclick = () => showOnForm(tradeObj);
        tradeOptions.appendChild(editBnt);

        const deleteBnt = document.createElement("button");
        deleteBnt.innerText = "Delete";
        deleteBnt.className = "delete-trade";
        deleteBnt.style.backgroundColor = "#f44036";
        deleteBnt.onclick = () => deleteTrade(tradeObj.date, tradeObj.id);

        tradeOptions.appendChild(deleteBnt);

        tradeCard.appendChild(tradeOptions);

        document.querySelector(".analytics-info").appendChild(tradeCard);
      });
    }
  } else {
    alert("Select date !");
  }
};

//------------------------deleting trade

const deleteTrade = (date, id) => {
  let counter = 0;
  let deletedTrades = [];
  for (let key = trades.length - 1; key >= 0; key--) {
    if (date && id && trades[key].date == date && trades[key].id == id) {
      //  console.log("true condition 2");
      deletedTrades.push(trades.splice(key, 1));
      counter++;
    }
  }
  if (counter) {
    alert("Trade deleted successfully !");
    document.getElementById(id).remove();
  } else {
    console.log("Trade not found !");
  }
};
// deleteTrade("2026-12-6")
// deleteTrade("2026-8-6")

// ------------------------Update existing trades
const showOnForm = (tradeObj) => {
  console.log(tradeObj);
  document.querySelector("form h3").innerText = "/ Edit Your Trade";

  document.querySelector("#select-date").value = tradeObj.date;
  document.querySelector("#select-asset").value = tradeObj.asset;
  document.querySelector("#select-style").value = tradeObj.style;
  document.querySelector("#select-TF").value = tradeObj.timeFrame;
  document.querySelector("#select-asset-name").value = tradeObj.assetName;
  document.querySelector("#select-direction").value = tradeObj.direction;
  document.querySelector("#entry-price").value = tradeObj.entryPrice;
  document.querySelector("#exit-price").value = tradeObj.exitPrice;
  document.querySelector("#enter-qnt").value = tradeObj.quantity;
  document.querySelector("#add-context").value = tradeObj.context;
  document.querySelector("#file-upload").files[0];

  const updateBtn = document.querySelector(".row-6 input");
  updateBtn.value = "Update";
  updateBtn.onclick = () => updateTrade(tradeObj.id);
};

const updateTrade = (tradeId) => {
  const trade = {
    id: tradeId,
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
  console.log(trade);

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
    // console.log("Trade updated successfully !");
    alert("Trade updated successfully !");
    document.querySelector("form").reset();

    const addBtn = document.querySelector(".row-6 input");
    addBtn.value = "Add Trade";
    addBtn.onclick = () => addTrade();
  } else {
    // console.log("Given Id does not exist !",trade);
    alert("Given Id does not exist !");
  }
};
// updateTrade({ id:1, assetName:"Mahindra Motors", asset:"Equity", entryPrice:1780, exitPrice:2000 });

// -----------------------analytics tab
const analyse = () => {
  const nodes = Array.from(document.querySelector(".analytics-info").children);
  for (let value of nodes) {
    value.remove();
  }
    const lastNode = document.querySelector(".analytics-tab").children
    if(lastNode.length == 3){
    lastNode[2].remove()
  }

  if (trades.length === 0) {
    const para1 = document.createElement("p");
    para.innerText = "No analytics available.";
    const para2 = document.createElement("p");
    para.innerText = "Add trades and click Analyse.";
    document.querySelector(".analytics-info").appendChild(para1);
    document.querySelector(".analytics-info").appendChild(para2);
  } else {
    // ----------NET PNL
    displayCount = 0
    let totalTrades = 0;
    


    const netPnl = trades.reduce((acc, trade) => {
      totalTrades++;
      const entry = Number(trade.entryPrice);
      const exit = Number(trade.exitPrice);
      const qty = Number(trade.quantity);
      let pnl = trade.direction == "Long" ? (exit - entry) * qty : (entry - exit) * qty;
      return acc + pnl;
    }, 0);
    // console.log(netPnl);

    // ------------WIN Rate
    let wins = 0;
    let losses = 0;
    let totalOfWin = 0;
    let totalOfLoss = 0;

    trades.forEach((trade) => {
      const entry = Number(trade.entryPrice);
      const exit = Number(trade.exitPrice);
      const qty = Number(trade.quantity);
      let pnl =
        trade.direction == "Long" ? (exit - entry) * qty : (entry - exit) * qty;
      if (pnl > 0) {
        wins++;
        totalOfWin += pnl 
      } else {
        losses++;
        totalOfLoss += pnl
      }
    });
    const winRate = (wins / totalTrades) * 100
    // console.log(winRate);
    const avgWin = Math.trunc(totalOfWin / wins)
    const avgLoss = Math.trunc(totalOfLoss / losses)
    
    
    // --------BEST & WORST TRADE 
    let profitableAsset = ""
    let lossMakingAsset = ""
    const bestTrade = trades.reduce((acc, trade) => {
      const entry = Number(trade.entryPrice);
      const exit = Number(trade.exitPrice);
      const qty = Number(trade.quantity);
      let pnl = trade.direction == "Long" ? (exit - entry) * qty : (entry - exit) * qty;
      if(pnl > acc){
        acc = pnl
        profitableAsset = trade.asset
        return acc
      }else{
        return acc
      }
    },0)
    // console.log(profitableAsset);

    const worstTrade = trades.reduce((acc, trade) => {
      const entry = Number(trade.entryPrice);
      const exit = Number(trade.exitPrice);
      const qty = Number(trade.quantity);
      let pnl = trade.direction == "Long" ? (exit - entry) * qty : (entry - exit) * qty;
      if(pnl < acc){
        acc = pnl
        lossMakingAsset = trade.asset
        // console.log(pnl);
        return acc
      }else{
        return acc
      }
    },0)
    // console.log(lossMakingAsset);

    const heading = document.createElement("p");
    heading.innerText = "Your Stats !";
    document.querySelector(".analytics-info").appendChild(heading);

    const statCard = document.createElement("div");
    statCard.className = "stat-card";
    document.querySelector(".analytics-info").appendChild(statCard);

    const PNL = document.createElement("p");
    PNL.className = "p&l";
    PNL.style.margin = "2px"
    if (netPnl > 0) {
      PNL.style.color = "#00dd00";
      PNL.innerText = `Net P/L : +${netPnl}`;
    } else if (netPnl < 0) {
      PNL.style.color = "#dd6300";
      PNL.innerText = `Net P/L : -${netPnl}`;
    } else {
      PNL.innerText = `Net P/L : ${netPnl}`;
    }
    document.querySelector(".stat-card").appendChild(PNL);

    const tradeCount = document.createElement("p");
    tradeCount.style.margin = "2px"
    tradeCount.innerText = `Total Trades : ${totalTrades}`;
    document.querySelector(".stat-card").appendChild(tradeCount);

    const totalWinrate = document.createElement("p");
    totalWinrate.style.margin = "2px"
    totalWinrate.innerText = `Win Rate : ${winRate}%`;
    document.querySelector(".stat-card").appendChild(totalWinrate);

    const bestAsset = document.createElement("p");
    bestAsset.style.margin = "2px"
    bestAsset.innerText = `Best Performing Asset : ${profitableAsset}`;
    document.querySelector(".stat-card").appendChild(bestAsset);

    const poorAsset = document.createElement("p");
    poorAsset.style.margin = "2px"
    poorAsset.innerText = `Poor Performing Asset : ${lossMakingAsset}`;
    document.querySelector(".stat-card").appendChild(poorAsset);

    const avgwin = document.createElement("p");
    avgwin.style.margin = "2px"
    avgwin.innerText = `Avg Win : ${avgWin}`;
    document.querySelector(".stat-card").appendChild(avgwin);

    const avgloss = document.createElement("p");
    avgloss.style.margin = "2px"
    avgloss.innerText = `Avg loss : ${avgLoss}`;
    document.querySelector(".stat-card").appendChild(avgloss);

  }
};
