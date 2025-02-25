<?php
echo (int) (15.2 + 14.7) + (10.5 + 10.5); // 50
echo "<br/>";
echo gettype((int) ((15.2 + 14.7) + (10.5 + 10.5))); // Integer 
// =================================================================
echo "<br/>";
echo gettype(100);
echo "<br/>";
echo var_dump(100);
echo "<br/>";
echo get_debug_type(100);
// =================================================================
echo "<br/>";
echo "Hello \"Elzero\" \\\\ \"\"\" We Love \"$\$PHP\"";

// Needed Output
// Hello "Elzero" \\ """ We Love "$$PHP"
// =================================================================
echo "<br/>";
echo nl2br("We \n Love \n Elzero \n Web \n School");
// Needed Output
// We
// Love
// Elzero
// Web
// School

// ==================================================================
echo "<br/>";
echo nl2br(<<<'now'
"Hello "'Elzero'"
We Love $Programming$
Languages Specially "PHP""
now);
// Needed Output
// Hello "'Elzero'"
// We Love $Programming$
// Languages Specially "PHP"
// ==================================================================
echo "<br/>";
$something = "Programming";

echo <<<code
        Hello \PHP\
        We Love $something
        code;

// [1] Fix The Error
// [2] Remove 2 Characters To Get The Output

// Needed Output
// Hello \PHP\ We Love Programming
// ================================================================
echo "<br/>";

echo (int)"Hello PHP";
echo '<br>';
echo gettype((int)"Hello PHP");

// Needed Output
// 1
// integer
// =================================================================
echo "<br/>";
echo "<pre>";
print_r([
    "FrontEnd" => [
        0 => "Html",
        1 > "CSS",
        "JS" => [
            "Vuejs" => [
                2 => "v2",
                3 => "v3"
            ],
            0 => "reactjs",
            1 => "svelte"
        ]
    ],
    "BackEnd" => [
        0 => "PHP",
        1 => "MYSQL",
        2 => "security",
    ],
    0 => "Git",
    1 => "github",
    "Testing" => [
        0 => "Unit testing",
        1 => "End To End",
        2 => "integration"
    ]
]);
echo "</pre>";
