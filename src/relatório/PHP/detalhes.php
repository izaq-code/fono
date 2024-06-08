<?php

include ('../../assets/php/conexao.php');

if (isset($_POST['descricao']) && $_POST['descricao'] !== '') {
    $vendaId = $_POST['id'];
    $descricao = $_POST['descricao'];

    $sql_status = "SELECT status FROM relatorio WHERE id_venda = $vendaId";
    $resultado_status = $conexao->query($sql_status);

    if ($resultado_status->num_rows > 0) {
        $row = $resultado_status->fetch_assoc();
        $status = $row['status'];

        if ($status === 'Em análise' || $status === 'Finalizado') {
            $sql_update = "UPDATE relatorio 
                           SET descricao = '$descricao'";

            if ($status === 'Em análise') {
                $sql_update .= ", status = 'Finalizado'";
            }
            $sql_update .= " WHERE id_venda = $vendaId";

            if ($conexao->query($sql_update) === TRUE) {
                echo json_encode(array("message" => "Descrição atualizada com sucesso."));
            } else {
                echo json_encode(array("message" => "Erro ao atualizar a descrição: " . $conexao->error));
            }
        } else {
            echo json_encode(array("message" => "A descrição só pode ser atualizada quando o status estiver 'Finalizado' ou 'Em análise'."));
        }
    } else {

        $sql_insert = "INSERT INTO relatorio (id_venda, descricao, status) 
                              VALUES ($vendaId, '$descricao', 'Finalizado')";

        if ($conexao->query($sql_insert) === TRUE) {
            echo json_encode(array("message" => "Descrição adicionada com sucesso."));
        } else {
            echo json_encode(array("message" => "Erro ao adicionar a descrição: " . $conexao->error));
        }
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
        echo json_encode(array("message" => "Venda não encontrada."));
    }
}
?>  