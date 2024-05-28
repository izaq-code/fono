<?php
require "conexao.php"; 

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $cod = $_POST['selecionado'];
    $id = $_POST['fono'];
    
    $sql = $pdo->prepare("SELECT datas.data 'data'
    FROM conexao_h_d inner join datas  ON
    datas.id = conexao_h_d.id_d inner join fonoaudiologo ON 
    fonoaudiologo.id = datas.fono_id
    WHERE fonoaudiologo.id = :id AND datas.id = :cod");

    $sql->execute([
        'id' => $id,
        'cod' => $cod
    ]);

    if ($sql->rowCount() > 0){
        $resultado = $sql->fetchAll(PDO::FETCH_ASSOC); // Usando fetchAll() para garantir que $resultado seja um array
    } else {
        echo json_encode(false); // Envolve false em um array
        exit;
    }

    echo json_encode($resultado, JSON_UNESCAPED_SLASHES);

    $pdo = null;
}
?>
