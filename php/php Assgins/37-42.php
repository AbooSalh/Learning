<?php
// $index = 10;
// while($index>0){
//     echo $index . "<br/>";
//     $index--;
// }
// // Needed Output
// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1

// $index = 0;

// while ($index <= 20) {
//     if ($index % 2 == 0) {
//         echo $index . "<br/>";
//     }

//     $index++;
// }
// for ($index = 0; $index <= 20; $index += 2) {
//     echo $index . "<br/>";
// }
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// $num = 2;
// while ($num < 520) {
//   // Your Code Here
//   if($num == 2 ){
//     $num = 1;
//   }
//   echo  $num . "<br/>";
//   $num *= 2;
//   $num += 2;
// }

// Needed Output
// 1
// 4
// 10
// 22
// 46
// 94
// 190
// 382

// $start = 10;
// $end = 0;
// $stop = 3;
// for($start;$start>=$end;$start--){
//     if($start<10){
//         echo "0" . $start . "<br/>";
//     }else{
//         echo $start . "<br/>";
//     }
//     if($start == 3){
//         break;
//     }
// }

// $start = 0;
// $mix = [1, 2, 3, "A", "B", "C", 4];

// for ($i = $start; $i < count($mix); $i++) {
//     if (is_numeric($mix[$i])) {
//         echo $mix[$i] . "<br/>";
//     } else {
//         $start++;
//     }
// }
// $money = ["Ahmed" => 100, "Sayed" => 150, "Osama" => 100, "Maher" => 250];
// foreach($money as $user => $value){
//     echo "The Name Is $user And I Need $value Pound From Him" . "<br/>";

// }
// Output
// "The Name Is Ahmed And I Need 100 Pound From Him"
// "The Name Is Sayed And I Need 150 Pound From Him"
// "The Name Is Osama And I Need 100 Pound From Him"
// "The Name Is Maher And I Need 250 Pound From Him"

// $mix = [1, 2, "A", "B", "C", 3, 4];
// $nums = 0;
// $words = 0;
// foreach($mix as $ele){
//     if(gettype($ele) == "integer"){
//         echo $ele . "<br/>";
//         $nums++;
//     }else{
//         $words++;
//     }
// }
// echo "$nums Numbers Printed <br/>";
// echo "$words Letters Letters";

// $nums = [1, 13, 12, 20, 51, 17, 30];
// foreach($nums as $num){
//     if($num % 2 == 0){
//         echo $num / 2 . "<br/>";
//     }
// }
// Output
// 6
// 10
// 15

// $help_num = 3;
// $nums = [4, 5, 6, 1, 2, 3];
// $names = ["Ahmed", "Sayed", "Osama", "Mahmoud", "Gamal"];

// for ($i = 0; $i < count($names); $i++) {

//     if ($names[$i] == "Sayed" || $names[$i] == "Osama") {

//         echo $names[$i] . "<br>";
//     }
// }

$help_num = 4;
$nums = [2, 4, 5, 6, 10];
foreach ($nums as $i => $num){
    $opposite_num = $nums[count($nums) - 1 - $i];
    $sum = $num + $opposite_num;
    echo $num . " + " . $opposite_num . " = " . $sum . "<br>";
}
