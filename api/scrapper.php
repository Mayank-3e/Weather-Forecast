<?php
error_reporting(0);
ini_set('max_execution_time', '100');
$city=$_GET['city'];
$city=str_replace(' ','-',$city);
$contents = file_get_contents('http://www.weather-forecast.com/locations/'.$city.'/forecasts/latest');
// $contents = file_get_contents('https://books.toscrape.com/');
// echo $contents;

$doc = new DOMDocument();
$doc->loadHTML($contents);
$xpath = new DOMXPath($doc);
$wthr = $xpath->evaluate("//span[@class='phrase']");
echo $wthr[0]->textContent;
?>