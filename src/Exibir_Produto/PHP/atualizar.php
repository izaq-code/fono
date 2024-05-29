<?php
include_once("../../assets/conexao.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    if (isset($_POST['produto_id'])) {
        
        $id = $_POST['produto_id'];

        $valor = "SELECT quantidade_produto FROM cadastro_produto 
                                    WHERE cod_produto = $id";
        $resultado = $conexao->query($valor);

        if ($resultado) {
            
    if ($resultado->num_rows > 0) {
             
                $row = $resultado->fetch_assoc();
                $nova_quantidade = $row['quantidade_produto'] + 1;

               
        $sql = "UPDATE cadastro_produto SET quantidade_produto = $nova_quantidade 
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