function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function timeDiff(){
  var date_start = new Date("09/12/2022 09:00");
  var date_today = new Date();

  var diff = date_today - date_start;

  var diff_SS_total = diff/1000;

  var diff_MS = diff%1000; //milliseconds
  var diff_HH = Math.floor(diff_SS_total/3600); //hours
  var diff_MM = Math.floor(diff_SS_total%3600)/60; //minutes including seconds
  var diff_MM_floor = Math.floor(diff_MM/1); //minutes floored
  var diff_SS = Math.round((diff_MM%1)*60); //seconds

  // var diff_SS_total = diff/1000;
  var formatted = (
    (diff_HH < 10)?("0" + diff_HH):diff_HH)
    + ":" +
    ((diff_MM_floor < 10)?("0" + diff_MM_floor):diff_MM_floor)
    + ":" +
    ((diff_SS < 10)?("0" + diff_SS):diff_SS
  );

  // console.log(date_start);
  // console.log(date_today);

  console.log("Difference: "+ formatted+" " + diff_MS);
  return formatted;
}

// ---------------------------------------------------

function updateContent() {
    var number = timeDiff();
    $("body").html(number);
}
function init() {
    updateContent();
    //setInterval(updateContent, 1000);
    // 1 second

    setInterval(updateContent, 250)
}
init();




function timeExample(){
  var start_actual_time  =  "01/17/2012 11:20";
  var end_actual_time    =  "02/18/2012 12:25";

  start_actual_time = new Date(start_actual_time);
  end_actual_time = new Date(end_actual_time);

  var diff = end_actual_time - start_actual_time;

  var diffSeconds = diff/1000;
  var HH = Math.floor(diffSeconds/3600);
  var MM = Math.floor(diffSeconds%3600)/60;

  var formatted = ((HH < 10)?("0" + HH):HH) + ":" + ((MM < 10)?("0" + MM):MM)
  alert(formatted);
}
