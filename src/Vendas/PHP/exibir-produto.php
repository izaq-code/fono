<?php
include_once ("../../assets/php/conexao.php");

$id = $_POST['selecionado'];

$sql = "SELECT cadastro_produto.cod_produto, cadastro_produto.imagem_do_produto, 
            cadastro_produto.nome_produto, cadastro_produto.preco_produto, cadastro_produto.quantidade_produto
                FROM cadastro_produto INNER JOIN retorno 
                on cadastro_produto.cod_produto = retorno.id_produto 
                where retorno.id = $id";

$resultado = $conexao->query($sql);

$produtos = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $produtos[] = array(
            'cod' => $row['cod_produto'],
            'nome' => $row['nome_produto'],
            'imagem' => $row['imagem_do_produto'],
            'preco' => $row['preco_produto'],
            'quantidade' => $row['quantidade_produto']
        );
    }
} else {
    echo "Nenhum produto encontrado.";
}

echo json_encode($produtos);

?>