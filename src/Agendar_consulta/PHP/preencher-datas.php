<?php
require "conexao.php"; 

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $cod = $_POST['selecionado'];
    
    $sql = $pdo->prepare("SELECT datas.data 'data'
    FROM datas inner join conexao_h_d ON
    datas.id = conexao_h_d.id_d WHERE datas.id = :cod");

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
