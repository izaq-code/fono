<?php

require 'conexao.php'; // Arquivo com a conexão ao banco de dados
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $senha = $_POST['senha'];
    
    $insert = $pdo->prepare("INSERT INTO usuario (email, name, senha) VALUES (:email, :name, :senha)");

    $insert->execute([
        'email' => $email,
        'name' => $name,
        'senha' => $senha
    ]);

    if($insert -> rowCount() > 0) {
        echo true;
    } else {
        echo false;
    }

    
}
?>
