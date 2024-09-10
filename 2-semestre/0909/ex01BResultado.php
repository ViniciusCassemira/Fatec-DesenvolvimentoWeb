<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <title>Document</title>
</head>
<body>
    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $num1 = $_POST["num1"];
            $num2 = $_POST["num2"];
            if(!empty($num1) && !empty($num2)){
                $soma = $num1 + $num2;
            }else{
                $soma = 0;
            }

            echo "<h1>Resultado</h1>";
            echo "A soma de $num1 e $num2 é $soma";
            echo "<br>";
        }
    ?>
    <a href="ex01B.php" class="button">Retornar</a>
</body>
</html>

