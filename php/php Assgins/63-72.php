<pre>
<?php
// $friends = [
//     "AG" => "Ahmed Gamal",
//     "OM" => "Osama Mohamed",
//     "MG" => "Mahmoud Gamal",
//     "AS" => "Ahmed Samy",
//     "FA" => "Farid Ahmed",
//     "SM" => "Sayed Mohamed"
// ];
// $friends = array_chunk($friends, 2, true);
// print_r($friends);

// // Output
// // Array
// // (
// //   [0] => Array
// //     (
// //       [ag] => Ahmed Gamal
// //       [om] => Osama Mohamed
// //     )
// //   [1] => Array
// //     (
// //       [mg] => Mahmoud Gamal
// //       [as] => Ahmed Samy
// //     )
// //   [2] => Array
// //     (
// //       [fa] => Farid Ahmed
// //       [sm] => Sayed Mohamed
// //     )
// // )

// $codes = ["H", "C", "J"];
// $means = ["HTML", "CSS", "JavaScript"];
// print_r(array_combine($codes, $means));
// // Output
// // Array
// // (
// //   [h] => HTML
// //   [c] => CSS
// //   [j] => JavaScript
// // )

// $friends = [
//     "Ahmed Gamal" => "AG",
//     "Osama Mohamed" => "OM",
//     "Mahmoud Gamal" => "MG",
//     "Ahmed Samy" => "AS"
// ];
// print_r(
//     array_change_key_case(
//         array_flip(
//             array_reverse($friends)
//         )
//     )
// )
// // Output
// // Array
// // (
// //   [as] => Ahmed Samy
// //   [mg] => Mahmoud Gamal
// //   [om] => Osama Mohamed
// //   [ag] => Ahmed Gamal
// // )
// $nums = [10, 20, 30];
// // array_reduce($nums,function($num1,$num2) {
// //     $sum = [$num2];
// //     $sum += $num1;
// //     print_r ($sum);
// // });
// echo array_reduce($nums, function ($carry, $item) {
//     return $carry + $item ;
// });
// echo "<br/>";
// echo array_sum($nums);
// // // Output
// // 60
// // 60
// $nums = [5, 10, 20, 5, 30, 40];
// $sum = array_sum(array_filter($nums, function ($num) {
//     return $num != 5;
// }));
// echo  $sum;
// // Output
// // 100
// $chars = ["A", "B", "C", "D", "E"];
// $char = "@@";
// $zero = 0;
// print_r(array_pad($chars, (count($chars) + count($chars)), str_replace($char,"","@")))
// // Output
// // Array
// // (
// //   [0] => A
// //   [1] => B
// //   [2] => C
// //   [3] => D
// //   [4] => E
// //   [5] => @
// //   [6] => @
// //   [7] => @
// //   [8] => @
// //   [9] => @
// // )


// $names = ["Osama", "Ahmed", "Sayed", "Mahmoud", "Ali"];

// // Write Line Here
// // Write Line Here
// next($names);
// next($names);
// echo current($names) . "<br>"; // "Sayed"

// // Write Line Here
// end($names);
// echo current($names) . "<br>"; // "Ali"

// // Write Line Here
// reset($names);
// echo current($names) . "<br>"; // "Osama"

// // Write Line Here
// // Write Line Here
// end($names);
// prev($names);
// echo current($names) . "<br>"; // "Mahmoud"
// $chars = ["A", "B", "C"];
// array_push($chars,"D");
// array_merge($chars, ["D"]);
// array_splice($chars,count($chars),0,"D");
// $chars[] = "D";
// print_r($chars);
// // Output
// // Array
// // (
// //   [0] => A
// //   [1] => B
// //   [2] => C
// //   [3] => D
// // )
// $nums = [1, 2, 3, 4, 5, 6];

// print_r(array_slice($nums,-5,-2));
// // Output
// // Array
// // (
// //   [0] => 2
// //   [1] => 3
// //   [2] => 4
// // )
// $mix = [1, 2, 3, "A", "B", "C", 7, 8, 9];
// $nums = [4, 5, 6];

// // Write Your Code Here
// array_splice($mix, 3, 3);
// $mix = array_merge($mix, $nums);
// sort($mix);
// print_r($mix);

// // Output
// // Array
// // (
// //   [0] => 1
// //   [1] => 2
// //   [2] => 3
// //   [3] => 4
// //   [4] => 5
// //   [5] => 6
// //   [6] => 7
// //   [7] => 8
// //   [8] => 9
// // )

// $arr = ["A", "B", "C", "D", "E"];
// function calculate(array $array): int
// {
//     $count = 0;
//     foreach ($array as $element) {
//         $count++;
//     }

//     return $count;
// }
// echo calculate($arr)
// // Output
// // 5


// $nums = [11, 2, 10, 7, 20, 50];
// echo array_reduce($nums,function($acc,$ele){
//     return $acc + $ele;
// });

// // Output
// // 100
// $nums = [10, 100, -20, 50, 30];
// function maximum(...$n)
// {
//     $r=0;
//     foreach ($n as $key => $value) {
//         # code...

//         if ($value>$r) {
//         $r=$value;
//         }

//     }
//     return $r;

// }
// function minimum(...$n)
// {
//     $r = 0;
//     foreach ($n as $key => $value) {
//         # code...

//         if ($value < $r) {
//             $r = $value;
//         }
//     }
//     return $r;
// }
// echo maximum(...$nums);
// echo minimum(...$nums);
// // Output
// // 100
// $chars = ["o", "r", "e", "z", "l", "E"];

// // Create an empty string
// $string = "";

// // Iterate over the array and add each character to the string
// foreach ($chars as $char) {
//     $string .= $char;
// }

// // Output the string
// echo strrev($string);
// $mix = ["A", "C", "B", 1, 100, 3, 2, 6, 5, 7];
// function oddnumber($n)
// {
//     $r=[];
//     foreach ($n as $key => $value) {
//         # code...
//         if (!is_string($value)) {
//             if ($value % 2 !== 0) {
//                 $r[] = $value;
//             }
//         }

        
//     }
//     sort($r);
//     print_r($r);
    
// }
// oddnumber($mix)

$nums = [1, 2, 3, 4, 5, 6];

// Output
// Every Time The Array Elements Will Be Shuffled
// for ($i=0; $i <count($nums) ; $i++) { 
//     $rondo=rand(0,count($nums)-1);
//     $tem= $nums[$i];
//     $nums[$i]=$nums[$rondo];
//     $nums[$rondo]=$tem;
// }
// print_r($nums);
// Example 1
// Array
// (
//   [0] => 5
//   [1] => 1
//   [2] => 6
//   [3] => 2
//   [4] => 4
//   [5] => 3
// )

// // Example 2
// Array
// (
//   [0] => 4
//   [1] => 3
//   [2] => 6
//   [3] => 1
//   [4] => 5
//   [5] => 2
// )\

$title = "E&z\$r0 W\$b Sch00&";
$title = "E&z\$r0 W\$b Sch00&";


$replace = array("&", "\$", "0", "\$", "00&");
$to = array("l", "e", "o", "e", "ool");

$result = str_replace($replace, $to, $title,$co);
echo $result;
echo $co;
// Output
// "Elzero Web School"
// 7
?>
</pre>