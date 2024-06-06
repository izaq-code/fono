<?php
include ('../../assets/php/conexao.php');
// Consulta SQL com INNER JOIN para obter os dados das vendas
$sql = "SELECT v.id AS id_venda,
       r.data AS data_venda, 
       f.nome AS nome_vendedor, 
FROM vendas v
INNER JOIN retorno r ON v.id_retorno = r.id
INNER JOIN fonoaudiologo f ON r.id_fono = f.id
INNER JOIN cadastro_produto p ON r.id_produto = p.cod_produto;

";

$resultado = $conexao->query($sql);

if ($resultado->num_rows > 0) {           
    // Array para armazenar os dados das vendas
    $vendas = array();

    while ($row = $resultado->fetch_assoc()) {
        // Adicionar cada venda ao array
        $venda = array(
            'data_venda' => $row['data_venda'],
            'nome_vendedor' => $row['nome_vendedor'],
            'nome_produto' => $row['nome_produto']
        );
        array_push($vendas, $venda);
    }

    echo json_encode($vendas);
} else {
    echo "0 resultados";
}

$conexao->close();
?>