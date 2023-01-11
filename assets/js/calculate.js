var USD = Intl.NumberFormat('en-US', ({ maximumSignificantDigits: 8 }));

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function timeDiff(){
  //returns in milliseconds

  var date_start = new Date("09/12/2022 09:00");
  var date_today = new Date();

  var diff = date_today - date_start;

  return diff
}

function timeDictionary(ms_time){
  var diff_SS_total = ms_time/1000;

  var diff_MS = ms_time%1000; //milliseconds
  var diff_DD = Math.floor(diff_SS_total/(3600*24)); //hours
  var diff_HH = Math.floor(diff_SS_total/3600) - diff_DD*24; //hours
  var diff_MM = Math.floor(diff_SS_total%3600)/60; //minutes including seconds
  var diff_MM_floor = Math.floor(diff_MM/1); //minutes floored
  // var diff_SS = Math.round((diff_MM%1)*60); //seconds
  var diff_SS = Math.round((diff_MM%1)*60); //seconds
  // var diff_SS_total = diff/1000;

  var dict = {
    "DD" : diff_DD,
    "HH" : diff_HH,
    "MM" : diff_MM_floor,
    "SS" : (diff_SS+diff_MS/1000).toFixed(1)
  }
  return dict;
}

function formatTime(ms_time){
  var diff_SS_total = ms_time/1000;

  var diff_MS = ms_time%1000; //milliseconds
  var diff_DD = Math.floor(diff_SS_total/(3600*24)); //hours
  var diff_HH = Math.floor(diff_SS_total/3600) - diff_DD*24; //hours
  var diff_MM = Math.floor(diff_SS_total%3600)/60; //minutes including seconds
  var diff_MM_floor = Math.floor(diff_MM/1); //minutes floored
  var diff_SS = Math.round((diff_MM%1)*60); //seconds
  // var diff_SS_total = diff/1000;
  var formatted = (
    padLeadingZeros(diff_DD, 3)
    + ":" +
    padLeadingZeros(diff_HH, 2)
    + ":" +
    padLeadingZeros(diff_MM_floor, 2)
    + ":" +
    padLeadingZeros(diff_SS, 2)
    + ":" +
    padLeadingZeros(diff_MS, 3)
  );
  // console.log("Difference: "+ formatted);
  return formatted;
}

function calculateShares(ms_time){
  var years_total = 4;
  var ms_total = 31556952000 * years_total;

  var shares = 46000 * ms_time/ms_total;
  return shares;
}

function calculatePercentage(ms_time){
  var years_total = 4;
  var ms_total = 31556952000 * years_total;

  var p = 100*ms_time/ms_total;
  return p;
}

function shareValues(shares){
  var value = 5.42 * shares;
  return value
}

// ---------------------------------------------------

function updateContent() {
    var calculatedTime = timeDiff();
    var formatted = formatTime(calculatedTime);
    var dict = timeDictionary(calculatedTime);
    var shares = calculateShares(calculatedTime);
    var p = calculatePercentage(calculatedTime);
    var value = shareValues(shares);

    $("#val_time_day").html(padLeadingZeros(dict.DD, 3));
    $("#val_time_hour").html(padLeadingZeros(dict.HH, 2));
    $("#val_time_min").html(padLeadingZeros(dict.MM, 2));
    $("#val_time_sec").html(padLeadingZeros(dict.SS, 2));

    $("#val_value_latest").html("$"+(USD.format(value.toFixed(7))));
    $("#val_share_gained").html(shares.toFixed(5).toLocaleString('en-US'));

    $("#label_percentage").html(p.toFixed(6)+" % gained");

    $("#loading_bar").css("width", p.toFixed(6)+"%");


    // console.log(value.toFixed(5).toLocaleString());
    // $("#time-diff").html(formatted);
    // $("#calc-gained").html(shares.toFixed(7));
    // $("#calc-value").html(value.toFixed(5));
}
function init() {
    updateContent();
    //setInterval(updateContent, 1000);
    // 1 second

    setInterval(updateContent, 100)
}
init();
