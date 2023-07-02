<?php 
    $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
    error_reporting(0);
    if($conn->connect_error){
        die("Connection Failed: ". $conn->connect_error);
    }
    
    $sql = "SELECT * FROM `rank_table`";
    $result = mysqli_query($conn, $sql);

    $array = array();
    
    while($row = mysqli_fetch_assoc($result)){
      $array[] = $row;
    }
    
    echo json_encode($array);
?>