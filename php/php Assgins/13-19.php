<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Elzero Courses">
    <?php $elzero = "Elzero Courses" ?>
    <title>Welcome To Elzero <?= $elzero ?></title>
</head>

<body>
    <h1><?= $elzero ?></h1>
    <p>Here In <?= $elzero ?> We Provide Front-End And Back-End Courses</p>
    <hr>
    <div><?= $elzero ?> Is The What You Need.</div>
    <footer>All Right Reserved To <?= $elzero ?></footer>
</body>

</html>
<!-- ========================================================================= -->
<?php
$name = "elzero";
$$name = "Web";
echo $$name;
echo "${$name}";
echo ${$name};
echo "Web";
echo $elzero;
// =========================================================================
$a = 200;
$b = &$a;
$a = 100;

echo $b; // 100

// =========================================================================
echo __DIR__;
echo $_SERVER['SERVER_NAME'];
echo PHP_OS_FAMILY;
// "C:/xampp/htdocs"
// "localhost"
// "C:\WINDOWS"
// "C:/xampp/apache/bin/openssl.cnf"
// =========================================================================
/*
  echo
  if
  break
  function
  else 
  return 
  
*/
// =========================================================================
echo __LINE__;
echo __file__;
echo __dir__;

?>