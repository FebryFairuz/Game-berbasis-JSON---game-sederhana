<?php
	$file = $_REQUEST['file'];
	$tempat = "images/Canvas-Bg/".$file;
	header("content-type: images/Canvas-Bg/");	
	header("content-length: filesize($tempat)");
	header("content-disposition: attachment; filename=$file");
	readfile($file);
?>