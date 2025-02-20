<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <title>Resultado</title>
</head>
    <body>
        <h1>Exercício 02 de PHP - Processamento POST em outra página PHP</h1>

        <form id="form" action="ex01BResultado.php" method="post">
            <input type="text" name="num1" placeholder="Número 1"/>
            <input type="text" name="num2" placeholder="Número 2"/>
            <input type="submit" name="enviar" value="Enviar"/>
            <input type="submit" name="limpar" value="Limpar"/>
        </form>
    </body>
</html>