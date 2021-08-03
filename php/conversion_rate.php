<?php

require "DBFunctions.php";

if(isset($_GET["id"]) && isset($_GET["rate"])) {
  if (update($_GET["id"], $_GET["rate"])) {
    $msg["status"] = "success";
  }
  else {
    $msg["status"] = "failed";
  }
  echo json_encode($msg);
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