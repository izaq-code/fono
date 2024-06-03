<?php
require "../../assets/php/conexao_pdo.php"; 
// echo 'to aqui';

// header('Content-Type: application/json');

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $id = $_POST['id'];

    $sql = $pdo->prepare("SELECT id AS id, 
                        detalhes AS detalhes 
    FROM consulta where id_paciente = :id");
    
    $sql->execute([
        'id' => $id
    ]);

    $resultado = array();

    if ($sql -> rowCount() > 0){
        
        while($row = $sql->fetch(PDO::FETCH_ASSOC)) {
            $resultado[] = $row;
        }
        
    } else {
        echo json_encode(false);
        exit;
    }
    echo json_encode($resultado, JSON_UNESCAPED_SLASHES);

    $pdo = null;
}

?>
