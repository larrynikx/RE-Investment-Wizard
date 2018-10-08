init_gdp_url="data_loader.php?country=ken&indicator=NY.GDP.MKTP.CD&range=1992:2018";
init_rural_access_url="data_loader.php?country=ken&indicator=EG.ELC.ACCS.RU.ZS&range=1992:2018";
init_urban_access_url="data_loader.php?country=ken&indicator=EG.ELC.ACCS.UR.ZS&range=1992:2018";
init_reusage_url="data_loader.php?country=ken&indicator=EG.FEC.RNEW.ZS&range=1992:2018"
//init_url="http://localhost/PowerGen/testing.php"



function myFunct(url) {
  var json = null;
  $.ajax({
      
      'crossDomain': true,    
      'async': false,
      'global': false,
      'url': url,
      'dataType': "json",
      'success': function (data) {
          json = data;
      }
  });

  return json;
}


function generateGDPChartData(url) {
  var json=myFunct(url);  
  var total = Object.keys(json[1]).length;
  console.log(total);    
  var chartData = [];
  for ( counter = 0; counter < total; counter++ ) {

    var gdp=json[1][counter].value/1000000;
    var date=json[1][counter].date;
    chartData.push( {
      "date": date,
      "gdp": gdp
    } );  
  }
  return chartData;
}

function generateReUsageChartData(url){
    var json=myFunct(url);  
    var total = Object.keys(json[1]).length;
    console.log(total);    
    var chartData = [];
    for ( counter = 0; counter < total; counter++ ) {
  
      var re_value=json[1][counter].value;
      var date=json[1][counter].date;
      chartData.push( {
        "year": date,
        "value": re_value
      } );  
    }
    return chartData;    
}

function generateAccessChartData(rural_url,urban_url){
    var json_rural=myFunct(rural_url);  
    var json_urban=myFunct(urban_url);  
    
    var total_rural = Object.keys(json_rural[1]).length;
    var total_urban = Object.keys(json_urban[1]).length;    

    var chartData = [];
    var smaller = total_urban<total_rural?total_urban:total_rural;
    for ( counter = 0; counter < smaller; counter++ ) {
  
      var year=json_rural[1][counter].date;
      var rural=json_rural[1][counter].value;
      var urban=json_urban[1][counter].value;
      chartData.push( {
        "year": year,
        "rural": rural,
        "urban": urban 
      } );  
    }
    return chartData;    

}

var gdpchart = AmCharts.makeChart( "gdpchartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": generateGDPChartData(init_gdp_url),
    "valueAxes": [ {
      "color": "#000000",
      "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    "startDuration": 0,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]] Million</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "gdp",
      "precision":0
    } ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": true
    },
    "categoryField": "date",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20,
      "color": "#000000",
      "labelRotation": 45
    },
    "export": {
      "enabled": false
    },
    "chartScrollbar": {
      "scrollbarHeight": 25,
      "color": "2e2e2e",
      "autoGridCount": false
    }
  
  } );

  var accesschart = AmCharts.makeChart("accesschartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": generateAccessChartData(init_rural_access_url,init_urban_access_url),
    "valueAxes": [{
        "color": "#000000",
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
    }],
    "graphs": [{
        "balloonText": "Rural: [[category]]: <b>[[value]]%</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "valueField": "rural",
        "precision":0
    }, {
        "balloonText": "Urban: [[category]]: <b>[[value]]%</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "valueField": "urban",
        "precision":0
    }],

    "chartScrollbar": {
        "scrollbarHeight": 25,
        "color": "2e2e2e",
        "autoGridCount": false
      },
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": true
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20,
        "color": "#000000",
        "labelRotation": 45
    },
    "export": {
    	"enabled": false
     }
});

var rechart = AmCharts.makeChart("rechartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": generateReUsageChartData(init_reusage_url),
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "right"
    }],
    "graphs": [{
        "id":"g1",
        "balloonText": "[[category]]<br><b>[[value]]%</b>",
        "type": "step",
        "lineThickness": 2,
        "bullet":"square",
        "bulletAlpha":0,
        "bulletSize":4,
        "bulletBorderAlpha":0,
        "valueField": "value",
        "precision":0
    }],
    "chartScrollbar": {
        "scrollbarHeight": 25,
        "color": "2e2e2e",
        "autoGridCount": false
    },
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": true
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20,
        "color": "#000000",
        "labelRotation": 45
    },
    "export": {
        "enabled": false
     }
});

