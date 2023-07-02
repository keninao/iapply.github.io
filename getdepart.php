<?php 
    $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
    error_reporting(0);
    if($conn->connect_error){
        die("Connection Failed: ". $conn->connect_error);
    }
    
    $sql = "SELECT `department` FROM `job_posting`";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);

    $new_arr = "";
    $new_arr2= "";
    $array = array();
    
    while($row = mysqli_fetch_assoc($result)){
      $array[] = $row;
    }

    for($count = 0; $count < $num; $count++){
      if($count == $num-1){
        $new_arr .= implode(" ", $array[$count]);
      }else{
        $new_arr .= implode(" ", $array[$count])."-";
      }
    }
    
    $arr = array_unique(explode("-", $new_arr));

    for($x = 0; $x < count($array); $x++){
      if($arr[$x] != null){
        $new_arr2 .= $arr[$x] . "-";
      }
    }
    
    echo json_encode($new_arr2);
?>