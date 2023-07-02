<?php 
    $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
    error_reporting(0);
    if($conn->connect_error){
        die("Connection Failed: ". $conn->connect_error);
    }
    
    $sql = "SELECT `department_title`, `department_name` FROM `department_table`";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);

    $new_arr = array();
    $array = array();
    
    while($row = mysqli_fetch_assoc($result)){
      $array[] = $row;
    }
    
    for($x = 0; $x < $num; $x++){
        $new_arr[$x] = $array[$x]["department_title"]."&".$array[$x]["department_name"];
    }

    echo json_encode($new_arr);
?>