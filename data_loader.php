
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require('lib/api_requests/vendor/autoload.php');
require('lib/validation/vendor/autoload.php');

use GuzzleHttp\Client;
use Rakit\Validation\Validator;

//Validate incoming request
$validator = new Validator;
$validation = $validator->validate($_GET, [
    'country'  => 'required',
    'indicator' => 'required',
    'range' => 'required'
]);
  
if ($validation->fails()) {
    $errors = $validation->errors();
    echo "<pre>";
    print_r($errors->firstOfAll());
    echo "</pre>";    
    exit;
} else {
    //On validation success, get data from WB API & dump
    $indicator=$_GET['indicator'];
    $country=$_GET['country'];
    $range=$_GET['range'];
    
    $client = new GuzzleHttp\Client(['base_uri' => 'http://api.worldbank.org/v2/countries/'.$country.'/indicators/']);
    $response=$client->request('GET', $indicator, [
        'query' => [
                    'date' => $range,
                    'format' => 'json'
                   ]
    ]);
    $code = $response->getStatusCode(); 
    if($code=200){
        $data=($response->getBody());
        print $data;
    }else{
        echo 'request failed';
    }
  }

   
   
?>