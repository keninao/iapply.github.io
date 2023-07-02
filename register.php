<?php 
    if(isset($_POST)){
        $data = file_get_contents("php://input");
        $users = json_decode($data, true);

        $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");
        
        if($conn->connect_error){
            die("Connection Failed: ". $conn->connect_error);
        }
        
        $username = $users["username"];
        $password = $users["password"];
        $lastname = $users["lastname"];
        $suffix = $users["suffix"];
        $firstname = $users["firstname"];
        $middlename = $users["middlename"];
        $email = $users["email"];
        $birthdate = $users["birthdate"];
        $gender = $users["gender"];
        $status = $users["status"];

        $new_sql = mysqli_query($conn, "INSERT INTO `personal_information`( `username`, `password`, `lastname`, `suffix`, `firstname`, `middlename`, `email`, `birthdate`, `gender`, `civil_status`) VALUES ('$username','$password','$lastname','$suffix','$firstname','$middlename','$email','$birthdate','$gender','$status')");
        $result = mysqli_query($conn, "SELECT `applicant_id` FROM `personal_information` WHERE `username`='$username' AND `password`='$password' AND `lastname`='$lastname' AND `firstname`='$firstname' AND `middlename`='$middlename'");

        while($row = mysqli_fetch_assoc($result)){
            $array[] = $row;
        }

        $id = $array[0]["applicant_id"];
        
        mysqli_query($conn, "INSERT INTO `birthplace`(`applicant_id`) VALUES ('$id');");
        mysqli_query($conn, "INSERT INTO `contact_table`(`applicant_id`) VALUES ('$id');");
        mysqli_query($conn, "INSERT INTO `identification_table`(`applicant_id`) VALUES ('$id');");
        mysqli_query($conn, "INSERT INTO `preferences_table`(`applicant_id`) VALUES ('$id');");
        echo json_encode($result);
    }
?>