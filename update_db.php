<?php

require_once('../database/meekrodb/db.class.php');
require('../validation/vendor/autoload.php');


//setup
DB::$user = 'root';
DB::$password = '';
DB::$dbName = 'investment_wizard';

//receive data
use Rakit\Validation\Validator;

//Validate incoming request
$validator = new Validator;
$validation = $validator->validate($_GET, [
    'country_code'  => 'required',
    'score' => 'required'
]);
if ($validation->fails()) {
    $errors = $validation->errors();
    echo "<pre>";
    print_r($errors->firstOfAll());
    echo "</pre>";    
    exit;
}else{
    $country_code=$_GET['country_code'];
    $score=$_GET['score'];
    
    DB::insert( 'report_data', array(
        'country_code' => $country_code,
        'score' => $score,
        'report_date' => "NOW()",
      ));    

      echo 'done!';
}
  


?>