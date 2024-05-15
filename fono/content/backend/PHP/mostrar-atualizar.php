<?php

include_once("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $filtro = $_POST["selecionado"];

    
    $sql = mysqli_query($conexao, "SELECT nome_paciente, cpf_paciente, rg_paciente, data_nascimento, nome_responsavel, telefone_paciente, carteira_convenio, nacionalidade_paciente, contato_emergencia, cpf_responsavel, cep_paciente, estado_civil, sexo, tipo_sanguineo, numero_responsavel 
    FROM dados_paciente WHERE cod_paciente = '$filtro';
    ");
    
    $resultado = array(); // Array para armazenar os resultados

    while($row = mysqli_fetch_assoc($sql)) {
        $resultado[] = $row; // Adiciona cada linha ao array de resultados
    }

    echo json_encode($resultado, JSON_UNESCAPED_SLASHES);
}
$conexao->close();
?>