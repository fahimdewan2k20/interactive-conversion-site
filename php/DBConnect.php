<?php
  function connect() {
    $conn = new mysqli("localhost", "fahim", "12345", "conversion");
    if ($conn->connect_errno) {
      die("failed to connect");
    }
    return $conn;
  }
?>
