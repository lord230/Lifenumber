<?php

// Retrieving POST data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$birthdate = $_POST['birthdate'];

var_dump($firstName, $lastName);

// Database Connection
$conn = new mysqli('localhost', 'root', '', 'add');

// Check the connection
if ($conn->connect_error) {
    die('Connection error: ' . $conn->connect_error);
} else {
    // Prepare and execute the SQL query
    $stmt = $conn->prepare("INSERT INTO regged (firstName, lastName, birthdate) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstName, $lastName, $birthdate);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
        echo "New records created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close the statement and connection
    $stmt->close();
    $conn->close();
}

?>
