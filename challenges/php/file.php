<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Example</title>
    <link rel="stylesheet" href="../css/php_form.css" media="screen" title="no title" charset="utf-8">
</head>
<body>
    <?php
        $filestuff = $_POST['filestuff'];
        $h = fopen("file.txt", "w");
        fwrite($h, $filestuff);
        fclose($h);
     ?>
    <?php include("nav.php"); ?>
    <h1 class="title">
        File Example
    </h1>
    <?php
        $text = file_get_contents('file.txt');
     ?>
     <h2><?php echo $text; ?></h2>
</body>
</html>
