<?php
include ('../../assets/php/conexao.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    $sql = "DELETE FROM dados_paciente WHERE cod_paciente=$id";

    if ($conexao->query($sql) === TRUE) {
        echo json_encode(['mensagem' => 'Paciente excluído com sucesso']);
    } else {
        echo json_encode(['mensagem' => 'Erro ao excluir paciente: ' . $conexao->error]);
    }
}
?>
