<?php
require "../../assets/php/conexao_pdo.php"; 

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $cod = $_POST['selecionado'];
    
    $sql = $pdo->prepare("SELECT horarios_disponiveis.horario AS hora,
                                 horarios_disponiveis.id AS cod,
                                 fonoaudiologo.id AS id
                            FROM horarios_disponiveis 
                           INNER JOIN fonoaudiologo ON fonoaudiologo.id = horarios_disponiveis.fono_id
                           WHERE fonoaudiologo.id = :cod");

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
