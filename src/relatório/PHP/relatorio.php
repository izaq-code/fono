<?php
include ('../../assets/php/conexao.php');

$relatorio = $_POST['relatorio'];

    $sql = "INSERT INTO relatorio (relatorio) 
            VALUES '$relatorio'";

$conexao->close();
?>
