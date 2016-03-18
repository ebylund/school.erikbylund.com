<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Example</title>
    <link rel="stylesheet" href="../css/php_form.css" media="screen" title="no title" charset="utf-8">
</head>
<body>
    <?php include("nav.php"); ?>

    <h1 class="title">
        File Example
    </h1>
    <form action="file.php" method="post" class"file_form">
        <textarea name="filestuff" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Send" />
    </form>
</body>
</html>
