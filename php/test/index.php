<?php
$dsn = "mysql:host=localhost;dbname=test";
$user = "root";
$pass = "";
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);
try {
    $db = new PDO($dsn, $user, $pass,$options);
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    echo "connected successfully";
} catch (PDOException $e) {
    echo "failed to connect" . $e->getMessage();
}
for ($i=0; $i <=500 ; $i++) { 
    # code...
    $stmt = $db->prepare("INSERT INTO `tbl` (`id`) VALUES ('')");
    $stmt->execute(); 
}