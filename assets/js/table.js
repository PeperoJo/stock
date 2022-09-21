var valuations = [
  {
    "label" : "Latest",
    "hasPassed": true,
    "valuation" : 1371614938.00,
    "shareValue" : 5.200
  },
  {
    "label" : "Joining",
    "hasPassed": true,
    "valuation" : 1371614938.00,
    "shareValue" : 5.200
  },
  {
    "label" : "Safe",
    "hasPassed": false,
    "valuation" : 5000000000.00,
    "shareValue" : 0
  },{
    "label" : "Realistic",
    "hasPassed": false,
    "valuation" : 10000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "Damn Nice",
    "hasPassed": false,
    "valuation" : 20000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "Datadog",
    "hasPassed": false,
    "valuation" : 40000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "What is work",
    "hasPassed": false,
    "valuation" : 60000000000.00,
    "shareValue" : 0
  }
];


function generateTable(){
  var tableDetails = "";

  var joiningVal = valuations[1].valuation;
  var joiningShare = valuations[1].shareValue;
  var joiningEquity = 46000*joiningShare;
  var gainedShares = $("#calc-gained").html();

  for(var i = 0; i < valuations.length; i++) {
    var val = valuations[i];
    let USD = Intl.NumberFormat('en-US');
    var multiplier = val.valuation/joiningVal;
    var equity = ((val.shareValue>0)?(val.shareValue*46000):(joiningEquity*multiplier));
    var shareVal = (val.shareValue>0)?((val.shareValue).toFixed(2)):(USD.format(multiplier*joiningShare));

    var row_template = `
      <tr class="${val.hasPassed?'table-success':''}">
        <th scope="row">${val.label}</th>
        <td class="text-end">$ ${(val.valuation/1000000000).toFixed(3)+" B"}</td>
        <td class="text-end">${multiplier.toFixed(2)} x</td>
        <td class="text-end">$ ${shareVal}</td>
        <td class="text-end">$ ${USD.format(equity)}</td>
        <td class="text-end">$ ${USD.format((gainedShares*shareVal).toFixed(5))}</td>
      </tr>
    `;
    tableDetails += row_template;
  }

  $("#chart-rows").html(tableDetails);
}

function updateTable() {
    generateTable();
    //setInterval(updateContent, 1000);
    // 1 second

    setInterval(generateTable, 3000)
}
updateTable();
