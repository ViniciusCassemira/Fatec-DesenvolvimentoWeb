<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <title>Document</title>
</head>
<body>
    <h1>Exercício 01 de PHP - Processamento POST na mesma página PHP</h1>

    <form id="form" action="#" method="post">
        <input type="text" name="num1" placeholder="Número 1"/>
        <input type="text" name="num2" placeholder="Número 2"/>
        <input type="submit" name="enviar" value="Enviar"/>
        <input type="submit" name="limpar" value="Limpar"/>
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $num1 = $_POST["num1"];
            $num2 = $_POST["num2"];
            if(!empty($num1) && !empty($num2)){
                $soma = $num1 + $num2;
            }else{
                $soma = 0;
            }
            
            echo "<br>";
            echo "<hr>";
            echo "<h1>Resultado</h1>";
            echo "A soma de $num1 e $num2 é $soma";
            echo "<br>";
        }
    ?>
    <a href="ex01.php" class="button">Retornar</a>
</body>
</html>