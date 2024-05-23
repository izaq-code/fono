<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fono";

// Criar conexão
$conexao = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}
?>
