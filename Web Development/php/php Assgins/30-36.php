<?php
// $a = 100;
// $b = 200;
// $c = 100;
// if ($b > $a && $a == $c && $a + $c == $b) {
//   echo "yes";
// }
// /*
//   Check That:
//   Variable "b" Larger Than Variable "a"
//   Variable "a" Identical To Variable "c"
//   Variable "a" Plus Variable "c" Identical To Variable "b"
// */

// echo "<br/>";
// // Test Case 1
// $a = 100;
// $b = 200;
// $c = 300;
// if ($a > $b) {
//   echo "A larger than b";
// } elseif ($a > $c) {
//   echo "C larger than A";
// } else {
//   echo "A Is Not Larger Than B Or C";
// }
// // A Is Not Larger Than B Or C

?>
<!-- <form action="" method="POST">
  <input type="text" name="user">
  <input type="submit" value="Send">
</form> -->
<?php
// $admins = ["Osama", "Ahmed", "Sayed"];
// if($_SERVER["REQUEST_METHOD"] == "POST"){
//   echo "The Request Method Is Post And Username Is ";
//   if($_POST["user"]){
//     echo $_POST["user"];
//     echo " This Username " . $_POST["user"] . " Is Admin";
//   }
// };
// echo "<br/>";
// // Input Name "Osama"

// // Needed Output
// // "The Request Method Is Post And Username Is Osama"
// // "This Username Osama Is Admin"
// $a = 30;
// $b = 20;
// $c = 10;



// // echo (($a + $b === $c) ? "A + B = C" : (($a + $c === $b) ? "A + C = B" : (($b + $c === $a) ? "B + C = A" : "The End")));
// // // Output
// // // "B + C = A"
// $name = "Osama";
// $age = 40;
// $country = "Egypt";

// $name = "Osama";
// $age = 40;
// $country = "Egypt";

// echo ($age > 18 && gettype($name) === "string" && $country === "Egypt")
//   ? "All good to go!"
//   : "Something is wrong.";


// // Needed Output
// // "The Age Is Good To Go"
// // "The Name Is Good To Go"
// // "The Country Is Good To Go"
$genre = "Hack And Slash";

// if ($genre === "RPG") {

//   echo "I Recommend Ys Games";
// } elseif ($genre === "Hack And Slash") {

//   echo "I Recommend Castlevania Games";
// } elseif ($genre === "FPS") {

//   echo "I Recommend Uncharted Games";
// } elseif ($genre === "Platform") {

//   echo "I Recommend Megaman Games";
// } elseif ($genre === "Puzzle") {

//   echo "I Recommend Megaman Games";
// } else {

//   echo "I Recommend Shadow Of Mordor And Shadow Of War";
// }
// switch ($genre) {
//   case "RPG":
//     echo "I Recommend Ys Games";
//     break;
//   case "Hack And Slash":
//     echo "I Recommend Castlevania Games";
//     break;
//   case "FPS":
//     echo "I Recommend Uncharted Games";
//     break;
//   case "Platform":
//     echo "I Recommend Megaman Games";
//     break;
//   case "Puzzle":
//     echo "I Recommend Megaman Games";
//     break;
//   default:
//     echo "I Recommend Shadow Of Mordor And Shadow Of War";
// };

// Needed Output
// "I Recommend Castlevania Games"
$num_one = 23;
$num_two = 5;
$op = "+";
$day = "Sat";

if ($day === "Sat" || $day === "Sun" || $day === "Mon") {
  echo "We Are Open All The Day";
} elseif ($day === "Tue" || $day === "Wed") {
  echo "We Are Open From 08:12";
} elseif ($day === "Thu" || $day === "Fri") {
  echo "We Are Closed";
} else {
  echo "Unknown Day";
}



?>