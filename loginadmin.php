<?php
  if (isset($_POST)){
    $data = file_get_contents("php://input");
    $users = json_decode($data, true);

    $conn = new mysqli("localhost", "root", "", "sarap_ni_kyle");

    if ($conn->connect_error) {
      die("Connection Failed: " . $conn->connect_error);
    }

    $user = $users["user"];

    $sql = "SELECT `admin_id`, `password` FROM `admin_table` WHERE `admin_id` = '$user'";
    $result = mysqli_query($conn, $sql);

    $array = array();

    while ($row = mysqli_fetch_assoc($result)) {
      $array[] = $row;
    }

    echo json_encode($array);
  }
?>