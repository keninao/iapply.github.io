<?php
    if(ISSET($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }
        
        $jtitle = $users["jtitle"];
        $jrank = $users["jrank"];
        $jdep = $users["jdep"];
        $jhstart = $users["jhstart"];
        $jhdead = $users["jhdead"];
        $jdesc = $users["jdesc"];
        $quali = $users["jobquali"];
        $grade = $users["jobgrade"];

        $jdesc = str_replace("'", '"', $jdesc);

        mysqli_query($conn, "INSERT INTO `job_posting`(`position_title`, `rank`, `department`, `hiring_start`, `deadline`, `details`) VALUES ('$jtitle','$jrank','$jdep','$jhstart','$jhdead','$jdesc')");
        $result = mysqli_query($conn, "SELECT `job_id` FROM `job_posting` WHERE `position_title`= '$jtitle' AND `rank`= '$jrank' AND `department` = '$jdep'");

        while($row = mysqli_fetch_assoc($result)){
            $array[] = $row;
        }

        $jobid = $array[0]["job_id"];
        $new_sql2 = "INSERT INTO `qualification_table`(`job_id`, `qualifications`, `grade`) VALUES ('$jobid','$quali','$grade')";

        $result = mysqli_query($conn, $new_sql2);
        echo json_encode($result);
    }
?>