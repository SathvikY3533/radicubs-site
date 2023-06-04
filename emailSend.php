<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['firstName'] + $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set the recipient email address
    $to = 'sathvik.y007@gmail.com'; // Replace with your own email address
    
    // Set the email subject
    $subject = $_POST['subject'];
    
    // Set the email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>