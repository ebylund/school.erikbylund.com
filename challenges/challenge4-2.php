<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>table stuff</title>
    <link rel="stylesheet" href="css/table.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:500' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
    <table>
        <thead>
            <tr class="row01 row">
                <th class="cell cell01">Name</th>
                <th class="cell cell02">Address</th>
                <th class="cell cell03">City</th>
                <th class="cell cell04">State</th>
                <th class="cell cell05">Zip</th>
            </tr>
        </thead>
        <tbody>

            <?php $first_names =  json_decode(file_get_contents("data/firstNamesOutput.txt"))?>
            <?php $last_names =  json_decode(file_get_contents("data/lastNamesOutput.txt"))?>
            <?php $building_numbers =  json_decode(file_get_contents("data/buildingNumberOutput.txt"))?>
            <?php $street_names =  json_decode(file_get_contents("data/streetNameOutput.txt"))?>
            <?php $street_suffixes =  json_decode(file_get_contents("data/streetSuffixOutput.txt"))?>
            <?php $cities =  json_decode(file_get_contents("data/cityOutput.txt"))?>
            <?php $states =  json_decode(file_get_contents("data/statesOutput.txt"))?>
            <?php $postal_codes =  json_decode(file_get_contents("data/postcodeOutput.txt"))?>

            <?php $name = "Erik Kole Bylund"?>
            <?php for ($i = 0; $i <= 49; $i++) : ?>
                <tr class="row<?php echo $i; ?> row">
                <td data-label="Name" class="cell cell<?php echo $i; ?>"><?php echo $first_names[$i]." ".$last_names[$i];?></td>
                <td data-label="Address" class="cell cell<?php echo $i; ?>"><?php echo $building_numbers[$i] . " " . $street_names[$i] . " " . $street_suffixes[$i]?></td>
                <td data-label="City" class="cell cell<?php echo $i; ?>"><?php echo $cities[$i]?></td>
                <td data-label="State" class="cell cell<?php echo $i; ?>"><?php echo $states[$i]?></td>
                <td data-label="Zip" class="cell cell<?php echo $i; ?>"><?php echo $postal_codes[$i]?></td>
            </tr>
        <?php endfor; ?>

        </tbody>
    </table>
</body>
</html>
