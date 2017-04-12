function Cohort(totalCarbon){
  this.emissions = [];
  // this.totalCarbon = totalCarbon;
}



Cohort.prototype.totalCarbon = function() {
  totalCarbon = 0;
  this.emissions.forEach(function(student){
    totalCarbon += student;
  });
  console.log(totalCarbon);
  return totalCarbon;
}
//
Cohort.prototype.averageCarbon = function() {
  var average = this.totalCarbon() / this.emissions.length
  return average;
}




$(function(){
  $("#introBtn").click(function(){
    let introData = new Cohort();
    $("#intro-class input").each(function(){
      let emission = parseFloat($(this).val());
      introData.emissions.push(emission);
    });
    console.log(introData.emissions);
    let totalC = introData.totalCarbon();
    let averageC = introData.averageCarbon();
    $("#introTotal").text(totalC);
    $("#introAverage").text(averageC);

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
    $("#javaTotal").text(totalC);
    $("#javaAverage").text(averageC);

  })
});
