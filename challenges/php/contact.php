<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="../css/php_form.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="../css/contact.css" media="screen" title="no title" charset="utf-8">
</head>
<body>
    <?php include("nav.php"); ?>
    <!-- <h1 class="title">
        Contact
    </h1> -->
    <!-- <form class="contact_form" action="index.html" method="post">
        <input type="color" name="name" value="#444444">
        <input type="text" name="name" value="">
        <input type="button" name="name" value="Submit">
    </form> -->
    <div class="contact_form">
        <h3>Give us your info</h3>
        <form type="post">
            <input type="text" name="name" placeholder="Your Namew ***" />
            <input type="email" name="email" placeholder="Email Waddress ***" />
            <textarea name="comments" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
        </form>
        <h6>*** We might sell your info</h6>
    </div>
