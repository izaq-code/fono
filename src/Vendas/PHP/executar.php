<?php
 
require '../../assets/php/conexao_pdo.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $retorno = $_POST['retorno'];
    $detalhes = $_POST['detalhes'];
    $venda = $_POST['venda'];

    // Inserção na tabela de datas selecionadas
    $sql = $pdo->prepare("INSERT INTO vendas (detalhes, venda_efetuada, id_retorno) VALUES (:datalhes, :venda, :retorno)");
    $sql->execute([
        'detalhes' => $detalhes,
        'venda' => $venda,
        'retorno' => $retorno
    ]);


    if($sql -> rowCount() > 0) {
        echo true;
    } else {
        echo false;
    }
}
?>
