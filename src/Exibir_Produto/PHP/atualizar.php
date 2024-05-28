<?php
include_once("../../assets/conexao.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    if (isset($_POST['cod_produto'])) {
        $id = $_POST['cod_produto'];

        $valor = "SELECT quantidade FROM cadastro_produto 
                                    WHERE cod_produto = $id";
        $resultado = $conexao->query($valor);

        if ($resultado) {
            
    if ($resultado->num_rows > 0) {
             
                $row = $resultado->fetch_assoc();
                $nova_quantidade = $row['quantidade'] + 1;

               
        $sql = "UPDATE produtos SET quantidade = $nova_quantidade 
                                WHERE cod_produto = $id";


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
                echo "ID do produto não especificado.";
    }
}
?>