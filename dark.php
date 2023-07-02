<?php 
    if(isset($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }
        
        $id = $users["id"];
        $theme = $users["theme"];

        $result = mysqli_query($conn, "UPDATE `preferences_table` SET`darkmode`='$theme' WHERE `applicant_id`='$id';");
        echo json_encode($theme);
    }
?>