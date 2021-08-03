<?php

require "DBFunctions.php";

if(isset($_GET["id"])) {
  echo json_encode(convert($_GET["id"]));
  return;
}

$results = getAllRates();
$rates[] = $results->fetch_assoc();
while($result =  $results->fetch_assoc()) {
  array_push($rates, $result);
}
echo json_encode($rates);
return;

?>