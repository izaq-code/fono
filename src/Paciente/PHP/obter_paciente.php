<?php

include ('../../assets/conexao.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $cod_paciente = $_POST["selecionado"];


    $sql = mysqli_query($conexao, "SELECT nome_proprietario, cpf_proprietario, fabricante, marca,
                     modelo, motorizacao, combustivel, cambio, cor, placa,
                     chassi, hodometro, sinistro,orcamento, pecas_danificadas, status_veiculo FROM carro
                     WHERE cod_paciente = '$cod_paciente';
    ");


    $resultado = array();

    while ($row = mysqli_fetch_assoc($sql)) {
        $resultado[] = $row; 
    }

    echo json_encode($resultado, JSON_UNESCAPED_SLASHES);
}
$conexao->close();
?>