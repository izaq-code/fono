<?php

include ('../../assets/php/conexao.php');

if (isset($_POST['descricao']) && $_POST['descricao'] !== '') {
    $vendaId = $_POST['id'];
    $descricao = $_POST['descricao'];

    $sql = "UPDATE relatorio SET descricao = '$descricao', 
                            status = 'Finalizado'
                            WHERE id_venda = $vendaId";

    if ($conexao->query($sql) === TRUE) {
        echo json_encode(array("message" => "Descrição salva com sucesso."));
    } else {
        echo json_encode(array("message" => "Erro ao salvar a descrição: " . $conexao->error));
    }
} else {
    $vendaId = $_POST['id'];

    $sql = "SELECT cp.nome_produto, cp.imagem_do_produto, cp.preco_produto, 
            DATE_FORMAT(r.data, '%d/%m/%Y') AS data, v.id, IFNULL(re.descricao, '') as descricao, IFNULL(re.status, '') as status
            FROM vendas v
            INNER JOIN retorno r ON v.id_retorno = r.id
            INNER JOIN cadastro_produto cp ON r.id_produto = cp.cod_produto
            LEFT JOIN relatorio re ON v.id = re.id_venda
            WHERE v.id = $vendaId";

    $resultado = $conexao->query($sql);

    if ($resultado->num_rows > 0) {
        $venda = $resultado->fetch_assoc();
        $venda['imagem_produto'] = '../../Exibir_Produto/Imagens_produto/' . $venda['imagem_do_produto'];
        echo json_encode($venda);
    } else {
        echo json_encode(array("message"));
    }
}
?>