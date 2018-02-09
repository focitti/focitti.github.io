function move() {
  /* get current date */
  var currDate = new Date()
  /* since c++ is the oldest language, all other time periods compared to it */
  var goldStandard = monthDiff(new Date(2015, 11, 31),currDate);
  /* c++ chart */
  var cpluselem = document.getElementById("cplus");   
  var cpluswidth = 1;
  var cplusid = setInterval(cplusframe, 10);
  function cplusframe() {
  	/* width 100% because benchmark */
    if (cpluswidth >= 100) {
      clearInterval(cplusid);
    } else {
      cpluswidth++; 
      cpluselem.style.width = cpluswidth + '%'; 
    }
  }
  /* R chart */
  var relem = document.getElementById("r");   
  var rwidth = 1;
  /* date started learning R */
  var rDate = new Date(2016, 7, 31)
  /* number of months learning R */
  var rMonthDifference = monthDiff(rDate, currDate);
  /* % of time spent on R compared to c++ */
  var rFinalWidth = (rMonthDifference/goldStandard) * 100;
  var rid = setInterval(rframe, 10);
  function rframe() {
    if (rwidth >= rFinalWidth) {
      clearInterval(rid);
    } else {
      rwidth++; 
      relem.style.width = rwidth + '%'; 
    }
  }
  /* c chart */
  var celem = document.getElementById("c");   
  var cwidth = 1;
  var cDate = new Date(2016, 11, 31)
  var cMonthDifference = monthDiff(cDate, currDate);
  var cFinalWidth = (cMonthDifference/goldStandard) * 100;
  var cid = setInterval(cframe, 10);
  function cframe() {
    if (cwidth >= cFinalWidth) {
      clearInterval(cid);
    } else {
      cwidth++; 
      celem.style.width = cwidth + '%'; 
    }
  }
  /* html chart */
  var htmlelem = document.getElementById("html");   
  var htmlwidth = 1;
  var htmlDate = new Date(2017, 5, 31)
  var htmlMonthDifference = monthDiff(htmlDate, currDate);
  var htmlFinalWidth = (htmlMonthDifference/goldStandard) * 100;
  var htmlid = setInterval(htmlframe, 10);
  function htmlframe() {
    if (htmlwidth >= htmlFinalWidth) {
      clearInterval(htmlid);
    } else {
      htmlwidth++; 
      htmlelem.style.width = htmlwidth + '%'; 
    }
  } 
  /* javascript chart */
  var javascriptelem = document.getElementById("javascript");   
  var javascriptwidth = 1;
  var javascriptDate = new Date(2017, 5, 31)
  var javascriptMonthDifference = monthDiff(javascriptDate, currDate);
  var javascriptFinalWidth = (javascriptMonthDifference/goldStandard) * 100;
  var javascriptid = setInterval(javascriptframe, 10);
  function javascriptframe() {
    if (javascriptwidth >= javascriptFinalWidth) {
      clearInterval(javascriptid);
    } else {
      javascriptwidth++; 
      javascriptelem.style.width = javascriptwidth + '%'; 
    }
  }  
}
/* find difference between two dates in months. code from T.J. Crowder and could be found on https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript */
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}


       