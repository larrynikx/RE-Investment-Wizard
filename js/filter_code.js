
//datepicker

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'right'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      setDataSet();
    });
  });

  //update slider value
function updateSliderValue(src,dest){
  var slider = document.getElementById(src);
  var output = document.getElementById(dest);
  output.innerHTML = slider.value
  slider.oninput = function() {
    output.innerHTML = this.value;
  }  
}

updateSliderValue("gdp","gdp_value");
updateSliderValue("urban","urban_value");
updateSliderValue("rural","rural_value");
updateSliderValue("re","re_value");
