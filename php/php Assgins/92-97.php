<?php
// date_default_timezone_set("Asia/Riyadh");
// echo date_default_timezone_get() . "<br/>";
// echo date("D, d M y - h:i:s A") . "<br/>";
// echo date("l, d F Y - h:i:s A");
date_default_timezone_set("Africa/Cairo");
echo date_default_timezone_get() . "<br/>";
$date = "2005-10-02";
echo date("Y, F , l s :i:s",strtotime("+15 hour +15 minutes +15 seconds", strtotime($date)));
