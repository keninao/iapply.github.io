<?php 
    if(isset($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }
        
        $id = $users["id"];

        $result = mysqli_query($conn, "SELECT `darkmode` FROM `preferences_table` WHERE `applicant_id` = '$id';");

        $array = array();
        
        while($row = mysqli_fetch_assoc($result)){
        $array[] = $row;
        }
        
        $theme = $array[0];
        echo json_encode($theme);
    }
?>