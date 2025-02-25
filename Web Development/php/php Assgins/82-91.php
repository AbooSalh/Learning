<?php
$all_drivers =
    disk_total_space("C:")
    + disk_total_space("F:")
    + disk_total_space("D:")
    + disk_total_space("G:")
    + disk_total_space("E:");
echo round(($all_drivers / 1024 / 1024 / 1024 / 1024), 2) . " Terabyte";
$filename = 'G:\Media\serieses\Family.Guy.S01E07.EgyDead.CoM.mp4';
$filesize = filesize($filename);
echo "Size in Megabyte is " . round($filesize / 1024 / 1024) . "<br>";
echo "Size in kilobyte is " . round($filesize / 1024);
if (!file_exists("Programming")) {
    mkdir("Programming", 0711);
    mkdir("Programming\PHP", 0711);
} else {
    rmdir("Programming/PHP");
    rmdir("Programming");
    echo "Directory Programming/PHP Removed" . "<br/>";
    echo "Directory Programming Removed";
}
// Test Cases
function change_permissions($filename){
    if (!is_file($filename)) {
        return "This Is Directory And Only Files Allowed";
    }
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    if ($extension !== 'txt') {
        return "File Extension Is Not Txt";
    }
    $mode = 0700;
    if (!chmod($filename, $mode)) {
        return false;
    }
    return "Permissions Changed";
}
echo change_permissions("Elzero") . "<br>"; // This Is Directory And Only Files Allowed
echo change_permissions("Work.docx") . "<br>"; // File Extension Is Not Txt
echo change_permissions("Result.txt") . "<br>"; // Permissions Changed
echo basename(__FILE__) . "<br>";
echo pathinfo(__file__)['basename'] . "<br>";
echo pathinfo(__FILE__, PATHINFO_BASENAME) . "<br>";
$handle = fopen("elzero.txt", "r");
echo fgets($handle);
echo fgets($handle);
echo fread($handle,16);
echo fread($handle,10);
$data = fread($handle, filesize('elzero.txt'));
$lines = explode("\n", $data);
echo $lines[0] . $lines[1];
$lines = file('elzero.txt');
echo $lines[0] . $lines[1];
$file = fopen('elzero.txt', 'r+');
$line = fgets($file);
$line = str_replace('Osamaa', 'Elzero', $line);
fseek($file, 0, SEEK_SET);
fwrite($file, $line);
fclose($file);