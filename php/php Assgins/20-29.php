<?php
// // Replace ? With Arithmetic Operators
// echo (10 * 20) + (15 % 3) + (190 + 10) - 400 ;// 0


// $a = "10";
// echo +$a;
// echo gettype(+$a);
// echo (int)$a;
// echo gettype((int)$a);
// echo (integer)$a;
// echo gettype((integer)$a);
// b();

// // // Needed Ouput
// // 10
// // "integer"
// // 10
// // "integer"
// // 10
// // "integer"

// // // For The People Who Love Searching
// // 10
// // "integer"
// // 10
// // "integer"
// $a = 10;
// $b = 20;
// echo $a <=> $b;
// // Needed Output
// // -1
// $a = 10;
// $b = 20;
// $c = 15;

// var_dump($a < $b); // True
// var_dump($c > $a); // True
// var_dump($a <= $b); // True
// var_dump($a != $b); // True
// var_dump($a != $c); // True
// var_dump($a !== $c); // True
// var_dump(gettype($a) == gettype($b)); // True
// var_dump(gettype($a) === gettype($b)); // True
// var_dump(gettype((float) $a) != gettype($b)); // True
// b();


// $points = 10;

// // Write Your Code Here
// $points++;
// $points++;
// $points++;
// echo $points; // 13

// // Write Your Code Here
// $points--;
// $points--;
// $points--;
// $points--;
// $points--;
// echo $points; // 8;
// b();


// $a = "Elzero";
// $b = "Web";
// $c = "School";

// // Method One
// // $d = $a . " " . $b . " " . $c;

// // Method Two
// // @$d .= $a;
// // $d .= " ";
// // $d .= $b;
// // $d .= " ";
// // $d .= $c;

// // Method Three
// // $d = "$a $b $c";

// // Method Four
// // $d = "{$a} {$b} {$c}";
// // echo $d; // Elzero Web School
// b();


// $a = 10;
// $b = 20;

// echo $a + $b * $a + $b + $a * $a * $a; // 10000;


// Code 1
$a = @$b or die("Custom Error");

// Code 2
$f = @file("Not_A_File")
or die("Custom Error");

// Code 3
(@include("Not_A_File"))
or die("Custom Error");
?>