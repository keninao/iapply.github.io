<?php 
    if(ISSET($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }
        
        $jobid = $users["id"];

        $sql = "SELECT * FROM `job_posting` WHERE job_id = '$jobid'";
        $result = mysqli_query($conn, $sql);
        $num = mysqli_num_rows($result);

        $new_arr = "";
        $array = array();
        
        while($row = mysqli_fetch_assoc($result)){
            $array[] = $row;
        }

        echo json_encode($array);
    }
?>