<?php
include_once ("../../assets/php/conexao.php");

$sql = "SELECT cod_produto, imagem_do_produto, nome_produto, preco_produto, quantidade_produto, categoria_produto, descricao_produto
                FROM cadastro_produto";

$resultado = $conexao->query($sql);

$produtos = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $produtos[] = array(
            'cod' => $row['cod_produto'],
            'nome' => $row['nome_produto'],
            'imagem' => $row['imagem_do_produto'],
            'preco' => $row['preco_produto'],
            'quantidade' => $row['quantidade_produto'],
            'categoria' =>$row['categoria_produto'],
            'descricao' =>$row['descricao_produto']
        );
    }
} else {
    echo "Nenhum produto encontrado.";
}

echo json_encode($produtos);

?>