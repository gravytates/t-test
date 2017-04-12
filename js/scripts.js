function Cohort(totalCarbon){
  this.emissions = [];
  // this.totalCarbon = totalCarbon;
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
    sum += Math.abs(student - avg);
  });
  sqSum = sum ** 2;
  beforeSQRT = sqSum / (this.emissions.length -1);
  stDev = Math.sqrt(beforeSQRT);
  console.log(stDev);
  return stDev;
}




$(function(){
  $("#introBtn").click(function(){
    let introData = new Cohort();
    $("#intro-class input").each(function(){
      let emission = parseFloat($(this).val());
      introData.emissions.push(emission);
    });
    let totalC = introData.totalCarbon();
    let averageC = introData.averageCarbon();
    let stdDev = (introData.standardDeviation()).toFixed(2);
    $("#introTotal").text(totalC);
    $("#introAverage").text(averageC);
    $("#introStDev").text(stdDev);

  })

  $("#javaBtn").click(function(){
    let javaData = new Cohort();
    $("#java-class input").each(function(){
      let emission = parseFloat($(this).val());
      javaData.emissions.push(emission);
    });
    console.log(javaData.emissions);
    let totalC = javaData.totalCarbon();
    let averageC = javaData.averageCarbon();
    let stdDev = (javaData.standardDeviation()).toFixed(2);
    $("#javaTotal").text(totalC);
    $("#javaAverage").text(averageC);
    $("#javaStDev").text(stdDev);

  })

  $("#jSBtn").click(function(){
    let jSData = new Cohort();
    $("#jS-class input").each(function(){
      let emission = parseFloat($(this).val());
      jSData.emissions.push(emission);
    });
    console.log(jSData.emissions);
    let totalC = jSData.totalCarbon();
    let averageC = jSData.averageCarbon();
    let stdDev = (jSData.standardDeviation()).toFixed(2);
    $("#jSTotal").text(totalC);
    $("#jSAverage").text(averageC);
    $("#jSStDev").text(stdDev);

  })
});
