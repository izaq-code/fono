<?php
// Configurações de conexão com o banco de dados
$host = 'localhost'; // Host do banco de dados (normalmente 'localhost')
$user = 'root'; // Nome de usuário do banco de dados
$senha = ''; // Senha do banco de dados
$banco = 'Fono'; // Nome do banco de dados

// Estabelecer a conexão com o banco de dados
$conn = new mysqli($host, $user, $senha, $banco);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die('Erro na conexão com o banco de dados: ' . $conn->connect_error);
}

// Definir o conjunto de caracteres para UTF-8
$conn->set_charset('utf8');
?>
