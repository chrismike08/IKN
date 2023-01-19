<?php

	$to = 'chris.mike.jaringan@gmail.com';
	$subject = $_POST['subject'];
	$message =
		'Name : '.$_POST['name']."\n".
		'Email : '.$_POST['email']."\n".
		'Phone : '.$_POST['phone']."\n".
		'Message : '.$_POST['message']."\n"
	;

	if (@mail($to, $subject, $message)) {
		echo 'sent';
	} else{
		echo 'fail';
	}
?>