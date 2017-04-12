

function Statistics(){
  this.cohorts = [];
}

Statistics.prototype.runTTest1 = function() {
  var tTest = 0;
  var introAvg = this.cohorts[0].averageCarbon();
  var introSDsq = this.cohorts[0].standardDeviation() ** 2;
  var introN = this.cohorts[0].emissions.length;
  var javaAvg = this.cohorts[1].averageCarbon();
  var javaSDsq = this.cohorts[1].standardDeviation() ** 2;
  var javaN = this.cohorts[1].emissions.length;

  tTest = Math.abs(introAvg - javaAvg) / (Math.sqrt((introSDsq/introN) + (javaSDsq/javaN)));

  return tTest;
}

Statistics.prototype.runTTest2 = function() {
  var tTest = 0;
  var introAvg = this.cohorts[0].averageCarbon();
  var introSDsq = this.cohorts[0].standardDeviation() ** 2;
  var introN = this.cohorts[0].emissions.length;
  var jSAvg = this.cohorts[2].averageCarbon();
  var jSSDsq = this.cohorts[2].standardDeviation() ** 2;
  var jSN = this.cohorts[2].emissions.length;

  tTest = Math.abs(introAvg - jSAvg) / (Math.sqrt((introSDsq/introN) + (jSSDsq/jSN)));

  return tTest;
}

Statistics.prototype.runTTest3 = function() {
  var tTest = 0;
  var javaAvg = this.cohorts[1].averageCarbon();
  var javaSDsq = this.cohorts[1].standardDeviation() ** 2;
  var javaN = this.cohorts[1].emissions.length;
  var jSAvg = this.cohorts[2].averageCarbon();
  var jSSDsq = this.cohorts[2].standardDeviation() ** 2;
  var jSN = this.cohorts[2].emissions.length;

  tTest = Math.abs(javaAvg - jSAvg) / (Math.sqrt((javaSDsq/javaN) + (jSSDsq/jSN)));

  return tTest;
}

function Cohort(){
  this.emissions = [];
}

Cohort.prototype.totalCarbon = function() {
  totalCarbon = 0;
  this.emissions.forEach(function(student){
    totalCarbon += student;
  });
  return totalCarbon;
}
//
Cohort.prototype.averageCarbon = function() {
  var average = this.totalCarbon() / this.emissions.length
  return average;
}

Cohort.prototype.standardDeviation = function() {
  var sum = 0;
  var avg = this.averageCarbon();
  this.emissions.forEach(function(student){
    sum += (Math.abs(student - avg) ** 2);
  });

  beforeSQRT = sum / (this.emissions.length -1);
  stDev = Math.sqrt(beforeSQRT);
  return stDev;
}



// USER INTERFACE
$(function(){

  let all3Cohorts = new Statistics();


  $("#introBtn").click(function(){
    let introCohort = new Statistics();
    let introData = new Cohort();
    $("#intro-class input").each(function(){
      let emission = parseFloat($(this).val());
      introData.emissions.push(emission);
    });
    all3Cohorts.cohorts.push(introData);
    console.log(all3Cohorts.cohorts[0].totalCarbon());
    let totalC = introData.totalCarbon();
    let averageC = (introData.averageCarbon()).toFixed(2);
    let stdDev = (introData.standardDeviation()).toFixed(2);
    $("#introTotal").text(totalC);
    $("#introAverage").text(averageC);
    $("#introStDev").text(stdDev);


  })

  $("#javaBtn").click(function(){
    let javaCohort = new Statistics();
    let javaData = new Cohort();
    $("#java-class input").each(function(){
      let emission = parseFloat($(this).val());
      javaData.emissions.push(emission);
    });
    all3Cohorts.cohorts.push(javaData);
    console.log(all3Cohorts.cohorts[1].totalCarbon());
    let totalC = javaData.totalCarbon();
    let averageC = javaData.averageCarbon();
    let stdDev = (javaData.standardDeviation()).toFixed(2);
    $("#javaTotal").text(totalC);
    $("#javaAverage").text(averageC);
    $("#javaStDev").text(stdDev);

  })

  $("#jSBtn").click(function(){
    let jSCohort = new Statistics();
    let jSData = new Cohort();
    $("#jS-class input").each(function(){
      let emission = parseFloat($(this).val());
      jSData.emissions.push(emission);
    });
    all3Cohorts.cohorts.push(jSData);
    console.log(all3Cohorts.cohorts[2].averageCarbon());
    let totalC = jSData.totalCarbon();
    let averageC = jSData.averageCarbon();
    let stdDev = (jSData.standardDeviation()).toFixed(2);
    $("#jSTotal").text(totalC);
    $("#jSAverage").text(averageC);
    $("#jSStDev").text(stdDev);

  })

  $("#intro-v-java").click(function(){
    tValue = (all3Cohorts.runTTest1()).toFixed(3);
    console.log(tValue);
    $("#intro-java-T-result").text(tValue);
  })

  $("#intro-v-jS").click(function(){
    tValue = (all3Cohorts.runTTest2()).toFixed(3);
    console.log(tValue);
    $("#intro-jS-T-result").text(tValue);
  })

  $("#java-v-jS").click(function(){
    tValue = (all3Cohorts.runTTest3()).toFixed(3);
    console.log(tValue);
    $("#java-jS-T-result").text(tValue);
  })

});
