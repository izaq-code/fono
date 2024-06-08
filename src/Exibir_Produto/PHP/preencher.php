<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $buscar_produto = "SELECT cod_produto, nome_produto, preco_produto, categoria_produto, descricao_produto 
                        FROM cadastro_produto
                        WHERE cod_produto = '$id'";

    $resultado = mysqli_query($conexao, $buscar_produto);
    $produto = mysqli_fetch_assoc($resultado);

    echo json_encode($produto);
}
$conexao->close();
?>
