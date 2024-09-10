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
        if($_SERVER["REQUEST_METHOD"] == "GET"){
            echo "<h1>Resultado</h1>";
            $num2 = $_GET["num2"];
            $num1 = $_GET["num1"];
            if(!empty($num1) && !empty($num2)){
                $soma =$num1 + $num2;
            }else{
                $soma = 0; 
            }
            echo "A soma de $num1 e $num2 é $soma";
            echo "<br>";
        }
    ?>
    <a href="ex01D.php" class="button">Retornar</a>
</body>
</html>