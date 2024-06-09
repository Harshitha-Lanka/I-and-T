<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$dropdown = $_POST['dropdown'];
$comments = $_POST['comments'];

// Connect to the database
$conn = mysqli_connect('localhost', 'root', '', 'event_management');

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO event_registrations (Name, Email, Address, City, State, Zip, Phone, Event, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Correct the bind_param method and the type specifiers
    $stmt->bind_param("sssssssss", $name, $email, $address, $city, $state, $zip, $phone, $dropdown, $comments);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration successful";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and the connection
    $stmt->close();
    $conn->close();
}
?>
