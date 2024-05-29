<?php

include ('../../assets/php/conexao.php');

// Verifique se o ID do paciente foi enviado via POST
if (isset($_POST['id'])) {
    // Obtenha o ID do paciente enviado via POST
    $id = $_POST['id'];

    // Consulta SQL para selecionar o paciente com base no ID
    $sql = "SELECT * FROM dados_paciente WHERE cod_paciente = ?";
    
    // Prepare a consulta SQL
    $stmt = $conexao->prepare($sql);
    
    // Vincule o parâmetro do ID à consulta SQL
    $stmt->bind_param('i', $id);
    
    // Execute a consulta
    $stmt->execute();
    
    // Obtenha o resultado da consulta
    $resultado = $stmt->get_result();
    
    // Verifique se o paciente foi encontrado
    if ($resultado->num_rows > 0) {
        // Obtenha os dados do paciente como um array associativo
        $paciente = $resultado->fetch_assoc();
        
        // Retorne os dados do paciente como JSON
        echo json_encode(['paciente' => $paciente]);
    } else {
        // Se o paciente não foi encontrado, retorne uma mensagem de erro
        echo json_encode(['mensagem' => 'Paciente não encontrado']);
    }
} else {
    // Se o ID do paciente não foi fornecido, retorne uma mensagem de erro
    echo json_encode(['mensagem' => 'ID do paciente não fornecido']);
}

// Feche a conexão com o banco de dados
$conexao->close();
?>