<?php
  require "DBConnect.php";

  function convert($id) {
    $conn = connect();
    $sql = $conn->prepare("SELECT * FROM conversion_rate WHERE id = ?");
    $sql->bind_param("i", $id);
    $sql->execute();
    $records = $sql->get_result();
    return $records->fetch_assoc();
  }
  function getAllRates() {
    $conn = connect();
    $sql = $conn->prepare("SELECT * FROM conversion_rate");
    $sql->execute();
    $records = $sql->get_result();
    return $records;
  }
?>
