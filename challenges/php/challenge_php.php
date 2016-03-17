<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Php form</title>
    <link rel="stylesheet" href="../css/php_form.css" media="screen" title="no title" charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Raleway:300' rel='stylesheet' type='text/css'>
</head>
<body>
    <?php
        include('nav.php');
    ?>
    <div class="wrapper">
        <h2>Html Canval Element</h2>
        <h5>Go ahead, try painting on it</h5>
    </div>

    <div id="paint">
        <canvas id="myCanvas"></canvas>
    </div>
    <!-- <div class="canvas_wrapper">
        <canvas id="canvas" width="200" height="200"></canvas>
    </div> -->
    <script src="../js/canvas.js" charset="utf-8"></script>
    <script src="../js/canvas_paint.js" charset="utf-8"></script>
</body>
</html>
