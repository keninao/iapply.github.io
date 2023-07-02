<?php
    if(isset($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }

        $num = 0;
        $username = $users["username"];
        
        $sql = "SELECT `applicant_id`, `username`, `password` FROM `personal_information` WHERE `username` = '$username'";
        $result = mysqli_query($conn, $sql);
        $num = mysqli_num_rows($result);
        
        if($num > 0){
            echo json_encode(false);
        }else{
            echo json_encode(true);
        }
    }
?>