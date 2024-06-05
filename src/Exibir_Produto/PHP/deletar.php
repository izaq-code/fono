<?php
    include_once("../../assets/php/conexao.php");

    $cod = $_POST['cod'];

    $deletar = "DELETE FROM cadastro_produto WHERE cod_produto = '$cod'";

    if($conexao->query($deletar)=== TRUE){
        echo "Produto deletado com sucesso!";
    }else{
        echo "Não foi possível deletar o produto!" .$conexao->error;
    }
?>