


<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Renewable Energy Investment Wizard</title>



  <!--Bootstrap jQuery Multiselect dependencies-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/flatly/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>

  <!--Font awesome-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous">

  <!--Date Range Picker Dependencies-->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />


  <!-- Custom styling-->
  <link rel="stylesheet" href="styles/styles.css">


</head>

<body>
<div class="loader"></div>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar navbar-dark static-top" style="background-color: #657677;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fas fa-fire fa-fw fa-lg"></i> Renewable Energy Investment Wizard</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->

  <div class="container-fluid">
    <br>
    <div class="row">
      <!-- Filter Block Main-->

      <div class="col-sm-3">
        <form action="index.php" method="post">
          <!--Filter Block : Countries-->
          <div class="card">
            <div class="card-header"><i class="fas fa-globe-africa fa-fw fa-lg"></i><b>Countries</b></div>
            <div class="card-body">
              <p>
                <select id="country" onchange="setDataSet()" name="countries" class="selectpicker" data-live-search="true"
                  data-width="100%">
                  <option value="ken">Kenya</option>
                  <option value="ug">Uganda</option>
                  <option value="tz">Tanzania</option>
                  <option value="eth">Ethiopia</option>
                  <option value="rwa">Rwanda</option>
                  <option value="dji">Djibouti</option>
                  <option value="eri">Eritrea</option>
                  <option value="zmb">Zambia</option>
                </select>
              </p>
            </div>
          </div>

          <!--Filter Block : Date Range-->
          <div class="card">
            <div class="card-header"><i class="fas fa-calendar fa-fw fa-lg"></i><b>Time Range</b> </div>
            <div class="card-body">
              <p>
                <input id="daterange" type="text" class="form-control" name="daterange" value="01/01/1992 - 01/15/2018"
                  onchange="setDataSet()" </p> </div> </div> <!--Filter Block : Weights-->
                <div class="card">
                  <div class="card-header"><i class="fas fa-weight fa-fw fa-lg"></i><b>WB Development Indicator Weights</b></div>
                  <div class="card-body" style="overflow:scroll; height:290px;">
                    <p id="gdp_id">Gross Domestic Product PPP: USD
                      <div class="slidecontainer">
                        <input name="gdp_slider" type="range" min="0.1" max="1.0" value="0.7" step="0.05" class="slider"
                          id="gdp">
                        <p>Value: <span id="gdp_value"></span></p>
                      </div>
                    </p>
                    <p id="urban_id">Access to Electricity: Urban
                      <div class="slidecontainer">
                        <input name="urban_slider" type="range" min="0.1" max="1.0" value="0.3" step="0.05" class="slider"
                          id="urban">
                        <p>Value: <span id="urban_value"></span></p>
                      </div>
                    </p>
                    <p id="rural_id">Access to Electricity: Rural
                      <div class="slidecontainer">
                        <input name="rural_slider" type="range" min="0.1" max="1.0" value="0.5" step="0.05" class="slider"
                          id="rural">
                        <p>Value: <span id="rural_value"></span></p>
                      </div>
                    </p>
                    <p id="usage_id">Renewable Energy Consumption: kWh
                      <div class="slidecontainer">
                        <input name="re_slider" type="range" min="0.1" max="1.0" value="0.9" step="0.05" class="slider"
                          id="re">
                        <p>Value: <span id="re_value"></span></p>
                      </div>
                    </p>
                  </div>
                </div>

                <!--Filter Block : Button-->
                <div class="card">
                  <div class="card-body">

                    <button type="submit" name="submit" value="submit" class="btn btn-dark btn-block"><i class="fas fa-chart-pie fa-fw fa-lg fa-align-left"></i>
                    Analyze Data & Generate Report
                    </button>

                  </div>
                </div>
        </form>
      </div>

      <!-- Data Block-->
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-6">
            <h6>Gross Domestic Product: Purchasing Power Parity (USD)</h6>
            <div id="gdpchartdiv" class="chart_class">

            </div>
          </div>
          <div class="col-sm-6">
          <h6>Access to Electricity: Urban & Rural (% of Population)</h6>
            <div id="accesschartdiv" class="chart_class">

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h6>Renewable Energy Consumption: (% of Total Energy Consumption)</h6>
            <div id="rechartdiv" class="chart_class">

            </div>
          </div>
          <div class="col-sm-6">
          <h6>Report  (Country Score)</h6>
            <div id="reportchartdiv" class="chart_class">
            
            </div>   
          </div>
        </div>        
      </div>

    </div>

  </div>
  <!-- AM Charts -->
  <script>
    $(window).on('load',function(){
     $('.loader').fadeOut();
    });
  </script>
  <script src="vendor/amcharts/amcharts.js"></script>
  <script src="https://www.amcharts.com/lib/3/radar.js"></script>
  <script src="vendor/amcharts/serial.js"></script>
  <script src="vendor/amcharts/themes/black.js"></script>
  <script src="vendor/amcharts/themes/light.js"></script>



  <script src="js/filter_code.js"></script>
  <script src="js/graph_render.js"></script>


</body>

</html>

<?php
  if(isset($_POST['submit'])){
    echo '<script type="text/javascript">',
     'updateReport(true);',
     '</script>';
  }
?>