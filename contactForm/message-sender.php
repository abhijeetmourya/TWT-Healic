<?php 
    $name = $_POST['name'];
    $viewer_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sender_email = 'abhijeetmourya678@gmail.com';
    $recciver_email = "abhijeetmourya789@gmail.com";
    
    $email_subject = "New Form Submission in Healic";
    $body = "Name: $name. \n";
            "Email: $viewer_email. \n";
            "Subject: $subject. \n";
            "Message: $message. \n";

    $headers = "From: $sender_email \r\n";
    $headers = "Reply-To: $viewer_email \r\n";

    mail($recciver_email,$email_subject,$body,$headers)
    header("Location: index.html")

?>