<?php
include ('../../assets/php/conexao.php');

if (isset($_POST['id'])) {
    $id = $_POST['id'];

    $sql = "SELECT * FROM dados_paciente WHERE cod_paciente = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param('i', $id);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $paciente = $resultado->fetch_assoc();
        echo json_encode(['paciente' => $paciente]);
    } else {
        echo json_encode(['mensagem' => 'Paciente não encontrado']);
    }

    $stmt->close();
} else {
    echo json_encode(['mensagem' => 'ID do paciente não fornecido']);
}

$conexao->close();
?>
