<?php
require "../../assets/php/conexao_pdo.php"; 

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $cod = $_POST['selecionado'];
    
    $sql = $pdo->prepare("SELECT * FROM dados_paciente WHERE cod_paciente = :cod");

    $sql->execute([
        'cod' => $cod
    ]);

    if ($sql -> rowCount() > 0){

        $resultado =  $sql->fetch(PDO::FETCH_ASSOC);
        
    } else {
        echo json_encode(false);
        exit;
    }
    echo json_encode($resultado, JSON_UNESCAPED_SLASHES);

    $pdo = null;
}

?>
