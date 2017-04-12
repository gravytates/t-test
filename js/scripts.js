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
  ;
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
    let sumSD = introData.standardDeviation();
    $("#introTotal").text(totalC);
    $("#introAverage").text(averageC);

  })

  // $("#javaBtn").click(function(){
  //   let javaData = new Cohort();
  //   $("#java-class input").each(function(){
  //     let emission = parseFloat($(this).val());
  //     javaData.emissions.push(emission);
  //   });
  //   console.log(javaData.emissions);
  //   let totalC = javaData.totalCarbon();
  //   let averageC = javaData.averageCarbon();
  //   $("#javaTotal").text(totalC);
  //   $("#javaAverage").text(averageC);
  //
  // })
  //
  // $("#jSBtn").click(function(){
  //   let jSData = new Cohort();
  //   $("#jS-class input").each(function(){
  //     let emission = parseFloat($(this).val());
  //     jSData.emissions.push(emission);
  //   });
  //   console.log(jSData.emissions);
  //   let totalC = jSData.totalCarbon();
  //   let averageC = jSData.averageCarbon();
  //   $("#jSTotal").text(totalC);
  //   $("#jSAverage").text(averageC);
  //
  // })
});