var reportchart = AmCharts.makeChart( "reportchartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": generateReportChartData(false),
    "valueAxes": [ {
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    } ],
    "startDuration": 2,
    "graphs": [ {
      "balloonText": "[[value]] ",
      "bullet": "round",
      "lineThickness": 2,
      "valueField": "value",
      "precision":0
    } ],
    "categoryField": "country",
    "export": {
      "enabled": false
    }
  } );


  function setDataSet() {

    //get range
    var daterange = document.getElementById("daterange").value;
    var arr = daterange.split('-');
    var date1=arr[0]; var year1=new Date(date1).getFullYear();
    var date2=arr[1]; var year2=new Date(date2).getFullYear();
    range=year1+":"+year2;
    //get indicators
    var gdp = "NY.GDP.MKTP.CD";
    var urban = "EG.ELC.ACCS.UR.ZS";
    var rural = "EG.ELC.ACCS.RU.ZS";
    var re_usage = "EG.FEC.RNEW.ZS";

    //get country
    var selector = document.getElementById("country");
    var country = selector.options[selector.selectedIndex].value;

 
    //construct url
    gdp_url=constructUrl(country,gdp,range);
    rural_url=constructUrl(country,rural,range);
    urban_url=constructUrl(country,urban,range)
    reusage_url=constructUrl(country,re_usage,range)
    
    changeColor(gdpchart,country);
    changeColor(accesschart,country);
    changeColor(rechart,country);

    gdpchart.dataProvider=generateGDPChartData(gdp_url);
    gdpchart.validateData();

    accesschart.dataProvider=generateAccessChartData(rural_url,urban_url);
    accesschart.validateData(); 
    
    rechart.dataProvider=generateReUsageChartData(reusage_url);
    rechart.validateData();


  }
  function updateReport(flag){

    reportchart.dataProvider=generateReportChartData(flag);
    reportchart.validateData();
  }
  function changeColor(chart,country){
    switch(country){
        case 'tz':
            chart.graphs[0].lineColor = "rgb(204, 37, 41)";
            break;
        default:
            chart.graphs[0].lineColor = "rgb(57,106,177)";
    }

  }

  function constructUrl(country,indicator,range){
    return "data_loader.php?country="+country+"&indicator="+indicator+"&range="+range;
  }


  //Analyze data
  function getAverageIndicatorValue(country,indicator,range){
    url=constructUrl(country,indicator,range);
    var json=myFunct(url);  
    var total = Object.keys(json[1]).length;  

    var sum=0;
    for ( counter = 0; counter < total; counter++ ) 
      sum=sum+json[1][counter].value;
    return sum/total;  
  }
  function getCountryScore(country){
    //get range
    var daterange = document.getElementById("daterange").value;
    var arr = daterange.split('-');
    var date1=arr[0]; var year1=new Date(date1).getFullYear();
    var date2=arr[1]; var year2=new Date(date2).getFullYear();
    range=year1+":"+year2;
    //get indicators
    var gdp = "NY.GDP.MKTP.CD";
    var urban = "EG.ELC.ACCS.UR.ZS";
    var rural = "EG.ELC.ACCS.RU.ZS";
    var re_usage = "EG.FEC.RNEW.ZS";

    gdp_score=getAverageIndicatorValue(country,gdp,range)/100000000000 * getSliderValue('gdp');
    urban_score=getAverageIndicatorValue(country,urban,range) * getSliderValue('urban');
    rural_score=getAverageIndicatorValue(country,rural,range) * getSliderValue('rural');
    re_usage_score=getAverageIndicatorValue(country,re_usage,range) * getSliderValue('re');

    return gdp_score+urban_score+rural_score+re_usage_score;
  }

  function generateReportChartData(flag){
      chartData=[];
      countries=['ken','ug','tz','eth','rwa','dji','eri','zmb'];
      if(flag){
        for(i=0;i<countries.length;i++){
            score=getCountryScore(countries[i]);
            chartData.push({
                "country": countries[i],
                "value":score
            });

            //push to database
            datatabase_url="update_db.php?country_code="+countries[i]+"&score="+score;
            myFunct(datatabase_url);
        }
    }else{
        for(i=0;i<countries.length;i++){
            score=0
            chartData.push({
                "country": countries[i],
                "value":score
            });
        }        
    }
      return chartData;
  }

  function getSliderValue(slider_id){
    var slider = document.getElementById(slider_id);
    return slider.value
  }

