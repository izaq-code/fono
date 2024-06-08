<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['produto_id']) && isset($_POST['quantidade_nova'])) {
        
        $id = $_POST['produto_id'];
        $quantidade_nova = (int)$_POST['quantidade_nova'];

        $valor = "SELECT quantidade_produto FROM cadastro_produto 
                                            WHERE cod_produto = '$id'";
        $resultado = $conexao->query($valor);

        if ($resultado) {
            if ($resultado->num_rows > 0) {
                $row = $resultado->fetch_assoc();
                $quantidade_atual = $row['quantidade_produto'];
                
                $nova_quantidade = max(0, $quantidade_atual + $quantidade_nova);

                $sql = "UPDATE cadastro_produto SET quantidade_produto = $nova_quantidade 
                                                WHERE cod_produto = '$id'";

                if ($conexao->query($sql) === TRUE) {
                    echo $nova_quantidade;
                } else {
                    echo "Erro ao atualizar quantidade: " . $conexao->error;
                }
            } else {
                echo "Produto não encontrado.";
            }
        } else {
            echo "Erro ao executar a consulta: " . $conexao->error;
        }
    } else {
        echo "ID do produto ou quantidade nova não especificados.";
    }
}

?>
