<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = "Applicant: $name". "\r\n". "Applicant Email: $email". "\r\n". "\r\n". "Message: ".$_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Configure PHPMailer
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'panipuri3533@gmail.com';
        $mail->Password = 'fqwfqeksznfzpsbx'; // Replace with your email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set the sender and recipient
        // $mail->setFrom($email, $name);
        $mail->addAddress('sathvik.y007@gmail.com'); // Replace with the recipient's email address

        // Set email subject and body
        $mail->Subject = 'New Email from Website Form';
        $mail->Body = $message;

        // Send the email
        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Failed to send email. Error: " . $mail->ErrorInfo;
    }
}

?>
