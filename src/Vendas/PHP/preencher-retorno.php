<?php
require "../../assets/php/conexao_pdo.php"; 

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $cod = $_POST['selecionado'];
    
    $sql = $pdo->prepare("SELECT id, detalhes 
                            FROM retorno WHERE id_paciente = :cod");

    $sql->execute(['cod' => $cod]);

    $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
    
    if (!empty($resultado)) {
        echo json_encode($resultado, JSON_UNESCAPED_SLASHES);
    } else {
        echo json_encode(false);
    }
    
    $pdo = null;
}
?>
