<?php

	// Validate email
	// Filter_var() requires PHP >= 5.2.0
	if ( isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

	// Prevent header injections
  	$test = "/(content-type|bcc:|cc:|to:)/i";
 	foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
    exit;
    	}
 	}
  
	// Send email
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'Fill In Your Email';
	$subject = 'Contact request';

	$body = 'Name: '.$name."\n";
	$body .= 'Email: '.$email."\n";
	$body .= 'Message: '.$message;

	$headers = 'From: '.$name."\r\n";
	$headers .= 'Reply-To: '.$email."\r\n";

	mail($to, $subject, $body, $headers);
		
	}
	
?>