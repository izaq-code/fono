<?php

include ('../../assets/php/conexao.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['vendedor_id']) && isset($_GET['data_venda'])) {
    
    $vendedorId = $_GET['vendedor_id'];
    $dataVenda = $_GET['data_venda'];

   
    $diretorio = "../../Exibir_Produto/Imagens_produto/";
  
    $sql = "SELECT cp.nome_produto, cp.imagem_do_produto, cp.preco_produto
            FROM vendas v
            INNER JOIN retorno r ON v.id_retorno = r.id
            INNER JOIN cadastro_produto cp ON r.id_produto = cp.cod_produto
            WHERE r.id_fono = $vendedorId AND r.data = '$dataVenda'";

    $resultado = $conexao->query($sql);

    $produtos = array();

    if ($resultado->num_rows > 0) {
       
        while ($row = $resultado->fetch_assoc()) {
            $imagemProduto = $diretorio . $row['imagem_do_produto'];
            // Verificar se o arquivo de imagem existe no diretório
            if (file_exists($imagemProduto)) {
                $produto = array(
                    'nome_produto' => $row['nome_produto'],
                    'imagem_do_produto' => $imagemProduto, 
                    'preco_produto' => $row['preco_produto']
                );
                array_push($produtos, $produto);
            } else {
                // Se a imagem não existe, adicione uma mensagem ao array de produtos
                $mensagem = "A imagem do produto '{$row['nome_produto']}' não foi encontrada.";
                array_push($produtos, array("message" => $mensagem));
            }
        }
       
        echo json_encode($produtos);
    } else {
        echo json_encode(array("message" => "Nenhum produto vendido por este vendedor nesta data."));
    }
} else {
    echo json_encode(array("message" => "Parâmetros inválidos."));
}

$conexao->close();
?>
