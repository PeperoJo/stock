var valuations = [
  {
    "label" : "Latest",
    "hasPassed": true,
    "valuation" : 1600000000.00,
    "shareValue" : 5.420
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
    "label" : "Likely",
    "hasPassed": false,
    "valuation" : 10000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "Nice",
    "hasPassed": false,
    "valuation" : 20000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "Dtdg",
    "hasPassed": false,
    "valuation" : 40000000000.00,
    "shareValue" : 0
  },
  {
    "label" : "Dream",
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
  var gainedShares = $("#val_share_gained").html();


  for(var i = 0; i < valuations.length; i++) {
    var val = valuations[i];
    let USD = Intl.NumberFormat('en-US');
    var multiplier = val.valuation/joiningVal;
    var equity = ((val.shareValue>0)?(val.shareValue*46000):(joiningEquity*multiplier));
    var shareVal = (val.shareValue>0)?((val.shareValue).toFixed(2)):(USD.format(multiplier*joiningShare));

    var row_template_old = `
      <tr class="${val.hasPassed?'table-success':''}">
        <th scope="row">${val.label}</th>
        <td class="text-end">$ ${(val.valuation/1000000000).toFixed(3)+" B"}</td>
        <td class="text-end">${multiplier.toFixed(2)} x</td>
        <td class="text-end">$ ${shareVal}</td>
        <td class="text-end">$ ${USD.format(equity)}</td>
        <td class="text-end">$ ${USD.format((gainedShares*shareVal).toFixed(5))}</td>
      </tr>
    `;


    var FormattedEquity = (equity<1000000)?((equity/1000).toFixed(2)+"K"):((equity/1000000).toFixed(2)+"M");

    var row_template = `
      <div class="card2 mb-3">
        <div class="row">
          <div class="col-sm-12 col-lg-8">
            <div class="row pb-4">
              <div class="col growth_title">
                <h3>${val.label}</h3>
                <span class="val3 color-purple">x${multiplier.toFixed(2)}</span>
              </div>
              <div class="col">
                <h3>Valuation</h3>
                <span class="val3">$${(val.valuation/1000000000).toFixed(3)+"B"}</span>
              </div>
              <div class="col">
                <h3>Share</h3>
                <span class="val3">$${shareVal}</span>
              </div>
              <div class="col">
                <h3>Equity</h3>
                <span class="val3">$${FormattedEquity}</span>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-lg-4">
            <div class="row">
              <div class="col" id="value_latest">
                <h3>Est. Gained Value</h3>
                <span class="val2">$${USD.format((gainedShares*shareVal))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    var row_template2 = `
      <div class="card2 mb-3">
        <div class="row pb-4">
          <div class="col growth_title">
            <h3>${val.label}</h3>
            <span class="val3 color-purple">x${multiplier.toFixed(2)}</span>
          </div>
          <div class="col">
            <h3>Valuation</h3>
            <span class="val3">$${(val.valuation/1000000000).toFixed(3)+"B"}</span>
          </div>
          <div class="col">
            <h3>Share</h3>
            <span class="val3">$${shareVal}</span>
          </div>
          <div class="col">
            <h3>Equity</h3>
            <span class="val3">$${FormattedEquity}</span>
          </div>
        </div>
        <div class="row">
          <div class="col" id="value_latest">
            <h3>Est. Gained Value</h3>
            <span class="val2">$${USD.format((gainedShares*shareVal))}</span>
          </div>
        </div>
      </div>
    `;

    tableDetails += row_template;
  }

  $("#growth_info").html(tableDetails);
}

function updateTable() {
    generateTable();
    //setInterval(updateContent, 1000);
    // 1 second

    setInterval(generateTable, 3000)
}
updateTable();
