<?php 
    $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
    
    if($conn->connect_error){
        die("Connection Failed: ". $conn->connect_error);
    }
    
    $sql = "SELECT * FROM `job_posting`";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);

    $new_arr = "";
    $array = array();
    
    while($row = mysqli_fetch_assoc($result)){
      $array[] = $row;
    }
    echo json_encode($array);
?>