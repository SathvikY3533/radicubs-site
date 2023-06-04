<?php

$firstName = $_POST['name'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$firstName." ".$lastName."<".$email.">\r\n";

$recipient = "mannbellani1@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");


?>