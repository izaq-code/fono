<?php
include ('../../assets/php/conexao.php');


$sql = "SELECT id, nome FROM fonoaudiologo";

$resultado = $conexao->query($sql);

if ($resultado->num_rows > 0) {
    $vendedores = array();
    while ($row = $resultado->fetch_assoc()) {
        $vendedores[] = array(
            'id' => $row['id'],
            'nome' => $row['nome']
        );
    }
    echo json_encode($vendedores);
} else {
    echo json_encode(array());
}

$conexao->close();
?>
