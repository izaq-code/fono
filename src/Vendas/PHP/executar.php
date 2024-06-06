<?php
 
require '../../assets/php/conexao_pdo.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $retorno = $_POST['retorno'];
    $detalhes = $_POST['detalhes'];
    $venda = $_POST['vendaa'];
    $prod = $_POST['prod'];

    if($venda == false){
        $aumenta_estoque = $pdo->prepare("UPDATE cadastro_produto SET
                                        quantidade_produto = quantidade_produto + 1
                                        WHERE cod_produto = :id");

        $aumenta_estoque->execute([
        'id' => $prod
        ]);
    }

    $venda = $venda ? 1 : 0;

    // Inserção na tabela de datas selecionadas
    $sql = $pdo->prepare("INSERT INTO vendas (detalhes, venda_efetuada, id_retorno) VALUES (:detalhes, :venda, :retorno)");
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
