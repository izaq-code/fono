<?php

include ('../../assets/php/conexao.php');

if (isset($_POST['descricao']) && $_POST['descricao'] !== '') {
    $vendaId = $_POST['id'];
    $descricao = $_POST['descricao'];
    
    // Verifica se o status da venda é 'Finalizado'
    $sql_check_status = "SELECT status FROM relatorio WHERE id_venda = $vendaId";
    $result_check_status = $conexao->query($sql_check_status);
    
    if ($result_check_status->num_rows > 0) {
        $row = $result_check_status->fetch_assoc();
        $status = $row['status'];
        
        if ($status === 'Finalizado') {
            // Se o status for 'Finalizado', atualiza a descrição
            $sql = "UPDATE relatorio SET descricao = '$descricao' WHERE id_venda = $vendaId";
            
            if ($conexao->query($sql) === TRUE) {
                echo json_encode(array("message" => "Descrição atualizada com sucesso."));
            } else {
                echo json_encode(array("message" => "Erro ao atualizar a descrição: " . $conexao->error));
            }
        } else {
            echo json_encode(array("message" => "A descrição só pode ser atualizada quando o status estiver 'Finalizado'."));
        }
    } else {
        echo json_encode(array("message" => "Status da venda não encontrado."));
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
