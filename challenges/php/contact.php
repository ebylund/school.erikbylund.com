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

    <div class="contact_form">
        <h3>Give us your info</h3>
        <form action="submit.php" method="post">
            <input type="text" name="name" placeholder="Your Namew ***" required/>
            <input type="email" name="email" placeholder="Email Waddress ***" required />
            <textarea name="comments" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
        </form>
        <h6>*** We might sell your info</h6>
    </div>
</body>
</html>
