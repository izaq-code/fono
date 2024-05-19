<?php
// Incluindo o arquivo de conexão
include 'conexao.php';

// Consulta SQL para obter os pacientes
$query = "SELECT * FROM dados_paciente";
$resultado = $conn->query($query);

// Verificar se houve erro na execução da consulta
if (!$resultado) {
    die('Erro na consulta: ' . $conn->error);
}

// Inicializando um array para armazenar os resultados
$pacientes = array();

// Verificando se a consulta retornou resultados
if ($resultado->num_rows > 0) {
    // Iterando sobre os resultados e adicionando cada paciente ao array
    while ($linha = $resultado->fetch_assoc()) {
        $pacientes[] = $linha;
    }
} else {
    echo "Nenhum paciente encontrado.";
}

// Fechando a conexão com o banco de dados
$conn->close();

// Retornando os pacientes como JSON
header('Content-Type: application/json');
echo json_encode($pacientes);
?>
