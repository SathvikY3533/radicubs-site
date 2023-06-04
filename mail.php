<?php

$firstName = $_POST['name'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$firstname." ".$lastName."<".$email.">\r\n";

$recipient = "mannbellani1@gmail.com";
?>