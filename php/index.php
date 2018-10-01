<?php
    header('Content-type:text/json;charset=utf-8');
        $username=$_GET['username'];
        $password=$_GET['password'];

        $data='{username:"'.$username.'",password:"'.$password.'"}';
        echo json_encode($data);
?>

